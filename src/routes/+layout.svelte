<script>
	import '../app.css';
	import { onMount, tick } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import Lenis from 'lenis';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
	let isMenuOpen = $state(false);

	afterNavigate(() => {
		const lenis = window.__lenis;
		if (lenis) {
			lenis.scrollTo(0, { immediate: true });
		} else {
			window.scrollTo(0, 0);
		}
	});

	onMount(async () => {
		gsap.registerPlugin(ScrollTrigger);

		const lenis = new Lenis({
			duration: 1.4,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: 'vertical',
			gestureOrientation: 'vertical',
			smoothWheel: true,
			wheelMultiplier: 1.1,
			smoothTouch: false,
			touchMultiplier: 2,
			infinite: false
		});

		window.__lenis = lenis;

		lenis.on('scroll', ScrollTrigger.update);

		const lenisRaf = (time) => {
			lenis.raf(time * 1000);
		};
		gsap.ticker.add(lenisRaf);
		gsap.ticker.lagSmoothing(0);

		requestAnimationFrame(() => {
			ScrollTrigger.refresh();
		});

		await tick();

		// Reveal animations
		const revealElements = document.querySelectorAll('[data-reveal]');
		revealElements.forEach((el) => {
			gsap.fromTo(
				el,
				{ y: 40, opacity: 0 },
				{
					scrollTrigger: {
						trigger: el,
						start: 'top 85%',
						toggleActions: 'play none none reverse'
					},
					y: 0,
					opacity: 1,
					duration: 0.8,
					ease: 'power3.out'
				}
			);
		});

		requestAnimationFrame(() => {
			ScrollTrigger.refresh();
		});

		return () => {
			lenis.destroy();
			gsap.ticker.remove(lenisRaf);
		};
	});
</script>

<svelte:head>
	<title>PROCOR HRMS - The Future of Workforce Management</title>
	<meta name="description" content="Empowering Human Resources for Organisational Growth through intelligent automation and modern design." />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Outfit:wght@600;700;800;900&display=swap" rel="stylesheet">
</svelte:head>

<div class="antialiased bg-[#080c15]">
	<Header bind:isMenuOpen />
	{@render children()}
	<Footer />
</div>

<style>
	:global(html) {
		scroll-behavior: initial;
		background-color: #080c15;
	}

	:global(body) {
		background-color: #080c15;
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
