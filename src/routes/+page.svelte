<script>
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';

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

	// Assuming you have these saved in your components folder
	import HomeHero from '$lib/components/home/HomeHero.svelte';
	import InsaneFeatures from '$lib/components/home/InsaneFeatures.svelte';
	import InsanePrinciples from '$lib/components/home/InsanePrinciples.svelte';
	import InsaneCTA from '$lib/components/home/InsaneCTA.svelte';

	let openFaq = $state(null);

	// DOM Refs for GSAP
	let stepsSectionRef = $state();
	let stepsGridRef = $state();
	let stepRefs = $state([]);
	let stepLineRef = $state();
	
	let dashSectionRef = $state();
	let dashWrapperRef = $state();
	let dashCardRefs = $state([]);
	let dashBarRefs = $state([]);
	
	let faqSectionRef = $state();
	let faqRefs = $state([]);
	let faqCtaRef = $state();

	const steps = [
		{
			icon: Rocket,
			step: '01',
			title: 'Discovery Call',
			desc: 'We learn how your organization actually works, map your people processes, and design a tailored path forward.',
			color: 'var(--color-procor-blue)'
		},
		{
			icon: Settings2,
			step: '02',
			title: 'Custom Configuration',
			desc: 'Our team shapes a PROCOR workspace around your structure, policies, and workflows — no rigid templates.',
			color: 'var(--color-procor-blue)'
		},
		{
			icon: Users,
			step: '03',
			title: 'Seamless Migration',
			desc: 'We move your existing records across with care, train your teams, and go live the moment you are ready.',
			color: 'var(--color-procor-emerald)'
		},
		{
			icon: LineChart,
			step: '04',
			title: 'Continuous Growth',
			desc: 'Ongoing analytics, regular reviews, and AI-driven recommendations that evolve alongside your company.',
			color: 'var(--color-procor-amber)'
		}
	];

	const dashboardModules = [
		{ label: 'Recruitment', color: 'var(--color-procor-blue)', targetWidth: '82%' },
		{ label: 'Onboarding', color: 'var(--color-procor-sky)', targetWidth: '91%' },
		{ label: 'Payroll', color: 'var(--color-procor-emerald)', targetWidth: '97%' },
		{ label: 'Compliance', color: 'var(--color-procor-blue-lighter)', targetWidth: '88%' }
	];

	const dashboardCards = [
		{ icon: Users, label: 'People' },
		{ icon: Clock, label: 'Time & Attendance' },
		{ icon: Activity, label: 'Engagement' },
		{ icon: ShieldCheck, label: 'Compliance' }
	];

	const faqs = [
		{ q: 'How does implementation work?', a: 'Every rollout begins with a discovery call, followed by a tailored configuration of your PROCOR workspace. We migrate your existing records, train your teams, and go live when you are ready — with hands-on guidance throughout.' },
		{ q: 'Can I start with one module and add more later?', a: 'Absolutely. PROCOR is fully modular — begin with Core HR or Payroll, then unlock additional modules whenever you need them. Every module shares the same data layer, so there is never any re-integration required.' },
		{ q: 'Is my data secure?', a: 'Security is foundational to everything we build. We use strong encryption at rest and in transit, maintain a zero-trust architecture, and undergo regular third-party penetration testing.' },
		{ q: 'Do you support multi-currency and multi-country payroll?', a: 'Yes — PROCOR handles payroll across many currencies and jurisdictions with automated tax calculations, local compliance updates, and direct bank integrations so you can focus on your people instead of paperwork.' },
		{ q: 'What kind of support do you offer?', a: 'All plans include email and chat support. Growth tier receives priority responses, and Enterprise is paired with a dedicated Customer Success Manager and proactive quarterly business reviews.' },
		{ q: 'Can I migrate from another HRMS?', a: 'Yes! Our migration team handles the import of employee records, payroll history, benefits, and performance reviews — no manual re-entry required. We have moved customers over from every major HR platform.' }
	];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Resolve GSAP targets from the DOM (robust to ref timing)
		stepRefs = [...document.querySelectorAll('.step-card')];
		dashCardRefs = [...document.querySelectorAll('.dash-card')];
		dashBarRefs = [...document.querySelectorAll('.dash-bar')];
		faqRefs = [...document.querySelectorAll('.faq-item')];

		try {
			// 1. Steps Animation (Cards popping up + Line drawing)
			const tlSteps = gsap.timeline({
				scrollTrigger: {
					trigger: stepsSectionRef,
					start: 'top 80%',
					once: true
				}
			});

			tlSteps.fromTo(stepRefs,
				{ y: 50, opacity: 0, scale: 0.95 },
				{ y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(1.2)', immediateRender: false }
			);

			gsap.to(stepLineRef, {
				scaleX: 1,
				transformOrigin: 'left center',
				ease: 'none',
				scrollTrigger: {
					trigger: stepsSectionRef,
					start: 'top 60%',
					end: 'bottom 60%',
					scrub: 1
				}
			});

			// 2. Dashboard 3D Entrance & Loading Animation
			const tlDash = gsap.timeline({
				scrollTrigger: {
					trigger: dashSectionRef,
					start: 'top 80%',
					once: true
				}
			});

			tlDash.fromTo(dashWrapperRef,
				{ rotateX: 15, y: 100, opacity: 0, scale: 0.95 },
				{ rotateX: 0, y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out', transformPerspective: 1200, immediateRender: false }
			)
			.fromTo(dashCardRefs,
				{ y: 20, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.5, stagger: 0.1, immediateRender: false },
				'-=0.5'
			)
			.to(dashBarRefs,
				{
					width: (i) => dashboardModules[i].targetWidth,
					duration: 1.5,
					ease: 'power4.out',
					stagger: 0.15
				},
				'-=0.2'
			);

			// 3. FAQ Entrance
			const tlFaq = gsap.timeline({
				scrollTrigger: {
					trigger: faqSectionRef,
					start: 'top 85%',
					once: true
				}
			});

			tlFaq.fromTo(faqRefs,
				{ x: -30, opacity: 0 },
				{ x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', immediateRender: false }
			).fromTo(faqCtaRef,
				{ y: 30, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', immediateRender: false },
				'-=0.2'
			);
		} catch (e) {
			console.error('GSAP setup failed — showing content without animations', e);
		}
	});
</script>

<div class="relative min-h-screen bg-bg text-fg">
	
	<!-- 1. External Insane Components -->
	<HomeHero />
	<InsanePrinciples />
	<InsaneFeatures />

	<!-- ==========================================
	     2. HOW IT WORKS (Upgraded)
	     ========================================== -->
	<section bind:this={stepsSectionRef} class="noise-overlay relative px-6 py-24 md:px-12 md:py-32">
		<div class="mx-auto max-w-7xl">
			
			<div class="mb-20 text-center relative z-10">
				<div class="glass-effect mb-6 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-fg/80">
					<Sparkles size={16} class="text-[var(--color-procor-emerald)]" />
					<span>A simple path</span>
				</div>
				<h2 class="font-display text-4xl font-black leading-tight text-fg sm:text-5xl md:text-6xl">
					Get started in <br class="hidden sm:block"/>
					<span class="relative inline-block">
						<span class="absolute inset-0 blur-xl opacity-30" style="background: var(--color-procor-emerald);"></span>
						<span class="relative drop-shadow-sm" style="background: linear-gradient(90deg, var(--color-procor-emerald), var(--color-procor-sky)); -webkit-background-clip: text; color: transparent;">
							four steps
						</span>
					</span>
				</h2>
				<p class="mx-auto mt-6 max-w-2xl text-lg text-fg/60 font-light">
					From first conversation to ongoing optimization, we keep the journey smooth for your whole organization.
				</p>
			</div>

			<!-- Steps Grid with Connecting Line -->
			<div class="relative">
				<!-- Connecting Line Background -->
				<div class="absolute left-0 top-1/2 hidden h-[2px] w-full -translate-y-1/2 bg-line lg:block"></div>
				<!-- Connecting Line Active (Fills on scroll) -->
				<div bind:this={stepLineRef} class="absolute left-0 top-1/2 hidden h-[2px] w-full -translate-y-1/2 scale-x-0 bg-gradient-to-r from-[var(--color-procor-blue)] via-[var(--color-procor-emerald)] to-[var(--color-procor-amber)] lg:block z-0"></div>

				<div bind:this={stepsGridRef} class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative z-10">
					{#each steps as step, i}
						<div class="step-card group relative rounded-3xl border border-line bg-surface-2 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] backdrop-blur-xl">
							
							<div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-black text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" style="background: {step.color};">
								{step.step}
							</div>
							
							<h3 class="mb-3 text-xl font-bold text-fg transition-colors group-hover:text-[var(--color-procor-blue-light)]">{step.title}</h3>
							<p class="text-sm leading-relaxed text-fg/60">{step.desc}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- ==========================================
	     3. DASHBOARD PREVIEW (Upgraded)
	     ========================================== -->
	<section bind:this={dashSectionRef} class="relative overflow-hidden px-6 py-24 md:px-12 md:py-32 bg-surface-2/30">
		<!-- Background Glow -->
		<div class="absolute inset-0 flex items-center justify-center pointer-events-none">
			<div class="h-[500px] w-[500px] rounded-full blur-[150px] mix-blend-screen opacity-20" style="background: var(--color-procor-blue);"></div>
		</div>

		<div class="relative z-10 mx-auto max-w-6xl">
			
			<div class="mb-16 text-center">
				<div class="glass-effect mb-6 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-fg/80">
					<BarChart3 size={16} class="text-[var(--color-procor-blue-light)]" />
					<span>Live workspace</span>
				</div>
				<h2 class="font-display text-4xl font-black leading-tight text-fg sm:text-5xl md:text-6xl">
					Insights at a 
					<span class="text-gradient-brand">glance</span>
				</h2>
				<p class="mx-auto mt-6 max-w-2xl text-lg text-fg/60 font-light">
					Real-time workforce analytics that help your team make clearer decisions.
				</p>
			</div>

			<!-- 3D Glass Dashboard -->
			<div bind:this={dashWrapperRef} class="relative rounded-[2rem] border border-line bg-surface p-2 shadow-2xl shadow-black/20 backdrop-blur-2xl will-change-transform">
				<!-- Glass Glare effect -->
				<div class="absolute inset-0 pointer-events-none rounded-[2rem] bg-gradient-to-tr from-white/5 via-transparent to-white/10 [mask-image:linear-gradient(to_bottom_right,black,transparent)] z-20"></div>

				<div class="relative z-10 overflow-hidden rounded-[1.5rem] border border-line bg-surface-2">
					<!-- Window Controls -->
					<div class="flex items-center gap-4 border-b border-line bg-surface-2/50 px-6 py-4 backdrop-blur-md">
						<div class="flex gap-2">
							<div class="h-3 w-3 rounded-full bg-rose-500/80"></div>
							<div class="h-3 w-3 rounded-full bg-amber-500/80"></div>
							<div class="h-3 w-3 rounded-full bg-emerald-500/80"></div>
						</div>
						<div class="flex flex-1 justify-center">
							<div class="rounded-lg border border-line bg-surface/50 px-4 py-1.5 shadow-sm">
								<span class="font-mono text-xs text-fg/50">procor-workspace.local</span>
							</div>
						</div>
						<div class="flex items-center gap-2">
							<div class="h-2 w-2 rounded-full bg-[var(--color-procor-emerald)] animate-pulse"></div>
							<span class="text-[10px] font-bold uppercase tracking-wider text-[var(--color-procor-emerald)]">Live</span>
						</div>
					</div>

					<!-- Dashboard Content -->
					<div class="p-8">
						<!-- Metric Cards -->
						<div class="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
							{#each dashboardCards as card, i}
								<div class="dash-card group rounded-2xl border border-line bg-surface p-6 shadow-sm transition hover:border-line-strong hover:bg-surface-2">
									<div class="mb-4 flex items-center gap-3">
										<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-procor-blue)]/10 transition-transform duration-300 group-hover:scale-110">
											<card.icon size={20} class="text-[var(--color-procor-blue)]" />
										</div>
									</div>
									<p class="text-sm font-semibold text-fg/80">{card.label}</p>
									<!-- Mini bar -->
									<div class="mt-4 h-1.5 overflow-hidden rounded-full bg-line">
										<div class="h-full w-2/3 rounded-full bg-[var(--color-procor-sky)] opacity-50 transition-all duration-500 group-hover:w-full group-hover:opacity-100"></div>
									</div>
								</div>
							{/each}
						</div>

						<!-- Progress Bars Module -->
						<div class="rounded-2xl border border-line bg-surface p-8 shadow-sm">
							<div class="mb-8 flex items-center justify-between">
								<div class="flex items-center gap-3">
									<BarChart3 size={20} class="text-[var(--color-procor-blue-light)]" />
									<span class="text-base font-semibold text-fg">Module Health & Sync</span>
								</div>
								<span class="rounded-full bg-surface-2 px-3 py-1 text-xs text-fg/50">Always updating</span>
							</div>
							
							<div class="space-y-6">
								{#each dashboardModules as bar, i}
									<div>
										<div class="mb-3 flex items-center justify-between">
											<span class="text-sm font-medium text-fg/70">{bar.label}</span>
											<span class="text-xs font-bold text-[var(--color-procor-emerald)]">Active</span>
										</div>
										<div class="h-3 overflow-hidden rounded-full bg-line">
											<!-- Width is controlled by GSAP -->
											<div class="dash-bar h-full w-0 rounded-full" style="background: {bar.color};"></div>
										</div>
									</div>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ==========================================
	     4. FAQ SECTION (Upgraded)
	     ========================================== -->
	<section bind:this={faqSectionRef} class="noise-overlay relative px-6 py-24 md:px-12 md:py-32">
		<div class="mx-auto max-w-4xl">
			
			<div class="mb-16 text-center relative z-10">
				<div class="glass-effect mb-6 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-fg/60">
					<span>Frequently Asked Questions</span>
				</div>
				<h2 class="font-display text-4xl font-black leading-tight text-fg sm:text-5xl md:text-6xl">
					Got <span class="text-gradient-brand">questions?</span>
				</h2>
			</div>

			<div class="space-y-4 relative z-10">
				{#each faqs as faq, i}
					<div 
						class="faq-item group overflow-hidden rounded-2xl border bg-surface-2 backdrop-blur-xl transition-all duration-300 {openFaq === i ? 'border-[var(--color-procor-blue)] shadow-[0_0_30px_rgba(37,59,218,0.15)]' : 'border-line hover:border-line-strong'}"
					>
						<button
							class="flex w-full cursor-pointer items-center justify-between p-6 text-left transition-colors"
							onclick={() => (openFaq = openFaq === i ? null : i)}
						>
							<span class="pr-4 text-lg font-semibold {openFaq === i ? 'text-fg' : 'text-fg/80'} transition-colors">{faq.q}</span>
							<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 {openFaq === i ? 'rotate-180 border-[var(--color-procor-blue)] bg-[var(--color-procor-blue)]/10 text-[var(--color-procor-blue-light)]' : 'border-line bg-surface text-fg/50'}">
								{#if openFaq === i}
									<Minus size={18} />
								{:else}
									<Plus size={18} />
								{/if}
							</div>
						</button>
						
						<!-- Svelte Slide Transition for smooth accordion -->
						{#if openFaq === i}
							<div transition:slide={{ duration: 300, axis: 'y' }}>
								<div class="px-6 pb-6 pt-2">
									<p class="leading-relaxed text-fg/60 font-light">{faq.a}</p>
								</div>
							</div>
						{/if}
					</div>
				{/each}
			</div>

			<!-- FAQ CTA Box -->
			<div bind:this={faqCtaRef} class="mt-12 rounded-3xl border border-line bg-surface p-10 text-center shadow-lg relative overflow-hidden">
				<!-- Ambient CTA glow -->
				<div class="absolute inset-0 bg-gradient-to-r from-[var(--color-procor-blue)]/5 to-[var(--color-procor-sky)]/5 pointer-events-none"></div>
				
				<p class="mb-6 font-medium text-fg/60 relative z-10">Still have questions?</p>
				<a href="/contact" class="btn-primary group relative z-10 inline-flex items-center gap-3">
					Talk to our team 
					<ArrowRight size={18} class="transition-transform group-hover:translate-x-1" />
				</a>
			</div>
		</div>
	</section>

	<!-- 5. External CTA Component -->
	<InsaneCTA />

</div>