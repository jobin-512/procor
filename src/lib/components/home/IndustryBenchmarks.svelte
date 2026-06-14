<!-- IndustryBenchmarks — animated progress bars and benchmark stats -->
<script>
	import { onMount } from 'svelte';
	import { TrendingUp, Award, Target, Zap } from '@lucide/svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';
	import { animateHeader, animateCards, createScrollContext } from '$lib/utils/animations.js';

	let section = $state();
	let visible = $state(false);

	onMount(() => {
		return createScrollContext(() => {
			animateHeader('.bench-header');
			animateCards('.bench-card', { trigger: '.bench-grid', y: 40, stagger: 0.12 });

			const observer = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting) {
						visible = true;
						observer.disconnect();
					}
				},
				{ threshold: 0.2 }
			);
			if (section) observer.observe(section);
		}, section);
	});

	const benchmarks = [
		{
			icon: TrendingUp,
			title: 'Time-to-Hire',
			industry: 'Industry Avg: 36 days',
			procor: '18 days',
			percentage: 50,
			color: 'from-sky-500 to-sky-400',
			textColor: 'text-sky-400',
			bgColor: 'bg-sky-500/10'
		},
		{
			icon: Award,
			title: 'Employee Retention',
			industry: 'Industry Avg: 72%',
			procor: '94%',
			percentage: 94,
			color: 'from-emerald-500 to-emerald-400',
			textColor: 'text-emerald-400',
			bgColor: 'bg-emerald-500/10'
		},
		{
			icon: Target,
			title: 'Payroll Accuracy',
			industry: 'Industry Avg: 97.2%',
			procor: '99.97%',
			percentage: 99,
			color: 'from-violet-500 to-violet-400',
			textColor: 'text-violet-400',
			bgColor: 'bg-violet-500/10'
		},
		{
			icon: Zap,
			title: 'Process Automation',
			industry: 'Industry Avg: 34%',
			procor: '89%',
			percentage: 89,
			color: 'from-amber-500 to-amber-400',
			textColor: 'text-amber-400',
			bgColor: 'bg-amber-500/10'
		}
	];

	const stats = [
		{ value: '3.2x', label: 'Faster Onboarding', sub: 'vs. industry average' },
		{ value: '67%', label: 'Less Admin Work', sub: 'automation savings' },
		{ value: '28%', label: 'Higher Engagement', sub: 'employee satisfaction' },
		{ value: '41%', label: 'Cost Reduction', sub: 'in first 12 months' }
	];
</script>

<section
	class="py-20 md:py-32 px-6 md:px-12 bg-[var(--surface-darker)] overflow-hidden relative"
	bind:this={section}
>
	<div class="absolute inset-0 pointer-events-none">
		<div
			class="absolute top-0 left-0 w-[40rem] h-[40rem] bg-violet-600/5 rounded-full blur-[200px]"
		></div>
		<div
			class="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-sky-600/5 rounded-full blur-[180px]"
		></div>
	</div>

	<div class="max-w-7xl mx-auto relative z-10">
		<div class="bench-header mb-20 text-center max-w-3xl mx-auto">
			<SectionBadge variant="violet">Industry Benchmarks</SectionBadge>
			<h2
				class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white font-display leading-[1.1] mb-6 mt-8"
			>
				Numbers don't<br />
				<span class="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent"
					>lie.</span
				>
			</h2>
			<p class="text-lg text-neutral-400 font-medium leading-relaxed">
				PROCOR doesn't just meet industry standards — it redefines them.
			</p>
		</div>

		<!-- Benchmark Bars -->
		<div class="bench-grid grid md:grid-cols-2 gap-6 mb-20">
			{#each benchmarks as bench, i}
				<div
					class="bench-card group p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/10 transition-all duration-300"
				>
					<div class="flex items-center gap-4 mb-6">
						<div class="w-12 h-12 rounded-2xl {bench.bgColor} flex items-center justify-center">
							<bench.icon size={24} class={bench.textColor} />
						</div>
						<div>
							<h3 class="text-lg font-black text-white">{bench.title}</h3>
							<p class="text-xs font-bold text-neutral-500">{bench.industry}</p>
						</div>
						<div class="ml-auto text-right">
							<p class="text-2xl font-black {bench.textColor} font-display">{bench.procor}</p>
							<p class="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">PROCOR</p>
						</div>
					</div>

					<!-- Progress bar -->
					<div class="relative">
						<div class="h-3 rounded-full bg-white/[0.06] overflow-hidden">
							<div
								class="h-full rounded-full bg-gradient-to-r {bench.color} transition-all duration-[2s] ease-out relative"
								style="width: {visible ? bench.percentage : 0}%; transition-delay: {i * 200}ms;"
							>
								<div
									class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-shimmer"
								></div>
							</div>
						</div>
						<!-- Industry average marker -->
						<div
							class="absolute top-0 h-3 w-[2px] bg-white/40 rounded-full"
							style="left: {bench.percentage * 0.65}%;"
						>
							<div
								class="absolute -top-5 left-1/2 -translate-x-1/2 text-[8px] font-bold text-neutral-500 whitespace-nowrap"
							>
								Industry
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Impact Stats -->
		<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
			{#each stats as stat, i}
				<div
					class="text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.06]"
					style="opacity: {visible ? 1 : 0}; transform: translateY({visible
						? 0
						: 20}px); transition: all 0.6s ease {0.8 + i * 0.15}s;"
				>
					<p
						class="text-3xl md:text-4xl font-black font-display bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent mb-2"
					>
						{stat.value}
					</p>
					<p class="text-sm font-black text-white mb-1">{stat.label}</p>
					<p class="text-xs font-bold text-neutral-500">{stat.sub}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
