<!-- GlowCard — Card with cursor-following animated border glow -->
<script>
	import { cn } from '$lib/utils';

	let {
		glowColor = 'rgba(117, 194, 246, 0.4)',
		glowSize = 200,
		className = '',
		children
	} = $props();

	let card = $state(null);
	let isHovering = $state(false);

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
		'glow-card group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-slate-900/50 p-6',
		'transition-colors duration-300',
		isHovering && 'border-white/[0.12]',
		className
	)}
	style="--glow-x: -1000px; --glow-y: -1000px; --glow-color: {glowColor}; --glow-size: {glowSize}px;"
	onmousemove={onMouseMove}
	onmouseenter={onMouseEnter}
	onmouseleave={onMouseLeave}
>
	<!-- Glow layer -->
	<div
		class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 [mask-image:radial-gradient(circle_var(--glow-size)_at_var(--glow-x)_var(--glow-y),black_0%,transparent_100%)] group-hover:opacity-100"
		style="background: radial-gradient(circle var(--glow-size) at var(--glow-x) var(--glow-y), var(--glow-color), transparent 100%)"
	></div>

	<!-- Border glow -->
	<div
		class="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		style="background: radial-gradient(circle var(--glow-size) at var(--glow-x) var(--glow-y), var(--glow-color), transparent 100%); mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); mask-composite: exclude; -webkit-mask-composite: xor; padding: 1px;"
	></div>

	<!-- Content -->
	<div class="relative z-10">
		{@render children()}
	</div>
</div>
