<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { ArrowRight, CheckCircle2, AlertCircle, Shield } from '@lucide/svelte';
	import TiltCard from '$lib/components/ui/TiltCard.svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';

	let { tiers = [] } = $props();
	let annual = $state(true);

	function getPrice(monthlyPrice) {
		return annual ? Math.floor(monthlyPrice * 0.8) : monthlyPrice;
	}

	onMount(() => {
		gsap.fromTo('.pricing-header',
			{ y: 40, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
				scrollTrigger: { trigger: '.pricing-header', start: 'top 85%', toggleActions: 'play none none none' } }
		);

		gsap.fromTo('.tier-card',
			{ y: 50, opacity: 0, scale: 0.95 },
			{ y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
				scrollTrigger: { trigger: '.tiers-grid', start: 'top 80%', toggleActions: 'play none none none' } }
		);
	});
</script>

<section class="py-20 md:py-32 px-6 md:px-12 bg-[var(--surface-darker)] overflow-hidden relative">
	<div class="absolute inset-0 pointer-events-none">
		<div class="absolute top-0 left-1/4 w-[50rem] h-[50rem] bg-violet-600/8 rounded-full blur-[200px]"></div>
		<div class="absolute bottom-0 right-1/4 w-[40rem] h-[40rem] bg-procor-blue/10 rounded-full blur-[200px]"></div>
	</div>

	<div class="max-w-7xl mx-auto relative z-10">
		<div class="pricing-header mb-16 text-center max-w-3xl mx-auto">
			<SectionBadge variant="sky">Pricing</SectionBadge>
			<h2 class="text-4xl md:text-6xl font-black text-white font-display leading-tight mb-8 mt-6">
				Scales with your <span class="bg-gradient-to-r from-procor-sky to-violet-400 bg-clip-text text-transparent">ambition</span>
			</h2>
			<p class="text-lg text-neutral-500 font-medium leading-relaxed mb-12">Start free. Upgrade as you grow. No hidden fees.</p>

			<div class="flex items-center justify-center gap-4">
				<span class="text-sm font-bold {annual ? 'text-neutral-500' : 'text-white'} transition-colors">Monthly</span>
				<button aria-label="Toggle annual billing" class="relative w-16 h-11 rounded-full transition-colors duration-300 cursor-pointer {annual ? 'bg-procor-blue' : 'bg-slate-700'}" onclick={() => (annual = !annual)}>
					<div class="absolute top-[5px] w-7 h-7 bg-white rounded-full shadow-md transition-all duration-300 {annual ? 'left-[34px]' : 'left-[5px]'}"></div>
				</button>
				<span class="text-sm font-bold {annual ? 'text-white' : 'text-neutral-500'} transition-colors">Annual <span class="text-emerald-400 text-xs ml-1">Save 20%</span></span>
			</div>
		</div>

		<div class="tiers-grid grid md:grid-cols-3 gap-8 mb-16">
			{#each tiers as tier}
				<div class="tier-card">
					<TiltCard tiltAmount={8} glareOpacity={0.15}>
						<div class="relative p-8 rounded-[var(--radius-bento)] transition-all duration-500 cursor-default {tier.popular ? 'bg-gradient-to-br from-sky-500/10 to-violet-500/10 border-2 border-procor-blue/30 scale-[1.05] shadow-2xl shadow-procor-blue/10' : 'bg-[var(--surface-card)] border border-[var(--border-subtle)] hover:border-white/10 hover:bg-[var(--surface-glass)]'}">
							{#if tier.popular}
								<div class="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-procor-blue to-violet-600 rounded-full text-[10px] font-black text-white uppercase tracking-wider shadow-lg">Most Popular</div>
							{/if}

							<h3 class="text-2xl font-black text-white mb-2">{tier.name}</h3>
							<p class="text-neutral-500 text-sm mb-8 leading-relaxed">{tier.desc}</p>

							<div class="flex items-baseline gap-1 mb-10">
								<span class="text-lg text-neutral-400 font-bold">$</span>
								<span class="text-5xl sm:text-6xl font-black text-white font-display">{getPrice(tier.monthlyPrice)}</span>
								<span class="text-neutral-500 text-sm font-bold">/month</span>
							</div>

							<button class="w-full py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2 transition-all duration-500 cursor-pointer group mb-12 {tier.popular ? 'bg-gradient-to-r from-procor-blue to-violet-600 text-white shadow-lg hover:shadow-xl hover:shadow-procor-blue/20 hover:scale-[1.02] active:scale-[0.98]' : 'bg-white/[0.06] border border-white/10 text-white hover:bg-white/[0.1]'}">
								{tier.cta}
								<ArrowRight size={18} class="group-hover:translate-x-1 transition-transform" />
							</button>

							<div class="space-y-4 mb-8">
								<p class="text-white/30 text-[10px] font-bold uppercase tracking-wider">What's included</p>
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
					</TiltCard>
				</div>
			{/each}
		</div>

		<div class="text-center">
			<p class="text-sm text-neutral-500 font-medium flex items-center justify-center gap-2">
				<Shield size={16} class="text-emerald-400" />
				30-day money-back guarantee · No credit card required · Cancel anytime
			</p>
		</div>
	</div>
</section>
