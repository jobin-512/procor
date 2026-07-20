<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Loader2, ChevronDown } from '@lucide/svelte';
	import GlowCard from '$lib/components/ui/GlowCard.svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';

	let {
		contactInfo = [
			{ icon: Mail, label: 'Email', value: 'info@procorhrms.com', href: 'mailto:info@procorhrms.com', glow: 'rgba(117, 194, 246, 0.4)' },
			{ icon: Phone, label: 'Phone', value: 'xxxxx', href: 'tel:xxxxx', glow: 'rgba(139, 92, 246, 0.4)' },
			{ icon: MapPin, label: 'Address', value: 'Connaught Place, New Delhi 110001', href: '#', glow: 'rgba(16, 185, 129, 0.4)' },
			{ icon: Clock, label: 'Hours', value: 'Mon - Fri 9am - 6pm PST', href: '#', glow: 'rgba(245, 158, 11, 0.4)' }
		]
	} = $props();

	let formState = $state('idle');
	let formEl = $state(null);

	async function handleSubmit(e) {
		e.preventDefault();
		if (!formEl) return;
		
		formState = 'loading';
		
		const formData = new FormData(formEl);
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			company: formData.get('company'),
			phone: formData.get('phone'),
			subject: formData.get('subject'),
			message: formData.get('message')
		};

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data)
			});

			const result = await response.json();

			if (response.ok && result.success) {
				formState = 'success';
				setTimeout(() => {
					formState = 'idle';
					formEl.reset();
				}, 3000);
			} else {
				formState = 'idle';
				alert(result.error || 'Failed to send message');
			}
		} catch (error) {
			formState = 'idle';
			alert('Failed to send message. Please try again.');
		}
	}

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const ctx = gsap.context(() => {
			gsap.fromTo('.form-section', { x: -60, opacity: 0 }, {
				scrollTrigger: { trigger: '.form-section', start: 'top 80%', toggleActions: 'play none none reverse' },
				x: 0, opacity: 1, duration: 1.2, ease: 'power3.out'
			});

			gsap.fromTo('.info-card', { y: 40, opacity: 0 }, {
				scrollTrigger: { trigger: '.info-cards-grid', start: 'top 80%', toggleActions: 'play none none reverse' },
				y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out'
			});
		});

		return () => ctx.revert();
	});
</script>

<section id="contact-form" class="relative py-20 md:py-32 px-6 md:px-12 bg-[var(--surface-darker)]">
	<div class="absolute inset-0 pointer-events-none">
		<div class="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] bg-sky-600/5 rounded-full blur-[200px]"></div>
	</div>

	<div class="max-w-7xl mx-auto relative z-10">
		<div class="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

			<div class="form-section lg:col-span-3">
				<div class="mb-10">
					<SectionBadge variant="dark">Contact Us</SectionBadge>
					<h2 class="text-3xl md:text-5xl font-black text-white font-display mt-6 mb-4 tracking-tight">
						Send us a <span class="bg-gradient-to-r from-procor-sky to-procor-blue bg-clip-text text-transparent">message</span>
					</h2>
					<p class="text-neutral-500 font-medium">Fill out the form and we'll get back to you within 2 hours.</p>
				</div>

				<form bind:this={formEl} onsubmit={handleSubmit} class="space-y-6">
					<div class="relative group">
						<input
							type="text"
							id="name"
							required
							class="peer w-full px-6 py-5 bg-white/[0.03] border border-white/[0.08] rounded-2xl text-white text-base font-medium outline-none transition-all duration-300 focus:border-sky-500/50 focus:bg-white/[0.06] focus:shadow-[0_0_30px_-10px_rgba(56,189,248,0.3)] placeholder-transparent"
							placeholder="Full Name"
						/>
						<label for="name" class="absolute left-6 top-5 text-neutral-500 text-base font-medium pointer-events-none transition-all duration-300 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-sky-400 peer-focus:tracking-wider peer-focus:uppercase peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-neutral-500 peer-[:not(:placeholder-shown)]:tracking-wider peer-[:not(:placeholder-shown)]:uppercase">
							Full Name
						</label>
						<div class="absolute inset-0 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none" style="background: radial-gradient(circle at 50% 50%, rgba(56,189,248,0.06), transparent 70%);"></div>
					</div>

					<div class="grid sm:grid-cols-2 gap-6">
						<div class="relative group">
							<input
								type="email"
								id="email"
								required
								class="peer w-full px-6 py-5 bg-white/[0.03] border border-white/[0.08] rounded-2xl text-white text-base font-medium outline-none transition-all duration-300 focus:border-sky-500/50 focus:bg-white/[0.06] focus:shadow-[0_0_30px_-10px_rgba(56,189,248,0.3)] placeholder-transparent"
								placeholder="Email"
							/>
							<label for="email" class="absolute left-6 top-5 text-neutral-500 text-base font-medium pointer-events-none transition-all duration-300 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-sky-400 peer-focus:tracking-wider peer-focus:uppercase peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-neutral-500 peer-[:not(:placeholder-shown)]:tracking-wider peer-[:not(:placeholder-shown)]:uppercase">
								Email
							</label>
						</div>
						<div class="relative group">
							<input
								type="text"
								id="company"
								class="peer w-full px-6 py-5 bg-white/[0.03] border border-white/[0.08] rounded-2xl text-white text-base font-medium outline-none transition-all duration-300 focus:border-sky-500/50 focus:bg-white/[0.06] focus:shadow-[0_0_30px_-10px_rgba(56,189,248,0.3)] placeholder-transparent"
								placeholder="Company"
							/>
							<label for="company" class="absolute left-6 top-5 text-neutral-500 text-base font-medium pointer-events-none transition-all duration-300 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-sky-400 peer-focus:tracking-wider peer-focus:uppercase peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-neutral-500 peer-[:not(:placeholder-shown)]:tracking-wider peer-[:not(:placeholder-shown)]:uppercase">
								Company
							</label>
						</div>
					</div>

					<div class="grid sm:grid-cols-2 gap-6">
						<div class="relative group">
							<input
								type="tel"
								id="phone"
								class="peer w-full px-6 py-5 bg-white/[0.03] border border-white/[0.08] rounded-2xl text-white text-base font-medium outline-none transition-all duration-300 focus:border-sky-500/50 focus:bg-white/[0.06] focus:shadow-[0_0_30px_-10px_rgba(56,189,248,0.3)] placeholder-transparent"
								placeholder="Phone"
							/>
							<label for="phone" class="absolute left-6 top-5 text-neutral-500 text-base font-medium pointer-events-none transition-all duration-300 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-sky-400 peer-focus:tracking-wider peer-focus:uppercase peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-neutral-500 peer-[:not(:placeholder-shown)]:tracking-wider peer-[:not(:placeholder-shown)]:uppercase">
								Phone
							</label>
						</div>
						<div class="relative group">
							<select
								id="subject"
								required
								class="w-full px-6 py-5 bg-white/[0.03] border border-white/[0.08] rounded-2xl text-white text-base font-medium outline-none transition-all duration-300 focus:border-sky-500/50 focus:bg-white/[0.06] focus:shadow-[0_0_30px_-10px_rgba(56,189,248,0.3)] appearance-none cursor-pointer"
							>
								<option value="" disabled selected class="bg-[#0f172a] text-neutral-400">Subject</option>
								<option value="general" class="bg-[#0f172a] text-white">General Inquiry</option>
								<option value="sales" class="bg-[#0f172a] text-white">Sales</option>
								<option value="support" class="bg-[#0f172a] text-white">Support</option>
								<option value="partnership" class="bg-[#0f172a] text-white">Partnership</option>
							</select>
							<ChevronDown size={18} class="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
						</div>
					</div>

					<div class="relative group">
						<textarea
							id="message"
							rows="5"
							required
							class="peer w-full px-6 py-5 bg-white/[0.03] border border-white/[0.08] rounded-2xl text-white text-base font-medium outline-none transition-all duration-300 focus:border-sky-500/50 focus:bg-white/[0.06] focus:shadow-[0_0_30px_-10px_rgba(56,189,248,0.3)] placeholder-transparent resize-none"
							placeholder="Message"
						></textarea>
						<label for="message" class="absolute left-6 top-5 text-neutral-500 text-base font-medium pointer-events-none transition-all duration-300 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-sky-400 peer-focus:tracking-wider peer-focus:uppercase peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-neutral-500 peer-[:not(:placeholder-shown)]:tracking-wider peer-[:not(:placeholder-shown)]:uppercase">
							Message
						</label>
					</div>

					<button
						type="submit"
						disabled={formState !== 'idle'}
						class="relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-2xl font-black text-lg transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_20px_60px_-15px_rgba(56,189,248,0.4)] hover:shadow-sky-500/50 cursor-pointer overflow-hidden"
					>
						{#if formState === 'idle'}
							<Send size={20} />
							Send Message
						{:else if formState === 'loading'}
							<Loader2 size={20} class="animate-spin" />
							Sending...
						{:else if formState === 'success'}
							<CheckCircle size={20} />
							Message Sent!
						{/if}

						{#if formState === 'success'}
							<div class="absolute inset-0 bg-emerald-500/20 animate-pulse rounded-2xl"></div>
						{/if}
					</button>
				</form>
			</div>

			<div class="lg:col-span-2 space-y-4">
				<div class="mb-10">
					<h3 class="text-2xl font-bold text-white font-display mb-3">Other ways to reach us</h3>
					<p class="text-neutral-500 font-medium text-sm">Pick whatever works best for you.</p>
				</div>

				<div class="info-cards-grid space-y-4">
					{#each contactInfo as info, i}
						<a
							href={info.href}
							class="info-card group block"
						>
							<GlowCard glowColor={info.glow} className="hover-lift">
								<div class="flex items-start gap-5">
									<div class="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:bg-white/[0.1] transition-colors duration-300">
										<info.icon size={20} class="text-sky-400" />
									</div>
									<div class="min-w-0">
										<p class="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-1">{info.label}</p>
										<p class="text-white font-semibold text-sm leading-snug">{info.value}</p>
									</div>
								</div>
							</GlowCard>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>