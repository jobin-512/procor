<script>
	import SiteIcon from '$lib/components/SiteIcon.svelte';
	import { CONFIG } from '$lib/content/site.js';

	const tel = CONFIG.phone.replace(/\s/g, '');
</script>

<footer id="demo" class="scroll-mt-24 border-t border-slate-200/60 bg-white/80 backdrop-blur-xl">
	<div class="mx-auto max-w-[1320px] px-6 lg:px-10">
		<div
			class="flex flex-col gap-10 border-b border-slate-200/60 py-20 md:flex-row md:items-end md:justify-between"
		>
			<p
				class="max-w-2xl font-display text-[clamp(2rem,3.8vw,3.1rem)] leading-[1.05] tracking-[-0.04em] text-ink"
			>
				<span class="font-extralight">See it running on</span>
				<span class="font-bold">your own policies.</span>
			</p>
			<a href="/contact/" class="cta-primary group inline-flex h-12 shrink-0 self-start px-7 text-[15px] md:self-auto">
				<span class="cta-glow" aria-hidden="true"></span>
				<span class="relative">Book a demo</span>
			</a>
		</div>

		<div class="grid gap-12 py-20 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
			<div class="max-w-sm">
				<a href="/" class="inline-flex" aria-label="Procor HRMS home">
					<img
						src="/assets/logo-full.webp"
						alt="Procor HRMS — Empowering Human Resource for Organizational Growth"
						width="86"
						height="84"
						class="h-[84px] w-auto dark:hidden"
						loading="lazy"
					/>
					<img
						src="/assets/logo-full-dark.webp"
						alt=""
						aria-hidden="true"
						width="86"
						height="84"
						class="hidden h-[84px] w-auto dark:block"
						loading="lazy"
					/>
				</a>
				<p class="mt-6 text-[14px] leading-[1.7] text-slate-500">
					A cloud HR and payroll platform for companies operating across multiple states and
					legal entities in India, built by a team that delivers payroll and statutory compliance
					as a service.
				</p>
				<address class="mt-6 space-y-2 text-[13.5px] not-italic text-slate-500">
					<p class="flex items-start gap-2.5">
						<SiteIcon name="map-pin" size={16} class="mt-0.5 shrink-0 text-slate-400" /><span
							>{CONFIG.address}</span
						>
					</p>
					<p class="flex items-start gap-2.5">
						<SiteIcon name="phone" size={16} class="mt-0.5 shrink-0 text-slate-400" /><a
							href="tel:{tel}"
							class="transition-colors hover:text-ink">{CONFIG.phone}</a
						>
					</p>
					<p class="flex items-start gap-2.5">
						<SiteIcon name="mail" size={16} class="mt-0.5 shrink-0 text-slate-400" /><a
							href="mailto:{CONFIG.salesEmail}"
							class="transition-colors hover:text-ink">{CONFIG.salesEmail}</a
						>
					</p>
				</address>
			</div>

			<div>
				<p class="text-[13px] font-semibold text-ink">Platform</p>
				<ul class="mt-5 space-y-3.5">
					<li><a href="/platform/" class="footer-link">Platform overview</a></li>
					<li><a href="/modules/payroll/" class="footer-link">Payroll</a></li>
					<li><a href="/modules/attendance/" class="footer-link">Attendance</a></li>
					<li><a href="/modules/core-hr/" class="footer-link">Core HR</a></li>
					<li><a href="/#modules" class="footer-link">All eleven modules</a></li>
					<li><a href="/integrations/" class="footer-link">Integrations</a></li>
				</ul>
			</div>

			<div>
				<p class="text-[13px] font-semibold text-ink">Why Procor</p>
				<ul class="mt-5 space-y-3.5">
					<li><a href="/compliance/" class="footer-link">Statutory compliance</a></li>
					<li><a href="/implementation/" class="footer-link">Implementation &amp; migration</a></li>
					<li><a href="/industries/" class="footer-link">Industries</a></li>
					<li><a href="/security/" class="footer-link">Security</a></li>
					<li><a href="/faq/" class="footer-link">FAQ</a></li>
				</ul>
			</div>

			<div>
				<p class="text-[13px] font-semibold text-ink">Company</p>
				<ul class="mt-5 space-y-3.5">
					<li><a href="/company/" class="footer-link">About Procor</a></li>
					<li><a href="/contact/" class="footer-link">Contact sales</a></li>
					<li><a href="/contact/" class="footer-link">Support</a></li>
					<li><a href="/privacy/" class="footer-link">Privacy policy</a></li>
					<li><a href="/terms/" class="footer-link">Terms of service</a></li>
					<li><a href="/cookies/" class="footer-link">Cookie policy</a></li>
				</ul>
			</div>
		</div>

		<div
			class="flex flex-col gap-4 border-t border-slate-200/60 py-8 text-[13px] text-slate-400 sm:flex-row sm:items-center sm:justify-between"
		>
			<p>&copy; {new Date().getFullYear()} {CONFIG.legalEntity}. All rights reserved.</p>
			<div class="flex flex-wrap gap-x-6 gap-y-2">
				<a href="/privacy/" class="transition-colors hover:text-ink">Privacy</a>
				<a href="/terms/" class="transition-colors hover:text-ink">Terms</a>
				<a href="/cookies/" class="transition-colors hover:text-ink">Cookies</a>
				<a href="/contact/" class="transition-colors hover:text-ink">Contact</a>
			</div>
		</div>
	</div>
</footer>
