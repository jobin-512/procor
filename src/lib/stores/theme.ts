import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

function createThemeStore() {
	const { subscribe, set, update } = writable<Theme>('dark');

	if (typeof window !== 'undefined') {
		const saved = localStorage.getItem('theme') as Theme | null;
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const initial = saved || (prefersDark ? 'dark' : 'light');
		set(initial);
		document.documentElement.classList.add(initial);
	}

	return {
		subscribe,
		set,
		toggle: () => update((theme) => {
			const newTheme = theme === 'dark' ? 'light' : 'dark';
			if (typeof window !== 'undefined') {
				document.documentElement.classList.remove(theme);
				document.documentElement.classList.add(newTheme);
				localStorage.setItem('theme', newTheme);
			}
			return newTheme;
		}),
		setTheme: (theme: Theme) => {
			if (typeof window !== 'undefined') {
				const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
				document.documentElement.classList.remove(current);
				document.documentElement.classList.add(theme);
				localStorage.setItem('theme', theme);
			}
			set(theme);
		}
	};
}

export const theme = createThemeStore();