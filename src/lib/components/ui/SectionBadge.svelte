<!-- SectionBadge — reusable pill badge for section headers -->
<script>
	let { variant = 'sky', children } = $props();

	const variants = {
		sky: 'bg-sky-500/10 border-sky-500/20 text-sky-400',
		blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
		emerald: 'bg-emerald-50 border-emerald-100 text-emerald-600',
		slate: 'bg-surface-2 border-transparent text-fg/80',
		gradient:
			'bg-gradient-to-r from-procor-blue/10 to-blue-500/10 border-procor-blue/20 text-procor-blue',
		dark: 'bg-surface border-line text-fg/80'
	};
</script>

<span
	class="inline-block px-4 py-1.5 border rounded-full text-[10px] font-black tracking-[0.3em] uppercase {variants[
		variant
	] || variants.sky}"
>
	{@render children()}
</span>
