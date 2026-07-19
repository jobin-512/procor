<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import logo from '$lib/assets/image.webp';

	let { isMenuOpen = $bindable() } = $props();
	let isScrolled = $state(false);

	const navLinks = [
		{ label: 'Features', href: '/features' },
		{ label: 'Solutions', href: '/solutions' },
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' }
	];

	onMount(() => {
		const onScroll = () => {
			isScrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', onScroll, { passive: true });

		gsap.fromTo('.nav-container',
			{ y: -60, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.1 }
		);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<nav
	class="fixed w-full z-50 px-4 sm:px-6 md:px-10 transition-all duration-500
		{isScrolled ? 'py-3 bg-[#080c15]/90 backdrop-blur-2xl border-b border-white/[0.06]' : 'py-5 bg-transparent'}"
>
	<div class="max-w-7xl mx-auto flex justify-between items-center nav-container">
		<!-- Logo -->
		<a href="/" class="flex items-center gap-3 group">
			<div class="relative w-10 h-10 flex items-center justify-center">
				<img src={logo} alt="PROCOR HRMS" class="h-9 w-auto" />
			</div>
			<div class="hidden sm:flex flex-col">
				<span class="text-xl font-extrabold tracking-tight text-white font-display leading-none uppercase group-hover:text-blue-400 transition-colors duration-300">PROCOR</span>
				<span class="text-[9px] font-semibold tracking-[0.3em] text-blue-400 uppercase leading-none mt-0.5">HRMS</span>
			</div>
		</a>

		<!-- Desktop Nav -->
		<div class="hidden md:flex items-center gap-1">
			{#each navLinks as link}
				<a
					href={link.href}
					class="relative px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors duration-300 group"
				>
					{link.label}
					<span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-400 group-hover:w-4/5 transition-all duration-300 rounded-full"></span>
				</a>
			{/each}

			<a
				href="/demo"
				class="ml-6 inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] group"
			>
				Get Started
				<ArrowRight size={15} class="group-hover:translate-x-0.5 transition-transform" />
			</a>
		</div>

		<!-- Mobile Toggle -->
		<button
			class="md:hidden relative w-11 h-11 flex items-center justify-center rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-all duration-300"
			onclick={toggleMenu}
			aria-label="Toggle menu"
		>
			{#if isMenuOpen}
				<X size={20} class="text-white" />
			{:else}
				<Menu size={20} class="text-white/70" />
			{/if}
		</button>
	</div>
</nav>

<!-- Mobile Menu -->
{#if isMenuOpen}
	<div class="fixed inset-0 z-[60] flex flex-col md:hidden bg-[#080c15]/98 backdrop-blur-xl">
		<div class="flex-1 flex flex-col items-center justify-center gap-3 px-6">
			{#each navLinks as link}
<a
				href={link.href}
				class="text-3xl font-bold text-white/80 hover:text-blue-400 transition-colors duration-300 py-3"
				onclick={() => (isMenuOpen = false)}
			>
					{link.label}
				</a>
			{/each}
			<a
				href="/demo"
				class="mt-8 px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl text-lg font-bold shadow-xl"
				onclick={() => (isMenuOpen = false)}
			>
				Get Started
			</a>
		</div>

		<button
			onclick={() => (isMenuOpen = false)}
			class="absolute top-6 right-6 w-11 h-11 flex items-center justify-center bg-white/[0.05] border border-white/[0.1] rounded-xl text-white hover:bg-white/[0.1] transition-all"
			aria-label="Close menu"
		>
			<X size={20} />
		</button>
	</div>
{/if}
