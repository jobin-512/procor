<!-- Features — glassmorphic card grid with design tokens -->
<script>
	import { onMount } from 'svelte';
	import { ArrowRight, Brain, Zap, ShieldCheck, Globe, BarChart3, Users } from '@lucide/svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';
	import { animateHeader, animateCards, createScrollContext } from '$lib/utils/animations.js';

	let section = $state();

	onMount(() => {
		return createScrollContext(() => {
			animateHeader('.features-header');
			animateCards('.feature-card', { trigger: '.features-grid', stagger: 0.1 });
		}, section);
	});

	const features = [
		{
			icon: Brain,
			title: 'AI-Powered Matching',
			desc: 'Neural algorithms that connect the right talent to the right roles — automatically.',
			color: 'from-procor-blue/20 to-procor-blue/5',
			accent: 'text-procor-blue',
			borderHover: 'hover:border-procor-blue/30'
		},
		{
			icon: Zap,
			title: 'Workflow Automation',
			desc: 'Build complex HR workflows in minutes with our visual drag-and-drop builder.',
			color: 'from-amber-500/20 to-amber-600/5',
			accent: 'text-amber-400',
			borderHover: 'hover:border-amber-500/30'
		},
		{
			icon: ShieldCheck,
			title: 'Bank-Grade Security',
			desc: 'SOC 2 Type II certified with end-to-end encryption and zero-trust architecture.',
			color: 'from-emerald-500/20 to-emerald-600/5',
			accent: 'text-emerald-400',
			borderHover: 'hover:border-emerald-500/30'
		},
		{
			icon: Globe,
			title: 'Global Compliance Engine',
			desc: 'Auto-updating labor laws across 150+ jurisdictions. Never worry about penalties again.',
			color: 'from-sky-500/20 to-sky-600/5',
			accent: 'text-sky-400',
			borderHover: 'hover:border-sky-500/30'
		},
		{
			icon: BarChart3,
			title: 'Predictive Analytics',
			desc: 'Attrition forecasting, sentiment analysis, and headcount planning powered by ML models.',
			color: 'from-rose-500/20 to-rose-600/5',
			accent: 'text-rose-400',
			borderHover: 'hover:border-rose-500/30'
		},
		{
			icon: Users,
			title: 'Employee Self-Service',
			desc: 'Punch-in, expense claims, leave requests — all automated through a self-service portal.',
			color: 'from-procor-blue/20 to-procor-sky/5',
			accent: 'text-procor-sky',
			borderHover: 'hover:border-sky-500/30'
		}
	];
</script>

<section
	id="features"
	class="relative py-20 md:py-32 px-6 md:px-12 bg-[var(--surface-dark-alt)] overflow-hidden"
	bind:this={section}
>
	<!-- Ambient BG -->
	<div class="absolute inset-0 pointer-events-none">
		<div
			class="absolute top-0 left-1/4 w-[50rem] h-[50rem] bg-procor-blue/10 rounded-full blur-[160px]"
		></div>
		<div
			class="absolute bottom-0 right-1/4 w-[40rem] h-[40rem] bg-procor-blue/8 rounded-full blur-[140px]"
		></div>
	</div>

	<div class="max-w-7xl mx-auto relative z-10">
		<!-- Header -->
		<div class="features-header mb-24 text-center max-w-3xl mx-auto">
			<SectionBadge variant="blue">Core Capabilities</SectionBadge>
			<h2
				class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white font-display leading-[1.1] mb-8 mt-8"
			>
				Precision Engineered for
				<span class="bg-gradient-to-r from-procor-sky to-procor-blue bg-clip-text text-transparent"
					>People.</span
				>
			</h2>
			<p class="text-lg text-neutral-400 font-medium leading-relaxed">
				We distilled complex HR processes into a high-performance platform that empowers every layer
				of your organization.
			</p>
		</div>

		<!-- Grid -->
		<div class="features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each features as feature}
				<div
					class="feature-card group relative p-8 rounded-[var(--radius-xl)] bg-[var(--surface-card)] border border-[var(--border-subtle)] backdrop-blur-sm transition-all duration-[var(--duration-slower)] cursor-default overflow-hidden {feature.borderHover} hover:bg-[var(--surface-glass)]"
				>
					<!-- Hover gradient -->
					<div
						class="absolute inset-0 bg-gradient-to-br {feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--duration-slower)]"
					></div>

					<div class="relative z-10">
						<div
							class="w-14 h-14 rounded-2xl bg-white/[0.06] {feature.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-[var(--duration-slow)]"
						>
							<feature.icon size={28} />
						</div>
						<h4
							class="text-xl font-black text-white mb-3 group-hover:text-white/90 transition-colors"
						>
							{feature.title}
						</h4>
						<p class="text-neutral-400 leading-relaxed font-medium text-sm mb-6">
							{feature.desc}
						</p>
						<div
							class="w-12 h-1 bg-white/5 group-hover:w-full transition-all duration-[var(--duration-slower)]"
						></div>
					</div>
				</div>
			{/each}
		</div>

		<!-- CTA -->
		<div class="text-center mt-16">
			<a
				href="/#features"
				class="inline-flex items-center gap-3 text-procor-sky font-bold text-sm uppercase tracking-[0.2em] hover:gap-5 transition-all group"
			>
				View All Features <ArrowRight
					size={18}
					class="group-hover:translate-x-1 transition-transform"
				/>
			</a>
		</div>
	</div>
</section>
