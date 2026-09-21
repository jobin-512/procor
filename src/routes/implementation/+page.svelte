<script>
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ContentTemplate from '$lib/components/ContentTemplate.svelte';
	import { PAGES } from '$lib/content/pages.js';
	import { FAQS } from '$lib/content/faqs.js';
	import { META } from '$lib/content/site.js';

	const page = PAGES.implementation;
	const [title, description, path] = META.implementation;
	const faq = (page.faq ?? []).map((i) => FAQS[i]);
</script>

<Seo
	{title}
	{description}
	{path}
	{faq}
	breadcrumb={[
		['Home', '/'],
		['Implementation', '/implementation/']
	]}
/>

<PageHero
	title={page.t}
	lead={page.k}
	intro={page.d}
	trail={[
		['Home', '/'],
		['Implementation', null]
	]}
	eyebrow="Implementation"
/>

<ContentTemplate {page} faqs={FAQS} />
