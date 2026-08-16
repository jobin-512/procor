<script>
	import { onMount } from 'svelte';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import Rocket from '@lucide/svelte/icons/rocket';
	import Plus from '@lucide/svelte/icons/plus';
	import Minus from '@lucide/svelte/icons/minus';
	import BarChart3 from '@lucide/svelte/icons/bar-chart-3';
	import Users from '@lucide/svelte/icons/users';
	import ShieldCheck from '@lucide/svelte/icons/shield-check';
	import Activity from '@lucide/svelte/icons/activity';
	import LineChart from '@lucide/svelte/icons/line-chart';
	import Clock from '@lucide/svelte/icons/clock';
	import Settings2 from '@lucide/svelte/icons/settings-2';

	import HomeHero from '$lib/components/home/HomeHero.svelte';
	import InsaneFeatures from '$lib/components/home/InsaneFeatures.svelte';
	import InsanePrinciples from '$lib/components/home/InsanePrinciples.svelte';
	import InsaneCTA from '$lib/components/home/InsaneCTA.svelte';

	let openFaq = $state(null);
	let barsAnimated = $state(false);

	const steps = [
		{
			icon: Rocket,
			step: '01',
			title: 'Discovery Call',
			desc: 'We learn how your organization actually works, map your people processes, and design a tailored path forward.',
			gradient: 'from-blue-500 to-blue-600'
		},
		{
			icon: Settings2,
			step: '02',
			title: 'Custom Configuration',
			desc: 'Our team shapes a PROCOR workspace around your structure, policies, and workflows — no rigid templates.',
			gradient: 'from-blue-500 to-blue-600'
		},
		{
			icon: Users,
			step: '03',
			title: 'Seamless Migration',
			desc: 'We move your existing records across with care, train your teams, and go live the moment you are ready.',
			gradient: 'from-emerald-500 to-green-500'
		},
		{
			icon: LineChart,
			step: '04',
			title: 'Continuous Growth',
			desc: 'Ongoing analytics, regular reviews, and AI-driven recommendations that evolve alongside your company.',
			gradient: 'from-amber-500 to-orange-500'
		}
	];

	const faqs = [
		{ q: 'How does implementation work?', a: 'Every rollout begins with a discovery call, followed by a tailored configuration of your PROCOR workspace. We migrate your existing records, train your teams, and go live when you are ready — with hands-on guidance throughout.' },
		{ q: 'Can I start with one module and add more later?', a: 'Absolutely. PROCOR is fully modular — begin with Core HR or Payroll, then unlock additional modules whenever you need them. Every module shares the same data layer, so there is never any re-integration required.' },
		{ 			q: 'Is my data secure?', a: 'Security is foundational to everything we build. We use strong encryption at rest and in transit, maintain a zero-trust architecture, and undergo regular third-party penetration testing.' },
		{ q: 'Do you support multi-currency and multi-country payroll?', a: 'Yes — PROCOR handles payroll across many currencies and jurisdictions with automated tax calculations, local compliance updates, and direct bank integrations so you can focus on your people instead of paperwork.' },
		{ q: 'What kind of support do you offer?', a: 'All plans include email and chat support. Growth tier receives priority responses, and Enterprise is paired with a dedicated Customer Success Manager and proactive quarterly business reviews.' },
		{ q: 'Can I migrate from another HRMS?', a: 'Yes! Our migration team handles the import of employee records, payroll history, benefits, and performance reviews — no manual re-entry required. We have moved customers over from every major HR platform.' }
	];

	const dashboardModules = [
		{ label: 'Recruitment', color: 'from-blue-500 to-blue-400' },
		{ label: 'Onboarding', color: 'from-blue-500 to-blue-400' },
		{ label: 'Payroll', color: 'from-emerald-500 to-emerald-400' },
		{ label: 'Compliance', color: 'from-blue-500 to-blue-400' }
	];

	const dashboardCards = [
		{ icon: Users, label: 'People' },
		{ icon: Clock, label: 'Time & Attendance' },
		{ icon: Activity, label: 'Engagement' },
		{ icon: ShieldCheck, label: 'Compliance' }
	];

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						barsAnimated = true;
						observer.disconnect();
					}
				});
			},
			{ threshold: 0.2 }
		);

		const dashboardEl = document.querySelector('.dashboard-section');
		if (dashboardEl) observer.observe(dashboardEl);

		return () => observer.disconnect();
	});
</script>

<div class="relative min-h-screen bg-bg text-fg">
	<HomeHero />

	<InsanePrinciples />

	<InsaneFeatures />

	<!-- HOW IT WORKS -->
	<section class="px-6 py-24 md:px-12 md:py-32" data-reveal>
		<div class="mx-auto max-w-6xl">
			<div class="mb-20 text-center">
				<div class="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-300">
					<Sparkles size={16} class="text-emerald-400" />
					<span>A simple path</span>
				</div>
				<h2 class="text-4xl font-black leading-tight text-fg font-display sm:text-5xl md:text-6xl">
					Get started in <span class="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">four steps</span>
				</h2>
				<p class="mx-auto mt-5 max-w-2xl text-lg text-fg/50">
					From first conversation to ongoing optimization, we keep the journey smooth for your whole organization.
				</p>
			</div>

			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				{#each steps as step, i}
					<div class="group relative rounded-2xl border border-line bg-surface-2 p-7 transition duration-300 hover:-translate-y-1 hover:border-line hover:bg-surface-2">
						<div class="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br {step.gradient} text-2xl font-black text-fg shadow-lg">
							{step.step}
						</div>
						<h3 class="mb-3 text-lg font-bold text-fg">{step.title}</h3>
						<p class="text-sm leading-relaxed text-fg/50">{step.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- DASHBOARD PREVIEW -->
	<section class="dashboard-section px-6 py-24 md:px-12 md:py-32" data-reveal>
		<div class="mx-auto max-w-6xl">
			<div class="mb-14 text-center">
				<div class="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">
					<BarChart3 size={16} class="text-blue-400" />
					<span>Live workspace</span>
				</div>
				<h2 class="text-4xl font-black leading-tight text-fg font-display sm:text-5xl md:text-6xl">
					Insights at a <span class="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">glance</span>
				</h2>
				<p class="mx-auto mt-5 max-w-2xl text-lg text-fg/50">Real-time workforce analytics that help your team make clearer decisions.</p>
			</div>

			<div class="rounded-3xl border border-line bg-surface-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
				<div class="flex items-center gap-4 border-b border-line bg-surface-2 px-6 py-4">
					<div class="flex gap-2">
						<div class="h-3 w-3 rounded-full bg-rose-500/80"></div>
						<div class="h-3 w-3 rounded-full bg-amber-500/80"></div>
						<div class="h-3 w-3 rounded-full bg-emerald-500/80"></div>
					</div>
				<div class="flex flex-1 justify-center">
					<div class="rounded-lg border border-line bg-surface-2 px-4 py-1.5">
						<span class="font-mono text-xs text-fg/40">PROCOR Workspace</span>
					</div>
				</div>
					<div class="flex items-center gap-2">
						<div class="h-2 w-2 rounded-full bg-emerald-400"></div>
						<span class="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">Live</span>
					</div>
				</div>

				<div class="p-8">
					<div class="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
						{#each dashboardCards as card}
							<div class="group rounded-2xl border border-line bg-surface-2 p-6 transition hover:border-line hover:bg-surface-2">
								<div class="mb-4 flex items-center gap-3">
									<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 transition group-hover:scale-110">
										<card.icon size={18} class="text-blue-400" />
									</div>
								</div>
								<p class="text-sm font-semibold text-fg/80">{card.label}</p>
								<div class="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-2">
									<div class="h-full rounded-full bg-gradient-to-r from-sky-500 to-blue-500"></div>
								</div>
							</div>
						{/each}
					</div>

					<div class="rounded-2xl border border-line bg-surface-2 p-6">
						<div class="mb-6 flex items-center justify-between">
							<div class="flex items-center gap-2">
								<BarChart3 size={18} class="text-sky-400" />
								<span class="text-sm font-semibold text-fg/70">Module Health</span>
							</div>
							<span class="text-xs text-fg/30">Always updating</span>
						</div>
						<div class="space-y-5">
							{#each dashboardModules as bar, i}
								<div>
									<div class="mb-2 flex items-center justify-between">
										<span class="text-sm text-fg/60">{bar.label}</span>
										<span class="text-xs font-semibold text-emerald-400">Active</span>
									</div>
									<div class="h-3 overflow-hidden rounded-full bg-surface-2">
										<div
											class="h-full rounded-full bg-gradient-to-r {bar.color} transition-all duration-1000 ease-out"
											style="width: {barsAnimated ? [82, 91, 97, 88][i] : 0}%; transition-delay: {i * 150}ms;"
										></div>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ -->
	<section class="px-6 py-24 md:px-12 md:py-32" data-reveal>
		<div class="mx-auto max-w-3xl">
			<div class="mb-16 text-center">
				<div class="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface-2 px-5 py-2 text-sm font-semibold text-fg/60">
					<span>Frequently Asked Questions</span>
				</div>
				<h2 class="text-4xl font-black leading-tight text-fg font-display sm:text-5xl md:text-6xl">
					Got <span class="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">questions?</span>
				</h2>
			</div>

			<div class="space-y-4">
				{#each faqs as faq, i}
					<div class="group overflow-hidden rounded-2xl border {openFaq === i ? 'border-blue-500/30 bg-blue-500/[0.02]' : 'border-line'} bg-surface-2 backdrop-blur-xl transition-all duration-300">
						<button
							class="flex w-full cursor-pointer items-center justify-between p-6 text-left transition-colors hover:bg-surface-2"
							onclick={() => (openFaq = openFaq === i ? null : i)}
						>
							<span class="pr-4 text-lg font-semibold text-fg/90">{faq.q}</span>
							<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-surface-2 transition-all duration-300 {openFaq === i ? 'rotate-180 border-blue-500/30 bg-blue-500/20' : ''}">
								{#if openFaq === i}
									<Minus size={18} class="text-blue-400" />
								{:else}
									<Plus size={18} class="text-fg/50" />
								{/if}
							</div>
						</button>
						{#if openFaq === i}
							<div class="animate-fadeIn px-6 pb-6">
								<p class="leading-relaxed text-fg/60">{faq.a}</p>
							</div>
						{/if}
					</div>
				{/each}
			</div>

			<div class="mt-12 rounded-2xl border border-line bg-gradient-to-r from-blue-500/10 to-blue-600/10 p-8 text-center">
				<p class="mb-4 font-medium text-fg/60">Still have questions?</p>
				<a href="/contact" class="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25 group">
					Talk to our team <ArrowRight size={18} class="transition group-hover:translate-x-1" />
				</a>
			</div>
		</div>
	</section>

	<InsaneCTA />
</div>

<style>
	@keyframes scroll-x {
		0% { transform: translateX(0); }
		100% { transform: translateX(-33.333%); }
	}

	.animate-scroll-x {
		animation: scroll-x 30s linear infinite;
	}

	@keyframes fadeIn {
		from { opacity: 0; transform: translateY(-10px); }
		to { opacity: 1; transform: translateY(0); }
	}

	.animate-fadeIn {
		animation: fadeIn 0.3s ease-out;
	}
</style>
