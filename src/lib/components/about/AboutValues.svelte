<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import TiltCard from '$lib/components/ui/TiltCard.svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';

	let { values = [] } = $props();

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo('.value-card',
			{ y: 60, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out',
				scrollTrigger: { trigger: '.values-grid', start: 'top 80%', toggleActions: 'play none none none' } }
		);
	});
</script>

<section class="relative py-32 px-6 md:px-12 bg-white">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-20">
			<SectionBadge variant="sky">Our Values</SectionBadge>
			<h2
				class="text-3xl sm:text-4xl md:text-6xl font-black font-display text-[var(--text-dark)] mt-6 tracking-tight"
			>
				What We Stand For
			</h2>
			<p class="mt-4 text-lg text-slate-500 max-w-xl mx-auto font-medium">
				Every decision we make is rooted in these four pillars. They guide our product, our
				people, and our promise to the world.
			</p>
		</div>

		<div class="values-grid grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each values as value, i}
				<div class="value-card">
					<TiltCard tiltAmount={10} glareOpacity={0.12}>
						<div
							class="relative overflow-hidden rounded-[var(--radius-bento)] p-8 md:p-10 h-full min-h-[280px] flex flex-col group cursor-default"
							style="background: linear-gradient(135deg, rgba(0,45,91,0.03) 0%, rgba(0,0,0,0.01) 100%); border: 1px solid rgba(0,0,0,0.06);"
						>
							<div
								class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br {value.color}"
							></div>

							<div
								class="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br {value.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
							>
								<svelte:component this={value.icon} size={24} class={value.iconColor} />
							</div>

							<h3
								class="relative z-10 text-xl md:text-2xl font-black font-display text-slate-900 mb-3"
							>
								{value.title}
							</h3>
							<p class="relative z-10 text-slate-500 leading-relaxed font-medium text-sm md:text-base">
								{value.description}
							</p>

							<div
								class="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl {value.color} rounded-tl-[3rem] opacity-0 group-hover:opacity-40 transition-opacity duration-700"
							></div>
						</div>
					</TiltCard>
				</div>
			{/each}
		</div>
	</div>
</section>
