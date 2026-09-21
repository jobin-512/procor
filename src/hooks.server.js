import { redirect } from '@sveltejs/kit';

/* Legacy marketing URLs → new IA. Matches with or without trailing slash. */
/** @type {Record<string, string>} */
const REDIRECTS = {
	'/features': '/platform/',
	'/solutions': '/industries/',
	'/about': '/company/',
	'/demo': '/contact/',
	'/cookie': '/cookies/',
	'/sla': '/security/'
};

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	const normalized = event.url.pathname.replace(/\/+$/, '') || '/';
	const target = REDIRECTS[normalized];
	if (target) {
		redirect(301, target);
	}
	return resolve(event);
};
