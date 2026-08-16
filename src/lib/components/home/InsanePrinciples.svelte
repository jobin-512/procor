<script>
	import Brain from '@lucide/svelte/icons/brain';
	import Globe from '@lucide/svelte/icons/globe';
	import ShieldCheck from '@lucide/svelte/icons/shield-check';
	import Zap from '@lucide/svelte/icons/zap';
	import Users from '@lucide/svelte/icons/users';
	import Sparkles from '@lucide/svelte/icons/sparkles';

	const principles = [
		{
			icon: Brain,
			title: 'Built on Intelligence',
			desc: 'Adaptive models learn how your organization actually operates and surface what matters.',
			gradient: 'from-sky-500 to-cyan-500'
		},
		{
			icon: Globe,
			title: 'Global by Design',
			desc: 'Compliance, currency, and language handled for teams spread across the world.',
			gradient: 'from-blue-500 to-blue-600'
		},
		{
			icon: ShieldCheck,
			title: 'Secure at the Core',
			desc: 'Certified, encrypted, and audited — protection is part of the foundation, not an add-on.',
			gradient: 'from-emerald-500 to-green-500'
		},
		{
			icon: Zap,
			title: 'Fast Where It Counts',
			desc: 'Automation removes busywork so your people spend time on the work that matters.',
			gradient: 'from-amber-500 to-orange-500'
		},
		{
			icon: Users,
			title: 'People First',
			desc: 'Every screen is designed around the human experience, not the org chart.',
			gradient: 'from-rose-500 to-pink-500'
		},
		{
			icon: Sparkles,
			title: 'Always Improving',
			desc: 'Continuous recommendations keep your workspace evolving alongside your company.',
			gradient: 'from-indigo-500 to-blue-500'
		}
	];
</script>

<section id="principles" class="px-6 py-24 md:px-12 md:py-32" data-reveal>
	<div class="mx-auto max-w-7xl">
		<div class="mb-16 text-center">
			<h2 class="text-4xl font-black leading-tight text-fg font-display sm:text-5xl md:text-6xl">
				<span class="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
					Why teams choose PROCOR
				</span>
			</h2>
			<p class="mx-auto mt-5 max-w-2xl text-lg text-fg/50">
				Principles we refuse to compromise on — no vanity metrics, just the substance behind the platform.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each principles as principle}
				<div class="group rounded-3xl border border-line bg-surface-2 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-line hover:bg-surface-2">
					<div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br {principle.gradient} shadow-lg transition group-hover:scale-110">
						<svelte:component this={principle.icon} size={26} class="text-fg" />
					</div>
					<h3 class="mb-3 text-xl font-bold text-fg">{principle.title}</h3>
					<p class="text-sm leading-relaxed text-fg/50">{principle.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
