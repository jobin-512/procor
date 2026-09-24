<script>
	import { CONFIG } from '$lib/content/site.js';
	import SuccessPopup from '$lib/components/SuccessPopup.svelte';

	/* Shared lead form — same UX contract as the static site:
	   validation first, honeypot + fill-seconds anti-spam,
	   SvelteKit SMTP API kept, mailto/phone fallback so a lead is never lost. */
	let { endpoint = '/api/demo', variant = 'demo', idPrefix = 'lead' } = $props();

	let formEl = $state(null);
	let openedAt = $state(0);
	let status = $state('idle'); // idle | sending | success | error
	let message = $state('');
	let showSuccess = $state(false);
	let successEmail = $state('');
	const defaultMessage = $derived(
		variant === 'demo'
			? 'A 30-minute walkthrough on your structure and policies. We reply within one business day.'
			: 'We reply within one business day.'
	);

	$effect(() => {
		openedAt = Date.now();
	});
	$effect(() => {
		if (status === 'idle') message = defaultMessage;
	});

	const msgId = $derived(variant === 'demo' ? 'demo-msg' : 'contact-msg');
	const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test((v || '').trim());

	async function handleSubmit(e) {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(formEl).entries());

		if (!emailOk(data.email)) {
			status = 'error';
			message = 'Enter a work email address, like name@company.com.';
			formEl.querySelector('[type=email]')?.focus();
			return;
		}
		const missing = [...formEl.querySelectorAll('[required]')].find((f) => !f.value.trim());
		if (missing) {
			status = 'error';
			message = 'Please complete the required fields.';
			missing.focus();
			return;
		}
		if (data.website) {
			status = 'success';
			message = 'Thanks. We will be in touch within one business day.';
			successEmail = (data.email || '').trim();
			showSuccess = true;
			formEl.reset();
			return;
		}
		delete data.website;

		const payload = {
			...data,
			page: typeof document !== 'undefined' ? document.title : '',
			fillSeconds: Math.round((Date.now() - openedAt) / 1000),
			submittedAt: new Date().toISOString()
		};

		status = 'sending';
		message = 'Sending your request...';
		try {
			const res = await fetch(endpoint, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify(payload)
			});
			const result = await res.json().catch(() => ({}));
			if (!res.ok || result.success === false) throw new Error(result.error || 'bad-status');
			status = 'success';
			message = `Thanks. We have your request and will write to ${(data.email || '').trim()} within one business day.`;
			successEmail = (data.email || '').trim();
			showSuccess = true;
			formEl.reset();
		} catch {
			const body = Object.entries(payload)
				.map(([k, v]) => `${k}: ${v}`)
				.join('\n');
			const mailto = `mailto:${CONFIG.salesEmail}?subject=${encodeURIComponent(
				'Demo request from ' + (data.company || 'the website')
			)}&body=${encodeURIComponent(body)}`;
			status = 'error';
			formEl.dataset.mailto = mailto;
			message = '';
		}
	}
</script>

<form bind:this={formEl} onsubmit={handleSubmit} class="grid gap-2.5 sm:grid-cols-2" novalidate>
	<div class="absolute -left-[9999px] top-0" aria-hidden="true">
		<label for="{idPrefix}-website">Leave this empty</label>
		<input id="{idPrefix}-website" name="website" type="text" tabindex="-1" autocomplete="off" />
	</div>

	{#if variant === 'contact'}
		<div>
			<label for="{idPrefix}-name" class="sr-only">Full name</label>
			<input
				id="{idPrefix}-name"
				name="name"
				type="text"
				autocomplete="name"
				required
				placeholder="Full name"
				class="field"
			/>
		</div>
	{/if}
	<div>
		<label for="{idPrefix}-email" class="sr-only">Work email</label>
		<input
			id="{idPrefix}-email"
			name="email"
			type="email"
			inputmode="email"
			autocomplete="email"
			required
			placeholder="Work email"
			class="field"
		/>
	</div>
	<div>
		<label for="{idPrefix}-company" class="sr-only">Company</label>
		<input
			id="{idPrefix}-company"
			name="company"
			type="text"
			autocomplete="organization"
			required
			placeholder="Company"
			class="field"
		/>
	</div>
	{#if variant === 'contact'}
		<div>
			<label for="{idPrefix}-phone" class="sr-only">Phone</label>
			<input
				id="{idPrefix}-phone"
				name="phone"
				type="tel"
				autocomplete="tel"
				placeholder="Phone (optional)"
				class="field"
			/>
		</div>
	{/if}
	<div class={variant === 'contact' ? '' : 'sm:col-span-1'}>
		<label for="{idPrefix}-headcount" class="sr-only">Headcount</label>
		<select id="{idPrefix}-headcount" name="headcount" required class="field">
			<option value="">Headcount</option>
			<option>Under 100</option>
			<option>100 to 500</option>
			<option>500 to 2,000</option>
			<option>Over 2,000</option>
		</select>
	</div>
	{#if variant === 'contact'}
		<div>
			<label for="{idPrefix}-entities" class="sr-only">Legal entities</label>
			<select id="{idPrefix}-entities" name="entities" class="field">
				<option value="">Legal entities</option>
				<option>One</option>
				<option>2 to 5</option>
				<option>More than 5</option>
			</select>
		</div>
		<div class="sm:col-span-2">
			<label for="{idPrefix}-current" class="sr-only">What you use today</label>
			<input
				id="{idPrefix}-current"
				name="current"
				type="text"
				placeholder="What you use today (optional)"
				class="field"
			/>
		</div>
		<div class="sm:col-span-2">
			<label for="{idPrefix}-message" class="sr-only">Message</label>
			<textarea
				id="{idPrefix}-message"
				name="message"
				rows="4"
				placeholder="What would you like to see?"
				class="field h-auto py-3.5"
			></textarea>
		</div>
	{/if}
	<div class={variant === 'contact' ? 'sm:col-span-2' : ''}>
		<button
			type="submit"
			disabled={status === 'sending'}
			class="cta-primary group inline-flex h-[52px] w-full items-center justify-center px-6 text-[15px]"
		>
			<span class="cta-glow" aria-hidden="true"></span>
			<span class="relative"
				>{status === 'sending'
					? 'Sending…'
					: variant === 'contact'
						? 'Send request'
						: 'Book a demo'}</span
			>
		</button>
	</div>
	<p
		id={msgId}
		data-state={status}
		class="mt-1 min-h-[20px] text-[13px] text-slate-500"
		aria-live="polite"
	>
		{#if status === 'error' && formEl?.dataset.mailto}
			We could not send that automatically. Please
			<a class="font-semibold underline underline-offset-4" href={formEl.dataset.mailto}>
				email it to {CONFIG.salesEmail}
			</a>
			or call {CONFIG.phone} and we will pick it up.
		{:else}
			{message || defaultMessage}
		{/if}
	</p>
</form>

<SuccessPopup open={showSuccess} email={successEmail} onClose={() => (showSuccess = false)} />
