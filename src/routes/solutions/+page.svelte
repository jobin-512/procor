<script>
	import { ArrowRight, Building2, Heart, Factory, Landmark, ShoppingBag, Check, Users, TrendingUp, Globe, Shield, Zap, Clock } from '@lucide/svelte';

	const industries = [
		{
			icon: Building2,
			name: 'Technology',
			desc: 'Scale your engineering teams with AI-powered hiring and performance tracking built for fast-moving tech companies.',
			features: ['Remote workforce management', 'Equity & vesting tracking', 'Sprint-based performance reviews', 'Integration with Jira, GitHub, Slack'],
			accent: 'text-sky-400',
			glow: 'rgba(56,189,248,0.15)'
		},
		{
			icon: Heart,
			name: 'Healthcare',
			desc: 'HIPAA-compliant HR management with shift scheduling, credential tracking, and compliance automation.',
			features: ['Credential expiry alerts', 'Shift swap automation', 'Compliance dashboards', '24/7 workforce scheduling'],
			accent: 'text-emerald-400',
			glow: 'rgba(16,185,129,0.15)'
		},
		{
			icon: Factory,
			name: 'Manufacturing',
			desc: 'Manage floor workers, track attendance with biometric integration, and automate shift scheduling.',
			features: ['Biometric attendance', 'Multi-shift management', 'Safety compliance tracking', 'Overtime automation'],
			accent: 'text-amber-400',
			glow: 'rgba(245,158,11,0.15)'
		},
		{
			icon: Landmark,
			name: 'Financial Services',
			desc: 'SOC 2 certified platform with multi-entity payroll, regulatory compliance, and audit-ready reporting.',
			features: ['Multi-entity payroll', 'Regulatory compliance', 'Audit trail', 'SOX compliance tools'],
			accent: 'text-violet-400',
			glow: 'rgba(139,92,246,0.15)'
		},
		{
			icon: ShoppingBag,
			name: 'Retail',
			desc: 'Handle seasonal workforce spikes, multi-location attendance, and commission-based payroll effortlessly.',
			features: ['Seasonal hiring automation', 'Multi-location sync', 'Commission calculations', 'Floor-level analytics'],
			accent: 'text-rose-400',
			glow: 'rgba(244,63,94,0.15)'
		}
	];

	const useCases = [
		{ icon: Users, title: 'Enterprise', desc: 'Multi-country payroll, advanced compliance, and custom workflows for 1,000+ employee organizations.', accent: 'text-sky-400' },
		{ icon: TrendingUp, title: 'Mid-Market', desc: 'Scalable HR suite with performance management, recruitment, and employee engagement tools.', accent: 'text-violet-400' },
		{ icon: Zap, title: 'Startups', desc: 'Quick onboarding, basic HR, payroll, and leave management for teams of 10-200.', accent: 'text-emerald-400' }
	];

	let activeIndustry = $state(0);
</script>

<svelte:head>
	<title>Solutions — PROCOR HRMS</title>
	<meta name="description" content="PROCOR solutions tailored for Technology, Healthcare, Manufacturing, Financial Services, and Retail industries." />
</svelte:head>

<div class="min-h-screen bg-[#080c15] overflow-hidden">

	<section class="pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
		<div class="absolute inset-0 pointer-events-none">
			<div class="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-violet-600/8 rounded-full blur-[120px]"></div>
		</div>
		<div class="max-w-7xl mx-auto text-center relative z-10">
			<div class="inline-flex items-center gap-2 px-5 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-[11px] font-extrabold tracking-[0.15em] uppercase mb-8">
				<span class="text-violet-300">Solutions</span>
			</div>
			<h1 class="text-4xl sm:text-5xl md:text-6xl font-black font-display leading-[1.1] mb-6">
				<span class="text-white">Built for </span>
				<span class="bg-gradient-to-r from-sky-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">your industry</span>
			</h1>
			<p class="text-lg text-white/50 font-medium max-w-2xl mx-auto leading-relaxed">
				Tailored workforce management solutions for every sector. PROCOR adapts to your industry's unique requirements.
			</p>
		</div>
	</section>

	<section class="py-20 md:py-28 px-6 md:px-12 bg-[#0b1120] border-y border-white/[0.06]">
		<div class="max-w-7xl mx-auto">
			<div class="flex flex-wrap justify-center gap-3 mb-12">
				{#each industries as ind, i}
					<button
						class="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer {activeIndustry === i ? 'bg-gradient-to-r from-sky-500/20 to-violet-500/20 text-white border border-sky-500/30 shadow-lg shadow-sky-500/10' : 'bg-white/[0.04] text-white/40 border border-white/[0.08] hover:border-white/[0.15] hover:text-white/60'}"
						onclick={() => activeIndustry = i}
					>
						<ind.icon size={16} />
						{ind.name}
					</button>
				{/each}
			</div>

			<div class="grid lg:grid-cols-2 gap-12 items-start">
				<div class="p-8 rounded-2xl bg-white/[0.05] border border-white/[0.08] backdrop-blur-sm">
					<div class="w-14 h-14 rounded-2xl bg-white/[0.08] border border-white/[0.12] flex items-center justify-center mb-6">
						{#if activeIndustry === 0}<Building2 size={26} class={industries[activeIndustry].accent} />
						{:else if activeIndustry === 1}<Heart size={26} class={industries[activeIndustry].accent} />
						{:else if activeIndustry === 2}<Factory size={26} class={industries[activeIndustry].accent} />
						{:else if activeIndustry === 3}<Landmark size={26} class={industries[activeIndustry].accent} />
						{:else}<ShoppingBag size={26} class={industries[activeIndustry].accent} />
						{/if}
					</div>
					<h3 class="text-2xl font-black text-white mb-4">{industries[activeIndustry].name}</h3>
					<p class="text-white/50 font-medium leading-relaxed mb-8">{industries[activeIndustry].desc}</p>
					<ul class="space-y-3">
						{#each industries[activeIndustry].features as f}
							<li class="flex items-center gap-3 text-sm text-white/60 font-medium">
								<span class="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0">
									<Check size={12} class="text-emerald-400" />
								</span>
								{f}
							</li>
						{/each}
					</ul>
				</div>
				<div class="space-y-3">
					{#each industries as ind, i}
						<button
							class="w-full text-left p-5 rounded-xl bg-white/[0.04] border {activeIndustry === i ? 'border-sky-500/30 bg-white/[0.07] shadow-lg shadow-sky-500/5' : 'border-white/[0.08] hover:border-white/[0.15]'} transition-all duration-300 cursor-pointer"
							onclick={() => activeIndustry = i}
						>
							<div class="flex items-center gap-3">
								<div class="w-10 h-10 rounded-lg bg-white/[0.08] flex items-center justify-center shrink-0">
									<ind.icon size={18} class={ind.accent} />
								</div>
								<div>
									<p class="font-bold text-white/80 text-sm">{ind.name}</p>
									<p class="text-xs text-white/30 font-medium line-clamp-1">{ind.desc}</p>
								</div>
							</div>
						</button>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="py-20 md:py-28 px-6 md:px-12 bg-[#080c15]">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-3xl sm:text-4xl md:text-5xl font-black font-display leading-[1.1] mb-4">
					<span class="text-white">Solutions for every </span>
					<span class="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">company size</span>
				</h2>
				<p class="text-lg text-white/50 font-medium max-w-2xl mx-auto">
					Whether you are a startup or an enterprise, PROCOR scales with you.
				</p>
			</div>
			<div class="grid md:grid-cols-3 gap-5">
				{#each useCases as uc}
					<div class="group relative p-7 rounded-2xl bg-white/[0.05] border border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.08] transition-all duration-500 cursor-default overflow-hidden backdrop-blur-sm">
						<div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[inherit]" style="background: radial-gradient(400px circle at 50% 50%, rgba(56,189,248,0.1), transparent 40%);"></div>
						<div class="w-12 h-12 rounded-2xl bg-white/[0.08] border border-white/[0.12] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 relative z-10">
							<uc.icon size={22} class={uc.accent} />
						</div>
						<h3 class="text-lg font-black text-white mb-3 relative z-10">{uc.title}</h3>
						<p class="text-white/45 leading-relaxed font-medium text-sm relative z-10">{uc.desc}</p>
						<div class="w-10 h-[2px] bg-white/10 group-hover:w-full transition-all duration-700 mt-5 rounded-full relative z-10"></div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-20 md:py-28 px-6 md:px-12 bg-[#0b1120] border-y border-white/[0.06]">
		<div class="max-w-5xl mx-auto">
			<div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
				{#each [{ val: '2,500+', label: 'Companies', icon: Users }, { val: '150+', label: 'Countries', icon: Globe }, { val: '$2M', label: 'Penalties Saved', icon: Shield }, { val: '14', label: 'Days to Go Live', icon: Clock }] as stat}
					<div class="text-center group">
						<div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 mb-5 group-hover:bg-sky-500/15 group-hover:border-sky-500/30 transition-all duration-300">
							<stat.icon size={24} class="text-sky-400" />
						</div>
						<p class="text-3xl font-black bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent font-display mb-2">{stat.val}</p>
						<p class="text-[10px] font-bold text-white/35 uppercase tracking-[0.2em]">{stat.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-20 md:py-28 px-6 md:px-12 bg-[#080c15]">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl sm:text-4xl md:text-5xl font-black font-display leading-[1.1] mb-6">
				<span class="text-white">Find your </span>
				<span class="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">perfect solution</span>
			</h2>
			<p class="text-lg text-white/50 font-medium max-w-xl mx-auto mb-10">
				Talk to our team about your industry-specific needs.
			</p>
			<div class="flex flex-wrap justify-center gap-4">
				<a href="/contact" class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-violet-500 text-white rounded-2xl font-bold text-base transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/20 active:scale-[0.98] group">
					Get in Touch <ArrowRight size={18} class="group-hover:translate-x-1 transition-transform" />
				</a>
				<a href="/demo" class="inline-flex items-center gap-2 px-8 py-4 bg-white/[0.06] border border-white/[0.12] text-white rounded-2xl font-bold text-base hover:bg-white/[0.1] hover:border-white/[0.2] transition-all duration-300">
					Book a Demo
				</a>
			</div>
		</div>
	</section>
</div>
