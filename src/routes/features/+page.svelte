<script>
	import {
		Brain, Zap, ShieldCheck, Globe, BarChart3, Users,
		ArrowRight, Check, Calendar, FileText, DollarSign,
		Award, TrendingUp, Building2, Lock, Clock, Sparkles
	} from '@lucide/svelte';

	const categories = [
		{
			icon: Users,
			title: 'Core HR',
			desc: 'Centralize employee data, org charts, and document management in one secure platform.',
			features: ['Employee Database', 'Org Chart Builder', 'Document Vault', 'Custom Fields', 'Audit Trail'],
			accent: 'text-sky-400',
			glow: 'rgba(56,189,248,0.15)'
		},
		{
			icon: Calendar,
			title: 'Leave Management',
			desc: 'Automate leave policies, approvals, and balance tracking across your entire organization.',
			features: ['Policy Engine', 'Auto-Approval Rules', 'Balance Tracking', 'Holiday Calendar', 'Comp Off'],
			accent: 'text-emerald-400',
			glow: 'rgba(16,185,129,0.15)'
		},
		{
			icon: Clock,
			title: 'Attendance & Shifts',
			desc: 'Track attendance with biometric integration, GPS, and shift scheduling.',
			features: ['Biometric Integration', 'GPS Check-in', 'Shift Scheduling', 'Overtime Tracking', 'Regularization'],
			accent: 'text-amber-400',
			glow: 'rgba(245,158,11,0.15)'
		},
		{
			icon: DollarSign,
			title: 'Payroll',
			desc: 'Process payroll in 40+ currencies with automated tax calculations and compliance.',
			features: ['Multi-Currency', 'Tax Automation', 'Direct Bank Transfer', 'Payslip Generation', 'Reimbursements'],
			accent: 'text-violet-400',
			glow: 'rgba(139,92,246,0.15)'
		},
		{
			icon: BarChart3,
			title: 'Performance & Goals',
			desc: 'Set OKRs, run appraisals, and track performance with 360-degree feedback.',
			features: ['OKR Tracking', '360 Feedback', 'Appraisal Cycles', 'Goal Cascading', 'Performance Reports'],
			accent: 'text-rose-400',
			glow: 'rgba(244,63,94,0.15)'
		},
		{
			icon: FileText,
			title: 'Recruitment',
			desc: 'AI-powered talent matching with integrated ATS, interview scheduling, and offer management.',
			features: ['AI Matching', 'ATS Pipeline', 'Interview Scheduler', 'Offer Management', 'Referral Portal'],
			accent: 'text-indigo-400',
			glow: 'rgba(99,102,241,0.15)'
		}
	];

	const integrations = [
		{ name: 'Slack', category: 'Communication' },
		{ name: 'Microsoft Teams', category: 'Communication' },
		{ name: 'Google Workspace', category: 'Productivity' },
		{ name: 'Microsoft 365', category: 'Productivity' },
		{ name: 'QuickBooks', category: 'Accounting' },
		{ name: 'Xero', category: 'Accounting' },
		{ name: 'Gusto', category: 'Payroll' },
		{ name: 'BambooHR', category: 'Migration' },
		{ name: 'Workday', category: 'Migration' },
		{ name: 'SAP', category: 'Enterprise' },
		{ name: 'Salesforce', category: 'CRM' },
		{ name: 'Jira', category: 'Project Mgmt' }
	];

	const comparison = [
		{ feature: 'Employee Management', procor: true, basic: true, legacy: true },
		{ feature: 'Leave & Attendance', procor: true, basic: true, legacy: true },
		{ feature: 'Multi-Currency Payroll', procor: true, basic: false, legacy: 'Limited' },
		{ feature: 'AI Talent Matching', procor: true, basic: false, legacy: false },
		{ feature: 'Real-time Analytics', procor: true, basic: 'Basic', legacy: false },
		{ feature: 'Global Compliance (150+)', procor: true, basic: false, legacy: 'Limited' },
		{ feature: 'Self-Service Portal', procor: true, basic: true, legacy: 'Limited' },
		{ feature: 'Custom Workflows', procor: true, basic: false, legacy: false },
		{ feature: 'API & Integrations', procor: true, basic: 'Basic', legacy: false },
		{ feature: 'Mobile App', procor: true, basic: true, legacy: false }
	];
</script>

<svelte:head>
	<title>Features — PROCOR HRMS</title>
	<meta name="description" content="Explore the powerful features of PROCOR HRMS — from global payroll to AI-powered analytics." />
</svelte:head>

<div class="min-h-screen bg-[#080c15] overflow-hidden">

	<!-- Hero -->
	<section class="pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
		<div class="absolute inset-0 pointer-events-none">
			<div class="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-sky-600/8 rounded-full blur-[120px]"></div>
			<div class="absolute bottom-[-10%] left-[-5%] w-[35rem] h-[35rem] bg-violet-600/8 rounded-full blur-[120px]"></div>
		</div>
		<div class="max-w-7xl mx-auto text-center relative z-10">
			<div class="inline-flex items-center gap-2 px-5 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-[11px] font-extrabold tracking-[0.15em] uppercase mb-8">
				<span class="text-sky-300">Features</span>
			</div>
			<h1 class="text-4xl sm:text-5xl md:text-6xl font-black font-display leading-[1.1] mb-6">
				<span class="text-white">Everything your </span><br class="hidden sm:block" />
				<span class="bg-gradient-to-r from-sky-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">HR team needs</span>
			</h1>
			<p class="text-lg text-white/50 font-medium max-w-2xl mx-auto leading-relaxed">
				One platform to manage the entire employee lifecycle — from first interview to farewell. Built for teams that move fast.
			</p>
		</div>
	</section>

	<!-- Feature Categories -->
	<section class="py-20 md:py-28 px-6 md:px-12 bg-[#0b1120] border-y border-white/[0.06]">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-3xl sm:text-4xl md:text-5xl font-black font-display leading-[1.1] mb-4">
					<span class="text-white">Powerful Modules, </span>
					<span class="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">Simple Interface</span>
				</h2>
				<p class="text-lg text-white/50 font-medium max-w-2xl mx-auto">
					Each module is designed to work standalone or together seamlessly.
				</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
				{#each categories as cat}
					<div class="group relative p-7 rounded-2xl bg-white/[0.05] border border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.08] transition-all duration-500 cursor-default overflow-hidden backdrop-blur-sm">
						<div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[inherit]" style="background: radial-gradient(400px circle at 50% 50%, {cat.glow}, transparent 40%);"></div>
						<div class="w-12 h-12 rounded-2xl bg-white/[0.08] border border-white/[0.12] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 relative z-10">
							<cat.icon size={22} class={cat.accent} />
						</div>
						<h3 class="text-lg font-black text-white mb-3 relative z-10">{cat.title}</h3>
						<p class="text-white/45 leading-relaxed font-medium text-sm mb-5 relative z-10">{cat.desc}</p>
						<ul class="space-y-2 relative z-10">
							{#each cat.features as f}
								<li class="flex items-center gap-2 text-sm text-white/40">
									<Check size={14} class="text-emerald-400/70 shrink-0" />
									{f}
								</li>
							{/each}
						</ul>
						<div class="w-10 h-[2px] bg-white/10 group-hover:w-full transition-all duration-700 mt-5 rounded-full"></div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Key Benefits -->
	<section class="py-20 md:py-28 px-6 md:px-12 bg-[#080c15]">
		<div class="max-w-7xl mx-auto">
			<div class="grid lg:grid-cols-2 gap-16 items-center">
				<div>
					<div class="inline-flex items-center gap-2 px-5 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[11px] font-extrabold tracking-[0.15em] uppercase mb-8">
						<span class="text-emerald-300">Why PROCOR</span>
					</div>
					<h2 class="text-3xl sm:text-4xl md:text-5xl font-black font-display leading-[1.1] mb-6">
						<span class="text-white">Built for teams that </span>
						<span class="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">demand more</span>
					</h2>
					<p class="text-lg text-white/50 font-medium leading-relaxed mb-8">
						PROCOR isn't just another HR tool. It's a complete workforce intelligence platform designed to give you superpowers.
					</p>
					<div class="space-y-5">
						{#each [
							{ icon: TrendingUp, title: 'Reduce Time-to-Hire by 40%', desc: 'AI-powered matching surfaces the best candidates instantly.', accent: 'text-sky-400' },
							{ icon: ShieldCheck, title: 'Zero Compliance Penalties', desc: 'Auto-updating labor laws across 150+ jurisdictions.', accent: 'text-emerald-400' },
							{ icon: Sparkles, title: '28% Higher Retention', desc: 'Employee satisfaction tools that actually work.', accent: 'text-violet-400' }
						] as benefit}
							<div class="flex gap-4">
								<div class="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center shrink-0">
									<benefit.icon size={20} class={benefit.accent} />
								</div>
								<div>
									<h4 class="font-black text-white text-sm mb-1">{benefit.title}</h4>
									<p class="text-white/40 text-sm font-medium">{benefit.desc}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
				<div class="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-8">
					<div class="grid grid-cols-2 gap-4">
						{#each [{ val: '40%', label: 'Faster Hiring', accent: 'text-sky-400' }, { val: '$2M', label: 'Penalties Saved', accent: 'text-emerald-400' }, { val: '28%', label: 'Higher Retention', accent: 'text-violet-400' }, { val: '14', label: 'Days to Go Live', accent: 'text-amber-400' }] as stat}
							<div class="text-center p-5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
								<p class="text-3xl font-black {stat.accent} font-display mb-1">{stat.val}</p>
								<p class="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">{stat.label}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Integrations -->
	<section class="py-20 md:py-28 px-6 md:px-12 bg-[#0b1120] border-y border-white/[0.06]">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-3xl sm:text-4xl md:text-5xl font-black font-display leading-[1.1] mb-4">
					<span class="text-white">Integrates with your </span>
					<span class="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">existing stack</span>
				</h2>
				<p class="text-lg text-white/50 font-medium max-w-2xl mx-auto">
					Connect PROCOR with the tools your team already uses.
				</p>
			</div>
			<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
				{#each integrations as int}
					<div class="flex items-center gap-3 p-4 bg-white/[0.04] rounded-xl border border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.07] transition-all duration-300 cursor-default backdrop-blur-sm">
						<div class="w-10 h-10 rounded-lg bg-white/[0.08] flex items-center justify-center text-xs font-black text-white/50">
							{int.name.charAt(0)}
						</div>
						<div>
							<p class="text-sm font-bold text-white/80">{int.name}</p>
							<p class="text-[10px] font-bold text-white/30 uppercase">{int.category}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Comparison Table -->
	<section class="py-20 md:py-28 px-6 md:px-12 bg-[#080c15]">
		<div class="max-w-4xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-3xl sm:text-4xl md:text-5xl font-black font-display leading-[1.1] mb-4">
					<span class="text-white">Why switch to </span>
					<span class="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">PROCOR?</span>
				</h2>
				<p class="text-lg text-white/50 font-medium">See how we compare to basic HR tools and legacy systems.</p>
			</div>
			<div class="rounded-2xl border border-white/[0.08] overflow-hidden bg-white/[0.03] backdrop-blur-sm">
				<div class="grid grid-cols-4 bg-white/[0.05] border-b border-white/[0.08]">
					<div class="p-4 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Feature</div>
					<div class="p-4 text-center text-[10px] font-extrabold text-sky-400 uppercase tracking-[0.2em]">PROCOR</div>
					<div class="p-4 text-center text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Basic HR</div>
					<div class="p-4 text-center text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Legacy</div>
				</div>
				{#each comparison as row, i}
					<div class="grid grid-cols-4 border-b border-white/[0.06] last:border-b-0 {i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'}">
						<div class="p-4 text-sm font-semibold text-white/60">{row.feature}</div>
						<div class="p-4 text-center">
							{#if row.procor === true}
								<span class="inline-flex w-6 h-6 rounded-full bg-emerald-500/15 items-center justify-center"><Check size={14} class="text-emerald-400" /></span>
							{:else if typeof row.procor === 'string'}
								<span class="text-xs font-bold text-sky-400">{row.procor}</span>
							{/if}
						</div>
						<div class="p-4 text-center">
							{#if row.basic === true}
								<span class="inline-flex w-6 h-6 rounded-full bg-white/[0.06] items-center justify-center"><Check size={14} class="text-white/30" /></span>
							{:else if typeof row.basic === 'string'}
								<span class="text-xs font-bold text-white/30">{row.basic}</span>
							{:else}
								<span class="text-white/15">&mdash;</span>
							{/if}
						</div>
						<div class="p-4 text-center">
							{#if row.legacy === true}
								<span class="inline-flex w-6 h-6 rounded-full bg-white/[0.06] items-center justify-center"><Check size={14} class="text-white/30" /></span>
							{:else if typeof row.legacy === 'string'}
								<span class="text-xs font-bold text-white/30">{row.legacy}</span>
							{:else}
								<span class="text-white/15">&mdash;</span>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section class="py-20 md:py-28 px-6 md:px-12 bg-[#0b1120] border-t border-white/[0.06]">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl sm:text-4xl md:text-5xl font-black font-display leading-[1.1] mb-6">
				<span class="text-white">Ready to upgrade </span>
				<span class="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">your HR?</span>
			</h2>
			<p class="text-lg text-white/50 font-medium max-w-xl mx-auto mb-10">
				Join 2,500+ companies using PROCOR to automate HR, reduce costs, and build better workplaces.
			</p>
			<div class="flex flex-wrap justify-center gap-4">
				<a href="/demo" class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-violet-500 text-white rounded-2xl font-bold text-base transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/20 active:scale-[0.98] group">
					Start Free Trial <ArrowRight size={18} class="group-hover:translate-x-1 transition-transform" />
				</a>
				<a href="/contact" class="inline-flex items-center gap-2 px-8 py-4 bg-white/[0.06] border border-white/[0.12] text-white rounded-2xl font-bold text-base hover:bg-white/[0.1] hover:border-white/[0.2] transition-all duration-300">
					Talk to Sales
				</a>
			</div>
		</div>
	</section>
</div>
