<script>
	import GlowCard from '$lib/components/ui/GlowCard.svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';
	import FloatingOrb from '$lib/components/ui/FloatingOrb.svelte';
	import ParticleField from '$lib/components/ui/ParticleField.svelte';
	import { Users, Building2, FileText, Shield, DollarSign, Globe, Heart, BadgePercent, Clock, Briefcase, UserPlus, Award, BarChart3, Target, LayoutDashboard, Brain, ClipboardCheck, PieChart, ChevronRight } from '@lucide/svelte';

	const categories = [
		{
			name: 'Core HR',
			icon: Users,
			features: [
				{ icon: Users, title: 'Employee Management', description: 'Complete employee lifecycle management from hire to retire with automated workflows.', color: '#75c2f6' },
				{ icon: Building2, title: 'Organization Charts', description: 'Dynamic org charts that auto-update as your company evolves. Drag-and-drop restructuring.', color: '#1d5d9b' },
				{ icon: FileText, title: 'Document Management', description: 'Centralized document repository with version control, e-signatures, and compliance tracking.', color: '#002d5b' },
				{ icon: Shield, title: 'Access Control', description: 'Role-based permissions with granular access control across all modules and data.', color: '#8b5cf6' }
			]
		},
		{
			name: 'Payroll & Benefits',
			icon: DollarSign,
			features: [
				{ icon: Globe, title: 'Global Payroll', description: 'Process payroll in 140+ countries with local tax compliance and multi-currency support.', color: '#10b981' },
				{ icon: Heart, title: 'Benefits Administration', description: 'Self-service benefits portal with enrollment automation and carrier integrations.', color: '#f43f5e' },
				{ icon: BadgePercent, title: 'Tax Compliance', description: 'Automated tax calculations, filing, and reporting across all jurisdictions.', color: '#f59e0b' },
				{ icon: Clock, title: 'Time & Attendance', description: 'Time tracking, shift scheduling, and PTO management with biometric integration.', color: '#6366f1' }
			]
		},
		{
			name: 'Talent Management',
			icon: Briefcase,
			features: [
				{ icon: UserPlus, title: 'Recruitment', description: 'AI-powered candidate sourcing, screening, and interview scheduling pipeline.', color: '#8b5cf6' },
				{ icon: Award, title: 'Onboarding', description: 'Personalized onboarding journeys with task automation and buddy matching.', color: '#10b981' },
				{ icon: BarChart3, title: 'Performance Reviews', description: 'Continuous feedback loops, 360-degree reviews, and goal alignment frameworks.', color: '#1d5d9b' },
				{ icon: Target, title: 'Learning & Development', description: 'LMS integration, skill gap analysis, and personalized learning paths.', color: '#f59e0b' }
			]
		},
		{
			name: 'Analytics & Reporting',
			icon: BarChart3,
			features: [
				{ icon: LayoutDashboard, title: 'Custom Dashboards', description: 'Drag-and-drop dashboard builder with 100+ widgets and real-time data feeds.', color: '#75c2f6' },
				{ icon: Brain, title: 'Predictive Analytics', description: 'ML-powered workforce insights for turnover prediction and capacity planning.', color: '#8b5cf6' },
				{ icon: ClipboardCheck, title: 'Compliance Reports', description: 'Auto-generated regulatory reports for EEOC, OSHA, GDPR, and local requirements.', color: '#10b981' },
				{ icon: PieChart, title: 'Workforce Analytics', description: 'Deep-dive into headcount, demographics, compensation benchmarks, and trends.', color: '#f43f5e' }
			]
		}
	];
</script>

<section id="categories" class="relative py-20 md:py-32 bg-[var(--surface-base)] overflow-hidden">
	<FloatingOrb color="rgba(117, 194, 246, 0.18)" size="35rem" className="-top-28 -right-28" blur="180px" speed={18} />
	<FloatingOrb color="rgba(139, 92, 246, 0.15)" size="30rem" className="bottom-28 -left-28" blur="180px" speed={25} />
	<FloatingOrb color="rgba(16, 185, 129, 0.1)" size="22rem" className="top-1/4 right-1/4" blur="120px" speed={30} parallax={false} />
	<ParticleField count={25} color="rgba(117, 194, 246, 0.25)" className="pointer-events-none" connectionDistance={120} />

	<div class="max-w-7xl mx-auto px-6 relative z-10">
		<div class="text-center mb-14" data-reveal>
			<SectionBadge variant="gradient">What We Offer</SectionBadge>
			<h2 class="mt-6 text-3xl md:text-4xl lg:text-5xl font-black text-[var(--text-dark)] font-display">
				Everything Your Workforce Needs
			</h2>
			<p class="mt-4 text-[var(--text-dark-muted)] max-w-xl mx-auto text-base md:text-lg">
				Comprehensive modules designed to work together seamlessly — or stand alone.
			</p>
		</div>

		<div class="space-y-12 md:space-y-16">
			{#each categories as cat, catIndex}
				<div data-reveal>
					<div class="flex items-center gap-3 mb-8">
						<div class="w-12 h-12 rounded-2xl flex items-center justify-center" style="background: linear-gradient(135deg, {cat.features[0].color}20, {cat.features[1].color}20);">
							<cat.icon size={24} style="color: {cat.features[0].color}" />
						</div>
						<h3 class="text-2xl md:text-3xl font-bold text-[var(--text-dark)] font-display">{cat.name}</h3>
					</div>

					<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
						{#each cat.features as feat, i}
							<GlowCard glowColor="{feat.color}50" glowSize={220} className="features-card">
								<div class="flex flex-col gap-4 h-full">
									<div class="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style="background: {feat.color}18;">
										<feat.icon size={26} style="color: {feat.color}" />
									</div>
									<div class="flex-1">
										<h3 class="text-lg font-bold text-[var(--text-dark)] mb-2">{feat.title}</h3>
										<p class="text-sm text-[var(--text-dark-muted)] leading-relaxed">{feat.description}</p>
									</div>
									<a href="#demo" class="inline-flex items-center gap-1.5 text-sm font-semibold mt-auto pt-2 transition-colors" style="color: {feat.color}">
										Learn more <ChevronRight size={14} />
									</a>
								</div>
							</GlowCard>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
