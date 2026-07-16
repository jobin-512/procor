<script>
	import {
		Rocket, Shield, Globe, Users, Heart, Lightbulb, Target,
		Award, Building2, TrendingUp, Zap, ArrowRight
	} from '@lucide/svelte';

	const heroStats = [
		{ value: '2019', label: 'Founded' },
		{ value: '500+', label: 'Employees' },
		{ value: '150+', label: 'Countries' },
		{ value: '99.9%', label: 'Uptime' }
	];

	const values = [
		{ icon: Rocket, title: 'Innovation', desc: 'We push boundaries to build tools that redefine how organizations manage their most valuable asset — their people.', accent: 'text-sky-400', glow: 'rgba(56,189,248,0.15)' },
		{ icon: Shield, title: 'Integrity', desc: 'Transparency, security, and trust are the foundation of every product decision and client relationship.', accent: 'text-violet-400', glow: 'rgba(139,92,246,0.15)' },
		{ icon: Globe, title: 'Impact', desc: 'From startups to enterprises, we measure success by the tangible outcomes we deliver to organizations worldwide.', accent: 'text-emerald-400', glow: 'rgba(16,185,129,0.15)' },
		{ icon: Users, title: 'Inclusion', desc: 'We champion diversity in every dimension — in our product design, hiring practices, and the communities we serve.', accent: 'text-amber-400', glow: 'rgba(245,158,11,0.15)' }
	];

	const timeline = [
		{ year: '2019', title: 'Founded in Delhi', desc: 'Started with a mission to humanize enterprise HR technology.' },
		{ year: '2020', title: 'Series A & First 100 Clients', desc: '$12M Series A funding. Onboarded 100 forward-thinking companies.' },
		{ year: '2021', title: 'Global Expansion', desc: 'Expanded operations worldwide. Reached 500 clients across 40+ countries.' },
		{ year: '2022', title: 'AI Features Launch', desc: 'Introduced predictive analytics and AI-powered workforce planning. 1,000+ clients.' },
		{ year: '2023', title: 'Enterprise Tier', desc: 'Launched enterprise-grade solutions with advanced compliance. 2,000+ clients.' },
		{ year: '2024', title: 'IPO Ready', desc: 'Preparing for public offering. 2,500+ clients, $180M ARR, 500+ team members.' }
	];

	const team = [
		{ initials: 'SL', name: 'Sarah Lin', title: 'CEO & Co-Founder', gradient: 'from-sky-400 to-indigo-500', bio: 'Former VP of People at Stripe. Stanford MBA.' },
		{ initials: 'MR', name: 'Marcus Rivera', title: 'CTO & Co-Founder', gradient: 'from-violet-400 to-fuchsia-500', bio: 'Ex-Google engineering lead. Built ML systems at scale.' },
		{ initials: 'AK', name: 'Aisha Kapoor', title: 'VP of Product', gradient: 'from-emerald-400 to-teal-500', bio: 'Previously at Notion and Figma. Obsessed with UX.' },
		{ initials: 'JC', name: 'James Chen', title: 'Head of Engineering', gradient: 'from-amber-400 to-orange-500', bio: 'Scaled engineering teams from 10 to 200.' },
		{ initials: 'EP', name: 'Elena Petrov', title: 'VP of Design', gradient: 'from-rose-400 to-pink-500', bio: 'Award-winning designer. Previously at Airtable.' },
		{ initials: 'DW', name: 'David Williams', title: 'Chief Revenue Officer', gradient: 'from-sky-400 to-cyan-500', bio: '20+ years in enterprise SaaS. Built sales at multiple unicorns.' }
	];

	const culturePillars = [
		{ icon: Lightbulb, title: 'Bias for Action', desc: 'We ship fast, learn faster. Every team member has the autonomy to drive change.' },
		{ icon: Heart, title: 'People First', desc: 'Flexible work, unlimited PTO, and a genuine commitment to mental health and wellbeing.' },
		{ icon: Target, title: 'Radical Transparency', desc: 'Open salaries, open roadmap, open books. We trust our team with the full picture.' },
		{ icon: Award, title: 'Give Back', desc: 'Volunteer days, matching donations, and a commitment to using tech for social good.' }
	];

	const openPositions = [
		{ title: 'Senior Full-Stack Engineer', team: 'Engineering', location: 'Remote' },
		{ title: 'Staff ML Engineer', team: 'Data Science', location: 'Remote' },
		{ title: 'Senior Product Designer', team: 'Design', location: 'Remote' },
		{ title: 'Enterprise Account Executive', team: 'Sales', location: 'Remote' },
		{ title: 'VP of Growth Marketing', team: 'Marketing', location: 'Remote' }
	];
</script>

<svelte:head>
	<title>About Us — PROCOR HRMS</title>
	<meta name="description" content="Learn about PROCOR HRMS — our mission, our team, and the future of human capital management." />
</svelte:head>

<div class="min-h-screen bg-[#080c15] overflow-hidden">

	<section class="pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
		<div class="absolute inset-0 pointer-events-none">
			<div class="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-sky-600/8 rounded-full blur-[120px]"></div>
		</div>
		<div class="max-w-7xl mx-auto text-center relative z-10">
			<div class="inline-flex items-center gap-2 px-5 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-[11px] font-extrabold tracking-[0.15em] uppercase mb-8">
				<span class="text-sky-300">About Us</span>
			</div>
			<h1 class="text-4xl sm:text-5xl md:text-6xl font-black font-display leading-[1.1] mb-6">
				<span class="text-white">Building the Future </span><br class="hidden sm:block" />
				<span class="bg-gradient-to-r from-sky-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">of Work</span>
			</h1>
			<p class="text-lg text-white/50 font-medium max-w-2xl mx-auto leading-relaxed mb-12">
				We are on a mission to transform how organizations manage their most valuable asset — their people.
			</p>
			<div class="flex flex-wrap justify-center gap-8">
				{#each heroStats as stat}
					<div class="text-center">
						<p class="text-3xl md:text-4xl font-black bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent font-display">{stat.value}</p>
						<p class="text-[10px] font-bold text-white/35 uppercase tracking-[0.2em] mt-1">{stat.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-20 md:py-28 px-6 md:px-12 bg-[#0b1120] border-y border-white/[0.06]">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-3xl sm:text-4xl md:text-5xl font-black font-display leading-[1.1] mb-4">
					<span class="text-white">Our </span>
					<span class="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">Values</span>
				</h2>
				<p class="text-lg text-white/50 font-medium max-w-2xl mx-auto">
					The principles that guide everything we do.
				</p>
			</div>
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
				{#each values as v}
					<div class="group relative p-7 rounded-2xl bg-white/[0.05] border border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.08] transition-all duration-500 cursor-default overflow-hidden backdrop-blur-sm">
						<div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[inherit]" style="background: radial-gradient(400px circle at 50% 50%, {v.glow}, transparent 40%);"></div>
						<div class="w-12 h-12 rounded-2xl bg-white/[0.08] border border-white/[0.12] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 relative z-10">
							<v.icon size={22} class={v.accent} />
						</div>
						<h3 class="text-lg font-black text-white mb-3 relative z-10">{v.title}</h3>
						<p class="text-white/45 text-sm font-medium leading-relaxed relative z-10">{v.desc}</p>
						<div class="w-10 h-[2px] bg-white/10 group-hover:w-full transition-all duration-700 mt-5 rounded-full relative z-10"></div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-20 md:py-28 px-6 md:px-12 bg-[#080c15]">
		<div class="max-w-4xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-3xl sm:text-4xl md:text-5xl font-black font-display leading-[1.1] mb-4">
					<span class="text-white">Our </span>
					<span class="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">Journey</span>
				</h2>
			</div>
			<div class="relative">
				<div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-sky-500/30 to-violet-500/30 -translate-x-1/2"></div>
				{#each timeline as item, i}
					<div class="relative flex items-start gap-8 mb-10 last:mb-0 {i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}">
						<div class="relative z-10 shrink-0">
							<div class="w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-violet-500 flex items-center justify-center text-white font-black text-sm font-display shadow-lg shadow-sky-500/20">
								{item.year}
							</div>
						</div>
						<div class="flex-1 md:w-[calc(50%-4rem)]">
							<div class="p-6 rounded-2xl bg-white/[0.05] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 backdrop-blur-sm">
								<h3 class="text-lg font-black text-white mb-2">{item.title}</h3>
								<p class="text-white/45 text-sm font-medium">{item.desc}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-20 md:py-28 px-6 md:px-12 bg-[#0b1120] border-y border-white/[0.06]">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-3xl sm:text-4xl md:text-5xl font-black font-display leading-[1.1] mb-4">
					<span class="text-white">Meet our </span>
					<span class="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">leadership</span>
				</h2>
				<p class="text-lg text-white/50 font-medium max-w-2xl mx-auto">
					The team driving the future of human capital management.
				</p>
			</div>
			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
				{#each team as member}
					<div class="group p-6 rounded-2xl bg-white/[0.05] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-500 cursor-default backdrop-blur-sm">
						<div class="w-16 h-16 rounded-2xl bg-gradient-to-br {member.gradient} flex items-center justify-center text-white font-black text-xl font-display mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
							{member.initials}
						</div>
						<h3 class="text-lg font-black text-white mb-1">{member.name}</h3>
						<p class="text-sky-400 text-sm font-bold mb-2">{member.title}</p>
						<p class="text-white/40 text-sm font-medium">{member.bio}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-20 md:py-28 px-6 md:px-12 bg-[#080c15]">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-3xl sm:text-4xl md:text-5xl font-black font-display leading-[1.1] mb-4">
					<span class="text-white">Our </span>
					<span class="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">Culture</span>
				</h2>
				<p class="text-lg text-white/50 font-medium max-w-2xl mx-auto">
					The values that define how we work together.
				</p>
			</div>
			<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
				{#each culturePillars as pillar}
					<div class="p-6 rounded-2xl bg-white/[0.05] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 backdrop-blur-sm">
						<div class="w-12 h-12 rounded-2xl bg-white/[0.08] border border-white/[0.12] flex items-center justify-center mb-5">
							<pillar.icon size={22} class="text-sky-400" />
						</div>
						<h3 class="text-lg font-black text-white mb-2">{pillar.title}</h3>
						<p class="text-white/45 text-sm font-medium leading-relaxed">{pillar.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-20 md:py-28 px-6 md:px-12 bg-[#0b1120] border-y border-white/[0.06]">
		<div class="max-w-3xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl sm:text-4xl md:text-5xl font-black font-display leading-[1.1] mb-4">
					<span class="text-white">Join Our </span>
					<span class="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">Team</span>
				</h2>
				<p class="text-lg text-white/50 font-medium">We are always looking for exceptional people.</p>
			</div>
			<div class="space-y-3">
				{#each openPositions as pos}
					<div class="flex items-center justify-between p-5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.07] transition-all duration-300 cursor-pointer group">
						<div>
							<p class="font-bold text-white/80 text-sm group-hover:text-white transition-colors">{pos.title}</p>
							<p class="text-xs text-white/30 font-medium mt-0.5">{pos.team} &middot; {pos.location}</p>
						</div>
						<ArrowRight size={16} class="text-white/20 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-20 md:py-28 px-6 md:px-12 bg-[#080c15]">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl sm:text-4xl md:text-5xl font-black font-display leading-[1.1] mb-6">
				<span class="text-white">Want to be part of </span>
				<span class="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">our story?</span>
			</h2>
			<p class="text-lg text-white/50 font-medium max-w-xl mx-auto mb-10">
				We are building the future of work, and we want you with us.
			</p>
			<div class="flex flex-wrap justify-center gap-4">
				<a href="/contact" class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-violet-500 text-white rounded-2xl font-bold text-base transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/20 active:scale-[0.98] group">
					Get in Touch <ArrowRight size={18} class="group-hover:translate-x-1 transition-transform" />
				</a>
			</div>
		</div>
	</section>
</div>
