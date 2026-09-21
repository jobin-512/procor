<!-- PageTheme — full-page per-accent background (reference-style page theming).
     Fixed WebGL tinted to the page accent + tone-matched orbs/particles,
     light-mode wash veil so content stays readable. Content must sit at z-10. -->
<script>
	import PageWebGL from '$lib/components/ui/PageWebGL.svelte';
	import AnimatedBackground from '$lib/components/ui/AnimatedBackground.svelte';
	import ParticleField from '$lib/components/ui/ParticleField.svelte';

	let {
		accent = '#253BDA',
		secondary = null,
		intensity = 0.6,
		particleCount = 600,
		orbCount = 3
	} = $props();

	const orbColors = $derived(secondary ? [accent, secondary, '#38bdf8'] : [accent, accent, '#38bdf8']);
</script>

<div class="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
	<PageWebGL {accent} {intensity} {particleCount} />
	<AnimatedBackground colors={orbColors} {orbCount} speed={0.7} blur={180} />
	<ParticleField count={40} speed={0.4} connectionDistance={100} colors={[accent, '#3B5BFF', '#38bdf8']} className="opacity-40" />
	<div class="grid-pattern absolute inset-0 opacity-40"></div>
	<!-- Readability veils: hero melt + light-mode wash -->
	<div class="absolute inset-x-0 top-0 h-[28rem] bg-gradient-to-b from-transparent via-bg/40 to-bg"></div>
	<div class="absolute inset-0 bg-[#f5f7fb]/55 dark:bg-transparent"></div>
</div>
