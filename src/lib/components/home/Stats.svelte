<!-- Stats — animated counters with design tokens -->
<script>
	import { onMount } from 'svelte';
	import { animateHeader, createScrollContext } from '$lib/utils/animations.js';

	const stats = [
		{ value: 2500, suffix: '+', label: 'Global Clients' },
		{ value: 40, suffix: '+', label: 'Currencies Supported' },
		{ value: 99.9, suffix: '%', label: 'Uptime Guarantee' },
		{ value: 150, suffix: '+', label: 'Compliance Regions' }
	];

	let counters = $state([0, 0, 0, 0]);
	let animated = $state(false);
	let section = $state();

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !animated) animated = true;
			},
			{ threshold: 0.3 }
		);
		if (section) observer.observe(section);

		return createScrollContext(() => {
			animateHeader('.stats-header');
		}, section);
	});

	function animateCounter(idx) {
		const target = stats[idx].value;
		const duration = 2000;
		const start = performance.now();

		function tick(now) {
			const progress = Math.min((now - start) / duration, 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			counters[idx] = Math.floor(eased * target + (target % 1 ? eased * 10 : 0) / 10);
			if (progress < 1) requestAnimationFrame(tick);
		}
		requestAnimationFrame(tick);
	}

	$effect(() => {
		if (animated) stats.forEach((_, i) => animateCounter(i));
	});
</script>

<section
	class="py-16 md:py-24 px-6 md:px-12 bg-[var(--surface-darker)] border-y border-[var(--border-subtle)]"
	bind:this={section}
>
	<div class="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
		{#each stats as stat, i}
			<div class="text-center group">
				<p
					class="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent font-display mb-2 tabular-nums"
				>
					{Number(counters[i]).toLocaleString()}{stat.suffix}
				</p>
				<p class="text-sm font-bold text-neutral-500 uppercase tracking-[0.2em]">{stat.label}</p>
			</div>
		{/each}
	</div>
</section>
