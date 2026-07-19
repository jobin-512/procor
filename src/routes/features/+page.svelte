<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import PageWebGL from '$lib/components/ui/PageWebGL.svelte';
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import Users from '@lucide/svelte/icons/users';
	import Building2 from '@lucide/svelte/icons/building-2';
	import FileText from '@lucide/svelte/icons/file-text';
	import Shield from '@lucide/svelte/icons/shield';
	import DollarSign from '@lucide/svelte/icons/dollar-sign';
	import Globe from '@lucide/svelte/icons/globe';
	import Heart from '@lucide/svelte/icons/heart';
	import Clock from '@lucide/svelte/icons/clock';
	import Briefcase from '@lucide/svelte/icons/briefcase';
	import UserPlus from '@lucide/svelte/icons/user-plus';
	import Award from '@lucide/svelte/icons/award';
	import BarChart3 from '@lucide/svelte/icons/bar-chart-3';
	import Target from '@lucide/svelte/icons/target';
	import Brain from '@lucide/svelte/icons/brain';
	import Zap from '@lucide/svelte/icons/zap';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Check from '@lucide/svelte/icons/check';
	import X from '@lucide/svelte/icons/x';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import Play from '@lucide/svelte/icons/play';
	import Rocket from '@lucide/svelte/icons/rocket';

	let pageEl = $state(null);
	let activeCategory = $state(0);
	let activeDemoTab = $state(0);

	const categories = [
		{
			icon: Users,
			title: 'Core HR',
			description: 'Complete employee lifecycle management from hire to retire.',
			gradient: 'from-sky-500 to-cyan-500',
			features: [
				'Employee Database & Profiles',
				'Org Chart Visualization',
				'Document Management',
				'Custom Fields & Workflows',
				'Employee Self-Service Portal',
				'Mobile App Access'
			]
		},
		{
			icon: DollarSign,
			title: 'Payroll',
			description: 'Global payroll processing with 100% compliance guarantee.',
			gradient: 'from-emerald-500 to-green-500',
			features: [
				'Multi-Country Payroll',
				'Automated Tax Calculations',
				'Direct Bank Deposits',
				'Payslip Generation',
				'Expense Management',
				'Benefits Administration'
			]
		},
		{
			icon: UserPlus,
			title: 'Recruitment',
			description: 'AI-powered hiring that finds the perfect candidates faster.',
			gradient: 'from-blue-500 to-blue-600',
			features: [
				'AI Resume Screening',
				'Job Board Integration',
				'Interview Scheduling',
				'Candidate Scoring',
				'Offer Letter Automation',
				'Background Checks'
			]
		},
		{
			icon: Target,
			title: 'Performance',
			description: 'Continuous feedback and goal management for high-performing teams.',
			gradient: 'from-amber-500 to-orange-500',
			features: [
				'OKR & Goal Setting',
				'360° Reviews',
				'Continuous Feedback',
				'Performance Analytics',
				'Calibration Tools',
				'Development Plans'
			]
		},
		{
			icon: Brain,
			title: 'Learning',
			description: 'Personalized learning paths powered by AI recommendations.',
			gradient: 'from-rose-500 to-pink-500',
			features: [
				'Course Library',
				'Custom Content Creation',
				'Learning Paths',
				'Skill Gap Analysis',
				'Certifications',
				'Progress Tracking'
			]
		},
		{
			icon: BarChart3,
			title: 'Analytics',
			description: 'Predictive insights that drive smarter people decisions.',
			gradient: 'from-indigo-500 to-blue-500',
			features: [
				'Real-time Dashboards',
				'Attrition Prediction',
				'Headcount Planning',
				'Diversity Metrics',
				'Custom Reports',
				'Data Export'
			]
		}
	];

	const demoTabs = [
		{ label: 'Dashboard', description: 'Unified view of all HR metrics' },
		{ label: 'Employee Profiles', description: 'Complete employee information' },
		{ label: 'Payroll Run', description: 'One-click global payroll' },
		{ label: 'AI Matching', description: 'Smart candidate recommendations' }
	];

	const comparison = [
		{ feature: 'AI-Powered Matching', procor: true, competitor1: false, competitor2: false },
		{ feature: 'Global Payroll (150+ countries)', procor: true, competitor1: true, competitor2: false },
		{ feature: 'Predictive Analytics', procor: true, competitor1: false, competitor2: true },
		{ feature: 'Mobile App', procor: true, competitor1: true, competitor2: true },
		{ feature: 'Custom Workflows', procor: true, competitor1: true, competitor2: false },
		{ feature: 'Real-time Compliance Updates', procor: true, competitor1: false, competitor2: false },
		{ feature: '24/7 Support', procor: true, competitor1: false, competitor2: true },
		{ feature: 'No Implementation Fee', procor: true, competitor1: false, competitor2: false }
	];

	const integrations = [
		'Slack', 'Microsoft Teams', 'Google Workspace', 'Salesforce', 
		'Zoom', 'QuickBooks', 'Xero', 'SAP', 'Oracle', 'Workday',
		'LinkedIn', 'Indeed', 'Greenhouse', 'DocuSign', 'Okta', 'Azure AD'
	];

	onMount(() => {
		const ctx = gsap.context(() => {
			gsap.fromTo('.hero-content > *', 
				{ y: 50, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
			);

			gsap.utils.toArray('.reveal-section').forEach((section) => {
				gsap.fromTo(section, 
					{ y: 60, opacity: 0 },
					{ 
						y: 0, 
						opacity: 1, 
						duration: 0.8,
						scrollTrigger: {
							trigger: section,
							start: 'top 80%'
						}
					}
				);
			});
		}, pageEl);

		return () => ctx.revert();
	});
</script>

<div bind:this={pageEl} class="min-h-screen bg-[#050810] selection:bg-sky-500/30 overflow-hidden">
	<!-- WebGL Background -->
	<PageWebGL theme="cyan" intensity={0.8} particleCount={800} />

	<!-- HERO -->
	<section class="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 md:px-12">
		<div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#050810]/50 to-[#050810] z-[1]"></div>
		
		<div class="hero-content max-w-5xl mx-auto text-center relative z-10">
			<div class="inline-flex items-center gap-3 px-6 py-3 bg-sky-500/20 border border-sky-500/30 rounded-full text-sm font-semibold text-sky-300 mb-10 backdrop-blur-xl">
				<Sparkles size={18} class="text-sky-400" />
				<span>Powerful Features</span>
			</div>

			<h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] font-display mb-8">
				<span class="block">Everything you need.</span>
				<span class="block bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
					Nothing you don't.
				</span>
			</h1>

			<p class="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
				Six powerful modules working in perfect harmony. Each one designed to solve real problems for modern HR teams.
			</p>

			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/demo" class="group px-10 py-5 bg-gradient-to-r from-sky-500 to-cyan-500 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-sky-500/30 transition-all">
					<Play size={22} />
					Watch Demo
				</a>
				<a href="/contact" class="px-10 py-5 bg-white/[0.05] border border-white/[0.1] text-white rounded-2xl font-semibold text-lg hover:bg-white/[0.1] transition-all flex items-center justify-center gap-3">
					Talk to Sales
					<ArrowRight size={20} />
				</a>
			</div>
		</div>
	</section>

	<!-- FEATURE CATEGORIES -->
	<section class="relative py-32 px-6 md:px-12">
		<div class="max-w-7xl mx-auto">
			<div class="reveal-section text-center mb-20">
				<h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display mb-6">
					Six modules, <span class="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">infinite possibilities</span>
				</h2>
			</div>

			<!-- Category Tabs -->
			<div class="reveal-section flex flex-wrap justify-center gap-3 mb-12">
				{#each categories as category, i}
					<button
						onclick={() => activeCategory = i}
						class="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 {activeCategory === i ? 'bg-gradient-to-r ' + category.gradient + ' text-white shadow-lg' : 'bg-white/[0.05] text-white/60 hover:bg-white/[0.1] hover:text-white'}"
					>
						{category.title}
					</button>
				{/each}
			</div>

			<!-- Active Category Content -->
			<div class="reveal-section grid lg:grid-cols-2 gap-12 items-center">
				<div>
					<div class="w-16 h-16 rounded-2xl bg-gradient-to-br {categories[activeCategory].gradient} flex items-center justify-center mb-6 shadow-lg">
						<svelte:component this={categories[activeCategory].icon} size={32} class="text-white" />
					</div>
					<h3 class="text-3xl md:text-4xl font-black text-white mb-4">{categories[activeCategory].title}</h3>
					<p class="text-xl text-white/60 mb-8">{categories[activeCategory].description}</p>
					
					<div class="grid sm:grid-cols-2 gap-4">
						{#each categories[activeCategory].features as feature}
							<div class="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
								<div class="w-8 h-8 rounded-lg bg-gradient-to-br {categories[activeCategory].gradient} flex items-center justify-center">
									<Check size={16} class="text-white" />
								</div>
								<span class="text-white/80 font-medium">{feature}</span>
							</div>
						{/each}
					</div>

					<a href="/demo" class="inline-flex items-center gap-2 mt-8 text-sky-400 font-semibold hover:text-sky-300 transition-colors group">
						<span>See it in action</span>
						<ChevronRight size={18} class="group-hover:translate-x-1 transition-transform" />
					</a>
				</div>

				<!-- Feature Preview Card -->
				<div class="relative">
					<div class="absolute -inset-1 rounded-3xl bg-gradient-to-r {categories[activeCategory].gradient} opacity-30 blur-2xl"></div>
					<div class="relative p-8 rounded-3xl bg-white/[0.03] border border-white/[0.1] backdrop-blur-xl">
						<div class="aspect-video rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] flex items-center justify-center">
							<div class="text-center">
								<svelte:component this={categories[activeCategory].icon} size={64} class="text-white/20 mx-auto mb-4" />
								<p class="text-white/30 text-sm">Interactive demo preview</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- INTERACTIVE DEMO -->
	<section class="relative py-32 px-6 md:px-12">
		<div class="absolute inset-0 bg-gradient-to-b from-transparent via-sky-950/20 to-transparent"></div>
		
		<div class="max-w-6xl mx-auto relative z-10">
			<div class="reveal-section text-center mb-16">
				<div class="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/20 border border-blue-500/20 rounded-full text-sm font-semibold text-blue-300 mb-8">
					<Play size={16} />
					<span>Interactive Demo</span>
				</div>
				<h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display mb-6">
					See it in <span class="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">action</span>
				</h2>
			</div>

			<!-- Demo Tabs -->
			<div class="reveal-section">
				<div class="flex flex-wrap justify-center gap-4 mb-8">
					{#each demoTabs as tab, i}
						<button
							onclick={() => activeDemoTab = i}
							class="px-6 py-3 rounded-xl transition-all duration-300 {activeDemoTab === i ? 'bg-blue-500/20 border border-blue-500/30 text-white' : 'text-white/50 hover:text-white hover:bg-white/[0.05]'}"
						>
							{tab.label}
						</button>
					{/each}
				</div>

				<!-- Demo Preview -->
				<div class="relative rounded-3xl overflow-hidden">
					<div class="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-blue-600/30 to-sky-500/30 blur-2xl"></div>
					<div class="relative bg-white/[0.02] border border-white/[0.1] rounded-3xl overflow-hidden">
						<!-- Browser Chrome -->
						<div class="px-6 py-4 bg-white/[0.02] border-b border-white/[0.06] flex items-center gap-4">
							<div class="flex gap-2">
								<div class="w-3 h-3 rounded-full bg-rose-500/80"></div>
								<div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
								<div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
							</div>
							<div class="flex-1 flex justify-center">
								<div class="px-4 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08]">
									<span class="text-xs font-mono text-white/40">app.procor.io/{demoTabs[activeDemoTab].label.toLowerCase().replace(' ', '-')}</span>
								</div>
							</div>
						</div>
						
						<!-- Demo Content -->
						<div class="aspect-video p-8 flex items-center justify-center">
							<div class="text-center">
								<div class="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mx-auto mb-6 border border-white/10">
									<Play size={40} class="text-white/40 ml-1" />
								</div>
								<h3 class="text-2xl font-bold text-white mb-2">{demoTabs[activeDemoTab].label}</h3>
								<p class="text-white/50">{demoTabs[activeDemoTab].description}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- COMPARISON TABLE -->
	<section class="relative py-32 px-6 md:px-12">
		<div class="max-w-5xl mx-auto">
			<div class="reveal-section text-center mb-16">
				<div class="inline-flex items-center gap-2 px-5 py-2 bg-emerald-500/20 border border-emerald-500/20 rounded-full text-sm font-semibold text-emerald-300 mb-8">
					<Award size={16} />
					<span>Why PROCOR</span>
				</div>
				<h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display mb-6">
					How we <span class="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">compare</span>
				</h2>
			</div>

			<div class="reveal-section overflow-x-auto">
				<table class="w-full">
					<thead>
						<tr>
							<th class="text-left py-4 px-6 text-white/50 font-semibold">Feature</th>
							<th class="text-center py-4 px-6">
								<div class="inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold">
									PROCOR
								</div>
							</th>
							<th class="text-center py-4 px-6 text-white/50 font-semibold">Competitor A</th>
							<th class="text-center py-4 px-6 text-white/50 font-semibold">Competitor B</th>
						</tr>
					</thead>
					<tbody>
						{#each comparison as row, i}
							<tr class="border-t border-white/[0.06] {i % 2 === 0 ? 'bg-white/[0.01]' : ''}">
								<td class="py-4 px-6 text-white/80">{row.feature}</td>
								<td class="text-center py-4 px-6">
									{#if row.procor}
										<div class="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center mx-auto">
											<Check size={18} class="text-emerald-400" />
										</div>
									{:else}
										<div class="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center mx-auto">
											<X size={18} class="text-rose-400" />
										</div>
									{/if}
								</td>
								<td class="text-center py-4 px-6">
									{#if row.competitor1}
										<Check size={18} class="text-white/30 mx-auto" />
									{:else}
										<X size={18} class="text-white/20 mx-auto" />
									{/if}
								</td>
								<td class="text-center py-4 px-6">
									{#if row.competitor2}
										<Check size={18} class="text-white/30 mx-auto" />
									{:else}
										<X size={18} class="text-white/20 mx-auto" />
									{/if}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</section>

	<!-- INTEGRATIONS -->
	<section class="relative py-32 px-6 md:px-12">
		<div class="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent"></div>
		
		<div class="max-w-6xl mx-auto relative z-10">
			<div class="reveal-section text-center mb-16">
				<div class="inline-flex items-center gap-2 px-5 py-2 bg-indigo-500/20 border border-indigo-500/20 rounded-full text-sm font-semibold text-indigo-300 mb-8">
					<Zap size={16} />
					<span>200+ Integrations</span>
				</div>
				<h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display mb-6">
					Works with your <span class="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">favorite tools</span>
				</h2>
			</div>

			<div class="reveal-section flex flex-wrap justify-center gap-4">
				{#each integrations as integration}
					<div class="px-6 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white/60 font-medium hover:bg-white/[0.06] hover:border-indigo-500/30 hover:text-white transition-all duration-300">
						{integration}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- FINAL CTA -->
	<section class="relative py-32 px-6 md:px-12">
		<div class="absolute inset-0">
			<div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-sky-600/20 to-transparent rounded-full blur-[150px]"></div>
		</div>

		<div class="reveal-section max-w-4xl mx-auto text-center relative z-10">
			<h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display mb-8">
				Ready to see all features
				<span class="block bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
					in action?
				</span>
			</h2>
			
			<p class="text-xl text-white/50 mb-12 max-w-2xl mx-auto">
				Start your free trial today. No credit card required.
			</p>

			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/demo" class="group relative px-10 py-5 bg-gradient-to-r from-sky-500 to-cyan-500 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-sky-500/30 transition-all">
					<Rocket size={22} />
					Start Free Trial
					<ArrowRight size={20} class="group-hover:translate-x-1 transition-transform" />
				</a>
				<a href="/contact" class="px-10 py-5 bg-white/[0.05] border border-white/[0.1] text-white rounded-2xl font-semibold text-lg hover:bg-white/[0.1] transition-all">
					Schedule Demo
				</a>
			</div>
		</div>
	</section>
</div>
