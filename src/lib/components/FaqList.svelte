<script>
	import SiteIcon from '$lib/components/SiteIcon.svelte';

	let { items = [] } = $props();
</script>

<div class="divide-y divide-slate-200/60 border-y border-slate-200/60">
	{#each items as [q, a]}
		<details class="group border-b border-slate-200/60 py-5 last:border-b-0">
			<summary
				class="flex cursor-pointer list-none items-start justify-between gap-6 text-[16.5px] font-semibold text-ink transition-colors hover:text-indigo-600"
			>
				{q}
				<span class="mt-1 shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-45"
					><SiteIcon name="plus" size={16} /></span
				>
			</summary>
			<p class="mt-4 max-w-3xl text-[15.5px] leading-[1.75] text-slate-600">{a}</p>
		</details>
	{/each}
</div>
