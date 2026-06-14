<!-- MagneticButton — Standalone magnetic button with glow tracking -->
<script>
	import { gsap } from 'gsap';
	import { cn } from '$lib/utils';

	let {
		strength = 0.2,
		variant = 'primary',
		size = 'md',
		glare = true,
		className = '',
		children,
		onclick
	} = $props();

	let btn = $state(null);
	let glareEl = $state(null);

	const variants = {
		primary:
			'bg-gradient-to-r from-procor-brand to-procor-navy text-white shadow-[0_0_20px_rgba(117,194,246,0.15)] hover:shadow-[0_0_30px_rgba(117,194,246,0.3)]',
		secondary:
			'border border-white/10 bg-white/[0.04] text-white hover:border-white/20 hover:bg-white/[0.08]',
		ghost: 'text-white/70 hover:text-white hover:bg-white/[0.06]'
	};

	const sizes = {
		sm: 'px-4 py-3 text-sm',
		md: 'px-6 py-3 text-sm',
		lg: 'px-8 py-4 text-base'
	};

	function onMouseMove(e) {
		if (!btn) return;
		const rect = btn.getBoundingClientRect();
		const x = e.clientX - rect.left - rect.width / 2;
		const y = e.clientY - rect.top - rect.height / 2;

		gsap.to(btn, {
			x: x * strength,
			y: y * strength,
			duration: 0.3,
			ease: 'power2.out'
		});

		if (glareEl && glare) {
			const glareX = ((e.clientX - rect.left) / rect.width) * 100;
			const glareY = ((e.clientY - rect.top) / rect.height) * 100;
			glareEl.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.2), transparent 60%)`;
		}
	}

	function onMouseLeave() {
		if (!btn) return;
		gsap.to(btn, {
			x: 0,
			y: 0,
			duration: 0.5,
			ease: 'elastic.out(1, 0.3)'
		});

		if (glareEl && glare) {
			glareEl.style.background = 'transparent';
		}
	}
</script>

<button
	bind:this={btn}
	class={cn(
		'magnetic-button relative inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300',
		variants[variant],
		sizes[size],
		className
	)}
	onmousemove={onMouseMove}
	onmouseleave={onMouseLeave}
	{onclick}
>
	{@render children()}

	{#if glare}
		<div
			bind:this={glareEl}
			class="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
			style="opacity: 0;"
		></div>
	{/if}
</button>
