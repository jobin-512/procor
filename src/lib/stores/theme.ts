import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

const KEY = 'procor-theme';

function createThemeStore() {
	const { subscribe, set, update } = writable<Theme>('light');

	if (typeof window !== 'undefined') {
		const saved = localStorage.getItem(KEY) as Theme | null;
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const initial = saved || (prefersDark ? 'dark' : 'light');
		set(initial);
		document.documentElement.classList.toggle('dark', initial === 'dark');
	}

	return {
		subscribe,
		set,
		toggle: () => update((theme) => {
			const newTheme = theme === 'dark' ? 'light' : 'dark';
			if (typeof window !== 'undefined') {
				document.documentElement.classList.toggle('dark', newTheme === 'dark');
				localStorage.setItem(KEY, newTheme);
			}
			return newTheme;
		}),
		setTheme: (theme: Theme) => {
			if (typeof window !== 'undefined') {
				document.documentElement.classList.toggle('dark', theme === 'dark');
				localStorage.setItem(KEY, theme);
			}
			set(theme);
		}
	};
}

export const theme = createThemeStore();