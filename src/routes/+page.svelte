<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Users from '@lucide/svelte/icons/users';
	import DollarSign from '@lucide/svelte/icons/dollar-sign';
	import Activity from '@lucide/svelte/icons/activity';
	import Globe from '@lucide/svelte/icons/globe';
	import Brain from '@lucide/svelte/icons/brain';
	import Zap from '@lucide/svelte/icons/zap';
	import ShieldCheck from '@lucide/svelte/icons/shield-check';
	import BarChart3 from '@lucide/svelte/icons/bar-chart-3';
	import Rocket from '@lucide/svelte/icons/rocket';
	import Settings2 from '@lucide/svelte/icons/settings-2';
	import LineChart from '@lucide/svelte/icons/line-chart';
	import Clock from '@lucide/svelte/icons/clock';
	import Star from '@lucide/svelte/icons/star';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import Plus from '@lucide/svelte/icons/plus';
	import Minus from '@lucide/svelte/icons/minus';
	
	// Import insane components
	import HomeHero from '$lib/components/home/HomeHero.svelte';
	import InsaneFeatures from '$lib/components/home/InsaneFeatures.svelte';
	import InsaneStats from '$lib/components/home/InsaneStats.svelte';
	import InsaneTestimonials from '$lib/components/home/InsaneTestimonials.svelte';
	import InsaneCTA from '$lib/components/home/InsaneCTA.svelte';

	let mousePos = $state({ x: 0, y: 0 });
	let openFaq = $state(null);
	let barsAnimated = $state(false);

	const brands = [
		'Standard Chartered', 'Deloitte', 'Accenture', 'Salesforce',
		'NVIDIA', 'Shopify', 'Stripe', 'Google', 'Microsoft', 'Adobe',
		'Meta', 'Amazon', 'Netflix', 'Uber', 'Airbnb', 'Spotify'
	];

	const steps = [
		{ 
			icon: Rocket, 
			step: '01', 
			title: 'Discovery Call', 
			desc: 'We analyze your current HR processes, identify pain points, and map out your transformation journey.',
			gradient: 'from-blue-500 to-blue-600'
		},
		{ 
			icon: Settings2, 
			step: '02', 
			title: 'Custom Configuration', 
			desc: 'Our team designs a tailored PROCOR instance optimized for your organizational structure.',
			gradient: 'from-blue-500 to-blue-600'
		},
		{ 
			icon: Users, 
			step: '03', 
			title: 'Seamless Migration', 
			desc: 'Zero-downtime data migration, comprehensive team training, and go-live within 14 days.',
			gradient: 'from-emerald-500 to-green-500'
		},
		{ 
			icon: LineChart, 
			step: '04', 
			title: 'Continuous Growth', 
			desc: 'Ongoing analytics, quarterly business reviews, and AI-driven optimization recommendations.',
			gradient: 'from-amber-500 to-orange-500'
		}
	];

	const faqs = [
		{ q: 'How long does implementation take?', a: 'Most companies are fully onboarded within 14 business days. Enterprise deployments with complex integrations may take 3-4 weeks. Our dedicated implementation team ensures a smooth transition with zero downtime.' },
		{ q: 'Can I start with one module and add more later?', a: 'Absolutely. PROCOR is fully modular — start with Core HR or Payroll, then seamlessly unlock additional modules as your needs evolve. All modules share the same data layer, so there\'s no re-integration required.' },
		{ q: 'Is my data secure?', a: "Security is foundational to everything we build. We're SOC 2 Type II certified, use AES-256 encryption at rest and TLS 1.3 in transit, maintain a zero-trust architecture, and undergo regular third-party penetration testing." },
		{ q: 'Do you support multi-currency and multi-country payroll?', a: 'Yes — PROCOR processes payroll in 40+ currencies across 150+ countries with automated tax calculations, local compliance updates, and direct bank integrations. We handle the complexity so you don\'t have to.' },
		{ q: 'What kind of support do you offer?', a: 'All plans include email and chat support. Growth tier gets priority support with < 4hr SLA. Enterprise receives a dedicated Customer Success Manager, 24/7 phone support, and quarterly business reviews.' },
		{ q: 'Can I migrate from another HRMS?', a: 'Yes! Our migration team handles all data import — employee records, payroll history, benefits, performance reviews — with zero manual entry required. We\'ve successfully migrated customers from every major HR platform.' }
	];

	const kpis = [
		{ icon: Users, label: 'Active Employees', value: '12,847', change: '+8.3%', color: 'text-blue-400', bg: 'bg-blue-500/10' },
		{ icon: Clock, label: 'Avg Time-to-Hire', value: '18 days', change: '-22%', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
		{ icon: DollarSign, label: 'Payroll Accuracy', value: '99.97%', change: '+0.12%', color: 'text-blue-400', bg: 'bg-blue-500/10' },
		{ icon: Activity, label: 'Satisfaction', value: '91%', change: '+12pts', color: 'text-amber-400', bg: 'bg-amber-500/10' }
	];

	const barData = [
		{ label: 'Recruitment', value: 87, color: 'from-blue-500 to-blue-400' },
		{ label: 'Onboarding', value: 94, color: 'from-blue-500 to-blue-400' },
		{ label: 'Payroll', value: 99, color: 'from-emerald-500 to-emerald-400' },
		{ label: 'Compliance', value: 96, color: 'from-blue-500 to-blue-400' }
	];

	onMount(() => {
		const onMouseMove = (e) => {
			mousePos = { x: e.clientX, y: e.clientY };
		};
		window.addEventListener('mousemove', onMouseMove);

		// Animate bars on scroll
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					barsAnimated = true;
					observer.disconnect();
				}
			});
		}, { threshold: 0.2 });

		const dashboardEl = document.querySelector('.dashboard-section');
		if (dashboardEl) observer.observe(dashboardEl);

		return () => {
			window.removeEventListener('mousemove', onMouseMove);
			observer.disconnect();
		};
	});
</script>

<div class="min-h-screen bg-[#050810] selection:bg-blue-500/30 overflow-hidden">

	<!-- INSANE HERO -->
	<HomeHero bind:mousePos />

	<!-- TRUSTED BY — Enhanced -->
	<section class="relative py-16 px-6 md:px-12 overflow-hidden">
		<div class="absolute inset-0 bg-gradient-to-b from-[#050810] via-[#0a1020] to-[#050810]"></div>
		<div class="absolute inset-0 border-y border-white/[0.04]"></div>
		
		<div class="max-w-7xl mx-auto relative z-10">
			<p class="text-center text-xs font-semibold text-white/30 uppercase tracking-[0.3em] mb-10">
				Trusted by industry leaders worldwide
			</p>
			<div class="relative overflow-hidden">
				<div class="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#0a1020] to-transparent z-10"></div>
				<div class="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#0a1020] to-transparent z-10"></div>
				<div class="flex gap-16 items-center animate-scroll-x" style="width: max-content;">
					{#each [...brands, ...brands, ...brands] as brand}
						<span class="text-lg font-bold text-white/20 whitespace-nowrap hover:text-white/40 transition-colors duration-500">{brand}</span>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- INSANE STATS -->
	<InsaneStats />

	<!-- INSANE FEATURES -->
	<InsaneFeatures />

	<!-- HOW IT WORKS — Enhanced -->
	<section class="relative py-32 px-6 md:px-12 overflow-hidden">
		<div class="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#080c15] to-[#0a0f1a]"></div>
		
		<!-- Background effects -->
		<div class="absolute inset-0 pointer-events-none">
			<div class="absolute top-1/2 left-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[200px] -translate-y-1/2"></div>
			<div class="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[180px] -translate-y-1/2"></div>
		</div>

		<div class="max-w-6xl mx-auto relative z-10">
			<div class="text-center mb-20">
				<div class="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/20 border border-emerald-500/20 rounded-full text-sm font-semibold text-emerald-300 mb-8">
					<Sparkles size={16} class="text-emerald-400" />
					<span>Simple Process</span>
				</div>
				<h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display leading-tight mb-6">
					Get started in
					<span class="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> four steps</span>
				</h2>
				<p class="text-xl text-white/50 max-w-2xl mx-auto">
					From discovery to optimization, we ensure a smooth journey for your entire organization.
				</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
				{#each steps as step, i}
					<div class="group relative">
						<!-- Card glow on hover -->
						<div class="absolute -inset-0.5 rounded-3xl bg-gradient-to-r {step.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
						
						<div class="relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl transition-all duration-500 group-hover:bg-white/[0.05] group-hover:border-white/[0.15] text-center h-full">
							<!-- Step number -->
							<div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br {step.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
								<span class="text-2xl font-black text-white">{step.step}</span>
							</div>
							
							<h3 class="text-xl font-bold text-white mb-4">{step.title}</h3>
							<p class="text-white/50 leading-relaxed text-sm">{step.desc}</p>
							
							<!-- Connector line -->
							{#if i < steps.length - 1}
								<div class="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/10 to-transparent"></div>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- DASHBOARD PREVIEW — Enhanced -->
	<section class="dashboard-section relative py-32 px-6 md:px-12 overflow-hidden">
		<div class="absolute inset-0 bg-[#050810]"></div>
		
		<div class="absolute inset-0 pointer-events-none">
			<div class="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[200px]"></div>
			<div class="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[180px]"></div>
		</div>

		<div class="max-w-6xl mx-auto relative z-10">
			<div class="text-center mb-16">
<div class="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 border border-blue-500/20 rounded-full text-sm font-semibold text-blue-300 mb-8">
				<BarChart3 size={16} class="text-blue-400" />
			</div>
				<h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display leading-tight mb-6">
					Insights at a
					<span class="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent"> glance</span>
				</h2>
				<p class="text-xl text-white/50">Real-time workforce analytics that drive smarter decisions.</p>
			</div>

			<!-- Dashboard Mock -->
			<div class="relative">
				<!-- Outer glow -->
				<div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-500/20 via-blue-500/20 to-sky-500/20 blur-2xl"></div>
				
				<div class="relative rounded-3xl bg-white/[0.02] border border-white/[0.1] overflow-hidden shadow-2xl shadow-black/50 backdrop-blur-xl">
					<!-- Browser chrome -->
					<div class="px-6 py-4 border-b border-white/[0.06] flex items-center gap-4 bg-white/[0.02]">
						<div class="flex gap-2">
							<div class="w-3 h-3 rounded-full bg-rose-500/80"></div>
							<div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
							<div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
						</div>
						<div class="flex-1 flex justify-center">
							<div class="px-4 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08]">
								<span class="text-xs font-mono text-white/40">dashboard.procor.io</span>
							</div>
						</div>
						<div class="flex items-center gap-2">
							<div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
							<span class="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">Live</span>
						</div>
					</div>
					
					<div class="p-8">
						<!-- KPIs -->
						<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
							{#each kpis as kpi}
								<div class="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300">
									<div class="flex items-center gap-3 mb-4">
										<div class="w-10 h-10 rounded-xl {kpi.bg} flex items-center justify-center group-hover:scale-110 transition-transform">
											<kpi.icon size={18} class={kpi.color} />
										</div>
									</div>
									<p class="text-2xl md:text-3xl font-bold text-white mb-1">{kpi.value}</p>
									<div class="flex items-center justify-between">
										<span class="text-xs text-white/40">{kpi.label}</span>
										<span class="text-xs font-semibold text-emerald-400">{kpi.change}</span>
									</div>
								</div>
							{/each}
						</div>

						<!-- Charts -->
						<div class="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
							<div class="flex items-center justify-between mb-6">
								<div class="flex items-center gap-2">
									<BarChart3 size={18} class="text-sky-400" />
									<span class="text-sm font-semibold text-white/70">Module Performance</span>
								</div>
								<span class="text-xs text-white/30">Last 30 days</span>
							</div>
							<div class="space-y-5">
								{#each barData as bar, i}
									<div>
										<div class="flex justify-between items-center mb-2">
											<span class="text-sm text-white/60">{bar.label}</span>
											<span class="text-sm font-bold text-white/80">{bar.value}%</span>
										</div>
										<div class="h-3 rounded-full bg-white/[0.05] overflow-hidden">
											<div 
												class="h-full rounded-full bg-gradient-to-r {bar.color} transition-all duration-1000 ease-out"
												style="width: {barsAnimated ? bar.value : 0}%; transition-delay: {i * 150}ms;"
											></div>
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

	<!-- INSANE TESTIMONIALS -->
	<InsaneTestimonials />

	<!-- FAQ — Enhanced -->
	<section class="relative py-32 px-6 md:px-12 overflow-hidden">
		<div class="absolute inset-0 bg-gradient-to-b from-[#080c15] via-[#0a1020] to-[#080c15]"></div>
		
		<div class="max-w-3xl mx-auto relative z-10">
			<div class="text-center mb-16">
				<div class="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.05] border border-white/[0.1] rounded-full text-sm font-semibold text-white/60 mb-8">
					<span>Frequently Asked Questions</span>
				</div>
				<h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display leading-tight">
					Got <span class="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">questions?</span>
				</h2>
			</div>

			<div class="space-y-4">
				{#each faqs as faq, i}
					<div class="group rounded-2xl bg-white/[0.02] border {openFaq === i ? 'border-blue-500/30 bg-blue-500/[0.02]' : 'border-white/[0.06]'} transition-all duration-300 overflow-hidden backdrop-blur-xl">
						<button
							class="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-white/[0.02] transition-colors"
							onclick={() => (openFaq = openFaq === i ? null : i)}
						>
							<span class="font-semibold text-white/90 pr-4 text-lg">{faq.q}</span>
							<div class="shrink-0 w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center transition-all duration-300 {openFaq === i ? 'bg-blue-500/20 border-blue-500/30 rotate-180' : ''}">
								{#if openFaq === i}
									<Minus size={18} class="text-blue-400" />
								{:else}
									<Plus size={18} class="text-white/50" />
								{/if}
							</div>
						</button>
						{#if openFaq === i}
							<div class="px-6 pb-6 animate-fadeIn">
								<p class="text-white/60 leading-relaxed">{faq.a}</p>
							</div>
						{/if}
					</div>
				{/each}
			</div>

			<div class="text-center mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-white/[0.08]">
				<p class="text-white/60 font-medium mb-4">Still have questions?</p>
				<a href="/contact" class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] group">
					Talk to our team <ArrowRight size={18} class="group-hover:translate-x-1 transition-transform" />
				</a>
			</div>
		</div>
	</section>

	<!-- INSANE CTA -->
	<InsaneCTA />
</div>

<style>
	@keyframes scroll-x {
		0% { transform: translateX(0); }
		100% { transform: translateX(-33.333%); }
	}
	
	.animate-scroll-x {
		animation: scroll-x 30s linear infinite;
	}
	
	@keyframes fadeIn {
		from { opacity: 0; transform: translateY(-10px); }
		to { opacity: 1; transform: translateY(0); }
	}
	
	.animate-fadeIn {
		animation: fadeIn 0.3s ease-out;
	}
</style>
