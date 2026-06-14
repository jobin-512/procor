<!-- HowItWorks — step-by-step with design tokens -->
<script>
	import { onMount } from 'svelte';
	import { Check, ArrowRight, Rocket, Users, Settings2, LineChart } from '@lucide/svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';
	import GradientButton from '$lib/components/ui/GradientButton.svelte';
	import { animateHeader, animateCards, createScrollContext } from '$lib/utils/animations.js';

	let section = $state();

	onMount(() => {
		return createScrollContext(() => {
			animateHeader('.hiw-header');
			animateCards('.step-card', { trigger: '.steps-grid', stagger: 0.15 });
		}, section);
	});

	const steps = [
		{
			icon: Rocket,
			step: '01',
			title: 'Discovery Call',
			desc: 'We analyze your current HR processes, pain points, and growth objectives to map the perfect solution for your organization.'
		},
		{
			icon: Users,
			step: '02',
			title: 'Custom Architecture',
			desc: 'Our team designs a tailored PROCOR setup — selecting modules, integrations, and workflows specific to your industry needs.'
		},
		{
			icon: Settings2,
			step: '03',
			title: 'Seamless Onboarding',
			desc: 'Data migration, team training, and configuration in parallel. Most companies go live within 14 days of kickoff.'
		},
		{
			icon: LineChart,
			step: '04',
			title: 'Continuous Optimization',
			desc: 'Ongoing analytics reports, quarterly business reviews, and AI-driven recommendations to maximize your ROI.'
		}
	];

	const timeline = [
		{ label: 'Week 1', milestone: 'Onboarding Complete' },
		{ label: 'Week 2', milestone: 'First Payroll Run' },
		{ label: 'Month 1', milestone: 'All Modules Active' },
		{ label: 'Quarter 1', milestone: 'ROI Measurable' }
	];
</script>

<section class="py-20 md:py-32 px-6 md:px-12 bg-[var(--surface-elevated)]" bind:this={section}>
	<div class="max-w-7xl mx-auto">
		<!-- Header -->
		<div class="hiw-header mb-24 text-center max-w-3xl mx-auto">
			<SectionBadge variant="emerald">How It Works</SectionBadge>
			<h2
				class="text-4xl md:text-6xl font-black text-procor-navy font-display leading-tight mb-8 mt-8"
			>
				From onboarding to
				<span class="bg-gradient-to-r from-procor-blue to-violet-500 bg-clip-text text-transparent"
					>optimization</span
				> in four steps
			</h2>
			<p class="text-lg text-slate-500 font-medium leading-relaxed">
				We've streamlined the entire journey so your team can start realizing value within days, not
				months.
			</p>
		</div>

		<!-- Steps grid -->
		<div class="steps-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 md:mb-32">
			{#each steps as step, i}
				<div class="step-card group relative">
					<div
						class="relative p-8 rounded-[var(--radius-xl)] bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-emerald-200 transition-all duration-[var(--duration-slower)] hover:shadow-2xl hover:shadow-emerald-500/5 h-full"
					>
						<!-- Step indicator -->
						<div class="flex items-center gap-4 mb-8">
							<div
								class="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-[var(--duration-slow)]"
							>
								<step.icon size={28} class="text-white" />
							</div>
							<span class="text-4xl font-black text-slate-100">{step.step}</span>
						</div>

						<h3
							class="text-xl font-black text-procor-navy mb-3 group-hover:text-emerald-700 transition-colors duration-[var(--duration-slow)]"
						>
							{step.title}
						</h3>
						<p class="text-slate-500 leading-relaxed font-medium text-sm">{step.desc}</p>

						<!-- Connector line (hidden on last) -->
						{#if i < steps.length - 1}
							<div
								class="hidden lg:block absolute top-24 left-full w-8 h-[2px] bg-gradient-to-r from-slate-200 to-transparent mr-8"
							></div>
						{/if}
					</div>
				</div>
			{/each}
		</div>

		<!-- Timeline -->
		<div class="relative">
			<div class="text-center mb-16">
				<h3 class="text-2xl md:text-3xl font-black text-procor-navy font-display mb-3">
					Your First 90 Days
				</h3>
				<p class="text-slate-500 font-medium">A proven roadmap to HR transformation</p>
			</div>

			<div class="grid md:grid-cols-4 gap-8 relative">
				<!-- Connecting line -->
				<div
					class="hidden md:block absolute top-12 left-0 right-0 h-[2px] bg-gradient-to-r from-slate-200 via-emerald-300 to-violet-300"
				></div>

				{#each timeline as item}
					<div class="relative text-center group">
						<div
							class="w-8 h-8 rounded-full bg-white border-4 border-slate-300 group-hover:border-emerald-500 group-hover:scale-125 transition-all duration-[var(--duration-slow)] mx-auto mb-6 relative z-10 flex items-center justify-center shadow-md"
						>
							<Check size={14} class="text-white" />
						</div>
						<p class="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-2">
							{item.label}
						</p>
						<p
							class="font-black text-procor-navy group-hover:text-violet-600 transition-colors duration-[var(--duration-slow)]"
						>
							{item.milestone}
						</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Bottom CTA -->
		<div class="text-center mt-12 md:mt-20">
			<GradientButton variant="primary" size="lg">
				Start Your Journey <ArrowRight
					size={20}
					class="group-hover:translate-x-1 transition-transform"
				/>
			</GradientButton>
		</div>
	</div>
</section>
