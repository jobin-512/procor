<!-- Testimonials — customer stories with design tokens -->
<script>
	import { onMount } from 'svelte';
	import { Star, Quote } from '@lucide/svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';
	import { animateHeader, animateCards, createScrollContext } from '$lib/utils/animations.js';

	let section = $state();

	onMount(() => {
		return createScrollContext(() => {
			animateHeader('.test-header');
			animateCards('.testimonial-card', { trigger: '.testimonials-grid', stagger: 0.15 });
		}, section);
	});

	const testimonials = [
		{
			name: 'Sarah Jenkins',
			role: 'Chief People Officer',
			company: 'GlobalTech Solutions',
			content:
				"PROCOR didn't just automate our HR; they redesigned how we think about workforce growth. The AI matching alone reduced our time-to-hire by 40%.",
			rating: 5,
			avatar: 'https://i.pravatar.cc/150?img=33'
		},
		{
			name: 'Marcus Chen',
			role: 'VP of Operations',
			company: 'FinServe International',
			content:
				'Managing payroll across 12 countries used to be a nightmare. Now it happens automatically with zero errors. The compliance engine is genuinely magical.',
			rating: 5,
			avatar: 'https://i.pravatar.cc/150?img=12'
		},
		{
			name: 'Elena Rodriguez',
			role: 'HR Director',
			company: 'MedCare Health Systems',
			content:
				'We evaluated 7 platforms before choosing PROCOR. The modular approach let us start small and scale confidently. Six months in, employee satisfaction is up 28%.',
			rating: 5,
			avatar: 'https://i.pravatar.cc/150?img=47'
		},
		{
			name: 'David Okonkwo',
			role: 'CEO',
			company: 'NovaBridge Consulting',
			content:
				"As a consulting firm, we're constantly scaling teams up and down. PROCOR's elasticity is unmatched — we went from 200 to 2,000 employees in 18 months without a hiccup.",
			rating: 5,
			avatar: 'https://i.pravatar.cc/150?img=59'
		}
	];

	let active = $state(0);

	onMount(() => {
		const iv = setInterval(() => {
			active = (active + 1) % testimonials.length;
		}, 6000);
		return () => clearInterval(iv);
	});
</script>

<section
	class="py-20 md:py-32 px-6 md:px-12 bg-[var(--surface-elevated)] relative overflow-hidden"
	bind:this={section}
>
	<div class="max-w-7xl mx-auto relative z-10">
		<!-- Header -->
		<div class="test-header mb-24 text-center max-w-3xl mx-auto">
			<SectionBadge variant="violet">Customer Stories</SectionBadge>
			<h2
				class="text-4xl md:text-6xl font-black text-procor-navy font-display leading-tight mb-8 mt-6"
			>
				Loved by
				<span class="bg-gradient-to-r from-violet-500 to-procor-blue bg-clip-text text-transparent"
					>13,000+</span
				> HR leaders
			</h2>
			<p class="text-lg text-slate-500 font-medium leading-relaxed">
				Don't take our word for it. See how organizations transform their people operations.
			</p>
		</div>

		<!-- Cards Grid -->
		<div class="testimonials-grid grid md:grid-cols-2 gap-8 mb-16">
			{#each testimonials as t}
				<div
					class="testimonial-card group relative p-8 md:p-10 rounded-[var(--radius-bento)] bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-violet-200 transition-all duration-[var(--duration-slower)] hover:shadow-2xl hover:shadow-violet-500/5"
				>
					<!-- Quote mark -->
					<Quote
						size={36}
						class="text-violet-100 mb-6 group-hover:text-violet-200 transition-colors"
					/>

					<!-- Stars -->
					<div class="flex gap-1 mb-8">
						{#each Array(t.rating) as _}
							<Star size={18} class="fill-amber-400 text-amber-400" />
						{/each}
					</div>

					<p class="text-slate-600 leading-relaxed font-medium mb-10 text-base md:text-lg italic">
						&ldquo;{t.content}&rdquo;
					</p>

					<div class="flex items-center gap-4 pt-6 border-t border-slate-100">
						<div class="w-12 h-12 rounded-full overflow-hidden shadow-md ring-2 ring-violet-100">
							<img src={t.avatar} alt={t.name} class="w-full h-full object-cover" />
						</div>
						<div>
							<p class="font-black text-procor-navy text-sm">{t.name}</p>
							<p class="text-slate-400 text-xs font-bold">{t.role}, {t.company}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Indicators -->
		<div class="flex justify-center gap-3">
			{#each testimonials as _, i}
				<button
					aria-label={`Go to testimonial ${i + 1}`}
					class="rounded-full transition-all duration-[var(--duration-slow)] cursor-pointer {active ===
					i
						? 'w-12 h-3 bg-gradient-to-r from-violet-500 to-procor-blue'
						: 'w-3 h-3 bg-slate-200 hover:bg-slate-300'}"
					onclick={() => (active = i)}
				></button>
			{/each}
		</div>
	</div>

	<!-- Decorative -->
	<div
		class="absolute top-0 right-0 w-[40rem] h-[40rem] bg-violet-100/30 rounded-full blur-[200px] pointer-events-none translate-x-1/4 -translate-y-1/4"
	></div>
</section>
