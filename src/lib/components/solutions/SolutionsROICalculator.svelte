<script>
	import { ArrowRight } from '@lucide/svelte';
	import GlowCard from '$lib/components/ui/GlowCard.svelte';
	import GradientButton from '$lib/components/ui/GradientButton.svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';
	import TextReveal from '$lib/components/ui/TextReveal.svelte';

	let employeeCount = $state(250);
	let avgSalary = $state(75000);

	let calculatedSavings = $derived.by(() => {
		const perEmployeeSavings = avgSalary * 0.12;
		const annual = perEmployeeSavings * employeeCount;
		const monthly = annual / 12;
		const roi = ((annual / (employeeCount * 450)) * 100).toFixed(0);
		return { annual, monthly, roi, perEmployee: perEmployeeSavings };
	});
</script>

<section id="roi-calculator" class="relative py-24 md:py-32 px-6 md:px-12 bg-[#030408] overflow-hidden">
	<div class="absolute inset-0 pointer-events-none overflow-hidden z-0">
		<div class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-sky-600/8 rounded-full blur-[200px]"></div>
	</div>

	<div class="max-w-5xl mx-auto relative z-10">
		<div class="text-center mb-14">
			<SectionBadge variant="sky">ROI Calculator</SectionBadge>
			<TextReveal
				text="See your potential savings"
				as="h2"
				class="text-3xl md:text-5xl font-black text-white font-display mt-6 mb-4"
			/>
			<p class="text-white/60 text-lg max-w-xl mx-auto">Estimate how much PROCOR can save your organization annually.</p>
		</div>

		<GlowCard className="p-8 md:p-12" glowColor="rgba(56, 189, 248, 0.15)">
			<div class="grid md:grid-cols-2 gap-12 items-center">
				<div class="space-y-10">
					<div>
						<div class="flex justify-between items-baseline mb-4">
							<label class="text-white font-bold text-sm">Number of Employees</label>
							<span class="text-2xl font-black text-white font-display">{employeeCount.toLocaleString()}</span>
						</div>
						<input
							type="range"
							min="10"
							max="5000"
							step="10"
							bind:value={employeeCount}
							class="w-full h-2 rounded-full appearance-none cursor-pointer bg-white/10 accent-sky-500 slider"
						/>
						<div class="flex justify-between mt-2">
							<span class="text-white/30 text-xs">10</span>
							<span class="text-white/30 text-xs">5,000</span>
						</div>
					</div>

					<div>
						<div class="flex justify-between items-baseline mb-4">
							<label class="text-white font-bold text-sm">Average Annual Salary</label>
							<span class="text-2xl font-black text-white font-display">${avgSalary.toLocaleString()}</span>
						</div>
						<input
							type="range"
							min="25000"
							max="200000"
							step="1000"
							bind:value={avgSalary}
							class="w-full h-2 rounded-full appearance-none cursor-pointer bg-white/10 accent-violet-500 slider"
						/>
						<div class="flex justify-between mt-2">
							<span class="text-white/30 text-xs">$25k</span>
							<span class="text-white/30 text-xs">$200k</span>
						</div>
					</div>
				</div>

				<div class="space-y-6">
					<div class="text-center p-8 rounded-2xl bg-gradient-to-br from-sky-500/10 to-violet-600/10 border border-white/[0.08]">
						<p class="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-2">Estimated Annual Savings</p>
						<p class="text-5xl md:text-6xl font-black font-display bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
							${calculatedSavings.annual >= 1000000
								? (calculatedSavings.annual / 1000000).toFixed(1) + 'M'
								: (calculatedSavings.annual / 1000).toFixed(0) + 'K'}
						</p>
					</div>

					<div class="grid grid-cols-2 gap-4">
						<div class="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
							<p class="text-xl font-black text-white font-display">${(calculatedSavings.monthly / 1000).toFixed(0)}K</p>
							<p class="text-white/40 text-[10px] font-bold uppercase tracking-wider mt-1">Monthly Savings</p>
						</div>
						<div class="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
							<p class="text-xl font-black text-white font-display">{calculatedSavings.roi}%</p>
							<p class="text-white/40 text-[10px] font-bold uppercase tracking-wider mt-1">Projected ROI</p>
						</div>
					</div>

					<GradientButton href="/demo" variant="primary" size="md" class="w-full">
						Get Custom ROI Report <ArrowRight size={18} />
					</GradientButton>
					<p class="text-white/30 text-xs text-center">Based on industry benchmarks. Actual results may vary.</p>
				</div>
			</div>
		</GlowCard>
	</div>
</section>

<style>
	:global(.slider::-webkit-slider-thumb) {
		-webkit-appearance: none;
		appearance: none;
		width: 22px;
		height: 22px;
		border-radius: 50%;
		background: linear-gradient(135deg, #38bdf8, #818cf8);
		cursor: pointer;
		box-shadow: 0 0 20px rgba(56, 189, 248, 0.4);
		border: 3px solid rgba(255, 255, 255, 0.2);
		transition: transform 0.2s, box-shadow 0.2s;
	}
	:global(.slider::-webkit-slider-thumb:hover) {
		transform: scale(1.2);
		box-shadow: 0 0 30px rgba(56, 189, 248, 0.6);
	}
	:global(.slider::-moz-range-thumb) {
		width: 22px;
		height: 22px;
		border-radius: 50%;
		background: linear-gradient(135deg, #38bdf8, #818cf8);
		cursor: pointer;
		box-shadow: 0 0 20px rgba(56, 189, 248, 0.4);
		border: 3px solid rgba(255, 255, 255, 0.2);
	}
</style>
