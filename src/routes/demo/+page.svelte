<script>
	import { ArrowRight, Play, Users, Brain, BarChart3, Globe, Shield, Zap, Clock, TrendingUp, Check } from '@lucide/svelte';

	const features = [
		{ icon: Brain, title: 'AI Talent Matching', desc: 'Neural algorithms analyze skills, experience, and culture fit to surface the best candidates instantly.', accent: 'text-violet-400', glow: 'rgba(139,92,246,0.15)' },
		{ icon: BarChart3, title: 'Workforce Analytics', desc: 'Real-time dashboards with attrition forecasting, headcount planning, and sentiment analysis.', accent: 'text-sky-400', glow: 'rgba(56,189,248,0.15)' },
		{ icon: Globe, title: 'Global Payroll', desc: 'Process payroll in 40+ currencies with automated tax compliance across 150+ jurisdictions.', accent: 'text-emerald-400', glow: 'rgba(16,185,129,0.15)' },
		{ icon: Shield, title: 'Compliance Engine', desc: 'Auto-updating labor laws, GDPR tools, and audit trails. Stay compliant without the overhead.', accent: 'text-amber-400', glow: 'rgba(245,158,11,0.15)' },
		{ icon: Users, title: 'Employee Portal', desc: 'Self-service for PTO, expenses, benefits enrollment, and performance reviews — all in one place.', accent: 'text-rose-400', glow: 'rgba(244,63,94,0.15)' },
		{ icon: Zap, title: 'Workflow Automation', desc: 'Build approval chains, onboarding flows, and offboarding checklists with our visual builder.', accent: 'text-indigo-400', glow: 'rgba(99,102,241,0.15)' }
	];

	const stats = [
		{ value: '40%', label: 'Faster Hiring', icon: Clock },
		{ value: '$2M', label: 'Penalties Saved', icon: Shield },
		{ value: '28%', label: 'Higher Retention', icon: TrendingUp },
		{ value: '14', label: 'Days to Go Live', icon: Zap }
	];

	const modules = [
		{ name: 'Core HR', status: 'active', users: '12,847' },
		{ name: 'Payroll', status: 'active', users: '12,847' },
		{ name: 'Attendance', status: 'active', users: '11,203' },
		{ name: 'Leave Mgmt', status: 'active', users: '11,203' },
		{ name: 'Performance', status: 'active', users: '9,841' },
		{ name: 'Recruitment', status: 'active', users: '3,210' }
	];
</script>

<svelte:head>
	<title>Demo — PROCOR HRMS</title>
	<meta name="description" content="See PROCOR HRMS in action. Explore AI-powered talent matching, global payroll, real-time workforce analytics, and compliance automation." />
</svelte:head>

<div class="min-h-screen bg-[#080c15] overflow-hidden">

	<section class="pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
		<div class="absolute inset-0 pointer-events-none">
			<div class="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-sky-600/8 rounded-full blur-[120px]"></div>
			<div class="absolute bottom-[-10%] left-[-5%] w-[35rem] h-[35rem] bg-violet-600/8 rounded-full blur-[120px]"></div>
		</div>
		<div class="max-w-7xl mx-auto relative z-10">
			<div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
				<div>
					<div class="inline-flex items-center gap-2 px-5 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[11px] font-extrabold tracking-[0.15em] uppercase mb-8">
						<span class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
						<span class="text-emerald-300">Live Demo</span>
					</div>
					<h1 class="text-4xl sm:text-5xl md:text-6xl font-black font-display leading-[1.1] mb-6">
						<span class="text-white">Your Workforce </span><br />
						<span class="bg-gradient-to-r from-sky-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">On Autopilot</span>
					</h1>
					<p class="text-lg text-white/50 font-medium leading-relaxed mb-8">
						From hiring to retirement — manage your entire workforce with intelligent automation, real-time analytics, and globally compliant payroll.
					</p>
					<div class="flex flex-wrap gap-4 mb-10">
						<a href="/contact" class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-violet-500 text-white rounded-2xl font-bold text-base transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/20 active:scale-[0.98] group">
							<Play size={16} /> Start Free Trial <ArrowRight size={18} class="group-hover:translate-x-1 transition-transform" />
						</a>
						<a href="/contact" class="inline-flex items-center gap-2 px-8 py-4 bg-white/[0.06] border border-white/[0.12] text-white rounded-2xl font-bold text-base hover:bg-white/[0.1] hover:border-white/[0.2] transition-all duration-300">
							Book a Demo
						</a>
					</div>
					<div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
						{#each [{ value: '2,500+', label: 'Clients' }, { value: '40+', label: 'Currencies' }, { value: '99.9%', label: 'Uptime' }, { value: '150+', label: 'Jurisdictions' }] as stat}
							<div class="text-center">
								<p class="text-xl font-black bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent font-display">{stat.value}</p>
								<p class="text-[10px] font-bold text-white/35 uppercase tracking-[0.2em] mt-0.5">{stat.label}</p>
							</div>
						{/each}
					</div>
				</div>

				<div class="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm overflow-hidden">
					<div class="px-4 py-2.5 border-b border-white/[0.06] flex items-center gap-3 bg-white/[0.03]">
						<div class="flex gap-1.5">
							<div class="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
							<div class="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
							<div class="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
						</div>
						<span class="text-[10px] font-mono text-white/30">procor-dashboard.live</span>
						<div class="ml-auto flex items-center gap-1.5">
							<div class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
							<span class="text-[10px] font-bold text-emerald-400">Live</span>
						</div>
					</div>
					<div class="p-5">
						<div class="grid grid-cols-3 gap-2 mb-4">
							{#each modules as mod}
								<div class="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-center">
									<p class="text-[10px] font-bold text-white/30 uppercase">{mod.name}</p>
									<p class="text-xs font-black text-white/80">{mod.users}</p>
									<div class="flex items-center justify-center gap-1 mt-1">
										<div class="w-1 h-1 rounded-full bg-emerald-400"></div>
										<span class="text-[8px] font-bold text-emerald-400">Active</span>
									</div>
								</div>
							{/each}
						</div>
						<div class="grid grid-cols-3 gap-2">
							<div class="p-3 rounded-lg bg-sky-500/10 border border-sky-500/20 text-center">
								<TrendingUp size={14} class="text-sky-400 mx-auto mb-1" />
								<p class="text-sm font-black text-white">91%</p>
								<p class="text-[8px] text-white/30">Satisfaction</p>
							</div>
							<div class="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center">
								<Clock size={14} class="text-emerald-400 mx-auto mb-1" />
								<p class="text-sm font-black text-white">18 days</p>
								<p class="text-[8px] text-white/30">Avg Hire</p>
							</div>
							<div class="p-3 rounded-lg bg-violet-500/10 border border-violet-500/20 text-center">
								<Users size={14} class="text-violet-400 mx-auto mb-1" />
								<p class="text-sm font-black text-white">12,847</p>
								<p class="text-[8px] text-white/30">Employees</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="py-20 md:py-28 px-6 md:px-12 bg-[#0b1120] border-y border-white/[0.06]">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-3xl sm:text-4xl md:text-5xl font-black font-display leading-[1.1] mb-4">
					<span class="text-white">Everything your </span>
					<span class="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">HR team needs</span>
				</h2>
				<p class="text-lg text-white/50 font-medium max-w-2xl mx-auto">
					One platform to manage the entire employee lifecycle.
				</p>
			</div>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
				{#each features as feature}
					<div class="group relative p-7 rounded-2xl bg-white/[0.05] border border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.08] transition-all duration-500 cursor-default overflow-hidden backdrop-blur-sm">
						<div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[inherit]" style="background: radial-gradient(400px circle at 50% 50%, {feature.glow}, transparent 40%);"></div>
						<div class="w-12 h-12 rounded-2xl bg-white/[0.08] border border-white/[0.12] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 relative z-10">
							<feature.icon size={22} class={feature.accent} />
						</div>
						<h3 class="text-lg font-black text-white mb-3 relative z-10">{feature.title}</h3>
						<p class="text-white/45 leading-relaxed font-medium text-sm relative z-10">{feature.desc}</p>
						<div class="w-10 h-[2px] bg-white/10 group-hover:w-full transition-all duration-700 mt-5 rounded-full relative z-10"></div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-16 md:py-20 px-6 md:px-12 bg-[#080c15]">
		<div class="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
			{#each stats as stat}
				<div class="text-center group">
					<div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 mb-5 group-hover:bg-sky-500/15 group-hover:border-sky-500/30 transition-all duration-300">
						<stat.icon size={24} class="text-sky-400" />
					</div>
					<p class="text-3xl font-black bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent font-display mb-2">{stat.value}</p>
					<p class="text-[10px] font-bold text-white/35 uppercase tracking-[0.2em]">{stat.label}</p>
				</div>
			{/each}
		</div>
	</section>

	<section class="py-12 px-6 md:px-12 bg-[#0b1120] border-y border-white/[0.06]">
		<div class="max-w-4xl mx-auto">
			<div class="flex flex-wrap justify-center items-center gap-4 text-xs font-bold text-white/35">
				<span class="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08]">
					<Shield size={14} class="text-emerald-400" /> SOC 2 Certified
				</span>
				<span class="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08]">
					<Shield size={14} class="text-sky-400" /> GDPR Compliant
				</span>
				<span class="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08]">
					<Clock size={14} class="text-violet-400" /> 99.99% Uptime
				</span>
				<span class="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08]">
					<Shield size={14} class="text-amber-400" /> ISO 27001
				</span>
			</div>
		</div>
	</section>

	<section class="py-20 md:py-28 px-6 md:px-12 bg-[#080c15]">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl sm:text-4xl md:text-5xl font-black font-display leading-[1.1] mb-6">
				<span class="text-white">Ready to transform </span>
				<span class="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">your HR?</span>
			</h2>
			<p class="text-lg text-white/50 font-medium max-w-xl mx-auto mb-10">
				Join 2,500+ companies using PROCOR to automate HR, reduce costs, and build better workplaces.
			</p>
			<div class="flex flex-wrap justify-center gap-4">
				<a href="/contact" class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-violet-500 text-white rounded-2xl font-bold text-base transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/20 active:scale-[0.98] group">
					Start Free Trial <ArrowRight size={18} class="group-hover:translate-x-1 transition-transform" />
				</a>
				<a href="/contact" class="inline-flex items-center gap-2 px-8 py-4 bg-white/[0.06] border border-white/[0.12] text-white rounded-2xl font-bold text-base hover:bg-white/[0.1] hover:border-white/[0.2] transition-all duration-300">
					Talk to Sales
				</a>
			</div>
		</div>
	</section>
</div>
