<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import Play from '@lucide/svelte/icons/play';
	import Zap from '@lucide/svelte/icons/zap';
	import Shield from '@lucide/svelte/icons/shield';
	import Globe from '@lucide/svelte/icons/globe';
	import Users from '@lucide/svelte/icons/users';
	import HeroWebGLUltra from '$lib/components/ui/HeroWebGLUltra.svelte';

	let { mousePos = $bindable({ x: 0, y: 0 }) } = $props();
	let heroEl = $state(null);
	let typedText = $state('');
	let currentWordIndex = $state(0);
	let isDeleting = $state(false);

	const heroStats = [
		{ value: '150+', label: 'Countries', icon: Globe },
		{ value: '2.4M', label: 'Employees Managed', icon: Users },
		{ value: '99.99%', label: 'Uptime SLA', icon: Shield },
		{ value: '40+', label: 'Currencies', icon: Zap }
	];

	const rotatingWords = ['Human Capital', 'Workforce Management', 'People Operations', 'HR Excellence'];
	const floatingBadges = [
		{ text: 'AI-Powered', x: -35, y: -15, delay: 0 },
		{ text: 'Enterprise Ready', x: 30, y: -20, delay: 0.2 },
		{ text: 'SOC 2 Certified', x: -30, y: 25, delay: 0.4 },
		{ text: 'GDPR Compliant', x: 35, y: 20, delay: 0.6 }
	];

	// Typewriter effect
	$effect(() => {
		const word = rotatingWords[currentWordIndex];
		let timeout;
		
		if (!isDeleting && typedText.length < word.length) {
			timeout = setTimeout(() => {
				typedText = word.slice(0, typedText.length + 1);
			}, 100);
		} else if (!isDeleting && typedText.length === word.length) {
			timeout = setTimeout(() => {
				isDeleting = true;
			}, 2000);
		} else if (isDeleting && typedText.length > 0) {
			timeout = setTimeout(() => {
				typedText = word.slice(0, typedText.length - 1);
			}, 50);
		} else if (isDeleting && typedText.length === 0) {
			isDeleting = false;
			currentWordIndex = (currentWordIndex + 1) % rotatingWords.length;
		}

		return () => clearTimeout(timeout);
	});

	onMount(() => {
		const ctx = gsap.context(() => {
			const masterTL = gsap.timeline({ defaults: { ease: 'expo.out' } });

			// Initial reveal
			masterTL.fromTo('.hero-badge-main', 
				{ y: -50, opacity: 0, scale: 0.8, rotateX: 45 }, 
				{ y: 0, opacity: 1, scale: 1, rotateX: 0, duration: 1 }
			);

			// Title lines with stagger and 3D effect
			masterTL.fromTo('.hero-title-line', 
				{ y: 100, opacity: 0, rotateX: 60, transformOrigin: 'center bottom' }, 
				{ y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.2 }, 
				'-=0.5'
			);

			// Subtitle with blur reveal
			masterTL.fromTo('.hero-subtitle', 
				{ y: 50, opacity: 0, filter: 'blur(10px)' }, 
				{ y: 0, opacity: 1, filter: 'blur(0px)', duration: 1 }, 
				'-=0.6'
			);

			// CTA buttons with bounce
			masterTL.fromTo('.hero-cta', 
				{ y: 40, opacity: 0, scale: 0.9 }, 
				{ y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(1.5)' }, 
				'-=0.5'
			);

			// Floating badges
			masterTL.fromTo('.floating-badge', 
				{ scale: 0, opacity: 0 }, 
				{ scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(2)' }, 
				'-=0.3'
			);

			// Stats with counter effect
			masterTL.fromTo('.hero-stat', 
				{ y: 50, opacity: 0, scale: 0.8 }, 
				{ y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.1 }, 
				'-=0.4'
			);

			// Scroll indicator
			masterTL.fromTo('.scroll-indicator', 
				{ opacity: 0, y: 30 }, 
				{ opacity: 1, y: 0, duration: 0.8 }, 
				'-=0.3'
			);

			// Continuous animations
			gsap.to('.hero-badge-main', {
				y: -10,
				duration: 2.5,
				ease: 'sine.inOut',
				repeat: -1,
				yoyo: true
			});

			// Floating badges orbit
			floatingBadges.forEach((badge, i) => {
				gsap.to(`.floating-badge-${i}`, {
					x: `+=${Math.sin(i) * 10}`,
					y: `+=${Math.cos(i) * 8}`,
					duration: 3 + i * 0.5,
					ease: 'sine.inOut',
					repeat: -1,
					yoyo: true
				});
			});

			// Glowing orbs pulse
			gsap.to('.glow-orb', {
				scale: 1.1,
				opacity: 0.8,
				duration: 2,
				ease: 'sine.inOut',
				repeat: -1,
				yoyo: true,
				stagger: 0.3
			});

		}, heroEl);

		// Parallax effect with depth
		const onMouseMove = (e) => {
			mousePos = { x: e.clientX, y: e.clientY };
			const x = (e.clientX - window.innerWidth / 2) / 30;
			const y = (e.clientY - window.innerHeight / 2) / 30;
			
			gsap.to('.parallax-deep', { x: x * 0.5, y: y * 0.5, duration: 1.5, ease: 'power2.out' });
			gsap.to('.parallax-mid', { x: x, y: y, duration: 1.2, ease: 'power2.out' });
			gsap.to('.parallax-front', { x: x * 1.5, y: y * 1.5, duration: 0.9, ease: 'power2.out' });
			gsap.to('.parallax-close', { x: x * 2, y: y * 2, duration: 0.6, ease: 'power2.out' });
			
			// Tilt effect on content
			gsap.to('.hero-content-wrapper', {
				rotateY: x * 0.3,
				rotateX: -y * 0.3,
				duration: 0.8,
				ease: 'power2.out'
			});
		};
		window.addEventListener('mousemove', onMouseMove);

		return () => {
			ctx.revert();
			window.removeEventListener('mousemove', onMouseMove);
		};
	});
</script>

<section
	bind:this={heroEl}
	class="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-6 md:px-12 overflow-hidden"
>
	<!-- Ultra WebGL Background -->
	<div class="absolute inset-0 z-0">
		<HeroWebGLUltra />
	</div>

	<!-- Multi-layer gradient background -->
	<div class="absolute inset-0 bg-gradient-to-b from-[#020205] via-[#050810] to-[#020205] z-[1]"></div>
	
	<!-- Animated gradient mesh -->
	<div class="absolute inset-0 z-[2] opacity-60">
		<div class="absolute inset-0" style="background: radial-gradient(ellipse 80% 50% at 50% 0%, rgba(37,59,218,0.15), transparent), radial-gradient(ellipse 60% 40% at 70% 100%, rgba(59,91,255,0.12), transparent), radial-gradient(ellipse 50% 30% at 20% 60%, rgba(74,107,255,0.08), transparent);"></div>
	</div>

	<!-- Floating glow orbs with parallax -->
	<div class="absolute inset-0 pointer-events-none overflow-hidden z-[3]">
		<div class="glow-orb parallax-deep absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-blue-500/20 rounded-full blur-[200px]"></div>
		<div class="glow-orb parallax-mid absolute bottom-[-30%] left-[-15%] w-[900px] h-[900px] bg-blue-600/15 rounded-full blur-[180px]"></div>
		<div class="glow-orb parallax-front absolute top-[20%] left-[5%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]"></div>
		<div class="glow-orb parallax-close absolute top-[50%] right-[10%] w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[140px]"></div>
		<div class="glow-orb parallax-mid absolute bottom-[10%] right-[30%] w-[400px] h-[400px] bg-emerald-500/6 rounded-full blur-[120px]"></div>
	</div>

	<!-- Animated grid with perspective -->
	<div class="absolute inset-0 z-[4] opacity-[0.04]" style="
		background-image: linear-gradient(rgba(37,59,218,0.6) 1px, transparent 1px), 
		linear-gradient(90deg, rgba(37,59,218,0.6) 1px, transparent 1px);
		background-size: 50px 50px;
		transform: perspective(500px) rotateX(60deg);
		transform-origin: center top;
		mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
	"></div>

	<!-- Scanning line effect -->
	<div class="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
		<div class="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-scan"></div>
	</div>

	<!-- Radial vignette -->
	<div class="absolute inset-0 z-[6] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,2,5,0.5)_50%,rgba(2,2,5,0.95)_100%)]"></div>

	<!-- Noise texture overlay -->
	<div class="absolute inset-0 z-[7] pointer-events-none opacity-[0.02]" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E');"></div>

	<!-- Content -->
	<div class="relative z-10 max-w-6xl mx-auto w-full" style="perspective: 1200px;">
		<div class="hero-content-wrapper text-center" style="transform-style: preserve-3d;">
			
<!-- Main Badge with glow -->
		<div class="hero-badge-main relative inline-flex items-center gap-3 px-8 py-4 mb-16">
			<div class="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-blue-600/30 rounded-full blur-xl"></div>
			<div class="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-white/20 backdrop-blur-2xl rounded-full shadow-[0_0_60px_-15px_rgba(37,59,218,0.5),inset_0_1px_0_rgba(255,255,255,0.15)]">
				<span class="relative flex h-3 w-3">
					<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
					<span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span>
				</span>
				<Sparkles size={18} class="text-blue-400" />
				<span class="text-sm font-bold text-white/95 tracking-wide" style="text-shadow: 0 0 30px rgba(255,255,255,0.5);">
					Next-Generation HR Platform
				</span>
				<div class="px-3 py-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-[10px] font-black text-white uppercase tracking-wider">
					New
				</div>
				</div>
			</div>

			<!-- Floating feature badges -->
			<div class="absolute inset-0 pointer-events-none hidden lg:block">
				{#each floatingBadges as badge, i}
					<div 
						class="floating-badge floating-badge-{i} absolute top-1/2 left-1/2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full text-xs font-semibold text-white/70 shadow-lg"
						style="transform: translate({badge.x}vw, {badge.y}vh);"
					>
						{badge.text}
					</div>
				{/each}
			</div>

			<!-- Main Title with typing effect -->
			<h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] font-display mb-10 tracking-tight">
				<span class="hero-title-line block mb-4" style="text-shadow: 0 0 100px rgba(255,255,255,0.2);">
					The Future of
				</span>
				<span class="hero-title-line block relative">
					<span class="relative z-10 bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent" style="filter: drop-shadow(0 0 60px rgba(139,92,246,0.5));">
						{typedText}<span class="animate-blink text-sky-400">|</span>
					</span>
					<!-- Glow effect behind text -->
					<span class="absolute inset-0 bg-gradient-to-r from-sky-500/30 via-violet-500/30 to-fuchsia-500/30 blur-3xl -z-10"></span>
				</span>
			</h1>

			<!-- Subtitle with gradient underline -->
			<div class="hero-subtitle relative max-w-3xl mx-auto mb-16">
				<p class="text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed font-medium" style="text-shadow: 0 0 40px rgba(255,255,255,0.1);">
					PROCOR is a <span class="text-sky-400 font-bold">neural network</span> for your business — connecting 
					<span class="text-violet-400 font-bold">people</span>, 
					<span class="text-fuchsia-400 font-bold">performance</span>, and 
					<span class="text-emerald-400 font-bold">purpose</span> in one revolutionary platform.
				</p>
				<div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 rounded-full opacity-60"></div>
			</div>

			<!-- CTAs with advanced hover effects -->
			<div class="flex flex-col sm:flex-row justify-center items-center gap-6 mb-20">
				<a href="/demo" class="hero-cta group relative">
					<!-- Outer glow -->
					<div class="absolute -inset-1 bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
					
					<div class="relative px-10 py-5 bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 text-white rounded-2xl font-bold text-lg flex items-center gap-3 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
						<!-- Shine effect -->
						<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
						
						<span class="relative flex items-center gap-3">
							<Zap size={20} class="group-hover:rotate-12 transition-transform" />
							Start Free Trial
							<ArrowRight size={20} class="group-hover:translate-x-1 transition-transform" />
						</span>
					</div>
				</a>

				<button class="hero-cta group relative px-10 py-5 bg-white/[0.03] border border-white/[0.15] text-white rounded-2xl font-semibold text-lg flex items-center gap-4 backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.08] hover:border-white/[0.25] overflow-hidden">
					<!-- Animated border gradient -->
					<div class="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-sky-500/0 via-violet-500/50 to-fuchsia-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style="mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); mask-composite: exclude;"></div>
					
					<div class="relative w-14 h-14 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
						<Play size={20} class="text-white ml-1" />
						<span class="absolute inset-0 rounded-full border-2 border-white/30 animate-ping opacity-40"></span>
					</div>
					<span>Watch Demo</span>
					<span class="text-xs text-white/40 font-normal">(2 min)</span>
				</button>
			</div>

			<!-- Stats with icons and animations -->
			<div class="relative">
				<!-- Top border with glow -->
				<div class="absolute inset-x-0 top-0">
					<div class="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
					<div class="h-8 bg-gradient-to-b from-white/5 to-transparent"></div>
				</div>

				<div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-12 pb-4">
					{#each heroStats as stat, i}
						<div class="hero-stat group text-center relative">
							<!-- Hover glow -->
							<div class="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
							
							<div class="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-sky-500/30 transition-all duration-500">
								<svelte:component this={stat.icon} size={22} class="text-sky-400 group-hover:text-sky-300 transition-colors" />
							</div>
							
							<div class="text-3xl md:text-4xl lg:text-5xl font-black font-display mb-2 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent group-hover:from-sky-300 group-hover:to-violet-300 transition-all duration-500">
								{stat.value}
							</div>
							<div class="text-[10px] md:text-xs font-semibold text-white/40 uppercase tracking-[0.2em] group-hover:text-white/60 transition-colors">
								{stat.label}
							</div>
						</div>
					{/each}
				</div>

				<!-- Bottom border -->
				<div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
			</div>
		</div>
	</div>

	<!-- Enhanced Scroll Indicator -->
	<div class="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
		<span class="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em]">Explore</span>
		<div class="relative w-6 h-10 rounded-full border-2 border-white/20 flex justify-center">
			<div class="w-1.5 h-3 bg-gradient-to-b from-sky-400 to-violet-400 rounded-full mt-2 animate-scroll-dot"></div>
		</div>
		<ChevronDown size={20} class="text-white/30 animate-bounce" />
	</div>
</section>

<style>
	@keyframes scan {
		0% { top: 0%; opacity: 0; }
		10% { opacity: 1; }
		90% { opacity: 1; }
		100% { top: 100%; opacity: 0; }
	}
	
	.animate-scan {
		animation: scan 4s ease-in-out infinite;
	}
	
	@keyframes blink {
		0%, 50% { opacity: 1; }
		51%, 100% { opacity: 0; }
	}
	
	.animate-blink {
		animation: blink 1s infinite;
	}
	
	@keyframes scroll-dot {
		0%, 100% { transform: translateY(0); opacity: 1; }
		50% { transform: translateY(10px); opacity: 0.3; }
	}
	
	.animate-scroll-dot {
		animation: scroll-dot 2s ease-in-out infinite;
	}
</style>
