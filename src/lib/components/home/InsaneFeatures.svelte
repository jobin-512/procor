<!-- InsaneFeatures — 3D Holographic Feature Cards with WebGL effects -->
<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Brain from '@lucide/svelte/icons/brain';
	import Zap from '@lucide/svelte/icons/zap';
	import ShieldCheck from '@lucide/svelte/icons/shield-check';
	import Globe from '@lucide/svelte/icons/globe';
	import BarChart3 from '@lucide/svelte/icons/bar-chart-3';
	import Users from '@lucide/svelte/icons/users';
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	let sectionEl = $state(null);
	let activeCard = $state(null);

	const features = [
{ 
			icon: Brain, 
			title: 'AI-Powered Matching', 
			desc: 'Neural algorithms connect the right talent to the right roles automatically, reducing time-to-hire by 40%.',
			gradient: 'from-procor-blue via-procor-blue-light to-procor-sky',
			glowColor: 'rgba(37,59,218,0.4)',
			stat: '40%',
			statLabel: 'Faster Hiring'
		},
		{ 
			icon: Zap, 
			title: 'Workflow Automation', 
			desc: 'Build complex HR workflows in minutes with our visual drag-and-drop builder. No coding required.',
			gradient: 'from-amber-500 via-orange-500 to-red-500',
			glowColor: 'rgba(245,158,11,0.4)',
			stat: '10x',
			statLabel: 'Productivity'
		},
		{ 
			icon: ShieldCheck, 
			title: 'Bank-Grade Security', 
			desc: 'SOC 2 Type II certified with end-to-end encryption and zero-trust architecture.',
			gradient: 'from-emerald-500 via-green-500 to-teal-500',
			glowColor: 'rgba(16,185,129,0.4)',
			stat: '256-bit',
			statLabel: 'Encryption'
		},
		{ 
			icon: Globe, 
			title: 'Global Compliance', 
			desc: 'Auto-updating labor laws across 150+ jurisdictions. Never worry about penalties again.',
			gradient: 'from-sky-500 via-blue-500 to-indigo-500',
			glowColor: 'rgba(14,165,233,0.4)',
			stat: '150+',
			statLabel: 'Countries'
		},
		{ 
			icon: BarChart3, 
			title: 'Predictive Analytics', 
			desc: 'Attrition forecasting, sentiment analysis, and headcount planning powered by machine learning.',
			gradient: 'from-procor-blue via-sky-400 to-cyan-400',
			glowColor: 'rgba(59,91,255,0.4)',
			stat: '95%',
			statLabel: 'Accuracy'
		},
		{ 
			icon: Users, 
			title: 'Employee Experience', 
			desc: 'Self-service portal with mobile app, AI chatbot, and personalized dashboards for every employee.',
			gradient: 'from-cyan-500 via-sky-500 to-blue-500',
			glowColor: 'rgba(6,182,212,0.4)',
			stat: '4.9★',
			statLabel: 'User Rating'
		}
	];

	onMount(() => {
		const ctx = gsap.context(() => {
			// Section reveal
			gsap.fromTo('.features-header', 
				{ y: 60, opacity: 0 },
				{ 
					y: 0, 
					opacity: 1, 
					duration: 1,
					scrollTrigger: {
						trigger: '.features-header',
						start: 'top 80%'
					}
				}
			);

			// Staggered card reveal
			gsap.fromTo('.feature-card', 
				{ y: 80, opacity: 0, rotateX: 15 },
				{ 
					y: 0, 
					opacity: 1, 
					rotateX: 0,
					duration: 0.8,
					stagger: 0.1,
					scrollTrigger: {
						trigger: '.features-grid',
						start: 'top 75%'
					}
				}
			);
		}, sectionEl);

		return () => ctx.revert();
	});

	function handleCardHover(index) {
		activeCard = index;
	}
</script>

<section bind:this={sectionEl} class="relative py-32 px-6 md:px-12 overflow-hidden">
	<!-- Animated background -->
	<div class="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#080c15] to-[#0a0f1a]"></div>
	
<!-- Floating orbs -->
	<div class="absolute inset-0 pointer-events-none overflow-hidden">
		<div class="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-procor-blue/10 rounded-full blur-[150px] animate-float-slow"></div>
		<div class="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-procor-sky/10 rounded-full blur-[150px] animate-float-slower"></div>
		<div class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-procor-blue-lighter/5 rounded-full blur-[200px]"></div>
	</div>

	<!-- Grid pattern -->
	<div class="absolute inset-0 opacity-[0.02]" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 1px); background-size: 40px 40px;"></div>

	<div class="max-w-7xl mx-auto relative z-10">
		<!-- Header -->
<div class="features-header text-center mb-20 max-w-4xl mx-auto">
			<div class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-procor-blue/20 to-procor-blue-light/20 border border-white/10 rounded-full text-sm font-semibold text-white/80 mb-8 backdrop-blur-xl">
				<Sparkles size={16} class="text-procor-blue-light" />
				<span>Supercharged Capabilities</span>
			</div>
			
			<h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white font-display leading-[0.95] mb-8">
				<span class="block">Everything you need.</span>
				<span class="block bg-gradient-to-r from-procor-blue via-procor-blue-light to-procor-sky bg-clip-text text-transparent">
					Nothing you don't.
				</span>
			</h2>
			
			<p class="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
				Six powerful modules working in perfect harmony. Each one designed to solve real problems, not create new ones.
			</p>
		</div>

		<!-- Features Grid -->
		<div class="features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each features as feature, i}
				<div 
					class="feature-card group relative"
					onmouseenter={() => handleCardHover(i)}
					onmouseleave={() => handleCardHover(null)}
					role="article"
				>
					<!-- Card glow effect -->
					<div 
						class="absolute -inset-0.5 rounded-3xl bg-gradient-to-r {feature.gradient} opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500"
					></div>
					
					<!-- Card content -->
					<div class="relative h-full p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl transition-all duration-500 group-hover:bg-white/[0.06] group-hover:border-white/[0.15] overflow-hidden">
						<!-- Animated gradient background on hover -->
						<div class="absolute inset-0 bg-gradient-to-br {feature.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"></div>
						
						<!-- Shine effect -->
						<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

						<!-- Icon with animated ring -->
						<div class="relative w-16 h-16 mb-6">
							<div class="absolute inset-0 rounded-2xl bg-gradient-to-br {feature.gradient} opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500"></div>
							<div class="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors"></div>
							<div class="absolute inset-0 flex items-center justify-center">
								<svelte:component this={feature.icon} size={28} class="text-white group-hover:scale-110 transition-transform duration-300" />
							</div>
							<!-- Pulsing ring -->
							<div class="absolute -inset-2 rounded-2xl border border-white/5 opacity-0 group-hover:opacity-100 group-hover:animate-ping-slow"></div>
						</div>

						<!-- Title -->
						<h3 class="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:{feature.gradient} group-hover:bg-clip-text transition-all duration-300">
							{feature.title}
						</h3>

						<!-- Description -->
						<p class="text-white/50 leading-relaxed mb-6 group-hover:text-white/70 transition-colors">
							{feature.desc}
						</p>

						<!-- Stat badge -->
						<div class="flex items-center justify-between pt-6 border-t border-white/[0.06]">
							<div>
								<div class="text-2xl font-black bg-gradient-to-r {feature.gradient} bg-clip-text text-transparent">
									{feature.stat}
								</div>
								<div class="text-xs text-white/40 font-medium uppercase tracking-wider">
									{feature.statLabel}
								</div>
							</div>
							
							<div class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
								<ArrowRight size={16} class="text-white/70" />
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Bottom CTA -->
		<div class="mt-16 text-center">
			<a href="/features" class="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-procor-blue/20 to-procor-blue-light/20 border border-white/10 rounded-full text-white font-semibold hover:border-white/20 hover:bg-white/10 transition-all duration-300">
				<span>Explore All Features</span>
				<ArrowRight size={18} class="group-hover:translate-x-1 transition-transform" />
			</a>
		</div>
	</div>
</section>

<style>
	@keyframes float-slow {
		0%, 100% { transform: translate(0, 0) rotate(0deg); }
		50% { transform: translate(30px, -30px) rotate(5deg); }
	}
	
	@keyframes float-slower {
		0%, 100% { transform: translate(0, 0) rotate(0deg); }
		50% { transform: translate(-20px, 20px) rotate(-3deg); }
	}
	
	.animate-float-slow {
		animation: float-slow 20s ease-in-out infinite;
	}
	
	.animate-float-slower {
		animation: float-slower 25s ease-in-out infinite;
	}
	
	@keyframes ping-slow {
		0% { transform: scale(1); opacity: 0.5; }
		100% { transform: scale(1.5); opacity: 0; }
	}
	
	.group-hover\:animate-ping-slow {
		animation: ping-slow 1.5s ease-out infinite;
	}
</style>
