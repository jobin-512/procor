<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { Quote, ChevronDown } from '@lucide/svelte';
	import TiltCard from '$lib/components/ui/TiltCard.svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';

	let { culturePillars = [], testimonials = [] } = $props();
	let activeTestimonial = $state(0);

	function nextTestimonial() {
		activeTestimonial = (activeTestimonial + 1) % testimonials.length;
	}
	function prevTestimonial() {
		activeTestimonial =
			(activeTestimonial - 1 + testimonials.length) % testimonials.length;
	}

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo('.culture-card',
			{ y: 40, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out',
				scrollTrigger: { trigger: '.culture-grid', start: 'top 80%', toggleActions: 'play none none none' } }
		);
	});
</script>

<section class="relative py-32 px-6 md:px-12 bg-[var(--surface-dark)]">
	<div
		class="absolute inset-0 pointer-events-none"
		style="background: radial-gradient(ellipse at 70% 30%, rgba(139,92,246,0.06) 0%, transparent 50%);"
	></div>

	<div class="max-w-7xl mx-auto relative z-10">
		<div class="text-center mb-20">
			<SectionBadge variant="sky">Life at PROCOR</SectionBadge>
			<h2
				class="text-3xl sm:text-4xl md:text-6xl font-black font-display text-white mt-6 tracking-tight"
			>
				Why People Love<br class="hidden sm:block" /> Working Here
			</h2>
		</div>

		<div class="culture-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
			{#each culturePillars as pillar, i}
				<div class="culture-card">
					<TiltCard tiltAmount={8} glareOpacity={0.1}>
						<div
							class="relative overflow-hidden rounded-[var(--radius-lg)] p-8 h-full group cursor-default bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500"
						>
							<div
								class="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
							>
								<svelte:component this={pillar.icon} size={20} class="text-sky-400" />
							</div>
							<h3 class="text-lg font-black font-display text-white mb-2">{pillar.title}</h3>
							<p class="text-white/40 text-sm leading-relaxed">{pillar.description}</p>
						</div>
					</TiltCard>
				</div>
			{/each}
		</div>

		<div class="max-w-3xl mx-auto text-center">
			<div class="relative min-h-[200px] flex items-center justify-center">
				{#each testimonials as t, i}
					{#if i === activeTestimonial}
						<div class="animate-fade-in">
							<Quote size={32} class="text-sky-500/30 mx-auto mb-6" />
							<blockquote
								class="text-xl md:text-2xl font-bold text-white/90 leading-relaxed mb-8 italic"
							>
								"{t.quote}"
							</blockquote>
							<div>
								<p class="text-white font-black font-display">{t.name}</p>
								<p class="text-sky-400/60 text-sm font-bold">
									{t.role} · {t.tenure}
								</p>
							</div>
						</div>
					{/if}
				{/each}
			</div>

			<div class="flex items-center justify-center gap-4 mt-10">
				<button
					onclick={prevTestimonial}
					class="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300 cursor-pointer"
					aria-label="Previous testimonial"
				>
					<ChevronDown size={18} class="rotate-90" />
				</button>
				<div class="flex gap-2">
					{#each testimonials as _, i}
						<button
							onclick={() => (activeTestimonial = i)}
							class="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer {i ===
							activeTestimonial
								? 'bg-sky-400 w-6'
								: 'bg-white/20 hover:bg-white/40'}"
							aria-label="Go to testimonial {i + 1}"
						></button>
					{/each}
				</div>
				<button
					onclick={nextTestimonial}
					class="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300 cursor-pointer"
					aria-label="Next testimonial"
				>
					<ChevronDown size={18} class="-rotate-90" />
				</button>
			</div>
		</div>
	</div>
</section>
