<script>
	import {
		ArrowRight,
		ChevronRight,
		Sparkles
	} from '@lucide/svelte';
	import GradientButton from '$lib/components/ui/GradientButton.svelte';
</script>

<section class="final-cta-section relative py-24 md:py-32 px-6 md:px-12 bg-[#030408] overflow-hidden">
	<div class="absolute inset-0 pointer-events-none overflow-hidden z-0">
		<div class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gradient-to-r from-sky-600/15 via-violet-600/15 to-indigo-600/15 rounded-full blur-[200px]"></div>
	</div>

	<div class="max-w-4xl mx-auto relative z-10 text-center">
		<div class="inline-flex items-center gap-3 px-5 py-2 bg-white/[0.06] border border-white/[0.1] rounded-full mb-8">
			<Sparkles size={14} class="text-sky-400" />
			<span class="text-white/60 text-xs font-bold uppercase tracking-wider">Ready to get started?</span>
		</div>

		<h2 class="text-4xl md:text-6xl lg:text-7xl font-black text-white font-display leading-[0.9] mb-6">
			Ready to Transform
			<br />
			<span class="bg-gradient-to-r from-sky-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent italic">
				Your Industry?
			</span>
		</h2>

		<p class="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
			Join 500+ companies already using PROCOR to modernize their workforce operations. Start your transformation today.
		</p>

		<div class="flex flex-col sm:flex-row justify-center gap-4">
			<GradientButton href="/demo" variant="primary" size="lg">
				Schedule a Demo <ArrowRight size={20} />
			</GradientButton>
			<GradientButton href="/pricing" variant="secondary" size="lg" class="!bg-white/[0.06] !border-white/[0.12] !text-white hover:!bg-white/[0.1]">
				View Pricing <ChevronRight size={20} />
			</GradientButton>
		</div>
	</div>
</section>
