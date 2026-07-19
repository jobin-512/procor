<!-- Hero — top-fold with WebGL background, 3D tilt, and advanced interactions -->
<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ArrowRight, Sparkles, ChevronDown } from '@lucide/svelte';
	import HeroWebGL from '$lib/components/ui/HeroWebGL.svelte';
	import TiltCard from '$lib/components/ui/TiltCard.svelte';

	let container = $state(null);
	let mousePos = $state({ x: 0, y: 0 });

	const headlineParts = ['Humanize your', 'Organization.'];

	const stats = [
		{ value: '150+', label: 'Countries' },
		{ value: '2.4M', label: 'Employees Managed' },
		{ value: '99.9%', label: 'Uptime SLA' },
		{ value: '40+', label: 'Currencies' }
	];

	let activeStat = $state(0);

	onMount(() => {
		const statIv = setInterval(() => {
			activeStat = (activeStat + 1) % stats.length;
		}, 3500);

		const ctx = gsap.context(() => {
			const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

			tl.fromTo(
				'.hero-badge',
				{ y: -20, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
			);

			tl.fromTo(
				'.title-word',
				{ y: 80, opacity: 0 },
				{ y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'expo.out' },
				'-=0.4'
			);

			tl.fromTo(
				'.hero-desc',
				{ y: 30, opacity: 0 },
				{ y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
				'-=0.7'
			);

			tl.fromTo(
				'.cta-group',
				{ scale: 0.9, opacity: 0 },
				{ scale: 1, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'back.out(1.4)' },
				'-=0.5'
			);

			tl.fromTo(
				'.stat-item',
				{ y: 20, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
					stagger: 0.1,
					ease: 'power3.out',
					onComplete: () => {
						// Clear GSAP inline styles so Tailwind opacity classes work for rotation
						document.querySelectorAll('.stat-item').forEach((el) => {
							el.style.opacity = '';
							el.style.transform = '';
						});
					}
				},
				'-=0.4'
			);

			tl.fromTo(
				'.scroll-indicator',
				{ opacity: 0, y: 20 },
				{ opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
				'-=0.2'
			);
		}, container);

		const onMouseMove = (e) => {
			mousePos = { x: e.clientX, y: e.clientY };
			const x = (e.clientX - window.innerWidth / 2) / 40;
			const y = (e.clientY - window.innerHeight / 2) / 40;

			gsap.to('.parallax-orb', { x, y, duration: 1.2, ease: 'power2.out' });
			gsap.to('.parallax-orb-rev', { x: -x * 1.5, y: -y * 1.5, duration: 1.5, ease: 'power2.out' });
		};
		window.addEventListener('mousemove', onMouseMove);

		return () => {
			clearInterval(statIv);
			ctx.revert();
			window.removeEventListener('mousemove', onMouseMove);
		};
	});
</script>

<section
	bind:this={container}
	class="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-6 md:px-12 overflow-hidden bg-[#030408]"
>
	<HeroWebGL />

	<div class="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
		<div
			class="parallax-orb absolute top-[-20%] right-[-10%] w-[50rem] h-[50rem] bg-sky-600/25 rounded-full blur-[180px]"
			style="animation: float-orb 20s ease-in-out infinite alternate;"
		></div>
		<div
			class="parallax-orb-rev absolute bottom-[-15%] left-[-10%] w-[45rem] h-[45rem] bg-procor-blue/15 rounded-full blur-[180px]"
			style="animation: float-orb 25s ease-in-out infinite alternate-reverse;"
		></div>
		<div
			class="absolute top-[30%] left-[20%] w-[30rem] h-[30rem] bg-procor-blue-light/10 rounded-full blur-[140px]"
			style="animation: float-orb 18s ease-in-out infinite alternate;"
		></div>
	</div>

	<div
		class="absolute inset-0 z-[2] pointer-events-none"
		style="background: radial-gradient(ellipse at center, transparent 0%, #030408 75%);"
	></div>

	<div class="absolute inset-0 z-[3] pointer-events-none opacity-[0.04] noise-overlay"></div>
	<div class="absolute inset-0 z-[3] pointer-events-none opacity-[0.06] grid-overlay"></div>

	<div
		class="absolute z-[4] pointer-events-none"
		style="
			left: {mousePos.x - 300}px;
			top: {mousePos.y - 300}px;
			width: 600px;
			height: 600px;
			background: radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%);
			filter: blur(40px);
			transition: left 0.3s ease-out, top 0.3s ease-out;
		"
	></div>

	<div class="max-w-7xl mx-auto w-full relative z-10">
		<div class="text-center">
<div
			class="hero-badge inline-flex items-center gap-3 px-6 py-2.5 bg-gradient-to-r from-sky-500/25 via-procor-blue/25 to-procor-blue-light/25 border border-white/[0.2] backdrop-blur-xl rounded-full text-[11px] font-extrabold tracking-[0.15em] uppercase mb-14 shadow-[0_0_40px_-10px_rgba(37,59,218,0.35),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_0_70px_-10px_rgba(37,59,218,0.55)] transition-all duration-500"
		>
				<Sparkles size={16} class="text-sky-300" />
				<span class="text-white" style="text-shadow: 0px 0px 20px rgba(255,255,255,0.4);"
					>Next-Gen Human Capital Management</span
				>
			</div>

<h1
			class="text-4xl sm:text-5xl md:text-7xl lg:text-[7.5rem] font-black text-white leading-[0.85] font-display mb-12 tracking-tight"
		>
			{#each headlineParts as part, i}
				{#if i === 1}
					<span
						class="title-word block bg-gradient-to-r from-sky-400 via-procor-blue to-procor-blue-light bg-clip-text text-transparent italic min-h-12 md:min-h-18 lg:min-h-30"
						>{part}</span
					>
				{:else}
					<span class="title-word block">{part}</span>
				{/if}
			{/each}
		</h1>

			<p
				class="hero-desc text-lg md:text-xl text-white/85 mb-14 max-w-2xl mx-auto leading-relaxed font-medium"
				style="text-shadow: 0px 0px 30px rgba(255,255,255,0.1);"
			>
				Beyond traditional HRMS. PROCOR is a neural network for your business, connecting people,
				performance, and purpose in one high-fidelity interface.
			</p>

			<div class="flex justify-center items-center mb-20">
				<div class="cta-group">
					<TiltCard tiltAmount={8} glareOpacity={0.2}>
						<button
							class="px-8 md:px-14 py-4 md:py-5 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] shadow-[0_20px_60px_-15px_rgba(56,189,248,0.5)] hover:shadow-sky-500/50 group cursor-pointer"
						>
							Start Free Trial <ArrowRight
								size={22}
								class="group-hover:translate-x-1 transition-transform"
							/>
						</button>
					</TiltCard>
				</div>
			</div>

			<div class="relative pb-8">
				<div
					class="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.25] to-transparent"
				></div>
				<div class="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-24 pt-8">
					{#each stats as stat, i}
						<div
							class="stat-item text-center transition-all duration-700 {activeStat === i
								? 'opacity-100 scale-110'
								: 'opacity-40 scale-100'}"
						>
							<p
								class="text-3xl md:text-5xl font-black text-white font-display bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent"
							>
								{stat.value}
							</p>
							<p class="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em] mt-2">
								{stat.label}
							</p>
						</div>
					{/each}
				</div>
				<div
					class="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.25] to-transparent"
				></div>
			</div>
		</div>
	</div>

	<div
		class="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
	>
		<span class="text-[9px] font-bold text-neutral-500 uppercase tracking-[0.3em]">Scroll</span>
		<ChevronDown size={16} class="text-neutral-500 animate-bounce" />
	</div>
</section>
