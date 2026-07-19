<!-- InsaneStats — Animated counters with particle effects and 3D cards -->
<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Users from '@lucide/svelte/icons/users';
	import Globe from '@lucide/svelte/icons/globe';
	import Zap from '@lucide/svelte/icons/zap';
	import TrendingUp from '@lucide/svelte/icons/trending-up';
	import Award from '@lucide/svelte/icons/award';
	import Clock from '@lucide/svelte/icons/clock';

	let sectionEl = $state(null);
	let isVisible = $state(false);
	let counters = $state([0, 0, 0, 0, 0, 0]);

	const stats = [
		{ 
			icon: Users, 
			value: 2500, 
			suffix: '+', 
			label: 'Enterprise Clients',
			description: 'Fortune 500 companies trust us',
			gradient: 'from-sky-500 to-cyan-500',
			delay: 0
		},
		{ 
			icon: Globe, 
			value: 150, 
			suffix: '+', 
			label: 'Countries',
			description: 'Global compliance coverage',
			gradient: 'from-procor-blue to-procor-blue-light',
			delay: 0.1
		},
		{ 
			icon: Zap, 
			value: 99.99, 
			suffix: '%', 
			label: 'Uptime SLA',
			description: 'Enterprise-grade reliability',
			gradient: 'from-emerald-500 to-green-500',
			delay: 0.2
		},
		{ 
			icon: TrendingUp, 
			value: 40, 
			suffix: '%', 
			label: 'Cost Reduction',
			description: 'Average client savings',
			gradient: 'from-amber-500 to-orange-500',
			delay: 0.3
		},
		{ 
			icon: Award, 
			value: 4.9, 
			suffix: '/5', 
			label: 'Customer Rating',
			description: 'Based on 10,000+ reviews',
			gradient: 'from-rose-500 to-pink-500',
			delay: 0.4
		},
		{ 
			icon: Clock, 
			value: 14, 
			suffix: ' days', 
			label: 'Avg. Implementation',
			description: 'Fast time to value',
			gradient: 'from-indigo-500 to-blue-500',
			delay: 0.5
		}
	];

	function animateCounter(index, target, duration = 2000) {
		const start = 0;
		const startTime = Date.now();
		
		function update() {
			const elapsed = Date.now() - startTime;
			const progress = Math.min(elapsed / duration, 1);
			
			// Easing function
			const easeOut = 1 - Math.pow(1 - progress, 3);
			
			counters[index] = target * easeOut;
			counters = [...counters];
			
			if (progress < 1) {
				requestAnimationFrame(update);
			}
		}
		
		update();
	}

	function formatNumber(num, index) {
		const stat = stats[index];
		if (stat.value === 99.99 || stat.value === 4.9) {
			return num.toFixed(2);
		}
		return Math.floor(num).toLocaleString();
	}

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting && !isVisible) {
					isVisible = true;
					
					// Animate cards
					gsap.fromTo('.stat-card', 
						{ y: 60, opacity: 0, scale: 0.9 },
						{ y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.2)' }
					);
					
					// Start counter animations with delays
					stats.forEach((stat, i) => {
						setTimeout(() => {
							animateCounter(i, stat.value);
						}, stat.delay * 1000 + 300);
					});
				}
			});
		}, { threshold: 0.2 });

		if (sectionEl) observer.observe(sectionEl);

		return () => observer.disconnect();
	});
</script>

<section bind:this={sectionEl} class="relative py-32 px-6 md:px-12 overflow-hidden">
	<!-- Background -->
	<div class="absolute inset-0 bg-[#050810]"></div>
	
	<!-- Animated gradient mesh -->
	<div class="absolute inset-0">
		<div class="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[180px] animate-pulse-slow"></div>
		<div class="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-procor-blue/10 rounded-full blur-[150px] animate-pulse-slower"></div>
	</div>

	<!-- Floating particles -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		{#each Array(20) as _, i}
			<div 
				class="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle"
				style="
					left: {Math.random() * 100}%;
					top: {Math.random() * 100}%;
					animation-delay: {Math.random() * 5}s;
					animation-duration: {5 + Math.random() * 5}s;
				"
			></div>
		{/each}
	</div>

	<!-- Grid overlay -->
	<div class="absolute inset-0 opacity-[0.015]" style="background-image: linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px); background-size: 60px 60px;"></div>

	<div class="max-w-7xl mx-auto relative z-10">
		<!-- Header -->
		<div class="text-center mb-20">
<h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display leading-tight mb-6">
			<span class="bg-gradient-to-r from-procor-blue via-procor-blue-light to-procor-sky bg-clip-text text-transparent">
				Numbers that speak
			</span>
		</h2>
			<p class="text-xl text-white/50 max-w-2xl mx-auto">
				Trusted by thousands of organizations worldwide to transform their HR operations
			</p>
		</div>

		<!-- Stats Grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each stats as stat, i}
				<div class="stat-card group relative" style="opacity: 0;">
					<!-- Glow effect on hover -->
					<div class="absolute -inset-0.5 rounded-3xl bg-gradient-to-r {stat.gradient} opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500"></div>
					
					<!-- Card -->
					<div class="relative p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl transition-all duration-500 group-hover:bg-white/[0.06] group-hover:border-white/[0.15] group-hover:transform group-hover:scale-[1.02] overflow-hidden">
						<!-- Background gradient -->
						<div class="absolute inset-0 bg-gradient-to-br {stat.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500"></div>
						
						<!-- Animated border -->
						<div class="absolute inset-0 rounded-3xl overflow-hidden">
							<div class="absolute inset-[-200%] bg-gradient-conic from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-spin-slow"></div>
						</div>

						<div class="relative">
							<!-- Icon -->
							<div class="w-14 h-14 rounded-2xl bg-gradient-to-br {stat.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg" style="box-shadow: 0 10px 40px -10px var(--tw-gradient-from);">
								<svelte:component this={stat.icon} size={26} class="text-white" />
							</div>

							<!-- Counter -->
							<div class="mb-2">
								<span class="text-5xl md:text-6xl font-black text-white tabular-nums">
									{formatNumber(counters[i], i)}
								</span>
								<span class="text-3xl md:text-4xl font-bold bg-gradient-to-r {stat.gradient} bg-clip-text text-transparent">
									{stat.suffix}
								</span>
							</div>

							<!-- Label -->
							<div class="text-lg font-bold text-white/90 mb-2">
								{stat.label}
							</div>

							<!-- Description -->
							<div class="text-sm text-white/40 group-hover:text-white/60 transition-colors">
								{stat.description}
							</div>

							<!-- Progress bar animation -->
							<div class="mt-6 h-1 rounded-full bg-white/5 overflow-hidden">
								<div 
									class="h-full rounded-full bg-gradient-to-r {stat.gradient} transition-all duration-1000 ease-out"
									style="width: {isVisible ? '100%' : '0%'}; transition-delay: {stat.delay + 0.5}s;"
								></div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	@keyframes pulse-slow {
		0%, 100% { opacity: 0.1; transform: scale(1); }
		50% { opacity: 0.2; transform: scale(1.1); }
	}
	
	@keyframes pulse-slower {
		0%, 100% { opacity: 0.1; transform: scale(1); }
		50% { opacity: 0.15; transform: scale(1.05); }
	}
	
	.animate-pulse-slow {
		animation: pulse-slow 8s ease-in-out infinite;
	}
	
	.animate-pulse-slower {
		animation: pulse-slower 10s ease-in-out infinite;
	}
	
	@keyframes float-particle {
		0%, 100% { 
			transform: translateY(0) translateX(0);
			opacity: 0;
		}
		10% { opacity: 1; }
		90% { opacity: 1; }
		50% { 
			transform: translateY(-100px) translateX(20px);
		}
	}
	
	.animate-float-particle {
		animation: float-particle 8s ease-in-out infinite;
	}
	
	@keyframes spin-slow {
		from { transform: rotate(0deg); }
		to { transform: rotate(360deg); }
	}
	
	.animate-spin-slow {
		animation: spin-slow 8s linear infinite;
	}
	
	.bg-gradient-conic {
		background: conic-gradient(var(--tw-gradient-stops));
	}
</style>
