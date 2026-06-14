<!-- SplineScene - renders a Spline 3D scene via iframe -->
<script>
	const { scene = '' } = $props();
</script>

<iframe
	class="w-full h-full"
	src={scene}
	frameborder="0"
	allow="autoplay; fullscreen; microphone;"
	loading="lazy"
></iframe>
