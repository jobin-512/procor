<script>
	import {
		ArrowRight,
		Code2,
		Heart,
		Factory,
		Banknote,
		Store,
		Users,
		Globe,
		Target,
		Shield,
		Zap,
		BarChart3,
		CheckCircle2,
		Laptop,
		HardHat,
		Scale,
		Award,
		TrendingUp,
		Timer,
		Clock
	} from '@lucide/svelte';
	import GlowCard from '$lib/components/ui/GlowCard.svelte';
	import GradientButton from '$lib/components/ui/GradientButton.svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';
	import TextReveal from '$lib/components/ui/TextReveal.svelte';

	let activeTab = $state(0);

	const industries = [
		{
			id: 'technology',
			name: 'Technology',
			icon: Code2,
			tagline: 'Built for fast-scaling tech teams',
			description: 'Streamline HR for remote-first tech companies with equity management, developer-friendly onboarding, and agile performance tracking.',
			features: [
				{ icon: Laptop, title: 'Remote Team Management', desc: 'Unified platform for distributed teams across time zones with async workflows and virtual office spaces.' },
				{ icon: TrendingUp, title: 'Equity & Vesting Tracking', desc: 'Automated equity calculations, vesting schedules, and 409A compliance for startups and public companies.' },
				{ icon: Target, title: 'Agile Performance Cycles', desc: 'Continuous feedback loops, OKR tracking, and sprint-based performance reviews replacing annual reviews.' }
			],
			stat: { value: '40%', label: 'Faster Onboarding' },
			caseStudy: 'TechCorp reduced new hire onboarding from 14 days to 8 days with automated provisioning.',
			gradient: 'from-sky-500/20 via-blue-600/20 to-indigo-700/20',
			accentColor: 'sky'
		},
		{
			id: 'healthcare',
			name: 'Healthcare',
			icon: Heart,
			tagline: 'Compliance-first healthcare HR',
			description: 'Navigate complex healthcare regulations with automated compliance tracking, shift scheduling, and credential management.',
			features: [
				{ icon: Shield, title: 'Compliance Automation', desc: 'Real-time OSHA, HIPAA, and Joint Commission compliance monitoring with automated alerts and audit trails.' },
				{ icon: Timer, title: 'Smart Shift Scheduling', desc: 'AI-powered scheduling that respects labor laws, fatigue rules, and employee preferences across departments.' },
				{ icon: Award, title: 'Credential Tracking', desc: 'Automated license renewals, certification tracking, and continuing education management for all staff.' }
			],
			stat: { value: '60%', label: 'Less Compliance Time' },
			caseStudy: 'MedCare eliminated 95% of compliance violations with real-time credential monitoring.',
			gradient: 'from-rose-500/20 via-pink-600/20 to-red-700/20',
			accentColor: 'rose'
		},
		{
			id: 'manufacturing',
			name: 'Manufacturing',
			icon: Factory,
			tagline: 'Production-ready workforce management',
			description: 'Optimize floor operations with time tracking, safety compliance, and skills-based workforce allocation.',
			features: [
				{ icon: HardHat, title: 'Safety Compliance Hub', desc: 'Centralized safety training, incident reporting, and regulatory compliance tracking across all facilities.' },
				{ icon: BarChart3, title: 'Workforce Analytics', desc: 'Real-time visibility into labor costs, productivity metrics, and overtime management by production line.' },
				{ icon: Clock, title: 'Precision Time Tracking', desc: 'Biometric clock-in, geo-fencing, and automated break compliance for hourly and shift workers.' }
			],
			stat: { value: '35%', label: 'Cost Reduction' },
			caseStudy: 'AutoMfg saved $2.4M annually with optimized shift scheduling and reduced overtime.',
			gradient: 'from-amber-500/20 via-orange-600/20 to-yellow-700/20',
			accentColor: 'amber'
		},
		{
			id: 'financial',
			name: 'Financial Services',
			icon: Banknote,
			tagline: 'Regulatory-grade HR operations',
			description: 'Meet stringent regulatory requirements while managing performance, certifications, and audit-ready documentation.',
			features: [
				{ icon: Scale, title: 'Regulatory Compliance', desc: 'Automated SOX, FINRA, and SEC compliance tracking with immutable audit logs and document management.' },
				{ icon: BarChart3, title: 'Performance Management', desc: 'Multi-rater feedback, goal cascading, and compensation benchmarking for regulated environments.' },
				{ icon: Shield, title: 'Data Security Controls', desc: 'SOC 2 compliant HR data management with role-based access and encrypted PII handling.' }
			],
			stat: { value: '99.9%', label: 'Audit Pass Rate' },
			caseStudy: 'FinServ Corp achieved perfect audit scores for 3 consecutive years with PROCOR.',
			gradient: 'from-emerald-500/20 via-teal-600/20 to-cyan-700/20',
			accentColor: 'emerald'
		},
		{
			id: 'retail',
			name: 'Retail',
			icon: Store,
			tagline: 'Multi-location retail workforce',
			description: 'Manage seasonal hiring, multi-location scheduling, and employee engagement across your retail empire.',
			features: [
				{ icon: Users, title: 'Seasonal Hiring Engine', desc: 'Bulk hiring workflows, automated background checks, and rapid onboarding for peak season scaling.' },
				{ icon: Globe, title: 'Multi-Location Scheduling', desc: 'Unified scheduling across stores with demand forecasting, swap boards, and mobile-first access.' },
				{ icon: Zap, title: 'Employee Engagement', desc: 'Pulse surveys, recognition programs, and career pathing to reduce retail turnover by up to 45%.' }
			],
			stat: { value: '45%', label: 'Lower Turnover' },
			caseStudy: 'RetailPro reduced seasonal hiring time from 3 weeks to 5 days across 200+ stores.',
			gradient: 'from-violet-500/20 via-purple-600/20 to-fuchsia-700/20',
			accentColor: 'violet'
		}
	];

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	onMount(() => {
		gsap.fromTo('.tab-trigger',
			{ y: 20, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' }
		);
	});
</script>

<section id="industry-tabs" class="relative py-24 md:py-32 px-6 md:px-12 bg-[#030408]">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16">
			<SectionBadge variant="sky">Industry Solutions</SectionBadge>
			<TextReveal
				text="Tailored for your world"
				as="h2"
				class="text-3xl md:text-5xl font-black text-white font-display mt-6 mb-4"
			/>
			<p class="text-white/60 text-lg max-w-xl mx-auto">Select your industry to discover how PROCOR adapts to your specific workforce challenges.</p>
		</div>

		<div class="flex flex-wrap justify-center gap-3 mb-12">
			{#each industries as industry, i}
				<button
					class="tab-trigger flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer {activeTab === i
						? 'bg-gradient-to-r from-sky-500/20 to-indigo-600/20 border border-sky-500/30 text-white shadow-lg shadow-sky-500/10'
						: 'bg-white/[0.04] border border-white/[0.06] text-white/50 hover:bg-white/[0.07] hover:text-white/70'}"
					onclick={() => activeTab = i}
				>
					<svelte:component this={industry.icon} size={18} />
					{industry.name}
				</button>
			{/each}
		</div>

		{#key activeTab}
			{@const ind = industries[activeTab]}
			<div class="grid lg:grid-cols-2 gap-8 items-start">
				<GlowCard className="p-8 md:p-10" glowColor="rgba(117, 194, 246, 0.15)">
					<div class="flex items-center gap-4 mb-6">
						<div class="w-14 h-14 rounded-2xl bg-gradient-to-br {ind.gradient} flex items-center justify-center border border-white/10">
							<svelte:component this={ind.icon} size={28} class="text-white" />
						</div>
						<div>
							<h3 class="text-2xl font-black text-white font-display">{ind.name}</h3>
							<p class="text-white/50 text-sm font-medium">{ind.tagline}</p>
						</div>
					</div>

					<p class="text-white/70 text-base leading-relaxed mb-8">{ind.description}</p>

					<div class="grid gap-5 mb-8">
						{#each ind.features as feature}
							<div class="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] transition-colors duration-300">
								<div class="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0 mt-0.5">
									<svelte:component this={feature.icon} size={20} class="text-sky-400" />
								</div>
								<div>
									<h4 class="text-white font-bold text-sm mb-1">{feature.title}</h4>
									<p class="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
								</div>
							</div>
						{/each}
					</div>

					<GradientButton href="/demo" variant="primary" size="md" class="w-full">
						Explore {ind.name} Solution <ArrowRight size={18} />
					</GradientButton>
				</GlowCard>

				<div class="space-y-6">
					<div class="relative rounded-3xl overflow-hidden aspect-[16/10] border border-white/[0.06]">
						<div class="absolute inset-0 bg-gradient-to-br {ind.gradient}"></div>
						<div class="absolute inset-0 bg-gradient-to-br from-slate-900/40 to-transparent"></div>
						<div class="absolute inset-0 opacity-[0.04] grid-overlay"></div>
						<div class="absolute inset-0 flex items-center justify-center">
							<div class="text-center">
								<div class="w-20 h-20 mx-auto rounded-2xl bg-white/[0.1] backdrop-blur-sm flex items-center justify-center border border-white/10 mb-4">
									<svelte:component this={ind.icon} size={40} class="text-white/80" />
								</div>
								<p class="text-white/60 font-bold text-sm uppercase tracking-wider">{ind.name} Solutions</p>
							</div>
						</div>
					</div>

					<div class="grid grid-cols-2 gap-4">
						<GlowCard className="p-6 text-center" glowColor="rgba(56, 189, 248, 0.2)">
							<p class="text-3xl md:text-4xl font-black text-white font-display bg-gradient-to-b from-sky-400 to-sky-600 bg-clip-text text-transparent">
								{ind.stat.value}
							</p>
							<p class="text-white/50 text-xs font-bold uppercase tracking-wider mt-1">{ind.stat.label}</p>
						</GlowCard>
						<GlowCard className="p-6 text-center" glowColor="rgba(139, 92, 246, 0.2)">
							<p class="text-3xl md:text-4xl font-black text-white font-display bg-gradient-to-b from-violet-400 to-violet-600 bg-clip-text text-transparent">
								500+
							</p>
							<p class="text-white/50 text-xs font-bold uppercase tracking-wider mt-1">{ind.name} Clients</p>
						</GlowCard>
					</div>

					<GlowCard className="p-6" glowColor="rgba(16, 185, 129, 0.2)">
						<div class="flex items-start gap-3">
							<div class="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
								<CheckCircle2 size={20} class="text-emerald-400" />
							</div>
							<div>
								<p class="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.2em] mb-1">Success Story</p>
								<p class="text-white/80 text-sm leading-relaxed">{ind.caseStudy}</p>
							</div>
						</div>
					</GlowCard>
				</div>
			</div>
		{/key}
	</div>
</section>
