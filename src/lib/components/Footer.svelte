<!-- Footer — advanced interactions: magnetic effects, animated border, newsletter, back-to-top -->
<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { Globe, Users, Zap, Mail, ArrowUp, ArrowRight, Check } from '@lucide/svelte';
	import logo from '$lib/assets/image.webp';

	let email = $state('');
	let subscribed = $state(false);
	let showBackToTop = $state(false);
	let footerEl = $state(null);
	let newsletterInput = $state(null);

	const linkGroups = [
		{ title: 'Platform', links: ['Features', 'Pricing', 'Security', 'Enterprise'] },
		{ title: 'Company', links: ['About Us', 'Careers', 'Press', 'Contact'] },
		{ title: 'Resources', links: ['Blog', 'API Docs', 'Help Center', 'Partners'] },
		{ title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'SLA'] }
	];

	const socialIcons = [
		{ icon: Mail, label: 'Email', href: 'mailto:hello@procor.io' },
		{ icon: Users, label: 'Team', href: '/team' },
		{ icon: Zap, label: 'Status', href: '/status' }
	];

	function handleSubscribe() {
		if (!email || !email.includes('@')) return;
		subscribed = true;
		email = '';
		setTimeout(() => (subscribed = false), 3000);
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// ── Staggered column reveal ──
		gsap.from('.footer-col', {
			scrollTrigger: { trigger: '.footer-grid', start: 'top 90%' },
			y: 30,
			opacity: 0,
			duration: 0.8,
			stagger: 0.1,
			ease: 'power3.out'
		});

		// ── Newsletter reveal ──
		gsap.from('.newsletter-section', {
			scrollTrigger: { trigger: '.newsletter-section', start: 'top 95%' },
			y: 20,
			opacity: 0,
			duration: 0.6,
			ease: 'power2.out'
		});

		// ── Bottom bar reveal ──
		gsap.from('.footer-bottom', {
			scrollTrigger: { trigger: '.footer-bottom', start: 'top 95%' },
			y: 15,
			opacity: 0,
			duration: 0.6,
			ease: 'power2.out'
		});

		// ── Magnetic social icons ──
		const setupMagnetic = (el, strength) => {
			el.addEventListener('mousemove', (e) => {
				const rect = el.getBoundingClientRect();
				const x = e.clientX - rect.left - rect.width / 2;
				const y = e.clientY - rect.top - rect.height / 2;
				gsap.to(el, {
					x: x * strength,
					y: y * strength,
					duration: 0.4,
					ease: 'power2.out'
				});
			});
			el.addEventListener('mouseleave', () => {
				gsap.to(el, {
					x: 0,
					y: 0,
					duration: 0.7,
					ease: 'elastic.out(1, 0.3)'
				});
			});
		};

		document.querySelectorAll('.social-icon').forEach((icon) => {
			setupMagnetic(icon, 0.3);
		});

		// ── Gentle magnetic on footer links ──
		document.querySelectorAll('.footer-link').forEach((link) => {
			setupMagnetic(link, 0.08);
		});

		// ── Logo 3D tilt ──
		const logoWrapper = document.querySelector('.footer-logo');
		const logoInner = document.querySelector('.footer-logo-inner');
		if (logoWrapper && logoInner) {
			logoWrapper.addEventListener('mousemove', (e) => {
				const rect = logoWrapper.getBoundingClientRect();
				const x = (e.clientX - rect.left) / rect.width - 0.5;
				const y = (e.clientY - rect.top) / rect.height - 0.5;
				gsap.to(logoInner, {
					rotateY: x * 16,
					rotateX: -y * 16,
					duration: 0.4,
					ease: 'power2.out',
					transformPerspective: 600
				});
				const glow = logoWrapper.querySelector('.logo-glow');
				if (glow) {
					gsap.to(glow, { x: x * 10, y: y * 10, opacity: 0.5, duration: 0.4 });
				}
			});
			logoWrapper.addEventListener('mouseleave', () => {
				gsap.to(logoInner, {
					rotateY: 0,
					rotateX: 0,
					duration: 0.8,
					ease: 'elastic.out(1, 0.4)',
					transformPerspective: 600
				});
				const glow = logoWrapper.querySelector('.logo-glow');
				if (glow) {
					gsap.to(glow, { x: 0, y: 0, opacity: 0.2, duration: 0.6 });
				}
			});
		}

		// ── Back to top visibility ──
		const onScroll = () => {
			showBackToTop = window.scrollY > 600;
		};
		window.addEventListener('scroll', onScroll, { passive: true });

		// ── Magnetic back-to-top ──
		const bttBtn = document.querySelector('.back-to-top');
		if (bttBtn) {
			setupMagnetic(bttBtn, 0.2);
		}

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<footer bind:this={footerEl} class="relative overflow-hidden bg-[var(--surface-elevated)]">
	<!-- Animated gradient top border -->
	<div class="absolute inset-x-0 top-0 h-[1px] footer-border pointer-events-none z-10"></div>

	<!-- Subtle Background gradient -->
	<div
		class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-procor-light/50 to-transparent -z-10"
	></div>

	<div class="max-w-7xl mx-auto pt-32 pb-16 px-6 md:px-12">
		<!-- Main Grid -->
		<div class="footer-grid grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-16 mb-20">
			<!-- Brand Column -->
			<div class="col-span-2">
				<!-- 3D Logo -->
				<a
					href="/"
					class="footer-logo inline-flex items-center gap-3 mb-10 cursor-pointer perspective-1000"
				>
					<div
						class="relative w-12 h-12 flex items-center justify-center"
						style="transform-style: preserve-3d;"
					>
						<div
							class="logo-glow absolute inset-[-6px] bg-procor-blue/15 rounded-2xl blur-lg opacity-20"
						></div>
						<div
							class="footer-logo-inner relative z-10"
							style="transform-style: preserve-3d; transform: perspective(600px) rotateX(0deg) rotateY(0deg);"
						>
							<img src={logo} alt="PROCOR HRMS" class="h-10 w-auto" />
						</div>
					</div>
					<span
						class="text-2xl font-black tracking-tighter text-procor-navy font-display uppercase leading-none"
						>PROCOR</span
					>
				</a>

				<p
					class="text-slate-400 font-bold text-sm max-w-xs leading-relaxed mb-10 uppercase tracking-wider"
				>
					Empowering Human Resources for Organisational Growth through intelligent design.
				</p>

				<!-- Social Icons — magnetic -->
				<div class="flex gap-4">
					{#each socialIcons as social}
						<a
							href={social.href}
							aria-label={social.label}
							class="social-icon w-12 h-12 rounded-[var(--radius-xl)] bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-procor-blue hover:border-procor-blue hover:shadow-[var(--shadow-glow-blue)] transition-all duration-[var(--duration-normal)] cursor-pointer"
						>
							<social.icon size={20} />
						</a>
					{/each}
				</div>
			</div>

			<!-- Link Columns — staggered reveal -->
			{#each linkGroups as group}
				<div class="footer-col">
					<h5 class="font-black text-procor-navy uppercase tracking-[0.2em] text-[10px] mb-10">
						{group.title}
					</h5>
					<ul class="space-y-5">
						{#each group.links as link}
							<li>
								<a
									href="/"
									class="footer-link text-slate-500 font-bold text-sm hover:text-procor-blue transition-colors duration-[var(--duration-normal)] relative group inline-block"
								>
									{link}
									<span
										class="absolute -bottom-1 left-0 w-0 h-px bg-procor-blue transition-all duration-[var(--duration-slow)] group-hover:w-full"
									></span>
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<!-- Newsletter Section -->
		<div class="newsletter-section border-t border-slate-100 pt-12 mb-12">
			<div class="max-w-xl">
				<h5 class="font-black text-procor-navy text-sm mb-3">Stay updated</h5>
				<p class="text-slate-400 text-sm font-medium mb-6">
					Get the latest HR insights and product updates delivered to your inbox.
				</p>
				<div class="flex flex-col sm:flex-row gap-3">
					<div class="relative flex-1">
						<input
							bind:this={newsletterInput}
							type="email"
							bind:value={email}
							placeholder="Enter your email"
							class="newsletter-input w-full px-5 py-3.5 rounded-[var(--radius-xl)] bg-slate-50 border border-slate-200 text-sm font-medium text-procor-navy placeholder:text-slate-400 focus:outline-none focus:border-procor-blue focus:shadow-[0_0_0_3px_rgba(29,93,155,0.1)] transition-all duration-[var(--duration-normal)]"
						/>
					</div>
					{#if subscribed}
						<div
							class="px-6 py-3.5 rounded-[var(--radius-xl)] bg-emerald-500 text-white text-sm font-bold flex items-center gap-2 animate-scale-in"
						>
							<Check size={16} /> Subscribed
						</div>
					{:else}
						<button
							onclick={handleSubscribe}
							class="px-6 py-3.5 rounded-[var(--radius-xl)] bg-gradient-to-r from-procor-blue to-violet-600 text-white text-sm font-bold flex items-center gap-2 hover:shadow-[var(--shadow-glow-blue)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-[var(--duration-normal)] cursor-pointer group"
						>
							Subscribe <ArrowRight
								size={16}
								class="group-hover:translate-x-0.5 transition-transform"
							/>
						</button>
					{/if}
				</div>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div
			class="footer-bottom pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10"
		>
			<p class="text-slate-400 text-xs font-black uppercase tracking-widest">
				© 2026 PROCOR HRMS. Built for Global Scale.
			</p>

			<div class="flex items-center gap-8">
				<!-- Status Indicator — animated ring -->
				<div class="status-indicator flex items-center gap-2 text-slate-400 cursor-default group">
					<span class="relative flex h-2.5 w-2.5">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
						></span>
						<span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
					</span>
					<span
						class="text-[10px] font-black uppercase tracking-widest group-hover:text-green-600 transition-colors"
						>Operational</span
					>
				</div>

				<!-- Language Selector -->
				<div
					class="flex items-center gap-2 text-slate-400 cursor-pointer hover:text-procor-blue transition-colors duration-[var(--duration-normal)]"
				>
					<Globe size={14} />
					<span class="text-[10px] font-black uppercase tracking-widest">EN-US</span>
				</div>
			</div>
		</div>
	</div>
</footer>

<!-- Back to Top — magnetic button -->
{#if showBackToTop}
	<button
		onclick={scrollToTop}
		aria-label="Back to top"
		class="back-to-top fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-procor-navy text-white flex items-center justify-center shadow-lg hover:shadow-[var(--shadow-glow-blue)] hover:scale-110 active:scale-95 transition-all duration-[var(--duration-normal)] cursor-pointer"
		style="animation: fade-in-up 0.3s var(--ease-out-expo) both;"
	>
		<ArrowUp size={20} />
	</button>
{/if}

<style>
	/* ── Animated gradient top border ── */
	.footer-border::before {
		content: '';
		position: absolute;
		inset: 0;
		height: 1px;
		background: linear-gradient(
			90deg,
			transparent 0%,
			var(--color-procor-blue) 20%,
			var(--color-procor-sky) 50%,
			var(--color-procor-blue) 80%,
			transparent 100%
		);
		background-size: 200% 100%;
		animation: border-shimmer 4s linear infinite;
	}

	@keyframes border-shimmer {
		0% {
			background-position: 200% 0;
		}
		100% {
			background-position: -200% 0;
		}
	}

	/* ── Newsletter input focus glow ── */
	.newsletter-input:focus {
		background: white;
	}

	/* ── Status indicator pulse ring ── */
	.status-indicator:hover .animate-ping {
		animation-duration: 1s;
	}
</style>
