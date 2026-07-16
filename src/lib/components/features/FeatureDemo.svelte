<script>
	import GlowCard from '$lib/components/ui/GlowCard.svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';
	import GradientButton from '$lib/components/ui/GradientButton.svelte';
	import FloatingOrb from '$lib/components/ui/FloatingOrb.svelte';
	import ParticleField from '$lib/components/ui/ParticleField.svelte';
	import { Check, ArrowRight, Monitor, Cpu, Zap, Shield, LayoutDashboard, Users, DollarSign, UserPlus, Clock, BookOpen, BarChart3, Bell, Globe, FileText, Settings } from '@lucide/svelte';

	let activeDemoFeature = $state(0);

	const demoFeatures = [
		{
			title: 'Employee Dashboard',
			icon: LayoutDashboard,
			color: '#75c2f6',
			description: 'Get a 360-degree view of your workforce with real-time metrics, KPIs, and actionable insights at your fingertips.',
			items: ['Real-time headcount & demographics', 'Attrition risk scoring', 'Department performance metrics', 'Custom widget builder', 'Export to PDF, Excel, API']
		},
		{
			title: 'Payroll Processing',
			icon: DollarSign,
			color: '#10b981',
			description: 'Run global payroll in minutes, not hours. Automated calculations, compliance checks, and direct deposit setup.',
			items: ['140+ country support', 'Auto tax calculations', 'Batch processing engine', 'Error detection AI', 'One-click bank transfers']
		},
		{
			title: 'Talent Pipeline',
			icon: UserPlus,
			color: '#8b5cf6',
			description: 'From candidate sourcing to offer letter generation — manage your entire recruitment workflow in one place.',
			items: ['AI candidate matching', 'Automated screening', 'Interview scheduling', 'Offer letter builder', 'Analytics & funnel metrics']
		},
		{
			title: 'Compliance Hub',
			icon: Shield,
			color: '#f59e0b',
			description: 'Stay compliant across every jurisdiction with automated monitoring, alerts, and one-click report generation.',
			items: ['Regulatory change alerts', 'Audit trail logging', 'I-9 & E-Verify automation', 'GDPR data requests', 'Policy acknowledgment tracking']
		},
		{
			title: 'Time & Attendance',
			icon: Clock,
			color: '#06b6d4',
			description: 'Track work hours, manage shifts, and automate time-off requests with real-time attendance monitoring.',
			items: ['Biometric & GPS check-in', 'Shift scheduling engine', 'Overtime auto-detection', 'PTO accrual tracking', 'Timesheet approvals']
		},
		{
			title: 'Learning & Development',
			icon: BookOpen,
			color: '#ec4899',
			description: 'Upskill your workforce with personalized learning paths, course management, and compliance training modules.',
			items: ['AI-curated learning paths', 'SCORM-compliant LMS', 'Skill gap analysis', 'Certification tracking', 'Live workshop scheduling']
		},
		{
			title: 'Performance Reviews',
			icon: BarChart3,
			color: '#14b8a6',
			description: 'Run seamless 360-degree reviews with goal tracking, continuous feedback, and actionable performance analytics.',
			items: ['360-degree feedback cycles', 'OKR & goal management', 'Peer recognition feed', 'Performance scorecards', 'Calibration dashboards']
		},
		{
			title: 'Employee Engagement',
			icon: Bell,
			color: '#f43f5e',
			description: 'Measure and boost employee sentiment with pulse surveys, eNPS tracking, and actionable engagement insights.',
			items: ['Pulse survey builder', 'eNPS scoring engine', 'Sentiment analysis AI', 'Recognition leaderboard', 'Action planning tools']
		},
		{
			title: 'Global Workforce',
			icon: Globe,
			color: '#6366f1',
			description: 'Manage your international team with localized onboarding, multi-currency payroll, and region-specific compliance.',
			items: ['Multi-language onboarding', 'Country-specific contracts', 'Local holiday calendars', 'Cross-border tax handling', 'Regional policy templates']
		},
		{
			title: 'Document Intelligence',
			icon: FileText,
			color: '#a855f7',
			description: 'Automate document workflows with AI-powered extraction, smart templates, and secure digital signatures.',
			items: ['AI data extraction', 'Smart document templates', 'E-signature workflows', 'Version control & audit', 'Auto-fill from profiles']
		},
		{
			title: 'Workforce Analytics',
			icon: Settings,
			color: '#84cc16',
			description: 'Turn HR data into strategic decisions with predictive analytics, custom dashboards, and real-time reporting.',
			items: ['Predictive attrition models', 'Headcount planning tools', 'DEI diversity metrics', 'Compensation benchmarking', 'Custom report builder']
		}
	];

</script>

<section id="demo" class="relative py-20 md:py-32 surface-dark overflow-hidden">
	<FloatingOrb color="rgba(117, 194, 246, 0.25)" size="45rem" className="-top-48 right-0" blur="200px" speed={18} />
	<FloatingOrb color="rgba(139, 92, 246, 0.2)" size="35rem" className="bottom-24 -left-40" blur="180px" speed={22} />
	<FloatingOrb color="rgba(244, 63, 94, 0.15)" size="28rem" className="top-1/3 left-1/3" blur="150px" speed={28} parallax={false} />
	<ParticleField count={50} color="rgba(117, 194, 246, 0.5)" className="pointer-events-none" />

	<div class="max-w-7xl mx-auto px-6 relative z-10">
		<div class="text-center mb-14" data-reveal>
			<SectionBadge variant="violet">Interactive Demo</SectionBadge>
			<h2 class="mt-6 text-3xl md:text-4xl lg:text-5xl font-black text-white font-display">
				See It In Action
			</h2>
			<p class="mt-4 text-[var(--text-secondary)] max-w-xl mx-auto text-base md:text-lg">
				Explore our most popular features with live, interactive previews.
			</p>
		</div>

		<div class="grid lg:grid-cols-5 gap-8 items-start">
			<div class="lg:col-span-2 space-y-3" data-reveal>
				{#each demoFeatures as feat, i}
					<button
						class="w-full text-left p-4 md:p-5 rounded-2xl border transition-all duration-300 cursor-pointer group
							{activeDemoFeature === i
								? 'bg-white/[0.1] border-{feat.color}/40 shadow-lg shadow-{feat.color}/20'
								: 'bg-white/[0.04] border-white/[0.1] hover:bg-white/[0.08] hover:border-white/20'}"
						onclick={() => (activeDemoFeature = i)}
					>
						<div class="flex items-center gap-3">
							<div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110" style="background: {feat.color}20;">
								<feat.icon size={20} style="color: {feat.color}" />
							</div>
							<div>
								<span class="text-sm font-bold transition-colors {activeDemoFeature === i ? 'text-white' : 'text-[var(--text-secondary)]'}">
									{feat.title}
								</span>
								{#if activeDemoFeature === i}
									<p class="mt-1 text-xs text-[var(--text-muted)] leading-relaxed">{feat.description}</p>
								{/if}
							</div>
						</div>
					</button>
				{/each}
			</div>

			<div class="lg:col-span-3" data-reveal>
				<GlowCard glowColor="rgba(117, 194, 246, 0.4)" glowSize={350}>
					<div class="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.1]">
						<div class="flex gap-1.5">
							<div class="w-3 h-3 rounded-full bg-rose-500/60"></div>
							<div class="w-3 h-3 rounded-full bg-amber-500/60"></div>
							<div class="w-3 h-3 rounded-full bg-emerald-500/60"></div>
						</div>
						<span class="text-xs text-[var(--text-muted)] font-mono ml-2">
							procor.app/{demoFeatures[activeDemoFeature].title.toLowerCase().replace(/\s+/g, '-')}
						</span>
					</div>

					<div class="flex items-center gap-3 mb-4">
						<div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background: {demoFeatures[activeDemoFeature].color}20;">
							<svelte:component this={demoFeatures[activeDemoFeature].icon} size={24} style="color: {demoFeatures[activeDemoFeature].color}" />
						</div>
						<div>
							<h3 class="text-xl md:text-2xl font-bold text-white mb-1 font-display">
								{demoFeatures[activeDemoFeature].title}
							</h3>
							<p class="text-sm text-[var(--text-secondary)] leading-relaxed">
								{demoFeatures[activeDemoFeature].description}
							</p>
						</div>
					</div>

					<div class="mb-6 space-y-3">
						{#each { length: 4 } as _, i}
							<div class="flex items-center gap-3">
								<div class="h-2 rounded-full bg-procor-sky/20" style="width: {70 - i * 15}%; animation: bar-pulse {2 + i * 0.3}s ease-in-out infinite alternate;"></div>
								<span class="text-[10px] text-[var(--text-faint)] font-mono">{70 - i * 15}%</span>
							</div>
						{/each}
					</div>

					<ul class="space-y-3 mb-8">
						{#each demoFeatures[activeDemoFeature].items as item}
							<li class="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
								<span class="mt-0.5 w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0">
									<Check size={12} class="text-emerald-400" />
								</span>
								{item}
							</li>
						{/each}
					</ul>

					<GradientButton href="/demo" size="md" class="w-full sm:w-auto">
						Try It Yourself <ArrowRight size={18} />
					</GradientButton>
				</GlowCard>
			</div>
		</div>
	</div>
</section>
