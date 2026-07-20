import nodemailer from 'nodemailer';
import 'dotenv/config';

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS
	}
});

interface EmailOptions {
	to: string | string[];
	subject: string;
	html: string;
	replyTo?: string;
}

export async function sendEmail({ to, subject, html, replyTo }: EmailOptions): Promise<boolean> {
	try {
		await transporter.sendMail({
			from: process.env.SMTP_FROM || process.env.SMTP_USER,
			to: Array.isArray(to) ? to.join(', ') : to,
			subject,
			html,
			replyTo
		});
		return true;
	} catch (error) {
		console.error('Email sending failed:', error);
		return false;
	}
}

export function generateContactEmailHtml(data: {
	name: string;
	email: string;
	company?: string;
	phone?: string;
	subject?: string;
	message: string;
}): string {
	return `
		<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0f172a; border-radius: 16px;">
			<h1 style="color: #38bdf8; margin-bottom: 24px; font-size: 24px;">New Contact Form Submission</h1>
			
			<div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; margin-bottom: 16px;">
				<p style="color: #94a3b8; margin: 0 0 4px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Name</p>
				<p style="color: #fff; margin: 0; font-size: 16px;">${data.name}</p>
			</div>
			
			<div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; margin-bottom: 16px;">
				<p style="color: #94a3b8; margin: 0 0 4px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</p>
				<p style="color: #fff; margin: 0; font-size: 16px;"><a href="mailto:${data.email}" style="color: #38bdf8; text-decoration: none;">${data.email}</a></p>
			</div>
			
			${data.company ? `
			<div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; margin-bottom: 16px;">
				<p style="color: #94a3b8; margin: 0 0 4px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Company</p>
				<p style="color: #fff; margin: 0; font-size: 16px;">${data.company}</p>
			</div>
			` : ''}
			
			${data.phone ? `
			<div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; margin-bottom: 16px;">
				<p style="color: #94a3b8; margin: 0 0 4px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Phone</p>
				<p style="color: #fff; margin: 0; font-size: 16px;">${data.phone}</p>
			</div>
			` : ''}
			
			${data.subject ? `
			<div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; margin-bottom: 16px;">
				<p style="color: #94a3b8; margin: 0 0 4px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Subject</p>
				<p style="color: #fff; margin: 0; font-size: 16px;">${data.subject}</p>
			</div>
			` : ''}
			
			<div style="background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 12px; padding: 20px;">
				<p style="color: #94a3b8; margin: 0 0 4px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Message</p>
				<p style="color: #fff; margin: 0; font-size: 16px; white-space: pre-wrap;">${data.message}</p>
			</div>
			
			<p style="color: #64748b; font-size: 12px; margin-top: 24px; text-align: center;">
				This message was sent via the contact form on procor.io
			</p>
		</div>
	`;
}

export function generateDemoEmailHtml(data: {
	name: string;
	email: string;
	company?: string;
	phone?: string;
}): string {
	return `
		<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0f172a; border-radius: 16px;">
			<h1 style="color: #f59e0b; margin-bottom: 24px; font-size: 24px;">New Demo Request</h1>
			
			<div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; margin-bottom: 16px;">
				<p style="color: #94a3b8; margin: 0 0 4px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Name</p>
				<p style="color: #fff; margin: 0; font-size: 16px;">${data.name}</p>
			</div>
			
			<div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; margin-bottom: 16px;">
				<p style="color: #94a3b8; margin: 0 0 4px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</p>
				<p style="color: #fff; margin: 0; font-size: 16px;"><a href="mailto:${data.email}" style="color: #f59e0b; text-decoration: none;">${data.email}</a></p>
			</div>
			
			${data.company ? `
			<div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; margin-bottom: 16px;">
				<p style="color: #94a3b8; margin: 0 0 4px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Company</p>
				<p style="color: #fff; margin: 0; font-size: 16px;">${data.company}</p>
			</div>
			` : ''}
			
			${data.phone ? `
			<div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; margin-bottom: 16px;">
				<p style="color: #94a3b8; margin: 0 0 4px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Phone</p>
				<p style="color: #fff; margin: 0; font-size: 16px;">${data.phone}</p>
			</div>
			` : ''}
			
			<div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: 12px; padding: 20px; text-align: center;">
				<p style="color: #f59e0b; margin: 0; font-size: 16px; font-weight: 600;">Action Required: Schedule a demo call with this prospect</p>
			</div>
			
			<p style="color: #64748b; font-size: 12px; margin-top: 24px; text-align: center;">
				This request was submitted via the demo form on procor.io
			</p>
		</div>
	`;
}

export function generateAutoReplyHtml(type: 'contact' | 'demo', data: { name: string }): string {
	const content = type === 'contact' 
		? {
				title: 'We received your message',
				message: `Hi ${data.name},<br><br>Thank you for reaching out to PROCOR! We've received your message and will get back to you within 24 hours.<br><br>In the meantime, feel free to explore our <a href="https://procor.io/features" style="color: #38bdf8;">features page</a> or check out our <a href="https://procor.io/demo" style="color: #38bdf8;">interactive demo</a>.`,
				color: '#38bdf8'
			}
		: {
				title: 'Your demo request is confirmed',
				message: `Hi ${data.name},<br><br>Thank you for requesting a demo of PROCOR! Our team will reach out within 24 hours to schedule your personalized demo.<br><br>In the meantime, you can:<br>• Explore our <a href="https://procor.io/features" style="color: #f59e0b;">features</a><br>• Read our <a href="https://procor.io/about" style="color: #f59e0b;">customer success stories</a><br>• Check out our <a href="https://procor.io/solutions" style="color: #f59e0b;">solutions</a>`,
				color: '#f59e0b'
			};
	
	return `
		<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px;">
			<div style="text-align: center; margin-bottom: 32px;">
				<h1 style="color: #fff; font-size: 28px; margin: 0;">PROCOR</h1>
				<p style="color: #94a3b8; margin: 4px 0 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.2em;">HRMS Platform</p>
			</div>
			
			<div style="background: rgba(255,255,255,0.05); border-radius: 16px; padding: 32px; text-align: center;">
				<h2 style="color: ${content.color}; margin: 0 0 16px 0; font-size: 24px;">${content.title}</h2>
				<p style="color: #e2e8f0; margin: 0; font-size: 16px; line-height: 1.7;">${content.message}</p>
			</div>
			
			<div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1); text-align: center;">
				<p style="color: #64748b; margin: 0 0 12px 0; font-size: 14px;">Best regards,<br><span style="color: #fff; font-weight: 600;">The PROCOR Team</span></p>
				<p style="color: #64748b; margin: 0; font-size: 12px;">
					<a href="https://procor.io" style="color: #64748b; text-decoration: none;">procor.io</a>
				</p>
			</div>
		</div>
	`;
}
