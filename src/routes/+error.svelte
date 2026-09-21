<script>
	import { page } from '$app/state';
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ContentTemplate from '$lib/components/ContentTemplate.svelte';
	import { PAGES } from '$lib/content/pages.js';
	import { FAQS } from '$lib/content/faqs.js';
	import { META } from '$lib/content/site.js';

	const page404 = PAGES['404'];
	const [title, description, path] = META['404'];
</script>

<Seo {title} {description} {path} noindex={true} />

<PageHero
	title={page404.t}
	lead={page404.k}
	intro={page404.d}
	ctaLabel={page404.ctaLabel}
	ctaHref="/contact/"
	eyebrow="404"
/>

<ContentTemplate page={page404} faqs={FAQS} />

{#if page.status !== 404}
	<p class="hidden">{page.status}</p>
{/if}
