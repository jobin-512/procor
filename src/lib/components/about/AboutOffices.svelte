<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { MapPin, Phone } from '@lucide/svelte';
	import TiltCard from '$lib/components/ui/TiltCard.svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';

	let { offices = [] } = $props();

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo('.office-card',
			{ y: 40, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
				scrollTrigger: { trigger: '.offices-grid', start: 'top 85%', toggleActions: 'play none none none' } }
		);
	});
</script>

<section class="relative py-32 px-6 md:px-12 bg-[var(--surface-darker)]">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-20">
			<SectionBadge variant="dark">Global Presence</SectionBadge>
			<h2
				class="text-3xl sm:text-4xl md:text-6xl font-black font-display text-white mt-6 tracking-tight"
			>
				Find Us Worldwide
			</h2>
			<p class="mt-4 text-lg text-white/50 max-w-xl mx-auto font-medium">
				From coast to coast and continent to continent, we're where our clients need us.
			</p>
		</div>

		<div class="offices-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each offices as office, i}
				<div class="office-card">
					<TiltCard tiltAmount={8} glareOpacity={0.1}>
						<div
							class="relative overflow-hidden rounded-[var(--radius-lg)] p-8 h-full group cursor-default bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500"
						>
							<div
								class="w-full h-32 rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] mb-6 flex items-center justify-center overflow-hidden relative"
							>
								<MapPin
									size={28}
									class="text-white/10 group-hover:text-sky-500/30 transition-colors duration-500"
								/>
								<div
									class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(117,194,246,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
								></div>
							</div>

							<span
								class="inline-block px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-sky-400/70 bg-sky-500/10 border border-sky-500/20 rounded-full mb-4"
							>
								{office.type}
							</span>

							<h3
								class="text-xl font-black font-display text-white mb-3 group-hover:text-sky-300 transition-colors"
							>
								{office.city}
							</h3>

							<div class="space-y-3">
								<div class="flex items-start gap-3">
									<MapPin size={14} class="text-white/20 mt-0.5 flex-shrink-0" />
									<p class="text-white/40 text-sm leading-relaxed">{office.address}</p>
								</div>
								<div class="flex items-center gap-3">
									<Phone size={14} class="text-white/20 flex-shrink-0" />
									<p class="text-white/40 text-sm">{office.phone}</p>
								</div>
							</div>
						</div>
					</TiltCard>
				</div>
			{/each}
		</div>
	</div>
</section>
