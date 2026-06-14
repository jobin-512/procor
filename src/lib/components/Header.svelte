<!-- Header — glassmorphism, magnetic effects, 3D logo -->
<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { Menu, X, ArrowRight } from '@lucide/svelte';
	import logo from '$lib/assets/image.webp';

	let { isMenuOpen = $bindable() } = $props();
	let isScrolled = $state(false);
	let scrollProgress = $state(0);
	let activeLinkIdx = $state(-1);
	let indicatorStyle = $state('opacity: 0; width: 0;');

	let navEl = $state(null);
	let linksContainer = $state(null);
	let logoInner = $state(null);

	const navLinks = ['Features', 'Solutions', 'Integrations', 'Pricing'];

	onMount(() => {
		// ── Scroll tracking ──
		const onScroll = () => {
			isScrolled = window.scrollY > 50;
			scrollProgress = Math.min(window.scrollY / 200, 1);
		};
		window.addEventListener('scroll', onScroll, { passive: true });

		// ── Entrance animation ──
		gsap.from('.nav-container', {
			y: -100,
			opacity: 0,
			duration: 1.2,
			ease: 'expo.out',
			delay: 0.2
		});

		// ── Magnetic nav links ──
		const setupMagnetic = (el, strength, target) => {
			el.addEventListener('mousemove', (e) => {
				const rect = el.getBoundingClientRect();
				const x = e.clientX - rect.left - rect.width / 2;
				const y = e.clientY - rect.top - rect.height / 2;
				gsap.to(target || el, {
					x: x * strength,
					y: y * strength,
					duration: 0.4,
					ease: 'power2.out'
				});
			});
			el.addEventListener('mouseleave', () => {
				gsap.to(target || el, {
					x: 0,
					y: 0,
					duration: 0.7,
					ease: 'elastic.out(1, 0.3)'
				});
			});
		};

		// Nav link magnetic text
		document.querySelectorAll('.nav-link').forEach((link) => {
			const text = link.querySelector('.link-text');
			const dot = link.querySelector('.link-dot');
			setupMagnetic(link, 0.3, text);
			link.addEventListener('mousemove', (e) => {
				const rect = link.getBoundingClientRect();
				const x = e.clientX - rect.left - rect.width / 2;
				const y = e.clientY - rect.top - rect.height / 2;
				gsap.to(dot, {
					x: x * 0.5,
					y: y * 0.5,
					opacity: 1,
					scale: 1,
					duration: 0.4,
					ease: 'power2.out'
				});
			});
			link.addEventListener('mouseleave', () => {
				gsap.to(dot, { x: 0, y: 0, opacity: 0, scale: 0, duration: 0.6, ease: 'power2.in' });
			});
		});

		// CTA button magnetic + glow
		const ctaBtn = document.querySelector('.cta-nav-button');
		if (ctaBtn) {
			setupMagnetic(ctaBtn, 0.15, ctaBtn);
			ctaBtn.addEventListener('mousemove', (e) => {
				const rect = ctaBtn.getBoundingClientRect();
				ctaBtn.style.setProperty('--gx', `${e.clientX - rect.left}px`);
				ctaBtn.style.setProperty('--gy', `${e.clientY - rect.top}px`);
			});
		}

		// Logo 3D mouse tracking
		const logoEl = document.querySelector('.logo-wrapper');
		if (logoEl && logoInner) {
			logoEl.addEventListener('mousemove', (e) => {
				const rect = logoEl.getBoundingClientRect();
				const x = (e.clientX - rect.left) / rect.width - 0.5;
				const y = (e.clientY - rect.top) / rect.height - 0.5;
				gsap.to(logoInner, {
					rotateY: x * 25,
					rotateX: -y * 25,
					duration: 0.4,
					ease: 'power2.out',
					transformPerspective: 600
				});
				// Shift glow
				const glow = logoEl.querySelector('.logo-glow');
				if (glow) {
					gsap.to(glow, {
						x: x * 15,
						y: y * 15,
						opacity: 0.6,
						duration: 0.4,
						ease: 'power2.out'
					});
				}
			});
			logoEl.addEventListener('mouseleave', () => {
				gsap.to(logoInner, {
					rotateY: 0,
					rotateX: 0,
					duration: 0.8,
					ease: 'elastic.out(1, 0.4)',
					transformPerspective: 600
				});
				const glow = logoEl.querySelector('.logo-glow');
				if (glow) {
					gsap.to(glow, { x: 0, y: 0, opacity: 0.3, duration: 0.6, ease: 'power2.out' });
				}
			});
		}

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});

	// ── Active link indicator ──
	function updateIndicator(idx, e) {
		activeLinkIdx = idx;
		if (!linksContainer) return;
		const containerRect = linksContainer.getBoundingClientRect();
		const linkRect = e.currentTarget.getBoundingClientRect();
		const left = linkRect.left - containerRect.left;
		const width = linkRect.width;
		indicatorStyle = `opacity: 1; width: ${width}px; left: ${left}px;`;
	}

	function hideIndicator() {
		activeLinkIdx = -1;
		indicatorStyle = 'opacity: 0; width: 0;';
	}

	// ── Mobile menu toggle ──
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	// ── Mobile menu magnetic close ──
	onMount(() => {
		const closeBtn = document.querySelector('.mobile-close-btn');
		if (closeBtn) {
			closeBtn.addEventListener('mousemove', (e) => {
				const rect = closeBtn.getBoundingClientRect();
				const x = e.clientX - rect.left - rect.width / 2;
				const y = e.clientY - rect.top - rect.height / 2;
				gsap.to(closeBtn, { x: x * 0.2, y: y * 0.2, duration: 0.3, ease: 'power2.out' });
			});
			closeBtn.addEventListener('mouseleave', () => {
				gsap.to(closeBtn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
			});
		}
	});
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<nav
	bind:this={navEl}
	class="fixed w-full z-50 px-6 md:px-12 transition-all duration-500
		{isScrolled ? 'py-3 nav-glass' : 'py-5 bg-transparent'}"
	style="--scroll-progress: {scrollProgress};"
>
	<!-- Noise texture overlay (scrolled only) -->
	{#if isScrolled}
		<div class="absolute inset-0 nav-noise pointer-events-none z-0"></div>
	{/if}

	<!-- Gradient border (scrolled only) -->
	{#if isScrolled}
		<div
			class="absolute inset-x-0 bottom-0 h-[1px] nav-gradient-border pointer-events-none z-0"
		></div>
	{/if}

	<div class="max-w-7xl mx-auto flex justify-between items-center nav-container relative z-10">
		<!-- Logo — 3D mouse tracking -->
		<a href="/" class="logo-wrapper flex items-center gap-4 group cursor-pointer perspective-1000">
			<div
				class="relative w-12 h-12 flex items-center justify-center"
				style="transform-style: preserve-3d;"
			>
				<!-- Glow layer (shifts with 3D tilt) -->
				<div
					class="logo-glow absolute inset-[-8px] bg-procor-blue/20 rounded-2xl blur-xl opacity-30 transition-opacity duration-500 group-hover:opacity-60"
				></div>
				<!-- Logo image -->
				<div
					bind:this={logoInner}
					class="relative z-10 transition-transform duration-200"
					style="transform-style: preserve-3d; transform: perspective(600px) rotateX(0deg) rotateY(0deg);"
				>
					<img src={logo} alt="PROCOR HRMS" class="h-10 w-auto relative z-10" />
					<!-- Subtle shadow underneath -->
					<div
						class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/10 rounded-full blur-sm"
					></div>
				</div>
			</div>
			<div class="hidden sm:flex flex-col">
				<span
					class="text-2xl font-black tracking-tighter text-procor-navy font-display leading-none uppercase group-hover:text-procor-blue transition-colors duration-500"
					>PROCOR</span
				>
				<div class="flex items-center gap-1 mt-1 overflow-hidden">
					<span
						class="text-[9px] font-black tracking-[0.4em] text-procor-blue uppercase leading-none"
						>HRMS</span
					>
					<div
						class="h-[1px] w-0 group-hover:w-full bg-procor-sky transition-all duration-700"
					></div>
				</div>
			</div>
		</a>

		<!-- Desktop Nav -->
		<div class="hidden md:flex gap-2 items-center" bind:this={linksContainer}>
			<!-- Sliding indicator pill -->
			<div
				class="absolute h-9 bg-procor-blue/[0.06] rounded-full transition-all duration-300 ease-out pointer-events-none z-0"
				style={indicatorStyle}
			></div>

			{#each navLinks as link, i}
				<a
					href="#{link.toLowerCase()}"
					class="nav-link relative px-6 py-2 group cursor-pointer z-10"
					onmouseenter={(e) => updateIndicator(i, e)}
					onmouseleave={hideIndicator}
				>
					<span
						class="link-text relative z-10 text-sm font-bold text-slate-600 group-hover:text-procor-navy transition-colors block"
						>{link}</span
					>
					<span
						class="link-dot absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-procor-blue/5 rounded-full opacity-0 scale-0 -z-10 pointer-events-none"
					></span>
				</a>
			{/each}

			<!-- CTA Button — magnetic + glow tracking -->
			<button
				class="cta-nav-button relative ml-6 overflow-hidden bg-procor-navy text-white px-8 py-3.5 rounded-2xl font-black text-sm transition-all duration-500 hover:scale-105 active:scale-95 group shadow-[0_0_0_0_rgba(29,93,155,0)] hover:shadow-[0_0_30px_rgba(29,93,155,0.4)]"
			>
				<span class="relative z-10 flex items-center gap-2"
					>Start Free Trial <ArrowRight
						size={16}
						class="group-hover:translate-x-1 transition-transform"
					/></span
				>
				<!-- Shimmer overlay -->
				<div
					class="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"
				></div>
				<!-- Radial glow (cursor tracking) -->
				<div
					class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
					style="background: radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), rgba(117,194,246,0.35), transparent 70%);"
				></div>
			</button>
		</div>

		<!-- Mobile Toggle — magnetic -->
		<button
			class="md:hidden mobile-toggle-btn relative w-12 h-12 flex items-center justify-center rounded-2xl bg-procor-light hover:bg-procor-blue/10 transition-colors group overflow-hidden"
			onclick={toggleMenu}
			aria-label="Toggle menu"
		>
			<div
				class="absolute inset-0 bg-procor-blue scale-0 group-active:scale-150 transition-transform duration-500 rounded-full opacity-10"
			></div>
			{#if isMenuOpen}
				<X
					size={24}
					class="text-procor-navy transition-transform duration-500 rotate-90 relative z-10"
				/>
			{:else}
				<Menu
					size={24}
					class="text-procor-navy transition-transform duration-500 group-hover:scale-110 relative z-10"
				/>
			{/if}
		</button>
	</div>
</nav>

<!-- Mobile Menu — dark glassmorphism -->
{#if isMenuOpen}
	<div
		class="fixed inset-0 z-[60] flex flex-col items-center justify-center md:hidden overflow-hidden mobile-menu-backdrop"
	>
		<!-- Ambient orbs -->
		<div
			class="absolute top-[-10%] right-[-10%] w-[80%] h-[80%] bg-procor-blue/20 rounded-full blur-[120px] animate-pulse pointer-events-none"
		></div>
		<div
			class="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-procor-sky/10 rounded-full blur-[100px] pointer-events-none"
		></div>

		<!-- Close button — magnetic -->
		<button
			onclick={() => (isMenuOpen = false)}
			class="mobile-close-btn absolute top-6 right-6 w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white/20 transition-all z-20"
			aria-label="Close menu"
		>
			<X size={32} />
		</button>

		<!-- Nav links -->
		<div class="flex flex-col items-center gap-12 relative z-10">
			{#each navLinks as link, i}
				<a
					href="#{link.toLowerCase()}"
					class="mobile-menu-item text-5xl font-black text-white hover:text-procor-sky transition-all duration-300 transform cursor-pointer"
					onclick={() => (isMenuOpen = false)}
				>
					<span class="text-procor-sky/30 mr-4 font-display italic text-3xl">0{i + 1}</span>{link}
				</a>
			{/each}
			<button
				class="mobile-menu-item bg-white text-procor-navy px-8 py-5 rounded-3xl text-2xl font-black mt-8 shadow-2xl hover:scale-105 transition-transform cursor-pointer"
				onclick={() => (isMenuOpen = false)}
			>
				Get Started
			</button>
		</div>

		<!-- Footer links -->
		<div
			class="absolute bottom-12 left-0 w-full flex justify-center gap-8 text-white/40 text-xs font-black uppercase tracking-[0.3em]"
		>
			<span>Privacy</span><span>Terms</span><span>Support</span>
		</div>
	</div>
{/if}

<style>
	/* ── Glassmorphism (scrolled state) ── */
	.nav-glass {
		background: linear-gradient(
			135deg,
			rgba(255, 255, 255, 0.88) 0%,
			rgba(244, 249, 255, 0.78) 50%,
			rgba(255, 255, 255, 0.85) 100%
		);
		backdrop-filter: blur(24px) saturate(180%);
		-webkit-backdrop-filter: blur(24px) saturate(180%);
		box-shadow:
			0 8px 32px rgba(0, 45, 91, 0.06),
			0 1px 0 rgba(255, 255, 255, 0.5) inset;
	}

	/* ── Noise texture overlay ── */
	.nav-noise {
		background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
		opacity: 0.025;
		mix-blend-mode: overlay;
	}

	/* ── Gradient border (bottom) ── */
	.nav-gradient-border {
		height: 1px;
		background: linear-gradient(
			90deg,
			transparent 0%,
			rgba(29, 93, 155, 0.12) 20%,
			rgba(117, 194, 246, 0.25) 50%,
			rgba(29, 93, 155, 0.12) 80%,
			transparent 100%
		);
	}

	/* ── Mobile menu dark glass ── */
	.mobile-menu-backdrop {
		background: linear-gradient(160deg, rgba(0, 45, 91, 0.97) 0%, rgba(3, 4, 8, 0.98) 100%);
		backdrop-filter: blur(30px);
		-webkit-backdrop-filter: blur(30px);
	}
</style>
