/* Site-wide constants ported from procor-hrms-static-site/site/assets/app.js (CONFIG, META).
   Theme (colors/fonts) intentionally NOT ported — src/app.css remains the design system. */

export const CONFIG = {
	legalEntity: 'Procor Digital Solutions Pvt Ltd',
	address: 'New Delhi',
	phone: '+91 99999 54416',
	salesEmail: 'info@procor.co.in',
	supportEmail: '',
	portalUrl: '',
	siteUrl: 'https://www.procorhrms.com'
};

export const ORDER = [
	'core-hr',
	'attendance',
	'leave',
	'assets',
	'recruitment',
	'onboarding',
	'performance',
	'payroll',
	'reimbursement',
	'offboarding',
	'helpdesk'
];

export const GROUPS = [
	['Workforce Core', ['core-hr', 'attendance', 'leave', 'assets']],
	['Talent & Growth', ['recruitment', 'onboarding', 'performance']],
	['Finance & Operations', ['payroll', 'reimbursement', 'offboarding', 'helpdesk']]
];

export const GROUP_OF = {};
for (const [label, keys] of GROUPS) for (const k of keys) GROUP_OF[k] = label;

/* [title, description, path] per route */
export const META = {
	home: [
		'Procor HRMS | HR & Payroll Software for Enterprises in India',
		'Eleven modules from core HR to payroll on one cloud platform, with PF, ESI, PT and TDS handled inside the pay run. Built for multi-entity, multi-state teams in India.',
		'/'
	],
	platform: [
		'The Procor HRMS Platform | One Employee Record, Eleven Modules',
		'See how core HR, attendance, payroll and exits share one record, so data is entered once and trusted everywhere.',
		'/platform/'
	],
	compliance: [
		'Statutory & Labour Law Compliance Software | Procor HRMS',
		'PF, ESI, professional tax, TDS, challans, registers and Form 16 produced inside the same payroll run, across states and entities.',
		'/compliance/'
	],
	implementation: [
		'HRMS Implementation & Payroll Migration | Procor HRMS',
		'Configuration, data migration validated against your existing system, training and go-live, run by a named delivery team and scoped to your headcount and entities.',
		'/implementation/'
	],
	industries: [
		'HR & Payroll Software by Industry | Procor HRMS',
		'Configured for restaurants and QSR, manufacturing, retail, professional services, staffing and multi-entity groups in India.',
		'/industries/'
	],
	integrations: [
		'Integrations | Procor HRMS',
		'Accounting and ERP exports, biometric devices, bank payment files and statutory outputs that fit the systems you already run.',
		'/integrations/'
	],
	security: [
		'Security at Procor HRMS | How We Protect Payroll Data',
		'Role-based access, encryption, audit trails and approval gates on every payroll action, with managed hosting and documented recovery.',
		'/security/'
	],
	company: [
		'About Procor | Payroll, HRMS & Compliance in India',
		'Procor delivers payroll, HRMS and statutory compliance to companies operating across India, from Delhi NCR.',
		'/company/'
	],
	faq: [
		'Procor HRMS FAQ | Implementation, Compliance, Data and Support',
		'Straight answers on implementation, statutory coverage across states, where your data is hosted, corrections to a pay run and post go-live support.',
		'/faq/'
	],
	contact: [
		'Contact Procor HRMS | Book a Demo',
		'Tell us your headcount, entities and current setup. We reply within one business day with a scoped walkthrough.',
		'/contact/'
	],
	privacy: [
		'Privacy Policy | Procor HRMS',
		'What we collect on this website, how employee data is processed in the platform, retention, and your rights under the DPDP Act.',
		'/privacy/'
	],
	terms: [
		'Terms of Service | Procor HRMS',
		'The terms that apply to this website. Platform use is governed by the signed services agreement.',
		'/terms/'
	],
	cookies: [
		'Cookie Policy | Procor HRMS',
		'What this website stores in your browser, why, and how to manage it.',
		'/cookies/'
	],
	'404': [
		'Page not found | Procor HRMS',
		'That link does not lead anywhere. Browse the platform overview or the eleven modules.',
		'/404/'
	]
};

export function moduleMeta(slug, title, desc) {
	return [
		`${title} Software for Indian Enterprises | Procor HRMS`,
		desc,
		`/modules/${slug}/`
	];
}
