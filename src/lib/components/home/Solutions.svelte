<!-- Solutions — two-column with floating indicators + design tokens -->
<script>
	import { onMount } from 'svelte';
	import {
		Globe,
		Cpu,
		BarChart3,
		Brain,
		Network,
		ShieldCheck,
		Clock,
		Sparkles
	} from '@lucide/svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';
	import GradientButton from '$lib/components/ui/GradientButton.svelte';
	import { animateHeader, animateCards, createScrollContext } from '$lib/utils/animations.js';

	let section = $state();

	onMount(() => {
		return createScrollContext(() => {
			animateHeader('.solution-header');
			animateCards('.solution-content > *', {
				trigger: '.solution-content',
				y: 50,
				stagger: 0.15,
				ease: 'power3.out'
			});
		}, section);
	});

	const items = [
		{
			icon: Globe,
			title: 'Global Multi-Currency Payroll',
			desc: 'Process payroll in 40+ currencies with automated tax calculations and local compliance built-in.'
		},
		{
			icon: Brain,
			title: 'AI-Powered Talent Matching',
			desc: 'Machine learning algorithms that understand your culture fit — matching the right people to the right roles.'
		},
		{
			icon: Cpu,
			title: 'Custom Workflow Builder',
			desc: 'Visual drag-and-drop interface to build complex HR workflows without writing a single line of code.'
		}
	];

	const pills = [
		{ icon: Sparkles, text: '200+ Integrations' },
		{ icon: ShieldCheck, text: 'SOC 2 Type II Certified' },
		{ icon: Clock, text: '99.9% Uptime SLA' },
		{ icon: Network, text: 'Global CDN Infrastructure' }
	];
</script>

<section
	id="solutions"
	class="py-20 md:py-32 px-6 md:px-12 bg-[var(--surface-darker)] relative overflow-hidden"
	bind:this={section}
>
	<!-- Gradient Orbs -->
	<div
		class="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-procor-blue/5 to-transparent skew-x-[-15deg] translate-x-20 pointer-events-none"
	></div>
	<div
		class="absolute bottom-[-20%] left-[-10%] w-[30rem] h-[30rem] bg-violet-600/8 rounded-full blur-[140px] pointer-events-none"
	></div>

	<div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
		<!-- Left — image with floating indicators -->
		<div class="relative order-2 lg:order-1">
			<div
				class="relative bg-[var(--surface-card)] backdrop-blur-xl p-6 rounded-[var(--radius-2xl)] border border-[var(--border-subtle)] shadow-2xl"
			>
				<img
					src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
					alt="Advanced Insights"
					class="rounded-[var(--radius-bento)] grayscale hover:grayscale-0 transition-all duration-1000 opacity-60 hover:opacity-100"
				/>

				<!-- Floating indicator cards -->
				<div
					class="absolute -top-4 -right-4 bg-procor-sky/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl animate-bounce"
				>
					<BarChart3 size={28} class="text-white" />
				</div>
				<div
					class="absolute -bottom-6 -left-6 bg-white/[0.08] backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3"
				>
					<span class="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
					<span class="text-sm font-bold text-white">Real-time Sync</span>
				</div>
			</div>
		</div>

		<!-- Right — copy -->
		<div class="solution-content order-1 lg:order-2">
			<div class="solution-header">
				<SectionBadge variant="sky">Enterprise Solutions</SectionBadge>
				<h2
					class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display mb-10 mt-8 leading-[1.1] text-white"
				>
					The Architecture of
					<span class="bg-gradient-to-r from-procor-sky to-violet-400 bg-clip-text text-transparent"
						>Excellence.</span
					>
				</h2>
			</div>

			<div class="space-y-6 mb-16">
				{#each items as item}
					<div
						class="flex items-start gap-6 group p-5 rounded-2xl hover:bg-white/[0.03] transition-colors duration-[var(--duration-slow)]"
					>
						<div
							class="bg-white/5 p-4 rounded-2xl group-hover:bg-procor-blue/30 transition-all duration-[var(--duration-normal)] shrink-0"
						>
							<item.icon size={28} class="text-procor-sky" />
						</div>
						<div>
							<h4 class="text-lg font-black text-white mb-1">{item.title}</h4>
							<p class="text-neutral-400 font-medium text-sm leading-relaxed">{item.desc}</p>
						</div>
					</div>
				{/each}
			</div>

			<!-- Pills row -->
			<div class="flex flex-wrap gap-3 mb-10">
				{#each pills as pill}
					<span
						class="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/5 rounded-full text-xs font-bold text-neutral-300 hover:bg-white/[0.08] transition-colors"
					>
						<pill.icon size={14} />
						{pill.text}
					</span>
				{/each}
			</div>

			<div class="flex flex-wrap gap-4">
				<GradientButton variant="secondary" size="md">Explore Enterprise</GradientButton>
				<GradientButton variant="ghost" size="md">View Case Studies</GradientButton>
			</div>
		</div>
	</div>
</section>
