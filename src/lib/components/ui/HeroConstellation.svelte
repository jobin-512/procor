<!-- HeroConstellation — lightweight interactive 2D particle network (reference-style).
     Mouse-repel particles + short faint connection lines. Sparse by design:
     ~70 particles, 110px link distance, distance-faded alpha. Theme-aware. -->
<script>
	import { onMount } from 'svelte';

	let {
		particleCount = 70,
		connectionDistance = 110,
		repelRadius = 140,
		className = ''
	} = $props();

	let canvas = $state(null);

	const isLightMode = () =>
		typeof document !== 'undefined' && !document.documentElement.classList.contains('dark');

	onMount(() => {
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let w = 0;
		let h = 0;
		let raf = 0;
		let light = isLightMode();
		const mouse = { x: -9999, y: -9999 };

		const dot = () => (light ? '37, 59, 218' : '96, 165, 250');

		function resize() {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			const rect = canvas.parentElement.getBoundingClientRect();
			w = rect.width;
			h = rect.height;
			canvas.width = w * dpr;
			canvas.height = h * dpr;
			canvas.style.width = `${w}px`;
			canvas.style.height = `${h}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			seed();
		}

		let parts = [];
		function seed() {
			parts = Array.from({ length: particleCount }, () => ({
				x: Math.random() * w,
				y: Math.random() * h,
				vx: (Math.random() - 0.5) * 0.45,
				vy: (Math.random() - 0.5) * 0.45,
				r: Math.random() * 1.6 + 0.6
			}));
		}

		function step() {
			ctx.clearRect(0, 0, w, h);
			const c = dot();
			const maxAlpha = light ? 0.32 : 0.38;

			for (const p of parts) {
				p.x += p.vx;
				p.y += p.vy;
				if (p.x < 0 || p.x > w) p.vx *= -1;
				if (p.y < 0 || p.y > h) p.vy *= -1;

				const dx = p.x - mouse.x;
				const dy = p.y - mouse.y;
				const dist = Math.hypot(dx, dy);
				if (dist < repelRadius && dist > 0.1) {
					const f = (1 - dist / repelRadius) * 1.4;
					p.x += (dx / dist) * f;
					p.y += (dy / dist) * f;
				}

				ctx.beginPath();
				ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(${c},${light ? 0.75 : 0.85})`;
				ctx.fill();
			}

			ctx.lineWidth = 1;
			for (let i = 0; i < parts.length; i++) {
				for (let j = i + 1; j < parts.length; j++) {
					const dx = parts[i].x - parts[j].x;
					const dy = parts[i].y - parts[j].y;
					const d = Math.hypot(dx, dy);
					if (d < connectionDistance) {
						ctx.beginPath();
						ctx.strokeStyle = `rgba(${c},${((1 - d / connectionDistance) * maxAlpha).toFixed(3)})`;
						ctx.moveTo(parts[i].x, parts[i].y);
						ctx.lineTo(parts[j].x, parts[j].y);
						ctx.stroke();
					}
				}
			}

			raf = requestAnimationFrame(step);
		}

		// Window-level hover: the canvas sits behind content inside a
		// pointer-events-none layer, so track the mouse globally and map it
		// into canvas coordinates. Outside the canvas the repel radius never
		// triggers, so this is equivalent to canvas-local hover.
		const onMove = (e) => {
			const rect = canvas.getBoundingClientRect();
			mouse.x = e.clientX - rect.left;
			mouse.y = e.clientY - rect.top;
		};
		const onLeave = () => {
			mouse.x = -9999;
			mouse.y = -9999;
		};

		window.addEventListener('resize', resize);
		window.addEventListener('mousemove', onMove, { passive: true });
		document.documentElement.addEventListener('mouseleave', onLeave);
		const modeObserver = new MutationObserver(() => (light = isLightMode()));
		modeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

		resize();
		step();

		return () => {
			cancelAnimationFrame(raf);
			modeObserver.disconnect();
			window.removeEventListener('resize', resize);
			window.removeEventListener('mousemove', onMove);
			document.documentElement.removeEventListener('mouseleave', onLeave);
		};
	});
</script>

<canvas bind:this={canvas} class="absolute inset-0 h-full w-full {className}" aria-hidden="true"></canvas>
