<script>
	import Brain from '@lucide/svelte/icons/brain';
	import Globe from '@lucide/svelte/icons/globe';
	import ShieldCheck from '@lucide/svelte/icons/shield-check';
	import Zap from '@lucide/svelte/icons/zap';
	import Users from '@lucide/svelte/icons/users';
	import Sparkles from '@lucide/svelte/icons/sparkles';
	
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';

	const principles = [
		{
			icon: Brain,
			title: 'Built on Intelligence',
			desc: 'Adaptive models learn how your organization actually operates and surface what matters.',
			color: 'rgba(56, 189, 248, 1)', // Sky
			glow: 'rgba(56, 189, 248, 0.4)'
		},
		{
			icon: Globe,
			title: 'Global by Design',
			desc: 'Compliance, currency, and language handled for teams spread across the world.',
			color: 'rgba(37, 59, 218, 1)', // Brand Blue
			glow: 'rgba(37, 59, 218, 0.4)'
		},
		{
			icon: ShieldCheck,
			title: 'Secure at the Core',
			desc: 'Certified, encrypted, and audited — protection is part of the foundation, not an add-on.',
			color: 'rgba(16, 185, 129, 1)', // Emerald
			glow: 'rgba(16, 185, 129, 0.4)'
		},
		{
			icon: Zap,
			title: 'Fast Where It Counts',
			desc: 'Automation removes busywork so your people spend time on the work that matters.',
			color: 'rgba(245, 158, 11, 1)', // Amber
			glow: 'rgba(245, 158, 11, 0.4)'
		},
		{
			icon: Users,
			title: 'People First',
			desc: 'Every screen is designed around the human experience, not the org chart.',
			color: 'rgba(244, 63, 94, 1)', // Rose
			glow: 'rgba(244, 63, 94, 0.4)'
		},
		{
			icon: Sparkles,
			title: 'Always Improving',
			desc: 'Continuous recommendations keep your workspace evolving alongside your company.',
			color: 'rgba(99, 102, 241, 1)', // Indigo
			glow: 'rgba(99, 102, 241, 0.4)'
		}
	];

	let sectionRef = $state();
	let headerRef = $state();
	let cardsGridRef = $state();
	let cardRefs = $state([]);

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		cardRefs = [...cardsGridRef.querySelectorAll('.spotlight-card')];

		// --- 1. Dramatic Scroll Entrance ---
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef,
				start: 'top 80%',
				once: true
			}
		});

		// Header reveal
		tl.fromTo(
			headerRef.children,
			{ y: 50, opacity: 0, rotateX: -15 },
			{ y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.15, ease: 'power4.out', immediateRender: false }
		);

		// 3D Card Stagger reveal
		tl.fromTo(
			cardRefs,
			{ y: 100, opacity: 0, rotateY: 10, scale: 0.9 },
			{ 
				y: 0, 
				opacity: 1, 
				rotateY: 0, 
				scale: 1, 
				duration: 0.8, 
				stagger: 0.1, 
				ease: 'back.out(1.2)',
				immediateRender: false 
			},
			'-=0.6'
		);

		// --- 2. Dynamic Mouse Spotlight Effect ---
		const handleMouseMove = (e) => {
			for (const card of cardRefs) {
				if (!card) continue;
				const rect = card.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;
				
				// Set CSS variables for the spotlight position locally on each card
				card.style.setProperty('--mouse-x', `${x}px`);
				card.style.setProperty('--mouse-y', `${y}px`);
			}
		};

		if (cardsGridRef) {
			cardsGridRef.addEventListener('mousemove', handleMouseMove);
		}

		return () => {
			if (cardsGridRef) {
				cardsGridRef.removeEventListener('mousemove', handleMouseMove);
			}
			ScrollTrigger.getAll().forEach(t => t.kill());
		};
	});
</script>

<section id="principles" bind:this={sectionRef} class="noise-overlay relative overflow-hidden bg-bg px-6 py-24 md:px-12 md:py-32">
	
	<!-- Abstract Ambient Glow behind the grid -->
	<div class="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl opacity-30 dark:opacity-20 mix-blend-screen dark:mix-blend-color-dodge transition-opacity duration-700">
		<div class="absolute top-0 left-0 w-96 h-96 bg-[var(--color-procor-sky)] rounded-full blur-[120px]"></div>
		<div class="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-procor-blue)] rounded-full blur-[120px]"></div>
	</div>

	<div class="relative z-10 mx-auto max-w-7xl">
		<!-- Header -->
		<div bind:this={headerRef} class="mb-20 text-center transform-style-3d">
			<div class="inline-flex items-center gap-2 rounded-full border border-line bg-surface-2 px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-fg/70 uppercase">
				<Sparkles size={14} class="text-[var(--color-procor-blue-light)]" />
				Core Philosophy
			</div>
			
			<h2 class="text-4xl font-black leading-tight text-fg font-display sm:text-5xl md:text-6xl">
				Why teams choose <br class="hidden sm:block"/>
				<span class="text-gradient-brand relative inline-block drop-shadow-sm">
					PROCOR
					<!-- Underline flourish -->
					<svg class="absolute -bottom-2 left-0 w-full text-[var(--color-procor-blue)] opacity-50" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M2 7.00002C40.6667 3.16669 123.6 -2.59998 198 7.00002" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
					</svg>
				</span>
			</h2>
			
			<p class="mx-auto mt-6 max-w-2xl text-lg text-fg/60 font-light">
				Principles we refuse to compromise on — no vanity metrics, just the substance behind the platform.
			</p>
		</div>

		<!-- Spotlight Grid -->
		<div bind:this={cardsGridRef} class="group/grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each principles as principle, i}
				<div
					class="spotlight-card group relative overflow-hidden rounded-[2rem] bg-surface-2 border border-line p-8 transition-transform duration-500 hover:-translate-y-2 transform-style-3d"
				>
					<!-- 1. The Glowing Border Tracking the Mouse -->
					<div class="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-300 group-hover/grid:opacity-100" style="background: radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), {principle.glow}, transparent 40%); z-index: 1;"></div>
					<!-- Inner mask to hollow out the border -->
					<div class="pointer-events-none absolute inset-[1px] rounded-[calc(2rem-1px)] bg-surface-2 z-10 transition-colors duration-300"></div>
					
					<!-- 2. The Soft Inner Glow Tracking the Mouse -->
					<div class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/grid:opacity-100 mix-blend-plus-lighter z-20" style="background: radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), {principle.glow.replace('0.4', '0.08')}, transparent 40%);"></div>

					<!-- Content -->
					<div class="relative z-30 h-full flex flex-col">
						<!-- Floating 3D Icon Container -->
						<div class="mb-8 relative w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" style="background: linear-gradient(135deg, {principle.color}22, transparent); border: 1px solid {principle.color}44;">
							<!-- Inner glow matching brand color -->
							<div class="absolute inset-0 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" style="background: {principle.color}44;"></div>
							<svelte:component this={principle.icon} size={28} style="color: {principle.color};" class="relative z-10 drop-shadow-md" />
						</div>

						<h3 class="mb-3 text-2xl font-bold text-fg font-display tracking-tight transition-colors group-hover:text-white">
							{principle.title}
						</h3>
						
						<p class="text-base leading-relaxed text-fg/60 transition-colors group-hover:text-fg/80">
							{principle.desc}
						</p>

						<!-- Subtle decorative line that expands on hover -->
						<div class="mt-auto pt-8">
							<div class="h-[2px] w-8 rounded-full bg-line transition-all duration-500 group-hover:w-full" style="background: {principle.color}88;"></div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.transform-style-3d {
		transform-style: preserve-3d;
		perspective: 1000px;
	}

	/* Initialize CSS variables to center before mouse interacts */
	.spotlight-card {
		--mouse-x: 50%;
		--mouse-y: 50%;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
	}
</style>