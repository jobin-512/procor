<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { BarChart3, TrendingUp } from '@lucide/svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';

	let { kpis = [], barData = [], linePoints = [], chartW = 600, chartH = 200 } = $props();
	let barsAnimated = $state(false);

	function getLinePath(points, w, h) {
		const stepX = w / (points.length - 1);
		return points.map((p, i) => `${i === 0 ? 'M' : 'L'}${i * stepX},${h - (p.value / 100) * h}`).join(' ');
	}

	function getAreaPath(points, w, h) {
		const stepX = w / (points.length - 1);
		const line = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${i * stepX},${h - (p.value / 100) * h}`).join(' ');
		return `${line} L${(points.length - 1) * stepX},${h} L0,${h} Z`;
	}

	const linePath = $derived(getLinePath(linePoints, chartW, chartH));
	const areaPath = $derived(getAreaPath(linePoints, chartW, chartH));

	onMount(() => {
		gsap.fromTo('.dash-header',
			{ y: 40, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
				scrollTrigger: { trigger: '.dash-header', start: 'top 85%', toggleActions: 'play none none none' } }
		);

		gsap.fromTo('.kpi-card',
			{ y: 40, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
				scrollTrigger: { trigger: '.kpi-grid', start: 'top 80%', toggleActions: 'play none none none', onEnter: () => { barsAnimated = true; } } }
		);
	});
</script>

<section class="py-20 md:py-32 px-6 md:px-12 bg-[var(--surface-dark-alt)] overflow-hidden">
	<div class="absolute inset-0 pointer-events-none">
		<div class="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-sky-600/5 rounded-full blur-[200px]"></div>
		<div class="absolute bottom-0 left-1/4 w-[35rem] h-[35rem] bg-procor-blue/5 rounded-full blur-[180px]"></div>
	</div>

	<div class="max-w-7xl mx-auto relative z-10">
		<div class="dash-header mb-20 text-center max-w-3xl mx-auto">
			<SectionBadge variant="sky">Real-Time Analytics</SectionBadge>
<h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white font-display leading-[1.1] mb-6 mt-8">
			Your workforce,<br />
			<span class="bg-gradient-to-r from-sky-400 to-procor-blue bg-clip-text text-transparent">decoded.</span>
		</h2>
			<p class="text-lg text-neutral-400 font-medium leading-relaxed">Every metric, every trend, every insight — updated in real-time.</p>
		</div>

		<div class="kpi-grid grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
			{#each kpis as kpi}
				<div class="kpi-card group p-5 md:p-6 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-subtle)] hover:border-white/10 transition-all duration-300 hover:bg-[var(--surface-glass)]">
					<div class="flex items-center gap-3 mb-4">
						<div class="w-10 h-10 rounded-xl {kpi.bg} flex items-center justify-center">
							<kpi.icon size={20} class={kpi.color} />
						</div>
						<span class="text-xs font-bold text-neutral-500 uppercase tracking-wider">{kpi.label}</span>
					</div>
					<p class="text-2xl md:text-3xl font-black text-white font-display mb-1">{kpi.value}</p>
					<p class="text-sm font-bold {kpi.up ? 'text-emerald-400' : 'text-rose-400'}">{kpi.change}</p>
				</div>
			{/each}
		</div>

		<div class="grid lg:grid-cols-2 gap-6">
			<div class="p-6 md:p-8 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-subtle)]">
				<div class="flex items-center gap-3 mb-8">
					<BarChart3 size={20} class="text-sky-400" />
					<h3 class="text-lg font-black text-white">Module Adoption Rate</h3>
				</div>
				<div class="space-y-5">
					{#each barData as bar, i}
						<div>
							<div class="flex justify-between items-center mb-2">
								<span class="text-sm font-bold text-neutral-400">{bar.label}</span>
								<span class="text-sm font-black text-white tabular-nums">{bar.value}%</span>
							</div>
							<div class="h-3 rounded-full bg-white/[0.06] overflow-hidden">
								<div class="h-full rounded-full bg-gradient-to-r {bar.color} transition-all duration-[1.5s] ease-out" style="width: {barsAnimated ? bar.value : 0}%; transition-delay: {i * 100}ms;"></div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="p-6 md:p-8 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-subtle)]">
				<div class="flex items-center gap-3 mb-8">
					<BarChart3 size={20} class="text-sky-400" />
					<h3 class="text-lg font-black text-white">Module Adoption Rate</h3>
				</div>
				<div class="relative">
					<svg viewBox="0 0 {chartW} {chartH}" class="w-full h-48" preserveAspectRatio="none">
						{#each [0.25, 0.5, 0.75, 1] as frac}
							<line x1="0" y1={chartH * (1 - frac)} x2={chartW} y2={chartH * (1 - frac)} stroke="rgba(255,255,255,0.05)" stroke-width="1" />
						{/each}
						<path d={areaPath} fill="url(#areaGrad)" class="{barsAnimated ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000" />
						<path d={linePath} fill="none" stroke="url(#lineGrad)" stroke-width="3" stroke-linecap="round" class="{barsAnimated ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000" style="stroke-dasharray: 1000; stroke-dashoffset: {barsAnimated ? 0 : 1000}; transition: stroke-dashoffset 2s ease-out, opacity 0.5s;" />
						{#each linePoints as p, i}
							<circle cx={i * (chartW / (linePoints.length - 1))} cy={chartH - (p.value / 100) * chartH} r="4" fill="white" class="{barsAnimated ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500" style="transition-delay: {800 + i * 80}ms;" />
						{/each}
						<defs>
							<linearGradient id="lineGrad" x1="0" y1="0" x2={chartW} y2="0" gradientUnits="userSpaceOnUse">
								<stop offset="0%" stop-color="#253BDA" />
								<stop offset="100%" stop-color="#38bdf8" />
							</linearGradient>
							<linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2={chartH} gradientUnits="userSpaceOnUse">
								<stop offset="0%" stop-color="rgba(37,59,218,0.2)" />
								<stop offset="100%" stop-color="rgba(37,59,218,0)" />
							</linearGradient>
						</defs>
					</svg>
					<div class="flex justify-between mt-3 px-1">
						{#each linePoints as p}
							<span class="text-[10px] font-bold text-neutral-600">{p.month}</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
