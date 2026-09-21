<script>
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';
	import SiteIcon from '$lib/components/SiteIcon.svelte';
	import { GROUPS } from '$lib/content/site.js';
	import { MODULES as MODULE_DATA } from '$lib/content/modules.js';

	let { isMenuOpen = $bindable(false) } = $props();
	let megaOpen = $state(false);
	let closeTimer = $state(null);
	let canHover = $state(false);

	const groupMeta = {
		'Workforce Core': 'Records, time and equipment',
		'Talent & Growth': 'From requisition to review',
		'Finance & Operations': 'Pay, claims, exits and service'
	};

	const groupBlurb = {
		'core-hr': 'Employee records and org structure',
		attendance: 'Shifts, clock-ins and overtime',
		leave: 'Policies, balances and approvals',
		assets: 'Issue, track and recover equipment',
		recruitment: 'Requisitions and candidate pipeline',
		onboarding: 'From signed offer to day one',
		performance: 'Goals and review cycles',
		payroll: 'Compliant pay runs and payslips',
		reimbursement: 'Claims, approvals and payouts',
		offboarding: 'Clearance and full-and-final',
		helpdesk: 'Employee queries and FAQ'
	};

	function openMega() {
		if (closeTimer) clearTimeout(closeTimer);
		megaOpen = true;
	}
	function scheduleClose() {
		if (closeTimer) clearTimeout(closeTimer);
		closeTimer = setTimeout(() => (megaOpen = false), 180);
	}
	function toggleMega() {
		if (!canHover) megaOpen = !megaOpen;
		else megaOpen = true;
	}

	onMount(() => {
		canHover =
			typeof window !== 'undefined' &&
			!!window.matchMedia &&
			window.matchMedia('(hover: hover) and (pointer: fine)').matches;
		const navbar = document.getElementById('navbar');
		const onScroll = () => navbar?.classList.toggle('is-scrolled', window.scrollY > 12);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });

		const onKey = (e) => {
			if (e.key !== 'Escape') return;
			if (megaOpen) megaOpen = false;
			if (isMenuOpen) isMenuOpen = false;
		};
		const onClick = (e) => {
			const item = document.getElementById('modules-item');
			const mega = document.getElementById('mega-menu');
			if (megaOpen && item && mega && !item.contains(e.target) && !mega.contains(e.target))
				megaOpen = false;
			const menu = document.getElementById('mobile-menu');
			const toggle = document.getElementById('mobile-toggle');
			if (
				isMenuOpen &&
				menu &&
				toggle &&
				!menu.contains(e.target) &&
				!toggle.contains(e.target)
			)
				isMenuOpen = false;
		};
		document.addEventListener('keydown', onKey);
		document.addEventListener('click', onClick);
		return () => {
			window.removeEventListener('scroll', onScroll);
			document.removeEventListener('keydown', onKey);
			document.removeEventListener('click', onClick);
			if (closeTimer) clearTimeout(closeTimer);
		};
	});
</script>

<header class="fixed inset-x-0 top-4 z-50 px-4 sm:top-5">
	<div class="relative mx-auto max-w-6xl">
		<nav
			id="navbar"
			aria-label="Primary"
			class="flex h-14 items-center justify-between rounded-full border border-slate-200/60 bg-white/70 pl-4 pr-2 shadow-[0_8px_32px_-12px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-[background-color,box-shadow] duration-300 sm:pl-5"
		>
			<a
				href="/"
				class="flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40"
				aria-label="Procor HRMS home"
			>
				<img
					src="/assets/logo-mark.webp"
					alt="Procor HRMS"
					width="34"
					height="36"
					class="h-9 w-auto dark:hidden"
				/>
				<img
					src="/assets/logo-mark-dark.webp"
					alt=""
					aria-hidden="true"
					width="34"
					height="36"
					class="hidden h-9 w-auto dark:block"
				/>
				<span class="font-display text-[19px] leading-none tracking-[-0.035em]">
					<span class="font-extrabold text-[#012B61] dark:text-white">PROCOR</span><span
						class="ml-1.5 font-semibold text-[#0063D7] dark:text-[#7AB0F8]">HRMS</span
					>
				</span>
			</a>

			<ul class="hidden items-center gap-0.5 lg:flex">
				<li id="modules-item" onmouseenter={openMega} onmouseleave={scheduleClose}>
					<button
						type="button"
						aria-expanded={megaOpen}
						aria-controls="mega-menu"
						onclick={toggleMega}
						class="nav-link [&[aria-expanded=true]]:bg-slate-900/[0.04] [&[aria-expanded=true]]:text-ink [&[aria-expanded=true]_svg]:rotate-180"
					>
						Modules
						<SiteIcon name="chevron-down" size={14} class="transition-transform duration-300" />
					</button>
				</li>
				<li><a href="/platform/" class="nav-link">Platform</a></li>
				<li><a href="/security/" class="nav-link">Security</a></li>
				<li><a href="/company/" class="nav-link">Company</a></li>
			</ul>

			<div class="flex items-center gap-1.5">
				<button
					type="button"
					onclick={() => theme.toggle()}
					class="grid h-10 w-10 place-items-center rounded-full text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-900/5 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40"
					aria-label={$theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
					title="Switch theme"
				>
					{#if $theme === 'dark'}
						<SiteIcon name="sun" size={18} />
					{:else}
						<SiteIcon name="moon" size={18} />
					{/if}
				</button>
				<a href="/contact/" class="cta-primary group hidden h-10 px-5 text-[14px] sm:inline-flex">
					<span class="cta-glow" aria-hidden="true"></span>
					<span class="relative">Book a demo</span>
				</a>
				<button
					id="mobile-toggle"
					type="button"
					aria-expanded={isMenuOpen}
					aria-controls="mobile-menu"
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					onclick={() => (isMenuOpen = !isMenuOpen)}
					class="grid h-10 w-10 place-items-center rounded-full text-ink transition-colors hover:bg-slate-900/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40 lg:hidden"
				>
					<SiteIcon name={isMenuOpen ? 'x' : 'menu'} size={20} />
				</button>
			</div>
		</nav>

		<!-- Mega menu (desktop) -->
		<div
			id="mega-menu"
			class="menu-panel absolute inset-x-0 top-full mt-3 hidden lg:block {megaOpen
				? 'is-open'
				: ''}"
			role="region"
			aria-label="Modules"
			onmouseenter={openMega}
			onmouseleave={scheduleClose}
		>
			<div
				class="overflow-hidden rounded-[28px] border border-slate-200/60 bg-white/90 shadow-[0_40px_90px_-24px_rgba(15,23,42,0.28),0_20px_50px_rgba(8,112,184,0.06)] backdrop-blur-xl"
			>
				<div class="grid grid-cols-[1fr_1fr_1fr_290px]">
					{#each GROUPS as [label, keys], gi}
						<div class="p-7 {gi ? 'border-l border-slate-100' : ''}">
							<p class="text-[13px] font-semibold text-ink">{label}</p>
							<p class="mt-1 text-[12px] text-slate-400">{groupMeta[label]}</p>
							<ul class="mt-5 space-y-1">
								{#each keys as k}
									<li>
										<a
											href="/modules/{k}/"
											class="mega-link"
											style="--c: {MODULE_DATA[k].c}"
											onclick={() => (megaOpen = false)}
										>
											<span class="mega-icon"><SiteIcon name={MODULE_DATA[k].icon} size={18} /></span
											>
											<span
												><span class="block text-[14px] font-semibold text-ink"
													>{MODULE_DATA[k].t}</span
												><span class="block text-[12px] text-slate-500">{groupBlurb[k]}</span
												></span
											>
										</a>
									</li>
								{/each}
							</ul>
						</div>
					{/each}

					<div class="relative overflow-hidden border-l border-slate-100 bg-slate-50/80 p-7">
						<div
							aria-hidden="true"
							class="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(0,99,215,0.24),transparent_65%)] blur-xl"
						></div>
						<div
							aria-hidden="true"
							class="absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(62,142,240,0.18),transparent_65%)] blur-xl"
						></div>
						<div class="relative flex h-full flex-col">
							<p
								class="font-display text-[22px] font-semibold leading-[1.15] tracking-[-0.03em] text-ink"
							>
								See all eleven modules on your own data model.
							</p>
							<p class="mt-3 text-[13px] leading-relaxed text-slate-500">
								A guided walkthrough configured around your entities, policies and pay cycle.
							</p>
							<ul class="mt-5 space-y-2.5 text-[12.5px] text-slate-600">
								<li class="flex items-center gap-2">
									<SiteIcon name="users-round" size={16} class="text-indigo-600" />10,000+ users in
									India
								</li>
								<li class="flex items-center gap-2">
									<SiteIcon name="cloud" size={16} class="text-cyan-600" />Cloud-based, fully
									configurable
								</li>
							</ul>
							<a
								href="/contact/"
								onclick={() => (megaOpen = false)}
								class="mt-auto inline-flex pt-6 text-[13px] font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
								>Book a demo</a
							>
						</div>
					</div>
				</div>

				<div
					class="flex items-center justify-between border-t border-slate-100 px-7 py-3.5 text-[12.5px]"
				>
					<span class="text-slate-500">Eleven modules sharing one employee record</span>
					<a
						href="/#modules"
						onclick={() => (megaOpen = false)}
						class="font-semibold text-ink transition-colors hover:text-indigo-600"
						>View the capability matrix</a
					>
				</div>
			</div>
		</div>

		<!-- Mobile menu -->
		<div
			id="mobile-menu"
			class="menu-panel absolute inset-x-0 top-full mt-3 lg:hidden {isMenuOpen
				? 'is-open'
				: ''}"
		>
			<div
				class="max-h-[calc(100vh-7rem)] overflow-y-auto rounded-[28px] border border-slate-200/60 bg-white/95 p-5 shadow-[0_40px_90px_-24px_rgba(15,23,42,0.28)] backdrop-blur-xl"
			>
				<div class="space-y-6">
					{#each GROUPS as [label, keys]}
						<div>
							<p class="text-[12px] font-semibold text-slate-400">{label}</p>
							<div class="mt-2 grid grid-cols-2 gap-1">
								{#each keys as k}
									<a
										href="/modules/{k}/"
										class="mega-link mx-0"
										style="--c: {MODULE_DATA[k].c}"
										onclick={() => (isMenuOpen = false)}
										><span class="mega-icon"
											><SiteIcon name={MODULE_DATA[k].icon} size={18} /></span
										><span class="self-center text-[14px] font-semibold">{MODULE_DATA[k].t}</span
										></a
									>
								{/each}
							</div>
						</div>
					{/each}
					<div
						class="flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-100 pt-5 text-[14px] font-medium text-slate-600"
					>
						<a href="/security/" onclick={() => (isMenuOpen = false)} class="hover:text-ink"
							>Security</a
						>
						<a href="/company/" onclick={() => (isMenuOpen = false)} class="hover:text-ink"
							>Company</a
						>
					</div>
					<a
						href="/contact/"
						onclick={() => (isMenuOpen = false)}
						class="cta-primary group flex h-12 w-full text-[15px]"
					>
						<span class="cta-glow" aria-hidden="true"></span>
						<span class="relative">Book a demo</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</header>
