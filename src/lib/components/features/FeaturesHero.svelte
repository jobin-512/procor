<script>
	import { onMount, onDestroy } from 'svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';
	import GradientButton from '$lib/components/ui/GradientButton.svelte';
	import TiltCard from '$lib/components/ui/TiltCard.svelte';
	import FloatingOrb from '$lib/components/ui/FloatingOrb.svelte';
	import ParticleField from '$lib/components/ui/ParticleField.svelte';
	import { Users, BarChart3, Shield, ArrowRight, Sparkles } from '@lucide/svelte';

	let canvas = $state(null);
	let animFrameId = $state(0);
	let ctx = $state(null);
	let particles = $state([]);

	const previewCards = [
		{ icon: Users, label: 'Employee Hub', color: '#253BDA' },
		{ icon: BarChart3, label: 'Analytics', color: '#3B5BFF' },
		{ icon: Shield, label: 'Compliance', color: '#10b981' }
	];

	function initParticles() {
		if (!canvas) return;
		ctx = canvas.getContext('2d');
		const dpr = window.devicePixelRatio || 1;
		const rect = canvas.parentElement.getBoundingClientRect();
		canvas.width = rect.width * dpr;
		canvas.height = rect.height * dpr;
		canvas.style.width = rect.width + 'px';
		canvas.style.height = rect.height + 'px';
		ctx.scale(dpr, dpr);

		particles = Array.from({ length: 80 }, () => ({
			x: Math.random() * rect.width,
			y: Math.random() * rect.height,
			vx: (Math.random() - 0.5) * 0.4,
			vy: (Math.random() - 0.5) * 0.4,
			r: Math.random() * 2.5 + 0.5,
			alpha: Math.random() * 0.6 + 0.15
		}));

		function draw() {
			if (!ctx || !canvas) return;
			const w = canvas.width / (window.devicePixelRatio || 1);
			const h = canvas.height / (window.devicePixelRatio || 1);
			ctx.clearRect(0, 0, w, h);
			for (const p of particles) {
				p.x += p.vx;
				p.y += p.vy;
				if (p.x < 0 || p.x > w) p.vx *= -1;
				if (p.y < 0 || p.y > h) p.vy *= -1;
				ctx.beginPath();
				ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(37, 59, 218, ${p.alpha})`;
				ctx.fill();
			}
			for (let i = 0; i < particles.length; i++) {
				for (let j = i + 1; j < particles.length; j++) {
					const dx = particles[i].x - particles[j].x;
					const dy = particles[i].y - particles[j].y;
					const dist = Math.sqrt(dx * dx + dy * dy);
					if (dist < 140) {
						ctx.beginPath();
						ctx.moveTo(particles[i].x, particles[i].y);
						ctx.lineTo(particles[j].x, particles[j].y);
						ctx.strokeStyle = `rgba(37, 59, 218, ${0.14 * (1 - dist / 140)})`;
						ctx.lineWidth = 0.6;
						ctx.stroke();
					}
				}
			}
			animFrameId = requestAnimationFrame(draw);
		}
		draw();
	}

	onMount(() => {
		initParticles();
		const handleResize = () => initParticles();
		window.addEventListener('resize', handleResize);
		onDestroy(() => {
			window.removeEventListener('resize', handleResize);
			cancelAnimationFrame(animFrameId);
		});
	});
</script>

<section class="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden surface-dark">
	<canvas bind:this={canvas} class="absolute inset-0 w-full h-full pointer-events-none"></canvas>

	<FloatingOrb color="rgba(37, 59, 218, 0.35)" size="45rem" className="-top-24 -right-48" blur="200px" speed={18} />
	<FloatingOrb color="rgba(59, 91, 255, 0.3)" size="35rem" className="bottom-24 -left-40" blur="200px" speed={22} />
	<FloatingOrb color="rgba(16, 185, 129, 0.2)" size="25rem" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" blur="180px" speed={30} parallax={false} />
	<ParticleField count={60} color="rgba(37, 59, 218, 0.5)" className="pointer-events-none" connectionDistance={150} />

	<div class="absolute inset-0 pointer-events-none grid-overlay opacity-[0.06]"></div>
	<div class="absolute inset-0 pointer-events-none gradient-overlay"></div>

	<div class="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 md:py-32 text-center">
		<div class="animate-fade-in-up">
			<SectionBadge variant="sky">Features</SectionBadge>
		</div>

		<h1 class="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[1.05] animate-fade-in-up delay-100 font-display">
			Powerful Features,
			<br />
			<span class="text-gradient-brand">Infinite Possibilities</span>
		</h1>

		<p class="mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
			Everything you need to manage your workforce, streamline operations, and drive
			data-informed decisions — all in one platform.
		</p>

		<div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
			<GradientButton href="#categories" size="lg">
				Explore Features <ArrowRight size={20} />
			</GradientButton>
			<GradientButton href="#demo" variant="ghost" size="lg">
				Watch Demo <Sparkles size={20} />
			</GradientButton>
		</div>

		<div class="mt-16 md:mt-24 relative max-w-5xl mx-auto hidden md:block">
			<div class="grid grid-cols-3 gap-6">
				{#each previewCards as card, i}
					<TiltCard tiltAmount={8} className="animate-fade-in-up delay-{400 + i * 150}">
						<div class="glass-strong rounded-2xl p-5 md:p-6 flex flex-col items-center gap-3 text-center">
							<div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background: {card.color}15;">
								<card.icon size={24} style="color: {card.color}" />
							</div>
							<span class="text-sm font-semibold text-white">{card.label}</span>
						</div>
					</TiltCard>
				{/each}
			</div>
		</div>
	</div>

	<div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--surface-base)] to-transparent pointer-events-none"></div>
</section>
