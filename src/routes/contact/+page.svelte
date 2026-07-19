<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import PageWebGL from '$lib/components/ui/PageWebGL.svelte';
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import Mail from '@lucide/svelte/icons/mail';
	import Phone from '@lucide/svelte/icons/phone';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Clock from '@lucide/svelte/icons/clock';
	import Send from '@lucide/svelte/icons/send';
	import MessageSquare from '@lucide/svelte/icons/message-square';
	import CheckCircle from '@lucide/svelte/icons/check-circle';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Globe from '@lucide/svelte/icons/globe';
	import Headphones from '@lucide/svelte/icons/headphones';
	import Calendar from '@lucide/svelte/icons/calendar';
	import Loader2 from '@lucide/svelte/icons/loader-2';
	import Building2 from '@lucide/svelte/icons/building-2';
	import Users from '@lucide/svelte/icons/users';
	import Plus from '@lucide/svelte/icons/plus';
	import Minus from '@lucide/svelte/icons/minus';

	let pageEl = $state(null);
	let formStatus = $state('idle'); // idle, loading, success
	let openFaq = $state(null);

	let formData = $state({
		name: '',
		email: '',
		company: '',
		employees: '',
		message: ''
	});

	const contactMethods = [
		{
			icon: Mail,
			title: 'Email Us',
			value: 'hello@procor.io',
			description: 'We respond within 24 hours',
			gradient: 'from-sky-500 to-cyan-500',
			action: 'mailto:hello@procor.io'
		},
		{
			icon: Phone,
			title: 'Call Us',
			value: '+1 (888) 555-0123',
			description: 'Mon-Fri, 9am-6pm EST',
			gradient: 'from-blue-500 to-blue-600',
			action: 'tel:+18885550123'
		},
		{
			icon: MessageSquare,
			title: 'Live Chat',
			value: 'Start a conversation',
			description: 'Available 24/7',
			gradient: 'from-emerald-500 to-green-500',
			action: '#chat'
		},
		{
			icon: Calendar,
			title: 'Book a Demo',
			value: 'Schedule a call',
			description: '30-minute product tour',
			gradient: 'from-amber-500 to-orange-500',
			action: '/demo'
		}
	];

	const offices = [
		{ city: 'San Francisco', country: 'USA', address: '123 Market Street, Suite 400', timezone: 'PST', phone: '+1 (415) 555-0123' },
		{ city: 'London', country: 'UK', address: '45 Canary Wharf, Floor 12', timezone: 'GMT', phone: '+44 20 7123 4567' },
		{ city: 'Singapore', country: 'Singapore', address: '88 Marina Bay Sands, Tower 2', timezone: 'SGT', phone: '+65 6123 4567' },
		{ city: 'Dubai', country: 'UAE', address: 'DIFC Tower 5, Level 8', timezone: 'GST', phone: '+971 4 123 4567' }
	];

	const faqs = [
		{ 
			q: 'How quickly can I get started?', 
			a: 'Most companies are fully onboarded within 14 business days. We handle all data migration, configuration, and training.'
		},
		{ 
			q: 'Do you offer a free trial?', 
			a: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required.'
		},
		{ 
			q: 'What kind of support do you offer?', 
			a: 'All plans include email and chat support. Growth tier gets priority support with < 4hr SLA. Enterprise receives a dedicated Customer Success Manager.'
		},
		{ 
			q: 'Can you help with data migration?', 
			a: 'Absolutely. Our migration team handles everything — employee records, payroll history, benefits — with zero manual entry required.'
		},
		{ 
			q: 'Is my data secure?', 
			a: "We're SOC 2 Type II certified, use AES-256 encryption, and maintain a zero-trust architecture. Your data is protected by bank-grade security."
		}
	];

	async function handleSubmit(e) {
		e.preventDefault();
		formStatus = 'loading';
		
		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 2000));
		
		formStatus = 'success';
	}

	onMount(() => {
		const ctx = gsap.context(() => {
			gsap.fromTo('.hero-content > *', 
				{ y: 50, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
			);

			gsap.utils.toArray('.reveal-section').forEach((section) => {
				gsap.fromTo(section, 
					{ y: 60, opacity: 0 },
					{ 
						y: 0, 
						opacity: 1, 
						duration: 0.8,
						scrollTrigger: {
							trigger: section,
							start: 'top 80%'
						}
					}
				);
			});
		}, pageEl);

		return () => ctx.revert();
	});
</script>

<div bind:this={pageEl} class="min-h-screen bg-[#050810] selection:bg-blue-500/30 overflow-hidden">
	<!-- WebGL Background -->
	<PageWebGL theme="blue" intensity={0.8} particleCount={800} />

	<!-- HERO -->
	<section class="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 px-6 md:px-12">
		<div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#050810]/50 to-[#050810] z-[1]"></div>
		
		<div class="hero-content max-w-4xl mx-auto text-center relative z-10">
			<div class="inline-flex items-center gap-3 px-6 py-3 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm font-semibold text-blue-300 mb-10 backdrop-blur-xl">
				<MessageSquare size={18} class="text-blue-400" />
				<span>Get in Touch</span>
			</div>

			<h1 class="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[0.9] font-display mb-8">
				<span class="block">Let's start a</span>
				<span class="block bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
					conversation
				</span>
			</h1>

			<p class="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed">
				Have a question? Want a demo? Our team is here to help you transform your HR operations.
			</p>
		</div>
	</section>

	<!-- CONTACT METHODS -->
	<section class="relative py-20 px-6 md:px-12">
		<div class="max-w-6xl mx-auto">
			<div class="reveal-section grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each contactMethods as method}
					<a 
						href={method.action}
						class="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-500"
					>
						<div class="absolute -inset-0.5 rounded-2xl bg-gradient-to-r {method.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
						<div class="relative">
							<div class="w-12 h-12 rounded-xl bg-gradient-to-br {method.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
								<svelte:component this={method.icon} size={22} class="text-white" />
							</div>
							<h3 class="text-lg font-bold text-white mb-1">{method.title}</h3>
							<p class="text-white/80 font-medium mb-1">{method.value}</p>
							<p class="text-sm text-white/40">{method.description}</p>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<!-- CONTACT FORM & FAQ -->
	<section class="relative py-20 px-6 md:px-12">
		<div class="max-w-6xl mx-auto">
			<div class="grid lg:grid-cols-2 gap-12">
				<!-- Form -->
				<div class="reveal-section">
					<h2 class="text-3xl font-black text-white mb-8">Send us a message</h2>
					
					{#if formStatus === 'success'}
						<div class="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center">
							<div class="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
								<CheckCircle size={32} class="text-emerald-400" />
							</div>
							<h3 class="text-xl font-bold text-white mb-2">Message Sent!</h3>
							<p class="text-white/60">We'll get back to you within 24 hours.</p>
						</div>
					{:else}
						<form onsubmit={handleSubmit} class="space-y-6">
							<div class="grid md:grid-cols-2 gap-6">
								<div>
									<label class="block text-sm font-semibold text-white/70 mb-2">Full Name</label>
									<input
										type="text"
										bind:value={formData.name}
										required
										class="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/30 focus:outline-none focus:border-rose-500/50 focus:ring-2 focus:ring-rose-500/20 transition-all"
										placeholder="John Doe"
									/>
								</div>
								<div>
									<label class="block text-sm font-semibold text-white/70 mb-2">Work Email</label>
									<input
										type="email"
										bind:value={formData.email}
										required
										class="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/30 focus:outline-none focus:border-rose-500/50 focus:ring-2 focus:ring-rose-500/20 transition-all"
										placeholder="john@company.com"
									/>
								</div>
							</div>

							<div class="grid md:grid-cols-2 gap-6">
								<div>
									<label class="block text-sm font-semibold text-white/70 mb-2">Company</label>
									<input
										type="text"
										bind:value={formData.company}
										class="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/30 focus:outline-none focus:border-rose-500/50 focus:ring-2 focus:ring-rose-500/20 transition-all"
										placeholder="Acme Inc."
									/>
								</div>
								<div>
									<label class="block text-sm font-semibold text-white/70 mb-2">Company Size</label>
									<select
										bind:value={formData.employees}
										class="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white focus:outline-none focus:border-rose-500/50 focus:ring-2 focus:ring-rose-500/20 transition-all appearance-none"
									>
										<option value="" class="bg-[#0a0f1a]">Select size</option>
										<option value="1-50" class="bg-[#0a0f1a]">1-50 employees</option>
										<option value="51-200" class="bg-[#0a0f1a]">51-200 employees</option>
										<option value="201-1000" class="bg-[#0a0f1a]">201-1,000 employees</option>
										<option value="1001-5000" class="bg-[#0a0f1a]">1,001-5,000 employees</option>
										<option value="5000+" class="bg-[#0a0f1a]">5,000+ employees</option>
									</select>
								</div>
							</div>

							<div>
								<label class="block text-sm font-semibold text-white/70 mb-2">Message</label>
								<textarea
									bind:value={formData.message}
									rows="4"
									class="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/30 focus:outline-none focus:border-rose-500/50 focus:ring-2 focus:ring-rose-500/20 transition-all resize-none"
									placeholder="Tell us about your HR challenges..."
								></textarea>
							</div>

							<button
								type="submit"
								disabled={formStatus === 'loading'}
								class="w-full py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-rose-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{#if formStatus === 'loading'}
									<Loader2 size={22} class="animate-spin" />
									Sending...
								{:else}
									<Send size={22} />
									Send Message
								{/if}
							</button>
						</form>
					{/if}
				</div>

				<!-- FAQ -->
				<div class="reveal-section">
					<h2 class="text-3xl font-black text-white mb-8">Frequently Asked</h2>
					
					<div class="space-y-4">
						{#each faqs as faq, i}
							<div class="rounded-xl bg-white/[0.02] border {openFaq === i ? 'border-rose-500/30 bg-rose-500/[0.02]' : 'border-white/[0.06]'} transition-all duration-300 overflow-hidden">
								<button
									class="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-white/[0.02] transition-colors"
									onclick={() => (openFaq = openFaq === i ? null : i)}
								>
									<span class="font-semibold text-white/90 pr-4">{faq.q}</span>
									<div class="shrink-0 w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center transition-all duration-300 {openFaq === i ? 'bg-rose-500/20 border-rose-500/30' : ''}">
										{#if openFaq === i}
											<Minus size={16} class="text-rose-400" />
										{:else}
											<Plus size={16} class="text-white/50" />
										{/if}
									</div>
								</button>
								{#if openFaq === i}
									<div class="px-5 pb-5">
										<p class="text-white/60 leading-relaxed">{faq.a}</p>
									</div>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- GLOBAL OFFICES -->
	<section class="relative py-32 px-6 md:px-12">
		<div class="absolute inset-0 bg-gradient-to-b from-transparent via-rose-950/10 to-transparent"></div>
		
		<div class="max-w-6xl mx-auto relative z-10">
			<div class="reveal-section text-center mb-16">
				<div class="inline-flex items-center gap-2 px-5 py-2 bg-sky-500/20 border border-sky-500/20 rounded-full text-sm font-semibold text-sky-300 mb-8">
					<Globe size={16} />
					<span>Global Presence</span>
				</div>
				<h2 class="text-4xl sm:text-5xl font-black text-white font-display mb-6">
					Offices <span class="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">worldwide</span>
				</h2>
			</div>

			<div class="reveal-section grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each offices as office}
					<div class="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-sky-500/30 transition-all duration-500">
						<div class="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
							<MapPin size={22} class="text-sky-400" />
						</div>
						<h3 class="text-xl font-bold text-white mb-1">{office.city}</h3>
						<p class="text-white/50 text-sm mb-4">{office.country}</p>
						<div class="space-y-2 text-sm">
							<p class="text-white/40">{office.address}</p>
							<p class="text-sky-400">{office.phone}</p>
							<p class="text-white/30">{office.timezone}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- SUPPORT SECTION -->
	<section class="relative py-20 px-6 md:px-12">
		<div class="max-w-4xl mx-auto">
			<div class="reveal-section relative">
				<div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-rose-500/30 via-pink-500/30 to-fuchsia-500/30 blur-2xl"></div>
				<div class="relative p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-white/[0.1] backdrop-blur-xl text-center">
					<div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-rose-500/30">
						<Headphones size={32} class="text-white" />
					</div>
					<h2 class="text-3xl font-black text-white mb-4">Need immediate help?</h2>
					<p class="text-white/60 mb-8 max-w-xl mx-auto">
						Our support team is available 24/7 to help you with any questions or issues.
					</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<a href="#chat" class="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-rose-500/30 transition-all">
							<MessageSquare size={20} />
							Start Live Chat
						</a>
						<a href="tel:+18885550123" class="px-8 py-4 bg-white/[0.05] border border-white/[0.1] text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white/[0.1] transition-all">
							<Phone size={20} />
							Call Support
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
