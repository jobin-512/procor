<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { Link, AtSign, Code, Video } from '@lucide/svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';
	import MagneticButton from '$lib/components/ui/MagneticButton.svelte';

	let {
		socials = [
			{ icon: Link, label: 'LinkedIn', handle: '@procor', followers: '12.4K', href: '#', color: 'hover:text-sky-400 hover:border-sky-400/30 hover:shadow-sky-400/10' },
			{ icon: AtSign, label: 'X / Twitter', handle: '@procorhr', followers: '8.2K', href: '#', color: 'hover:text-sky-300 hover:border-sky-300/30 hover:shadow-sky-300/10' },
			{ icon: Code, label: 'GitHub', handle: 'procor', followers: '3.1K', href: '#', color: 'hover:text-white hover:border-white/30 hover:shadow-white/10' },
			{ icon: Video, label: 'YouTube', handle: '@procor', followers: '5.6K', href: '#', color: 'hover:text-rose-400 hover:border-rose-400/30 hover:shadow-rose-400/10' }
		]
	} = $props();

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const ctx = gsap.context(() => {
			gsap.fromTo('.social-card', { y: 30, opacity: 0 }, {
				scrollTrigger: { trigger: '.socials-grid', start: 'top 85%', toggleActions: 'play none none reverse' },
				y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out'
			});
		});

		return () => ctx.revert();
	});
</script>

<section class="relative py-20 md:py-32 px-6 md:px-12 bg-[var(--surface-darker)]">
	<div class="max-w-5xl mx-auto relative z-10">
		<div class="text-center mb-16">
			<SectionBadge variant="dark">Follow Us</SectionBadge>
			<h2 class="text-3xl md:text-5xl font-black text-white font-display mt-6 mb-4 tracking-tight">
				Join the <span class="bg-gradient-to-r from-procor-sky to-violet-400 bg-clip-text text-transparent">community</span>
			</h2>
			<p class="text-neutral-500 font-medium max-w-lg mx-auto">Stay connected and follow our journey on social media.</p>
		</div>

		<div class="socials-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
			{#each socials as social, i}
				<a
					href={social.href}
					class="social-card group block"
				>
					<div class="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 text-center transition-all duration-500 {social.color} hover:bg-white/[0.04] hover:shadow-xl">
						<div class="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-500">
							<social.icon size={24} />
						</div>
						<p class="text-sm font-bold text-white mb-1">{social.label}</p>
						<p class="text-xs text-neutral-600 font-medium mb-4">{social.handle}</p>
						<div class="flex items-center justify-center gap-2 mb-5">
							<span class="text-lg font-black text-white">{social.followers}</span>
							<span class="text-[9px] font-bold text-neutral-500 uppercase tracking-wider">followers</span>
						</div>
						<MagneticButton variant="secondary" size="sm" className="w-full">
							Follow
						</MagneticButton>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>