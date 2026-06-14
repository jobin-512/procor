<!-- shadcn/ui CardFooter -->
<script>
	import { cn } from '$lib/utils';
	const { class: c, ...rest } = $props();
</script>

<div class={cn('flex items-center p-6 pt-0', c)} {...rest}>
	<slot />
</div>
