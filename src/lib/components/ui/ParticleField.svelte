<!-- ParticleField — Lightweight canvas particle system for section backgrounds -->
<script>
	import { onMount, onDestroy } from 'svelte';
	import { cn } from '$lib/utils';

	let {
		count = 80,
		colors = ['#253BDA', '#3B5BFF', '#4A6BFF', '#38bdf8'],
		speed = 1,
		connectionDistance = 120,
		mouseInteraction = 'repel',
		className = ''
	} = $props();

	let canvas = $state(null);
	let animId = 0;

	onMount(() => {
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let width = 0;
		let height = 0;
		let mouse = { x: -1000, y: -1000 };

		function resize() {
			const dpr = Math.min(window.devicePixelRatio, 2);
			const rect = canvas.parentElement.getBoundingClientRect();
			width = rect.width;
			height = rect.height;
			canvas.width = width * dpr;
			canvas.height = height * dpr;
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;
			ctx.scale(dpr, dpr);
		}

		resize();
		window.addEventListener('resize', resize);

		const onMove = (e) => {
			const rect = canvas.getBoundingClientRect();
			mouse.x = e.clientX - rect.left;
			mouse.y = e.clientY - rect.top;
		};

		const onLeave = () => {
			mouse.x = -1000;
			mouse.y = -1000;
		};

		canvas.addEventListener('mousemove', onMove);
		canvas.addEventListener('mouseleave', onLeave);

		const parsedColors = colors.map((c) => {
			const temp = document.createElement('div');
			temp.style.color = c;
			document.body.appendChild(temp);
			const computed = getComputedStyle(temp).color;
			document.body.removeChild(temp);
			const match = computed.match(/(\d+)/g);
			return match ? { r: +match[0], g: +match[1], b: +match[2] } : { r: 117, g: 194, b: 246 };
		});

		const particles = Array.from({ length: count }, () => ({
			x: Math.random() * width,
			y: Math.random() * height,
			vx: (Math.random() - 0.5) * speed,
			vy: (Math.random() - 0.5) * speed,
			radius: Math.random() * 1.5 + 0.5,
			color: parsedColors[Math.floor(Math.random() * parsedColors.length)]
		}));

		function animate() {
			ctx.clearRect(0, 0, width, height);

			for (const p of particles) {
				p.x += p.vx;
				p.y += p.vy;

				if (p.x < 0) p.x = width;
				if (p.x > width) p.x = 0;
				if (p.y < 0) p.y = height;
				if (p.y > height) p.y = 0;

				if (mouseInteraction !== 'none') {
					const dx = p.x - mouse.x;
					const dy = p.y - mouse.y;
					const dist = Math.sqrt(dx * dx + dy * dy);
					const radius = 150;
					if (dist < radius) {
						const force = (1 - dist / radius) * 0.5;
						if (mouseInteraction === 'repel') {
							p.vx += (dx / dist) * force;
							p.vy += (dy / dist) * force;
						} else {
							p.vx -= (dx / dist) * force;
							p.vy -= (dy / dist) * force;
						}
					}
				}

				p.vx *= 0.99;
				p.vy *= 0.99;

				ctx.beginPath();
				ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.6)`;
				ctx.fill();
			}

			if (connectionDistance > 0) {
				for (let i = 0; i < particles.length; i++) {
					for (let j = i + 1; j < particles.length; j++) {
						const dx = particles[i].x - particles[j].x;
						const dy = particles[i].y - particles[j].y;
						const dist = Math.sqrt(dx * dx + dy * dy);
						if (dist < connectionDistance) {
							const opacity = (1 - dist / connectionDistance) * 0.15;
							const c = particles[i].color;
							ctx.beginPath();
							ctx.moveTo(particles[i].x, particles[i].y);
							ctx.lineTo(particles[j].x, particles[j].y);
							ctx.strokeStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${opacity})`;
							ctx.lineWidth = 0.5;
							ctx.stroke();
						}
					}
				}
			}

			animId = requestAnimationFrame(animate);
		}

		animate();

		onDestroy(() => {
			cancelAnimationFrame(animId);
			window.removeEventListener('resize', resize);
			canvas.removeEventListener('mousemove', onMove);
			canvas.removeEventListener('mouseleave', onLeave);
		});
	});
</script>

<canvas bind:this={canvas} class={cn('pointer-events-auto absolute inset-0', className)}></canvas>
