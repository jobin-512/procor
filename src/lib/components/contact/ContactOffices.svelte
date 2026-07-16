<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { MapPin } from '@lucide/svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';

	let {
		offices = [
			{ city: 'New Delhi', tag: 'HQ', address: 'Connaught Place', phone: '+91 11 2345 6789', gradient: 'from-sky-500/30 to-violet-500/30' },
			{ city: 'London', tag: null, address: '45 Canary Wharf', phone: '+44 20 7946 0958', gradient: 'from-indigo-500/30 to-blue-500/30' },
			{ city: 'Singapore', tag: null, address: '88 Marina Bay', phone: '+65 6123 4567', gradient: 'from-violet-500/30 to-fuchsia-500/30' },
			{ city: 'Sydney', tag: null, address: '120 George St', phone: '+61 2 9876 5432', gradient: 'from-emerald-500/30 to-cyan-500/30' }
		]
	} = $props();

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const ctx = gsap.context(() => {
			gsap.fromTo('.office-card', { y: 60, opacity: 0, scale: 0.95 }, {
				scrollTrigger: { trigger: '.offices-grid', start: 'top 85%', toggleActions: 'play none none reverse' },
				y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.15, ease: 'expo.out'
			});
		});

		return () => ctx.revert();
	});
</script>

<section class="relative py-20 md:py-32 px-6 md:px-12 bg-[var(--surface-dark)]">
	<div class="absolute inset-0 pointer-events-none">
		<div class="absolute top-[20%] right-[-10%] w-[40rem] h-[40rem] bg-violet-600/5 rounded-full blur-[180px]"></div>
	</div>

	<div class="max-w-7xl mx-auto relative z-10">
		<div class="text-center mb-16">
			<SectionBadge variant="dark">Our Offices</SectionBadge>
			<h2 class="text-3xl md:text-5xl font-black text-white font-display mt-6 mb-4 tracking-tight">
				Find us <span class="bg-gradient-to-r from-procor-sky to-violet-400 bg-clip-text text-transparent">worldwide</span>
			</h2>
			<p class="text-neutral-500 font-medium max-w-lg mx-auto">Four offices across three continents, one unified team.</p>
		</div>

		<div class="offices-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each offices as office, i}
				<div class="office-card group">
					<div class="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]">
						<div class="relative h-40 bg-gradient-to-br {office.gradient} overflow-hidden">
							<div class="absolute inset-0 opacity-20" style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22%3E%3Cpath d=%22M0 0h60v60H0z%22 fill=%22none%22/%3E%3Cpath d=%22M0 60L60 0%22 stroke=%22white%22 stroke-width=%22.3%22 fill=%22none%22/%3E%3C/svg%3E'); background-size: 30px 30px;"></div>
							<div class="absolute inset-0 flex items-center justify-center">
								<MapPin size={32} class="text-white/60 group-hover:text-white/90 group-hover:scale-110 transition-all duration-500" />
							</div>
							{#if office.tag}
								<span class="absolute top-3 right-3 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-[9px] font-black text-white uppercase tracking-wider">
									{office.tag}
								</span>
							{/if}
						</div>

						<div class="p-6">
							<h4 class="text-lg font-bold text-white mb-1">{office.city}</h4>
							<p class="text-sm text-neutral-500 font-medium mb-3">{office.address}</p>
							<p class="text-xs text-neutral-600 font-medium">{office.phone}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>