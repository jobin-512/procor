<script>
	import Brain from '@lucide/svelte/icons/brain';
	import Zap from '@lucide/svelte/icons/zap';
	import ShieldCheck from '@lucide/svelte/icons/shield-check';
	import Globe from '@lucide/svelte/icons/globe';
	import BarChart3 from '@lucide/svelte/icons/bar-chart-3';
	import Users from '@lucide/svelte/icons/users';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Sparkles from '@lucide/svelte/icons/sparkles';

	const features = [
		{
			icon: Brain,
			title: 'AI-Powered Matching',
			desc: 'Neural algorithms connect the right talent to the right roles automatically, so recruiting moves faster with less manual screening.',
			gradient: 'from-blue-500 to-blue-600',
			stat: 'Smarter Hiring',
			statLabel: 'Talent'
		},
		{
			icon: Zap,
			title: 'Workflow Automation',
			desc: 'Build complex HR workflows in minutes with our visual drag-and-drop builder. No coding required.',
			gradient: 'from-amber-500 to-orange-500',
			stat: 'Less Busywork',
			statLabel: 'Productivity'
		},
		{
			icon: ShieldCheck,
			title: 'Bank-Grade Security',
			desc: 'Protected with end-to-end encryption and a zero-trust architecture.',
			gradient: 'from-emerald-500 to-green-500',
			stat: 'Encrypted',
			statLabel: 'Security'
		},
		{
			icon: Globe,
			title: 'Global Compliance',
			desc: 'Auto-updating labor laws across many jurisdictions. Never worry about keeping up with every penalty again.',
			gradient: 'from-sky-500 to-blue-500',
			stat: 'Worldwide',
			statLabel: 'Coverage'
		},
		{
			icon: BarChart3,
			title: 'Predictive Analytics',
			desc: 'Attrition forecasting, sentiment analysis, and headcount planning powered by machine learning.',
			gradient: 'from-blue-500 to-sky-400',
			stat: 'Foresight',
			statLabel: 'Insight'
		},
		{
			icon: Users,
			title: 'Employee Experience',
			desc: 'Self-service portal with mobile app, AI chatbot, and personalized dashboards for every employee.',
			gradient: 'from-cyan-500 to-blue-500',
			stat: 'Loved by Staff',
			statLabel: 'Experience'
		}
	];
</script>

<section class="px-6 py-24 md:px-12 md:py-32" data-reveal>
	<div class="mx-auto max-w-7xl">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<div class="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-white/80 backdrop-blur-xl">
				<Sparkles size={16} class="text-blue-400" />
				<span>Supercharged Capabilities</span>
			</div>
			<h2 class="text-4xl font-black leading-[1.05] text-white font-display sm:text-5xl md:text-6xl">
				Everything you need.<br />
				<span class="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Nothing you don't.</span>
			</h2>
			<p class="mx-auto mt-5 max-w-2xl text-lg text-white/50">
				Six powerful modules working in harmony — each built to solve real problems, not create new ones.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each features as feature}
				<div class="group rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.04]">
					<div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br {feature.gradient} shadow-lg transition group-hover:scale-110">
						<svelte:component this={feature.icon} size={26} class="text-white" />
					</div>
					<h3 class="mb-3 text-xl font-bold text-white">{feature.title}</h3>
					<p class="mb-6 text-sm leading-relaxed text-white/50">{feature.desc}</p>
					<div class="flex items-center justify-between border-t border-white/[0.06] pt-5">
						<div>
							<div class="text-lg font-black text-transparent bg-gradient-to-r {feature.gradient} bg-clip-text">{feature.stat}</div>
							<div class="text-xs font-medium uppercase tracking-wider text-white/40">{feature.statLabel}</div>
						</div>
						<div class="flex h-10 w-10 translate-x-4 items-center justify-center rounded-full border border-white/10 bg-white/5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
							<ArrowRight size={16} class="text-white/70" />
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-12 text-center">
			<a href="/features" class="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 font-semibold text-white transition hover:border-white/20 hover:bg-white/10">
				<span>Explore All Features</span>
				<ArrowRight size={18} class="transition group-hover:translate-x-1" />
			</a>
		</div>
	</div>
</section>
