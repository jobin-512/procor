<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { Menu, X, ArrowRight } from '@lucide/svelte';
	import logo from '$lib/assets/image.webp';

	let { isMenuOpen = $bindable() } = $props();
	let isScrolled = $state(false);

	let navEl = $state(null);

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
			{ y: -80, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.8, ease: 'expo.out', delay: 0.1 }
		);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<nav
	bind:this={navEl}
	class="fixed w-full z-50 px-4 sm:px-6 md:px-10 transition-all duration-500
		{isScrolled ? 'py-3 bg-[#080c15]/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-lg shadow-black/20' : 'py-5 bg-transparent'}"
>
	<div class="max-w-7xl mx-auto flex justify-between items-center nav-container relative z-10">
		<!-- Logo -->
		<a href="/" class="flex items-center gap-3 group cursor-pointer">
			<div class="relative w-10 h-10 flex items-center justify-center">
				<img src={logo} alt="PROCOR HRMS" class="h-9 w-auto" />
			</div>
			<div class="hidden sm:flex flex-col">
				<span class="text-xl font-black tracking-tight text-white font-display leading-none uppercase group-hover:text-sky-400 transition-colors duration-300">PROCOR</span>
				<span class="text-[9px] font-bold tracking-[0.35em] text-sky-400 uppercase leading-none mt-0.5">HRMS</span>
			</div>
		</a>

		<!-- Desktop Nav -->
		<div class="hidden md:flex items-center gap-1">
			{#each navLinks as link}
				<a
					href={link.href}
					class="px-4 py-2 text-sm font-semibold text-white/50 hover:text-white rounded-lg hover:bg-white/[0.06] transition-all duration-300"
				>
					{link.label}
				</a>
			{/each}

			<a
				href="/demo"
				class="ml-4 inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-sky-500 to-violet-500 text-white rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20 active:scale-[0.98] group"
			>
				Get Started
				<ArrowRight size={15} class="group-hover:translate-x-0.5 transition-transform" />
			</a>
		</div>

		<!-- Mobile Toggle -->
		<button
			class="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] transition-all duration-300"
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
	<div class="fixed inset-0 z-[60] flex flex-col md:hidden overflow-hidden mobile-menu-backdrop">
		<div class="flex-1 flex flex-col items-center justify-center gap-2 relative z-10">
			{#each navLinks as link, i}
				<a
					href={link.href}
					class="mobile-menu-item text-3xl font-black text-white hover:text-sky-400 transition-all duration-300 cursor-pointer py-3"
					onclick={() => (isMenuOpen = false)}
				>
					{link.label}
				</a>
			{/each}
			<a
				href="/demo"
				class="mobile-menu-item mt-6 px-8 py-4 bg-gradient-to-r from-sky-500 to-violet-500 text-white rounded-2xl text-lg font-black shadow-xl transition-all cursor-pointer"
				onclick={() => (isMenuOpen = false)}
			>
				Get Started
			</a>
		</div>

		<button
			onclick={() => (isMenuOpen = false)}
			class="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/[0.08] border border-white/[0.12] rounded-full text-white hover:bg-white/[0.15] transition-all z-20"
			aria-label="Close menu"
		>
			<X size={20} />
		</button>
	</div>
{/if}

<style>
	.mobile-menu-backdrop {
		background: rgba(8, 12, 21, 0.98);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
	}
</style>
