/* Shared FAQ set ported from procor-hrms-static-site/site/assets/app.js (FAQS). */

export const FAQS = [
	[
		'What does implementation involve, and what do we have to do?',
		'We map your entities, pay structures, leave policies and approval chains, configure them, migrate your master data and balances, and train your team before the first live run. Your side supplies master data, policy documents and one decision-maker per area. Timelines are scoped per client, because they depend on the size of your workforce and how ready your data is.'
	],
	[
		'How do you make sure the migrated data is right?',
		'Employee master, salary structures, leave balances, loan and advance records and year-to-date figures are migrated and then validated against your existing system before anything goes live, so differences are found and explained rather than discovered in a pay run.'
	],
	[
		'Which statutory deductions and returns do you handle?',
		'Provident fund, ESI, professional tax and TDS are calculated in the pay run, with challans, returns and statutory registers produced from the same data. Professional tax is handled for every state, Form 16 is generated in-house, and gratuity and bonus are calculated on the same record. Exactly which filings we submit on your behalf is set in your contract.'
	],
	[
		'Where is our data hosted, and who can see salary information?',
		'Procor HRMS runs on AWS infrastructure hosted in India, with daily backups. Access is controlled by role. Salary and identity fields are hidden unless a role has an explicit grant, and every change is written to an audit trail with user, timestamp and previous value.'
	],
	[
		'What happens if a pay run is wrong?',
		'Pay runs lock only after maker-checker approval. Before lock, inputs are corrected and the run recalculated. After lock, corrections are processed as adjustments in the next cycle, with the full history retained.'
	],
	[
		'Can we keep our existing attendance devices?',
		'In most cases yes. Biometric devices that export punch data on a schedule or expose an API can be connected, so you do not need to replace hardware to change platforms.'
	],
	[
		'How do you handle group companies with different policies?',
		'Each legal entity carries its own statutory settings, leave policies, pay structures and approval chains while sharing one employee database, so transfers between entities do not create duplicate records.'
	],
	[
		'What does support look like after go-live?',
		'You keep a named contact from the delivery team. Employees raise queries through the in-product helpdesk, and your HR team escalates through the same channel with tracked resolution times.'
	]
];
