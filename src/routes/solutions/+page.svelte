<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import PageWebGL from '$lib/components/ui/PageWebGL.svelte';
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import Building2 from '@lucide/svelte/icons/building-2';
	import Heart from '@lucide/svelte/icons/heart';
	import Factory from '@lucide/svelte/icons/factory';
	import Landmark from '@lucide/svelte/icons/landmark';
	import ShoppingBag from '@lucide/svelte/icons/shopping-bag';
	import Cpu from '@lucide/svelte/icons/cpu';
	import Check from '@lucide/svelte/icons/check';
	import Users from '@lucide/svelte/icons/users';
	import TrendingUp from '@lucide/svelte/icons/trending-up';
	import Globe from '@lucide/svelte/icons/globe';
	import Shield from '@lucide/svelte/icons/shield';
	import Zap from '@lucide/svelte/icons/zap';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Play from '@lucide/svelte/icons/play';
	import Rocket from '@lucide/svelte/icons/rocket';
	import Quote from '@lucide/svelte/icons/quote';
	import Star from '@lucide/svelte/icons/star';
	import Calculator from '@lucide/svelte/icons/calculator';

	let pageEl = $state(null);
	let activeIndustry = $state(0);
	let employeeCount = $state(500);
	let roiResult = $state(null);

	const industries = [
		{
			icon: Cpu,
			name: 'Technology',
			description: 'Scale your engineering teams while maintaining culture.',
			gradient: 'from-blue-500 to-blue-600',
			challenges: ['Rapid headcount growth', 'Global hiring', 'Retention'],
			benefits: ['40% faster hiring', 'AI-powered matching', 'Equity management'],
			caseStudy: {
				company: 'TechScale Inc.',
				logo: 'T',
				quote: 'PROCOR helped us scale from 200 to 2,000 employees in 18 months.',
				author: 'Sarah Chen',
				role: 'VP of People',
				result: '40% faster time-to-hire'
			}
		},
		{
			icon: Heart,
			name: 'Healthcare',
			description: 'Compliant workforce management for healthcare providers.',
			gradient: 'from-rose-500 to-pink-500',
			challenges: ['Compliance requirements', 'Credentialing', 'Shift scheduling'],
			benefits: ['100% compliance', 'Automated credentialing', 'Smart scheduling'],
			caseStudy: {
				company: 'HealthFirst',
				logo: 'H',
				quote: 'Zero compliance violations since implementing PROCOR.',
				author: 'Dr. James Wilson',
				role: 'CHRO',
				result: '100% compliance rate'
			}
		},
		{
			icon: Factory,
			name: 'Manufacturing',
			description: 'Streamline workforce operations across facilities.',
			gradient: 'from-amber-500 to-orange-500',
			challenges: ['Multi-site management', 'Shift workers', 'Union compliance'],
			benefits: ['Unified workforce view', 'Time & attendance', 'Union rules engine'],
			caseStudy: {
				company: 'Global Manufacturing Co.',
				logo: 'G',
				quote: 'Reduced payroll errors by 99% across 12 facilities.',
				author: 'Mike Thompson',
				role: 'HR Director',
				result: '99% payroll accuracy'
			}
		},
		{
			icon: Landmark,
			name: 'Financial Services',
			description: 'Enterprise-grade security for regulated industries.',
			gradient: 'from-emerald-500 to-green-500',
			challenges: ['Regulatory compliance', 'Audit trails', 'Data security'],
			benefits: ['SOC 2 certified', 'Full audit logs', 'Bank-grade encryption'],
			caseStudy: {
				company: 'FinanceFirst Bank',
				logo: 'F',
				quote: 'Passed every audit with flying colors since day one.',
				author: 'Elena Rodriguez',
				role: 'Chief Compliance Officer',
				result: '100% audit success'
			}
		},
		{
			icon: ShoppingBag,
			name: 'Retail',
			description: 'Manage seasonal workforce at scale.',
			gradient: 'from-sky-500 to-cyan-500',
			challenges: ['Seasonal hiring', 'High turnover', 'Multi-location'],
			benefits: ['Rapid onboarding', 'Predictive attrition', 'Store analytics'],
			caseStudy: {
				company: 'RetailMax',
				logo: 'R',
				quote: 'Cut seasonal hiring time from 3 weeks to 3 days.',
				author: 'David Kim',
				role: 'VP Operations',
				result: '85% faster hiring'
			}
		}
	];

	const companySizes = [
		{ 
			range: '50-200', 
			name: 'Startup',
			description: 'Build your HR foundation right from the start.',
			features: ['Core HR', 'Basic Payroll', 'Recruitment', 'Self-service Portal']
		},
		{ 
			range: '200-1,000', 
			name: 'Scale-up',
			description: 'Scale your people operations without scaling your team.',
			features: ['Everything in Startup', 'Performance Management', 'Learning', 'Analytics']
		},
		{ 
			range: '1,000-5,000', 
			name: 'Mid-Market',
			description: 'Enterprise features at mid-market pricing.',
			features: ['Everything in Scale-up', 'Global Payroll', 'Advanced Compliance', 'Custom Workflows']
		},
		{ 
			range: '5,000+', 
			name: 'Enterprise',
			description: 'Full-scale transformation for global organizations.',
			features: ['Everything in Mid-Market', 'Dedicated CSM', 'Custom Integrations', 'SLA Guarantee']
		}
	];

	const stats = [
		{ value: '2,500+', label: 'Clients', icon: Building2 },
		{ value: '150+', label: 'Countries', icon: Globe },
		{ value: '99.9%', label: 'Uptime', icon: Shield },
		{ value: '40%', label: 'Cost Savings', icon: TrendingUp }
	];

	function calculateROI() {
		const hrCost = employeeCount * 150; // $150 per employee HR cost
		const savings = hrCost * 0.4; // 40% savings
		const implementation = 5000;
		const annualCost = employeeCount * 8 * 12; // $8 per employee per month
		const netSavings = savings - annualCost;
		roiResult = {
			currentCost: hrCost,
			procorCost: annualCost,
			savings: netSavings,
			roi: Math.round((netSavings / annualCost) * 100)
		};
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

<div bind:this={pageEl} class="min-h-screen bg-[#050810] selection:bg-emerald-500/30 overflow-hidden">
	<!-- WebGL Background -->
	<PageWebGL theme="emerald" intensity={0.8} particleCount={800} />

	<!-- HERO -->
	<section class="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 md:px-12">
		<div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#050810]/50 to-[#050810] z-[1]"></div>
		
		<div class="hero-content max-w-5xl mx-auto text-center relative z-10">
			<div class="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-sm font-semibold text-emerald-300 mb-10 backdrop-blur-xl">
				<Sparkles size={18} class="text-emerald-400" />
				<span>Industry Solutions</span>
			</div>

			<h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] font-display mb-8">
				<span class="block">Solutions for</span>
				<span class="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
					every industry
				</span>
			</h1>

			<p class="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
				Tailored HR solutions designed for your industry's unique challenges. From healthcare to tech, we've got you covered.
			</p>

			<!-- Stats -->
			<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
				{#each stats as stat}
					<div class="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
						<svelte:component this={stat.icon} size={24} class="text-emerald-400 mb-3" />
						<div class="text-3xl font-black text-white mb-1">{stat.value}</div>
						<div class="text-sm text-white/50">{stat.label}</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- INDUSTRY TABS -->
	<section class="relative py-32 px-6 md:px-12">
		<div class="max-w-7xl mx-auto">
			<div class="reveal-section text-center mb-16">
				<h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display mb-6">
					Find your <span class="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">industry</span>
				</h2>
			</div>

			<!-- Industry Tabs -->
			<div class="reveal-section flex flex-wrap justify-center gap-3 mb-12">
				{#each industries as industry, i}
					<button
						onclick={() => activeIndustry = i}
						class="group flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 {activeIndustry === i ? 'bg-gradient-to-r ' + industry.gradient + ' text-white shadow-lg scale-105' : 'bg-white/[0.05] text-white/60 hover:bg-white/[0.1] hover:text-white'}"
					>
						<svelte:component this={industry.icon} size={20} />
						{industry.name}
					</button>
				{/each}
			</div>

			<!-- Active Industry Content -->
			<div class="reveal-section grid lg:grid-cols-2 gap-12">
				<!-- Left: Details -->
				<div>
					<div class="w-16 h-16 rounded-2xl bg-gradient-to-br {industries[activeIndustry].gradient} flex items-center justify-center mb-6 shadow-lg">
						<svelte:component this={industries[activeIndustry].icon} size={32} class="text-white" />
					</div>
					<h3 class="text-3xl md:text-4xl font-black text-white mb-4">{industries[activeIndustry].name}</h3>
					<p class="text-xl text-white/60 mb-8">{industries[activeIndustry].description}</p>

					<!-- Challenges & Benefits -->
					<div class="grid sm:grid-cols-2 gap-6 mb-8">
						<div>
							<h4 class="text-sm font-bold text-white/40 uppercase tracking-wider mb-4">Challenges We Solve</h4>
							{#each industries[activeIndustry].challenges as challenge}
								<div class="flex items-center gap-3 mb-3">
									<div class="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
										<Zap size={14} class="text-amber-400" />
									</div>
									<span class="text-white/70">{challenge}</span>
								</div>
							{/each}
						</div>
						<div>
							<h4 class="text-sm font-bold text-white/40 uppercase tracking-wider mb-4">Key Benefits</h4>
							{#each industries[activeIndustry].benefits as benefit}
								<div class="flex items-center gap-3 mb-3">
									<div class="w-6 h-6 rounded bg-emerald-500/20 flex items-center justify-center">
										<Check size={14} class="text-emerald-400" />
									</div>
									<span class="text-white/70">{benefit}</span>
								</div>
							{/each}
						</div>
					</div>

					<a href="/demo" class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r {industries[activeIndustry].gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all group">
						See {industries[activeIndustry].name} Demo
						<ArrowRight size={18} class="group-hover:translate-x-1 transition-transform" />
					</a>
				</div>

				<!-- Right: Case Study -->
				<div class="relative">
					<div class="absolute -inset-1 rounded-3xl bg-gradient-to-r {industries[activeIndustry].gradient} opacity-30 blur-2xl"></div>
					<div class="relative p-8 rounded-3xl bg-white/[0.03] border border-white/[0.1] backdrop-blur-xl h-full">
						<div class="flex items-center gap-4 mb-6">
							<div class="w-14 h-14 rounded-xl bg-gradient-to-br {industries[activeIndustry].gradient} flex items-center justify-center text-2xl font-black text-white">
								{industries[activeIndustry].caseStudy.logo}
							</div>
							<div>
								<div class="text-sm text-white/40 uppercase tracking-wider">Case Study</div>
								<div class="text-lg font-bold text-white">{industries[activeIndustry].caseStudy.company}</div>
							</div>
						</div>

						<Quote size={32} class="text-white/10 mb-4" />
						
						<blockquote class="text-xl text-white/80 mb-8 leading-relaxed">
							"{industries[activeIndustry].caseStudy.quote}"
						</blockquote>

						<div class="flex items-center justify-between pt-6 border-t border-white/[0.06]">
							<div>
								<div class="font-semibold text-white">{industries[activeIndustry].caseStudy.author}</div>
								<div class="text-sm text-white/50">{industries[activeIndustry].caseStudy.role}</div>
							</div>
							<div class="text-right">
								<div class="text-2xl font-black bg-gradient-to-r {industries[activeIndustry].gradient} bg-clip-text text-transparent">
									{industries[activeIndustry].caseStudy.result}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- COMPANY SIZE -->
	<section class="relative py-32 px-6 md:px-12">
		<div class="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent"></div>
		
		<div class="max-w-6xl mx-auto relative z-10">
			<div class="reveal-section text-center mb-16">
				<div class="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/20 border border-blue-500/20 rounded-full text-sm font-semibold text-blue-300 mb-8">
					<Users size={16} />
					<span>Company Size</span>
				</div>
				<h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display mb-6">
					Right-sized for <span class="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">your team</span>
				</h2>
			</div>

			<div class="reveal-section grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each companySizes as size, i}
					<div class="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-blue-500/30 transition-all duration-500">
						<div class="text-3xl font-black text-white mb-2">{size.range}</div>
						<div class="text-blue-400 font-semibold mb-3">{size.name}</div>
						<p class="text-white/50 text-sm mb-6">{size.description}</p>
						
						<div class="space-y-2">
							{#each size.features as feature}
								<div class="flex items-center gap-2 text-sm text-white/60">
									<Check size={14} class="text-emerald-400" />
									<span>{feature}</span>
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ROI CALCULATOR -->
	<section class="relative py-32 px-6 md:px-12">
		<div class="max-w-4xl mx-auto">
			<div class="reveal-section text-center mb-16">
				<div class="inline-flex items-center gap-2 px-5 py-2 bg-amber-500/20 border border-amber-500/20 rounded-full text-sm font-semibold text-amber-300 mb-8">
					<Calculator size={16} />
					<span>ROI Calculator</span>
				</div>
				<h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display mb-6">
					Calculate your <span class="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">savings</span>
				</h2>
			</div>

			<div class="reveal-section">
				<div class="relative">
					<div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/30 to-orange-500/30 blur-2xl"></div>
					<div class="relative p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-white/[0.1] backdrop-blur-xl">
						<div class="mb-8">
							<label class="block text-white font-semibold mb-4">Number of Employees</label>
							<div class="flex items-center gap-6">
								<input
									type="range"
									bind:value={employeeCount}
									min="50"
									max="10000"
									step="50"
									class="flex-1 h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-amber-500"
								/>
								<div class="text-3xl font-black text-white min-w-[100px] text-right">
									{employeeCount.toLocaleString()}
								</div>
							</div>
						</div>

						<button
							onclick={calculateROI}
							class="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-amber-500/30 transition-all"
						>
							Calculate ROI
						</button>

						{#if roiResult}
							<div class="mt-8 pt-8 border-t border-white/[0.06]">
								<div class="grid md:grid-cols-3 gap-6 text-center">
									<div>
										<div class="text-sm text-white/50 mb-2">Current HR Cost (Est.)</div>
										<div class="text-2xl font-bold text-white">${roiResult.currentCost.toLocaleString()}/yr</div>
									</div>
									<div>
										<div class="text-sm text-white/50 mb-2">PROCOR Cost</div>
										<div class="text-2xl font-bold text-white">${roiResult.procorCost.toLocaleString()}/yr</div>
									</div>
									<div>
										<div class="text-sm text-white/50 mb-2">Net Savings</div>
										<div class="text-2xl font-bold text-emerald-400">${roiResult.savings.toLocaleString()}/yr</div>
									</div>
								</div>
								<div class="mt-6 text-center">
									<div class="text-5xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
										{roiResult.roi}% ROI
									</div>
								</div>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- FINAL CTA -->
	<section class="relative py-32 px-6 md:px-12">
		<div class="absolute inset-0">
			<div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-emerald-600/20 to-transparent rounded-full blur-[150px]"></div>
		</div>

		<div class="reveal-section max-w-4xl mx-auto text-center relative z-10">
			<h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display mb-8">
				Ready to transform
				<span class="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
					your industry?
				</span>
			</h2>
			
			<p class="text-xl text-white/50 mb-12 max-w-2xl mx-auto">
				Join thousands of organizations in your industry that trust PROCOR.
			</p>

			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/demo" class="group relative px-10 py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-emerald-500/30 transition-all">
					<Rocket size={22} />
					Start Free Trial
					<ArrowRight size={20} class="group-hover:translate-x-1 transition-transform" />
				</a>
				<a href="/contact" class="px-10 py-5 bg-white/[0.05] border border-white/[0.1] text-white rounded-2xl font-semibold text-lg hover:bg-white/[0.1] transition-all">
					Talk to an Expert
				</a>
			</div>
		</div>
	</section>
</div>
