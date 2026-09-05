<script>
	import Brain from '@lucide/svelte/icons/brain';
	import Zap from '@lucide/svelte/icons/zap';
	import ShieldCheck from '@lucide/svelte/icons/shield-check';
	import Globe from '@lucide/svelte/icons/globe';
	import BarChart3 from '@lucide/svelte/icons/bar-chart-3';
	import Users from '@lucide/svelte/icons/users';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Sparkles from '@lucide/svelte/icons/sparkles';

	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';

	const features = [
		{
			icon: Brain,
			title: 'AI-Powered Matching',
			desc: 'Neural algorithms connect the right talent to the right roles automatically, so recruiting moves faster with less manual screening.',
			color: 'rgba(37, 59, 218, 1)',
			glow: 'rgba(37, 59, 218, 0.45)',
			stat: 'Smarter Hiring',
			statLabel: 'Talent'
		},
		{
			icon: Zap,
			title: 'Workflow Automation',
			desc: 'Build complex HR workflows in minutes with our visual drag-and-drop builder. No coding required.',
			color: 'rgba(245, 158, 11, 1)',
			glow: 'rgba(245, 158, 11, 0.45)',
			stat: 'Less Busywork',
			statLabel: 'Productivity'
		},
		{
			icon: ShieldCheck,
			title: 'Bank-Grade Security',
			desc: 'Protected with end-to-end encryption and a zero-trust architecture.',
			color: 'rgba(16, 185, 129, 1)',
			glow: 'rgba(16, 185, 129, 0.45)',
			stat: 'Encrypted',
			statLabel: 'Security'
		},
		{
			icon: Globe,
			title: 'Global Compliance',
			desc: 'Auto-updating labor laws across many jurisdictions. Never worry about keeping up with every penalty again.',
			color: 'rgba(56, 189, 248, 1)',
			glow: 'rgba(56, 189, 248, 0.45)',
			stat: 'Worldwide',
			statLabel: 'Coverage'
		},
		{
			icon: BarChart3,
			title: 'Predictive Analytics',
			desc: 'Attrition forecasting, sentiment analysis, and headcount planning powered by machine learning.',
			color: 'rgba(14, 165, 233, 1)',
			glow: 'rgba(14, 165, 233, 0.45)',
			stat: 'Foresight',
			statLabel: 'Insight'
		},
		{
			icon: Users,
			title: 'Employee Experience',
			desc: 'Self-service portal with mobile app, AI chatbot, and personalized dashboards for every employee.',
			color: 'rgba(6, 182, 212, 1)',
			glow: 'rgba(6, 182, 212, 0.45)',
			stat: 'Loved by Staff',
			statLabel: 'Experience'
		}
	];

	let sectionRef = $state();
	let headerRef = $state();
	let cardsGridRef = $state();
	let cardRefs = $state([]);
	let ctaRef = $state();

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		cardRefs = [...cardsGridRef.querySelectorAll('.feature-card')];

		// --- 1. Scroll entrance ---
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef,
				start: 'top 75%',
				once: true
			}
		});

		tl.fromTo(
			headerRef.children,
			{ y: 50, opacity: 0, filter: 'blur(8px)' },
			{ y: 0, opacity: 1, filter: 'blur(0px)', duration: 1, stagger: 0.12, ease: 'power4.out', immediateRender: false }
		);

		tl.fromTo(
			cardRefs,
			{ y: 80, opacity: 0, rotateX: 12, scale: 0.92 },
			{
				y: 0,
				opacity: 1,
				rotateX: 0,
				scale: 1,
				duration: 0.9,
				stagger: { each: 0.1, from: 'start' },
				ease: 'power3.out',
				immediateRender: false
			},
			'-=0.55'
		);

		tl.fromTo(
			ctaRef,
			{ y: 30, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', immediateRender: false },
			'-=0.4'
		);

		// --- 2. Mouse spotlight across the grid ---
		const handleMouseMove = (e) => {
			for (const card of cardRefs) {
				if (!card) continue;
				const rect = card.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;
				card.style.setProperty('--mouse-x', `${x}px`);
				card.style.setProperty('--mouse-y', `${y}px`);
			}
		};

		// --- 3. Magnetic tilt per card ---
		const cleanups = [];
		cardRefs.forEach((card) => {
			if (!card) return;

			const onMove = (e) => {
				const rect = card.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;
				const midX = rect.width / 2;
				const midY = rect.height / 2;
				const rotY = ((x - midX) / midX) * 6;
				const rotX = ((midY - y) / midY) * 6;

				gsap.to(card, {
					rotateX: rotX,
					rotateY: rotY,
					transformPerspective: 900,
					transformOrigin: 'center',
					duration: 0.4,
					ease: 'power2.out'
				});
			};

			const onLeave = () => {
				gsap.to(card, {
					rotateX: 0,
					rotateY: 0,
					duration: 0.6,
					ease: 'power3.out'
				});
			};

			card.addEventListener('mousemove', onMove);
			card.addEventListener('mouseleave', onLeave);
			cleanups.push(() => {
				card.removeEventListener('mousemove', onMove);
				card.removeEventListener('mouseleave', onLeave);
			});
		});

		if (cardsGridRef) {
			cardsGridRef.addEventListener('mousemove', handleMouseMove);
		}

		return () => {
			if (cardsGridRef) cardsGridRef.removeEventListener('mousemove', handleMouseMove);
			cleanups.forEach((fn) => fn());
			ScrollTrigger.getAll().forEach((t) => t.kill());
		};
	});
</script>

<section
	bind:this={sectionRef}
	class="noise-overlay relative overflow-hidden bg-bg px-6 py-24 md:px-12 md:py-32"
>
	<!-- Ambient background orbs -->
	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		<div
			class="absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full opacity-30 blur-[140px] mix-blend-screen dark:opacity-20"
			style="background: var(--color-procor-blue);"
		></div>
		<div
			class="absolute -right-32 bottom-1/4 h-[380px] w-[380px] rounded-full opacity-25 blur-[130px] mix-blend-screen dark:opacity-15"
			style="background: var(--color-procor-sky);"
		></div>

		<!-- Soft grid -->
		<div
			class="absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
			style="background-image: linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px); background-size: 64px 64px;"
		></div>
	</div>

	<div class="relative z-10 mx-auto max-w-7xl">
		<!-- Header -->
		<div bind:this={headerRef} class="mx-auto mb-20 max-w-3xl text-center">
			<div
				class="glass-effect mb-6 inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-sm font-semibold text-fg/80"
			>
				<span class="relative flex h-2 w-2">
					<span
						class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-procor-blue-light)] opacity-75"
					></span>
					<span
						class="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-procor-blue-light)]"
					></span>
				</span>
				<Sparkles size={15} class="text-[var(--color-procor-blue-light)]" />
				<span>Supercharged Capabilities</span>
			</div>

			<h2
				class="font-display text-4xl font-black leading-[1.05] tracking-tight text-fg sm:text-5xl md:text-6xl"
			>
				Everything you need.<br />
				<span class="text-gradient-brand relative inline-block">
					Nothing you don't.
					<svg
						class="absolute -bottom-1 left-0 w-full text-[var(--color-procor-blue)] opacity-40"
						viewBox="0 0 300 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2 7C60 3 180 -1 298 7"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
						/>
					</svg>
				</span>
			</h2>

			<p class="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-fg/60">
				Six powerful modules working in harmony — each built to solve real problems, not create new
				ones.
			</p>
		</div>

		<!-- Feature Cards Grid -->
		<div bind:this={cardsGridRef} class="group/grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each features as feature, i}
				<a
					href="/features"
					class="feature-card group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-line bg-surface-2 p-8 transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
					style="--accent: {feature.color}; --accent-glow: {feature.glow};"
				>
					<!-- Mouse-tracking border glow -->
					<div
						class="pointer-events-none absolute inset-0 rounded-[1.75rem] opacity-0 transition-opacity duration-300 group-hover/grid:opacity-100"
						style="background: radial-gradient(380px circle at var(--mouse-x) var(--mouse-y), var(--accent-glow), transparent 40%); z-index: 1;"
					></div>
					<div
						class="pointer-events-none absolute inset-[1px] z-10 rounded-[calc(1.75rem-1px)] bg-surface-2 transition-colors duration-300"
					></div>

					<!-- Soft inner spotlight -->
					<div
						class="pointer-events-none absolute inset-0 z-20 opacity-0 mix-blend-plus-lighter transition-opacity duration-300 group-hover/grid:opacity-100"
						style="background: radial-gradient(380px circle at var(--mouse-x) var(--mouse-y), color-mix(in srgb, var(--accent) 10%, transparent), transparent 40%);"
					></div>

					<!-- Card content -->
					<div class="relative z-30 flex h-full flex-col">
						<!-- Icon -->
						<div class="mb-7 flex items-start justify-between">
							<div
								class="relative flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
								style="background: linear-gradient(135deg, color-mix(in srgb, var(--accent) 18%, transparent), transparent); border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);"
							>
								<div
									class="absolute inset-0 rounded-2xl opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100"
									style="background: color-mix(in srgb, var(--accent) 35%, transparent);"
								></div>
								<svelte:component
									this={feature.icon}
									size={26}
									class="relative z-10"
									style="color: var(--accent);"
								/>
							</div>

							<!-- Hover arrow (top-right) -->
							<div
								class="flex h-10 w-10 translate-x-3 items-center justify-center rounded-full border border-line bg-surface-2 opacity-0 transition-all duration-400 group-hover:translate-x-0 group-hover:opacity-100"
							>
								<ArrowRight size={16} class="text-fg/70 transition group-hover:text-fg" />
							</div>
						</div>

						<h3
							class="font-display mb-3 text-xl font-bold tracking-tight text-fg transition-colors duration-300"
						>
							{feature.title}
						</h3>

						<p class="mb-8 flex-1 text-sm leading-relaxed text-fg/55 transition-colors group-hover:text-fg/75">
							{feature.desc}
						</p>

						<!-- Stat footer -->
						<div class="flex items-end justify-between border-t border-line pt-5">
							<div>
								<div
									class="text-lg font-black tracking-tight"
									style="background: linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 70%, white)); -webkit-background-clip: text; background-clip: text; color: transparent;"
								>
									{feature.stat}
								</div>
								<div class="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-fg/40">
									{feature.statLabel}
								</div>
							</div>

							<!-- Animated accent bar -->
							<div class="h-1 w-8 overflow-hidden rounded-full bg-line transition-all duration-500 group-hover:w-16">
								<div
									class="h-full w-full origin-left scale-x-0 rounded-full transition-transform duration-500 group-hover:scale-x-100"
									style="background: var(--accent);"
								></div>
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>

		<!-- CTA -->
		<div bind:this={ctaRef} class="mt-14 text-center">
			<a
				href="/features"
				class="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-line bg-surface-2 px-8 py-4 font-semibold text-fg transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_12px_40px_rgba(37,59,218,0.15)]"
			>
				<span
					class="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					style="background: radial-gradient(circle at center, color-mix(in srgb, var(--color-procor-blue) 12%, transparent), transparent 70%);"
				></span>
				<span>Explore All Features</span>
				<span
					class="flex h-8 w-8 items-center justify-center rounded-full bg-fg/5 transition-all duration-300 group-hover:bg-[var(--color-procor-blue)] group-hover:text-white"
				>
					<ArrowRight size={16} class="transition-transform duration-300 group-hover:translate-x-0.5" />
				</span>
			</a>
		</div>
	</div>
</section>

<style>
	.feature-card {
		--mouse-x: 50%;
		--mouse-y: 50%;
		transform-style: preserve-3d;
		perspective: 900px;
		will-change: transform;
	}

	/* Light-mode friendly soft shadow baseline */
	:global(html.light) .feature-card:hover {
		box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08);
	}
</style>