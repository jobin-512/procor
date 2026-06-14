import { type ClassValue, clsx } from 'clsx';

/**
 * Unwrap Svelte's class state so `cn` always receives plain values.
 */
function unstate(v: any): any {
	if (v && typeof v === 'object' && '$$typeof' in v) return undefined; // Svelte state proxy
	return v;
}

/**
 * Tailwind class-name utility (shadcn/ui convention).
 * Joins arrays, objects, strings and null-coalesces via clsx.
 */
export function cn(...inputs: ClassValue[]): string {
	// unwrap any Svelte reactive proxies first
	const cleaned = inputs.map(unstate).filter(Boolean);
	return clsx(cleaned) as string;
}
