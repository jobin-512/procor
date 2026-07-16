<script>
	import { onMount } from 'svelte';
	import {
		Users, DollarSign, Activity, Globe,
		Brain, Zap, ShieldCheck, BarChart3,
		Rocket, Settings2, LineChart,
		Clock, Star, ChevronDown, ArrowRight,
		TrendingUp, Play, Check
	} from '@lucide/svelte';
	import HomeHero from '$lib/components/home/HomeHero.svelte';

	let mousePos = $state({ x: 0, y: 0 });
	let openFaq = $state(null);
	let barsAnimated = $state(false);

	const brands = [
		{ name: 'Standard Chartered', icon: 'SC' },
		{ name: 'Deloitte', icon: 'D' },
		{ name: 'Accenture', icon: 'A' },
		{ name: 'Salesforce', icon: 'SF' },
		{ name: 'NVIDIA', icon: 'NV' },
		{ name: 'Shopify', icon: 'S' },
		{ name: 'Stripe', icon: 'ST' },
		{ name: 'Google', icon: 'G' }
	];

	const features = [
		{ icon: Brain, title: 'AI-Powered Matching', desc: 'Neural algorithms connect the right talent to the right roles automatically, reducing time-to-hire by 40%.', accent: 'text-violet-400', glow: 'rgba(139,92,246,0.3)' },
		{ icon: Zap, title: 'Workflow Automation', desc: 'Build complex HR workflows in minutes with our visual drag-and-drop builder. No coding required.', accent: 'text-amber-400', glow: 'rgba(245,158,11,0.3)' },
		{ icon: ShieldCheck, title: 'Bank-Grade Security', desc: 'SOC 2 Type II certified with end-to-end encryption and zero-trust architecture.', accent: 'text-emerald-400', glow: 'rgba(16,185,129,0.3)' },
		{ icon: Globe, title: 'Global Compliance', desc: 'Auto-updating labor laws across 150+ jurisdictions. Never worry about penalties again.', accent: 'text-sky-400', glow: 'rgba(56,189,248,0.3)' },
		{ icon: BarChart3, title: 'Real-time Analytics', desc: 'Attrition forecasting, sentiment analysis, and headcount planning powered by machine learning.', accent: 'text-rose-400', glow: 'rgba(244,63,94,0.3)' },
		{ icon: Users, title: 'Employee Self-Service', desc: 'Punch-in, expense claims, leave requests — all automated through an intuitive self-service portal.', accent: 'text-indigo-400', glow: 'rgba(99,102,241,0.3)' }
	];

	const steps = [
		{ icon: Rocket, step: '01', title: 'Discovery Call', desc: 'We analyze your current HR processes, pain points, and growth objectives to map the perfect solution.' },
		{ icon: Settings2, step: '02', title: 'Custom Architecture', desc: 'Our team designs a tailored PROCOR setup — selecting modules, integrations, and workflows.' },
		{ icon: Users, step: '03', title: 'Seamless Onboarding', desc: 'Data migration, team training, and configuration in parallel. Go live within 14 days.' },
		{ icon: LineChart, step: '04', title: 'Continuous Optimization', desc: 'Ongoing analytics reports, quarterly business reviews, and AI-driven recommendations.' }
	];

	const testimonials = [
		{ name: 'Sarah Jenkins', role: 'Chief People Officer', company: 'GlobalTech', content: "PROCOR didn't just automate our HR; they redesigned how we think about workforce growth. AI matching reduced time-to-hire by 40%.", rating: 5, avatar: 'https://i.pravatar.cc/150?img=33' },
		{ name: 'Marcus Chen', role: 'VP of Operations', company: 'FinServe', content: 'Managing payroll across 12 countries used to be a nightmare. Now it happens automatically with zero errors.', rating: 5, avatar: 'https://i.pravatar.cc/150?img=12' },
		{ name: 'Elena Rodriguez', role: 'HR Director', company: 'MedCare', content: 'We evaluated 7 platforms before choosing PROCOR. Employee satisfaction is up 28% in six months.', rating: 5, avatar: 'https://i.pravatar.cc/150?img=47' },
		{ name: 'David Okonkwo', role: 'CEO', company: 'NovaBridge', content: "PROCOR's elasticity is unmatched — we went from 200 to 2,000 employees in 18 months without a hiccup.", rating: 5, avatar: 'https://i.pravatar.cc/150?img=59' },
		{ name: 'Priya Sharma', role: 'Head of Talent', company: 'CloudScale', content: 'The compliance engine alone saved us $2M in potential penalties. The ROI is incredible.', rating: 5, avatar: 'https://i.pravatar.cc/150?img=25' },
		{ name: 'James Walker', role: 'COO', company: 'DataFlow', content: 'Onboarding 500 employees in a week was seamless. The self-service portal is a game-changer.', rating: 5, avatar: 'https://i.pravatar.cc/150?img=14' }
	];

	const faqs = [
		{ q: 'How long does implementation take?', a: 'Most companies are fully onboarded within 14 business days. Enterprise deployments with complex integrations may take 3-4 weeks.' },
		{ q: 'Can I start with one module and add more later?', a: 'Absolutely. PROCOR is modular — start with Core HR or Payroll, then unlock additional modules as your needs grow.' },
		{ q: 'Is my data secure?', a: "Security is foundational. We're SOC 2 Type II certified, use AES-256 encryption at rest and TLS 1.3 in transit, and maintain a zero-trust architecture." },
		{ q: 'Do you support multi-currency payroll?', a: 'Yes — PROCOR processes payroll in 40+ currencies with automated tax calculations, local compliance updates, and direct bank integrations.' },
		{ q: 'What kind of support do you offer?', a: 'All plans include email support. Growth gets priority support with < 4hr SLA. Enterprise receives a dedicated account manager and custom SLAs.' },
		{ q: 'Can I migrate from another HRMS?', a: 'Yes! Our migration team handles all data import — employee records, payroll history, benefits — with zero manual entry required.' }
	];

	const stats = [
		{ value: 2500, suffix: '+', label: 'Global Clients', icon: Users },
		{ value: 40, suffix: '+', label: 'Currencies', icon: DollarSign },
		{ value: 99.9, suffix: '%', label: 'Uptime', icon: Activity },
		{ value: 150, suffix: '+', label: 'Compliance Regions', icon: Globe }
	];

	const kpis = [
		{ icon: Users, label: 'Active Employees', value: '12,847', change: '+8.3%', up: true, color: 'text-sky-400', bg: 'bg-sky-500/15' },
		{ icon: Clock, label: 'Avg Time-to-Hire', value: '18 days', change: '-22%', up: true, color: 'text-emerald-400', bg: 'bg-emerald-500/15' },
		{ icon: DollarSign, label: 'Payroll Accuracy', value: '99.97%', change: '+0.12%', up: true, color: 'text-violet-400', bg: 'bg-violet-500/15' },
		{ icon: Activity, label: 'Employee Satisfaction', value: '91%', change: '+12pts', up: true, color: 'text-amber-400', bg: 'bg-amber-500/15' }
	];

	const barData = [
		{ label: 'Recruitment', value: 87, color: 'from-sky-500 to-sky-400' },
		{ label: 'Onboarding', value: 94, color: 'from-violet-500 to-violet-400' },
		{ label: 'Payroll', value: 99, color: 'from-emerald-500 to-emerald-400' },
		{ label: 'Compliance', value: 96, color: 'from-indigo-500 to-indigo-400' },
		{ label: 'Analytics', value: 82, color: 'from-rose-500 to-rose-400' },
		{ label: 'Self-Service', value: 91, color: 'from-amber-500 to-amber-400' }
	];

	const linePoints = [
		{ month: 'Jan', value: 42 }, { month: 'Feb', value: 48 }, { month: 'Mar', value: 45 },
		{ month: 'Apr', value: 62 }, { month: 'May', value: 58 }, { month: 'Jun', value: 71 },
		{ month: 'Jul', value: 68 }, { month: 'Aug', value: 85 }, { month: 'Sep', value: 82 },
		{ month: 'Oct', value: 94 }, { month: 'Nov', value: 91 }, { month: 'Dec', value: 98 }
	];

	const chartW = 600;
	const chartH = 200;

	function getLinePath(points, w, h) {
		const stepX = w / (points.length - 1);
		return points.map((p, i) => `${i === 0 ? 'M' : 'L'}${i * stepX},${h - (p.value / 100) * h}`).join(' ');
	}

	function getAreaPath(points, w, h) {
		const stepX = w / (points.length - 1);
		const line = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${i * stepX},${h - (p.value / 100) * h}`).join(' ');
		return `${line} L${(points.length - 1) * stepX},${h} L0,${h} Z`;
	}

	const linePath = $derived(getLinePath(linePoints, chartW, chartH));
	const areaPath = $derived(getAreaPath(linePoints, chartW, chartH));

	onMount(() => {
		const onMouseMove = (e) => {
			mousePos = { x: e.clientX, y: e.clientY };
		};
		window.addEventListener('mousemove', onMouseMove);

		// Animate bars + chart on scroll
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					barsAnimated = true;
					observer.disconnect();
				}
			});
		}, { threshold: 0.1 });

		document.querySelectorAll('.features-section, .dashboard-mock').forEach(el => observer.observe(el));

		return () => {
			window.removeEventListener('mousemove', onMouseMove);
			observer.disconnect();
		};
	});
</script>

<div class="min-h-screen bg-[#080c15] selection:bg-sky-500/30 overflow-hidden">

	<!-- ═══════ HERO ═══════ -->
	<HomeHero bind:mousePos />

	<!-- ═══════ TRUSTED BY ═══════ -->
	<section class="py-16 px-6 md:px-12 bg-[#0b1120] border-y border-white/[0.06]">
		<div class="max-w-7xl mx-auto text-center mb-10">
			<p class="text-[11px] font-bold text-white/35 uppercase tracking-[0.25em]">Trusted by market leaders</p>
		</div>
		<div class="relative overflow-hidden max-w-7xl mx-auto">
			<div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0b1120] to-transparent z-10 pointer-events-none"></div>
			<div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0b1120] to-transparent z-10 pointer-events-none"></div>
			<div class="flex gap-8 items-center animate-scroll-x h-20" style="width: max-content;">
				{#each [...brands, ...brands, ...brands] as brand}
					<div class="flex items-center gap-3 px-6 py-3 bg-white/[0.04] rounded-xl border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.07] transition-all duration-500 cursor-default shrink-0 backdrop-blur-sm">
						<div class="w-8 h-8 rounded-lg bg-white/[0.08] flex items-center justify-center text-xs font-black text-white/50">
							{brand.icon}
						</div>
						<span class="text-sm font-bold text-white/40 whitespace-nowrap hover:text-white/70 transition-colors">{brand.name}</span>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ═══════ STATS ═══════ -->
	<section class="py-20 md:py-28 px-6 md:px-12 bg-[#080c15]">
		<div class="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
			{#each stats as stat}
				<div class="text-center group">
					<div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 mb-5 group-hover:bg-sky-500/15 group-hover:border-sky-500/30 transition-all duration-300">
						<stat.icon size={24} class="text-sky-400" />
					</div>
					<p class="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent font-display mb-2 tabular-nums">
						{stat.value}{stat.suffix}
					</p>
					<p class="text-[10px] font-bold text-white/35 uppercase tracking-[0.2em]">{stat.label}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- ═══════ FEATURES ═══════ -->
	<section class="features-section relative py-20 md:py-32 px-6 md:px-12 bg-[#0d1424] overflow-hidden">
		<div class="absolute inset-0 pointer-events-none">
			<div class="absolute top-0 left-1/4 w-[50rem] h-[50rem] bg-sky-600/8 rounded-full blur-[200px]"></div>
			<div class="absolute bottom-0 right-1/4 w-[40rem] h-[40rem] bg-violet-600/8 rounded-full blur-[180px]"></div>
		</div>

		<div class="max-w-7xl mx-auto relative z-10">
			<div class="text-center mb-20 max-w-3xl mx-auto">
				<div class="inline-flex items-center gap-2 px-5 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-[11px] font-extrabold tracking-[0.15em] uppercase mb-8">
					<span class="text-sky-300">Core Capabilities</span>
				</div>
				<h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white font-display leading-[1.1] mb-6">
					Precision Engineered for
					<span class="bg-gradient-to-r from-sky-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent"> People.</span>
				</h2>
				<p class="text-lg text-white/50 font-medium leading-relaxed">
					Complex HR processes distilled into a high-performance platform that empowers every layer of your organization.
				</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
				{#each features as feature, i}
					<div class="group relative p-7 rounded-2xl bg-white/[0.05] border border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.08] transition-all duration-500 cursor-default overflow-hidden backdrop-blur-sm">
						<div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[inherit]" style="background: radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), {feature.glow}, transparent 40%);"></div>

						<!-- Unique visualization per card -->
						<div class="w-full h-28 rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-hidden relative mb-5 flex items-center justify-center">
							{#if i === 0}
								<!-- Neural Network Nodes -->
								<svg class="w-full h-full" viewBox="0 0 200 100">
									{#each [30,70,110,150] as x, col}
										{#each [25,50,75] as y, row}
											<circle cx={x} cy={y} r="4" fill="rgba(139,92,246,0.7)" class="animate-pulse" style="animation-delay: {(col*3+row)*120}ms;" />
											{#if col < 3}
												{#each [25,50,75] as ty}
													<line x1={x} y1={y} x2={x+40} y2={ty} stroke="rgba(139,92,246,0.15)" stroke-width="0.8" />
												{/each}
											{/if}
										{/each}
									{/each}
								</svg>
							{:else if i === 1}
								<!-- Pipeline Flow -->
								<div class="flex items-center gap-1 px-4 w-full">
									{#each ['Draft','Review','Approve','Deploy'] as stage, j}
										<div class="flex-1 flex flex-col items-center gap-1">
											<div class="w-full h-10 rounded-lg bg-gradient-to-b from-amber-500/30 to-amber-500/10 border border-amber-500/20 flex items-center justify-center animate-pulse" style="animation-delay: {j*300}ms;">
												<span class="text-[8px] font-bold text-amber-400/80">{stage}</span>
											</div>
										</div>
										{#if j < 3}
											<svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6h8M7 3l3 3-3 3" stroke="rgba(245,158,11,0.4)" fill="none" stroke-width="1.2"/></svg>
										{/if}
									{/each}
								</div>
							{:else if i === 2}
								<!-- Shield with rings -->
								<div class="relative flex items-center justify-center">
									<div class="absolute w-24 h-24 border border-emerald-500/10 rounded-full animate-ping" style="animation-duration: 3s;"></div>
									<div class="absolute w-16 h-16 border border-emerald-500/15 rounded-full animate-ping" style="animation-duration: 2.5s;"></div>
									<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(16,185,129,0.6)" stroke-width="1.5"><path d="M12 2l8 4v6c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V6l8-4z"/><path d="M9 12l2 2 4-4" stroke="rgba(16,185,129,0.8)"/></svg>
								</div>
							{:else if i === 3}
								<!-- Globe with orbit -->
								<div class="relative flex items-center justify-center">
									<div class="absolute w-28 h-12 border border-sky-500/15 rounded-full animate-spin-slow" style="animation-duration: 8s;"></div>
									<div class="absolute w-20 h-20 border border-sky-500/10 rounded-full"></div>
									<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(56,189,248,0.6)" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="4" ry="10"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
									<div class="absolute w-2 h-2 bg-sky-400 rounded-full animate-spin-slow" style="animation-duration: 8s; transform-origin: 0 56px;"></div>
								</div>
							{:else if i === 4}
								<!-- Line chart -->
								<svg class="w-full h-full px-4" viewBox="0 0 200 80">
									{#each [0.25,0.5,0.75] as f}
										<line x1="10" y1={80*(1-f)} x2="190" y2={80*(1-f)} stroke="rgba(244,63,94,0.08)" stroke-width="0.8"/>
									{/each}
									<polyline points="10,65 40,50 70,55 100,35 130,40 160,20 190,15" fill="none" stroke="url(#roseLine)" stroke-width="2.5" stroke-linecap="round"/>
									<polygon points="10,65 40,50 70,55 100,35 130,40 160,20 190,15 190,80 10,80" fill="url(#roseArea)"/>
									{#each [[10,65],[40,50],[70,55],[100,35],[130,40],[160,20],[190,15]] as [cx,cy]}
										<circle {cx} {cy} r="3" fill="rgba(244,63,94,0.8)"/>
									{/each}
									<defs>
										<linearGradient id="roseLine" x1="0" y1="0" x2="200" y2="0"><stop offset="0%" stop-color="#f43f5e" stop-opacity="0.5"/><stop offset="100%" stop-color="#fb7185" stop-opacity="0.9"/></linearGradient>
										<linearGradient id="roseArea" x1="0" y1="0" x2="0" y2="80"><stop offset="0%" stop-color="rgba(244,63,94,0.2)"/><stop offset="100%" stop-color="rgba(244,63,94,0)"/></linearGradient>
									</defs>
								</svg>
							{:else}
								<!-- User grid -->
								<div class="grid grid-cols-4 gap-2 p-4">
									{#each Array(8) as _, j}
										<div class="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500/30 to-indigo-400/10 border border-indigo-500/20 flex items-center justify-center animate-pulse" style="animation-delay: {j*150}ms;">
											<div class="w-3 h-3 rounded-full bg-indigo-400/40"></div>
										</div>
									{/each}
								</div>
							{/if}
						</div>

						<div class="w-12 h-12 rounded-2xl bg-white/[0.08] border border-white/[0.12] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
							<feature.icon size={24} class={feature.accent} />
						</div>
						<h4 class="text-lg font-black text-white mb-3">{feature.title}</h4>
						<p class="text-white/45 leading-relaxed font-medium text-sm">{feature.desc}</p>
						<div class="w-10 h-[2px] bg-white/10 group-hover:w-full transition-all duration-700 mt-5 rounded-full"></div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ═══════ HOW IT WORKS ═══════ -->
	<section class="relative py-20 md:py-32 px-6 md:px-12 bg-[#080c15] overflow-hidden">
		<div class="absolute inset-0 pointer-events-none">
			<div class="absolute top-1/2 left-0 w-[40rem] h-[40rem] bg-emerald-600/6 rounded-full blur-[200px] -translate-y-1/2"></div>
		</div>

		<div class="max-w-7xl mx-auto relative z-10">
			<div class="mb-20 text-center max-w-3xl mx-auto">
				<div class="inline-flex items-center gap-2 px-5 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[11px] font-extrabold tracking-[0.15em] uppercase mb-8">
					<span class="text-emerald-400">How It Works</span>
				</div>
				<h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white font-display leading-[1.1] mb-6">
					From onboarding to
					<span class="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent"> optimization</span> in four steps
				</h2>
				<p class="text-lg text-white/45 font-medium leading-relaxed">
					We've streamlined the entire journey so your team starts realizing value within days, not months.
				</p>
			</div>

			<div class="relative max-w-4xl mx-auto">
				<div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-500/30 via-sky-500/30 to-violet-500/30 -translate-x-1/2"></div>

				{#each steps as step, i}
					<div class="relative flex items-start gap-8 mb-12 last:mb-0 {i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}">
						<div class="relative z-10 shrink-0">
							<div class="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center text-white font-black text-lg font-display shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)]">
								{step.step}
							</div>
						</div>

						<div class="flex-1 md:w-[calc(50%-4rem)]">
							<div class="group p-7 rounded-2xl bg-white/[0.05] border border-white/[0.08] hover:border-emerald-500/20 hover:bg-white/[0.08] transition-all duration-500 backdrop-blur-sm">
								<div class="flex items-center gap-4 mb-3">
									<div class="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
										<step.icon size={20} class="text-emerald-400" />
									</div>
									<h3 class="text-lg font-black text-white">{step.title}</h3>
								</div>
								<p class="text-white/45 leading-relaxed font-medium text-sm">{step.desc}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ═══════ DASHBOARD SHOWCASE ═══════ -->
	<section class="relative py-20 md:py-32 px-6 md:px-12 bg-[#0d1424] overflow-hidden">
		<div class="absolute inset-0 pointer-events-none">
			<div class="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-sky-600/6 rounded-full blur-[200px]"></div>
			<div class="absolute bottom-0 left-1/4 w-[35rem] h-[35rem] bg-violet-600/6 rounded-full blur-[180px]"></div>
		</div>

		<div class="max-w-7xl mx-auto relative z-10">
			<div class="text-center mb-16 max-w-3xl mx-auto">
				<div class="inline-flex items-center gap-2 px-5 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-[11px] font-extrabold tracking-[0.15em] uppercase mb-8">
					<span class="text-sky-300">Real-Time Analytics</span>
				</div>
				<h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white font-display leading-[1.1] mb-6">
					Your workforce, <br class="hidden sm:block" />
					<span class="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">decoded.</span>
				</h2>
				<p class="text-lg text-white/45 font-medium">Every metric, every trend, every insight — updated in real-time.</p>
			</div>

			<!-- Dashboard Mock -->
			<div class="dashboard-mock rounded-2xl bg-white/[0.05] border border-white/[0.08] overflow-hidden backdrop-blur-sm max-w-5xl mx-auto shadow-[0_20px_80px_-20px_rgba(0,0,0,0.5)]">
				<div class="px-5 py-3 border-b border-white/[0.08] flex items-center gap-3">
					<div class="flex gap-1.5">
						<div class="w-3 h-3 rounded-full bg-rose-500/70"></div>
						<div class="w-3 h-3 rounded-full bg-amber-500/70"></div>
						<div class="w-3 h-3 rounded-full bg-emerald-500/70"></div>
					</div>
					<span class="text-xs font-mono text-white/30">procor-dashboard.live</span>
					<div class="ml-auto flex items-center gap-1.5">
						<div class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
						<span class="text-[10px] font-bold text-emerald-400">Synced</span>
					</div>
				</div>
				<div class="p-6 md:p-8">
					<!-- KPI Cards -->
					<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
						{#each kpis as kpi}
							<div class="p-4 rounded-xl bg-white/[0.04] border border-white/[0.07]">
								<div class="flex items-center gap-2 mb-3">
									<div class="w-8 h-8 rounded-lg {kpi.bg} flex items-center justify-center">
										<kpi.icon size={16} class={kpi.color} />
									</div>
									<span class="text-[10px] font-bold text-white/40 uppercase tracking-wider">{kpi.label}</span>
								</div>
								<p class="text-xl font-black text-white font-display">{kpi.value}</p>
								<p class="text-xs font-bold text-emerald-400 mt-1">{kpi.change}</p>
							</div>
						{/each}
					</div>

					<!-- Charts Row -->
					<div class="grid lg:grid-cols-2 gap-4">
						<!-- Bar Chart -->
						<div class="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
							<div class="flex items-center gap-2 mb-5">
								<BarChart3 size={16} class="text-sky-400" />
								<span class="text-xs font-bold text-white/50">Module Adoption</span>
							</div>
							<div class="space-y-3">
								{#each barData as bar, i}
									<div>
										<div class="flex justify-between items-center mb-1">
											<span class="text-[11px] font-bold text-white/40">{bar.label}</span>
											<span class="text-[11px] font-black text-white/70 tabular-nums">{bar.value}%</span>
										</div>
										<div class="h-2.5 rounded-full bg-white/[0.06] overflow-hidden">
											<div class="h-full rounded-full bg-gradient-to-r {bar.color} transition-all duration-[1.5s] ease-out" style="width: {barsAnimated ? bar.value : 0}%; transition-delay: {i * 100}ms;"></div>
										</div>
									</div>
								{/each}
							</div>
						</div>

						<!-- Line Chart -->
						<div class="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
							<div class="flex items-center gap-2 mb-5">
								<TrendingUp size={16} class="text-violet-400" />
								<span class="text-xs font-bold text-white/50">Growth Trend</span>
							</div>
							<div class="relative">
								<svg viewBox="0 0 {chartW} {chartH}" class="w-full h-36" preserveAspectRatio="none">
									{#each [0.25, 0.5, 0.75, 1] as frac}
										<line x1="0" y1={chartH * (1 - frac)} x2={chartW} y2={chartH * (1 - frac)} stroke="rgba(255,255,255,0.06)" stroke-width="1" />
									{/each}
									<path d={areaPath} fill="url(#areaGradHome)" class="{barsAnimated ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000" />
									<path d={linePath} fill="none" stroke="url(#lineGradHome)" stroke-width="2.5" stroke-linecap="round" class="{barsAnimated ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000" style="stroke-dasharray: 1000; stroke-dashoffset: {barsAnimated ? 0 : 1000}; transition: stroke-dashoffset 2s ease-out, opacity 0.5s;" />
									{#each linePoints as p, i}
										<circle cx={i * (chartW / (linePoints.length - 1))} cy={chartH - (p.value / 100) * chartH} r="3.5" fill="white" class="{barsAnimated ? 'opacity-70' : 'opacity-0'} transition-opacity duration-500" style="transition-delay: {800 + i * 80}ms;" />
									{/each}
									<defs>
										<linearGradient id="lineGradHome" x1="0" y1="0" x2={chartW} y2="0" gradientUnits="userSpaceOnUse">
											<stop offset="0%" stop-color="#a78bfa" />
											<stop offset="100%" stop-color="#38bdf8" />
										</linearGradient>
										<linearGradient id="areaGradHome" x1="0" y1="0" x2="0" y2={chartH} gradientUnits="userSpaceOnUse">
											<stop offset="0%" stop-color="rgba(167,139,250,0.2)" />
											<stop offset="100%" stop-color="rgba(167,139,250,0)" />
										</linearGradient>
									</defs>
								</svg>
								<div class="flex justify-between mt-2 px-1">
									{#each linePoints as p}
										<span class="text-[9px] font-bold text-white/25">{p.month}</span>
									{/each}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════ TESTIMONIALS ═══════ -->
	<section class="relative py-20 md:py-32 px-6 md:px-12 bg-[#080c15] overflow-hidden">
		<div class="absolute inset-0 pointer-events-none">
			<div class="absolute top-0 left-1/3 w-[40rem] h-[40rem] bg-violet-600/6 rounded-full blur-[200px]"></div>
		</div>

		<div class="max-w-7xl mx-auto relative z-10">
			<div class="mb-16 text-center max-w-3xl mx-auto">
				<div class="inline-flex items-center gap-2 px-5 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-[11px] font-extrabold tracking-[0.15em] uppercase mb-8">
					<span class="text-violet-300">Customer Stories</span>
				</div>
				<h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white font-display leading-[1.1] mb-6">
					Loved by <span class="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">13,000+</span> HR leaders
				</h2>
				<p class="text-lg text-white/45 font-medium">See how organizations transform their people operations.</p>
			</div>

			<!-- Testimonial Marquee -->
			<div class="relative overflow-hidden mb-5">
				<div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#080c15] to-transparent z-10 pointer-events-none"></div>
				<div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#080c15] to-transparent z-10 pointer-events-none"></div>
				<div class="flex gap-5 animate-scroll-x" style="width: max-content; animation-duration: 50s;">
					{#each [...testimonials, ...testimonials] as t}
						<div class="w-[360px] shrink-0 p-7 rounded-2xl bg-white/[0.05] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-500 backdrop-blur-sm">
							<div class="flex gap-1 mb-5">
								{#each Array(t.rating) as _}
									<Star size={14} class="fill-amber-400 text-amber-400" />
								{/each}
							</div>
							<p class="text-white/55 leading-relaxed font-medium mb-6 text-sm italic">&ldquo;{t.content}&rdquo;</p>
							<div class="flex items-center gap-3 pt-5 border-t border-white/[0.08]">
								<img src={t.avatar} alt={t.name} class="w-10 h-10 rounded-full object-cover ring-2 ring-white/10" />
								<div>
									<p class="font-bold text-white/85 text-sm">{t.name}</p>
									<p class="text-white/35 text-xs font-medium">{t.role}, {t.company}</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Reverse Row -->
			<div class="relative overflow-hidden">
				<div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#080c15] to-transparent z-10 pointer-events-none"></div>
				<div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#080c15] to-transparent z-10 pointer-events-none"></div>
				<div class="flex gap-5" style="width: max-content; animation: scroll-x 55s linear infinite reverse;">
					{#each [...testimonials, ...testimonials].reverse() as t}
						<div class="w-[360px] shrink-0 p-7 rounded-2xl bg-white/[0.05] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-500 backdrop-blur-sm">
							<div class="flex gap-1 mb-5">
								{#each Array(t.rating) as _}
									<Star size={14} class="fill-amber-400 text-amber-400" />
								{/each}
							</div>
							<p class="text-white/55 leading-relaxed font-medium mb-6 text-sm italic">&ldquo;{t.content}&rdquo;</p>
							<div class="flex items-center gap-3 pt-5 border-t border-white/[0.08]">
								<img src={t.avatar} alt={t.name} class="w-10 h-10 rounded-full object-cover ring-2 ring-white/10" />
								<div>
									<p class="font-bold text-white/85 text-sm">{t.name}</p>
									<p class="text-white/35 text-xs font-medium">{t.role}, {t.company}</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- ═══════ FAQ ═══════ -->
	<section class="relative py-20 md:py-32 px-6 md:px-12 bg-[#0d1424] overflow-hidden">
		<div class="absolute inset-0 pointer-events-none">
			<div class="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-sky-600/6 rounded-full blur-[200px]"></div>
		</div>

		<div class="max-w-3xl mx-auto relative z-10">
			<div class="mb-16 text-center">
				<div class="inline-flex items-center gap-2 px-5 py-2 bg-white/[0.06] border border-white/[0.1] rounded-full text-[11px] font-extrabold tracking-[0.15em] uppercase mb-8">
					<span class="text-white/50">FAQ</span>
				</div>
				<h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display leading-tight mb-4">
					Got <span class="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">questions?</span>
				</h2>
				<p class="text-lg text-white/45 font-medium">Everything you need to know about PROCOR.</p>
			</div>

			<div class="space-y-3">
				{#each faqs as faq, i}
					<div class="rounded-2xl bg-white/[0.04] border {openFaq === i ? 'border-sky-500/25 bg-sky-500/[0.05]' : 'border-white/[0.08]'} transition-all duration-300 overflow-hidden backdrop-blur-sm">
						<button
							class="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-white/[0.03] transition-colors"
							onclick={() => (openFaq = openFaq === i ? null : i)}
						>
							<span class="text-base font-bold text-white/85 pr-6">{faq.q}</span>
							<div class="shrink-0 w-8 h-8 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center transition-all duration-300 {openFaq === i ? 'rotate-180 bg-sky-500/15 border-sky-500/25' : ''}">
								<ChevronDown size={16} class="text-white/40 {openFaq === i ? 'text-sky-400' : ''}" />
							</div>
						</button>
						<div class="overflow-hidden transition-all duration-400" style="max-height: {openFaq === i ? '200px' : '0px'}; opacity: {openFaq === i ? 1 : 0};">
							<div class="px-6 pb-6">
								<p class="text-white/45 leading-relaxed font-medium text-sm">{faq.a}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<div class="text-center mt-12 bg-white/[0.03] rounded-2xl border border-white/[0.08] p-8">
				<p class="text-white/60 font-bold text-lg mb-4">Still have questions?</p>
				<a href="/contact" class="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-sky-500 to-violet-600 text-white rounded-2xl font-black text-sm transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_-5px_rgba(56,189,248,0.4)] cursor-pointer group">
					Talk to our team <ArrowRight size={16} class="group-hover:translate-x-0.5 transition-transform" />
				</a>
			</div>
		</div>
	</section>

	<!-- ═══════ FINAL CTA ═══════ -->
	<section class="relative py-20 md:py-32 px-6 md:px-12 bg-[#080c15] overflow-hidden">
		<div class="absolute inset-0 pointer-events-none">
			<div class="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] bg-gradient-to-b from-sky-600/10 to-transparent rounded-full blur-[120px]"></div>
			<div class="absolute bottom-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-violet-600/8 rounded-full blur-[160px]"></div>
			<div class="absolute top-[20%] left-[-5%] w-[30rem] h-[30rem] bg-indigo-600/8 rounded-full blur-[140px]"></div>
		</div>

		<div class="max-w-4xl mx-auto text-center relative z-10">
			<h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white font-display leading-[1.1] mb-8 tracking-tight">
				Start building your <br class="hidden md:block" />
				<span class="bg-gradient-to-r from-sky-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent">dream workforce</span> today
			</h2>
			<p class="text-lg md:text-xl text-white/45 max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
				Join 13,000+ organizations that have transformed their people operations with PROCOR. Start your free trial — no credit card required.
			</p>

			<div class="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
				<a href="/demo" class="px-10 py-5 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] shadow-[0_20px_60px_-15px_rgba(56,189,248,0.5)] hover:shadow-sky-500/40 cursor-pointer group">
					<Rocket size={22} class="group-hover:-translate-y-1 transition-transform" /> Start Free Trial
				</a>
				<a href="/contact" class="px-10 py-5 bg-white/[0.06] border border-white/15 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-white/[0.1] hover:border-white/25 transition-all duration-500 cursor-pointer backdrop-blur-sm">
					Schedule Demo
				</a>
			</div>

			<div class="flex flex-wrap justify-center items-center gap-6 text-xs font-bold text-white/35">
				<div class="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1]">
					<ShieldCheck size={16} class="text-emerald-400" />
					<span>SOC 2 Certified</span>
				</div>
				<div class="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1]">
					<ShieldCheck size={16} class="text-sky-400" />
					<span>GDPR Compliant</span>
				</div>
				<div class="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1]">
					<Clock size={16} class="text-violet-400" />
					<span>99.99% Uptime</span>
				</div>
			</div>
		</div>
	</section>
</div>
