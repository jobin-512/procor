<!-- AnimatedBackground — Gradient mesh + floating orbs with mouse parallax -->
<script>
	import { onMount, onDestroy } from 'svelte';
	import { cn } from '$lib/utils';

	let {
		colors = ['#253BDA', '#3B5BFF', '#4A6BFF'],
		speed = 1,
		orbCount = 3,
		blur = 180,
		noise = true,
		className = ''
	} = $props();

	let container = $state(null);
	let mouseX = $state(0);
	let mouseY = $state(0);
	let orbEls = $state([]);
	let animId = 0;

	const durations = [18, 22, 26, 20, 24];

	onMount(() => {
		const onMove = (e) => {
			const rect = container?.getBoundingClientRect();
			if (!rect) return;
			mouseX = (e.clientX - rect.left - rect.width / 2) / rect.width;
			mouseY = (e.clientY - rect.top - rect.height / 2) / rect.height;
		};

		window.addEventListener('mousemove', onMove);

		let frame = 0;
		function animate() {
			frame += 0.5 * speed;
			orbEls.forEach((orb, i) => {
				if (!orb) return;
				const parallaxX = mouseX * 30 * (i % 2 === 0 ? 1 : -1);
				const parallaxY = mouseY * 30 * (i % 2 === 0 ? -1 : 1);
				const floatX = Math.sin((frame + i * 60) / (durations[i] || 20)) * 40;
				const floatY = Math.cos((frame + i * 40) / (durations[i] || 20)) * 30;
				orb.style.transform = `translate(${floatX + parallaxX}px, ${floatY + parallaxY}px)`;
			});
			animId = requestAnimationFrame(animate);
		}
		animate();

		onDestroy(() => {
			cancelAnimationFrame(animId);
			window.removeEventListener('mousemove', onMove);
		});
	});

	function getOrbStyle(color, index, total) {
		const spread = 60;
		const baseX = ((index / (total - 1 || 1)) * spread * 2) / 3 + 10;
		const baseY = 20 + (index % 2) * 30;
		return `
      background: radial-gradient(circle, ${color}40, ${color}08 70%, transparent);
      width: ${blur * 2}px;
      height: ${blur * 2}px;
      left: ${baseX}%;
      top: ${baseY}%;
      filter: blur(${blur}px);
    `;
	}
</script>

<div
	bind:this={container}
	class={cn(
		'pointer-events-none absolute inset-0 overflow-hidden',
		noise && 'noise-overlay',
		className
	)}
>
	{#each { length: orbCount }, i}
		<div
			bind:this={orbEls[i]}
			class="absolute rounded-full will-change-transform"
			style={getOrbStyle(colors[i % colors.length], i, orbCount)}
		></div>
	{/each}

	<!-- Vignette overlay -->
	<div
		class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--surface-dark)_75%)]"
	></div>
</div>
