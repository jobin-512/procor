<!-- FinalCTA — conversion banner with design tokens -->
<script>
	import { onMount } from 'svelte';
	import { Rocket, Sparkles, Shield, Lock, Timer } from '@lucide/svelte';
	import GradientButton from '$lib/components/ui/GradientButton.svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';
	import { animateHeader, createScrollContext } from '$lib/utils/animations.js';

	let section = $state();

	onMount(() => {
		return createScrollContext(() => {
			animateHeader('.cta-header', { y: 60, stagger: 0.2, ease: 'expo.out' });
		}, section);
	});

	const trustBadges = [
		{ icon: Shield, text: 'SOC 2 Certified' },
		{ icon: Lock, text: 'GDPR Compliant' },
		{ icon: Timer, text: '99.99% Uptime' }
	];
</script>

<section
	class="cta py-20 md:py-32 px-6 md:px-12 bg-[var(--surface-elevated)] relative overflow-hidden"
	bind:this={section}
>
	<!-- Background gradient -->
	<div class="absolute inset-0 pointer-events-none">
		<div
			class="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] bg-gradient-to-b from-sky-50 to-transparent"
		></div>
	</div>

	<!-- Grid pattern — using global utility -->
	<div class="absolute inset-0 grid-overlay opacity-[0.15] pointer-events-none"></div>

	<div class="max-w-5xl mx-auto text-center relative z-10">
		<!-- Badge -->
		<div class="cta-header">
			<SectionBadge variant="gradient">Ready to transform your HR?</SectionBadge>
		</div>

		<!-- Headline -->
		<h2
			class="text-4xl md:text-6xl lg:text-7xl font-black text-procor-navy font-display leading-[1.1] mb-8 mt-12 tracking-tight"
		>
			Start building your <br class="hidden md:block" />
			<span
				class="bg-gradient-to-r from-procor-blue to-procor-blue-dark bg-clip-text text-transparent"
				>dream workforce</span
			> today
		</h2>

		<!-- Subheadline -->
		<p
			class="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-14 leading-relaxed font-medium"
		>
			Join 13,000+ organizations that have transformed their people operations with PROCOR. Start
			your free trial — no credit card required.
		</p>

		<!-- CTA Buttons -->
		<div class="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
			<GradientButton variant="primary" size="lg">
				<Rocket size={22} class="group-hover:-translate-y-1 transition-transform" /> Start Free Trial
			</GradientButton>
			<GradientButton variant="secondary" size="lg">Schedule Demo</GradientButton>
		</div>

		<!-- Trust badges -->
		<div class="flex flex-wrap justify-center items-center gap-8 text-xs font-bold text-slate-400">
			{#each trustBadges as badge}
				<span class="flex items-center gap-2">
					<badge.icon size={16} class="text-emerald-400" />
					{badge.text}
				</span>
			{/each}
		</div>
	</div>

	<!-- Decorative orbs -->
	<div
		class="absolute bottom-[-20rem] right-[-10rem] w-[40rem] h-[40rem] bg-procor-blue/30 rounded-full blur-[180px] pointer-events-none"
	></div>
	<div
		class="absolute top-[-20rem] left-[-10rem] w-[40rem] h-[40rem] bg-sky-100/30 rounded-full blur-[180px] pointer-events-none"
	></div>
</section>
