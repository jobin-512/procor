<!-- Demo page showcasing Card + Spotlight + Spline scene -->
<script>
	import SplineScene from '$lib/components/ui/spline-scene.svelte';
	import Spotlight from '$lib/components/ui/spotlight.svelte';
	import Card from '$lib/components/ui/card.svelte';
	import CardHeader from '$lib/components/ui/card-header.svelte';
	import CardTitle from '$lib/components/ui/card-title.svelte';
	import CardDescription from '$lib/components/ui/card-description.svelte';
	import CardContent from '$lib/components/ui/card-content.svelte';
	import CardFooter from '$lib/components/ui/card-footer.svelte';
	import { Github, Twitter, ArrowRight } from '@lucide/svelte';
</script>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
	<!-- Ambient spotlight -->
	<Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

	<!-- Grid background overlay -->
	<div
		class="absolute inset-0 pointer-events-none opacity-[0.03]"
		style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22%3E%3Cpath d=%22M0 0h40v40H0z%22 fill=%22none%22/%3E%3Cpath d=%22M0 40L40 0%22 stroke=%22white%22 stroke-width=%22.5%22 fill=%22none%22/%3E%3C/svg%3E');"
	></div>

	<div class="relative z-10 grid lg:grid-cols-2 w-full max-w-7xl mx-auto px-6 gap-8 items-center">
		<!-- Left column — copy -->
		<div class="text-left flex flex-col justify-center py-12 md:py-20">
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
				Interactive <span
					class="bg-gradient-to-r from-procor-sky to-procor-blue bg-clip-text text-transparent"
					>3D</span
				>
			</h1>

			<p class="text-neutral-400 max-w-lg leading-relaxed mb-8">
				Bring your UI to life with beautiful 3D scenes. Create immersive experiences that capture
				attention and enhance your design.
			</p>

			<!-- Stat pills -->
			<div class="flex flex-wrap gap-4 mb-10">
				{#each [{ label: '60 FPS', icon: '⚡' }, { label: 'WebGL 2.0', icon: '🎨' }, { label: 'Touch Ready', icon: '👆' }] as stat}
					<span
						class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300"
					>
						<span>{stat.icon}</span>
						{stat.label}
					</span>
				{/each}
			</div>

			<div class="flex flex-col sm:flex-row gap-4">
				<button
					class="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors"
				>
					Get Started <ArrowRight size={18} />
				</button>
				<button
					class="inline-flex items-center justify-center gap-2 px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white/5 transition-colors"
				>
					<Github size={18} /> GitHub
				</button>
			</div>
		</div>

		<!-- Right column — 3D card -->
		<Card class="bg-white/[0.04] border-white/10 backdrop-blur-sm">
			<CardHeader class="pb-2">
				<CardTitle class="text-xl text-white">Your Scene</CardTitle>
				<CardDescription>Paste your Spline URL below</CardDescription>
			</CardHeader>
			<CardContent class="p-6 pt-0">
				<SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
			</CardContent>
			<CardFooter class="justify-between border-t border-white/10">
				<span class="text-xs text-neutral-500">Powered by Spline Runtime</span>
				<Twitter
					size={18}
					class="text-neutral-500 hover:text-white cursor-pointer transition-colors"
				/>
			</CardFooter>
		</Card>
	</div>
</section>
