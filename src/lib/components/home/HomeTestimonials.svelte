<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { Star } from '@lucide/svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';

	let { testimonials = [] } = $props();

	onMount(() => {
		gsap.fromTo('.test-header',
			{ y: 40, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
				scrollTrigger: { trigger: '.test-header', start: 'top 85%', toggleActions: 'play none none none' } }
		);

		gsap.fromTo('.testimonial-card',
			{ y: 40, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
				scrollTrigger: { trigger: '.testimonials-marquee', start: 'top 80%', toggleActions: 'play none none none' } }
		);
	});
</script>

<section class="py-20 md:py-32 bg-[var(--surface-elevated)] relative overflow-hidden">
	<div class="max-w-7xl mx-auto px-6 md:px-12">
		<div class="test-header mb-16 text-center max-w-3xl mx-auto">
			<SectionBadge variant="violet">Customer Stories</SectionBadge>
			<h2 class="text-4xl md:text-6xl font-black text-procor-navy font-display leading-tight mb-8 mt-6">
				Loved by <span class="bg-gradient-to-r from-violet-500 to-procor-blue bg-clip-text text-transparent">13,000+</span> HR leaders
			</h2>
			<p class="text-lg text-slate-500 font-medium leading-relaxed">See how organizations transform their people operations.</p>
		</div>
	</div>

	<div class="testimonials-marquee relative overflow-hidden mb-6">
		<div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--surface-elevated)] to-transparent z-10 pointer-events-none"></div>
		<div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--surface-elevated)] to-transparent z-10 pointer-events-none"></div>

		<div class="flex gap-6 animate-scroll-x" style="width: max-content; animation-duration: 50s;">
			{#each [...testimonials, ...testimonials] as t}
				<div class="testimonial-card w-[380px] shrink-0 p-8 rounded-[var(--radius-bento)] bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-violet-200 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/5">
					<div class="flex gap-1 mb-6">
						{#each Array(t.rating) as _}
							<Star size={16} class="fill-amber-400 text-amber-400" />
						{/each}
					</div>
					<p class="text-slate-600 leading-relaxed font-medium mb-8 text-sm italic">&ldquo;{t.content}&rdquo;</p>
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
	</div>

	<div class="relative overflow-hidden">
		<div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--surface-elevated)] to-transparent z-10 pointer-events-none"></div>
		<div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--surface-elevated)] to-transparent z-10 pointer-events-none"></div>

		<div class="flex gap-6" style="width: max-content; animation: scroll-x 55s linear infinite reverse;">
			{#each [...testimonials, ...testimonials].reverse() as t}
				<div class="w-[380px] shrink-0 p-8 rounded-[var(--radius-bento)] bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-sky-200 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/5">
					<div class="flex gap-1 mb-6">
						{#each Array(t.rating) as _}
							<Star size={16} class="fill-amber-400 text-amber-400" />
						{/each}
					</div>
					<p class="text-slate-600 leading-relaxed font-medium mb-8 text-sm italic">&ldquo;{t.content}&rdquo;</p>
					<div class="flex items-center gap-4 pt-6 border-t border-slate-100">
						<div class="w-12 h-12 rounded-full overflow-hidden shadow-md ring-2 ring-sky-100">
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
	</div>
</section>
