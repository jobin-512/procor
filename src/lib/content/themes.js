/* Per-page accent theming — inspired by the reference site's per-page color identity.
   Home keeps brand blue; each route owns one accent; module pages auto-derive
   from their own icon color (MODULES[k].c, "r g b").
   Accent shape: { hex, rgb, soft } where rgb is "r g b" for rgb()/alpha use. */

import { MODULES } from '$lib/content/modules.js';

export function rgbToHex(rgb) {
	const [r, g, b] = rgb
		.trim()
		.split(/\s+/)
		.map((n) => Math.max(0, Math.min(255, Number(n) | 0)));
	const to = (n) => n.toString(16).padStart(2, '0');
	return `#${to(r)}${to(g)}${to(b)}`;
}

export function hexToRgb(hex) {
	const h = hex.replace('#', '');
	const v = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
	const n = parseInt(v, 16);
	return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
}

export function makeAccent(hex) {
	const rgb = hexToRgb(hex);
	return { hex, rgb, soft: `rgb(${rgb} / 0.12)` };
}

export function moduleTheme(slug) {
	const m = MODULES[slug];
	const rgb = m?.c ?? '37 59 218';
	return { hex: rgbToHex(rgb), rgb, soft: `rgb(${rgb} / 0.12)` };
}

/* Route → accent hex. Secondary used only where the reference pairs two
   colors on one page (contact = blue + rose). */
export const ROUTE_THEMES = {
	home: { accent: '#253BDA' },
	platform: { accent: '#3B5BFF' },
	compliance: { accent: '#10B981' },
	implementation: { accent: '#06B6D4' },
	industries: { accent: '#10B981' },
	integrations: { accent: '#6366F1' },
	security: { accent: '#38BDF8' },
	company: { accent: '#3B5BFF' },
	faq: { accent: '#3B5BFF' },
	contact: { accent: '#3B5BFF', secondary: '#F43F5E' }
};

export function routeTheme(name) {
	const t = ROUTE_THEMES[name] ?? ROUTE_THEMES.home;
	return {
		accent: makeAccent(t.accent),
		secondary: t.secondary ? makeAccent(t.secondary) : null
	};
}

/* Resolve a URL pathname to its page theme. Module pages auto-derive from
   their own icon color; unknown/legal pages fall back to brand blue. */
export function themeForPath(pathname = '/') {
	const parts = pathname.split('/').filter(Boolean);
	if (parts.length === 0) return routeTheme('home');
	if (parts[0] === 'modules' && parts[1]) {
		return { accent: moduleTheme(parts[1]), secondary: null };
	}
	const key = parts[0];
	if (ROUTE_THEMES[key]) return routeTheme(key);
	return routeTheme('home');
}

/* Shared gradient-text span + badge dot styles driven by an accent. */
export function accentGradient(accent, via = null) {
	const mid = via ?? accent.hex;
	return `background: linear-gradient(90deg, ${accent.hex}, ${mid}); -webkit-background-clip: text; background-clip: text; color: transparent;`;
}
