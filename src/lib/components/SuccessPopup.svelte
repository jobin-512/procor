<script>
	import SiteIcon from '$lib/components/SiteIcon.svelte';

	let { open = false, email = '', onClose = () => {} } = $props();

	let closeBtn = $state(null);
	let pieces = $state([]);

	const COLORS = [
		'#0063d7',
		'#3e8ef0',
		'#38bdf8',
		'#10b981',
		'#34d399',
		'#f59e0b',
		'#fbbf24',
		'#ec4899',
		'#8b5cf6',
		'#6366f1'
	];

	function burst() {
		pieces = Array.from({ length: 56 }, (_, i) => ({
			id: i,
			// start near the checkmark, explode outward then fall
			x: 50 + (Math.random() - 0.5) * 12,
			drift: (Math.random() - 0.5) * 160,
			delay: Math.random() * 0.25,
			duration: 1.6 + Math.random() * 1.4,
			size: 6 + Math.random() * 7,
			round: Math.random() > 0.6,
			color: COLORS[i % COLORS.length],
			rotate: Math.random() * 360,
			spin: 360 + Math.random() * 720
		}));
	}

	$effect(() => {
		if (open) {
			burst();
			document.documentElement.style.overflow = 'hidden';
			// focus the primary action for keyboard users
			requestAnimationFrame(() => closeBtn?.focus());
		} else {
			document.documentElement.style.overflow = '';
		}
		return () => {
			document.documentElement.style.overflow = '';
		};
	});

	function handleKey(e) {
		if (e.key === 'Escape') onClose();
	}

	function handleBackdrop(e) {
		if (e.target === e.currentTarget) onClose();
	}
</script>

<svelte:window onkeydown={handleKey} />

{#if open}
	<div class="success-backdrop" onmousedown={handleBackdrop} role="presentation">
		<div
			class="success-card"
			role="dialog"
			aria-modal="true"
			aria-labelledby="demo-success-title"
			aria-describedby="demo-success-desc"
		>
			<!-- confetti / party-popper burst -->
			<div class="confetti-layer" aria-hidden="true">
				{#each pieces as p (p.id)}
					<span
						class="confetti{p.round ? ' is-round' : ''}"
						style="
							left: {p.x}%;
							width: {p.size}px;
							height: {p.round ? p.size : p.size * 0.55}px;
							background: {p.color};
							--drift: {p.drift}px;
							--rotate: {p.rotate}deg;
							--spin: {p.spin}deg;
							animation-delay: {p.delay}s;
							animation-duration: {p.duration}s;
						"
					></span>
				{/each}
			</div>

			<button
				bind:this={closeBtn}
				type="button"
				class="success-close"
				onclick={onClose}
				aria-label="Close confirmation"
			>
				<SiteIcon name="x" size={16} />
			</button>

			<div class="check-wrap" aria-hidden="true">
				<span class="ring ring-1"></span>
				<span class="ring ring-2"></span>
				<svg class="check-svg" viewBox="0 0 84 84" fill="none">
					<circle class="check-circle" cx="42" cy="42" r="34" />
					<path class="check-tick" d="M28 43.5 38.5 54 57 32" />
				</svg>
			</div>

			<p class="success-eyebrow">Request received</p>
			<h2 id="demo-success-title" class="success-title">You're on the list!</h2>
			<p id="demo-success-desc" class="success-copy">
				Thanks. We have your request{#if email.trim()}&nbsp;and will write to
					<strong class="success-email">{email.trim()}</strong>{/if}
				within one business day.
			</p>

			<button type="button" class="cta-primary success-cta" onclick={onClose}>
				<span class="cta-glow" aria-hidden="true"></span>
				<span class="relative">Done</span>
			</button>
			<a class="success-link" href="/" onclick={onClose}>
				Explore the platform while you wait
			</a>
		</div>
	</div>
{/if}

<svg width="0" height="0" aria-hidden="true" style="position:absolute">
	<defs>
		<linearGradient id="successGrad" x1="0" y1="0" x2="1" y2="1">
			<stop offset="0" stop-color="#10b981" />
			<stop offset="1" stop-color="#0063d7" />
		</linearGradient>
	</defs>
</svg>

<style>
	.success-backdrop {
		position: fixed;
		inset: 0;
		z-index: 90;
		display: grid;
		place-items: center;
		padding: 1rem;
		background: rgba(1, 43, 97, 0.55);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		animation: backdrop-in 0.25s ease-out;
	}

	.success-card {
		position: relative;
		width: min(430px, 100%);
		overflow: hidden;
		text-align: center;
		border-radius: 28px;
		border: 1px solid rgba(255, 255, 255, 0.65);
		background:
			radial-gradient(120% 90% at 50% 0%, rgba(0, 99, 215, 0.12), transparent 60%),
			radial-gradient(100% 80% at 50% 110%, rgba(16, 185, 129, 0.12), transparent 60%),
			rgba(255, 255, 255, 0.96);
		box-shadow:
			0 30px 80px -20px rgba(1, 43, 97, 0.45),
			0 2px 0 rgba(255, 255, 255, 0.8) inset;
		padding: 2.5rem 2rem 1.75rem;
		animation: card-pop 0.45s cubic-bezier(0.2, 1.4, 0.35, 1);
	}

	.confetti-layer {
		position: absolute;
		inset: 0;
		overflow: hidden;
		pointer-events: none;
	}

	.confetti {
		position: absolute;
		top: 34%;
		border-radius: 2px;
		opacity: 0;
		animation-name: confetti-burst;
		animation-timing-function: cubic-bezier(0.15, 0.8, 0.4, 1);
		animation-fill-mode: forwards;
	}
	.confetti.is-round {
		border-radius: 9999px;
	}

	.success-close {
		position: absolute;
		top: 0.75rem;
		right: 0.75rem;
		display: grid;
		place-items: center;
		width: 2rem;
		height: 2rem;
		border-radius: 9999px;
		color: #64748b;
		background: rgba(15, 23, 42, 0.05);
		transition:
			background 0.2s,
			color 0.2s,
			transform 0.2s;
	}
	.success-close:hover {
		background: rgba(15, 23, 42, 0.1);
		color: #012b61;
		transform: scale(1.06);
	}

	.check-wrap {
		position: relative;
		width: 104px;
		height: 104px;
		margin: 0.25rem auto 0;
		display: grid;
		place-items: center;
	}
	.ring {
		position: absolute;
		inset: 0;
		border-radius: 9999px;
		border: 2px solid rgba(16, 185, 129, 0.35);
		animation: ring-ping 1.8s ease-out infinite;
	}
	.ring-2 {
		animation-delay: 0.6s;
	}
	.check-svg {
		width: 84px;
		height: 84px;
		filter: drop-shadow(0 8px 20px rgba(16, 185, 129, 0.35));
	}
	.check-circle {
		stroke: url(#successGrad);
		stroke-width: 5;
		stroke-linecap: round;
		stroke-dasharray: 214;
		stroke-dashoffset: 214;
		fill: #ecfdf5;
		animation: draw-circle 0.7s ease-out forwards;
	}
	.check-tick {
		stroke: #059669;
		stroke-width: 6;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-dasharray: 40;
		stroke-dashoffset: 40;
		animation: draw-tick 0.45s 0.55s cubic-bezier(0.3, 1.3, 0.5, 1) forwards;
	}

	.success-eyebrow {
		margin-top: 1.1rem;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: #059669;
	}
	.success-title {
		margin-top: 0.4rem;
		font-family: var(--font-display);
		font-size: 1.7rem;
		font-weight: 800;
		letter-spacing: -0.03em;
		color: #012b61;
	}
	.success-copy {
		margin: 0.6rem auto 0;
		max-width: 32ch;
		font-size: 14.5px;
		line-height: 1.65;
		color: #475569;
	}
	.success-email {
		color: #012b61;
		word-break: break-all;
	}

	.success-cta {
		width: 100%;
		margin-top: 1.4rem;
		height: 52px;
	}
	.success-link {
		display: inline-block;
		margin-top: 0.9rem;
		font-size: 13.5px;
		font-weight: 600;
		color: #0063d7;
		text-decoration: underline;
		text-underline-offset: 4px;
	}
	.success-link:hover {
		color: #012b61;
	}

	@keyframes backdrop-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@keyframes card-pop {
		from {
			opacity: 0;
			transform: translateY(18px) scale(0.94);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}
	@keyframes draw-circle {
		to {
			stroke-dashoffset: 0;
		}
	}
	@keyframes draw-tick {
		to {
			stroke-dashoffset: 0;
		}
	}
	@keyframes ring-ping {
		0% {
			transform: scale(0.82);
			opacity: 0.9;
		}
		70% {
			transform: scale(1.12);
			opacity: 0;
		}
		100% {
			transform: scale(1.12);
			opacity: 0;
		}
	}
	@keyframes confetti-burst {
		0% {
			opacity: 1;
			transform: translate(0, 0) rotate(var(--rotate));
		}
		100% {
			opacity: 0;
			transform: translate(var(--drift), 260px) rotate(var(--spin));
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.success-backdrop,
		.success-card,
		.ring,
		.check-circle,
		.check-tick,
		.confetti {
			animation: none;
		}
		.check-circle,
		.check-tick {
			stroke-dashoffset: 0;
		}
		.confetti {
			display: none;
		}
	}
</style>
