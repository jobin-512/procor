<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ArrowRight, Sparkles, ChevronDown, Play } from '@lucide/svelte';
	import HeroWebGL from '$lib/components/ui/HeroWebGL.svelte';
	import TiltCard from '$lib/components/ui/TiltCard.svelte';

	let { mousePos = $bindable({ x: 0, y: 0 }) } = $props();

	let heroEl = $state(null);

	const headlineWords = ['The', 'Future', 'of', 'Human', 'Capital'];

	const heroStats = [
		{ value: '150+', label: 'Countries' },
		{ value: '2.4M', label: 'Employees' },
		{ value: '99.99%', label: 'Uptime' },
		{ value: '40+', label: 'Currencies' }
	];

	onMount(() => {
		const heroCtx = gsap.context(() => {
			const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

			tl.fromTo('.hero-badge', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
			tl.fromTo('.title-word', { y: 80, opacity: 0, rotateX: -20 }, { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.12, ease: 'expo.out' }, '-=0.4');
			tl.fromTo('.hero-desc', { y: 30, opacity: 0, filter: 'blur(8px)' }, { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power3.out' }, '-=0.7');
			tl.fromTo('.cta-group', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'back.out(1.4)' }, '-=0.5');
			tl.fromTo('.stat-item', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }, '-=0.4');
			tl.fromTo('.scroll-indicator', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.2');
		}, heroEl);

		const onHeroMouse = (e) => {
			const x = (e.clientX - window.innerWidth / 2) / 40;
			const y = (e.clientY - window.innerHeight / 2) / 40;
			gsap.to('.parallax-orb', { x, y, duration: 1.2, ease: 'power2.out' });
			gsap.to('.parallax-orb-rev', { x: -x * 1.5, y: -y * 1.5, duration: 1.5, ease: 'power2.out' });
		};
		window.addEventListener('mousemove', onHeroMouse);

		return () => {
			heroCtx.revert();
			window.removeEventListener('mousemove', onHeroMouse);
		};
	});
</script>

<section
	bind:this={heroEl}
	class="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-6 md:px-12 overflow-hidden bg-[#030408]"
>
	<HeroWebGL />

	<div class="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
		<div class="parallax-orb absolute top-[-20%] right-[-10%] w-[50rem] h-[50rem] bg-sky-600/25 rounded-full blur-[180px] animate-float-orb"></div>
		<div class="parallax-orb-rev absolute bottom-[-15%] left-[-10%] w-[45rem] h-[45rem] bg-violet-600/15 rounded-full blur-[180px] animate-float-orb" style="animation-direction: reverse;"></div>
		<div class="absolute top-[30%] left-[20%] w-[30rem] h-[30rem] bg-fuchsia-600/10 rounded-full blur-[140px] animate-float-orb" style="animation-duration: 18s;"></div>
	</div>

	<div class="absolute inset-0 z-[2] pointer-events-none" style="background: radial-gradient(ellipse at center, transparent 0%, #030408 75%);"></div>
	<div class="absolute inset-0 z-[3] pointer-events-none opacity-[0.04] noise-overlay"></div>
	<div class="absolute inset-0 z-[3] pointer-events-none opacity-[0.06] grid-overlay"></div>

	<div
		class="absolute z-[4] pointer-events-none"
		style="left: {mousePos.x - 300}px; top: {mousePos.y - 300}px; width: 600px; height: 600px; background: radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%); filter: blur(40px); transition: left 0.3s ease-out, top 0.3s ease-out;"
	></div>

	<div class="max-w-7xl mx-auto w-full relative z-10">
		<div class="text-center">
			<div class="hero-badge inline-flex items-center gap-3 px-6 py-2.5 bg-gradient-to-r from-sky-500/25 via-violet-500/25 to-indigo-500/25 border border-white/[0.2] backdrop-blur-xl rounded-full text-[11px] font-extrabold tracking-[0.15em] uppercase mb-14 shadow-[0_0_40px_-10px_rgba(56,189,248,0.35),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_0_70px_-10px_rgba(56,189,248,0.55)] transition-all duration-500">
				<Sparkles size={16} class="text-sky-300" />
				<span class="text-white" style="text-shadow: 0px 0px 20px rgba(255,255,255,0.4);">Next-Gen Human Capital Management</span>
			</div>

			<h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-[7.5rem] font-black text-white leading-[0.85] font-display mb-12 tracking-tight" style="perspective: 800px;">
				{#each headlineWords as word, i}
					{#if i >= 3}
						<span class="title-word inline-block bg-gradient-to-r from-sky-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent mr-[0.3em] italic">
							{word}
						</span>
					{:else}
						<span class="title-word inline-block mr-[0.3em]">{word}</span>
					{/if}
				{/each}
			</h1>

			<p class="hero-desc text-lg md:text-xl text-white/85 mb-14 max-w-2xl mx-auto leading-relaxed font-medium" style="text-shadow: 0px 0px 30px rgba(255,255,255,0.1);">
				Beyond traditional HRMS. PROCOR is a neural network for your business, connecting people, performance, and purpose in one high-fidelity interface.
			</p>

			<div class="flex flex-col sm:flex-row justify-center items-center gap-5 mb-20">
				<div class="cta-group">
					<TiltCard tiltAmount={8} glareOpacity={0.2}>
						<button class="px-8 md:px-14 py-4 md:py-5 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] shadow-[0_20px_60px_-15px_rgba(56,189,248,0.5)] hover:shadow-sky-500/50 group cursor-pointer">
							Start Free Trial <ArrowRight size={22} class="group-hover:translate-x-1 transition-transform" />
						</button>
					</TiltCard>
				</div>
				<div class="cta-group">
					<button class="px-8 md:px-14 py-4 md:py-5 bg-white/[0.06] border border-white/10 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-white/[0.1] hover:border-white/20 transition-all duration-500 group cursor-pointer backdrop-blur-sm">
						<div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
							<Play size={14} class="text-white ml-0.5" />
						</div>
						Watch Demo
					</button>
				</div>
			</div>

			<div class="relative pb-8">
				<div class="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.25] to-transparent"></div>
				<div class="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-24 pt-8">
					{#each heroStats as stat}
						<div class="stat-item text-center">
							<p class="text-3xl md:text-5xl font-black text-white font-display bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
								{stat.value}
							</p>
							<p class="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em] mt-2">{stat.label}</p>
						</div>
					{/each}
				</div>
				<div class="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.25] to-transparent"></div>
			</div>
		</div>
	</div>

	<div class="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
		<span class="text-[9px] font-bold text-neutral-500 uppercase tracking-[0.3em]">Scroll</span>
		<ChevronDown size={16} class="text-neutral-500 animate-bounce" />
	</div>
</section>
