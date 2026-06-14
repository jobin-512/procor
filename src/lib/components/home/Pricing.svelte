<!-- Pricing — three tier cards with toggle + design tokens -->
<script>
	import { onMount } from 'svelte';
	import { CheckCircle2, AlertCircle } from '@lucide/svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';
	import GradientButton from '$lib/components/ui/GradientButton.svelte';
	import { animateHeader, animateCards, createScrollContext } from '$lib/utils/animations.js';

	let annual = $state(true);
	let section = $state();

	onMount(() => {
		return createScrollContext(() => {
			animateHeader('.pricing-header');
			animateCards('.tier-card', { trigger: '.tiers-grid', stagger: 0.15 });
		}, section);
	});

	function getPrice(monthlyPrice) {
		return annual ? Math.floor(monthlyPrice * 0.8) : monthlyPrice;
	}

	const tiers = [
		{
			name: 'Starter',
			desc: 'For growing teams getting started with HR automation.',
			monthlyPrice: 29,
			cta: 'Start Free Trial',
			popular: false,
			features: [
				'Up to 100 employees',
				'Core HR module',
				'Basic payroll (single currency)',
				'Email support',
				'Standard reporting dashboard'
			],
			excluded: [
				'Custom workflows',
				'Advanced analytics',
				'API access',
				'Dedicated account manager'
			]
		},
		{
			name: 'Growth',
			desc: 'For mid-size companies that need full HR capabilities.',
			monthlyPrice: 79,
			cta: 'Start Free Trial',
			popular: true,
			features: [
				'Up to 1,000 employees',
				'All core modules',
				'Multi-currency payroll',
				'AI talent matching',
				'Custom workflows builder',
				'Priority support',
				'Advanced analytics suite'
			],
			excluded: ['Dedicated account manager', 'Custom SLA']
		},
		{
			name: 'Enterprise',
			desc: 'For large organizations with complex HR requirements.',
			monthlyPrice: 199,
			cta: 'Contact Sales',
			popular: false,
			features: [
				'Unlimited employees',
				'Everything in Growth',
				'Global compliance engine',
				'Custom integrations API',
				'Dedicated account manager',
				'Custom SLA (99.99%)',
				'On-premise deployment option'
			],
			excluded: []
		}
	];
</script>

<section
	class="py-20 md:py-32 px-6 md:px-12 bg-[var(--surface-darker)] overflow-hidden relative"
	bind:this={section}
>
	<!-- Background orbs -->
	<div class="absolute inset-0 pointer-events-none">
		<div
			class="absolute top-0 left-1/4 w-[50rem] h-[50rem] bg-violet-600/8 rounded-full blur-[200px]"
		></div>
		<div
			class="absolute bottom-0 right-1/4 w-[40rem] h-[40rem] bg-procor-blue/10 rounded-full blur-[200px]"
		></div>
	</div>

	<div class="max-w-7xl mx-auto relative z-10">
		<!-- Header -->
		<div class="pricing-header mb-16 text-center max-w-3xl mx-auto">
			<SectionBadge variant="sky">Pricing</SectionBadge>
			<h2 class="text-4xl md:text-6xl font-black text-white font-display leading-tight mb-8 mt-6">
				Scales with your
				<span class="bg-gradient-to-r from-procor-sky to-violet-400 bg-clip-text text-transparent"
					>ambition</span
				>
			</h2>
			<p class="text-lg text-neutral-500 font-medium leading-relaxed mb-12">
				Start free. Upgrade as you grow. No hidden fees, no long-term contracts required.
			</p>

			<!-- Toggle -->
			<div class="flex items-center justify-center gap-4">
				<span
					class="text-sm font-bold {annual ? 'text-neutral-500' : 'text-white'} transition-colors"
					>Monthly</span
				>
				<button
					aria-label="Toggle annual billing"
					class="relative w-16 h-11 rounded-full transition-colors duration-[var(--duration-normal)] cursor-pointer {annual
						? 'bg-procor-blue'
						: 'bg-slate-700'}"
					onclick={() => (annual = !annual)}
				>
					<div
						class="absolute top-[5px] w-7 h-7 bg-white rounded-full shadow-md transition-all duration-[var(--duration-normal)] {annual
							? 'left-[34px]'
							: 'left-[5px]'}"
					></div>
				</button>
				<span
					class="text-sm font-bold {annual ? 'text-white' : 'text-neutral-500'} transition-colors"
					>Annual <span class="text-emerald-400 text-xs ml-1">Save 20%</span></span
				>
			</div>
		</div>

		<!-- Tier Cards -->
		<div class="tiers-grid grid md:grid-cols-3 gap-8 mb-16">
			{#each tiers as tier}
				<div
					class="tier-card group relative p-8 rounded-[var(--radius-bento)] transition-all duration-[var(--duration-slower)] cursor-default {tier.popular
						? 'bg-gradient-to-br from-sky-500/10 to-violet-500/10 border-2 border-procor-blue/30 scale-[1.05] shadow-2xl shadow-procor-blue/10'
						: 'bg-[var(--surface-card)] border border-[var(--border-subtle)] hover:border-white/10 hover:bg-[var(--surface-glass)]'}"
				>
					{#if tier.popular}
						<div
							class="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-procor-blue to-violet-600 rounded-full text-[10px] font-black text-white uppercase tracking-wider shadow-lg"
						>
							Most Popular
						</div>
					{/if}

					<h3 class="text-2xl font-black text-white mb-2">{tier.name}</h3>
					<p class="text-neutral-500 text-sm mb-8 leading-relaxed">{tier.desc}</p>

					<div class="flex items-baseline gap-1 mb-10">
						<span class="text-lg text-neutral-400 font-bold">$</span>
						<span class="text-5xl sm:text-6xl font-black text-white font-display"
							>{getPrice(tier.monthlyPrice)}</span
						>
						<span class="text-neutral-500 text-sm font-bold">/month</span>
					</div>

					<GradientButton
						variant={tier.popular ? 'primary' : 'ghost'}
						size="md"
						class="w-full mb-12"
					>
						{tier.cta}
					</GradientButton>

					<div class="space-y-4 mb-8">
						<p class="text-white/30 text-[10px] font-bold uppercase tracking-wider">
							What's included
						</p>
						{#each tier.features as feature}
							<div class="flex items-center gap-3">
								<CheckCircle2 size={18} class="text-emerald-400 shrink-0" />
								<span class="text-sm text-neutral-300">{feature}</span>
							</div>
						{/each}
						{#each tier.excluded as feature}
							<div class="flex items-center gap-3 opacity-30">
								<AlertCircle size={18} class="shrink-0" />
								<span class="text-sm text-neutral-400">{feature}</span>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<!-- Money-back guarantee -->
		<div class="text-center">
			<p class="text-sm text-neutral-500 font-medium flex items-center justify-center gap-2">
				<svg
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg
				>
				30-day money-back guarantee · No credit card required for trial · Cancel anytime
			</p>
		</div>
	</div>
</section>
