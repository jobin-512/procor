<!-- ComparisonTable — PROCOR vs competitors feature comparison -->
<script>
	import { onMount } from 'svelte';
	import { Check, X, Minus } from '@lucide/svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';
	import GradientButton from '$lib/components/ui/GradientButton.svelte';
	import { animateHeader, createScrollContext } from '$lib/utils/animations.js';

	let section = $state();
	let visible = $state(false);

	onMount(() => {
		return createScrollContext(() => {
			animateHeader('.comp-header');

			const observer = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting) {
						visible = true;
						observer.disconnect();
					}
				},
				{ threshold: 0.15 }
			);
			if (section) observer.observe(section);
		}, section);
	});

	const competitors = ['Legacy HRMS', 'BambooHR', 'Workday', 'PROCOR'];

	const categories = [
		{
			name: 'Core HR',
			features: [
				{ name: 'Employee Database', values: ['partial', 'check', 'check', 'check'] },
				{ name: 'Org Chart', values: ['cross', 'check', 'check', 'check'] },
				{ name: 'Document Management', values: ['partial', 'partial', 'check', 'check'] },
				{ name: 'Self-Service Portal', values: ['cross', 'partial', 'check', 'check'] }
			]
		},
		{
			name: 'Payroll',
			features: [
				{ name: 'Single-Currency', values: ['check', 'check', 'check', 'check'] },
				{ name: 'Multi-Currency (40+)', values: ['cross', 'cross', 'partial', 'check'] },
				{ name: 'Automated Tax Compliance', values: ['partial', 'partial', 'check', 'check'] },
				{ name: 'Real-Time Processing', values: ['cross', 'cross', 'partial', 'check'] }
			]
		},
		{
			name: 'Intelligence',
			features: [
				{ name: 'Basic Reporting', values: ['check', 'check', 'check', 'check'] },
				{ name: 'Predictive Analytics', values: ['cross', 'cross', 'partial', 'check'] },
				{ name: 'AI Talent Matching', values: ['cross', 'cross', 'cross', 'check'] },
				{ name: 'Attrition Forecasting', values: ['cross', 'cross', 'cross', 'check'] }
			]
		},
		{
			name: 'Compliance',
			features: [
				{ name: 'SOC 2 Type II', values: ['cross', 'check', 'check', 'check'] },
				{ name: '150+ Jurisdictions', values: ['partial', 'partial', 'partial', 'check'] },
				{ name: 'GDPR Automation', values: ['cross', 'partial', 'check', 'check'] },
				{ name: 'Zero-Trust Architecture', values: ['cross', 'cross', 'partial', 'check'] }
			]
		}
	];

	function getIcon(value) {
		if (value === 'check') return 'check';
		if (value === 'cross') return 'cross';
		return 'partial';
	}
</script>

<section
	class="py-20 md:py-32 px-6 md:px-12 bg-[var(--surface-elevated)] overflow-hidden relative"
	bind:this={section}
>
	<div class="absolute inset-0 pointer-events-none">
		<div
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-sky-500/3 rounded-full blur-[250px]"
		></div>
	</div>

	<div class="max-w-6xl mx-auto relative z-10">
		<div class="comp-header mb-16 text-center max-w-3xl mx-auto">
			<SectionBadge variant="sky">Why PROCOR</SectionBadge>
			<h2
				class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-procor-navy font-display leading-[1.1] mb-6 mt-8"
			>
				See how we<br />
				<span class="bg-gradient-to-r from-procor-blue to-violet-500 bg-clip-text text-transparent"
					>compare.</span
				>
			</h2>
		</div>

		<!-- Desktop Table -->
		<div
			class="hidden md:block rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xl shadow-slate-200/50"
		>
			<!-- Header row -->
			<div class="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] border-b border-slate-200 bg-slate-50">
				<div class="p-5 font-black text-sm text-slate-500 uppercase tracking-wider">Feature</div>
				{#each competitors as comp, i}
					<div
						class="p-5 text-center {i === 3
							? 'bg-gradient-to-b from-procor-blue to-violet-600'
							: ''}"
					>
						<span class="font-black text-sm {i === 3 ? 'text-white' : 'text-procor-navy'}"
							>{comp}</span
						>
					</div>
				{/each}
			</div>

			{#each categories as cat, ci}
				<!-- Category header -->
				<div class="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] border-b border-slate-100 bg-slate-50/50">
					<div class="col-span-5 px-5 py-3">
						<span class="text-xs font-black text-procor-blue uppercase tracking-[0.2em]"
							>{cat.name}</span
						>
					</div>
				</div>
				<!-- Features -->
				{#each cat.features as feat, fi}
					<div
						class="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] border-b border-slate-100 last:border-0 hover:bg-sky-50/30 transition-colors"
						style="opacity: {visible ? 1 : 0}; transform: translateY({visible
							? 0
							: 10}px); transition: all 0.5s ease {ci * 0.1 + fi * 0.05}s;"
					>
						<div class="p-4 px-5 text-sm font-bold text-slate-600 flex items-center">
							{feat.name}
						</div>
						{#each feat.values as val, vi}
							<div
								class="p-4 flex items-center justify-center {vi === 3 ? 'bg-procor-blue/5' : ''}"
							>
								{#if val === 'check'}
									<div class="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center">
										<Check size={14} class="text-emerald-600" />
									</div>
								{:else if val === 'cross'}
									<div class="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center">
										<X size={14} class="text-slate-400" />
									</div>
								{:else}
									<div class="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center">
										<Minus size={14} class="text-amber-600" />
									</div>
								{/if}
							</div>
						{/each}
					</div>
				{/each}
			{/each}
		</div>

		<!-- Mobile Cards -->
		<div class="md:hidden space-y-4">
			{#each categories as cat}
				<div class="rounded-xl border border-slate-200 overflow-hidden bg-white">
					<div class="px-5 py-3 bg-slate-50 border-b border-slate-100">
						<span class="text-xs font-black text-procor-blue uppercase tracking-[0.2em]"
							>{cat.name}</span
						>
					</div>
					{#each cat.features as feat}
						<div class="px-5 py-3 border-b border-slate-50 last:border-0">
							<p class="text-sm font-bold text-slate-700 mb-2">{feat.name}</p>
							<div class="flex gap-2">
								{#each feat.values as val, vi}
									<div class="flex-1 text-center">
										<p class="text-[9px] font-bold text-slate-400 mb-1">
											{competitors[vi].slice(0, 6)}
										</p>
										{#if val === 'check'}
											<Check size={14} class="text-emerald-500 mx-auto" />
										{:else if val === 'cross'}
											<X size={14} class="text-slate-300 mx-auto" />
										{:else}
											<Minus size={14} class="text-amber-400 mx-auto" />
										{/if}
									</div>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			{/each}
		</div>

		<div class="text-center mt-12">
			<GradientButton variant="primary" size="lg" href="/#pricing">View Pricing</GradientButton>
		</div>
	</div>
</section>
