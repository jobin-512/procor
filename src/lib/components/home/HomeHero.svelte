<script>
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Play from '@lucide/svelte/icons/play';
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import Globe from '@lucide/svelte/icons/globe';
	import Users from '@lucide/svelte/icons/users';
	import Shield from '@lucide/svelte/icons/shield';
	import Zap from '@lucide/svelte/icons/zap';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';

	let typedText = $state('');
	let currentWordIndex = $state(0);
	let isDeleting = $state(false);

	const rotatingWords = ['Human Capital', 'Workforce', 'People Operations', 'HR'];
	const pillars = [
		{ label: 'Global Reach', icon: Globe },
		{ label: 'People First', icon: Users },
		{ label: 'Secure by Design', icon: Shield },
		{ label: 'Automated', icon: Zap }
	];

	$effect(() => {
		const word = rotatingWords[currentWordIndex];
		let timeout;
		if (!isDeleting && typedText.length < word.length) {
			timeout = setTimeout(() => (typedText = word.slice(0, typedText.length + 1)), 90);
		} else if (!isDeleting && typedText.length === word.length) {
			timeout = setTimeout(() => (isDeleting = true), 1900);
		} else if (isDeleting && typedText.length > 0) {
			timeout = setTimeout(() => (typedText = word.slice(0, typedText.length - 1)), 45);
		} else if (isDeleting && typedText.length === 0) {
			isDeleting = false;
			currentWordIndex = (currentWordIndex + 1) % rotatingWords.length;
		}
		return () => clearTimeout(timeout);
	});
</script>

<section class="relative overflow-hidden px-6 pb-24 pt-32 md:pb-32 md:pt-44">
	<!-- Soft theme-aware ambience -->
	<div class="pointer-events-none absolute inset-0 -z-10">
		<div class="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_55%_100%_at_50%_0%,rgba(37,59,218,0.16),transparent_70%)]"></div>
		<div class="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px] animate-aurora"></div>
		<div class="absolute inset-0 opacity-[0.025] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" style="background-image: linear-gradient(rgba(37,59,218,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(37,59,218,0.6) 1px, transparent 1px); background-size: 56px 56px;"></div>
	</div>

	<div class="mx-auto max-w-4xl text-center" data-reveal>
		<div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/70 backdrop-blur">
			<span class="relative flex h-2 w-2">
				<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
				<span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
			</span>
			Next-Generation HR Platform
		</div>

		<h1 class="mt-8 text-4xl font-black leading-[1.04] tracking-tight text-white font-display sm:text-5xl md:text-7xl">
			The future of
			<span class="mt-1 block bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
				{typedText}<span class="animate-blink text-blue-400">|</span>
			</span>
		</h1>

		<p class="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/60">
			PROCOR brings your people, performance, and processes together in one calm, intelligent workspace — built for teams of every size, everywhere they work.
		</p>

		<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
			<a href="/demo" class="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/30">
				Start Free Trial
				<ArrowRight size={18} class="transition group-hover:translate-x-0.5" />
			</a>
			<a href="/contact" class="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-7 py-3.5 font-semibold text-white/90 transition hover:-translate-y-0.5 hover:bg-white/[0.07]">
				<Play size={16} /> Talk to Sales
			</a>
		</div>

		<div class="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
			{#each pillars as p}
				<div class="flex items-center gap-2 text-sm text-white/50">
					<svelte:component this={p.icon} size={16} class="text-blue-400" />
					{p.label}
				</div>
			{/each}
		</div>
	</div>

	<div class="mt-20 flex justify-center">
		<a href="#principles" class="flex flex-col items-center gap-2 text-white/30 transition hover:text-white/60">
			<span class="text-[10px] font-semibold uppercase tracking-[0.3em]">Explore</span>
			<ChevronDown size={18} class="animate-bounce" />
		</a>
	</div>
</section>

<style>
	@keyframes blink {
		0%, 50% { opacity: 1; }
		51%, 100% { opacity: 0; }
	}
	.animate-blink {
		animation: blink 1s steps(1) infinite;
	}

	@keyframes aurora {
		0%, 100% { transform: translate(-50%, 0) scale(1); opacity: 0.8; }
		50% { transform: translate(-50%, 18px) scale(1.08); opacity: 1; }
	}
	.animate-aurora {
		animation: aurora 9s ease-in-out infinite;
	}
</style>
