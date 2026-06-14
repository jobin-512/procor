<!-- AnalyticsDashboard — live metrics with animated bar charts and KPI cards -->
<script>
	import { onMount } from 'svelte';
	import { TrendingUp, Users, Clock, DollarSign, BarChart3, Activity } from '@lucide/svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';
	import { animateHeader, animateCards, createScrollContext } from '$lib/utils/animations.js';

	let section = $state();
	let barsAnimated = $state(false);

	onMount(() => {
		return createScrollContext(() => {
			animateHeader('.dash-header');
			animateCards('.kpi-card', { trigger: '.kpi-grid', y: 40, stagger: 0.1 });

			const observer = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting) {
						barsAnimated = true;
						observer.disconnect();
					}
				},
				{ threshold: 0.3 }
			);
			if (section) observer.observe(section);
		}, section);
	});

	const kpis = [
		{
			icon: Users,
			label: 'Active Employees',
			value: '12,847',
			change: '+8.3%',
			up: true,
			color: 'text-sky-400',
			bg: 'bg-sky-500/10'
		},
		{
			icon: Clock,
			label: 'Avg. Time-to-Hire',
			value: '18 days',
			change: '-22%',
			up: true,
			color: 'text-emerald-400',
			bg: 'bg-emerald-500/10'
		},
		{
			icon: DollarSign,
			label: 'Payroll Accuracy',
			value: '99.97%',
			change: '+0.12%',
			up: true,
			color: 'text-violet-400',
			bg: 'bg-violet-500/10'
		},
		{
			icon: Activity,
			label: 'Employee Satisfaction',
			value: '91%',
			change: '+12pts',
			up: true,
			color: 'text-amber-400',
			bg: 'bg-amber-500/10'
		}
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
		{ month: 'Jan', value: 42 },
		{ month: 'Feb', value: 48 },
		{ month: 'Mar', value: 45 },
		{ month: 'Apr', value: 62 },
		{ month: 'May', value: 58 },
		{ month: 'Jun', value: 71 },
		{ month: 'Jul', value: 68 },
		{ month: 'Aug', value: 85 },
		{ month: 'Sep', value: 82 },
		{ month: 'Oct', value: 94 },
		{ month: 'Nov', value: 91 },
		{ month: 'Dec', value: 98 }
	];

	function getLinePath(points, w, h) {
		const maxVal = 100;
		const stepX = w / (points.length - 1);
		return points
			.map((p, i) => {
				const x = i * stepX;
				const y = h - (p.value / maxVal) * h;
				return `${i === 0 ? 'M' : 'L'}${x},${y}`;
			})
			.join(' ');
	}

	function getAreaPath(points, w, h) {
		const maxVal = 100;
		const stepX = w / (points.length - 1);
		const line = points
			.map((p, i) => {
				const x = i * stepX;
				const y = h - (p.value / maxVal) * h;
				return `${i === 0 ? 'M' : 'L'}${x},${y}`;
			})
			.join(' ');
		const lastX = (points.length - 1) * stepX;
		return `${line} L${lastX},${h} L0,${h} Z`;
	}

	const chartW = 600;
	const chartH = 200;
	const linePath = getLinePath(linePoints, chartW, chartH);
	const areaPath = getAreaPath(linePoints, chartW, chartH);
</script>

<section
	class="py-20 md:py-32 px-6 md:px-12 bg-[var(--surface-dark-alt)] overflow-hidden"
	bind:this={section}
>
	<div class="absolute inset-0 pointer-events-none">
		<div
			class="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-sky-600/5 rounded-full blur-[200px]"
		></div>
		<div
			class="absolute bottom-0 left-1/4 w-[35rem] h-[35rem] bg-violet-600/5 rounded-full blur-[180px]"
		></div>
	</div>

	<div class="max-w-7xl mx-auto relative z-10">
		<div class="dash-header mb-20 text-center max-w-3xl mx-auto">
			<SectionBadge variant="sky">Real-Time Analytics</SectionBadge>
			<h2
				class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white font-display leading-[1.1] mb-6 mt-8"
			>
				Your workforce,<br />
				<span class="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent"
					>decoded.</span
				>
			</h2>
			<p class="text-lg text-neutral-400 font-medium leading-relaxed">
				Every metric, every trend, every insight — updated in real-time across your entire
				organization.
			</p>
		</div>

		<!-- KPI Cards -->
		<div class="kpi-grid grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
			{#each kpis as kpi}
				<div
					class="kpi-card group p-5 md:p-6 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-subtle)] hover:border-white/10 transition-all duration-300 hover:bg-[var(--surface-glass)]"
				>
					<div class="flex items-center gap-3 mb-4">
						<div class="w-10 h-10 rounded-xl {kpi.bg} flex items-center justify-center">
							<kpi.icon size={20} class={kpi.color} />
						</div>
						<span class="text-xs font-bold text-neutral-500 uppercase tracking-wider"
							>{kpi.label}</span
						>
					</div>
					<p class="text-2xl md:text-3xl font-black text-white font-display mb-1">{kpi.value}</p>
					<p class="text-sm font-bold {kpi.up ? 'text-emerald-400' : 'text-rose-400'}">
						{kpi.change}
					</p>
				</div>
			{/each}
		</div>

		<!-- Charts Grid -->
		<div class="grid lg:grid-cols-2 gap-6">
			<!-- Bar Chart -->
			<div
				class="p-6 md:p-8 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-subtle)]"
			>
				<div class="flex items-center gap-3 mb-8">
					<BarChart3 size={20} class="text-sky-400" />
					<h3 class="text-lg font-black text-white">Module Adoption Rate</h3>
				</div>
				<div class="space-y-5">
					{#each barData as bar, i}
						<div>
							<div class="flex justify-between items-center mb-2">
								<span class="text-sm font-bold text-neutral-400">{bar.label}</span>
								<span class="text-sm font-black text-white tabular-nums">{bar.value}%</span>
							</div>
							<div class="h-3 rounded-full bg-white/[0.06] overflow-hidden">
								<div
									class="h-full rounded-full bg-gradient-to-r {bar.color} transition-all duration-[1.5s] ease-out"
									style="width: {barsAnimated ? bar.value : 0}%; transition-delay: {i * 100}ms;"
								></div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Line Chart -->
			<div
				class="p-6 md:p-8 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-subtle)]"
			>
				<div class="flex items-center gap-3 mb-8">
					<TrendingUp size={20} class="text-violet-400" />
					<h3 class="text-lg font-black text-white">Employee Growth Trend</h3>
				</div>
				<div class="relative">
					<svg viewBox="0 0 {chartW} {chartH}" class="w-full h-48" preserveAspectRatio="none">
						<!-- Grid lines -->
						{#each [0.25, 0.5, 0.75, 1] as frac}
							<line
								x1="0"
								y1={chartH * (1 - frac)}
								x2={chartW}
								y2={chartH * (1 - frac)}
								stroke="rgba(255,255,255,0.05)"
								stroke-width="1"
							/>
						{/each}
						<!-- Area fill -->
						<path
							d={areaPath}
							fill="url(#areaGrad)"
							class="{barsAnimated ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000"
						/>
						<!-- Line -->
						<path
							d={linePath}
							fill="none"
							stroke="url(#lineGrad)"
							stroke-width="3"
							stroke-linecap="round"
							class="{barsAnimated ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000"
							style="stroke-dasharray: 1000; stroke-dashoffset: {barsAnimated
								? 0
								: 1000}; transition: stroke-dashoffset 2s ease-out, opacity 0.5s;"
						/>
						<!-- Dots -->
						{#each linePoints as p, i}
							<circle
								cx={i * (chartW / (linePoints.length - 1))}
								cy={chartH - (p.value / 100) * chartH}
								r="4"
								fill="white"
								class="{barsAnimated ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500"
								style="transition-delay: {800 + i * 80}ms;"
							/>
						{/each}
						<defs>
							<linearGradient
								id="lineGrad"
								x1="0"
								y1="0"
								x2={chartW}
								y2="0"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0%" stop-color="#8b5cf6" />
								<stop offset="100%" stop-color="#38bdf8" />
							</linearGradient>
							<linearGradient
								id="areaGrad"
								x1="0"
								y1="0"
								x2="0"
								y2={chartH}
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0%" stop-color="rgba(139,92,246,0.2)" />
								<stop offset="100%" stop-color="rgba(139,92,246,0)" />
							</linearGradient>
						</defs>
					</svg>
					<!-- X-axis labels -->
					<div class="flex justify-between mt-3 px-1">
						{#each linePoints as p}
							<span class="text-[10px] font-bold text-neutral-600">{p.month}</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
