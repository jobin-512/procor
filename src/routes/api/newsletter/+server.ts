import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const data = await request.json();
		const { email } = data;

		if (!email) {
			return json({ error: 'Email is required' }, { status: 400 });
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return json({ error: 'Invalid email address' }, { status: 400 });
		}

		console.log(`Newsletter signup: ${email}`);

		return json({ success: true, message: 'Successfully subscribed to newsletter' });
	} catch (error) {
		console.error('Newsletter signup error:', error);
		return json({ error: 'Failed to subscribe' }, { status: 500 });
	}
};
