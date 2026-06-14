<!-- TiltCard — 3D perspective tilt wrapper with glare effect -->
<script>
	import { gsap } from 'gsap';

	let {
		tiltAmount = 12,
		glareEnabled = true,
		glareOpacity = 0.15,
		className = '',
		children
	} = $props();

	let card = $state(null);
	let glareEl = $state(null);
	let isHovering = $state(false);

	function onMouseMove(e) {
		if (!card) return;
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const rotateX = ((y - centerY) / centerY) * -tiltAmount;
		const rotateY = ((x - centerX) / centerX) * tiltAmount;

		gsap.to(card, {
			rotateX,
			rotateY,
			duration: 0.4,
			ease: 'power2.out',
			transformPerspective: 1000
		});

		if (glareEl && glareEnabled) {
			const glareX = (x / rect.width) * 100;
			const glareY = (y / rect.height) * 100;
			glareEl.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,${glareOpacity}), transparent 60%)`;
		}
	}

	function onMouseEnter() {
		isHovering = true;
	}

	function onMouseLeave() {
		isHovering = false;
		if (!card) return;

		gsap.to(card, {
			rotateX: 0,
			rotateY: 0,
			duration: 0.7,
			ease: 'elastic.out(1, 0.4)',
			transformPerspective: 1000
		});

		if (glareEl && glareEnabled) {
			glareEl.style.background = 'transparent';
		}
	}
</script>

<div
	bind:this={card}
	class="tilt-card relative {className}"
	style="transform-style: preserve-3d; transform: perspective(1000px) rotateX(0deg) rotateY(0deg);"
	role="presentation"
	onmousemove={onMouseMove}
	onmouseenter={onMouseEnter}
	onmouseleave={onMouseLeave}
>
	{@render children()}

	{#if glareEnabled}
		<div
			bind:this={glareEl}
			class="absolute inset-0 z-50 pointer-events-none rounded-[inherit]"
			style="opacity: {isHovering ? 1 : 0}; transition: opacity 0.3s;"
		></div>
	{/if}
</div>
