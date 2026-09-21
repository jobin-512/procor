<script>
	import Seo from '$lib/components/Seo.svelte';
	import SiteIcon from '$lib/components/SiteIcon.svelte';
	import FaqList from '$lib/components/FaqList.svelte';
	import LeadForm from '$lib/components/LeadForm.svelte';
	import HeroConstellation from '$lib/components/ui/HeroConstellation.svelte';
	import AnimatedBackground from '$lib/components/ui/AnimatedBackground.svelte';
	import ParticleField from '$lib/components/ui/ParticleField.svelte';
	import { FAQS } from '$lib/content/faqs.js';
	import { META } from '$lib/content/site.js';

	const [title, description, path] = META.home;

	const chart = [
		['Jan', 10, 48, 500],
		['Feb', 8, 50, 560],
		['Mar', 18, 52, 620],
		['Apr', 9, 55, 680],
		['May', 11, 56, 740],
		['Jun', 16, 58, 800],
		['Jul', 10, 60, 860],
		['Aug', 12, 62, 920],
		['Sep', 20, 66, 980]
	];
</script>

<Seo {title} {description} {path} faq={FAQS} />

<main id="top" tabindex="-1"><span id="main-content"></span>
	<!-- 2. ASYMMETRIC HERO -->
	<section class="relative isolate overflow-hidden pb-24 pt-32 sm:pt-40 lg:pb-32 lg:pt-44">
		<div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
			<div
				class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(248,250,252,0.72)_0%,rgba(255,255,255,0.86)_70%)]"
			></div>
			<!-- Motion background (like procorhrms.com): interactive constellation + drifting orbs -->
			<div class="absolute inset-0">
				<HeroConstellation particleCount={70} connectionDistance={110} />
			</div>
			<div class="absolute inset-0 opacity-70 dark:opacity-100">
				<AnimatedBackground
					colors={['#0063D7', '#3E8EF0', '#38bdf8']}
					orbCount={3}
					speed={1}
					blur={180}
				/>
			</div>
			<div
				class="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_72%_32%,#000_0%,transparent_75%)]"
			></div>
			<div
				class="absolute -top-48 right-[-12%] h-[780px] w-[780px] rounded-full bg-[radial-gradient(circle,rgba(0,99,215,0.17),transparent_62%)] blur-3xl"
			></div>
			<div
				class="absolute left-[-14%] top-[38%] h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(62,142,240,0.12),transparent_62%)] blur-3xl"
			></div>
			<div
				class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
			></div>
		</div>

		<div
			class="mx-auto grid max-w-[1320px] items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-10 xl:grid-cols-5 xl:gap-16"
		>
			<div class="xl:col-span-3">
				<h1 class="font-display text-ink">
					<span
						class="animate-rise block text-[clamp(2.1rem,4.4vw,3.5rem)] font-extralight leading-[1.06] tracking-[-0.045em]"
						>HR and payroll that hold up</span
					>
					<span
						class="wdth-condensed animate-rise block text-[clamp(2.4rem,6.2vw,5.1rem)] font-extrabold leading-[0.95] tracking-[-0.04em] [animation-delay:90ms]"
						>across every entity,</span
					>
					<span
						class="wdth-condensed animate-rise block text-[clamp(2.4rem,6.2vw,5.1rem)] font-extrabold leading-[0.95] tracking-[-0.04em] [animation-delay:150ms]"
						>state and pay cycle.</span
					>
				</h1>

				<p
					class="animate-rise mt-8 max-w-[36rem] text-[17px] leading-[1.7] text-slate-600 [animation-delay:260ms] sm:text-lg"
				>
					Procor HRMS runs core HR, attendance, leave, payroll and exits on a single employee
					record, with PF, ESI, professional tax and TDS calculated inside the pay run. Built for
					companies operating across multiple states and legal entities in India.
				</p>

				<div class="animate-rise relative mt-9 max-w-xl [animation-delay:340ms]">
					<p class="text-[13px] font-semibold text-ink">See it on your own policies</p>
					<div class="mt-3">
						<LeadForm endpoint="/api/demo" variant="demo" idPrefix="demo" />
					</div>
				</div>

				<div
					class="animate-rise mt-5 flex flex-wrap items-center gap-x-7 gap-y-3 text-[13.5px] text-slate-500 [animation-delay:420ms]"
				>
					<span class="inline-flex items-center gap-2"
						><SiteIcon name="shield-check" size={16} class="text-indigo-600" />50+ companies, 10,000+
						users in India</span
					>
					<span class="inline-flex items-center gap-2"
						><SiteIcon name="building-2" size={16} class="text-cyan-600" />Running payroll in India
						since 2018</span
					>
				</div>
			</div>

			<div class="xl:col-span-2">
				<div
					class="relative mx-auto h-[680px] w-full max-w-[520px]"
					role="img"
					aria-label="Preview of the Procor HRMS dashboard showing payroll distribution, a live activity stream and an onboarding notification"
				>
					<div
						aria-hidden="true"
						class="pointer-events-none absolute -right-24 top-6 h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(0,99,215,0.30),transparent_65%)] blur-2xl"
					></div>
					<div
						aria-hidden="true"
						class="pointer-events-none absolute -left-20 bottom-0 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(62,142,240,0.28),transparent_65%)] blur-2xl"
					></div>

					<!-- Panel B: Payroll distribution -->
					<div class="animate-rise absolute right-0 top-16 z-10 w-[94%] [animation-delay:280ms]">
						<div
							class="rounded-[28px] border border-slate-200/60 bg-white/95 p-6 pt-8 shadow-[0_20px_50px_rgba(8,112,184,0.05),0_50px_90px_-30px_rgba(15,23,42,0.22)]"
						>
							<div class="flex items-start justify-between gap-3">
								<div class="flex items-center gap-3">
									<div
										class="grid h-9 w-9 place-items-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-100"
									>
										<SiteIcon name="wallet" size={16} />
									</div>
									<div>
										<p class="text-[13px] font-semibold text-ink">Payroll distribution</p>
										<p class="text-[11px] text-slate-400">September 2026 cycle</p>
									</div>
								</div>
								<div
									class="flex shrink-0 rounded-full border border-slate-200/70 bg-slate-50 p-0.5 text-[11px] font-medium"
								>
									<span class="rounded-full px-2.5 py-1 text-slate-400">Qtr</span>
									<span
										class="rounded-full bg-white px-2.5 py-1 text-ink shadow-[0_1px_3px_rgba(15,23,42,0.1)]"
										>YTD</span
									>
								</div>
							</div>

							<div class="mt-6 flex items-end justify-between gap-3">
								<div>
									<p
										class="font-display text-[34px] font-semibold leading-none tracking-[-0.03em] text-ink"
									>
										₹54.82 Cr
									</p>
									<p class="mt-2 text-[12px] text-slate-500">Net disbursed to 1,248 employees</p>
								</div>
								<span
									class="inline-flex animate-[float_5s_ease-in-out_infinite] items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-600 shadow-[0_10px_24px_-12px_rgba(16,185,129,0.8)] ring-1 ring-inset ring-emerald-100"
								>
									<SiteIcon name="trending-up" size={12} />3.4%
								</span>
							</div>

							<div class="mt-4 flex items-center gap-4 text-[11px] text-slate-500">
								<span class="inline-flex items-center gap-1.5"
									><span
										class="h-2 w-2 rounded-[3px] bg-gradient-to-t from-indigo-600 to-indigo-400"
									></span>Fixed pay</span
								>
								<span class="inline-flex items-center gap-1.5"
									><span
										class="h-2 w-2 rounded-[3px] bg-gradient-to-t from-cyan-500 to-cyan-300"
									></span>Variable pay</span
								>
							</div>

							<div class="relative mt-6">
								<div aria-hidden="true" class="absolute inset-x-0 top-0 flex h-36 flex-col justify-between">
									<div class="border-t border-dashed border-slate-200/80"></div>
									<div class="border-t border-dashed border-slate-200/80"></div>
									<div class="border-t border-dashed border-slate-200/80"></div>
									<div class="border-t border-slate-200/80"></div>
								</div>
								<div class="relative flex items-end gap-2">
									{#each chart as [m, v, f, delay]}
										<div class="relative flex flex-1 flex-col items-center gap-2">
											{#if m === 'Sep'}
												<span
													class="absolute right-full top-2 z-10 mr-2 animate-[float_5s_ease-in-out_infinite] whitespace-nowrap rounded-lg bg-ink px-2 py-1 text-[10px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(15,23,42,0.5)]"
													>₹54.82 Cr</span
												>
											{/if}
											<div
												class="animate-grow flex h-36 w-full origin-bottom flex-col justify-end gap-[3px]"
												style="animation-delay:{delay}ms"
											>
												<div
													class="w-full rounded-[5px] {m === 'Sep'
														? 'bg-gradient-to-t from-cyan-500 to-cyan-300 shadow-[0_0_18px_-2px_rgba(62,142,240,0.6)]'
														: 'bg-gradient-to-t from-cyan-400/45 to-cyan-300/35'}"
													style="height:{v}%"
												></div>
												<div
													class="w-full rounded-[5px] {m === 'Sep'
														? 'bg-gradient-to-t from-indigo-600 to-indigo-400 shadow-[0_10px_24px_-6px_rgba(0,99,215,0.65)]'
														: 'bg-gradient-to-t from-indigo-500/45 to-indigo-400/30'}"
													style="height:{f}%"
												></div>
											</div>
											<span
												class="text-[10px] {m === 'Sep'
													? 'font-semibold text-ink'
													: 'font-medium text-slate-400'}">{m}</span
											>
										</div>
									{/each}
								</div>
							</div>
						</div>
					</div>

					<!-- Panel A: Glass activity stream -->
					<div
						class="animate-rise absolute bottom-2 left-0 z-20 w-[80%] [animation-delay:460ms] sm:w-[64%] xl:-left-12"
					>
						<div
							class="rounded-[24px] border border-white/70 bg-white/55 p-5 shadow-[0_20px_50px_rgba(8,112,184,0.08),0_36px_70px_-28px_rgba(15,23,42,0.30)] ring-1 ring-slate-900/[0.04] backdrop-blur-2xl"
						>
							<div class="flex items-center justify-between">
								<p class="text-[13px] font-semibold text-ink">Live activity</p>
								<span class="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-600">
									<span class="relative flex h-2 w-2">
										<span
											class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70"
										></span>
										<span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
									</span>
									Streaming
								</span>
							</div>
							<ul class="mt-4 space-y-3.5">
								<li class="flex items-center gap-3">
									<span
										class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-[11px] font-semibold text-white ring-2 ring-white"
										>AS</span
									>
									<div class="min-w-0 flex-1">
										<p class="truncate text-[12.5px] text-ink">
											<span class="font-semibold">Ananya S.</span> clocked in
										</p>
										<p class="truncate text-[11px] text-slate-500">Gurugram office</p>
									</div>
									<span class="text-[10px] tabular-nums text-slate-400">09:02</span>
								</li>
								<li class="flex items-center gap-3">
									<span
										class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 text-[11px] font-semibold text-white ring-2 ring-white"
										>RK</span
									>
									<div class="min-w-0 flex-1">
										<p class="truncate text-[12.5px] text-ink">
											<span class="font-semibold">Rohan K.</span> leave approved
										</p>
										<p class="truncate text-[11px] text-slate-500">3 days of casual leave</p>
									</div>
									<span class="text-[10px] tabular-nums text-slate-400">08:57</span>
								</li>
								<li class="flex items-center gap-3">
									<span
										class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-indigo-600 ring-1 ring-inset ring-indigo-100"
									>
										<SiteIcon name="file-text" size={16} />
									</span>
									<div class="min-w-0 flex-1">
										<p class="truncate text-[12.5px] font-semibold text-ink">Payslips published</p>
										<p class="truncate text-[11px] text-slate-500">September cycle, all entities</p>
									</div>
									<span class="text-[10px] tabular-nums text-slate-400">08:40</span>
								</li>
								<li class="flex items-center gap-3">
									<span
										class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-amber-500 to-orange-400 text-[11px] font-semibold text-white ring-2 ring-white"
										>MI</span
									>
									<div class="min-w-0 flex-1">
										<p class="truncate text-[12.5px] text-ink">
											<span class="font-semibold">Meera I.</span> filed a travel claim
										</p>
										<p class="truncate text-[11px] text-slate-500">₹4,850 awaiting approval</p>
									</div>
									<span class="text-[10px] tabular-nums text-slate-400">08:31</span>
								</li>
							</ul>
						</div>
					</div>

					<!-- Panel C: Floating notification -->
					<div
						class="animate-rise absolute left-0 top-6 z-30 [animation-delay:760ms] sm:-left-3 xl:-left-8"
					>
						<div class="animate-float relative">
							<div
								aria-hidden="true"
								class="absolute -inset-x-3 -bottom-8 top-6 rounded-[28px] bg-[radial-gradient(ellipse_at_center,rgba(0,99,215,0.50),rgba(62,142,240,0.28)_45%,transparent_72%)] blur-2xl"
							></div>
							<div
								class="relative flex max-w-[300px] items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 py-3 pl-3 pr-5 text-white shadow-[0_18px_40px_-10px_rgba(0,99,215,0.70),0_6px_14px_-6px_rgba(62,142,240,0.55)] ring-1 ring-white/20 sm:max-w-none"
							>
								<span
									class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15 ring-1 ring-inset ring-white/25"
								>
									<SiteIcon name="user-check" size={20} />
								</span>
								<div>
									<p class="text-[13.5px] font-semibold leading-snug">
										Onboarding Complete: 12 New Members 🎉
									</p>
									<p class="mt-0.5 text-[11px] text-white/75">Documents verified, assets assigned</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section
		aria-label="Procor HRMS at a glance"
		class="border-y border-slate-200/60 bg-white/70 backdrop-blur-[2px]"
	>
		<div
			class="mx-auto grid max-w-[1320px] gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-10"
		>
			<div>
				<p
					class="font-display text-[30px] font-semibold leading-none tracking-[-0.035em] text-ink"
				>
					100+
				</p>
				<p class="mt-2.5 text-[14px] text-slate-500">companies live on the platform</p>
			</div>
			<div class="lg:border-l lg:border-slate-200/60 lg:pl-10">
				<p
					class="font-display text-[30px] font-semibold leading-none tracking-[-0.035em] text-ink"
				>
					10,000+
				</p>
				<p class="mt-2.5 text-[14px] text-slate-500">users across those companies</p>
			</div>
			<div class="lg:border-l lg:border-slate-200/60 lg:pl-10">
				<p
					class="font-display text-[30px] font-semibold leading-none tracking-[-0.035em] text-ink"
				>
					Since 2018
				</p>
				<p class="mt-2.5 text-[14px] text-slate-500">running payroll in India</p>
			</div>
			<div class="lg:border-l lg:border-slate-200/60 lg:pl-10">
				<p
					class="font-display text-[30px] font-semibold leading-none tracking-[-0.035em] text-ink"
				>
					Pan India
				</p>
				<p class="mt-2.5 text-[14px] text-slate-500">professional tax handled</p>
			</div>
		</div>
	</section>

	<!-- 3. BENTO CAPABILITY MATRIX -->
	<section
		id="modules"
		class="relative isolate scroll-mt-24 overflow-hidden bg-white/70 py-28 backdrop-blur-[2px] sm:py-36"
	>
		<div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
			<div class="absolute inset-0">
				<ParticleField count={40} speed={0.4} connectionDistance={100} />
			</div>
			<div
				class="absolute -left-40 top-24 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(0,99,215,0.07),transparent_62%)] blur-3xl"
			></div>
			<div
				class="absolute -right-40 bottom-10 h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(62,142,240,0.08),transparent_62%)] blur-3xl"
			></div>
		</div>

		<div class="mx-auto max-w-[1320px] px-6 lg:px-10">
			<div class="grid gap-10 lg:grid-cols-12 lg:items-end">
				<h2 class="font-display text-ink lg:col-span-8">
					<span
						class="block text-[clamp(2.2rem,4.6vw,3.9rem)] font-extralight leading-[1.02] tracking-[-0.045em]"
						>Eleven modules.</span
					>
					<span
						class="wdth-condensed block text-[clamp(2.6rem,6vw,5.1rem)] font-extrabold leading-[0.95] tracking-[-0.04em]"
						>One employee record.</span
					>
				</h2>
				<p class="max-w-md text-[17px] leading-[1.7] text-slate-600 lg:col-span-4 lg:pb-2">
					Deploy all eleven or start with payroll and attendance. Every module writes to the same
					record, so an approved leave updates attendance, attendance feeds payroll, and an exit
					closes out assets and settlement without anyone re-entering data.
				</p>
			</div>

			<div class="mt-20 space-y-24 sm:mt-28">
				<!-- Workforce Core -->
				<div
					id="workforce-core"
					class="grid scroll-mt-28 gap-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-12"
				>
					<div class="lg:sticky lg:top-28 lg:self-start">
						<div class="h-[2px] w-12 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500"></div>
						<h3
							class="mt-5 font-display text-[28px] font-semibold leading-tight tracking-[-0.03em] text-ink"
						>
							Workforce Core
						</h3>
						<p class="mt-3 text-[15px] leading-relaxed text-slate-500">
							The records, time and equipment every other process depends on.
						</p>
						<ul class="mt-6 hidden space-y-2 lg:block">
							<li>
								<a
									href="/modules/core-hr/"
									class="inline-flex items-center gap-2.5 text-[13.5px] text-slate-500 transition-colors hover:text-ink"
									><span class="h-1.5 w-1.5 rounded-full bg-[#0063D7]"></span>Core HR</a
								>
							</li>
							<li>
								<a
									href="/modules/attendance/"
									class="inline-flex items-center gap-2.5 text-[13.5px] text-slate-500 transition-colors hover:text-ink"
									><span class="h-1.5 w-1.5 rounded-full bg-[#3E8EF0]"></span>Attendance</a
								>
							</li>
							<li>
								<a
									href="/modules/leave/"
									class="inline-flex items-center gap-2.5 text-[13.5px] text-slate-500 transition-colors hover:text-ink"
									><span class="h-1.5 w-1.5 rounded-full bg-[#10B981]"></span>Leave</a
								>
							</li>
							<li>
								<a
									href="/modules/assets/"
									class="inline-flex items-center gap-2.5 text-[13.5px] text-slate-500 transition-colors hover:text-ink"
									><span class="h-1.5 w-1.5 rounded-full bg-[#D97706]"></span>Assets</a
								>
							</li>
						</ul>
					</div>

					<div class="grid grid-cols-1 gap-5 md:auto-rows-[minmax(250px,auto)] md:grid-cols-3">
						<a
							href="/modules/core-hr/"
							id="core-hr"
							class="bento-card scroll-mt-28 md:col-span-2"
							style="--c: 0 99 215"
						>
							<div class="pat pat-grid"></div>
							<div class="glow-corner"></div>
							<div class="grid h-full gap-8 sm:grid-cols-2">
								<div class="flex flex-col">
									<div class="icon-tile"><SiteIcon name="users-round" size={22} /></div>
									<div class="mt-10 sm:mt-auto">
										<h4 class="bento-title">Core HR</h4>
										<p class="bento-copy">
											A single verified employee record that every module reads from, so data is
											entered once and trusted everywhere.
										</p>
									</div>
								</div>
								<div aria-hidden="true" class="flex flex-col justify-center">
									<div class="mini-panel p-4">
										<div class="flex items-center gap-3">
											<span
												class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-xs font-semibold text-white"
												>AS</span
											>
											<div class="min-w-0">
												<p class="truncate text-sm font-semibold text-ink">Ananya Sharma</p>
												<p class="truncate text-xs text-slate-400">Senior Analyst, Finance</p>
											</div>
											<span
												class="ml-auto rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 ring-1 ring-inset ring-emerald-100"
												>Active</span
											>
										</div>
										<dl class="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-slate-100 pt-4 text-xs">
											<div>
												<dt class="text-slate-400">Employee ID</dt><dd
													class="mt-0.5 font-medium tabular-nums text-ink">EMP-10482</dd
												>
											</div>
											<div>
												<dt class="text-slate-400">Reports to</dt><dd
													class="mt-0.5 font-medium text-ink">Vikram Rao</dd
												>
											</div>
											<div>
												<dt class="text-slate-400">Location</dt><dd
													class="mt-0.5 font-medium text-ink">Gurugram</dd
												>
											</div>
											<div>
												<dt class="text-slate-400">Joined</dt><dd
													class="mt-0.5 font-medium tabular-nums text-ink">14 Mar 2022</dd
												>
											</div>
										</dl>
									</div>
									<div class="mt-3 flex flex-wrap items-center gap-1.5">
										<span class="mr-1 text-[11px] text-slate-400">Synced with</span>
										<span class="chip"><span class="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>Payroll</span>
										<span class="chip"><span class="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>Attendance</span>
										<span class="chip"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>Leave</span>
									</div>
								</div>
							</div>
						</a>

						<a
							href="/modules/attendance/"
							id="attendance"
							class="bento-card scroll-mt-28 md:row-span-2"
							style="--c: 62 142 240"
						>
							<div class="pat pat-dots"></div>
							<div class="glow-corner"></div>
							<div class="icon-tile"><SiteIcon name="fingerprint" size={22} /></div>
							<div class="mt-8">
								<h4 class="bento-title">Attendance</h4>
								<p class="bento-copy">
									Shift schedules, clock-ins and overtime captured as they happen and passed
									straight to payroll.
								</p>
							</div>
							<div aria-hidden="true" class="mt-auto pt-8">
								<div class="mini-panel p-4">
									<div class="flex items-center justify-between gap-2 text-[11px]">
										<span class="font-semibold text-ink">This week</span>
										<span class="text-slate-400">General shift</span>
									</div>
									<div class="mt-4 space-y-3">
										<div class="flex items-center gap-3">
											<span class="w-7 text-[10px] font-medium text-slate-400">Mon</span>
											<div class="relative h-2 flex-1 rounded-full bg-slate-100">
												<div
													class="absolute inset-y-0 left-[8%] right-[14%] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
												></div>
											</div>
										</div>
										<div class="flex items-center gap-3">
											<span class="w-7 text-[10px] font-medium text-slate-400">Tue</span>
											<div class="relative h-2 flex-1 rounded-full bg-slate-100">
												<div
													class="absolute inset-y-0 left-[6%] right-[12%] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
												></div>
											</div>
										</div>
										<div class="flex items-center gap-3">
											<span class="w-7 text-[10px] font-medium text-slate-400">Wed</span>
											<div class="relative h-2 flex-1 rounded-full bg-slate-100">
												<div
													class="absolute inset-y-0 left-[10%] right-[16%] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
												></div>
											</div>
										</div>
										<div class="flex items-center gap-3">
											<span class="w-7 text-[10px] font-medium text-slate-400">Thu</span>
											<div class="relative h-2 flex-1 rounded-full bg-slate-100">
												<div
													class="absolute inset-y-0 left-[7%] right-[14%] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
												></div>
												<div
													class="absolute inset-y-0 left-[88%] right-[2%] rounded-full bg-cyan-300 ring-2 ring-cyan-100"
												></div>
											</div>
										</div>
										<div class="flex items-center gap-3">
											<span class="w-7 text-[10px] font-semibold text-ink">Fri</span>
											<div class="relative h-2 flex-1 rounded-full bg-slate-100">
												<div
													class="absolute inset-y-0 left-[8%] right-[46%] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
												></div>
												<span
													class="absolute left-[54%] top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-cyan-500 shadow-[0_0_0_4px_rgba(62,142,240,0.2)]"
												></span>
											</div>
										</div>
									</div>
									<div
										class="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px]"
									>
										<span class="text-slate-500">Overtime sent to payroll</span>
										<span class="font-semibold tabular-nums text-ink">2h 15m</span>
									</div>
								</div>
							</div>
						</a>

						<a href="/modules/leave/" id="leave" class="bento-card scroll-mt-28" style="--c: 16 185 129">
							<div class="pat pat-diagonal"></div>
							<div class="glow-corner"></div>
							<div class="icon-tile"><SiteIcon name="calendar-range" size={22} /></div>
							<div class="mt-auto pt-12">
								<h4 class="bento-title">Leave</h4>
								<p class="bento-copy">
									Policy-driven balances that accrue, carry forward and route for approval without
									manual tracking.
								</p>
							</div>
						</a>

						<a href="/modules/assets/" id="assets" class="bento-card scroll-mt-28" style="--c: 217 119 6">
							<div class="pat pat-rings"></div>
							<div class="glow-corner"></div>
							<div class="icon-tile"><SiteIcon name="laptop" size={22} /></div>
							<div class="mt-auto pt-12">
								<h4 class="bento-title">Assets</h4>
								<p class="bento-copy">
									Every laptop, phone and access card tracked from issue to return, with custody
									tied to the employee.
								</p>
							</div>
						</a>
					</div>
				</div>

				<!-- Talent & Growth -->
				<div
					id="talent-growth"
					class="grid scroll-mt-28 gap-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-12"
				>
					<div class="lg:sticky lg:top-28 lg:self-start">
						<div class="h-[2px] w-12 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500"></div>
						<h3
							class="mt-5 font-display text-[28px] font-semibold leading-tight tracking-[-0.03em] text-ink"
						>
							Talent &amp; Growth
						</h3>
						<p class="mt-3 text-[15px] leading-relaxed text-slate-500">
							Hiring, first days and performance, connected from requisition to review.
						</p>
						<ul class="mt-6 hidden space-y-2 lg:block">
							<li>
								<a
									href="/modules/recruitment/"
									class="inline-flex items-center gap-2.5 text-[13.5px] text-slate-500 transition-colors hover:text-ink"
									><span class="h-1.5 w-1.5 rounded-full bg-[#7C3AED]"></span>Recruitment</a
								>
							</li>
							<li>
								<a
									href="/modules/onboarding/"
									class="inline-flex items-center gap-2.5 text-[13.5px] text-slate-500 transition-colors hover:text-ink"
									><span class="h-1.5 w-1.5 rounded-full bg-[#0284C7]"></span>Onboarding</a
								>
							</li>
							<li>
								<a
									href="/modules/performance/"
									class="inline-flex items-center gap-2.5 text-[13.5px] text-slate-500 transition-colors hover:text-ink"
									><span class="h-1.5 w-1.5 rounded-full bg-[#E11D48]"></span>Performance</a
								>
							</li>
						</ul>
					</div>

					<div class="grid grid-cols-1 gap-5 md:auto-rows-[minmax(250px,auto)] md:grid-cols-3">
						<a
							href="/modules/recruitment/"
							id="recruitment"
							class="bento-card scroll-mt-28 md:row-span-2"
							style="--c: 124 58 237"
						>
							<div class="pat pat-dots"></div>
							<div class="glow-corner"></div>
							<div class="icon-tile"><SiteIcon name="user-search" size={22} /></div>
							<div class="mt-8">
								<h4 class="bento-title">Recruitment</h4>
								<p class="bento-copy">
									Raise requisitions for new headcount or replacements and move every candidate
									through one shared pipeline.
								</p>
							</div>
							<div aria-hidden="true" class="mt-auto pt-8">
								<div class="mini-panel p-4">
									<div class="flex items-center justify-between text-[11px]">
										<span class="font-semibold text-ink">Senior Analyst, Finance</span>
										<span class="text-slate-400">Open</span>
									</div>
									<div class="mt-4 space-y-3">
										<div>
											<div class="flex justify-between text-[11px]">
												<span class="text-slate-500">Applied</span><span
													class="font-semibold tabular-nums text-ink">184</span
												>
											</div>
											<div class="mt-1.5 h-1.5 rounded-full bg-slate-100">
												<div
													class="h-full w-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
												></div>
											</div>
										</div>
										<div>
											<div class="flex justify-between text-[11px]">
												<span class="text-slate-500">Screened</span><span
													class="font-semibold tabular-nums text-ink">62</span
												>
											</div>
											<div class="mt-1.5 h-1.5 rounded-full bg-slate-100">
												<div
													class="h-full w-[56%] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
												></div>
											</div>
										</div>
										<div>
											<div class="flex justify-between text-[11px]">
												<span class="text-slate-500">Interviewing</span><span
													class="font-semibold tabular-nums text-ink">21</span
												>
											</div>
											<div class="mt-1.5 h-1.5 rounded-full bg-slate-100">
												<div
													class="h-full w-[28%] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
												></div>
											</div>
										</div>
										<div>
											<div class="flex justify-between text-[11px]">
												<span class="text-slate-500">Offer</span><span
													class="font-semibold tabular-nums text-ink">4</span
												>
											</div>
											<div class="mt-1.5 h-1.5 rounded-full bg-slate-100">
												<div
													class="h-full w-[10%] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
												></div>
											</div>
										</div>
									</div>
									<div class="mt-4 flex flex-wrap gap-1.5 border-t border-slate-100 pt-3">
										<span class="chip"
											><span class="h-1.5 w-1.5 rounded-full bg-violet-500"></span>New headcount</span
										>
										<span class="chip"
											><span class="h-1.5 w-1.5 rounded-full bg-slate-400"></span>Replacement
											hire</span
										>
									</div>
								</div>
							</div>
						</a>

						<a
							href="/modules/onboarding/"
							id="onboarding"
							class="bento-card scroll-mt-28 md:col-span-2"
							style="--c: 2 132 199"
						>
							<div class="pat pat-rings"></div>
							<div class="glow-corner"></div>
							<div class="icon-tile"><SiteIcon name="rocket" size={22} /></div>
							<div class="mt-8">
								<h4 class="bento-title">Onboarding</h4>
								<p class="bento-copy">
									A signed offer triggers documents, asset requests and day-one tasks, so new
									joiners are productive from their first login.
								</p>
							</div>
							<ol aria-label="Example onboarding progress" class="mt-auto grid grid-cols-4 gap-2 pt-8">
								<li>
									<div class="flex items-center gap-2">
										<span
											class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-[0_6px_14px_-4px_rgba(0,99,215,0.55)]"
											><SiteIcon name="check" size={14} /></span
										>
										<span
											class="h-[2px] flex-1 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400"
										></span>
									</div>
									<p class="mt-3 text-[12px] font-semibold leading-tight text-ink">Offer signed</p>
									<p class="mt-0.5 text-[11px] text-slate-400">7 days before</p>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<span
											class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-[0_6px_14px_-4px_rgba(0,99,215,0.55)]"
											><SiteIcon name="check" size={14} /></span
										>
										<span
											class="h-[2px] flex-1 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400"
										></span>
									</div>
									<p class="mt-3 text-[12px] font-semibold leading-tight text-ink">
										Documents verified
									</p>
									<p class="mt-0.5 text-[11px] text-slate-400">3 days before</p>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<span
											class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-[0_6px_14px_-4px_rgba(0,99,215,0.55)]"
											><SiteIcon name="check" size={14} /></span
										>
										<span class="h-[2px] flex-1 rounded-full bg-slate-200"></span>
									</div>
									<p class="mt-3 text-[12px] font-semibold leading-tight text-ink">Assets issued</p>
									<p class="mt-0.5 text-[11px] text-slate-400">1 day before</p>
								</li>
								<li>
									<div class="flex items-center">
										<span
											class="grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-sky-500 bg-white shadow-[0_0_0_5px_rgba(2,132,199,0.12)]"
											><span class="h-2 w-2 rounded-full bg-sky-500"></span></span
										>
									</div>
									<p class="mt-3 text-[12px] font-semibold leading-tight text-ink">Day-one plan</p>
									<p class="mt-0.5 text-[11px] text-sky-600">Today</p>
								</li>
							</ol>
						</a>

						<a
							href="/modules/performance/"
							id="performance"
							class="bento-card scroll-mt-28 md:col-span-2"
							style="--c: 225 29 72"
						>
							<div class="pat pat-grid"></div>
							<div class="glow-corner"></div>
							<div class="grid h-full gap-8 sm:grid-cols-[1fr_1.05fr] sm:items-end">
								<div class="flex h-full flex-col">
									<div class="icon-tile"><SiteIcon name="target" size={22} /></div>
									<div class="mt-10 sm:mt-auto">
										<h4 class="bento-title">Performance</h4>
										<p class="bento-copy">
											Goals and review cycles that connect individual work to company objectives,
											with ratings ready for appraisal.
										</p>
									</div>
								</div>
								<div aria-hidden="true" class="mini-panel p-4">
									<div class="flex items-center justify-between text-[11px]">
										<span class="font-semibold text-ink">Q3 goals</span>
										<span class="text-slate-400">Review closes in 9 days</span>
									</div>
									<div class="mt-4 space-y-3.5">
										<div>
											<div class="flex justify-between text-[11.5px]">
												<span class="text-slate-600">Grow enterprise accounts</span><span
													class="font-semibold tabular-nums text-ink">82%</span
												>
											</div>
											<div class="mt-1.5 h-1.5 rounded-full bg-slate-100">
												<div
													class="h-full w-[82%] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
												></div>
											</div>
										</div>
										<div>
											<div class="flex justify-between text-[11.5px]">
												<span class="text-slate-600">Reduce attrition in operations</span><span
													class="font-semibold tabular-nums text-ink">64%</span
												>
											</div>
											<div class="mt-1.5 h-1.5 rounded-full bg-slate-100">
												<div
													class="h-full w-[64%] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
												></div>
											</div>
										</div>
										<div>
											<div class="flex justify-between text-[11.5px]">
												<span class="text-slate-600">Close the hiring plan</span><span
													class="font-semibold tabular-nums text-ink">91%</span
												>
											</div>
											<div class="mt-1.5 h-1.5 rounded-full bg-slate-100">
												<div
													class="h-full w-[91%] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
												></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>

				<!-- Finance & Operations -->
				<div
					id="finance-operations"
					class="grid scroll-mt-28 gap-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-12"
				>
					<div class="lg:sticky lg:top-28 lg:self-start">
						<div class="h-[2px] w-12 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500"></div>
						<h3
							class="mt-5 font-display text-[28px] font-semibold leading-tight tracking-[-0.03em] text-ink"
						>
							Finance &amp; Operations
						</h3>
						<p class="mt-3 text-[15px] leading-relaxed text-slate-500">
							Pay, claims, exits and employee service, reconciled against the same data.
						</p>
						<ul class="mt-6 hidden space-y-2 lg:block">
							<li>
								<a
									href="/modules/payroll/"
									class="inline-flex items-center gap-2.5 text-[13.5px] text-slate-500 transition-colors hover:text-ink"
									><span class="h-1.5 w-1.5 rounded-full bg-[#2563EB]"></span>Payroll</a
								>
							</li>
							<li>
								<a
									href="/modules/reimbursement/"
									class="inline-flex items-center gap-2.5 text-[13.5px] text-slate-500 transition-colors hover:text-ink"
									><span class="h-1.5 w-1.5 rounded-full bg-[#C026D3]"></span>Reimbursement &amp;
									Expenses</a
								>
							</li>
							<li>
								<a
									href="/modules/offboarding/"
									class="inline-flex items-center gap-2.5 text-[13.5px] text-slate-500 transition-colors hover:text-ink"
									><span class="h-1.5 w-1.5 rounded-full bg-[#475569]"></span>Offboarding</a
								>
							</li>
							<li>
								<a
									href="/modules/helpdesk/"
									class="inline-flex items-center gap-2.5 text-[13.5px] text-slate-500 transition-colors hover:text-ink"
									><span class="h-1.5 w-1.5 rounded-full bg-[#EA580C]"></span>Helpdesk</a
								>
							</li>
						</ul>
					</div>

					<div class="grid grid-cols-1 gap-5 md:auto-rows-[minmax(250px,auto)] md:grid-cols-3">
						<a
							href="/modules/payroll/"
							id="payroll"
							class="bento-card scroll-mt-28 md:col-span-2 md:row-span-2"
							style="--c: 1 43 97"
						>
							<div class="pat pat-dots"></div>
							<div class="glow-corner"></div>
							<div
								aria-hidden="true"
								class="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(135deg,rgba(0,99,215,0.05)_0%,transparent_45%,rgba(62,142,240,0.06)_100%)]"
							></div>
							<div
								aria-hidden="true"
								class="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent"
							></div>

							<div class="grid h-full gap-10 sm:grid-cols-2">
								<div class="flex flex-col">
									<div class="icon-tile"><SiteIcon name="wallet" size={22} /></div>
									<div class="mt-10 sm:mt-auto">
										<h4 class="bento-title text-[30px]">Payroll</h4>
										<p class="bento-copy">
											Run compliant payroll in a single cycle, with statutory deductions and
											variable pay calculated alongside attendance, leave and claims.
										</p>
										<div class="mt-6 flex flex-wrap gap-1.5">
											<span class="chip">PF</span>
											<span class="chip">ESI</span>
											<span class="chip">PT</span>
											<span class="chip">TDS</span>
											<span class="chip"
												><span class="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>Variable pay</span
											>
										</div>
									</div>
								</div>

								<div aria-hidden="true" class="flex flex-col justify-center">
									<div
										class="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-[0_28px_56px_-22px_rgba(37,99,235,0.30),0_20px_50px_rgba(8,112,184,0.05)]"
									>
										<div class="flex items-center justify-between gap-2">
											<div>
												<p class="text-[11px] text-slate-400">Payslip, September 2026</p>
												<p class="text-sm font-semibold text-ink">Ananya Sharma</p>
											</div>
											<span
												class="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-100"
												>Approved</span
											>
										</div>

										<p class="mt-5 text-[11px] font-semibold text-slate-400">Earnings</p>
										<dl class="mt-2 space-y-2 text-[12.5px]">
											<div class="flex justify-between">
												<dt class="text-slate-500">Basic</dt><dd class="tabular-nums text-ink">
													₹57,000
												</dd>
											</div>
											<div class="flex justify-between">
												<dt class="text-slate-500">House rent allowance</dt><dd
													class="tabular-nums text-ink">₹28,500</dd
												>
											</div>
											<div class="flex justify-between">
												<dt class="text-slate-500">Special allowance</dt><dd
													class="tabular-nums text-ink">₹42,000</dd
												>
											</div>
											<div class="flex justify-between">
												<dt class="inline-flex items-center gap-1.5 text-slate-500">
													<span class="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>Variable pay
												</dt><dd class="tabular-nums text-ink">₹15,000</dd>
											</div>
										</dl>

										<p
											class="mt-4 border-t border-dashed border-slate-200 pt-4 text-[11px] font-semibold text-slate-400"
										>
											Deductions
										</p>
										<dl class="mt-2 space-y-2 text-[12.5px]">
											<div class="flex justify-between">
												<dt class="text-slate-500">Provident fund</dt><dd
													class="tabular-nums text-ink">₹1,800</dd
												>
											</div>
											<div class="flex justify-between">
												<dt class="text-slate-500">Professional tax</dt><dd
													class="tabular-nums text-ink">₹200</dd
												>
											</div>
											<div class="flex justify-between">
												<dt class="text-slate-500">Income tax (TDS)</dt><dd
													class="tabular-nums text-ink">₹14,320</dd
												>
											</div>
										</dl>

										<div
											class="mt-5 flex items-center justify-between rounded-xl bg-gradient-to-r from-indigo-50 to-cyan-50 px-4 py-3 ring-1 ring-inset ring-indigo-100/70"
										>
											<span class="text-[12px] font-semibold text-slate-600">Net pay</span>
											<span
												class="font-display text-[22px] font-semibold tabular-nums tracking-[-0.02em] text-ink"
												>₹1,26,180</span
											>
										</div>
									</div>
								</div>
							</div>
						</a>

						<a
							href="/modules/reimbursement/"
							id="reimbursement"
							class="bento-card scroll-mt-28"
							style="--c: 192 38 211"
						>
							<div class="pat pat-grid"></div>
							<div class="glow-corner"></div>
							<div class="icon-tile"><SiteIcon name="receipt" size={22} /></div>
							<div class="mt-auto pt-12">
								<h4 class="bento-title">Reimbursement &amp; Expenses</h4>
								<p class="bento-copy">
									Claims with receipts move through approval and settle in the next pay run
									automatically.
								</p>
							</div>
						</a>

						<a
							href="/modules/offboarding/"
							id="offboarding"
							class="bento-card scroll-mt-28"
							style="--c: 71 85 105"
						>
							<div class="pat pat-diagonal"></div>
							<div class="glow-corner"></div>
							<div class="icon-tile"><SiteIcon name="door-open" size={22} /></div>
							<div class="mt-auto pt-12">
								<h4 class="bento-title">Offboarding</h4>
								<p class="bento-copy">
									Resignations, clearances, asset recovery and full-and-final settlement closed out
									in one tracked workflow.
								</p>
							</div>
						</a>

						<a
							href="/modules/helpdesk/"
							id="helpdesk"
							class="bento-card scroll-mt-28 md:col-span-3"
							style="--c: 234 88 12"
						>
							<div class="pat pat-rings"></div>
							<div class="glow-corner"></div>
							<div class="grid h-full items-center gap-8 lg:grid-cols-[1fr_1.35fr] lg:gap-12">
								<div>
									<div class="icon-tile"><SiteIcon name="life-buoy" size={22} /></div>
									<h4 class="bento-title mt-8">Helpdesk</h4>
									<p class="bento-copy">
										Employees raise HR queries or find answers in the FAQ, and every ticket is
										tracked through to resolution.
									</p>
								</div>
								<ul aria-hidden="true" class="mini-panel divide-y divide-slate-100 overflow-hidden">
									<li class="flex items-center gap-4 px-5 py-3.5 text-[13px]">
										<span class="w-12 tabular-nums text-slate-400">#2231</span>
										<span class="min-w-0 flex-1 truncate font-medium text-ink"
											>Form 16 download for FY 2025-26</span
										>
										<span
											class="shrink-0 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600 ring-1 ring-inset ring-emerald-100"
											>Resolved</span
										>
									</li>
									<li class="flex items-center gap-4 px-5 py-3.5 text-[13px]">
										<span class="w-12 tabular-nums text-slate-400">#2232</span>
										<span class="min-w-0 flex-1 truncate font-medium text-ink"
											>Shift change request for October</span
										>
										<span
											class="shrink-0 rounded-full bg-sky-50 px-2.5 py-0.5 text-[11px] font-semibold text-sky-600 ring-1 ring-inset ring-sky-100"
											>In progress</span
										>
									</li>
									<li class="flex items-center gap-4 px-5 py-3.5 text-[13px]">
										<span class="w-12 tabular-nums text-slate-400">#2233</span>
										<span class="min-w-0 flex-1 truncate font-medium text-ink"
											>Laptop replacement</span
										>
										<span
											class="shrink-0 rounded-full bg-orange-50 px-2.5 py-0.5 text-[11px] font-semibold text-orange-600 ring-1 ring-inset ring-orange-100"
											>Assigned to IT</span
										>
									</li>
								</ul>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- 4. COMPLIANCE -->
	<section
		class="relative isolate overflow-hidden border-t border-slate-200/60 bg-white/70 py-24 backdrop-blur-[2px] sm:py-32"
		style="--c: 0 99 215"
	>
		<div
			aria-hidden="true"
			class="pointer-events-none absolute -left-40 top-10 -z-10 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(0,99,215,0.10),transparent_62%)] blur-3xl"
		></div>
		<div aria-hidden="true" class="pointer-events-none absolute inset-y-0 right-0 -z-10 w-1/2 opacity-50">
			<AnimatedBackground colors={['#0063D7', '#10b981']} orbCount={3} speed={0.7} blur={160} />
		</div>
		<div class="mx-auto max-w-[1320px] px-6 lg:px-10">
			<div class="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
				<div>
					<div class="h-[2px] w-12 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500"></div>
					<h2 class="mt-6 font-display text-ink">
						<span
							class="block text-[clamp(1.8rem,3.4vw,2.7rem)] font-extralight leading-[1.05] tracking-[-0.045em]"
							>Compliance is not a module</span
						>
						<span
							class="wdth-condensed block text-[clamp(2.1rem,4.2vw,3.4rem)] font-extrabold leading-[0.98] tracking-[-0.04em]"
							>bolted on afterwards.</span
						>
					</h2>
					<p class="mt-6 max-w-xl text-[16.5px] leading-[1.75] text-slate-600">
						Procor has been running payroll in India since 2018, and Procor HRMS is the platform
						our own compliance team works in. Statutory deductions are calculated in the same run
						that produces the payslip, professional tax is handled across all states, and Form 16
						is generated in-house from the same data.
					</p>
					<div class="mt-8 flex flex-wrap gap-2">
						<span class="chip">Provident fund</span>
						<span class="chip">ESI</span>
						<span class="chip">Professional tax</span>
						<span class="chip">TDS</span>
						<span class="chip">Challans</span>
						<span class="chip">Form 16</span>
						<span class="chip">Statutory registers</span>
						<span class="chip">Gratuity</span>
						<span class="chip">Bonus</span>
					</div>
					<a
						href="/compliance/"
						class="mt-9 inline-flex items-center gap-2 text-[15px] font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
						>How compliance works in Procor HRMS<SiteIcon name="arrow-right" size={16} /></a
					>
				</div>

				<div class="relative">
					<div
						aria-hidden="true"
						class="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-[radial-gradient(circle,rgba(0,99,215,0.16),transparent_70%)] blur-2xl"
					></div>
					<div
						class="overflow-hidden rounded-[28px] border border-slate-200/60 bg-white/90 shadow-[0_20px_50px_rgba(8,112,184,0.05),0_40px_80px_-32px_rgba(1,43,97,0.25)] backdrop-blur"
					>
						<div class="flex items-center gap-2 border-b border-slate-100 px-6 py-4">
							<span class="h-2.5 w-2.5 rounded-full bg-slate-200"></span><span
								class="h-2.5 w-2.5 rounded-full bg-slate-200"
							></span><span class="h-2.5 w-2.5 rounded-full bg-slate-200"></span>
							<p class="ml-3 text-[12.5px] font-medium text-slate-500">
								Statutory summary, one pay run
							</p>
							<span
								class="ml-auto rounded-full bg-indigo-50 px-2.5 py-0.5 text-[11px] font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-100"
								>Sample view</span
							>
						</div>
						<ul class="divide-y divide-slate-100 text-[13.5px]">
							<li class="flex items-center gap-4 px-6 py-4">
								<span
									class="grid h-9 w-9 place-items-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-100"
									><SiteIcon name="shield-check" size={16} /></span
								><span class="flex-1 font-medium text-ink">Provident fund</span><span
									class="text-slate-400">ECR ready</span
								>
							</li>
							<li class="flex items-center gap-4 px-6 py-4">
								<span
									class="grid h-9 w-9 place-items-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-100"
									><SiteIcon name="file-text" size={16} /></span
								><span class="flex-1 font-medium text-ink">ESI contribution</span><span
									class="text-slate-400">Eligible employees flagged</span
								>
							</li>
							<li class="flex items-center gap-4 px-6 py-4">
								<span
									class="grid h-9 w-9 place-items-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-100"
									><SiteIcon name="map-pin" size={16} /></span
								><span class="flex-1 font-medium text-ink">Professional tax</span><span
									class="text-slate-400">State-wise slabs applied</span
								>
							</li>
							<li class="flex items-center gap-4 px-6 py-4">
								<span
									class="grid h-9 w-9 place-items-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-100"
									><SiteIcon name="receipt" size={16} /></span
								><span class="flex-1 font-medium text-ink">TDS</span><span class="text-slate-400"
									>Declarations and proofs linked</span
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- 5. IMPLEMENTATION IN BRIEF -->
	<section
		class="relative isolate overflow-hidden border-t border-slate-200/60 bg-white/70 py-24 backdrop-blur-[2px] sm:py-28"
	>
		<div class="mx-auto max-w-[1320px] px-6 lg:px-10">
			<div class="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
				<div>
					<h2
						class="font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-bold leading-[1.05] tracking-[-0.035em] text-ink"
					>
						Switching is the hard part. We plan for that.
					</h2>
					<p class="mt-5 max-w-md text-[15.5px] leading-[1.7] text-slate-500">
						Most HRMS decisions stall on migration risk, not features. Here is the sequence we run
						with your team, scoped to your headcount and how ready your data is.
					</p>
					<a
						href="/implementation/"
						class="mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
						>See the full implementation plan<SiteIcon name="arrow-right" size={16} /></a
					>
				</div>
				<ol class="grid gap-5 sm:grid-cols-3">
					<li class="bento-card min-h-0" style="--c: 0 99 215">
						<div class="pat pat-grid"></div><div class="glow-corner"></div>
						<span class="font-display text-[15px] font-bold text-indigo-600">Step one</span>
						<h3 class="mt-3 text-[19px] font-semibold tracking-[-0.01em] text-ink">
							Configure and migrate
						</h3>
						<p class="mt-3 text-[14.5px] leading-[1.6] text-slate-500">
							We map your entities, policies, pay structures and leave rules, then migrate master
							data and balances.
						</p>
					</li>
					<li class="bento-card min-h-0" style="--c: 62 142 240">
						<div class="pat pat-dots"></div><div class="glow-corner"></div>
						<span class="font-display text-[15px] font-bold text-cyan-600">Step two</span>
						<h3 class="mt-3 text-[19px] font-semibold tracking-[-0.01em] text-ink">
							Verify before you commit
						</h3>
						<p class="mt-3 text-[14.5px] leading-[1.6] text-slate-500">
							Migrated data and calculations are checked against your existing system, and
							differences are explained before anyone signs off.
						</p>
					</li>
					<li class="bento-card min-h-0" style="--c: 1 43 97">
						<div class="pat pat-diagonal"></div><div class="glow-corner"></div>
						<span class="font-display text-[15px] font-bold text-ink">Step three</span>
						<h3 class="mt-3 text-[19px] font-semibold tracking-[-0.01em] text-ink">
							Go live and hand over
						</h3>
						<p class="mt-3 text-[14.5px] leading-[1.6] text-slate-500">
							Employees get self-service, your team gets training, and a named contact stays with
							you after cutover.
						</p>
					</li>
				</ol>
			</div>
		</div>
	</section>

	<!-- 6. FAQ -->
	<section
		class="relative isolate overflow-hidden border-t border-slate-200/60 bg-white/70 py-24 backdrop-blur-[2px] sm:py-28"
	>
		<div class="mx-auto max-w-[1320px] px-6 lg:px-10">
			<div class="grid gap-12 lg:grid-cols-[1fr_1.7fr] lg:gap-16">
				<div class="lg:sticky lg:top-28 lg:self-start">
					<h2
						class="font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-bold leading-[1.05] tracking-[-0.035em] text-ink"
					>
						Questions buyers actually ask
					</h2>
					<p class="mt-5 text-[15.5px] leading-[1.7] text-slate-500">
						If yours is not here, ask it directly and you will get a straight answer, not a
						brochure.
					</p>
					<a
						href="/contact/"
						class="mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
						>Talk to our team<SiteIcon name="arrow-right" size={16} /></a
					>
				</div>
				<FaqList items={FAQS} />
			</div>
		</div>
	</section>
</main>
