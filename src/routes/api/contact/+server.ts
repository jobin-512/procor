import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { sendEmail, generateContactEmailHtml, generateAutoReplyHtml } from '$lib/server/email';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const data = await request.json();
		const { name, email, company, phone, subject, message, employees } = data;

		if (!name || !email || !message) {
			return json({ error: 'Missing required fields' }, { status: 400 });
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return json({ error: 'Invalid email address' }, { status: 400 });
		}

		const subjectMap: Record<string, string> = {
			general: 'General Inquiry',
			sales: 'Sales Inquiry',
			support: 'Support Request',
			partnership: 'Partnership Opportunity'
		};

		const emailHtml = generateContactEmailHtml({
			name,
			email,
			company: company || undefined,
			phone: phone || undefined,
			subject: subject ? subjectMap[subject] || subject : `Contact from ${name}`,
			message: employees ? `Company Size: ${employees}\n\n${message}` : message
		});

		const notificationSent = await sendEmail({
			to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER || 'info@procorhrms.com',
			subject: `[PROCOR] New Contact Form Submission from ${name}`,
			html: emailHtml,
			replyTo: email
		});

		if (!notificationSent) {
			console.error('Failed to send notification email');
		}

		const autoReplyHtml = generateAutoReplyHtml('contact', { name });
		await sendEmail({
			to: email,
			subject: 'We received your message | PROCOR',
			html: autoReplyHtml
		});

		return json({ success: true, message: 'Message sent successfully' });
	} catch (error) {
		console.error('Contact form error:', error);
		return json({ error: 'Failed to send message' }, { status: 500 });
	}
};
