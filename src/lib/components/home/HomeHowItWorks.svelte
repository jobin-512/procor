<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { ArrowRight } from '@lucide/svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';

	let { steps = [] } = $props();

	onMount(() => {
		gsap.fromTo('.hiw-header',
			{ y: 40, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
				scrollTrigger: { trigger: '.hiw-header', start: 'top 85%', toggleActions: 'play none none none' } }
		);

		gsap.fromTo('.step-item',
			{ x: (i) => i % 2 === 0 ? -60 : 60, opacity: 0 },
			{ x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out',
				scrollTrigger: { trigger: '.steps-timeline', start: 'top 80%', toggleActions: 'play none none none' } }
		);
	});
</script>

<section class="py-20 md:py-32 px-6 md:px-12 bg-[var(--surface-elevated)] relative overflow-hidden">
	<div class="max-w-7xl mx-auto">
		<div class="hiw-header mb-24 text-center max-w-3xl mx-auto">
			<SectionBadge variant="emerald">How It Works</SectionBadge>
			<h2 class="text-4xl md:text-6xl font-black text-procor-navy font-display leading-tight mb-8 mt-8">
				From onboarding to
				<span class="bg-gradient-to-r from-procor-blue to-violet-500 bg-clip-text text-transparent">optimization</span> in four steps
			</h2>
			<p class="text-lg text-slate-500 font-medium leading-relaxed">
				We've streamlined the entire journey so your team starts realizing value within days, not months.
			</p>
		</div>

		<div class="steps-timeline relative max-w-4xl mx-auto">
			<div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-200 via-sky-200 to-violet-200 -translate-x-1/2"></div>

			{#each steps as step, i}
				<div class="step-item relative flex items-start gap-8 mb-16 last:mb-0 {i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}">
					<div class="relative z-10 shrink-0">
						<div class="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 text-white font-black text-xl font-display">
							{step.step}
						</div>
						<div class="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping" style="animation-duration: 3s;"></div>
					</div>

					<div class="flex-1 md:w-[calc(50%-4rem)]">
						<div class="group p-8 rounded-[var(--radius-xl)] bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-emerald-200 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/5">
							<div class="flex items-center gap-4 mb-4">
								<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
									<step.icon size={22} class="text-white" />
								</div>
								<h3 class="text-xl font-black text-procor-navy group-hover:text-emerald-700 transition-colors">{step.title}</h3>
							</div>
							<p class="text-slate-500 leading-relaxed font-medium text-sm">{step.desc}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div class="text-center mt-16">
			<button class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-procor-blue to-violet-600 text-white rounded-2xl font-black text-base transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl cursor-pointer group">
				Start Your Journey <ArrowRight size={20} class="group-hover:translate-x-1 transition-transform" />
			</button>
		</div>
	</div>
</section>
