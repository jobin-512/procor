<script>
	import { CONFIG } from '$lib/content/site.js';

	let {
		title,
		description,
		path = '/',
		noindex = false,
		breadcrumb = null, // [[name, path], ...]
		faq = null // [[q, a], ...]
	} = $props();

	const url = $derived(CONFIG.siteUrl.replace(/\/$/, '') + path);
	const orgSchema = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Organization',
				'@id': `${CONFIG.siteUrl}/#organization`,
				name: 'Procor HRMS',
				legalName: CONFIG.legalEntity,
				url: `${CONFIG.siteUrl}/`,
				description: 'Payroll, HRMS and statutory compliance services for companies operating in India.',
				areaServed: 'IN',
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'New Delhi',
					addressRegion: 'Delhi',
					addressCountry: 'IN'
				},
				telephone: CONFIG.phone,
				email: CONFIG.salesEmail
			},
			{
				'@type': 'SoftwareApplication',
				name: 'Procor HRMS',
				applicationCategory: 'BusinessApplication',
				operatingSystem: 'Web',
				url: `${CONFIG.siteUrl}/`,
				publisher: { '@id': `${CONFIG.siteUrl}/#organization` },
				description:
					'Cloud HR and payroll platform with eleven modules sharing a single employee record, built for multi-entity and multi-state operations in India.',
				featureList:
					'Core HR, Attendance, Leave, Assets, Recruitment, Onboarding, Performance, Payroll, Reimbursement and Expenses, Offboarding, Helpdesk'
			}
		]
	};

	const breadcrumbSchema = $derived(
		breadcrumb
			? {
					'@context': 'https://schema.org',
					'@type': 'BreadcrumbList',
					itemListElement: breadcrumb.map(([name, p], i) => ({
						'@type': 'ListItem',
						position: i + 1,
						name,
						item: CONFIG.siteUrl.replace(/\/$/, '') + p
					}))
				}
			: null
	);

	const faqSchema = $derived(
		faq?.length
			? {
					'@context': 'https://schema.org',
					'@type': 'FAQPage',
					mainEntity: faq.map(([q, a]) => ({
						'@type': 'Question',
						name: q,
						acceptedAnswer: { '@type': 'Answer', text: a }
					}))
				}
			: null
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	<meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow'} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Procor HRMS" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:locale" content="en_IN" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	{@html `<script type="application/ld+json">${JSON.stringify(orgSchema)}</script>`}
	{#if breadcrumbSchema}
		{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>`}
	{/if}
	{#if faqSchema}
		{@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`}
	{/if}
</svelte:head>
