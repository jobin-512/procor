<!-- FlipCard — 3D flip card with front/back faces -->
<script>
	import { cn } from '$lib/utils';

	let { flipOn = 'hover', direction = 'horizontal', className = '', front, back } = $props();

	let inner = $state(null);
	let isFlipped = $state(false);
	let glareEl = $state(null);

	function flip() {
		if (flipOn === 'click') {
			isFlipped = !isFlipped;
		}
	}

	function onMouseMove(e) {
		if (!inner || isFlipped) return;
		const rect = inner.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const tiltX = ((y - centerY) / centerY) * -8;
		const tiltY = ((x - centerX) / centerX) * 8;

		const axis = direction === 'vertical' ? `rotateX(${tiltX}deg)` : `rotateY(${tiltY}deg)`;
		inner.style.transform = `perspective(1000px) ${axis}`;

		if (glareEl) {
			const glareX = (x / rect.width) * 100;
			const glareY = (y / rect.height) * 100;
			glareEl.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15), transparent 60%)`;
			glareEl.style.opacity = '1';
		}
	}

	function onMouseLeave() {
		if (!inner) return;
		if (flipOn === 'click') {
			const rotateY = direction === 'horizontal' ? (isFlipped ? 180 : 0) : 0;
			const rotateX = direction === 'vertical' ? (isFlipped ? 180 : 0) : 0;
			inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
		}
		if (glareEl) {
			glareEl.style.background = 'transparent';
			glareEl.style.opacity = '0';
		}
	}
</script>

<div
	class={cn(
		'flip-card relative cursor-pointer [perspective:1000px]',
		flipOn === 'hover' && 'group',
		className
	)}
	onclick={flip}
	onmousemove={flipOn === 'hover' ? onMouseMove : undefined}
	onmouseleave={flipOn === 'hover' ? onMouseLeave : undefined}
	onkeydown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			flip();
		}
	}}
	role={flipOn === 'click' ? 'button' : 'presentation'}
	tabindex={flipOn === 'click' ? 0 : undefined}
>
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		bind:this={inner}
		class="flip-card-inner relative h-full w-full transition-transform duration-700 ease-[var(--ease-out-expo)]"
		style="transform-style: preserve-3d;"
	>
		<!-- Front -->
		<div
			class="absolute inset-0 [backface-visibility:hidden]"
			style={direction === 'vertical' ? 'transform: rotateX(0deg)' : 'transform: rotateY(0deg)'}
		>
			{@render front?.()}
		</div>

		<!-- Back -->
		<div
			class="absolute inset-0 [backface-visibility:hidden]"
			style={direction === 'vertical' ? 'transform: rotateX(180deg)' : 'transform: rotateY(180deg)'}
		>
			{@render back?.()}
		</div>
	</div>

	<!-- Glare overlay -->
	<div
		bind:this={glareEl}
		class="pointer-events-none absolute inset-0 z-50 rounded-[inherit] opacity-0 transition-opacity duration-300"
	></div>
</div>

<style>
	/* Hover mode: CSS-driven flip */
	.flip-card.group:hover .flip-card-inner {
		transform: perspective(1000px) rotateY(180deg);
	}
	/* Vertical direction override */
	.flip-card.group[data-direction='vertical']:hover .flip-card-inner {
		transform: perspective(1000px) rotateX(180deg);
	}
</style>
