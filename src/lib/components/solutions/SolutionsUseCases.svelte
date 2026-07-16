<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import {
		Globe,
		Banknote,
		Target,
		BarChart3,
		Shield,
		Sparkles,
		ArrowUpRight
	} from '@lucide/svelte';
	import GlowCard from '$lib/components/ui/GlowCard.svelte';
	import TiltCard from '$lib/components/ui/TiltCard.svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';
	import TextReveal from '$lib/components/ui/TextReveal.svelte';

	const useCases = [
		{ icon: Globe, title: 'Remote Work Management', desc: 'Manage distributed teams with virtual offices, async collaboration tools, and timezone-aware scheduling.' },
		{ icon: Banknote, title: 'Global Payroll', desc: 'Process payroll across 150+ countries with automated tax calculations, multi-currency support, and local compliance.' },
		{ icon: Target, title: 'Talent Acquisition', desc: 'AI-powered recruitment with job board syndication, candidate scoring, and automated interview scheduling.' },
		{ icon: BarChart3, title: 'Performance Management', desc: 'Continuous feedback, OKR tracking, 360 reviews, and performance-based compensation planning.' },
		{ icon: Shield, title: 'Compliance Management', desc: 'Automated policy acknowledgments, regulatory tracking, and audit-ready documentation across all jurisdictions.' },
		{ icon: Sparkles, title: 'Employee Engagement', desc: 'Pulse surveys, recognition programs, career pathing, and sentiment analysis to boost retention.' }
	];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const useCaseCards = document.querySelectorAll('.use-case-card');
		if (useCaseCards.length) {
			gsap.fromTo(useCaseCards,
				{ y: 40, opacity: 0 },
				{
					y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
					scrollTrigger: { trigger: '.use-cases-grid', start: 'top 80%' }
				}
			);
		}
	});
</script>

<section class="relative py-24 md:py-32 px-6 md:px-12 bg-[#030408] overflow-hidden">
	<div class="absolute inset-0 pointer-events-none overflow-hidden z-0">
		<div class="absolute top-[20%] left-[-5%] w-[35rem] h-[35rem] bg-sky-600/10 rounded-full blur-[160px]"></div>
		<div class="absolute bottom-[10%] right-[-5%] w-[30rem] h-[30rem] bg-violet-600/10 rounded-full blur-[160px]"></div>
	</div>

	<div class="max-w-7xl mx-auto relative z-10">
		<div class="text-center mb-16">
			<SectionBadge variant="violet">Use Cases</SectionBadge>
			<TextReveal
				text="One platform, endless possibilities"
				as="h2"
				class="text-3xl md:text-5xl font-black text-white font-display mt-6 mb-4"
			/>
			<p class="text-white/60 text-lg max-w-xl mx-auto">From recruitment to retirement, PROCOR covers every HR workflow you need.</p>
		</div>

		<div class="use-cases-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each useCases as uc, i}
				<TiltCard tiltAmount={6} glareOpacity={0.12} className="use-case-card">
					<GlowCard className="p-7 h-full group cursor-pointer" glowColor="rgba(117, 194, 246, 0.15)">
						<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-indigo-600/20 flex items-center justify-center border border-white/10 mb-5 group-hover:scale-110 transition-transform duration-300">
							<svelte:component this={uc.icon} size={24} class="text-sky-400" />
						</div>
						<h3 class="text-white font-bold text-lg mb-2 font-display">{uc.title}</h3>
						<p class="text-white/50 text-sm leading-relaxed mb-5">{uc.desc}</p>
						<a href="/demo" class="inline-flex items-center gap-2 text-sky-400 text-sm font-bold hover:text-sky-300 transition-colors group/link">
							Learn More
							<ArrowUpRight size={14} class="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
						</a>
					</GlowCard>
				</TiltCard>
			{/each}
		</div>
	</div>
</section>
