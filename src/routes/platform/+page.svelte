<script>
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ContentTemplate from '$lib/components/ContentTemplate.svelte';
	import { PAGES } from '$lib/content/pages.js';
	import { FAQS } from '$lib/content/faqs.js';
	import { META } from '$lib/content/site.js';

	const page = PAGES.platform;
	const [title, description, path] = META.platform;
</script>

<Seo
	{title}
	{description}
	{path}
	breadcrumb={[
		['Home', '/'],
		['Platform', '/platform/']
	]}
/>

<PageHero
	title={page.t}
	lead={page.k}
	intro={page.d}
	trail={[
		['Home', '/'],
		['Platform', null]
	]}
	eyebrow="Platform"
/>

<ContentTemplate {page} faqs={FAQS} />
