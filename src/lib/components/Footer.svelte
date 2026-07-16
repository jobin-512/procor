<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { Mail, ArrowUp, ArrowRight, Check, Phone, MapPin } from '@lucide/svelte';
	import logo from '$lib/assets/image.webp';

	let email = $state('');
	let subscribed = $state(false);
	let showBackToTop = $state(false);

	const linkGroups = [
		{ title: 'Product', links: ['Features', 'Solutions', 'Demo', 'Security'], hrefs: ['/features', '/solutions', '/demo', '/'] },
		{ title: 'Company', links: ['About Us', 'Careers', 'Contact', 'Blog'], hrefs: ['/about', '/', '/contact', '/'] },
		{ title: 'Resources', links: ['Help Center', 'API Docs', 'Partners', 'Status'], hrefs: ['/', '/', '/', '/'] },
		{ title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'SLA'], hrefs: ['/', '/', '/', '/'] }
	];

	function handleSubscribe() {
		if (!email || !email.includes('@')) return;
		subscribed = true;
		email = '';
		setTimeout(() => (subscribed = false), 3000);
	}

	function scrollToTop() {
		const lenis = window.__lenis;
		if (lenis) {
			lenis.scrollTo(0, { duration: 1.5 });
		} else {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo('.footer-col',
			{ y: 30, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
				scrollTrigger: { trigger: '.footer-grid', start: 'top 90%', toggleActions: 'play none none none' } }
		);

		const onScroll = () => {
			showBackToTop = window.scrollY > 600;
		};
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});
</script>

<footer class="relative overflow-hidden bg-[#060912] border-t border-white/[0.06]">
	<div class="max-w-7xl mx-auto pt-20 pb-10 px-6 md:px-12">
		<!-- Top section: Newsletter -->
		<div class="grid lg:grid-cols-2 gap-12 mb-16 pb-16 border-b border-white/[0.06]">
			<div>
				<a href="/" class="flex items-center gap-3 mb-6">
					<img src={logo} alt="PROCOR HRMS" class="h-9 w-auto" />
					<span class="text-xl font-black tracking-tight text-white font-display uppercase">PROCOR</span>
				</a>
				<p class="text-white/40 font-medium text-sm leading-relaxed max-w-sm">
					Empowering Human Resources for Organisational Growth through intelligent automation and modern design.
				</p>
			</div>
			<div>
				<h5 class="font-black text-white/80 text-sm mb-3 uppercase tracking-[0.15em]">Stay Updated</h5>
				<p class="text-white/40 text-sm font-medium mb-5">Get the latest HR insights and product updates.</p>
				<div class="flex flex-col sm:flex-row gap-3">
					<input
						type="email"
						bind:value={email}
						placeholder="Enter your email"
						class="flex-1 px-5 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm font-medium text-white placeholder:text-white/25 focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/10 transition-all"
					/>
					{#if subscribed}
						<div class="px-6 py-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-bold flex items-center gap-2 animate-scale-in">
							<Check size={16} /> Subscribed
						</div>
					{:else}
						<button
							onclick={handleSubscribe}
							class="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 text-white text-sm font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 cursor-pointer group"
						>
							Subscribe <ArrowRight size={16} class="group-hover:translate-x-0.5 transition-transform" />
						</button>
					{/if}
				</div>
			</div>
		</div>

		<!-- Link columns -->
		<div class="footer-grid grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
			{#each linkGroups as group}
				<div class="footer-col">
					<h5 class="font-bold text-white/50 uppercase tracking-[0.15em] text-[10px] mb-6">{group.title}</h5>
					<ul class="space-y-3">
						{#each group.links as link, i}
							<li>
								<a
									href={group.hrefs[i] || '/'}
									class="text-white/30 font-medium text-sm hover:text-white/70 transition-colors duration-300"
								>
									{link}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<!-- Contact row -->
		<div class="flex flex-wrap gap-6 mb-10 text-sm text-white/30 font-medium">
			<div class="flex items-center gap-2">
				<Mail size={14} class="text-sky-400/60" />
				<span>hello@procor.io</span>
			</div>
			<div class="flex items-center gap-2">
				<Phone size={14} class="text-sky-400/60" />
				<span>+91 11 2345 6789</span>
			</div>
			<div class="flex items-center gap-2">
				<MapPin size={14} class="text-sky-400/60" />
				<span>New Delhi, India</span>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
			<p class="text-white/25 text-xs font-semibold">
				&copy; 2026 PROCOR HRMS. All rights reserved.
			</p>
			<div class="flex items-center gap-6">
				<div class="flex items-center gap-2 text-white/25">
					<span class="relative flex h-2 w-2">
						<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
						<span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
					</span>
					<span class="text-xs font-semibold">All Systems Operational</span>
				</div>
			</div>
		</div>
	</div>
</footer>

{#if showBackToTop}
	<button
		onclick={scrollToTop}
		aria-label="Back to top"
		class="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-white/[0.08] border border-white/[0.15] text-white flex items-center justify-center backdrop-blur-sm hover:bg-white/[0.15] hover:border-white/[0.25] hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300 cursor-pointer"
		style="animation: fade-in-up 0.3s var(--ease-out-expo) both;"
	>
		<ArrowUp size={18} />
	</button>
{/if}
