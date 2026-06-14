import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
}

/**
 * Animate header elements on scroll (fade up + stagger).
 * Uses gsap.fromTo() for reliable opacity without flash-of-invisible-content.
 */
export function animateHeader(selector, options = {}) {
	const {
		trigger,
		start = 'top 85%',
		y = 40,
		duration = 1,
		stagger = 0.2,
		ease = 'power3.out'
	} = options;

	return gsap.fromTo(
		`${selector} > *`,
		{ y, opacity: 0 },
		{
			scrollTrigger: {
				trigger: trigger || selector,
				start,
				toggleActions: 'play none none reverse'
			},
			y: 0,
			opacity: 1,
			duration,
			stagger,
			ease
		}
	);
}

/**
 * Animate cards/elements with stagger on scroll.
 * Uses gsap.fromTo() for reliable opacity without flash-of-invisible-content.
 */
export function animateCards(selector, options = {}) {
	const {
		trigger,
		start = 'top 85%',
		y = 60,
		duration = 1,
		stagger = 0.15,
		ease = 'expo.out',
		delay = 0
	} = options;

	return gsap.fromTo(
		selector,
		{ y, opacity: 0 },
		{
			scrollTrigger: {
				trigger: trigger || selector,
				start,
				toggleActions: 'play none none reverse'
			},
			y: 0,
			opacity: 1,
			duration,
			stagger,
			ease,
			delay
		}
	);
}

/**
 * Create a GSAP context with ScrollTrigger cleanup.
 * @param {Function} fn - Callback to run inside gsap.context
 * @param {Element} scope - DOM element scope
 * @returns {Function} Cleanup function
 */
export function createScrollContext(fn, scope) {
	const ctx = gsap.context(() => {
		fn();
	}, scope);

	return () => ctx.revert();
}
