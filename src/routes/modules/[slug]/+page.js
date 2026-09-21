import { error } from '@sveltejs/kit';
import { MODULES } from '$lib/content/modules.js';

export function load({ params }) {
	const { slug } = params;
	if (!MODULES[slug]) {
		error(404, 'Module not found');
	}
	return { slug };
}
