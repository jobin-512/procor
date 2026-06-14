<!-- shadcn/ui CardContent -->
<script>
	import { cn } from '$lib/utils';
	const { class: c, ...rest } = $props();
</script>

<div class={cn('p-6 pt-0', c)} {...rest}>
	<slot />
</div>
