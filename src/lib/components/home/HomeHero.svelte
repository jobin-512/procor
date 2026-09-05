<script>
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Play from '@lucide/svelte/icons/play';
	import Globe from '@lucide/svelte/icons/globe';
	import Users from '@lucide/svelte/icons/users';
	import Shield from '@lucide/svelte/icons/shield';
	import Zap from '@lucide/svelte/icons/zap';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	// State
	let typedText = $state('');
	let currentWordIndex = $state(0);
	let isDeleting = $state(false);
	
	// DOM Refs
	let sectionRef = $state();
	let contentRef = $state();
	let canvasRef = $state();
	let glowRef = $state();

	const rotatingWords = ['Human Capital', 'Workforce', 'People Operations', 'HR'];
	const pillars = [
		{ label: 'Global Reach', icon: Globe },
		{ label: 'People First', icon: Users },
		{ label: 'Secure by Design', icon: Shield },
		{ label: 'Automated', icon: Zap }
	];

	// 1. Typing Effect Logic
	$effect(() => {
		const word = rotatingWords[currentWordIndex];
		let timeout;
		if (!isDeleting && typedText.length < word.length) {
			timeout = setTimeout(() => (typedText = word.slice(0, typedText.length + 1)), 70);
		} else if (!isDeleting && typedText.length === word.length) {
			timeout = setTimeout(() => (isDeleting = true), 2500);
		} else if (isDeleting && typedText.length > 0) {
			timeout = setTimeout(() => (typedText = word.slice(0, typedText.length - 1)), 30);
		} else if (isDeleting && typedText.length === 0) {
			isDeleting = false;
			currentWordIndex = (currentWordIndex + 1) % rotatingWords.length;
		}
		return () => clearTimeout(timeout);
	});

	// 2. GSAP Animations & Canvas Network
	onMount(() => {
		// --- A. Canvas Particle Network (Using your Procor Blue: rgb(37, 59, 218)) ---
		const canvas = canvasRef;
		const ctx = canvas.getContext('2d');
		let particles = [];
		let animationFrame;
		let mouse = { x: null, y: null, radius: 150 };

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			initParticles();
		};

		class Particle {
			constructor() {
				this.x = Math.random() * canvas.width;
				this.y = Math.random() * canvas.height;
				this.size = Math.random() * 2 + 0.5;
				this.baseX = this.x;
				this.baseY = this.y;
				this.density = (Math.random() * 30) + 1;
				this.vx = (Math.random() - 0.5) * 0.5;
				this.vy = (Math.random() - 0.5) * 0.5;
			}
			draw() {
				ctx.fillStyle = 'rgba(37, 59, 218, 0.4)'; 
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
				ctx.closePath();
				ctx.fill();
			}
			update() {
				this.x += this.vx;
				this.y += this.vy;

				if (this.x > canvas.width || this.x < 0) this.vx *= -1;
				if (this.y > canvas.height || this.y < 0) this.vy *= -1;

				if (mouse.x != null) {
					let dx = mouse.x - this.x;
					let dy = mouse.y - this.y;
					let distance = Math.sqrt(dx * dx + dy * dy);
					if (distance < mouse.radius) {
						const forceDirectionX = dx / distance;
						const forceDirectionY = dy / distance;
						const force = (mouse.radius - distance) / mouse.radius;
						this.x -= forceDirectionX * force * this.density * 0.5;
						this.y -= forceDirectionY * force * this.density * 0.5;
					}
				}
			}
		}

		const initParticles = () => {
			particles = [];
			const numParticles = Math.min((canvas.width * canvas.height) / 15000, 100);
			for (let i = 0; i < numParticles; i++) particles.push(new Particle());
		};

		const animateParticles = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			for (let i = 0; i < particles.length; i++) {
				particles[i].update();
				particles[i].draw();
				for (let j = i; j < particles.length; j++) {
					const dx = particles[i].x - particles[j].x;
					const dy = particles[i].y - particles[j].y;
					const distance = Math.sqrt(dx * dx + dy * dy);
					if (distance < 120) {
						ctx.beginPath();
						ctx.strokeStyle = `rgba(37, 59, 218, ${0.15 - distance / 1200})`; 
						ctx.lineWidth = 1;
						ctx.moveTo(particles[i].x, particles[i].y);
						ctx.lineTo(particles[j].x, particles[j].y);
						ctx.stroke();
					}
				}
			}
			animationFrame = requestAnimationFrame(animateParticles);
		};

		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
		animateParticles();

		// --- B. GSAP Entrance Animations ---
		const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
		
		tl.fromTo(contentRef.children, 
			{ y: 40, opacity: 0, rotateX: -10 },
			{ y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.1, delay: 0.2 }
		);

		// --- C. Mouse Parallax & Dynamic Glow ---
		const handleMouseMove = (e) => {
			const { clientX, clientY } = e;
			const xPos = (clientX / window.innerWidth - 0.5) * 2;
			const yPos = (clientY / window.innerHeight - 0.5) * 2;

			const rect = canvas.getBoundingClientRect();
			mouse.x = clientX - rect.left;
			mouse.y = clientY - rect.top;

			gsap.to(contentRef, {
				rotationY: xPos * 4,
				rotationX: -yPos * 4,
				transformPerspective: 1000,
				ease: 'power2.out',
				duration: 1
			});

			gsap.to(glowRef, {
				x: clientX - window.innerWidth / 2,
				y: clientY - window.innerHeight / 2,
				ease: 'power3.out',
				duration: 2
			});
		};

		const handleMouseLeave = () => {
			mouse.x = null;
			mouse.y = null;
			gsap.to(contentRef, { rotationY: 0, rotationX: 0, duration: 1, ease: 'power2.out' });
			gsap.to(glowRef, { x: 0, y: 0, duration: 2, ease: 'power2.out' });
		};

		window.addEventListener('mousemove', handleMouseMove);
		sectionRef.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			window.removeEventListener('resize', resizeCanvas);
			window.removeEventListener('mousemove', handleMouseMove);
			if (sectionRef) sectionRef.removeEventListener('mouseleave', handleMouseLeave);
			cancelAnimationFrame(animationFrame);
		};
	});
</script>

<!-- Notice the classes: bg-bg, noise-overlay (From your CSS!) -->
<section bind:this={sectionRef} class="noise-overlay relative flex min-h-screen items-center justify-center overflow-hidden bg-bg px-6 pb-24 pt-32 transition-colors duration-500 md:pb-32 md:pt-44">
	
	<!-- 1. Interactive Canvas Background -->
	<canvas bind:this={canvasRef} class="absolute inset-0 z-0 pointer-events-none"></canvas>

	<!-- 2. Dynamic Mouse-following Glow & Grid -->
	<div class="pointer-events-none absolute inset-0 z-0 overflow-hidden">
		<!-- Dynamic Glow: Uses your global CSS variables for colors -->
		<div bind:this={glowRef} class="mouse-glow absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] transition-colors duration-500" style="background: var(--color-procor-blue); opacity: 0.15;"></div>
		
		<!-- Theme Aware Grid Overlay: Natively pulls var(--line) from your CSS so it auto-switches for Light/Dark mode -->
		<div class="absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" style="background-image: linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px); background-size: 64px 64px;"></div>
	</div>

	<!-- 3. Main Content (3D Tilting Container) -->
	<div bind:this={contentRef} class="relative z-10 mx-auto max-w-5xl text-center transform-style-3d">
		
		<!-- Badge (Uses your surface-2 and line vars) -->
		<div class="glass-effect cursor-pointer inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-fg shadow-sm transition-colors hover:border-line-strong">
			<span class="relative flex h-2 w-2">
				<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-procor-sky opacity-75"></span>
				<span class="relative inline-flex h-2 w-2 rounded-full bg-procor-sky"></span>
			</span>
			Next-Generation HR Platform
		</div>

		<!-- Headline -->
		<h1 class="font-display mt-8 text-5xl font-black leading-[1.1] tracking-tight text-fg transition-colors sm:text-6xl md:text-8xl">
			The future of <br class="hidden sm:block"/>
			<span class="relative mt-2 inline-block">
				<!-- Glowing blur behind text -->
				<span class="absolute inset-0 blur-2xl opacity-30 transition-opacity" style="background: var(--gradient-brand);"></span>
				<!-- Pulls your beautiful .text-gradient-brand class -->
				<span class="text-gradient-brand relative drop-shadow-sm">
					{typedText}<span class="animate-blink font-light text-procor-sky">|</span>
				</span>
			</span>
		</h1>

		<!-- Subheadline (Uses text-fg/70 so it adapts perfectly) -->
		<p class="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-fg/70 transition-colors md:text-xl">
			PROCOR brings your people, performance, and processes together in one calm, intelligent workspace — built for teams of every size, everywhere they work.
		</p>

		<!-- Actions -->
		<div class="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
			<!-- Primary Button (Utilizes your native .btn-primary) -->
			<a href="/demo" class="btn-primary group relative inline-flex items-center gap-2 overflow-hidden text-base">
				<!-- Shine/Sweep effect mapped onto your button -->
				<span class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
					<div class="relative h-full w-8 bg-white/20"></div>
				</span>
				<span class="relative flex items-center gap-2">
					Start Free Trial
					<ArrowRight size={18} class="transition-transform group-hover:translate-x-1" />
				</span>
			</a>
			
			<!-- Secondary Button (Utilizes your native .btn-secondary) -->
			<a href="/contact" class="btn-secondary group relative inline-flex items-center gap-3 text-base">
				<div class="flex h-8 w-8 items-center justify-center rounded-full bg-fg/5 transition-transform group-hover:scale-110 group-hover:bg-fg/10">
					<Play size={14} class="translate-x-[1px] fill-fg text-fg transition-colors" />
				</div>
				Talk to Sales
			</a>
		</div>

		<!-- Pillars -->
		<div class="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 border-t border-line pt-10 transition-colors">
			{#each pillars as p}
				<div class="group flex cursor-default items-center gap-3 text-sm font-medium text-fg/60 transition-colors hover:text-fg">
					<div class="rounded-lg bg-[var(--color-procor-blue)]/10 p-2 text-[var(--color-procor-blue)] transition-colors group-hover:bg-[var(--color-procor-blue)]/20">
						<svelte:component this={p.icon} size={18} />
					</div>
					{p.label}
				</div>
			{/each}
		</div>
	</div>

	<!-- Scroll Indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2">
		<a href="#principles" class="group flex flex-col items-center gap-2 text-fg/40 transition-colors hover:text-fg/80">
			<span class="text-[10px] font-bold uppercase tracking-[0.3em] transition-transform group-hover:-translate-y-1">Scroll</span>
			<ChevronDown size={20} class="animate-bounce" />
		</a>
	</div>
</section>

<style>
	/* Ensures 3D transforms work on children */
	.transform-style-3d {
		transform-style: preserve-3d;
		perspective: 1000px;
	}

	@keyframes blink {
		0%, 50% { opacity: 1; }
		51%, 100% { opacity: 0; }
	}
	.animate-blink {
		animation: blink 0.9s steps(1) infinite;
	}
	
	/* Flawless blend modes for Light and Dark based on your html.light class */
	.mouse-glow {
		mix-blend-mode: screen;
	}
	:global(html.light) .mouse-glow {
		mix-blend-mode: multiply;
	}
</style>