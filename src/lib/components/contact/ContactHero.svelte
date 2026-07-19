<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { MessageSquare, ArrowRight } from '@lucide/svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';

	let { headlineWords = ["Let's", 'Build', 'Something', 'Great', 'Together'] } = $props();

	let container = $state(null);

	onMount(() => {
		const ctx = gsap.context(() => {
			const heroTl = gsap.timeline({ defaults: { ease: 'expo.out' } });

			heroTl.fromTo('.contact-badge', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
			heroTl.fromTo('.hero-word', { y: 80, opacity: 0, rotateX: -40 }, { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.1, ease: 'expo.out' }, '-=0.4');
			heroTl.fromTo('.hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.7');
			heroTl.fromTo('.hero-cta', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.4)' }, '-=0.5');
		}, container);

		const onMouseMove = (e) => {
			const x = (e.clientX - window.innerWidth / 2) / 50;
			const y = (e.clientY - window.innerHeight / 2) / 50;
			gsap.to('.contact-parallax', { x, y, duration: 1.2, ease: 'power2.out' });
		};
		window.addEventListener('mousemove', onMouseMove);

		return () => {
			ctx.revert();
			window.removeEventListener('mousemove', onMouseMove);
		};
	});
</script>

<section bind:this={container} class="relative min-h-[70vh] md:min-h-[80vh] flex flex-col items-center justify-center pt-28 pb-16 px-6 md:px-12 overflow-hidden">
	<div class="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
		<div class="contact-parallax absolute top-[-15%] right-[-10%] w-[50rem] h-[50rem] bg-sky-600/20 rounded-full blur-[180px]" style="animation: float-orb 20s ease-in-out infinite alternate;"></div>
		<div class="contact-parallax absolute bottom-[-15%] left-[-10%] w-[45rem] h-[45rem] bg-procor-blue/15 rounded-full blur-[180px]" style="animation: float-orb 25s ease-in-out infinite alternate-reverse;"></div>
		<div class="absolute top-[25%] left-[30%] w-[25rem] h-[25rem] bg-procor-blue-light/10 rounded-full blur-[140px]" style="animation: float-orb 18s ease-in-out infinite alternate;"></div>
	</div>

	<div class="absolute inset-0 pointer-events-none z-[2] overflow-hidden">
		<div class="absolute top-[20%] left-[10%] w-24 h-24 border border-white/[0.06] rounded-2xl rotate-45" style="animation: float-orb 15s ease-in-out infinite alternate;"></div>
		<div class="absolute top-[60%] right-[15%] w-16 h-16 border border-sky-400/10 rounded-full" style="animation: float-orb 12s ease-in-out infinite alternate-reverse;"></div>
		<div class="absolute bottom-[25%] left-[20%] w-12 h-12 border border-procor-blue/10 rounded-lg rotate-12" style="animation: float-orb 18s ease-in-out infinite alternate;"></div>
	</div>

	<div class="absolute inset-0 z-[3] pointer-events-none" style="background: radial-gradient(ellipse at center, transparent 0%, var(--surface-dark) 75%);"></div>
	<div class="absolute inset-0 z-[3] pointer-events-none opacity-[0.04] noise-overlay"></div>
	<div class="absolute inset-0 z-[3] pointer-events-none opacity-[0.06] grid-overlay"></div>

	<div class="max-w-5xl mx-auto w-full relative z-10 text-center" style="perspective: 1000px;">
		<div class="contact-badge inline-flex items-center gap-3 px-6 py-2.5 bg-gradient-to-r from-sky-500/20 via-procor-blue/20 to-procor-blue-light/20 border border-white/[0.15] backdrop-blur-xl rounded-full text-[11px] font-extrabold tracking-[0.15em] uppercase mb-12 shadow-[0_0_40px_-10px_rgba(37,59,218,0.3)]">
			<MessageSquare size={14} class="text-sky-300" />
			<span class="text-white">Get in Touch</span>
		</div>

		<h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] font-black text-white leading-[0.88] font-display mb-10 tracking-tight">
			{#each headlineWords as word, i}
				<span
					class="hero-word inline-block {i === 3 || i === 4
						? 'bg-gradient-to-r from-sky-400 via-procor-blue to-procor-blue-light bg-clip-text text-transparent'
						: ''}"
				>{word}</span>
				{i < headlineWords.length - 1 ? ' ' : ''}
			{/each}
		</h1>

		<p class="hero-subtitle text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
			Have a question, want a demo, or just want to say hi? We'd love to hear from you. Our team is ready to help.
		</p>

		<div class="hero-cta">
			<a href="#contact-form" class="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-2xl font-black text-lg transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] shadow-[0_20px_60px_-15px_rgba(56,189,248,0.5)] hover:shadow-sky-500/50 group cursor-pointer">
				Send a Message
				<ArrowRight size={22} class="group-hover:translate-x-1 transition-transform" />
			</a>
		</div>
	</div>
</section>