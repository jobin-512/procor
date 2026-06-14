<!-- FloatingOrb — Reusable floating gradient orb with parallax -->
<script>
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { cn } from '$lib/utils';

	let {
		color = 'rgba(117, 194, 246, 0.3)',
		size = '30rem',
		blur = '180px',
		speed = 20,
		parallax = true,
		className = ''
	} = $props();

	let orb = $state(null);
	let animId = 0;

	onMount(() => {
		if (!orb || !parallax) return;

		const onMove = (e) => {
			const rect = orb.getBoundingClientRect();
			const centerX = rect.left + rect.width / 2;
			const centerY = rect.top + rect.height / 2;
			const dx = e.clientX - centerX;
			const dy = e.clientY - centerY;
			const dist = Math.sqrt(dx * dx + dy * dy);
			const maxDist = 400;
			const strength = Math.min(dist / maxDist, 1) * 15;

			gsap.to(orb, {
				x: (dx / (dist || 1)) * strength,
				y: (dy / (dist || 1)) * strength,
				duration: 1.2,
				ease: 'power2.out'
			});
		};

		window.addEventListener('mousemove', onMove);

		onDestroy(() => {
			window.removeEventListener('mousemove', onMove);
			cancelAnimationFrame(animId);
		});
	});
</script>

<div
	bind:this={orb}
	class={cn('absolute rounded-full will-change-transform animate-float-orb', className)}
	style="width: {size}; height: {size}; background: radial-gradient(circle, {color}, transparent 70%); filter: blur({blur}); animation-duration: {speed}s;"
></div>
