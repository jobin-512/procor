<!-- InsaneCTA — Immersive final call-to-action with 3D effects -->
<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Rocket from '@lucide/svelte/icons/rocket';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import ShieldCheck from '@lucide/svelte/icons/shield-check';
	import Clock from '@lucide/svelte/icons/clock';
	import Zap from '@lucide/svelte/icons/zap';
	import CheckCircle from '@lucide/svelte/icons/check-circle';
	import Sparkles from '@lucide/svelte/icons/sparkles';

	let sectionEl = $state(null);
	let mousePos = $state({ x: 0, y: 0 });

	const benefits = [
		'No credit card required',
		'14-day free trial',
		'Cancel anytime',
		'Full feature access'
	];

	const trustBadges = [
		{ icon: ShieldCheck, label: 'SOC 2 Type II', color: 'text-emerald-400' },
		{ icon: ShieldCheck, label: 'GDPR Compliant', color: 'text-sky-400' },
		{ icon: Clock, label: '99.99% Uptime', color: 'text-violet-400' },
		{ icon: Zap, label: '24/7 Support', color: 'text-amber-400' }
	];

	onMount(() => {
		const ctx = gsap.context(() => {
			gsap.fromTo('.cta-content', 
				{ y: 60, opacity: 0 },
				{ 
					y: 0, 
					opacity: 1, 
					duration: 1,
					scrollTrigger: {
						trigger: sectionEl,
						start: 'top 70%'
					}
				}
			);
		}, sectionEl);

		const onMouseMove = (e) => {
			const rect = sectionEl?.getBoundingClientRect();
			if (rect) {
				mousePos = {
					x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
					y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
				};
			}
		};

		sectionEl?.addEventListener('mousemove', onMouseMove);

		return () => {
			ctx.revert();
			sectionEl?.removeEventListener('mousemove', onMouseMove);
		};
	});
</script>

<section bind:this={sectionEl} class="relative py-32 px-6 md:px-12 overflow-hidden">
	<!-- Animated background -->
	<div class="absolute inset-0 bg-[#050810]"></div>
	
	<!-- Gradient orbs -->
	<div class="absolute inset-0 pointer-events-none overflow-hidden">
		<div 
			class="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] rounded-full blur-[200px] transition-transform duration-1000"
			style="
				background: radial-gradient(ellipse at center, rgba(99,102,241,0.2) 0%, rgba(139,92,246,0.15) 30%, rgba(236,72,153,0.1) 60%, transparent 100%);
				transform: translate({mousePos.x * 0.5}px, {mousePos.y * 0.5}px);
			"
		></div>
	</div>

	<!-- Animated grid -->
	<div class="absolute inset-0 opacity-[0.03]" style="
		background-image: linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), 
		linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px);
		background-size: 60px 60px;
		mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
	"></div>

	<!-- Floating particles -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		{#each Array(30) as _, i}
			<div 
				class="absolute w-1 h-1 rounded-full animate-float-up"
				style="
					left: {5 + (i * 3)}%;
					background: {i % 3 === 0 ? '#8b5cf6' : i % 3 === 1 ? '#6366f1' : '#ec4899'};
					animation-delay: {i * 0.2}s;
					animation-duration: {4 + Math.random() * 4}s;
					opacity: {0.3 + Math.random() * 0.4};
				"
			></div>
		{/each}
	</div>

	<div class="max-w-5xl mx-auto relative z-10">
		<div class="cta-content text-center">
			<!-- Badge -->
			<div class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-fuchsia-500/20 border border-white/10 rounded-full text-sm font-semibold text-white/80 mb-10 backdrop-blur-xl">
				<Sparkles size={16} class="text-violet-400 animate-pulse" />
				<span>Limited Time: 3 Months Free for Annual Plans</span>
			</div>

			<!-- Main heading -->
			<h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white font-display leading-[0.95] mb-8">
				<span class="block mb-2">Ready to transform</span>
				<span class="block bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
					your HR operations?
				</span>
			</h2>

			<!-- Subtitle -->
			<p class="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
				Join <span class="text-white font-semibold">2,500+ organizations</span> that trust PROCOR to power their people operations
			</p>

			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
				<a href="/demo" class="group relative">
					<!-- Animated glow -->
					<div class="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 animate-pulse-glow transition-opacity duration-500"></div>
					
					<div class="relative px-10 py-6 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-white rounded-2xl font-bold text-xl flex items-center gap-4 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
						<!-- Shine effect -->
						<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
						
						<Rocket size={24} class="group-hover:rotate-12 transition-transform" />
						<span>Start Free Trial</span>
						<ArrowRight size={24} class="group-hover:translate-x-2 transition-transform" />
					</div>
				</a>

				<a href="/contact" class="group px-10 py-6 bg-white/[0.03] border border-white/[0.15] text-white rounded-2xl font-semibold text-xl flex items-center gap-4 backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.08] hover:border-white/[0.25]">
					<span>Talk to Sales</span>
					<ArrowRight size={20} class="group-hover:translate-x-1 transition-transform" />
				</a>
			</div>

			<!-- Benefits -->
			<div class="flex flex-wrap justify-center gap-6 mb-16">
				{#each benefits as benefit}
					<div class="flex items-center gap-2 text-sm text-white/60">
						<CheckCircle size={16} class="text-emerald-400" />
						<span>{benefit}</span>
					</div>
				{/each}
			</div>

			<!-- Trust badges -->
			<div class="pt-12 border-t border-white/[0.06]">
				<div class="flex flex-wrap justify-center items-center gap-6 md:gap-10">
					{#each trustBadges as badge}
						<div class="flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
							<svelte:component this={badge.icon} size={18} class={badge.color} />
							<span class="text-sm font-medium text-white/70">{badge.label}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- Bottom decorative gradient -->
	<div class="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
</section>

<style>
	@keyframes float-up {
		0% {
			transform: translateY(100vh) scale(0);
			opacity: 0;
		}
		10% {
			opacity: 1;
		}
		90% {
			opacity: 1;
		}
		100% {
			transform: translateY(-20vh) scale(1);
			opacity: 0;
		}
	}
	
	.animate-float-up {
		animation: float-up 8s ease-in-out infinite;
	}
	
	@keyframes pulse-glow {
		0%, 100% { opacity: 0.7; }
		50% { opacity: 1; }
	}
	
	.animate-pulse-glow {
		animation: pulse-glow 2s ease-in-out infinite;
	}
</style>
