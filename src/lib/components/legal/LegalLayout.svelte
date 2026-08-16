<script>
	import PageWebGL from '$lib/components/ui/PageWebGL.svelte';
	import Mail from '@lucide/svelte/icons/mail';
	import Phone from '@lucide/svelte/icons/phone';
	import MapPin from '@lucide/svelte/icons/map-pin';

	let { title, updated, children } = $props();
</script>

<div class="min-h-screen bg-bg selection:bg-blue-500/30 overflow-hidden">
	<PageWebGL theme="blue" intensity={0.6} particleCount={500} />

	<section class="relative pt-32 pb-10 px-6 md:px-12">
		<div class="max-w-3xl mx-auto text-center">
			<div class="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm font-semibold text-blue-300 mb-8 backdrop-blur-xl">
				<span>Legal</span>
			</div>
			<h1 class="text-4xl sm:text-5xl md:text-6xl font-black text-fg font-display mb-4">{title}</h1>
			<p class="text-fg/40 text-sm">Last updated: {updated}</p>
		</div>
	</section>

	<section class="relative px-6 md:px-12 pb-16">
		<div class="prose-legal max-w-3xl mx-auto">
			{@render children()}
		</div>
	</section>

	<section class="relative px-6 md:px-12 pb-32">
		<div class="max-w-3xl mx-auto rounded-3xl border border-line bg-surface-2 p-8 text-center">
			<h3 class="text-xl font-bold text-fg mb-2">Contact Us</h3>
			<p class="text-fg/50 text-sm mb-6">Questions about this policy? Our team is here to help.</p>
			<div class="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-fg/60">
				<div class="flex items-center gap-2">
					<Mail size={16} class="text-blue-400/60" />
					<span>info@procorhrms.com</span>
				</div>
				<div class="flex items-center gap-2">
					<Phone size={16} class="text-blue-400/60" />
					<span>9871420148</span>
				</div>
				<div class="flex items-center gap-2">
					<MapPin size={16} class="text-blue-400/60" />
					<span>New Delhi, India</span>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.prose-legal :global(h2) {
		font-size: 1.5rem;
		font-weight: 800;
		color: var(--fg);
		margin-top: 2.5rem;
		margin-bottom: 1rem;
		font-family: var(--font-display, 'Outfit', sans-serif);
	}
	.prose-legal :global(h3) {
		font-size: 1.15rem;
		font-weight: 700;
		color: var(--fg);
		margin-top: 1.75rem;
		margin-bottom: 0.75rem;
	}
	.prose-legal :global(p) {
		color: color-mix(in srgb, var(--fg) 72%, transparent);
		line-height: 1.75;
		margin-bottom: 1rem;
		font-size: 0.95rem;
	}
	.prose-legal :global(ul) {
		list-style: disc;
		padding-left: 1.5rem;
		margin-bottom: 1rem;
		color: color-mix(in srgb, var(--fg) 72%, transparent);
	}
	.prose-legal :global(ul li) {
		margin-bottom: 0.5rem;
		font-size: 0.95rem;
	}
	.prose-legal :global(a) {
		color: #60a5fa;
		text-decoration: underline;
	}
	.prose-legal :global(strong) {
		color: var(--fg);
	}
</style>
