<script>
	import Seo from '$lib/components/Seo.svelte';
	import ModuleTemplate from '$lib/components/ModuleTemplate.svelte';
	import { MODULES } from '$lib/content/modules.js';
	import { moduleMeta, CONFIG } from '$lib/content/site.js';

	let { data } = $props();
	const d = $derived(MODULES[data.slug]);
	const [title, description, path] = $derived(moduleMeta(data.slug, d.t, d.d));
</script>

<Seo
	{title}
	{description}
	{path}
	faq={d.faq}
	breadcrumb={[
		['Home', '/'],
		['Platform', '/platform/'],
		[d.t, path]
	]}
/>

<ModuleTemplate slug={data.slug} />
