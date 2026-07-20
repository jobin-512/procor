<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import PageWebGL from '$lib/components/ui/PageWebGL.svelte';
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import Target from '@lucide/svelte/icons/target';
	import Heart from '@lucide/svelte/icons/heart';
	import Lightbulb from '@lucide/svelte/icons/lightbulb';
	import Users from '@lucide/svelte/icons/users';
	import Rocket from '@lucide/svelte/icons/rocket';
	import Globe from '@lucide/svelte/icons/globe';
	import Award from '@lucide/svelte/icons/award';
	import TrendingUp from '@lucide/svelte/icons/trending-up';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
import MapPin from '@lucide/svelte/icons/map-pin';
import Calendar from '@lucide/svelte/icons/calendar';
	import CheckCircle from '@lucide/svelte/icons/check-circle';
	import Zap from '@lucide/svelte/icons/zap';
	import Shield from '@lucide/svelte/icons/shield';
	import Star from '@lucide/svelte/icons/star';

	let pageEl = $state(null);
	let activeTimelineIndex = $state(0);

	const stats = [
		{ value: '2019', label: 'Founded', icon: Calendar },
		{ value: '500+', label: 'Team Members', icon: Users },
		{ value: '2,500+', label: 'Clients', icon: Globe },
		{ value: '150+', label: 'Countries', icon: MapPin }
	];

	const values = [
		{
			icon: Heart,
			title: 'People First',
			description: 'We believe technology should enhance human connection, not replace it. Every feature we build starts with empathy.',
			gradient: 'from-rose-500 to-pink-500'
		},
		{
			icon: Lightbulb,
			title: 'Innovation',
			description: 'We challenge conventions and push boundaries. Our AI-first approach transforms how organizations manage talent.',
			gradient: 'from-amber-500 to-orange-500'
		},
		{
			icon: Target,
			title: 'Excellence',
			description: 'Good enough is never enough. We obsess over details and continuously raise the bar for quality.',
			gradient: 'from-blue-500 to-blue-600'
		},
		{
			icon: Shield,
			title: 'Trust',
			description: 'Security and privacy are non-negotiable. We earn trust through transparency and unwavering integrity.',
			gradient: 'from-emerald-500 to-green-500'
		},
		{
			icon: Users,
			title: 'Collaboration',
			description: 'The best solutions emerge when diverse minds work together. We foster inclusive environments where everyone thrives.',
			gradient: 'from-sky-500 to-cyan-500'
		},
		{
			icon: Zap,
			title: 'Speed',
			description: 'In a fast-moving world, agility wins. We ship fast, learn faster, and iterate relentlessly.',
			gradient: 'from-indigo-500 to-blue-500'
		}
	];

	const timeline = [
		{ year: '2019', title: 'The Beginning', description: 'Founded in a small garage with a vision to transform HR technology.', icon: Rocket },
		{ year: '2020', title: 'First 100 Clients', description: 'Achieved product-market fit and raised Series A funding.', icon: TrendingUp },
		{ year: '2021', title: 'Global Expansion', description: 'Opened offices in London, Singapore, and Dubai.', icon: Globe },
		{ year: '2022', title: 'AI Revolution', description: 'Launched neural matching engine and predictive analytics.', icon: Lightbulb },
		{ year: '2023', title: 'Industry Leader', description: 'Recognized as a Leader in Gartner Magic Quadrant for HCM.', icon: Award },
		{ year: '2024', title: 'The Future', description: 'Expanding to 150+ countries with autonomous HR capabilities.', icon: Star }
	];

	const team = [
		{ name: 'Abhishek Kumar', role: 'SEO & Founder', image: 'https://i.pravatar.cc/300?img=32', bio: 'Visionary leader driving the future of HR technology with AI-first approach.' },
		{ name: 'Paras Kumar', role: 'CFO & Founder', image: 'https://i.pravatar.cc/300?img=12', bio: 'Financial strategist building sustainable growth for global HR transformation.' }
	];

	const offices = [
		{ city: 'San Francisco', country: 'USA', address: '123 Market Street', type: 'HQ' },
		{ city: 'London', country: 'UK', address: '45 Canary Wharf', type: 'EMEA' },
		{ city: 'Singapore', country: 'Singapore', address: '88 Marina Bay', type: 'APAC' },
		{ city: 'Dubai', country: 'UAE', address: 'DIFC Tower 5', type: 'MEA' }
	];

	const openPositions = [
		{ title: 'Senior Software Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time' },
		{ title: 'Product Designer', department: 'Design', location: 'San Francisco', type: 'Full-time' },
		{ title: 'AI/ML Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time' },
		{ title: 'Customer Success Manager', department: 'Customer Success', location: 'London', type: 'Full-time' },
		{ title: 'Sales Development Rep', department: 'Sales', location: 'New York', type: 'Full-time' }
	];

	onMount(() => {
		const ctx = gsap.context(() => {
			// Hero animations
			gsap.fromTo('.hero-content > *', 
				{ y: 50, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
			);

			// Scroll-triggered animations
			gsap.utils.toArray('.reveal-section').forEach((section) => {
				gsap.fromTo(section, 
					{ y: 60, opacity: 0 },
					{ 
						y: 0, 
						opacity: 1, 
						duration: 0.8,
						scrollTrigger: {
							trigger: section,
							start: 'top 80%',
							toggleActions: 'play none none reverse'
						}
					}
				);
			});
		}, pageEl);

		// Timeline auto-advance
		const interval = setInterval(() => {
			activeTimelineIndex = (activeTimelineIndex + 1) % timeline.length;
		}, 4000);

		return () => {
			ctx.revert();
			clearInterval(interval);
		};
	});
</script>

<div bind:this={pageEl} class="min-h-screen bg-[#050810] selection:bg-blue-500/30 overflow-hidden">
	<!-- WebGL Background -->
	<PageWebGL theme="blue" intensity={0.8} particleCount={800} />

	<!-- HERO SECTION -->
	<section class="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 md:px-12">
		<div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#050810]/50 to-[#050810] z-[1]"></div>
		
		<div class="hero-content max-w-5xl mx-auto text-center relative z-10">
			<div class="inline-flex items-center gap-3 px-6 py-3 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm font-semibold text-blue-300 mb-10 backdrop-blur-xl">
				<Sparkles size={18} class="text-blue-400" />
				<span>Our Story</span>
			</div>

			<h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] font-display mb-8">
				<span class="block">Building the</span>
				<span class="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
					future of work
				</span>
			</h1>

			<p class="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-16 leading-relaxed">
				We're on a mission to humanize technology and transform how organizations 
				connect with their most valuable asset — their people.
			</p>

			<!-- Stats -->
			<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
				{#each stats as stat}
					<div class="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:bg-white/[0.06] hover:border-blue-500/30 transition-all duration-500">
						<div class="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
							<svelte:component this={stat.icon} size={22} class="text-blue-400" />
						</div>
						<div class="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
						<div class="text-sm text-white/50">{stat.label}</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- VALUES SECTION -->
	<section class="relative py-32 px-6 md:px-12">
		<div class="max-w-7xl mx-auto">
			<div class="reveal-section text-center mb-20">
				<div class="inline-flex items-center gap-2 px-5 py-2 bg-rose-500/20 border border-rose-500/20 rounded-full text-sm font-semibold text-rose-300 mb-8">
					<Heart size={16} />
					<span>Our Values</span>
				</div>
				<h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display mb-6">
					What drives <span class="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">everything</span> we do
				</h2>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each values as value, i}
					<div class="reveal-section group relative">
						<div class="absolute -inset-0.5 rounded-3xl bg-gradient-to-r {value.gradient} opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500"></div>
						<div class="relative p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl h-full hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-500">
							<div class="w-14 h-14 rounded-2xl bg-gradient-to-br {value.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<svelte:component this={value.icon} size={26} class="text-white" />
							</div>
							<h3 class="text-xl font-bold text-white mb-3">{value.title}</h3>
							<p class="text-white/50 leading-relaxed">{value.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- TIMELINE SECTION -->
	<section class="relative py-32 px-6 md:px-12 overflow-hidden">
		<div class="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent"></div>
		
		<div class="max-w-6xl mx-auto relative z-10">
			<div class="reveal-section text-center mb-20">
				<div class="inline-flex items-center gap-2 px-5 py-2 bg-amber-500/20 border border-amber-500/20 rounded-full text-sm font-semibold text-amber-300 mb-8">
					<Calendar size={16} />
					<span>Our Journey</span>
				</div>
				<h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display mb-6">
					From startup to <span class="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">industry leader</span>
				</h2>
			</div>

			<!-- Timeline -->
			<div class="relative">
				<!-- Timeline line -->
				<div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

				<div class="space-y-8">
					{#each timeline as item, i}
						<div 
							class="reveal-section relative flex flex-col lg:flex-row items-center gap-8 {i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}"
						>
							<!-- Content -->
							<div class="flex-1 {i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}">
								<div 
									class="p-6 rounded-2xl transition-all duration-500 {activeTimelineIndex === i ? 'bg-white/[0.06] border border-blue-500/30' : 'bg-white/[0.02] border border-white/[0.06]'}"
								>
									<div class="text-3xl font-black bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent mb-2">
										{item.year}
									</div>
									<h3 class="text-xl font-bold text-white mb-2">{item.title}</h3>
									<p class="text-white/50">{item.description}</p>
								</div>
							</div>

							<!-- Center icon -->
							<div class="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 {activeTimelineIndex === i ? 'scale-110' : 'scale-100'} transition-transform duration-300">
								<svelte:component this={item.icon} size={24} class="text-white" />
							</div>

							<!-- Spacer for alignment -->
							<div class="flex-1 hidden lg:block"></div>
						</div>
					{/each}
				</div>

				<!-- Progress dots -->
				<div class="flex justify-center gap-3 mt-12">
					{#each timeline as _, i}
						<button
							onclick={() => activeTimelineIndex = i}
							class="w-3 h-3 rounded-full transition-all duration-300 {activeTimelineIndex === i ? 'bg-blue-500 scale-125' : 'bg-white/20 hover:bg-white/40'}"
							aria-label="Go to {timeline[i].year}"
						></button>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- TEAM SECTION -->
	<section class="relative py-32 px-6 md:px-12">
		<div class="max-w-7xl mx-auto">
			<div class="reveal-section text-center mb-20">
				<div class="inline-flex items-center gap-2 px-5 py-2 bg-sky-500/20 border border-sky-500/20 rounded-full text-sm font-semibold text-sky-300 mb-8">
					<Users size={16} />
					<span>Leadership Team</span>
				</div>
				<h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display mb-6">
					Meet the <span class="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">visionaries</span>
				</h2>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each team as member}
					<div class="reveal-section group">
						<div class="relative rounded-3xl overflow-hidden bg-white/[0.03] border border-white/[0.08] hover:border-sky-500/30 transition-all duration-500">
							<!-- Image -->
							<div class="relative h-72 overflow-hidden">
								<img 
									src={member.image} 
									alt={member.name}
									class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
								/>
								<div class="absolute inset-0 bg-gradient-to-t from-[#050810] via-transparent to-transparent"></div>
							</div>
							
							<!-- Content -->
							<div class="relative p-6 -mt-12">
								<h3 class="text-xl font-bold text-white mb-1">{member.name}</h3>
								<p class="text-sky-400 font-semibold text-sm mb-3">{member.role}</p>
								<p class="text-white/50 text-sm">{member.bio}</p>
								
								<!-- Social link -->
								<a href="/" class="inline-flex items-center gap-2 mt-4 text-white/40 hover:text-sky-400 transition-colors">
									<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
									<span class="text-sm">Connect</span>
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- OFFICES SECTION -->
	<section class="relative py-32 px-6 md:px-12">
		<div class="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent"></div>
		
		<div class="max-w-6xl mx-auto relative z-10">
			<div class="reveal-section text-center mb-20">
				<div class="inline-flex items-center gap-2 px-5 py-2 bg-emerald-500/20 border border-emerald-500/20 rounded-full text-sm font-semibold text-emerald-300 mb-8">
					<Globe size={16} />
					<span>Global Presence</span>
				</div>
				<h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display mb-6">
					Offices <span class="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">worldwide</span>
				</h2>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each offices as office}
					<div class="reveal-section group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-emerald-500/30 transition-all duration-500">
						<div class="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
							<MapPin size={22} class="text-emerald-400" />
						</div>
						<div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">{office.type}</div>
						<h3 class="text-xl font-bold text-white mb-1">{office.city}</h3>
						<p class="text-white/50 text-sm">{office.country}</p>
						<p class="text-white/30 text-sm mt-2">{office.address}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- CAREERS SECTION -->
	<section class="relative py-32 px-6 md:px-12">
		<div class="max-w-5xl mx-auto">
			<div class="reveal-section text-center mb-16">
				<div class="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/20 border border-blue-500/20 rounded-full text-sm font-semibold text-blue-300 mb-8">
					<Rocket size={16} />
					<span>Join Us</span>
				</div>
				<h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display mb-6">
					Build the <span class="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">future with us</span>
				</h2>
				<p class="text-xl text-white/50 max-w-2xl mx-auto">
					We're always looking for exceptional people to join our mission.
				</p>
			</div>

			<div class="reveal-section space-y-4">
				{#each openPositions as job}
					<a href="/" class="group block p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-300">
						<div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
							<div>
								<h3 class="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{job.title}</h3>
								<div class="flex items-center gap-4 mt-2 text-sm text-white/50">
									<span>{job.department}</span>
									<span>•</span>
									<span>{job.location}</span>
									<span>•</span>
									<span>{job.type}</span>
								</div>
							</div>
							<div class="flex items-center gap-2 text-white/50 group-hover:text-blue-400 transition-colors">
								<span class="text-sm font-semibold">Apply</span>
								<ArrowRight size={18} class="group-hover:translate-x-1 transition-transform" />
							</div>
						</div>
					</a>
				{/each}
			</div>

			<div class="reveal-section text-center mt-12">
				<a href="/" class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all group">
					View All Openings
					<ArrowRight size={18} class="group-hover:translate-x-1 transition-transform" />
				</a>
			</div>
		</div>
	</section>

	<!-- FINAL CTA -->
<section class="relative py-32 px-6 md:px-12">
		<div class="absolute inset-0">
			<div class="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-transparent"></div>
		</div>

		<div class="reveal-section max-w-4xl mx-auto text-center relative z-10">
			<h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display mb-8">
				Ready to transform your
				<span class="block bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
					HR operations?
				</span>
			</h2>
			
			<p class="text-xl text-white/50 mb-12 max-w-2xl mx-auto">
				Join thousands of organizations that trust PROCOR to power their people operations.
			</p>

			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/demo" class="group relative px-10 py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-blue-500/30 transition-all">
					<Rocket size={22} />
					Start Free Trial
					<ArrowRight size={20} class="group-hover:translate-x-1 transition-transform" />
				</a>
				<a href="/contact" class="px-10 py-5 bg-white/[0.05] border border-white/[0.1] text-white rounded-2xl font-semibold text-lg hover:bg-white/[0.1] transition-all">
					Contact Sales
				</a>
			</div>
		</div>
	</section>
</div>
