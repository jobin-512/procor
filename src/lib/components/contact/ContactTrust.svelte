<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { Shield, Lock, Globe } from '@lucide/svelte';

	let {
		trustBadges = [
			{ icon: Shield, text: 'SOC 2 Type II' },
			{ icon: Lock, text: 'GDPR Compliant' },
			{ icon: Globe, text: 'ISO 27001' }
		]
	} = $props();

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const ctx = gsap.context(() => {
			gsap.fromTo('.trust-item', { y: 20, opacity: 0 }, {
				scrollTrigger: { trigger: '.trust-bar', start: 'top 95%', toggleActions: 'play none none reverse' },
				y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out'
			});
		});

		return () => ctx.revert();
	});
</script>

<section class="relative py-16 px-6 md:px-12 bg-[var(--surface-dark)]">
	<div class="max-w-4xl mx-auto relative z-10">
		<div class="trust-bar flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 py-10 px-8 rounded-3xl bg-white/[0.02] border border-white/[0.06]">
			{#each trustBadges as badge, i}
				<div class="trust-item flex items-center gap-3">
					<div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
						<badge.icon size={18} class="text-emerald-400" />
					</div>
					<span class="text-sm font-bold text-white">{badge.text}</span>
				</div>
			{/each}
		</div>
		<p class="trust-item text-center mt-6 text-sm text-neutral-500 font-medium">
			Your data is safe with us. We follow industry-leading security practices.
		</p>
	</div>
</section>