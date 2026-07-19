<!-- InsaneTestimonials — 3D Carousel with immersive effects -->
<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Star from '@lucide/svelte/icons/star';
	import Quote from '@lucide/svelte/icons/quote';
	import ChevronLeft from '@lucide/svelte/icons/chevron-left';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import Building2 from '@lucide/svelte/icons/building-2';
	import Users from '@lucide/svelte/icons/users';
	import TrendingUp from '@lucide/svelte/icons/trending-up';

	let sectionEl = $state(null);
	let activeIndex = $state(0);
	let isAutoPlaying = $state(true);

	const testimonials = [
		{
			name: 'Sarah Chen',
			role: 'Chief People Officer',
			company: 'TechVentures Global',
			avatar: 'https://i.pravatar.cc/150?img=32',
			content: "PROCOR didn't just improve our HR operations — it completely transformed how we think about human capital. We've reduced time-to-hire by 47% and employee satisfaction scores are at an all-time high.",
			stats: { metric: '47%', label: 'Faster Hiring' },
			companySize: '5,000+ employees',
			industry: 'Technology'
		},
		{
			name: 'Marcus Williams',
			role: 'VP of Operations',
			company: 'FinanceFirst Corp',
			avatar: 'https://i.pravatar.cc/150?img=12',
			content: "Managing payroll across 28 countries used to be a nightmare with constant compliance issues. Now it's completely automated with zero errors. The ROI was evident within the first month.",
			stats: { metric: '28', label: 'Countries Unified' },
			companySize: '12,000+ employees',
			industry: 'Financial Services'
		},
		{
			name: 'Dr. Elena Rodriguez',
			role: 'CHRO',
			company: 'HealthCare United',
			avatar: 'https://i.pravatar.cc/150?img=47',
			content: "In healthcare, compliance isn't optional — it's critical. PROCOR's automated compliance engine has given us peace of mind and saved our legal team hundreds of hours annually.",
			stats: { metric: '99.9%', label: 'Compliance Rate' },
			companySize: '25,000+ employees',
			industry: 'Healthcare'
		},
		{
			name: 'David Okonkwo',
			role: 'CEO & Founder',
			company: 'ScaleUp Dynamics',
			avatar: 'https://i.pravatar.cc/150?img=59',
			content: "We scaled from 50 to 2,000 employees in 18 months. PROCOR grew with us effortlessly, handling everything from onboarding to performance reviews without missing a beat.",
			stats: { metric: '40x', label: 'Team Growth' },
			companySize: '2,000+ employees',
			industry: 'SaaS'
		},
		{
			name: 'Yuki Tanaka',
			role: 'Global HR Director',
			company: 'Innovate Asia Pacific',
			avatar: 'https://i.pravatar.cc/150?img=26',
			content: "The AI-powered talent matching is incredibly accurate. We've seen a 35% improvement in new hire retention and our recruiters can focus on relationship building instead of resume screening.",
			stats: { metric: '35%', label: 'Better Retention' },
			companySize: '8,000+ employees',
			industry: 'Manufacturing'
		}
	];

	function nextSlide() {
		activeIndex = (activeIndex + 1) % testimonials.length;
	}

	function prevSlide() {
		activeIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
	}

	function goToSlide(index) {
		activeIndex = index;
		isAutoPlaying = false;
		setTimeout(() => isAutoPlaying = true, 10000);
	}

	onMount(() => {
		// Auto-advance
		const interval = setInterval(() => {
			if (isAutoPlaying) nextSlide();
		}, 6000);

		// Entrance animation
		gsap.fromTo('.testimonial-section', 
			{ opacity: 0 },
			{ 
				opacity: 1, 
				duration: 1,
				scrollTrigger: {
					trigger: '.testimonial-section',
					start: 'top 80%'
				}
			}
		);

		return () => clearInterval(interval);
	});
</script>

<section bind:this={sectionEl} class="testimonial-section relative py-32 px-6 md:px-12 overflow-hidden">
	<!-- Background -->
	<div class="absolute inset-0 bg-gradient-to-b from-[#080c15] via-[#0a1020] to-[#080c15]"></div>
	
	<!-- Ambient glow -->
	<div class="absolute inset-0 pointer-events-none">
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-violet-600/10 rounded-full blur-[200px]"></div>
	</div>

	<!-- Decorative quotes -->
	<div class="absolute top-20 left-10 opacity-[0.03]">
		<Quote size={200} class="text-white" />
	</div>
	<div class="absolute bottom-20 right-10 opacity-[0.03] rotate-180">
		<Quote size={200} class="text-white" />
	</div>

	<div class="max-w-7xl mx-auto relative z-10">
		<!-- Header -->
		<div class="text-center mb-16">
			<div class="inline-flex items-center gap-2 px-6 py-3 bg-violet-500/20 border border-violet-500/20 rounded-full text-sm font-semibold text-violet-300 mb-8">
				<Star size={16} class="fill-violet-400 text-violet-400" />
				<span>Customer Success Stories</span>
			</div>
			
			<h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display leading-tight mb-6">
				Loved by <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">HR leaders</span>
				<br />worldwide
			</h2>
		</div>

		<!-- Testimonial Carousel -->
		<div class="relative max-w-5xl mx-auto">
			<!-- Main card -->
			<div class="relative min-h-[500px]">
				{#each testimonials as testimonial, i}
					<div 
						class="absolute inset-0 transition-all duration-700 ease-out"
						style="
							opacity: {activeIndex === i ? 1 : 0};
							transform: translateX({(i - activeIndex) * 100}%) scale({activeIndex === i ? 1 : 0.9});
							pointer-events: {activeIndex === i ? 'auto' : 'none'};
						"
					>
						<div class="relative h-full">
							<!-- Card glow -->
							<div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-500/30 via-fuchsia-500/30 to-pink-500/30 blur-2xl opacity-50"></div>
							
							<!-- Card content -->
							<div class="relative h-full p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-white/[0.1] backdrop-blur-2xl overflow-hidden">
								<!-- Gradient mesh background -->
								<div class="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-fuchsia-500/5"></div>
								
								<!-- Grid pattern -->
								<div class="absolute inset-0 opacity-[0.02]" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 1px); background-size: 24px 24px;"></div>

								<div class="relative grid md:grid-cols-3 gap-8 h-full">
									<!-- Left: Quote & Content -->
									<div class="md:col-span-2 flex flex-col">
										<!-- Stars -->
										<div class="flex gap-1 mb-6">
											{#each Array(5) as _}
												<Star size={20} class="fill-amber-400 text-amber-400" />
											{/each}
										</div>

										<!-- Quote -->
										<blockquote class="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 flex-grow">
											"{testimonial.content}"
										</blockquote>

										<!-- Author -->
										<div class="flex items-center gap-4">
											<div class="relative">
												<div class="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 blur-sm opacity-60"></div>
												<img 
													src={testimonial.avatar} 
													alt={testimonial.name}
													class="relative w-16 h-16 rounded-full object-cover ring-2 ring-white/20"
												/>
											</div>
											<div>
												<div class="text-lg font-bold text-white">{testimonial.name}</div>
												<div class="text-sm text-white/50">{testimonial.role}</div>
												<div class="text-sm text-violet-400 font-medium">{testimonial.company}</div>
											</div>
										</div>
									</div>

									<!-- Right: Stats & Company Info -->
									<div class="flex flex-col justify-between">
										<!-- Impact stat -->
										<div class="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-white/10">
											<div class="text-4xl md:text-5xl font-black bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
												{testimonial.stats.metric}
											</div>
											<div class="text-sm font-semibold text-white/70 uppercase tracking-wider">
												{testimonial.stats.label}
											</div>
										</div>

										<!-- Company info -->
										<div class="space-y-4 mt-6">
											<div class="flex items-center gap-3 text-sm text-white/50">
												<Building2 size={16} class="text-violet-400" />
												<span>{testimonial.industry}</span>
											</div>
											<div class="flex items-center gap-3 text-sm text-white/50">
												<Users size={16} class="text-violet-400" />
												<span>{testimonial.companySize}</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- Navigation -->
			<div class="flex items-center justify-center gap-6 mt-10">
				<!-- Prev button -->
				<button 
					onclick={prevSlide}
					class="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
					aria-label="Previous testimonial"
				>
					<ChevronLeft size={20} />
				</button>

				<!-- Dots -->
				<div class="flex gap-3">
					{#each testimonials as _, i}
						<button
							onclick={() => goToSlide(i)}
							class="group relative"
							aria-label="Go to testimonial {i + 1}"
						>
							<div class="w-12 h-1.5 rounded-full bg-white/10 overflow-hidden">
								<div 
									class="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500"
									style="width: {activeIndex === i ? '100%' : '0%'}"
								></div>
							</div>
						</button>
					{/each}
				</div>

				<!-- Next button -->
				<button 
					onclick={nextSlide}
					class="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
					aria-label="Next testimonial"
				>
					<ChevronRight size={20} />
				</button>
			</div>
		</div>

		<!-- Trust badges -->
		<div class="mt-20 pt-12 border-t border-white/[0.06]">
			<p class="text-center text-sm text-white/40 mb-8">Trusted by leading organizations worldwide</p>
			<div class="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40">
				{#each ['TechCorp', 'FinanceFirst', 'HealthCare United', 'ScaleUp', 'InnovateTech', 'GlobalOps'] as brand}
					<span class="text-xl font-bold text-white/60">{brand}</span>
				{/each}
			</div>
		</div>
	</div>
</section>
