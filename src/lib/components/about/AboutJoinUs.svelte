<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { ArrowRight } from '@lucide/svelte';
	import GradientButton from '$lib/components/ui/GradientButton.svelte';

	let { openPositions = [] } = $props();

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo('.join-section',
			{ y: 50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1, ease: 'power3.out',
				scrollTrigger: { trigger: '.join-section', start: 'top 80%', toggleActions: 'play none none none' } }
		);
	});
</script>

<section
	class="join-section relative py-32 px-6 md:px-12 overflow-hidden"
	style="background: linear-gradient(135deg, var(--surface-dark) 0%, var(--surface-darker) 100%);"
>
	<div class="absolute inset-0 pointer-events-none overflow-hidden">
		<div
			class="absolute top-[-20%] right-[-5%] w-[40rem] h-[40rem] bg-sky-600/10 rounded-full blur-[180px]"
			style="animation: float-orb 20s ease-in-out infinite alternate;"
		></div>
		<div
			class="absolute bottom-[-20%] left-[-5%] w-[35rem] h-[35rem] bg-violet-600/8 rounded-full blur-[180px]"
			style="animation: float-orb 25s ease-in-out infinite alternate-reverse;"
		></div>
	</div>

	<div class="max-w-5xl mx-auto relative z-10">
		<div class="text-center mb-16">
			<h2
				class="text-3xl sm:text-4xl md:text-6xl font-black font-display text-white tracking-tight"
			>
				Join Our Team
			</h2>
			<p class="mt-4 text-lg text-white/50 max-w-xl mx-auto font-medium">
				We're always looking for extraordinary people who want to do the best work of their
				lives.
			</p>
		</div>

		<div class="space-y-3 mb-12">
			{#each openPositions as position, i}
				<div
					class="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-[var(--radius-lg)] bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.06] transition-all duration-500 cursor-pointer"
				>
					<div class="flex-1">
						<h4
							class="text-lg font-black font-display text-white group-hover:text-sky-300 transition-colors"
						>
							{position.title}
						</h4>
						<div class="flex items-center gap-4 mt-2">
							<span class="text-sm text-white/40 font-bold">{position.team}</span>
							<span class="w-1 h-1 rounded-full bg-white/20"></span>
							<span class="text-sm text-white/40 font-bold">{position.location}</span>
						</div>
					</div>
					<div
						class="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/30 group-hover:text-sky-400 group-hover:border-sky-500/30 group-hover:bg-sky-500/10 group-hover:translate-x-1 transition-all duration-300"
					>
						<ArrowRight size={18} />
					</div>
				</div>
			{/each}
		</div>

		<div class="text-center">
			<GradientButton href="/careers" size="lg">
				View All Careers <ArrowRight size={20} />
			</GradientButton>
		</div>
	</div>
</section>
