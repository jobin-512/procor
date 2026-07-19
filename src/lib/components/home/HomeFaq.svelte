<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { ArrowRight, Plus, Minus } from '@lucide/svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';

	let { faqs = [] } = $props();
	let openFaq = $state(null);

	onMount(() => {
		gsap.fromTo('.faq-header',
			{ y: 40, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
				scrollTrigger: { trigger: '.faq-header', start: 'top 85%', toggleActions: 'play none none none' } }
		);

		gsap.fromTo('.faq-item',
			{ y: 30, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out',
				scrollTrigger: { trigger: '.faq-list', start: 'top 80%', toggleActions: 'play none none none' } }
		);
	});
</script>

<section class="py-20 md:py-32 px-6 md:px-12 bg-[var(--surface-dark-alt)] relative overflow-hidden">
	<div class="absolute inset-0 pointer-events-none">
		<div class="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-sky-600/5 rounded-full blur-[200px]"></div>
	</div>

	<div class="max-w-4xl mx-auto relative z-10">
		<div class="faq-header mb-20 text-center max-w-2xl mx-auto">
			<SectionBadge variant="dark">FAQ</SectionBadge>
			<h2 class="text-4xl md:text-6xl font-black text-white font-display leading-tight mb-8 mt-6">
				Got <span class="bg-gradient-to-r from-procor-sky to-procor-blue bg-clip-text text-transparent">questions?</span>
			</h2>
			<p class="text-lg text-neutral-500 font-medium leading-relaxed">Everything you need to know about PROCOR.</p>
		</div>

		<div class="faq-list space-y-4">
			{#each faqs as faq, i}
				<div class="faq-item rounded-[var(--radius-xl)] bg-[var(--surface-card)] border {openFaq === i ? 'border-sky-500/30 bg-sky-500/5' : 'border-[var(--border-subtle)]'} transition-all duration-300 overflow-hidden group">
					<button
						class="w-full flex items-center justify-between p-8 text-left cursor-pointer hover:bg-white/[0.02] transition-colors"
						onclick={() => (openFaq = openFaq === i ? null : i)}
					>
						<span class="text-lg font-bold text-white pr-8">{faq.q}</span>
						<div class="shrink-0 w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center transition-transform duration-300 {openFaq === i ? 'rotate-45' : ''}">
							{#if openFaq === i}
								<Minus size={16} class="text-sky-400" />
							{:else}
								<Plus size={16} class="text-neutral-500" />
							{/if}
						</div>
					</button>

					<div class="overflow-hidden transition-all duration-500" style="max-height: {openFaq === i ? '300px' : '0px'}; opacity: {openFaq === i ? 1 : 0};">
						<div class="px-8 pb-8">
							<p class="text-neutral-400 leading-relaxed font-medium">{faq.a}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div class="text-center mt-16 bg-white/[0.02] rounded-[var(--radius-xl)] border border-[var(--border-subtle)] p-10">
			<p class="text-white font-bold text-lg mb-4">Still have questions?</p>
			<button class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-procor-blue to-procor-blue-dark text-white rounded-2xl font-black text-base transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-lg cursor-pointer group">
				Talk to our team <ArrowRight size={18} class="group-hover:translate-x-1 transition-transform" />
			</button>
		</div>
	</div>
</section>
