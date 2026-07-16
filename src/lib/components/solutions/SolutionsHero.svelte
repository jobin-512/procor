<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import {
		ArrowRight,
		ChevronDown,
		Monitor,
		Heart,
		Factory,
		Banknote,
		Code2,
		Users,
		Shield,
		Globe,
		Store,
		Calculator,
		Sparkles
	} from '@lucide/svelte';
	import GradientButton from '$lib/components/ui/GradientButton.svelte';
	import FloatingOrb from '$lib/components/ui/FloatingOrb.svelte';

	const floatingIcons = [
		{ icon: Monitor, x: 10, y: 20, delay: 0, size: 28 },
		{ icon: Heart, x: 85, y: 15, delay: 1.5, size: 24 },
		{ icon: Factory, x: 15, y: 75, delay: 3, size: 26 },
		{ icon: Banknote, x: 80, y: 70, delay: 0.8, size: 22 },
		{ icon: Store, x: 50, y: 10, delay: 2.2, size: 20 },
		{ icon: Users, x: 30, y: 85, delay: 1.2, size: 24 },
		{ icon: Shield, x: 70, y: 40, delay: 2.8, size: 22 },
		{ icon: Globe, x: 90, y: 50, delay: 0.5, size: 26 }
	];

	onMount(() => {
		const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

		tl.fromTo('.solutions-hero-badge',
			{ y: -20, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
		);

		tl.fromTo('.solutions-hero-title',
			{ y: 60, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'expo.out' },
			'-=0.4'
		);

		tl.fromTo('.solutions-hero-sub',
			{ y: 30, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
			'-=0.7'
		);

		tl.fromTo('.floating-icon-wrap',
			{ scale: 0, opacity: 0 },
			{ scale: 1, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'back.out(1.4)' },
			'-=0.5'
		);
	});
</script>

<section class="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 px-6 md:px-12 bg-[#030408] overflow-hidden">
	<FloatingOrb color="rgba(117, 194, 246, 0.2)" size="40rem" speed={22} className="top-[-10%] right-[-10%]" />
	<FloatingOrb color="rgba(139, 92, 246, 0.15)" size="35rem" speed={28} className="bottom-[-10%] left-[-10%]" />
	<FloatingOrb color="rgba(244, 63, 94, 0.1)" size="30rem" speed={18} className="top-[40%] left-[60%]" />

	<div class="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
		{#each floatingIcons as iconItem, i}
			<div
				class="floating-icon-wrap absolute opacity-20"
				style="left: {iconItem.x}%; top: {iconItem.y}%; animation: float-orb {15 + i * 3}s ease-in-out infinite alternate; animation-delay: {iconItem.delay}s;"
			>
				<svelte:component this={iconItem.icon} size={iconItem.size} class="text-white/30" />
			</div>
		{/each}
	</div>

	<div class="absolute inset-0 z-[2] pointer-events-none" style="background: radial-gradient(ellipse at center, transparent 0%, #030408 75%);"></div>
	<div class="absolute inset-0 z-[3] pointer-events-none opacity-[0.04] noise-overlay"></div>
	<div class="absolute inset-0 z-[3] pointer-events-none opacity-[0.06] grid-overlay"></div>

	<div class="max-w-7xl mx-auto w-full relative z-10 text-center">
		<div class="solutions-hero-badge inline-flex items-center gap-3 px-6 py-2.5 bg-gradient-to-r from-sky-500/25 via-violet-500/25 to-indigo-500/25 border border-white/[0.2] backdrop-blur-xl rounded-full text-[11px] font-extrabold tracking-[0.15em] uppercase mb-10 shadow-[0_0_40px_-10px_rgba(56,189,248,0.35),inset_0_1px_0_rgba(255,255,255,0.1)]">
			<Sparkles size={16} class="text-sky-300" />
			<span class="text-white" style="text-shadow: 0px 0px 20px rgba(255,255,255,0.4);">Industry-Specific Solutions</span>
		</div>

		<h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] font-black text-white leading-[0.9] font-display mb-8 tracking-tight">
			<span class="solutions-hero-title block">Solutions Built for</span>
			<span class="solutions-hero-title block bg-gradient-to-r from-sky-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent italic min-h-[1.2em]">
				Your Industry
			</span>
		</h1>

		<p class="solutions-hero-sub text-lg md:text-xl text-white/75 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
			Every industry faces unique workforce challenges. PROCOR delivers tailored solutions that solve your specific problems — not generic HR templates.
		</p>

		<div class="flex justify-center gap-4 flex-wrap">
			<GradientButton href="#industry-tabs" variant="primary" size="lg">
				Find Your Solution <ArrowRight size={20} />
			</GradientButton>
			<GradientButton href="#roi-calculator" variant="ghost" size="lg">
				<Calculator size={20} /> Calculate ROI
			</GradientButton>
		</div>
	</div>

	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
		<span class="text-[9px] font-bold text-neutral-500 uppercase tracking-[0.3em]">Explore</span>
		<ChevronDown size={16} class="text-neutral-500 animate-bounce" />
	</div>
</section>
