<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import {
		ArrowRight,
		Quote
	} from '@lucide/svelte';
	import GlowCard from '$lib/components/ui/GlowCard.svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';
	import TextReveal from '$lib/components/ui/TextReveal.svelte';

	const caseStudies = [
		{
			company: 'TechCorp Industries',
			industry: 'Technology',
			metric: '3.2x Faster Onboarding',
			quote: 'PROCOR transformed our hiring pipeline. We went from 14-day onboarding to under 5 days with full automation.',
			author: 'Sarah Chen, VP People',
			gradient: 'from-sky-600 to-indigo-700'
		},
		{
			company: 'MedCare Health Systems',
			industry: 'Healthcare',
			metric: '95% Fewer Violations',
			quote: 'Credential tracking used to be our biggest headache. Now it runs on autopilot with zero manual intervention.',
			author: 'Dr. James Wilson, COO',
			gradient: 'from-rose-600 to-pink-700'
		},
		{
			company: 'AutoMfg Corp',
			industry: 'Manufacturing',
			metric: '$2.4M Annual Savings',
			quote: 'The workforce analytics gave us visibility we never had. We optimized shifts and cut overtime by 60%.',
			author: 'Maria Rodriguez, CHRO',
			gradient: 'from-amber-600 to-orange-700'
		}
	];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const caseStudyCards = document.querySelectorAll('.case-study-card');
		if (caseStudyCards.length) {
			gsap.fromTo(caseStudyCards,
				{ y: 40, opacity: 0 },
				{
					y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
					scrollTrigger: { trigger: '.case-studies-section', start: 'top 80%' }
				}
			);
		}
	});
</script>

<section class="case-studies-section relative py-24 md:py-32 px-6 md:px-12 bg-[#030408] overflow-hidden">
	<div class="absolute inset-0 pointer-events-none overflow-hidden z-0">
		<div class="absolute top-[30%] right-[-10%] w-[40rem] h-[40rem] bg-rose-600/8 rounded-full blur-[180px]"></div>
	</div>

	<div class="max-w-7xl mx-auto relative z-10">
		<div class="text-center mb-16">
			<SectionBadge variant="gradient">Case Studies</SectionBadge>
			<TextReveal
				text="Real results, real companies"
				as="h2"
				class="text-3xl md:text-5xl font-black text-white font-display mt-6 mb-4"
			/>
			<p class="text-white/60 text-lg max-w-xl mx-auto">See how leading organizations transformed their workforce operations with PROCOR.</p>
		</div>

		<div class="grid md:grid-cols-3 gap-6">
			{#each caseStudies as cs, i}
				<div class="case-study-card group">
					<GlowCard className="h-full flex flex-col" glowColor="rgba(117, 194, 246, 0.15)">
						<div class="relative h-48 rounded-xl overflow-hidden mb-6">
							<div class="absolute inset-0 bg-gradient-to-br {cs.gradient}"></div>
							<div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
							<div class="absolute inset-0 flex items-end p-5">
								<div>
									<span class="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-[10px] font-bold text-white/80 uppercase tracking-wider mb-2">
										{cs.industry}
									</span>
									<h3 class="text-white font-black text-xl font-display">{cs.company}</h3>
								</div>
							</div>
						</div>

						<div class="px-7 pb-4">
							<p class="text-2xl font-black text-white font-display bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
								{cs.metric}
							</p>
						</div>

						<div class="px-7 pb-4 flex-1">
							<div class="flex gap-2 mb-3">
								<Quote size={18} class="text-sky-400/50 flex-shrink-0 mt-0.5" />
								<p class="text-white/65 text-sm leading-relaxed italic">{cs.quote}</p>
							</div>
							<p class="text-white/40 text-xs font-bold ml-7">— {cs.author}</p>
						</div>

						<div class="px-7 pb-7 mt-auto">
							<a href="/demo" class="inline-flex items-center gap-2 text-sky-400 text-sm font-bold hover:text-sky-300 transition-colors group/link">
								Read Full Story
								<ArrowRight size={14} class="group-hover/link:translate-x-1 transition-transform" />
							</a>
						</div>
					</GlowCard>
				</div>
			{/each}
		</div>
	</div>
</section>
