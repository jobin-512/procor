<script>
	import LegalLayout from '$lib/components/legal/LegalLayout.svelte';
</script>

<LegalLayout title="Service Level Agreement" updated="August 14, 2026">
	<p>
		This Service Level Agreement ("SLA") describes the availability and support commitments PROCOR provides
		for the HRMS platform (the "Services").
	</p>

	<h2>Availability</h2>
	<p>
		We target <strong>99.9% monthly uptime</strong> for the core Services, measured across all minutes in a
		calendar month. Scheduled maintenance performed during off-peak windows is excluded from downtime
		calculations.
	</p>

	<h2>Support Response Times</h2>
	<ul>
		<li><strong>Critical:</strong> response within 1 hour, 24/7.</li>
		<li><strong>High:</strong> response within 4 business hours.</li>
		<li><strong>Normal:</strong> response within 1 business day.</li>
		<li><strong>Low:</strong> response within 2 business days.</li>
	</ul>

	<h2>Incident Management</h2>
	<p>
		We classify incidents by severity, provide status updates throughout resolution, and publish a
		post-incident summary for major events affecting availability.
	</p>

	<h2>Exclusions</h2>
	<p>
		Commitments do not apply to downtime caused by factors outside our reasonable control, including your
		network, third-party services, or misuse of the Services.
	</p>

	<h2>Service Credits</h2>
	<p>
		Where availability falls below the target, affected customers on eligible plans may request service
		credits as described in their order agreement.
	</p>

	<h2>Contact</h2>
	<p>For incidents or SLA questions, contact our team using the details below.</p>
</LegalLayout>
