<script>
	let { trail = [] } = $props(); // [[label, href|null], ...]
</script>

{#if trail.length}
	<nav aria-label="Breadcrumb" class="flex items-center gap-2 text-[13px] text-slate-400">
		{#each trail as [label, href], i}
			{#if href && i < trail.length - 1}
				<a {href} class="transition-colors hover:text-ink">{label}</a>
				<span class="text-slate-300">/</span>
			{:else}
				<span class="font-medium text-ink">{label}</span>
			{/if}
		{/each}
	</nav>
{/if}
