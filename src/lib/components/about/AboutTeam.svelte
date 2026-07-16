<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { Link } from '@lucide/svelte';
	import GlowCard from '$lib/components/ui/GlowCard.svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';

	let { team = [] } = $props();

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo('.team-card',
			{ y: 50, opacity: 0, scale: 0.95 },
			{ y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
				scrollTrigger: { trigger: '.team-grid', start: 'top 80%', toggleActions: 'play none none none' } }
		);
	});
</script>

<section class="relative py-32 px-6 md:px-12 bg-[var(--surface-darker)]">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-20">
			<SectionBadge variant="violet">Our People</SectionBadge>
			<h2
				class="text-3xl sm:text-4xl md:text-6xl font-black font-display text-white mt-6 tracking-tight"
			>
				Meet the Team
			</h2>
			<p class="mt-4 text-lg text-white/50 max-w-xl mx-auto font-medium">
				A diverse group of builders, dreamers, and leaders united by one mission.
			</p>
		</div>

		<div class="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each team as member, i}
				<div class="team-card">
					<GlowCard glowColor="rgba(117, 194, 246, 0.2)" glowSize={180}>
						<div class="text-center group cursor-default">
							<div
								class="w-24 h-24 rounded-full bg-gradient-to-br {member.gradient} mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
							>
								<span class="text-2xl font-black text-white font-display"
									>{member.initials}</span
								>
							</div>

							<h4
								class="text-lg font-black font-display text-white mb-1 group-hover:text-sky-300 transition-colors"
							>
								{member.name}
							</h4>
							<p class="text-xs font-bold text-sky-400/70 uppercase tracking-[0.15em] mb-4">
								{member.title}
							</p>
							<p class="text-white/40 text-sm leading-relaxed mb-6">
								{member.bio}
							</p>

							<a
								href="#"
								class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] text-white/30 hover:text-sky-400 hover:border-sky-500/30 hover:bg-sky-500/10 transition-all duration-300"
								aria-label="LinkedIn profile"
							>
								<Link size={16} />
							</a>
						</div>
					</GlowCard>
				</div>
			{/each}
		</div>
	</div>
</section>
