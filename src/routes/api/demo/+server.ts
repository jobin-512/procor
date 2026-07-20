import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { sendEmail, generateDemoEmailHtml, generateAutoReplyHtml } from '$lib/server/email';
import 'dotenv/config';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const data = await request.json();
		const { name, email, company, phone } = data;

		if (!name || !email) {
			return json({ error: 'Missing required fields' }, { status: 400 });
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return json({ error: 'Invalid email address' }, { status: 400 });
		}

		const emailHtml = generateDemoEmailHtml({
			name,
			email,
			company: company || undefined,
			phone: phone || undefined
		});

		const notificationSent = await sendEmail({
			to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER || 'info@procorhrms.com',
			subject: `[PROCOR] New Demo Request from ${name}`,
			html: emailHtml,
			replyTo: email
		});

		if (!notificationSent) {
			console.error('Failed to send notification email');
		}

		const autoReplyHtml = generateAutoReplyHtml('demo', { name });
		await sendEmail({
			to: email,
			subject: 'Your Demo Request is Confirmed | PROCOR',
			html: autoReplyHtml
		});

		return json({ success: true, message: 'Demo request submitted successfully' });
	} catch (error) {
		console.error('Demo form error:', error);
		return json({ error: 'Failed to submit demo request' }, { status: 500 });
	}
};
