<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { ArrowRight, ShieldCheck, Globe } from '@lucide/svelte';
	import GlowCard from '$lib/components/ui/GlowCard.svelte';
	import TiltCard from '$lib/components/ui/TiltCard.svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';

	let { features = [] } = $props();
	let barsAnimated = $state(false);

	onMount(() => {
		gsap.fromTo('.features-header',
			{ y: 40, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
				scrollTrigger: { trigger: '.features-header', start: 'top 85%', toggleActions: 'play none none none' } }
		);

		gsap.fromTo('.feature-card',
			{ y: 50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
				scrollTrigger: { trigger: '.features-grid', start: 'top 80%', toggleActions: 'play none none none', onEnter: () => { barsAnimated = true; } } }
		);
	});
</script>

<section id="features" class="relative py-20 md:py-32 px-6 md:px-12 bg-[var(--surface-dark-alt)] overflow-hidden">
	<div class="absolute inset-0 pointer-events-none">
		<div class="absolute top-0 left-1/4 w-[50rem] h-[50rem] bg-procor-blue/10 rounded-full blur-[160px]"></div>
		<div class="absolute bottom-0 right-1/4 w-[40rem] h-[40rem] bg-violet-600/8 rounded-full blur-[140px]"></div>
	</div>

	<div class="max-w-7xl mx-auto relative z-10">
		<div class="features-header mb-24 text-center max-w-3xl mx-auto">
			<SectionBadge variant="violet">Core Capabilities</SectionBadge>
			<h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white font-display leading-[1.1] mb-8 mt-8">
				Precision Engineered for
				<span class="bg-gradient-to-r from-procor-sky to-violet-400 bg-clip-text text-transparent">People.</span>
			</h2>
			<p class="text-lg text-neutral-400 font-medium leading-relaxed">
				Complex HR processes distilled into a high-performance platform that empowers every layer of your organization.
			</p>
		</div>

		<div class="features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each features as feature}
				<GlowCard glowColor={feature.glow} className="feature-card group cursor-default overflow-hidden">
					<TiltCard tiltAmount={6} glareOpacity={0.12} className="h-full">
						<div class="relative p-8 rounded-[var(--radius-xl)] bg-[var(--surface-card)] border border-[var(--border-subtle)] transition-all duration-500 hover:border-white/10 hover:bg-[var(--surface-glass)] h-full">
							<div class="absolute inset-0 bg-gradient-to-br {feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit]"></div>

							<div class="relative z-10 mb-6">
								{#if feature.viz === 'neural'}
									<div class="w-full h-32 rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-hidden relative">
										<svg class="w-full h-full" viewBox="0 0 200 100">
											{#each Array(6) as _, j}
												<circle cx={30 + j * 28} cy={30 + (j % 2) * 40} r="4" fill="rgba(139,92,246,0.6)" class="animate-pulse" style="animation-delay: {j * 200}ms;" />
												{#if j < 5}
													<line x1={30 + j * 28} y1={30 + (j % 2) * 40} x2={30 + (j + 1) * 28} y2={30 + ((j + 1) % 2) * 40} stroke="rgba(139,92,246,0.2)" stroke-width="1" />
												{/if}
											{/each}
										</svg>
									</div>
								{:else if feature.viz === 'pipeline'}
									<div class="w-full h-32 rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-hidden relative flex items-center justify-center gap-2 px-4">
										{#each Array(4) as _, j}
											<div class="flex-1 h-8 rounded-lg bg-gradient-to-r from-amber-500/20 to-amber-500/10 border border-amber-500/20 animate-pulse" style="animation-delay: {j * 300}ms;"></div>
											{#if j < 3}<ArrowRight size={12} class="text-amber-400/40 shrink-0" />{/if}
										{/each}
									</div>
								{:else if feature.viz === 'shield'}
									<div class="w-full h-32 rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-hidden relative flex items-center justify-center">
										<ShieldCheck size={48} class="text-emerald-400/30 animate-pulse" />
										<div class="absolute inset-0 border-2 border-emerald-400/10 rounded-xl m-4 animate-ping" style="animation-duration: 3s;"></div>
									</div>
								{:else if feature.viz === 'globe'}
									<div class="w-full h-32 rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-hidden relative flex items-center justify-center">
										<Globe size={48} class="text-sky-400/30 animate-spin-slow" />
										<div class="absolute w-24 h-24 border border-sky-400/10 rounded-full animate-ping" style="animation-duration: 4s;"></div>
									</div>
								{:else if feature.viz === 'chart'}
									<div class="w-full h-32 rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-hidden relative px-4 py-3">
										<div class="flex items-end gap-1.5 h-full">
											{#each [40, 65, 50, 80, 70, 95, 85] as h, j}
												<div class="flex-1 rounded-t bg-gradient-to-t from-rose-500/40 to-rose-400/20 transition-all duration-1000" style="height: {barsAnimated ? h : 0}%; transition-delay: {j * 100}ms;"></div>
											{/each}
										</div>
									</div>
								{:else}
									<div class="w-full h-32 rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-hidden relative flex items-center justify-center">
										<div class="grid grid-cols-3 gap-2 p-4">
											{#each Array(6) as _, j}
												<div class="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 animate-pulse" style="animation-delay: {j * 150}ms;"></div>
											{/each}
										</div>
									</div>
								{/if}
							</div>

							<div class="relative z-10">
								<div class="w-14 h-14 rounded-2xl bg-white/[0.06] {feature.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
									<feature.icon size={28} />
								</div>
								<h4 class="text-xl font-black text-white mb-3 group-hover:text-white/90 transition-colors">{feature.title}</h4>
								<p class="text-neutral-400 leading-relaxed font-medium text-sm mb-6">{feature.desc}</p>
								<div class="w-12 h-1 bg-white/5 group-hover:w-full transition-all duration-500"></div>
							</div>
						</div>
					</TiltCard>
				</GlowCard>
			{/each}
		</div>
	</div>
</section>
