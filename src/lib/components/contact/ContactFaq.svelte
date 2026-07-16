<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { Plus, Minus } from '@lucide/svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';

	let {
		faqs = [
			{
				q: 'How quickly will I get a response?',
				a: 'Our team typically responds within 2 hours during business hours. For urgent matters, reach out by phone and you\'ll be connected with someone immediately.'
			},
			{
				q: 'Do you offer free demos?',
				a: 'Yes! We offer a personalized 30-minute demo tailored to your industry. You\'ll see exactly how PROCOR can solve your specific HR challenges.'
			},
			{
				q: 'Can I schedule a call?',
				a: 'Absolutely. Use the contact form to request a call and pick a time that works for you. We\'ll have the right specialist ready to discuss your needs.'
			},
			{
				q: 'What support channels are available?',
				a: 'We offer email, live chat, phone support, and a comprehensive knowledge base. Enterprise customers also get a dedicated account manager and custom SLAs.'
			}
		]
	} = $props();

	let openFaq = $state(null);

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const ctx = gsap.context(() => {
			gsap.fromTo('.faq-item', { y: 30, opacity: 0 }, {
				scrollTrigger: { trigger: '.faq-list', start: 'top 85%', toggleActions: 'play none none reverse' },
				y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out'
			});
		});

		return () => ctx.revert();
	});
</script>

<section class="relative py-20 md:py-32 px-6 md:px-12 bg-[var(--surface-dark-alt)]">
	<div class="absolute inset-0 pointer-events-none">
		<div class="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-sky-600/5 rounded-full blur-[200px]"></div>
	</div>

	<div class="max-w-3xl mx-auto relative z-10">
		<div class="text-center mb-16">
			<SectionBadge variant="dark">FAQ</SectionBadge>
			<h2 class="text-3xl md:text-5xl font-black text-white font-display mt-6 mb-4 tracking-tight">
				Contact <span class="bg-gradient-to-r from-procor-sky to-violet-400 bg-clip-text text-transparent">questions</span>
			</h2>
			<p class="text-neutral-500 font-medium">Quick answers to common inquiries.</p>
		</div>

		<div class="faq-list space-y-4">
			{#each faqs as faq, i}
				<div class="faq-item rounded-2xl bg-white/[0.03] border {openFaq === i ? 'border-sky-500/30 bg-sky-500/5' : 'border-white/[0.06]'} transition-all duration-500 overflow-hidden">
					<button
						class="w-full flex items-center justify-between p-7 text-left cursor-pointer hover:bg-white/[0.02] transition-colors"
						onclick={() => openFaq = openFaq === i ? null : i}
					>
						<span class="text-base font-bold text-white pr-6">{faq.q}</span>
						{#if openFaq === i}
							<Minus size={18} class="text-sky-400 shrink-0" />
						{:else}
							<Plus size={18} class="text-neutral-500 shrink-0" />
						{/if}
					</button>
					{#if openFaq === i}
						<div class="px-7 pb-7">
							<p class="text-neutral-400 leading-relaxed font-medium text-sm">{faq.a}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>