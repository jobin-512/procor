<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import Lenis from 'lenis';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
	let isMenuOpen = $state(false);

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const lenis = new Lenis({
			duration: 1.5,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: 'vertical',
			gestureOrientation: 'vertical',
			smoothWheel: true,
			wheelMultiplier: 1.1,
			smoothTouch: false,
			touchMultiplier: 2,
			infinite: false
		});

		// Synchronize Lenis with GSAP ScrollTrigger
		lenis.on('scroll', ScrollTrigger.update);

		// Drive Lenis from GSAP ticker (single raf loop — no duplicate)
		const lenisRaf = (time) => {
			lenis.raf(time * 1000);
		};
		gsap.ticker.add(lenisRaf);
		gsap.ticker.lagSmoothing(0);

		// Ensure ScrollTrigger recalculates after Lenis is ready
		requestAnimationFrame(() => {
			ScrollTrigger.refresh();
		});

		// Global reveal animations using fromTo for reliable opacity
		const revealElements = document.querySelectorAll('[data-reveal]');
		revealElements.forEach((el) => {
			gsap.fromTo(
				el,
				{ y: 30, opacity: 0 },
				{
					scrollTrigger: {
						trigger: el,
						start: 'top 85%',
						toggleActions: 'play none none reverse'
					},
					y: 0,
					opacity: 1,
					duration: 1,
					ease: 'power3.out'
				}
			);
		});

		return () => {
			lenis.destroy();
			gsap.ticker.remove(lenisRaf);
		};
	});
</script>

<svelte:head>
	<title>PROCOR HRMS - The Future of Workforce Management</title>
	<meta
		name="description"
		content="Empowering Human Resources for Organisational Growth through intelligent automation."
	/>
</svelte:head>

<div class="antialiased">
	<Header bind:isMenuOpen />
	{@render children()}
	<Footer />
</div>

<style>
	:global(html) {
		scroll-behavior: initial;
		background-color: var(--color-procor-light);
	}

	:global(.lenis.lenis-smooth) {
		scroll-behavior: auto !important;
	}

	:global(.lenis.lenis-smooth [data-lenis-prevent]) {
		overscroll-behavior: contain;
	}

	:global(.lenis.lenis-stopped) {
		overflow: hidden;
	}

	:global(.lenis.lenis-scrolling iframe) {
		pointer-events: none;
	}
</style>
