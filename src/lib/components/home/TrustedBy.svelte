<!-- TrustedBy — brand logos ticker, continuous CSS scroll -->
<script>
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';
	import { animateHeader, createScrollContext } from '$lib/utils/animations.js';
	import { onMount } from 'svelte';

	let section = $state();

	onMount(() => {
		return createScrollContext(() => {
			animateHeader('.trusted-header');
		}, section);
	});

	const brands = [
		{ name: 'Standard Chartered', icon: 'SC' },
		{ name: 'Deloitte', icon: 'D' },
		{ name: 'Accenture', icon: 'A' },
		{ name: 'Salesforce', icon: 'SF' },
		{ name: 'NVIDIA', icon: 'NV' },
		{ name: 'Shopify', icon: 'S' },
		{ name: 'Stripe', icon: 'ST' },
		{ name: 'Workday', icon: 'W' }
	];
</script>

<section
	class="py-20 px-6 md:px-12 bg-[var(--surface-elevated)] overflow-hidden"
	bind:this={section}
>
	<div class="max-w-7xl mx-auto text-center trusted-header mb-14">
		<SectionBadge variant="slate">Trusted by market leaders</SectionBadge>
		<h2 class="text-3xl md:text-4xl font-black text-procor-navy font-display leading-tight mt-6">
			Powered by the companies that power the world
		</h2>
	</div>

	<div class="brands-track overflow-hidden relative">
		<div
			class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"
		></div>
		<div
			class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"
		></div>

		<!-- Continuous scroll: tripled items for seamless loop, no GSAP — pure CSS -->
		<div class="flex gap-16 items-center animate-scroll-x h-40" style="width: max-content;">
			{#each [...brands, ...brands, ...brands] as brand}
				<div
					class="flex items-center gap-3 px-8 py-5 bg-slate-50 rounded-[var(--radius-xl)] border border-slate-100 hover:border-procor-blue/20 hover:bg-sky-50/50 transition-all duration-[var(--duration-slow)] cursor-default shrink-0"
				>
					<div
						class="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-sm font-black text-procor-navy"
					>
						{brand.icon}
					</div>
					<span
						class="text-lg font-bold text-procor-navy whitespace-nowrap tracking-tight opacity-60 hover:opacity-100 transition-opacity"
						>{brand.name}</span
					>
				</div>
			{/each}
		</div>
	</div>
</section>
