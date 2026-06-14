<!-- shadcn/ui CardDescription -->
<script>
	import { cn } from '$lib/utils';
	const { class: c, ...rest } = $props();
</script>

<p class={cn('text-sm text-muted-foreground', c)} {...rest}>
	<slot />
</p>
