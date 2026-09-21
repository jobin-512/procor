<script>
	import SiteIcon from '$lib/components/SiteIcon.svelte';
	import FaqList from '$lib/components/FaqList.svelte';
	import LeadForm from '$lib/components/LeadForm.svelte';
	import { MODULES } from '$lib/content/modules.js';
	import { ORDER, CONFIG } from '$lib/content/site.js';

	let { page, faqs = [] } = $props();

	const resolvedFaq = $derived(
		page.faq === 'all' ? faqs : (page.faq ?? []).map((i) => faqs[i]).filter(Boolean)
	);
	const tel = $derived(CONFIG.phone.replace(/\s/g, ''));
	const accents = ['0 99 215', '62 142 240', '124 58 237', '16 185 129', '1 43 97', '234 88 12'];
	const pats = ['pat-grid', 'pat-dots', 'pat-diagonal', 'pat-rings'];
	const anchorOf = (h) => 's-' + h.toLowerCase().replace(/[^a-z0-9]+/g, '-');
</script>

{#if page.s}
	<section class="border-y border-slate-200/60 bg-white/70 backdrop-blur-[2px]">
		<div class="mx-auto grid max-w-[1320px] gap-10 px-6 py-14 sm:grid-cols-3 lg:px-10">
			{#each page.s as [value, label, note], i}
				<div class={i ? 'sm:border-l sm:border-slate-200/60 sm:pl-10' : ''}>
					<p
						class="font-display text-[clamp(1.8rem,2.9vw,2.4rem)] font-semibold leading-none tracking-[-0.035em] text-ink"
					>
						{value}
					</p>
					<p class="mt-3 text-[15px] font-medium text-ink">{label}</p>
					<p class="mt-1 text-[13.5px] text-slate-500">{note}</p>
				</div>
			{/each}
		</div>
	</section>
{/if}

{#if page.b}
	<section class="relative isolate overflow-hidden bg-white/70 py-24 backdrop-blur-[2px] sm:py-28">
		<div class="mx-auto max-w-[1320px] px-6 lg:px-10">
			<div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
				{#each page.b as [icon, btitle, text], i}
					<article class="bento-card min-h-0" style="--c: {accents[i % 6]}">
						<div class="pat {pats[i % 4]}"></div>
						<div class="glow-corner"></div>
						<div class="icon-tile"><SiteIcon name={icon} size={22} /></div>
						<h2 class="bento-title mt-8 text-[22px]">{btitle}</h2>
						<p class="bento-copy">{text}</p>
					</article>
				{/each}
			</div>
			{#if page.note}
				<p
					class="mt-10 max-w-3xl rounded-2xl border border-slate-200/60 bg-white/80 p-6 text-[15px] leading-[1.7] text-slate-600 backdrop-blur"
				>
					{page.note}
				</p>
			{/if}
			{#if page.pills}
				<div
					class="mt-16 rounded-[28px] border border-slate-200/60 bg-white/85 p-8 shadow-[0_20px_50px_rgba(8,112,184,0.05)] backdrop-blur sm:p-10"
				>
					<p class="font-display text-[24px] font-bold tracking-[-0.03em] text-ink">
						Browse the modules
					</p>
					<p class="mt-2 max-w-xl text-[15px] leading-relaxed text-slate-500">
						Each module has its own page covering what it does, who uses it and what it replaces.
					</p>
					<div class="mt-7 flex flex-wrap gap-2">
						{#each ORDER as m}
							<a
								href="/modules/{m}/"
								class="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white px-4 py-2 text-[13.5px] font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-ink hover:shadow-lg"
							>
								<span class="h-1.5 w-1.5 rounded-full" style="background: rgb({MODULES[m].c})"
								></span>{MODULES[m].t}
							</a>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</section>
{/if}

{#if page.steps}
	<section class="border-t border-slate-200/60 bg-white/70 py-24 backdrop-blur-[2px]">
		<div class="mx-auto max-w-[1320px] px-6 lg:px-10">
			<h2
				class="font-display text-[clamp(1.8rem,3.2vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.035em] text-ink"
			>
				The sequence
			</h2>
			<ol class="mt-12 border-t border-slate-200/60">
				{#each page.steps as [stitle, when, text], i}
					<li
						class="grid gap-4 border-b border-slate-200/60 py-8 lg:grid-cols-[90px_260px_minmax(0,1fr)] lg:gap-10"
					>
						<span class="font-display text-[15px] font-bold text-indigo-600">
							{String(i + 1).padStart(2, '0')}
						</span>
						<div>
							<h3 class="text-[18px] font-semibold tracking-[-0.01em] text-ink">{stitle}</h3>
							<p class="mt-1 text-[13px] text-slate-400">{when}</p>
						</div>
						<p class="max-w-2xl text-[15.5px] leading-[1.75] text-slate-600">{text}</p>
					</li>
				{/each}
			</ol>
		</div>
	</section>
{/if}

{#if page.prose}
	<section class="border-t border-slate-200/60 bg-white/70 py-20 backdrop-blur-[2px]">
		<div class="mx-auto grid max-w-[1320px] gap-12 px-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16 lg:px-10">
			<nav class="lg:sticky lg:top-28 lg:self-start" aria-label="On this page">
				<p class="text-[13px] font-semibold text-ink">On this page</p>
				<ul class="mt-4 space-y-2.5">
					{#each page.prose as [h]}
						<li>
							<a
								href="#{anchorOf(h)}"
								class="text-[13.5px] text-slate-500 transition-colors hover:text-ink">{h}</a
							>
						</li>
					{/each}
				</ul>
				{#if page.updated}
					<p class="mt-8 text-[12.5px] text-slate-400">
						Last updated {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
					</p>
				{/if}
			</nav>
			<div class="max-w-3xl space-y-10">
				{#each page.prose as [h, p]}
					<div id={anchorOf(h)} class="scroll-mt-28">
						<h2 class="font-display text-[22px] font-bold tracking-[-0.025em] text-ink">{h}</h2>
						<p class="mt-4 text-[15.5px] leading-[1.8] text-slate-600">{p}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if}

{#if resolvedFaq.length}
	<section class="border-t border-slate-200/60 bg-white/70 py-24 backdrop-blur-[2px]">
		<div class="mx-auto grid max-w-[1320px] gap-12 px-6 lg:grid-cols-[1fr_1.7fr] lg:gap-16 lg:px-10">
			<div class="lg:sticky lg:top-28 lg:self-start">
				<h2
					class="font-display text-[clamp(1.8rem,3.2vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.035em] text-ink"
				>
					Questions
				</h2>
				<p class="mt-5 text-[15.5px] leading-[1.7] text-slate-500">
					Not covered here? Ask us and you will get a direct answer.
				</p>
				<a
					href="/contact/"
					class="mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
				>
					Talk to our team <SiteIcon name="arrow-right" size={16} />
				</a>
			</div>
			<div class="border-t border-slate-200/60">
				<FaqList items={resolvedFaq} />
			</div>
		</div>
	</section>
{/if}

{#if page.contact}
	<section
		id="contact-form-section"
		class="border-t border-slate-200/60 bg-white/70 py-20 backdrop-blur-[2px]"
	>
		<div class="mx-auto grid max-w-[1320px] gap-14 px-6 lg:grid-cols-[1.1fr_1fr] lg:px-10">
			<div>
				<h2 class="font-display text-[26px] font-bold tracking-[-0.03em] text-ink">
					Request a walkthrough
				</h2>
				<p class="mt-3 max-w-lg text-[15.5px] leading-[1.7] text-slate-500">
					The more you tell us, the more specific the session. Nothing here is shared outside our
					team.
				</p>
				<div class="mt-8">
					<LeadForm endpoint="/api/contact" variant="contact" idPrefix="c" />
				</div>
			</div>
			<div class="lg:pl-10">
				<div
					class="rounded-[28px] border border-slate-200/60 bg-white/85 p-8 shadow-[0_20px_50px_rgba(8,112,184,0.05)] backdrop-blur"
				>
					<h2 class="font-display text-[20px] font-bold tracking-[-0.025em] text-ink">
						Reach us directly
					</h2>
					<div class="mt-6 space-y-5 text-[14.5px] text-slate-600">
						<div>
							<p class="text-[12.5px] font-semibold uppercase tracking-wide text-slate-400">Office</p>
							<p class="mt-1.5">{CONFIG.address}</p>
						</div>
						<div>
							<p class="text-[12.5px] font-semibold uppercase tracking-wide text-slate-400">Phone</p>
							<p class="mt-1.5">
								<a href="tel:{tel}" class="transition-colors hover:text-ink">{CONFIG.phone}</a>
							</p>
						</div>
						<div>
							<p class="text-[12.5px] font-semibold uppercase tracking-wide text-slate-400">Sales</p>
							<p class="mt-1.5">
								<a href="mailto:{CONFIG.salesEmail}" class="transition-colors hover:text-ink"
									>{CONFIG.salesEmail}</a
								>
							</p>
						</div>
						<div>
							<p class="text-[12.5px] font-semibold uppercase tracking-wide text-slate-400">
								Response time
							</p>
							<p class="mt-1.5">One business day</p>
						</div>
					</div>
				</div>
				<div class="mt-5 rounded-[28px] border border-slate-200/60 bg-white/85 p-8 backdrop-blur">
					<h2 class="font-display text-[20px] font-bold tracking-[-0.025em] text-ink">
						What happens next
					</h2>
					<ol class="mt-5 space-y-4 text-[14.5px] leading-[1.6] text-slate-600">
						<li class="flex gap-3">
							<span
								class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-indigo-50 text-[12px] font-semibold text-indigo-600"
								>1</span
							>We reply within one business day to understand your setup.
						</li>
						<li class="flex gap-3">
							<span
								class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-indigo-50 text-[12px] font-semibold text-indigo-600"
								>2</span
							>A 30-minute walkthrough on your entities, policies and pay cycle.
						</li>
						<li class="flex gap-3">
							<span
								class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-indigo-50 text-[12px] font-semibold text-indigo-600"
								>3</span
							>A written proposal with scope, timeline and commercials.
						</li>
					</ol>
				</div>
			</div>
		</div>
	</section>
{/if}
