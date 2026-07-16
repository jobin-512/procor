<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { Handshake } from '@lucide/svelte';
	import GradientButton from '$lib/components/ui/GradientButton.svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';
	import TextReveal from '$lib/components/ui/TextReveal.svelte';

	const partners = [
		'Salesforce', 'Workday', 'SAP', 'Oracle', 'Microsoft',
		'Slack', 'Zoom', 'ADP', 'QuickBooks', 'Okta',
		'Jira', 'Notion'
	];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const partnerLogos = document.querySelectorAll('.partner-logo');
		if (partnerLogos.length) {
			gsap.fromTo(partnerLogos,
				{ scale: 0.8, opacity: 0 },
				{
					scale: 1, opacity: 1, duration: 0.5, stagger: 0.05, ease: 'back.out(1.2)',
					scrollTrigger: { trigger: '.partners-grid', start: 'top 85%' }
				}
			);
		}
	});
</script>

<section class="relative py-24 md:py-32 px-6 md:px-12 bg-[#030408] overflow-hidden">
	<div class="max-w-7xl mx-auto relative z-10">
		<div class="text-center mb-14">
			<SectionBadge variant="dark">Integrations</SectionBadge>
			<TextReveal
				text="Plays well with others"
				as="h2"
				class="text-3xl md:text-5xl font-black text-white font-display mt-6 mb-4"
			/>
			<p class="text-white/60 text-lg max-w-xl mx-auto">Seamlessly connects with the tools your team already uses.</p>
		</div>

		<div class="partners-grid grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
			{#each partners as partner}
				<div class="partner-logo group">
					<div class="aspect-[3/2] rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 p-4">
						<span class="text-white/40 font-bold text-sm group-hover:text-white/70 transition-colors text-center">{partner}</span>
					</div>
				</div>
			{/each}
		</div>

		<div class="text-center mt-12">
			<GradientButton href="/demo" variant="ghost" size="md">
				<Handshake size={18} /> Become a Partner
			</GradientButton>
		</div>
	</div>
</section>
