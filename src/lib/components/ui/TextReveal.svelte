<!-- TextReveal — Scroll-triggered word-by-word or character-by-character text animation -->
<script>
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { cn } from '$lib/utils';

	let {
		text = '',
		as = 'h2',
		mode = 'words',
		animation = 'fade-up',
		stagger = 50,
		trigger = 'scroll',
		className = ''
	} = $props();

	let el = $state(null);
	let scrollTriggerInstance = $state(null);

	onMount(() => {
		if (!el || !text) return;

		const items = mode === 'words' ? text.split(' ') : text.split('');
		el.innerHTML = '';

		const baseStyle = 'display:inline-block;';

		const animStyles = {
			'fade-up': { opacity: 0, y: 20 },
			blur: { opacity: 0, filter: 'blur(8px)' },
			slide: { opacity: 0, x: -20 }
		};

		const toStyle = {
			'fade-up': { opacity: 1, y: 0 },
			blur: { opacity: 1, filter: 'blur(0px)' },
			slide: { opacity: 1, x: 0 }
		};

		const spans = items.map((item, i) => {
			const span = document.createElement('span');
			span.style.cssText = baseStyle + 'opacity: 0;';
			span.textContent = mode === 'words' ? `${item}\u00A0` : item;
			span.dataset.revealIdx = String(i);
			el.appendChild(span);
			return span;
		});

		const from = animStyles[animation] || animStyles['fade-up'];
		const to = toStyle[animation] || toStyle['fade-up'];

		if (trigger === 'immediate') {
			gsap.set(spans, from);
			gsap.to(spans, {
				...to,
				duration: 0.6,
				stagger: stagger / 1000,
				ease: 'power3.out'
			});
		} else if (trigger === 'view') {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							gsap.set(spans, from);
							gsap.to(spans, {
								...to,
								duration: 0.6,
								stagger: stagger / 1000,
								ease: 'power3.out'
							});
							observer.disconnect();
						}
					});
				},
				{ threshold: 0.2 }
			);
			observer.observe(el);

			onDestroy(() => observer.disconnect());
		} else {
			gsap.registerPlugin(ScrollTrigger);
			gsap.set(spans, from);
			scrollTriggerInstance = ScrollTrigger.create({
				trigger: el,
				start: 'top 85%',
				onEnter: () => {
					gsap.to(spans, {
						...to,
						duration: 0.6,
						stagger: stagger / 1000,
						ease: 'power3.out'
					});
				}
			});
		}
	});

	onDestroy(() => {
		scrollTriggerInstance?.kill();
	});
</script>

{#if as === 'h1'}
	<h1 bind:this={el} class={cn(className)}></h1>
{:else if as === 'h2'}
	<h2 bind:this={el} class={cn(className)}></h2>
{:else if as === 'h3'}
	<h3 bind:this={el} class={cn(className)}></h3>
{:else if as === 'p'}
	<p bind:this={el} class={cn(className)}></p>
{:else}
	<div bind:this={el} class={cn(className)}></div>
{/if}
