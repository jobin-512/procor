<script>
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	let {
		title,
		lead = '',
		intro = '',
		trail = [],
		ctaLabel = 'Book a demo',
		ctaHref = '/contact/'
	} = $props();
</script>

<section class="relative isolate overflow-hidden pb-16 pt-32 sm:pt-40">
	<div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
		<div
			class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(248,250,252,0.72)_0%,rgba(255,255,255,0.86)_75%)]"
		></div>
		<div
			class="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_60%_60%_at_30%_25%,#000_0%,transparent_75%)]"
		></div>
		<div
			class="absolute -top-40 right-[-8%] h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle,rgba(0,99,215,0.14),transparent_62%)] blur-3xl"
		></div>
	</div>
	<div class="mx-auto max-w-[1320px] px-6 lg:px-10">
		<Breadcrumbs {trail} />
		<div class="mt-10 grid gap-12 lg:grid-cols-5">
			<h1 class="font-display text-ink lg:col-span-3">
				<span
					class="wdth-condensed block text-[clamp(2.4rem,5.6vw,4.6rem)] font-extrabold leading-[0.95] tracking-[-0.04em]"
					>{title}</span
				>
				{#if lead}
					<span
						class="mt-3 block max-w-[18ch] text-[clamp(1.4rem,2.7vw,2.1rem)] font-extralight leading-[1.15] tracking-[-0.04em] text-slate-500"
						>{lead}</span
					>
				{/if}
			</h1>
			<div class="lg:col-span-2 lg:pt-6">
				{#if intro}
					<p class="max-w-[34rem] text-[16.5px] leading-[1.75] text-slate-600">{intro}</p>
				{/if}
				<a href={ctaHref} class="cta-primary group mt-8 inline-flex h-12 px-7 text-[15px]"
					><span class="cta-glow"></span><span class="relative">{ctaLabel}</span></a
				>
			</div>
		</div>
	</div>
</section>
