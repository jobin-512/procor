<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Mail from '@lucide/svelte/icons/mail';
	import ArrowUp from '@lucide/svelte/icons/arrow-up';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Check from '@lucide/svelte/icons/check';
	import Phone from '@lucide/svelte/icons/phone';
	import MapPin from '@lucide/svelte/icons/map-pin';
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
		const onScroll = () => {
			showBackToTop = window.scrollY > 600;
		};
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});
</script>

<footer class="relative bg-[#060912] border-t border-white/[0.06]">
	<div class="max-w-7xl mx-auto pt-20 pb-10 px-6 md:px-12">
		<!-- Top section -->
		<div class="grid lg:grid-cols-2 gap-12 mb-16 pb-16 border-b border-white/[0.06]">
			<div>
				<a href="/" class="flex items-center gap-3 mb-6">
					<img src={logo} alt="PROCOR HRMS" class="h-10 w-auto" />
					<span class="text-xl font-extrabold tracking-tight text-white font-display uppercase">PROCOR</span>
				</a>
				<p class="text-white/40 text-sm leading-relaxed max-w-sm mb-6">
					Empowering Human Resources for Organisational Growth through intelligent automation and modern design.
				</p>
				<div class="flex items-center gap-3">
					<a href="/" class="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-blue-400 hover:border-blue-400/30 transition-all" aria-label="X (Twitter)">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
					</a>
					<a href="/" class="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-blue-400 hover:border-blue-400/30 transition-all" aria-label="LinkedIn">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
					</a>
					<a href="/" class="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-blue-400 hover:border-blue-400/30 transition-all" aria-label="GitHub">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
					</a>
				</div>
			</div>
			<div>
				<h5 class="font-bold text-white/80 text-sm mb-4">Stay Updated</h5>
				<p class="text-white/40 text-sm mb-5">Get the latest HR insights and product updates.</p>
				<div class="flex flex-col sm:flex-row gap-3">
					<input
						type="email"
						bind:value={email}
						placeholder="Enter your email"
						class="flex-1 px-5 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10 transition-all"
					/>
					{#if subscribed}
						<div class="px-6 py-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-semibold flex items-center gap-2">
							<Check size={16} /> Subscribed!
						</div>
					{:else}
						<button
							onclick={handleSubscribe}
							class="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 transition-all cursor-pointer group"
						>
							Subscribe <ArrowRight size={16} class="group-hover:translate-x-0.5 transition-transform" />
						</button>
					{/if}
				</div>
			</div>
		</div>

		<!-- Link columns -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
			{#each linkGroups as group}
				<div>
					<h5 class="font-semibold text-white/60 text-xs uppercase tracking-wider mb-5">{group.title}</h5>
					<ul class="space-y-3">
						{#each group.links as link, i}
							<li>
								<a href={group.hrefs[i] || '/'} class="text-white/40 text-sm hover:text-white/70 transition-colors">
									{link}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<!-- Contact row -->
		<div class="flex flex-wrap gap-6 mb-10 text-sm text-white/40">
			<div class="flex items-center gap-2">
				<Mail size={16} class="text-blue-400/60" />
				<span>hello@procor.io</span>
			</div>
			<div class="flex items-center gap-2">
				<Phone size={16} class="text-blue-400/60" />
				<span>+91 11 2345 6789</span>
			</div>
			<div class="flex items-center gap-2">
				<MapPin size={16} class="text-blue-400/60" />
				<span>New Delhi, India</span>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
			<p class="text-white/30 text-xs">
				© 2024 PROCOR HRMS. All rights reserved.
			</p>
			<div class="flex items-center gap-2 text-white/30">
				<span class="relative flex h-2 w-2">
					<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
					<span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
				</span>
				<span class="text-xs">All Systems Operational</span>
			</div>
		</div>
	</div>
</footer>

{#if showBackToTop}
	<button
		onclick={scrollToTop}
		aria-label="Back to top"
		class="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-xl bg-white/[0.08] border border-white/[0.1] text-white flex items-center justify-center backdrop-blur-sm hover:bg-white/[0.15] hover:border-white/[0.2] transition-all cursor-pointer animate-fade-in"
	>
		<ArrowUp size={20} />
	</button>
{/if}
