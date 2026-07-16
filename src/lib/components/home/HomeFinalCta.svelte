<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { Rocket, ShieldCheck, Lock, Timer, Eye } from '@lucide/svelte';
	import TiltCard from '$lib/components/ui/TiltCard.svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';
	import ParticleField from '$lib/components/ui/ParticleField.svelte';

	onMount(() => {
		gsap.fromTo('.cta-section',
			{ y: 50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1, ease: 'power3.out',
				scrollTrigger: { trigger: '.cta-section', start: 'top 80%', toggleActions: 'play none none none' } }
		);
	});
</script>

<section class="cta-section py-20 md:py-32 px-6 md:px-12 bg-[var(--surface-dark)] relative overflow-hidden">
	<ParticleField count={60} colors={['#75c2f6', '#8b5cf6', '#6366f1']} speed={0.5} connectionDistance={100} className="opacity-40" />

	<div class="absolute inset-0 pointer-events-none">
		<div class="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] bg-gradient-to-b from-sky-600/10 to-transparent rounded-full blur-[120px]"></div>
		<div class="absolute bottom-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-violet-600/8 rounded-full blur-[160px]"></div>
		<div class="absolute top-[20%] left-[-5%] w-[30rem] h-[30rem] bg-indigo-600/8 rounded-full blur-[140px]"></div>
	</div>

	<div class="max-w-5xl mx-auto text-center relative z-10">
		<SectionBadge variant="sky">Ready to transform your HR?</SectionBadge>

		<h2 class="text-4xl md:text-6xl lg:text-7xl font-black text-white font-display leading-[1.1] mb-8 mt-12 tracking-tight">
			Start building your <br class="hidden md:block" />
			<span class="bg-gradient-to-r from-sky-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent">dream workforce</span> today
		</h2>

		<p class="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
			Join 13,000+ organizations that have transformed their people operations with PROCOR. Start your free trial — no credit card required.
		</p>

		<div class="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
			<TiltCard tiltAmount={6} glareOpacity={0.2}>
				<button class="px-10 py-5 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] shadow-[0_20px_60px_-15px_rgba(56,189,248,0.4)] hover:shadow-sky-500/40 cursor-pointer group">
					<Rocket size={22} class="group-hover:-translate-y-1 transition-transform" /> Start Free Trial
				</button>
			</TiltCard>
			<button class="px-10 py-5 bg-white/[0.06] border border-white/10 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-white/[0.1] hover:border-white/20 transition-all duration-500 cursor-pointer backdrop-blur-sm">
				Schedule Demo
			</button>
		</div>

		<div class="flex flex-wrap justify-center items-center gap-8 text-xs font-bold text-neutral-500">
			<div class="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08]">
				<ShieldCheck size={16} class="text-emerald-400" />
				<span>SOC 2 Certified</span>
			</div>
			<div class="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08]">
				<Lock size={16} class="text-sky-400" />
				<span>GDPR Compliant</span>
			</div>
			<div class="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08]">
				<Timer size={16} class="text-violet-400" />
				<span>99.99% Uptime</span>
			</div>
			<div class="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08]">
				<Eye size={16} class="text-amber-400" />
				<span>ISO 27001</span>
			</div>
		</div>
	</div>
</section>
