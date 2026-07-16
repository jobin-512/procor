<script>
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';
	import FloatingOrb from '$lib/components/ui/FloatingOrb.svelte';
	import ParticleField from '$lib/components/ui/ParticleField.svelte';
	import GradientButton from '$lib/components/ui/GradientButton.svelte';
	import { Check, X, Star, ArrowRight } from '@lucide/svelte';

	const comparisonData = [
		{ feature: 'Global Payroll (140+ countries)', procor: true, competitor1: false, competitor2: true },
		{ feature: 'AI-Powered Analytics', procor: true, competitor1: true, competitor2: false },
		{ feature: 'Real-Time Dashboards', procor: true, competitor1: true, competitor2: true },
		{ feature: 'Mobile App', procor: true, competitor1: true, competitor2: false },
		{ feature: 'Custom Workflows', procor: true, competitor1: true, competitor2: true },
		{ feature: 'Onboarding Automation', procor: true, competitor1: false, competitor2: false },
		{ feature: 'Predictive Turnover', procor: true, competitor1: false, competitor2: false },
		{ feature: '24/7 Support', procor: true, competitor1: true, competitor2: false },
		{ feature: 'API Access', procor: true, competitor1: true, competitor2: true },
		{ feature: 'Free Tier Available', procor: true, competitor1: false, competitor2: false }
	];
</script>

<section class="relative py-20 md:py-32 surface-dark overflow-hidden">
	<FloatingOrb color="rgba(16, 185, 129, 0.2)" size="40rem" className="top-0 -left-48" blur="200px" speed={18} />
	<FloatingOrb color="rgba(117, 194, 246, 0.18)" size="35rem" className="bottom-0 -right-40" blur="180px" speed={22} />
	<FloatingOrb color="rgba(139, 92, 246, 0.15)" size="28rem" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" blur="150px" speed={28} parallax={false} />
	<ParticleField count={50} color="rgba(16, 185, 129, 0.4)" className="pointer-events-none" />

	<div class="max-w-5xl mx-auto px-6 relative z-10">
		<div class="text-center mb-14" data-reveal>
			<SectionBadge variant="emerald">Why PROCOR</SectionBadge>
			<h2 class="mt-6 text-3xl md:text-4xl lg:text-5xl font-black text-white font-display">
				Compare & Decide
			</h2>
			<p class="mt-4 text-[var(--text-secondary)] max-w-xl mx-auto text-base md:text-lg">
				See how PROCOR stacks up against the competition.
			</p>
		</div>

		<div class="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl" data-reveal>
			<table class="w-full text-left border-collapse">
				<thead>
					<tr class="border-b border-white/10 bg-white/5">
						<th class="py-4 px-4 text-sm font-bold text-[var(--text-muted)] w-2/5">Feature</th>
						<th class="py-4 px-4 text-center">
							<span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-procor-sky/15 border border-procor-sky/30 text-procor-sky text-xs font-black tracking-wider uppercase">
								<Star size={12} /> PROCOR
							</span>
						</th>
						<th class="py-4 px-4 text-center text-xs font-bold text-[var(--text-muted)] tracking-wider uppercase">
							Competitor A
						</th>
						<th class="py-4 px-4 text-center text-xs font-bold text-[var(--text-muted)] tracking-wider uppercase">
							Competitor B
						</th>
					</tr>
				</thead>
				<tbody>
					{#each comparisonData as row}
						<tr class="compare-row border-b border-white/5 hover:bg-white/5 transition-colors">
							<td class="py-3.5 px-4 text-sm text-[var(--text-secondary)]">{row.feature}</td>
							<td class="py-3.5 px-4 text-center">
								{#if row.procor}
									<span class="inline-flex w-6 h-6 rounded-full bg-emerald-500/20 items-center justify-center">
										<Check size={14} class="text-emerald-400" />
									</span>
								{:else}
									<span class="inline-flex w-6 h-6 rounded-full bg-red-500/20 items-center justify-center">
										<X size={14} class="text-red-400" />
									</span>
								{/if}
							</td>
							<td class="py-3.5 px-4 text-center">
								{#if row.competitor1}
									<span class="inline-flex w-6 h-6 rounded-full bg-emerald-500/15 items-center justify-center">
										<Check size={14} class="text-emerald-400/70" />
									</span>
								{:else}
									<span class="inline-flex w-6 h-6 rounded-full bg-red-500/15 items-center justify-center">
										<X size={14} class="text-red-400/70" />
									</span>
								{/if}
							</td>
							<td class="py-3.5 px-4 text-center">
								{#if row.competitor2}
									<span class="inline-flex w-6 h-6 rounded-full bg-emerald-500/15 items-center justify-center">
										<Check size={14} class="text-emerald-400/70" />
									</span>
								{:else}
									<span class="inline-flex w-6 h-6 rounded-full bg-red-500/15 items-center justify-center">
										<X size={14} class="text-red-400/70" />
									</span>
								{/if}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<div class="text-center mt-10" data-reveal>
			<GradientButton href="/pricing" size="lg">
				<Star size={20} class="mr-2" /> Start Free Trial <ArrowRight size={20} />
			</GradientButton>
		</div>
	</div>
</section>
