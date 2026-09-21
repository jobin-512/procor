<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
	let isMenuOpen = $state(false);
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/assets/favicon.png" />
	<link rel="apple-touch-icon" href="/assets/favicon.png" />
	<meta name="theme-color" media="(prefers-color-scheme: light)" content="#F8FAFC" />
	<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#05080F" />
	<meta property="og:image" content="https://www.procorhrms.com/assets/og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="Procor HRMS — HR and payroll software for enterprises in India"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://www.procorhrms.com/assets/og-image.png" />
</svelte:head>

<div
	aria-hidden="true"
	class="blob-a pointer-events-none fixed -left-40 top-[-10%] z-0 h-[620px] w-[620px] rounded-full bg-[#0063D7] opacity-20 blur-[130px]"
></div>
<div
	aria-hidden="true"
	class="blob-b pointer-events-none fixed -right-40 bottom-[-15%] z-0 h-[680px] w-[680px] rounded-full bg-[#3E8EF0] opacity-20 blur-[130px]"
></div>

<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
	>Skip to content</a
>

<div class="relative z-10">
	<Header bind:isMenuOpen />
	{@render children()}
	<Footer />
</div>
