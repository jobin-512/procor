<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	let { stats = [] } = $props();
	let counters = $state(stats.map(() => 0));
	let sectionEl = $state(null);

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const targets = sectionEl.querySelectorAll('.stat-num');
		const finalValues = stats.map(s => s.value);

		const proxy = {};
		finalValues.forEach((_, i) => { proxy[`v${i}`] = 0; });

		gsap.set(sectionEl, { y: 40, opacity: 0 });

		ScrollTrigger.create({
			trigger: sectionEl,
			start: 'top 85%',
			onEnter: () => {
				gsap.to(sectionEl, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });

				gsap.to(proxy, {
					...Object.fromEntries(finalValues.map((v, i) => [`v${i}`, v])),
					duration: 2.5,
					ease: 'power2.out',
					onUpdate: () => {
						counters = finalValues.map((_, i) => proxy[`v${i}`]);
					}
				});
			},
			once: true
		});
	});
</script>

<section bind:this={sectionEl} class="py-16 md:py-24 px-6 md:px-12 bg-[var(--surface-darker)] border-y border-[var(--border-subtle)]">
	<div class="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
		{#each stats as stat, i}
			<div class="text-center group">
				<div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br {stat.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
					<stat.icon size={24} class="text-white" />
				</div>
				<p class="stat-num text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent font-display mb-2 tabular-nums">
					{stat.value < 100 ? Number(counters[i]).toFixed(1) : Math.floor(counters[i]).toLocaleString()}{stat.suffix}
				</p>
				<p class="text-sm font-bold text-neutral-500 uppercase tracking-[0.2em]">{stat.label}</p>
			</div>
		{/each}
	</div>
</section>
