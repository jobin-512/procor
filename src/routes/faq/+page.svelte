<script>
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ContentTemplate from '$lib/components/ContentTemplate.svelte';
	import { PAGES } from '$lib/content/pages.js';
	import { FAQS } from '$lib/content/faqs.js';
	import { META } from '$lib/content/site.js';

	const page = PAGES.faq;
	const [title, description, path] = META.faq;
</script>

<Seo
	{title}
	{description}
	{path}
	faq={FAQS}
	breadcrumb={[
		['Home', '/'],
		['FAQ', '/faq/']
	]}
/>

<PageHero
	title={page.t}
	lead={page.k}
	intro={page.d}
	trail={[
		['Home', '/'],
		['FAQ', null]
	]}
	eyebrow="FAQ"
/>

<ContentTemplate {page} faqs={FAQS} />
