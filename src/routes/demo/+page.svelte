<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import PageWebGL from '$lib/components/ui/PageWebGL.svelte';
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import Play from '@lucide/svelte/icons/play';
	import Users from '@lucide/svelte/icons/users';
	import Brain from '@lucide/svelte/icons/brain';
	import BarChart3 from '@lucide/svelte/icons/bar-chart-3';
	import Globe from '@lucide/svelte/icons/globe';
	import Shield from '@lucide/svelte/icons/shield';
	import Zap from '@lucide/svelte/icons/zap';
	import Clock from '@lucide/svelte/icons/clock';
	import TrendingUp from '@lucide/svelte/icons/trending-up';
	import Check from '@lucide/svelte/icons/check';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Rocket from '@lucide/svelte/icons/rocket';
	import DollarSign from '@lucide/svelte/icons/dollar-sign';
	import Activity from '@lucide/svelte/icons/activity';
	import Calendar from '@lucide/svelte/icons/calendar';
	import Mail from '@lucide/svelte/icons/mail';
	import CheckCircle from '@lucide/svelte/icons/check-circle';
	import Loader2 from '@lucide/svelte/icons/loader-2';

	let pageEl = $state(null);
	let formStatus = $state('idle');
	let activeTab = $state(0);

	let formData = $state({
		name: '',
		email: '',
		company: '',
		phone: ''
	});

	const features = [
		{
			icon: Brain,
			title: 'AI-Powered Intelligence',
			description: 'Neural algorithms that learn and adapt to your organization.',
			gradient: 'from-blue-500 to-blue-600'
		},
		{
			icon: Globe,
			title: 'Global Scale',
			description: 'Process payroll in 150+ countries with local compliance.',
			gradient: 'from-sky-500 to-cyan-500'
		},
		{
			icon: BarChart3,
			title: 'Predictive Analytics',
			description: 'Forecast attrition and optimize headcount with ML.',
			gradient: 'from-emerald-500 to-green-500'
		},
		{
			icon: Shield,
			title: 'Enterprise Security',
			description: 'SOC 2 Type II certified with bank-grade encryption.',
			gradient: 'from-amber-500 to-orange-500'
		},
		{
			icon: Zap,
			title: 'Lightning Fast',
			description: 'Sub-second response times, even at scale.',
			gradient: 'from-rose-500 to-pink-500'
		},
		{
			icon: Users,
			title: 'Self-Service Portal',
			description: 'Empower employees with mobile-first experience.',
			gradient: 'from-indigo-500 to-blue-500'
		}
	];

	const demoTabs = [
		{ label: 'Dashboard', icon: BarChart3 },
		{ label: 'Hiring', icon: Users },
		{ label: 'Payroll', icon: DollarSign },
		{ label: 'Analytics', icon: TrendingUp }
	];

	const kpis = [
		{ icon: Users, label: 'Active Employees', value: '12,847', change: '+8.3%', color: 'text-sky-400', bg: 'bg-sky-500/10' },
		{ icon: Clock, label: 'Avg Time-to-Hire', value: '18 days', change: '-22%', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
		{ icon: DollarSign, label: 'Payroll Accuracy', value: '99.97%', change: '+0.12%', color: 'text-blue-400', bg: 'bg-blue-500/10' },
		{ icon: Activity, label: 'Satisfaction', value: '91%', change: '+12pts', color: 'text-amber-400', bg: 'bg-amber-500/10' }
	];

	const benefits = [
		'14-day free trial',
		'No credit card required',
		'Full feature access',
		'Dedicated onboarding'
	];

	const trustBadges = [
		{ icon: Shield, label: 'SOC 2 Certified' },
		{ icon: Globe, label: 'GDPR Compliant' },
		{ icon: Clock, label: '99.99% Uptime' }
	];

	async function handleSubmit(e) {
		e.preventDefault();
		formStatus = 'loading';
		await new Promise(resolve => setTimeout(resolve, 2000));
		formStatus = 'success';
	}

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

<div bind:this={pageEl} class="min-h-screen bg-[#050810] selection:bg-amber-500/30 overflow-hidden">
	<!-- WebGL Background -->
	<PageWebGL theme="amber" intensity={0.8} particleCount={800} />

	<!-- HERO -->
	<section class="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12">
		<div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#050810]/50 to-[#050810] z-[1]"></div>
		
		<div class="max-w-7xl mx-auto w-full relative z-10">
			<div class="grid lg:grid-cols-2 gap-16 items-center">
				<!-- Left: Content -->
				<div class="hero-content">
					<div class="inline-flex items-center gap-3 px-6 py-3 bg-amber-500/20 border border-amber-500/30 rounded-full text-sm font-semibold text-amber-300 mb-8 backdrop-blur-xl">
						<Play size={18} class="text-amber-400" />
						<span>Live Product Demo</span>
					</div>

					<h1 class="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[0.95] font-display mb-6">
						<span class="block">See PROCOR</span>
						<span class="block bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
							in action
						</span>
					</h1>

					<p class="text-xl text-white/60 mb-8 leading-relaxed">
						Experience the future of HR management. Get a personalized demo tailored to your organization's needs.
					</p>

					<!-- Benefits -->
					<div class="flex flex-wrap gap-4 mb-8">
						{#each benefits as benefit}
							<div class="flex items-center gap-2 text-white/60">
								<CheckCircle size={16} class="text-emerald-400" />
								<span class="text-sm">{benefit}</span>
							</div>
						{/each}
					</div>

					<!-- Trust badges -->
					<div class="flex flex-wrap gap-4">
						{#each trustBadges as badge}
							<div class="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08]">
								<svelte:component this={badge.icon} size={16} class="text-amber-400" />
								<span class="text-xs font-medium text-white/60">{badge.label}</span>
							</div>
						{/each}
					</div>
				</div>

				<!-- Right: Form -->
				<div class="hero-content">
					<div class="relative">
						<div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/30 via-orange-500/30 to-red-500/30 blur-2xl"></div>
						<div class="relative p-8 rounded-3xl bg-white/[0.03] border border-white/[0.1] backdrop-blur-xl">
							{#if formStatus === 'success'}
								<div class="text-center py-8">
									<div class="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
										<CheckCircle size={32} class="text-emerald-400" />
									</div>
									<h3 class="text-2xl font-bold text-white mb-2">You're all set!</h3>
									<p class="text-white/60 mb-6">Check your email for demo access instructions.</p>
									<a href="/" class="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors">
										<span>Return to Home</span>
										<ArrowRight size={18} />
									</a>
								</div>
							{:else}
								<h2 class="text-2xl font-bold text-white mb-6">Start your free trial</h2>
								
								<form onsubmit={handleSubmit} class="space-y-5">
									<div>
										<input
											type="text"
											bind:value={formData.name}
											required
											placeholder="Full Name"
											class="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/30 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
										/>
									</div>
									<div>
										<input
											type="email"
											bind:value={formData.email}
											required
											placeholder="Work Email"
											class="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/30 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
										/>
									</div>
									<div>
										<input
											type="text"
											bind:value={formData.company}
											placeholder="Company Name"
											class="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/30 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
										/>
									</div>
									<div>
										<input
											type="tel"
											bind:value={formData.phone}
											placeholder="Phone Number (Optional)"
											class="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/30 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
										/>
									</div>

									<button
										type="submit"
										disabled={formStatus === 'loading'}
										class="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-amber-500/30 transition-all disabled:opacity-50"
									>
										{#if formStatus === 'loading'}
											<Loader2 size={22} class="animate-spin" />
											Starting...
										{:else}
											<Rocket size={22} />
											Start Free Trial
										{/if}
									</button>
								</form>

								<p class="text-center text-xs text-white/40 mt-4">
									By signing up, you agree to our Terms & Privacy Policy
								</p>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- INTERACTIVE DEMO PREVIEW -->
	<section class="relative py-32 px-6 md:px-12">
		<div class="max-w-6xl mx-auto">
			<div class="reveal-section text-center mb-16">
				<div class="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/20 border border-blue-500/20 rounded-full text-sm font-semibold text-blue-300 mb-8">
					<BarChart3 size={16} />
					<span>Interactive Preview</span>
				</div>
				<h2 class="text-4xl sm:text-5xl font-black text-white font-display mb-6">
					Experience the <span class="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">power</span>
				</h2>
			</div>

			<!-- Demo Preview -->
			<div class="reveal-section">
				<!-- Tab Navigation -->
				<div class="flex justify-center gap-3 mb-8">
					{#each demoTabs as tab, i}
						<button
							onclick={() => activeTab = i}
							class="flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 {activeTab === i ? 'bg-blue-500/20 border border-blue-500/30 text-white' : 'text-white/50 hover:text-white hover:bg-white/[0.05]'}"
						>
							<svelte:component this={tab.icon} size={18} />
							{tab.label}
						</button>
					{/each}
				</div>

				<!-- Dashboard Preview -->
				<div class="relative">
					<div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/20 via-blue-600/20 to-sky-500/20 blur-2xl"></div>
					<div class="relative rounded-3xl bg-white/[0.02] border border-white/[0.1] overflow-hidden">
						<!-- Browser Chrome -->
						<div class="px-6 py-4 bg-white/[0.02] border-b border-white/[0.06] flex items-center gap-4">
							<div class="flex gap-2">
								<div class="w-3 h-3 rounded-full bg-rose-500/80"></div>
								<div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
								<div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
							</div>
							<div class="flex-1 flex justify-center">
								<div class="px-4 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08]">
									<span class="text-xs font-mono text-white/40">app.procor.io/{demoTabs[activeTab].label.toLowerCase()}</span>
								</div>
							</div>
							<div class="flex items-center gap-2">
								<div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
								<span class="text-[10px] font-semibold text-emerald-400 uppercase">Live</span>
							</div>
						</div>

						<!-- Dashboard Content -->
						<div class="p-8">
							<!-- KPIs -->
							<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
								{#each kpis as kpi}
									<div class="group p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-all">
										<div class="flex items-center gap-3 mb-3">
											<div class="w-10 h-10 rounded-lg {kpi.bg} flex items-center justify-center group-hover:scale-110 transition-transform">
												<svelte:component this={kpi.icon} size={18} class={kpi.color} />
											</div>
										</div>
										<p class="text-2xl font-bold text-white mb-1">{kpi.value}</p>
										<div class="flex items-center justify-between">
											<span class="text-xs text-white/40">{kpi.label}</span>
											<span class="text-xs font-semibold text-emerald-400">{kpi.change}</span>
										</div>
									</div>
								{/each}
							</div>

							<!-- Chart Placeholder -->
							<div class="p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]">
								<div class="flex items-center justify-between mb-6">
									<div class="flex items-center gap-2">
										<svelte:component this={demoTabs[activeTab].icon} size={18} class="text-blue-400" />
										<span class="text-sm font-semibold text-white/70">{demoTabs[activeTab].label} Overview</span>
									</div>
									<span class="text-xs text-white/30">Last 30 days</span>
								</div>
								<div class="h-48 flex items-end justify-around gap-4">
									{#each [65, 80, 45, 90, 70, 85, 60, 95, 75, 88, 55, 92] as value, i}
										<div 
											class="w-full bg-gradient-to-t from-blue-500/50 to-blue-600/50 rounded-t-lg transition-all duration-500 hover:from-blue-500 hover:to-blue-600"
											style="height: {value}%;"
										></div>
									{/each}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- FEATURES -->
	<section class="relative py-32 px-6 md:px-12">
		<div class="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent"></div>
		
		<div class="max-w-6xl mx-auto relative z-10">
			<div class="reveal-section text-center mb-16">
				<h2 class="text-4xl sm:text-5xl font-black text-white font-display mb-6">
					Why teams <span class="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">love PROCOR</span>
				</h2>
			</div>

			<div class="reveal-section grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each features as feature}
					<div class="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-500">
						<div class="w-12 h-12 rounded-xl bg-gradient-to-br {feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
							<svelte:component this={feature.icon} size={22} class="text-white" />
						</div>
						<h3 class="text-lg font-bold text-white mb-2">{feature.title}</h3>
						<p class="text-white/50 text-sm">{feature.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- FINAL CTA -->
	<section class="relative py-32 px-6 md:px-12">
		<div class="absolute inset-0">
			<div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-amber-600/20 to-transparent rounded-full blur-[150px]"></div>
		</div>

		<div class="reveal-section max-w-4xl mx-auto text-center relative z-10">
			<h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display mb-8">
				Ready to get
				<span class="block bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
					started?
				</span>
			</h2>
			
			<p class="text-xl text-white/50 mb-12 max-w-2xl mx-auto">
				Join 2,500+ organizations that trust PROCOR. Start your free trial today.
			</p>

			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="#top" class="group relative px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-amber-500/30 transition-all">
					<Rocket size={22} />
					Start Free Trial
					<ArrowRight size={20} class="group-hover:translate-x-1 transition-transform" />
				</a>
				<a href="/contact" class="px-10 py-5 bg-white/[0.05] border border-white/[0.1] text-white rounded-2xl font-semibold text-lg hover:bg-white/[0.1] transition-all flex items-center justify-center gap-2">
					<Calendar size={20} />
					Schedule a Call
				</a>
			</div>
		</div>
	</section>
</div>
