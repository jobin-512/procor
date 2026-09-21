<script>
	import SiteIcon from '$lib/components/SiteIcon.svelte';
	import FaqList from '$lib/components/FaqList.svelte';
	import PageWebGL from '$lib/components/ui/PageWebGL.svelte';
	import { MODULES } from '$lib/content/modules.js';
	import { ORDER, GROUP_OF } from '$lib/content/site.js';
	import { moduleTheme } from '$lib/content/themes.js';

	let { slug } = $props();
	const d = $derived(MODULES[slug]);
	const pos = $derived(ORDER.indexOf(slug));
	const prev = $derived(ORDER[(pos - 1 + ORDER.length) % ORDER.length]);
	const next = $derived(ORDER[(pos + 1) % ORDER.length]);

	const capIcons = ['layers', 'workflow', 'shield-check', 'refresh-cw'];
	const pat = ['pat-grid', 'pat-dots', 'pat-diagonal', 'pat-rings'];
</script>

<section class="relative isolate overflow-hidden pb-20 pt-32 sm:pt-40" style="--c: {d.c}">
	<div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
		<div
			class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(248,250,252,0.72)_0%,rgba(255,255,255,0.86)_75%)]"
		></div>
		<div
			class="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_75%_30%,#000_0%,transparent_75%)]"
		></div>
		<div
			class="absolute -top-40 right-[-10%] h-[700px] w-[700px] rounded-full blur-3xl"
			style="background: radial-gradient(circle, rgb({d.c} / 0.16), transparent 62%)"
		></div>
		<div
			class="absolute left-1/2 top-0 h-[400px] w-[800px] max-w-full -translate-x-1/2 rounded-full blur-[150px]"
			style="background: linear-gradient(to bottom, rgb({d.c} / 0.15), transparent)"
		></div>
	</div>
	{#key slug}
		<PageWebGL accent={moduleTheme(slug).hex} intensity={0.8} particleCount={800} />
	{/key}
	<div class="mx-auto max-w-[1320px] px-6 lg:px-10">
		<nav aria-label="Breadcrumb" class="flex items-center gap-2 text-[13px] text-slate-400">
			<a href="/" class="transition-colors hover:text-ink">Home</a><span class="text-slate-300">/</span>
			<a href="/platform/" class="transition-colors hover:text-ink">Platform</a><span
				class="text-slate-300">/</span
			>
			<span class="font-medium text-ink">{d.t}</span>
		</nav>

		<div class="mt-10 grid items-center gap-16 lg:grid-cols-5 lg:gap-12">
			<div class="lg:col-span-3">
				<span class="chip"
					><span class="h-1.5 w-1.5 rounded-full" style="background: rgb({d.c})"></span>{GROUP_OF[
						slug
					]}</span
				>
				<h1 class="mt-7 font-display text-ink">
					<span
						class="wdth-condensed block text-[clamp(2.5rem,6vw,4.9rem)] font-extrabold leading-[0.94] tracking-[-0.04em]"
						>{d.t}</span
					>
					<span
						class="mt-3 block text-[clamp(1.4rem,2.7vw,2.1rem)] font-extralight leading-[1.15] tracking-[-0.04em] text-slate-500"
						>{d.sub}</span
					>
				</h1>
				<p class="mt-8 max-w-[34rem] text-[17px] leading-[1.7] text-slate-600">{d.d}</p>
				<div class="mt-9 flex flex-wrap gap-3">
					<a href="/contact/" class="cta-primary group inline-flex h-12 px-7 text-[15px]"
						><span class="cta-glow"></span><span class="relative">See {d.t} on your data</span></a
					>
					<a
						href="/#modules"
						class="inline-flex h-12 items-center gap-2 rounded-full border border-slate-200/60 bg-white/80 px-6 text-[15px] font-medium text-slate-600 shadow-[0_20px_50px_rgba(8,112,184,0.05)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:text-ink hover:shadow-lg"
						>All eleven modules</a
					>
				</div>
			</div>
			<div class="lg:col-span-2">
				<div
					class="overflow-hidden rounded-[28px] border border-slate-200/60 bg-white/90 shadow-[0_20px_50px_rgba(8,112,184,0.05),0_40px_80px_-32px_rgba(1,43,97,0.25)] backdrop-blur"
				>
					<div class="flex items-center gap-2 border-b border-slate-100 px-6 py-4">
						<span class="h-2.5 w-2.5 rounded-full bg-slate-200"></span>
						<span class="h-2.5 w-2.5 rounded-full bg-slate-200"></span>
						<span class="h-2.5 w-2.5 rounded-full bg-slate-200"></span>
						<p class="ml-3 text-[12.5px] font-medium text-slate-500">{d.t}</p>
						<span
							class="ml-auto rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500"
							>Sample view</span
						>
					</div>
					<ul class="divide-y divide-slate-100">
						{#each d.sample as [stitle, meta, status]}
							<li class="flex items-center gap-4 px-6 py-5">
								<span
									class="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
									style="background: rgb({d.c} / 0.08); color: rgb({d.c}); box-shadow: inset 0 0 0 1px rgb({d.c} / 0.16)"
								>
									<SiteIcon name={d.icon} size={18} />
								</span>
								<div class="min-w-0 flex-1">
									<p class="truncate text-[14.5px] font-medium text-ink">{stitle}</p>
									<p class="truncate text-[12.5px] text-slate-400">{meta}</p>
								</div>
								<span
									class="shrink-0 rounded-full px-3 py-1 text-[11.5px] font-semibold"
									style="background: rgb({d.c} / 0.09); color: rgb({d.c})">{status}</span
								>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="border-y border-slate-200/60 bg-white/70 backdrop-blur-[2px]">
	<div class="mx-auto flex max-w-[1320px] flex-wrap items-center gap-3 px-6 py-8 lg:px-10">
		<span class="mr-2 text-[13px] font-semibold text-ink">In this module</span>
		{#each d.cap as c}
			<span class="chip">{c}</span>
		{/each}
	</div>
</section>

<section
	class="relative isolate overflow-hidden bg-white/70 py-24 backdrop-blur-[2px] sm:py-28"
	style="--c: {d.c}"
>
	<div class="mx-auto max-w-[1320px] px-6 lg:px-10">
		<div class="grid gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
			<div class="lg:sticky lg:top-28 lg:self-start">
				<div class="h-[2px] w-12 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500"></div>
				<h2
					class="mt-6 font-display text-[clamp(1.8rem,3.2vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.035em] text-ink"
				>
					What you get
				</h2>
				<p class="mt-4 text-[15.5px] leading-[1.7] text-slate-500">
					Configured to your policies and entities, running on the same employee record as every
					other module.
				</p>
			</div>
			<div class="grid gap-5 sm:grid-cols-2">
				{#each d.f as f, i}
					<article class="bento-card min-h-0">
						<div class="pat {pat[i % 4]}"></div>
						<div class="glow-corner"></div>
						<div class="icon-tile"><SiteIcon name={capIcons[i % 4]} size={22} /></div>
						<p class="mt-8 text-[17px] font-semibold leading-[1.45] tracking-[-0.01em] text-ink">
							{f}
						</p>
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>

<section class="border-t border-slate-200/60 bg-white/70 py-20 backdrop-blur-[2px]">
	<div class="mx-auto grid max-w-[1320px] gap-10 px-6 sm:grid-cols-3 lg:px-10">
		<div>
			<h2 class="font-display text-[19px] font-bold tracking-[-0.02em] text-ink">Who uses it</h2>
			<p class="mt-3 text-[15px] leading-[1.7] text-slate-600">{d.who}</p>
		</div>
		<div class="sm:border-l sm:border-slate-200/60 sm:pl-10">
			<h2 class="font-display text-[19px] font-bold tracking-[-0.02em] text-ink">
				What it replaces
			</h2>
			<p class="mt-3 text-[15px] leading-[1.7] text-slate-600">{d.replaces}</p>
		</div>
		<div class="sm:border-l sm:border-slate-200/60 sm:pl-10">
			<h2 class="font-display text-[19px] font-bold tracking-[-0.02em] text-ink">How it connects</h2>
			<p class="mt-3 text-[15px] leading-[1.7] text-slate-600">
				{d.t} shares the employee record with
				{#each d.connects as c, i}
					<a
						href="/modules/{c}/"
						class="font-medium text-indigo-600 underline decoration-indigo-200 underline-offset-4 transition-colors hover:text-indigo-700"
						>{MODULES[c].t}</a
					>{i < d.connects.length - 1 ? ', ' : ''}<wbr />
				{/each}
				, so data entered once is available to all of them.
			</p>
		</div>
	</div>
</section>

<section class="border-t border-slate-200/60 bg-white/70 py-24 backdrop-blur-[2px]">
	<div class="mx-auto grid max-w-[1320px] gap-12 px-6 lg:grid-cols-[1fr_1.7fr] lg:gap-16 lg:px-10">
		<h2
			class="font-display text-[clamp(1.8rem,3.2vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.035em] text-ink"
		>
			{d.t} questions
		</h2>
		<div class="border-t border-slate-200/60">
			<FaqList items={d.faq} />
		</div>
	</div>
</section>

<section class="border-t border-slate-200/60 bg-white/70 py-16 backdrop-blur-[2px]">
	<div class="mx-auto max-w-[1320px] px-6 lg:px-10">
		<div class="flex flex-wrap items-center justify-between gap-6">
			<p class="font-display text-[22px] font-semibold tracking-[-0.025em] text-ink">
				Continue through the platform
			</p>
			<div class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
				<a
					href="/modules/{prev}/"
					class="inline-flex h-11 max-w-full items-center gap-2 rounded-full border border-slate-200/60 bg-white px-5 text-[14px] font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-ink hover:shadow-lg"
					><SiteIcon name="arrow-left" size={16} /><span class="truncate">{MODULES[prev].t}</span></a
				>
				<a
					href="/modules/{next}/"
					class="inline-flex h-11 max-w-full items-center justify-end gap-2 rounded-full border border-slate-200/60 bg-white px-5 text-[14px] font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-ink hover:shadow-lg"
					><span class="truncate">{MODULES[next].t}</span><SiteIcon
						name="arrow-right"
						size={16}
					/></a
				>
			</div>
		</div>
		<div class="mt-8 flex flex-wrap gap-2">
			{#each ORDER as k}
				<a
					href="/modules/{k}/"
					class="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13.5px] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg {k ===
					slug
						? 'border-transparent bg-ink text-white'
						: 'border-slate-200/60 bg-white text-slate-600 hover:text-ink'}"
				>
					<span
						class="h-1.5 w-1.5 shrink-0 rounded-full"
						style="background: {k === slug ? '#3E8EF0' : `rgb(${MODULES[k].c})`}"></span
					>{MODULES[k].t}
				</a>
			{/each}
		</div>
	</div>
</section>
