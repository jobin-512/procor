<script>
	import { Mail, Phone, MapPin, Clock, Send, Check, MessageSquare } from '@lucide/svelte';

	let formData = $state({
		name: '',
		email: '',
		company: '',
		phone: '',
		subject: '',
		message: ''
	});
	let submitted = $state(false);

	function handleSubmit() {
		submitted = true;
		setTimeout(() => (submitted = false), 5000);
	}

	const contactMethods = [
		{ icon: Mail, title: 'Email Us', desc: 'hello@procor.io', detail: 'We respond within 24 hours' },
		{ icon: Phone, title: 'Call Us', desc: '+1 (555) 123-4567', detail: 'Mon-Fri, 9am-6pm PST' },
		{ icon: MapPin, title: 'Visit Us', desc: 'New Delhi, India', detail: 'Connaught Place, 110001' },
		{ icon: Clock, title: 'Support Hours', desc: '24/7 for Enterprise', detail: 'Standard: Mon-Fri 9am-6pm' }
	];

	const faqs = [
		{ q: 'How do I get started?', a: 'Simply fill out the form or email us. Our team will schedule a discovery call to understand your needs.' },
		{ q: 'Do you offer free trials?', a: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required.' },
		{ q: 'Can I schedule a demo?', a: 'Absolutely. Use the form below or click "Book a Demo" to schedule a personalized walkthrough.' },
		{ q: 'What support do you offer?', a: 'All plans include email support. Enterprise customers get 24/7 priority support with a dedicated account manager.' }
	];
</script>

<svelte:head>
	<title>Contact Us — PROCOR HRMS</title>
	<meta name="description" content="Get in touch with the PROCOR team. We'd love to hear from you." />
</svelte:head>

<div class="min-h-screen bg-[#080c15] overflow-hidden">

	<section class="pt-32 pb-16 px-6 md:px-12 relative overflow-hidden">
		<div class="absolute inset-0 pointer-events-none">
			<div class="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-sky-600/8 rounded-full blur-[120px]"></div>
		</div>
		<div class="max-w-7xl mx-auto text-center relative z-10">
			<div class="inline-flex items-center gap-2 px-5 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-[11px] font-extrabold tracking-[0.15em] uppercase mb-8">
				<span class="text-sky-300">Contact Us</span>
			</div>
			<h1 class="text-4xl sm:text-5xl md:text-6xl font-black font-display leading-[1.1] mb-6">
				<span class="text-white">Let's </span>
				<span class="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">talk</span>
			</h1>
			<p class="text-lg text-white/50 font-medium max-w-2xl mx-auto leading-relaxed">
				Have a question, want a demo, or ready to get started? We're here to help.
			</p>
		</div>
	</section>

	<section class="py-12 px-6 md:px-12">
		<div class="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
			{#each contactMethods as method}
				<div class="p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-center hover:border-white/[0.18] hover:bg-white/[0.07] transition-all duration-300 backdrop-blur-sm">
					<div class="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mx-auto mb-3">
						<method.icon size={20} class="text-sky-400" />
					</div>
					<p class="font-bold text-white/80 text-sm mb-1">{method.title}</p>
					<p class="text-sky-400 text-sm font-bold">{method.desc}</p>
					<p class="text-xs text-white/30 font-medium mt-1">{method.detail}</p>
				</div>
			{/each}
		</div>
	</section>

	<section class="py-16 px-6 md:px-12">
		<div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
			<div>
				<h2 class="text-2xl font-black text-white font-display mb-6">Send us a message</h2>
				{#if submitted}
					<div class="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center backdrop-blur-sm">
						<div class="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto mb-4">
							<Check size={28} class="text-emerald-400" />
						</div>
						<h3 class="text-xl font-black text-white mb-2">Message Sent!</h3>
						<p class="text-white/50 font-medium">We'll get back to you within 24 hours.</p>
					</div>
				{:else}
					<form class="space-y-4" onsubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
						<div class="grid sm:grid-cols-2 gap-4">
							<div>
								<label for="contact-name" class="block text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1.5">Full Name</label>
								<input id="contact-name" bind:value={formData.name} type="text" placeholder="John Doe" class="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm font-medium text-white placeholder:text-white/25 focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/10 transition-all" />
							</div>
							<div>
								<label for="contact-email" class="block text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1.5">Email</label>
								<input id="contact-email" bind:value={formData.email} type="email" placeholder="john@company.com" class="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm font-medium text-white placeholder:text-white/25 focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/10 transition-all" />
							</div>
						</div>
						<div class="grid sm:grid-cols-2 gap-4">
							<div>
								<label for="contact-company" class="block text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1.5">Company</label>
								<input id="contact-company" bind:value={formData.company} type="text" placeholder="Acme Corp" class="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm font-medium text-white placeholder:text-white/25 focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/10 transition-all" />
							</div>
							<div>
								<label for="contact-phone" class="block text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1.5">Phone</label>
								<input id="contact-phone" bind:value={formData.phone} type="tel" placeholder="+1 (555) 000-0000" class="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm font-medium text-white placeholder:text-white/25 focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/10 transition-all" />
							</div>
						</div>
						<div>
							<label for="contact-subject" class="block text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1.5">Subject</label>
							<select id="contact-subject" bind:value={formData.subject} class="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm font-medium text-white focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/10 transition-all appearance-none">
								<option value="">Select a topic</option>
								<option value="demo">Request a Demo</option>
								<option value="trial">Start Free Trial</option>
								<option value="support">Technical Support</option>
								<option value="sales">Sales Inquiry</option>
								<option value="partnership">Partnership</option>
								<option value="other">Other</option>
							</select>
						</div>
						<div>
							<label for="contact-message" class="block text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1.5">Message</label>
							<textarea id="contact-message" bind:value={formData.message} rows={5} placeholder="Tell us about your needs..." class="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm font-medium text-white placeholder:text-white/25 focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/10 transition-all resize-none"></textarea>
						</div>
						<button type="submit" class="w-full px-6 py-3.5 bg-gradient-to-r from-sky-500 to-violet-500 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 cursor-pointer group">
							<Send size={16} class="group-hover:-translate-y-0.5 transition-transform" /> Send Message
						</button>
					</form>
				{/if}
			</div>

			<div>
				<h2 class="text-2xl font-black text-white font-display mb-6">Common Questions</h2>
				<div class="space-y-3">
					{#each faqs as faq}
						<div class="p-5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
							<div class="flex items-start gap-3">
								<div class="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 mt-0.5">
									<MessageSquare size={14} class="text-sky-400" />
								</div>
								<div>
									<p class="font-bold text-white/80 text-sm mb-1">{faq.q}</p>
									<p class="text-white/45 text-sm font-medium leading-relaxed">{faq.a}</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
</div>
