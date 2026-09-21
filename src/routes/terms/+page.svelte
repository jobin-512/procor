<script>
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ContentTemplate from '$lib/components/ContentTemplate.svelte';
	import { PAGES } from '$lib/content/pages.js';
	import { FAQS } from '$lib/content/faqs.js';
	import { META } from '$lib/content/site.js';

	const page = PAGES.terms;
	const [title, description, path] = META.terms;
</script>

<Seo
	{title}
	{description}
	{path}
	breadcrumb={[
		['Home', '/'],
		['Terms of Service', '/terms/']
	]}
/>

<PageHero
	title={page.t}
	lead={page.k}
	intro={page.d}
	trail={[
		['Home', '/'],
		['Terms of Service', null]
	]}
	eyebrow="Legal"
/>

<ContentTemplate {page} faqs={FAQS} />
