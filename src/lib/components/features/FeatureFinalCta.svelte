<script>
	import GradientButton from '$lib/components/ui/GradientButton.svelte';
	import FloatingOrb from '$lib/components/ui/FloatingOrb.svelte';
	import ParticleField from '$lib/components/ui/ParticleField.svelte';
	import { Check, ArrowRight, Calendar } from '@lucide/svelte';
</script>

<section class="relative py-20 md:py-32 overflow-hidden bg-[var(--surface-base)]">
	<FloatingOrb color="rgba(117, 194, 246, 0.15)" size="35rem" className="-top-32 -right-32" blur="180px" speed={20} />
	<FloatingOrb color="rgba(139, 92, 246, 0.12)" size="28rem" className="bottom-32 -left-32" blur="180px" speed={25} />
	<ParticleField count={30} color="rgba(117, 194, 246, 0.35)" className="pointer-events-none" />

	<div class="absolute inset-0 pointer-events-none grid-overlay opacity-[0.04]"></div>

	<div class="max-w-4xl mx-auto px-6 text-center relative z-10" data-reveal>
		<h2 class="text-3xl md:text-4xl lg:text-6xl font-black text-[var(--text-dark)] font-display leading-tight">
			Ready to Transform
			<br />
			<span class="text-gradient-brand">Your Workforce?</span>
		</h2>
		<p class="mt-6 text-[var(--text-dark-muted)] max-w-lg mx-auto text-base md:text-lg leading-relaxed">
			Join 2,000+ companies already using PROCOR to streamline their HR operations.
			Start your free trial today — no credit card required.
		</p>

		<div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
			<GradientButton href="/signup" size="lg">
				Start Free Trial <ArrowRight size={20} />
			</GradientButton>
			<GradientButton href="/demo" variant="secondary" size="lg">
				Book a Demo <Calendar size={20} />
			</GradientButton>
		</div>

		<div class="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[var(--text-dark-muted)]">
			<span class="flex items-center gap-2">
				<Check size={16} class="text-emerald-500" /> Free 14-day trial
			</span>
			<span class="flex items-center gap-2">
				<Check size={16} class="text-emerald-500" /> No credit card
			</span>
			<span class="flex items-center gap-2">
				<Check size={16} class="text-emerald-500" /> Cancel anytime
			</span>
		</div>
	</div>
</section>
