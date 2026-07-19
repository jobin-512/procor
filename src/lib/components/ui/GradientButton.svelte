<!-- GradientButton — reusable CTA button with gradient + glow -->
<script>
	let { variant = 'primary', size = 'md', href = null, class: className = '', children } = $props();

	const variants = {
		primary:
			'bg-gradient-to-r from-procor-blue to-procor-blue-dark text-white shadow-lg hover:shadow-xl hover:shadow-procor-blue/20 hover:scale-[1.02] active:scale-[0.98]',
		secondary:
			'bg-white border-2 border-slate-200 text-procor-navy hover:border-procor-blue/40 hover:shadow-xl hover:-translate-y-0.5',
		ghost: 'bg-white/[0.06] border border-white/10 text-white hover:bg-white/[0.1]',
		'ghost-brand': 'bg-white/[0.08] border border-white/20 text-white hover:bg-white/[0.14]'
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
