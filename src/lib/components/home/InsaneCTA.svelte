<script>
	import Rocket from '@lucide/svelte/icons/rocket';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import ShieldCheck from '@lucide/svelte/icons/shield-check';
	import Zap from '@lucide/svelte/icons/zap';
	import CheckCircle from '@lucide/svelte/icons/check-circle';
	import Sparkles from '@lucide/svelte/icons/sparkles';

	const benefits = [
		'No credit card required',
		'Free to get started',
		'Cancel anytime',
		'Full feature access'
	];

	const trustBadges = [
		{ icon: Zap, label: 'Here When You Need Us', color: 'text-violet-400' },
		{ icon: ShieldCheck, label: 'Bank-Grade Encryption', color: 'text-emerald-400' },
		{ icon: CheckCircle, label: 'Trusted Worldwide', color: 'text-sky-400' }
	];
</script>

<section class="px-6 py-24 md:px-12 md:py-32" data-reveal>
	<div class="mx-auto max-w-5xl">
		<div class="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent px-8 py-16 text-center md:px-16">
			<div class="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_50%_100%_at_50%_0%,rgba(99,102,241,0.18),transparent_70%)]"></div>

			<div class="relative">
				<div class="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm font-semibold text-white/80 backdrop-blur-xl">
					<Sparkles size={16} class="text-violet-400" />
					<span>Flexible plans for every stage of growth</span>
				</div>

				<h2 class="text-4xl font-black leading-[1.05] text-white font-display sm:text-5xl md:text-6xl">
					Ready to transform
					<span class="block bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
						your HR operations?
					</span>
				</h2>

				<p class="mx-auto mt-5 max-w-2xl text-lg text-white/60">
					Join the organizations that trust PROCOR to power their people operations.
				</p>

				<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
					<a href="/demo" class="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-9 py-5 text-xl font-bold text-white shadow-lg shadow-violet-600/20 transition hover:scale-[1.02]">
						<Rocket size={22} class="transition group-hover:rotate-12" />
						Start Free Trial
						<ArrowRight size={22} class="transition group-hover:translate-x-1" />
					</a>
					<a href="/contact" class="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.03] px-9 py-5 text-xl font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.08]">
						Talk to Sales
						<ArrowRight size={18} class="transition group-hover:translate-x-1" />
					</a>
				</div>

				<div class="mt-10 flex flex-wrap justify-center gap-6">
					{#each benefits as benefit}
						<div class="flex items-center gap-2 text-sm text-white/60">
							<CheckCircle size={16} class="text-emerald-400" />
							<span>{benefit}</span>
						</div>
					{/each}
				</div>

				<div class="mt-12 flex flex-wrap justify-center gap-4 border-t border-white/[0.06] pt-10">
					{#each trustBadges as badge}
						<div class="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white/70">
							<svelte:component this={badge.icon} size={16} class={badge.color} />
							<span>{badge.label}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
