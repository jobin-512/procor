<script>
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ContentTemplate from '$lib/components/ContentTemplate.svelte';
	import { PAGES } from '$lib/content/pages.js';
	import { FAQS } from '$lib/content/faqs.js';
	import { META } from '$lib/content/site.js';

	const page = PAGES.company;
	const [title, description, path] = META.company;
</script>

<Seo
	{title}
	{description}
	{path}
	breadcrumb={[
		['Home', '/'],
		['Company', '/company/']
	]}
/>

<PageHero
	title={page.t}
	lead={page.k}
	intro={page.d}
	trail={[
		['Home', '/'],
		['Company', null]
	]}
	eyebrow="Company"
/>

<ContentTemplate {page} faqs={FAQS} />
