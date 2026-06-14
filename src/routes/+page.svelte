<script>
	import Hero from '$lib/components/home/Hero.svelte';
	import TrustedBy from '$lib/components/home/TrustedBy.svelte';
	import Stats from '$lib/components/home/Stats.svelte';
	import Features from '$lib/components/home/Features.svelte';
	import Solutions from '$lib/components/home/Solutions.svelte';
	import HowItWorks from '$lib/components/home/HowItWorks.svelte';
	import AnalyticsDashboard from '$lib/components/home/AnalyticsDashboard.svelte';
	import ComparisonTable from '$lib/components/home/ComparisonTable.svelte';
	import IndustryBenchmarks from '$lib/components/home/IndustryBenchmarks.svelte';
	import Pricing from '$lib/components/home/Pricing.svelte';
	import Testimonials from '$lib/components/home/Testimonials.svelte';
	import FAQ from '$lib/components/home/Faq.svelte';
	import FinalCTA from '$lib/components/home/FinalCTA.svelte';
</script>

<div class="min-h-screen bg-white selection:bg-procor-sky/30 overflow-hidden">
	<main>
		<Hero />
		<TrustedBy />
		<Stats />
		<Features />
		<Solutions />
		<AnalyticsDashboard />
		<IndustryBenchmarks />
		<ComparisonTable />
		<HowItWorks />
		<Pricing />
		<Testimonials />
		<FAQ />
		<FinalCTA />
	</main>
</div>
