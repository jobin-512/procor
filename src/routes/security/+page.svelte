<script>
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ContentTemplate from '$lib/components/ContentTemplate.svelte';
	import { PAGES } from '$lib/content/pages.js';
	import { FAQS } from '$lib/content/faqs.js';
	import { META } from '$lib/content/site.js';

	const page = PAGES.security;
	const [title, description, path] = META.security;
	const faq = (page.faq ?? []).map((i) => FAQS[i]);
</script>

<Seo
	{title}
	{description}
	{path}
	{faq}
	breadcrumb={[
		['Home', '/'],
		['Security', '/security/']
	]}
/>

<PageHero
	title={page.t}
	lead={page.k}
	intro={page.d}
	trail={[
		['Home', '/'],
		['Security', null]
	]}
	eyebrow="Security"
/>

<ContentTemplate {page} faqs={FAQS} />
