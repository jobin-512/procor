<!-- GradientButton — reusable CTA button with gradient + glow -->
<script>
	let { variant = 'primary', size = 'md', href = null, class: className = '', children } = $props();

	const variants = {
		primary:
			'bg-gradient-to-r from-procor-blue to-procor-blue-dark text-white shadow-lg hover:shadow-xl hover:shadow-procor-blue/20 hover:scale-[1.02] active:scale-[0.98]',
		secondary:
			'bg-surface border-2 border-line text-fg hover:border-procor-blue/40 hover:shadow-xl hover:-translate-y-0.5',
		ghost: 'bg-surface-2 border border-line text-fg hover:bg-surface-2',
		'ghost-brand': 'bg-surface-2 border border-line text-fg hover:bg-surface-2'
	};

	const sizes = {
		sm: 'px-6 py-4 text-sm',
		md: 'px-10 py-4 text-base',
		lg: 'px-14 py-5 text-lg'
	};
</script>

{#if href}
	<a
		{href}
		class="inline-flex items-center justify-center gap-3 rounded-2xl font-black transition-all duration-500 cursor-pointer group {variants[
			variant
		] || variants.primary} {sizes[size] || sizes.md} {className}"
	>
		{@render children()}
	</a>
{:else}
	<button
		class="inline-flex items-center justify-center gap-3 rounded-2xl font-black transition-all duration-500 cursor-pointer group {variants[
			variant
		] || variants.primary} {sizes[size] || sizes.md} {className}"
	>
		{@render children()}
	</button>
{/if}
