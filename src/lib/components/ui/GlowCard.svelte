<!-- GlowCard — Card with cursor-following animated border glow + ambient pulse -->
<script>
	import { cn } from '$lib/utils';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	let {
		glowColor = 'rgba(117, 194, 246, 0.5)',
		glowSize = 200,
		className = '',
		children
	} = $props();

	let card = $state(null);
	let isHovering = $state(false);
	let pulseOpacity = $state(0);

	// Ambient pulse animation
	let pulseAnimId = 0;
	onMount(() => {
		function pulse() {
			pulseOpacity = 0.15 + Math.sin(Date.now() / 1000) * 0.1;
			pulseAnimId = requestAnimationFrame(pulse);
		}
		pulse();
	});
	onDestroy(() => {
		if (browser) cancelAnimationFrame(pulseAnimId);
	});

	function onMouseMove(e) {
		if (!card) return;
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		card.style.setProperty('--glow-x', `${x}px`);
		card.style.setProperty('--glow-y', `${y}px`);
	}

	function onMouseEnter() {
		isHovering = true;
	}

	function onMouseLeave() {
		isHovering = false;
		if (card) {
			card.style.setProperty('--glow-x', '-1000px');
			card.style.setProperty('--glow-y', '-1000px');
		}
	}
</script>

<div
	bind:this={card}
	class={cn(
		'glow-card group relative overflow-hidden rounded-2xl border p-6 text-white',
		'transition-all duration-300',
		'backdrop-blur-xl',
		'bg-white/10 border-white/20',
		isHovering && 'bg-white/15 border-white/30 shadow-xl',
		isHovering && 'shadow-glow-sky',
		className
	)}
	style="--glow-x: -1000px; --glow-y: -1000px; --glow-color: {glowColor}; --glow-size: {glowSize}px; --pulse-opacity: {pulseOpacity};"
	onmousemove={onMouseMove}
	onmouseenter={onMouseEnter}
	onmouseleave={onMouseLeave}
>
	<!-- Ambient pulse glow - subtle alive feel -->
	<div
		class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700"
		style="background: radial-gradient(circle var(--glow-size) at 50% 50%, var(--glow-color), transparent 100%); opacity: var(--pulse-opacity); mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); mask-composite: exclude; -webkit-mask-composite: xor; padding: 1px;"
	></div>

	<!-- Cursor-following glow layer -->
	<div
		class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 [mask-image:radial-gradient(circle_var(--glow-size)_at_var(--glow-x)_var(--glow-y),black_0%,transparent_100%)] group-hover:opacity-100"
		style="background: radial-gradient(circle var(--glow-size) at var(--glow-x) var(--glow-y), var(--glow-color), transparent 100%)"
	></div>

	<!-- Border glow - stronger -->
	<div
		class="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		style="background: radial-gradient(circle var(--glow-size) at var(--glow-x) var(--glow-y), var(--glow-color), transparent 100%); mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); mask-composite: exclude; -webkit-mask-composite: xor; padding: 1px;"
	></div>

	<!-- Content -->
	<div class="relative z-10">
		{@render children()}
	</div>
</div>
