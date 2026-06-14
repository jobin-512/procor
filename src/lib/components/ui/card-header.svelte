<!-- shadcn/ui CardHeader -->
<script>
	import { cn } from '$lib/utils';
	const { class: c, ...rest } = $props();
</script>

<div class={cn('flex flex-col space-y-1.5 p-6', c)} {...rest}>
	<slot />
</div>
