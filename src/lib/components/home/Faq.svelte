<!-- FAQ — accordion with design tokens -->
<script>
	import { onMount } from 'svelte';
	import { Plus, Minus, ArrowRight } from '@lucide/svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';
	import GradientButton from '$lib/components/ui/GradientButton.svelte';
	import { animateHeader, animateCards, createScrollContext } from '$lib/utils/animations.js';

	let openIndex = $state(null);
	let section = $state();

	onMount(() => {
		return createScrollContext(() => {
			animateHeader('.faq-header');
			animateCards('.faq-item', { trigger: '.faq-list', y: 30, stagger: 0.08 });
		}, section);
	});

	const faqs = [
		{
			q: 'How long does implementation typically take?',
			a: 'Most companies are fully onboarded within 14 business days. This includes data migration, workflow configuration, and team training. Enterprise deployments with complex integrations may take 3-4 weeks.'
		},
		{
			q: 'Can I start with just one module and add more later?',
			a: 'Absolutely. PROCOR is designed to be modular — start with Core HR or Payroll, then unlock additional modules as your needs grow. All modules share a unified data layer.'
		},
		{
			q: 'Is my data secure on PROCOR?',
			a: "Security is foundational to everything we build. We're SOC 2 Type II certified, use AES-256 encryption at rest and TLS 1.3 in transit, and maintain a zero-trust architecture. Penetration testing runs quarterly."
		},
		{
			q: 'Do you support multi-currency payroll?',
			a: 'Yes — PROCOR processes payroll in 40+ currencies with automated tax calculations, local compliance updates, and direct bank integrations in 150+ jurisdictions.'
		},
		{
			q: 'What kind of support do you offer?',
			a: 'All plans include email support. Growth plans get priority support with < 4hr SLA. Enterprise customers receive a dedicated account manager, phone support, and custom SLAs up to 99.99% uptime.'
		},
		{
			q: 'Can I migrate data from another HRMS?',
			a: 'Yes! Our migration team provides white-glove onboarding that handles all data import — employee records, payroll history, benefits, and more — with zero manual entry required.'
		}
	];
</script>

<section
	class="py-20 md:py-32 px-6 md:px-12 bg-[var(--surface-dark-alt)] relative overflow-hidden"
	bind:this={section}
>
	<!-- Background -->
	<div class="absolute inset-0 pointer-events-none">
		<div
			class="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-sky-600/5 rounded-full blur-[200px]"
		></div>
	</div>

	<div class="max-w-4xl mx-auto relative z-10">
		<!-- Header -->
		<div class="faq-header mb-20 text-center max-w-2xl mx-auto">
			<SectionBadge variant="dark">FAQ</SectionBadge>
			<h2 class="text-4xl md:text-6xl font-black text-white font-display leading-tight mb-8 mt-6">
				Got
				<span class="bg-gradient-to-r from-procor-sky to-procor-blue bg-clip-text text-transparent"
					>questions?</span
				>
			</h2>
			<p class="text-lg text-neutral-500 font-medium leading-relaxed mb-8">
				Everything you need to know about PROCOR. Still curious? Chat with our team instantly.
			</p>
		</div>

		<!-- Questions list -->
		<div class="faq-list space-y-4">
			{#each faqs as faq, i}
				<div
					class="faq-item rounded-[var(--radius-xl)] bg-[var(--surface-card)] border {openIndex ===
					i
						? 'border-sky-500/30 bg-sky-500/5'
						: 'border-[var(--border-subtle)]'} transition-all duration-[var(--duration-slow)] overflow-hidden"
				>
					<button
						class="w-full flex items-center justify-between p-8 text-left cursor-pointer hover:bg-white/[0.02] transition-colors"
						onclick={() => (openIndex = openIndex === i ? null : i)}
					>
						<span class="text-lg font-bold text-white pr-8">{faq.q}</span>
						{#if openIndex === i}
							<Minus size={20} class="text-sky-400 shrink-0" />
						{:else}
							<Plus size={20} class="text-neutral-500 shrink-0" />
						{/if}
					</button>

					{#if openIndex === i}
						<div class="px-8 pb-8">
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								class="text-sky-400 mb-4"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path
									d="M22 12A10 10 0 0 0 12 2v10z"
								/></svg
							>
							<p class="text-neutral-400 leading-relaxed font-medium">{faq.a}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Bottom -->
		<div
			class="text-center mt-16 bg-white/[0.02] rounded-[var(--radius-xl)] border border-[var(--border-subtle)] p-10"
		>
			<p class="text-white font-bold text-lg mb-4">Still have questions?</p>
			<GradientButton variant="primary" size="md">
				Talk to our team <ArrowRight
					size={18}
					class="group-hover:translate-x-1 transition-transform"
				/>
			</GradientButton>
		</div>
	</div>
</section>
