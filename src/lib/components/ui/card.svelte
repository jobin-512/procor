<!-- shadcn/ui Card - adapted for Svelte 5 -->
<script>
	import { cn } from '$lib/utils';
	const { class: c, ...rest } = $props();
</script>

<!-- svelte-ignore slot_element_deprecated -->
<div
	class={cn('rounded-xl border bg-card text-card-foreground shadow-sm lg:shadow-lg', c)}
	{...rest}
>
	<slot />
</div>
