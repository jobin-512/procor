<!-- shadcn/ui CardTitle -->
<script>
	import { cn } from '$lib/utils';
	const { class: c, ...rest } = $props();
</script>

<h3 class={cn('text-2xl font-semibold leading-none tracking-tight', c)} {...rest}>
	<slot />
</h3>
