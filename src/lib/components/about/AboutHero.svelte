<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { Sparkles, ChevronDown } from '@lucide/svelte';

	let { heroWords = [], heroStats = [] } = $props();

	onMount(() => {
		const heroTl = gsap.timeline({ defaults: { ease: 'expo.out' } });

		heroTl.fromTo(
			'.about-hero-badge',
			{ y: -20, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
		);

		heroTl.fromTo(
			'.hero-word',
			{ y: 100, opacity: 0, rotateX: -15 },
			{ y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.2, ease: 'expo.out' },
			'-=0.4'
		);

		heroTl.fromTo(
			'.hero-subtitle',
			{ y: 30, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
			'-=0.6'
		);

		heroTl.fromTo(
			'.hero-stat',
			{ y: 20, opacity: 0, scale: 0.9 },
			{
				y: 0,
				opacity: 1,
				scale: 1,
				duration: 0.8,
				stagger: 0.1,
				ease: 'back.out(1.4)'
			},
			'-=0.4'
		);

		const onMouseMove = (e) => {
			const x = (e.clientX - window.innerWidth / 2) / 50;
			const y = (e.clientY - window.innerHeight / 2) / 50;
			gsap.to('.about-parallax-orb', {
				x,
				y,
				duration: 1.2,
				ease: 'power2.out'
			});
		};
		window.addEventListener('mousemove', onMouseMove);

		return () => {
			window.removeEventListener('mousemove', onMouseMove);
		};
	});
</script>

<section
	class="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-6 md:px-12 overflow-hidden bg-[#030408]"
>
	<div class="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
		<div
			class="about-parallax-orb absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-sky-600/20 rounded-full blur-[180px]"
			style="animation: float-orb 22s ease-in-out infinite alternate;"
		></div>
		<div
			class="about-parallax-orb absolute bottom-[-15%] right-[-10%] w-[45rem] h-[45rem] bg-violet-600/15 rounded-full blur-[180px]"
			style="animation: float-orb 28s ease-in-out infinite alternate-reverse;"
		></div>
		<div
			class="absolute top-[25%] right-[20%] w-[28rem] h-[28rem] bg-fuchsia-600/8 rounded-full blur-[140px]"
			style="animation: float-orb 18s ease-in-out infinite alternate;"
		></div>
	</div>

	<div
		class="absolute inset-0 z-[2] pointer-events-none"
		style="background: radial-gradient(ellipse at center, transparent 0%, #030408 75%);"
	></div>

	<div class="absolute inset-0 z-[3] pointer-events-none opacity-[0.04] noise-overlay"></div>
	<div class="absolute inset-0 z-[3] pointer-events-none opacity-[0.06] grid-overlay"></div>

	<div class="max-w-7xl mx-auto w-full relative z-10 text-center">
		<div
			class="about-hero-badge inline-flex items-center gap-3 px-6 py-2.5 bg-gradient-to-r from-sky-500/25 via-violet-500/25 to-indigo-500/25 border border-white/[0.2] backdrop-blur-xl rounded-full text-[11px] font-extrabold tracking-[0.15em] uppercase mb-14 shadow-[0_0_40px_-10px_rgba(56,189,248,0.35),inset_0_1px_0_rgba(255,255,255,0.1)]"
		>
			<Sparkles size={16} class="text-sky-300" />
			<span class="text-white" style="text-shadow: 0px 0px 20px rgba(255,255,255,0.4);">
				About PROCOR HRMS
			</span>
		</div>

		<h1
			class="text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] font-black text-white leading-[0.85] font-display mb-12 tracking-tight perspective-1000"
		>
			{#each heroWords as word, i}
				<span
					class="hero-word block {i === 1
						? 'bg-gradient-to-r from-sky-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent italic min-h-12 md:min-h-18 lg:min-h-24'
						: ''}"
					style="transform-style: preserve-3d;"
				>
					{word}
				</span>
			{/each}
		</h1>

		<p
			class="hero-subtitle text-lg md:text-xl text-white/75 mb-16 max-w-2xl mx-auto leading-relaxed font-medium"
		>
			We're on a mission to transform how organizations connect, manage, and empower
			their people — through intelligent design and cutting-edge technology.
		</p>

		<div class="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-20 mb-12">
			{#each heroStats as stat, i}
				<div class="hero-stat text-center group cursor-default">
					<p
						class="text-3xl md:text-5xl font-black font-display bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent group-hover:from-sky-300 group-hover:to-sky-500 transition-all duration-500"
					>
						{stat.value}
					</p>
					<p
						class="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mt-2 group-hover:text-white/70 transition-colors duration-500"
					>
						{stat.label}
					</p>
				</div>
			{/each}
		</div>

		<div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
			<div class="flex flex-col items-center gap-2 opacity-40">
				<span class="text-[9px] font-bold text-neutral-500 uppercase tracking-[0.3em]">Scroll</span>
				<ChevronDown size={16} class="text-neutral-500 animate-bounce" />
			</div>
		</div>
	</div>
</section>
