<script>
	import GlowCard from '$lib/components/ui/GlowCard.svelte';
	import SectionBadge from '$lib/components/ui/SectionBadge.svelte';
	import FloatingOrb from '$lib/components/ui/FloatingOrb.svelte';
	import ParticleField from '$lib/components/ui/ParticleField.svelte';

	const integrations = [
		{ name: 'Slack', color: '#E01E5A', description: 'Team notifications & approvals', icon: 'S' },
		{ name: 'Microsoft 365', color: '#0078D4', description: 'SSO, email & calendar sync', icon: 'M' },
		{ name: 'Google Workspace', color: '#4285F4', description: 'Identity & productivity suite', icon: 'G' },
		{ name: 'Salesforce', color: '#00A1E0', description: 'CRM & sales team onboarding', icon: 'S' },
		{ name: 'QuickBooks', color: '#2CA01C', description: 'Accounting & financial sync', icon: 'Q' },
		{ name: 'Zoom', color: '#2D8CFF', description: 'Interview & meeting integration', icon: 'Z' },
		{ name: 'Jira', color: '#0052CC', description: 'Project & task management', icon: 'J' },
		{ name: 'Workday', color: '#005CB9', description: 'Enterprise HRIS migration', icon: 'W' }
	];
</script>

<section class="relative py-20 md:py-32 bg-[var(--surface-base)] overflow-hidden">
	<FloatingOrb color="rgba(117, 194, 246, 0.12)" size="35rem" className="-top-32 right-0" />
	<FloatingOrb color="rgba(16, 185, 129, 0.1)" size="25rem" className="bottom-20 -left-32" speed={30} />
	<ParticleField count={30} color="rgba(117, 194, 246, 0.3)" className="pointer-events-none" />

	<div class="max-w-7xl mx-auto px-6 relative z-10">
		<div class="text-center mb-14" data-reveal>
			<SectionBadge variant="sky">Integrations</SectionBadge>
			<h2 class="mt-6 text-3xl md:text-4xl lg:text-5xl font-black text-[var(--text-dark)] font-display">
				Works With Your Stack
			</h2>
			<p class="mt-4 text-[var(--text-dark-muted)] max-w-xl mx-auto text-base md:text-lg">
				Seamless integrations with the tools your team already loves.
			</p>
		</div>

<div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
			{#each integrations as integ}
				<div class="integration-card group" data-reveal>
					<GlowCard glowColor="{integ.color}40" glowSize={180} className="h-full">
						<div class="flex flex-col items-center text-center gap-4 py-2 h-full">
							<div
								class="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
								style="background: {integ.color}25; color: {integ.color};"
							>
								{integ.icon}
							</div>
							<div>
								<h4 class="text-sm font-bold text-[var(--text-dark)]">{integ.name}</h4>
								<p class="text-xs text-[var(--text-dark-muted)] mt-1 leading-relaxed">{integ.description}</p>
							</div>
						</div>
					</GlowCard>
				</div>
			{/each}
		</div>

		<div class="text-center mt-10" data-reveal>
			<p class="text-sm text-[var(--text-dark-muted)]">
				+ 50 more integrations available.
				<a href="/integrations" class="text-procor-blue font-semibold hover:underline">View all →</a>
			</p>
		</div>
	</div>
</section>
