<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';

	let { timeline = [] } = $props();
	let timelineLine = $state(null);

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo('.timeline-node',
			{ x: -40, opacity: 0 },
			{ x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out',
				scrollTrigger: { trigger: '.timeline-container', start: 'top 70%', toggleActions: 'play none none none' } }
		);

		if (timelineLine) {
			gsap.fromTo(
				timelineLine,
				{ scaleY: 0 },
				{
					scaleY: 1,
					duration: 2.5,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: '.timeline-container',
						start: 'top 70%',
						end: 'bottom 30%',
						scrub: 1
					}
				}
			);
		}
	});
</script>

<section class="relative py-32 px-6 md:px-12 bg-[var(--surface-dark)]">
	<div
		class="absolute inset-0 pointer-events-none"
		style="background: radial-gradient(ellipse at 30% 50%, rgba(29,93,155,0.08) 0%, transparent 60%);"
	></div>

	<div class="max-w-5xl mx-auto relative z-10">
		<div class="text-center mb-20">
			<SectionBadge variant="dark">Our Journey</SectionBadge>
			<h2
				class="text-3xl sm:text-4xl md:text-6xl font-black font-display text-white mt-6 tracking-tight"
			>
				From Idea to Impact
			</h2>
			<p class="mt-4 text-lg text-white/50 max-w-xl mx-auto font-medium">
				A timeline of bold bets, breakthroughs, and relentless progress.
			</p>
		</div>

		<div class="timeline-container relative">
			<div class="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
				<div class="absolute inset-0 bg-white/[0.06]"></div>
				<div
					bind:this={timelineLine}
					class="absolute top-0 left-0 w-full bg-gradient-to-b from-sky-500 via-violet-500 to-indigo-600 origin-top"
					style="height: 100%;"
				></div>
			</div>

			<div class="space-y-12 md:space-y-0">
				{#each timeline as item, i}
					<div
						class="timeline-node relative flex items-start gap-6 md:gap-0 {i % 2 === 0
							? 'md:flex-row'
							: 'md:flex-row-reverse'} mb-16 last:mb-0"
					>
						<div class="flex-1 {i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}">
							<div class="group">
								<span
									class="inline-block text-xs font-black uppercase tracking-[0.3em] text-sky-400/70 mb-2"
								>
									{item.year}
								</span>
								<h3
									class="text-xl md:text-2xl font-black font-display text-white mb-2 group-hover:text-sky-300 transition-colors duration-300"
								>
									{item.title}
								</h3>
								<p class="text-white/50 leading-relaxed font-medium text-sm md:text-base">
									{item.description}
								</p>
							</div>
						</div>

						<div class="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
							<div
								class="w-12 h-12 rounded-full bg-[var(--surface-dark)] border-2 border-white/10 flex items-center justify-center group-hover:border-sky-500/50 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-500"
							>
								<svelte:component this={item.icon} size={18} class="text-sky-400/70" />
							</div>
						</div>

						<div class="hidden md:block flex-1"></div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
