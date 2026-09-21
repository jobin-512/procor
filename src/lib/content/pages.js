/* Content pages ported from procor-hrms-static-site/site/assets/app.js (PAGES).
   faq entries reference indexes into FAQS (see faqs.js) to avoid duplicating copy.
   Fields: t title · k lead · d intro · s stats [value,label,note] ·
   b blocks [icon,title,text] · steps [title,when,text] · prose [heading,body] ·
   faq [indexes] · contact bool · pills bool · note · ctaLabel · updated bool. */

export const PAGES = {
	platform: {
		t: 'Platform',
		k: 'Eleven modules, one employee record, one contract.',
		d: 'Procor HRMS covers the employee lifecycle from requisition to full-and-final settlement. Every module is configurable to your policies, entities and statutory obligations, and all of them read and write the same record.',
		s: [
			['11', 'Modules on one platform', 'Deploy all of them or start with a few'],
			['50+', 'Client companies', '10,000+ users live today'],
			['1', 'Employee record', 'No re-entry between modules']
		],
		b: [
			['layers', 'One data model', 'Leave updates attendance, attendance feeds payroll, and an exit closes out assets and settlement without anyone re-keying data.'],
			['sliders-horizontal', 'Configured, not customised', 'Policies, approval chains, pay structures and letter templates are set up per entity without code changes, so upgrades never break your setup.'],
			['building-2', 'Multi-entity by default', 'Group companies, locations and cost centres run in one instance with separate statutory settings and approval chains.'],
			['cloud', 'Cloud delivery', 'Hosted, updated and monitored by us, reachable in any browser on desktop and mobile, with a mobile app for employees who prefer one.'],
			['plug', 'Fits your stack', 'Exports and integrations for finance systems, biometric devices and bank payment files.'],
			['smartphone', 'Self-service, including mobile', 'Employees raise leave, claims and tickets themselves from the browser or the mobile app, so HR handles exceptions instead of data entry.']
		],
		pills: true
	},

	compliance: {
		t: 'Compliance',
		k: 'Statutory work handled inside payroll, not bolted on after it.',
		d: 'Procor has delivered payroll and labour-law compliance as a service for years. Procor HRMS is the platform our own compliance team works in, which is why statutory deductions, challans and registers come out of the same run that produces the payslip.',
		s: [
			['4', 'Statutory heads in every run', 'PF, ESI, professional tax and TDS'],
			['State-wise', 'Professional tax', 'Slabs applied per location'],
			['Multi-entity', 'Filings', 'Separate settings per company']
		],
		b: [
			['shield-check', 'Provident fund', 'Contributions calculated on the configured wage definition, with ECR-ready output and a clear record of eligibility changes month to month.'],
			['activity', 'ESI', 'Eligibility tracked against the wage threshold, including employees who move in and out of coverage mid-year.'],
			['map-pin', 'Professional tax', 'State-wise slabs applied by work location, so a multi-state workforce does not need separate payroll runs.'],
			['receipt', 'Income tax and TDS', 'Declarations, proof submission and monthly TDS computation, with Form 16 generated from the same data at year end.'],
			['file-text', 'Registers and returns', 'Statutory registers and periodic returns produced from payroll output rather than rebuilt in spreadsheets.'],
			['history', 'Audit trail', 'Every rate change, override and correction is recorded with user and timestamp, which is what an inspection actually asks for.']
		],
		faq: [2, 6, 4]
	},

	implementation: {
		t: 'Implementation',
		k: 'What switching to Procor HRMS actually involves.',
		d: 'Most HRMS decisions stall on migration risk, not on features. This is the sequence we run, what we need from your team, and how we make sure your data lands correctly. Timelines are scoped per client, because they depend on headcount, number of entities and how ready your existing data is.',
		s: [
			['Named team', 'From kickoff to go-live', 'And a named contact afterwards'],
			['Validated', 'Data migration', 'Checked against your existing system'],
			['Since 2018', 'Doing this for a living', 'Payroll specialists, not generalists']
		],
		steps: [
			['Kickoff and scoping', 'Discovery', 'We map your entities, locations, pay structures, leave policies and approval chains, and agree who owns each decision. You get a written configuration plan before any data moves.'],
			['Configuration', 'Setup', 'Policies, shifts, pay components, statutory settings and letter templates are set up per entity. Your team reviews the configuration against real cases rather than a demo dataset.'],
			['Data migration', 'Migration', 'Employee master, salary structures, leave balances, loan and advance records and year-to-date payroll figures are migrated and validated against your existing system.'],
			['Verification', 'Sign-off', 'Calculations are checked against your current outputs and any differences are explained before your team signs off. Nothing goes live on an assumption.'],
			['Training and self-service rollout', 'Enablement', 'HR, finance and managers are trained on their own configuration. Employees are introduced to self-service with a short guide.'],
			['Go-live and handover', 'Go-live', 'First live run under maker-checker approval with the delivery team present. You keep a named contact afterwards rather than being handed to a queue.']
		],
		b: [
			['database', 'What we need from you', 'Employee master data, current salary structures, leave balances, policy documents and year-to-date payroll figures, plus one decision-maker per area.'],
			['shield-check', 'How we de-risk it', 'Migrated data is validated against your existing system and calculations are verified before sign-off, so problems surface during implementation rather than in a live pay run.'],
			['users-round', 'Who runs it', 'A delivery team that has processed payroll since 2018, not an implementation partner learning your statutory rules on your time.']
		],
		faq: [0, 1, 5]
	},

	industries: {
		t: 'Industries',
		k: 'Configured around how your workforce actually operates.',
		d: 'The statutory rules are national, but shift patterns, wage structures and attendance realities are not. These are the operating models Procor HRMS is configured for most often.',
		b: [
			['utensils', 'Restaurants and QSR', 'Multi-outlet rosters, service charge distribution configurable unit-wise or as a pooled group, high attrition and continuous onboarding.'],
			['factory', 'Manufacturing', 'Shift rosters and overtime rules, contractor and staff populations, statutory registers and inspection-ready records across plants.'],
			['shopping-bag', 'Retail', 'Store-level attendance, part-time and seasonal staffing, incentive and commission structures that vary by location.'],
			['briefcase', 'Professional services', 'Salaried teams across multiple states, reimbursement-heavy expense policies and appraisal cycles tied to increments.'],
			['users-round', 'Staffing and outsourcing', 'Multiple client sites, separate legal entities, and payroll cycles that must reconcile against client invoices.'],
			['building-2', 'Multi-entity groups', 'Shared services teams running several companies with different policies, statutory registrations and approval chains from one instance.']
		],
		pills: true
	},

	integrations: {
		t: 'Integrations',
		k: 'It has to fit the systems you already run.',
		d: 'Procor HRMS exchanges data with the finance, banking and attendance systems already in place, so moving HR and payroll does not force a change everywhere else.',
		b: [
			['calculator', 'Accounting and ERP', 'Payroll journals and cost-centre-wise summaries exported in the format your finance system expects, so the month-end entry is a load rather than a re-key.'],
			['fingerprint', 'Biometric and access devices', 'Punch data pulled from devices that support scheduled export or an API, across multiple locations.'],
			['banknote', 'Bank payment files', 'Salary and settlement payment files generated in bank-specific formats for upload to your corporate banking portal.'],
			['file-text', 'Statutory outputs', 'Challan and return files prepared in the formats required for statutory filing.'],
			['download', 'Reporting exports', 'Every register and report is exportable, so your analysts are never locked out of their own data.'],
			['plug', 'Custom connections', 'Where a system needs a direct connection, our team scopes it during implementation rather than after go-live.']
		]
	},

	security: {
		t: 'Security',
		k: 'Payroll data, handled the way payroll data should be.',
		d: 'Procor HRMS holds salary, identity and statutory records. Access is restricted by design and every change is traceable. The facts below are what IT and risk reviewers usually ask for first.',
		s: [
			['Role-based', 'Access control', 'Down to individual fields'],
			['Encrypted', 'In transit and at rest', 'Across the platform'],
			['Full audit trail', 'On every record change', 'User, timestamp, previous value']
		],
		b: [
			['lock', 'Least-privilege access', 'Roles decide which modules, entities and fields a user can open. Salary and identity fields stay hidden from anyone without an explicit grant.'],
			['history', 'Traceable changes', 'Record edits, approvals and payroll actions are logged with user, timestamp and the value that was replaced.'],
			['shield-check', 'Approval gates', 'Pay runs, master data changes and settlements move through maker-checker approval before they take effect.'],
			['server', 'Managed hosting', 'Backups, patching and monitoring are part of the service, with documented recovery procedures.'],
			['file-text', 'Statutory retention', 'Payroll registers, challans and exit records are retained in line with Indian statutory requirements.'],
			['user-x', 'Clean offboarding', 'Access revocation is a dated, owned step inside the exit workflow rather than a manual afterthought.']
		],
		note: 'We are happy to complete your security questionnaire and walk your IT team through hosting, backup and access controls before you commit to anything.',
		faq: [3, 7]
	},

	company: {
		t: 'Company',
		k: 'Payroll, HR and compliance, run by people who do it daily.',
		d: 'Procor has delivered payroll, HRMS and statutory compliance to companies operating in India since 2018, and more than 50 companies now run on Procor HRMS. It is the platform our own delivery teams work in, which is why it is built around how payroll and compliance actually run rather than how they demo.',
		s: [
			['50+', 'Client companies', 'Live on Procor HRMS'],
			['Since 2018', 'Running payroll', 'For companies operating in India'],
			['New Delhi', 'Where we are based', 'Serving clients across every state']
		],
		b: [
			['briefcase', 'What we do', 'Managed payroll, HRMS implementation and labour-law compliance, delivered as a service or as software your team runs. Procor HRMS is offered by Procor Digital Solutions Pvt Ltd, part of the Procor group.'],
			['handshake', 'How we work', 'A named delivery team, documented processes and a single point of accountability for every client.'],
			['map-pin', 'Where we operate', 'Our office is in New Delhi, supporting multi-state and multi-entity clients across India.'],
			['git-merge', 'Partners', 'We work with consultancies and staffing firms as a subcontracted delivery partner for payroll and compliance.'],
			['users-round', 'Careers', 'We hire payroll specialists, compliance analysts and product engineers. Send your CV to the contact address on our contact page.'],
			['mail', 'Talk to us', 'Tell us your headcount, entities and current setup, and we will come back with a scoped proposal.']
		]
	},

	faq: {
		t: 'FAQ',
		k: 'The questions that decide whether this is a fit.',
		d: 'Straight answers on implementation, compliance, data and support. If something you need is not covered here, ask us directly.',
		faq: 'all'
	},

	contact: {
		t: 'Contact',
		k: 'Talk to someone who runs payroll for a living.',
		d: 'Tell us your headcount, how many entities you operate and what you use today. We come back within one business day with a scoped walkthrough, not a generic product tour.',
		contact: true,
		ctaLabel: 'Jump to the form'
	},

	privacy: {
		t: 'Privacy Policy',
		k: 'How we handle personal data on this website and in the platform.',
		d: 'This policy explains what we collect, why, and what you can ask us to do about it. It covers this website and the Procor HRMS platform.',
		prose: [
			['Who we are', 'Procor operates this website and the Procor HRMS platform. For data submitted through this website we act as the data controller. For employee data processed inside Procor HRMS on behalf of a client, the client is the controller and we act as a processor under the terms of our services agreement.'],
			['What we collect on this website', 'When you submit a demo or contact form we collect the work email address, company name, headcount range and any other details you provide. Our hosting provider records standard server logs, including IP address and browser type. Where analytics is enabled, we collect aggregate usage data about pages viewed.'],
			['Why we collect it', 'To respond to your enquiry, to prepare a relevant walkthrough, and to maintain and secure the website. We do not sell personal data, and we do not use website enquiry data for unrelated marketing without consent.'],
			['Employee data in the platform', 'Where we process employee data for a client, we do so only on that client\u2019s documented instructions and for the purposes set out in the services agreement: payroll processing, statutory filings and HR administration. Access is restricted by role and every change is logged.'],
			['Retention', 'Website enquiry data is retained for as long as needed to pursue the enquiry and for a reasonable period afterwards. Payroll and statutory records processed in the platform are retained in line with Indian statutory requirements and the client agreement.'],
			['Your rights', 'Under the Digital Personal Data Protection Act, 2023, you may ask us to confirm what personal data we hold about you, to correct it, or to erase it where retention is not required by law. Employees of our clients should contact their employer, who is the controller of that data; we support the client in responding.'],
			['Security', 'We apply role-based access control, encryption in transit and at rest, audit logging and approval gates on sensitive actions. Our practices are described in more detail on the Security page.'],
			['Contact', 'Privacy questions and data requests can be sent to the address on our Contact page, marked for the attention of the data protection contact.']
		],
		updated: true
	},

	terms: {
		t: 'Terms of Service',
		k: 'The terms that apply to this website.',
		d: 'These terms govern your use of this website. Use of the Procor HRMS platform itself is governed by the signed services agreement between Procor and the client, which takes precedence over anything on this page.',
		prose: [
			['Use of this website', 'You may use this website to learn about our services and to contact us. You may not attempt to gain unauthorised access to any part of the site or its underlying systems, or use automated tools to extract content at scale.'],
			['Information on this website', 'Descriptions of platform capabilities are provided for general information. Screens and sample views shown on this site are illustrative and use representative data, not live client data. Functionality, statutory coverage and service levels for your organisation are set out in a written proposal and agreement.'],
			['Enquiries and quotations', 'Submitting a form does not create a contract. Pricing, scope and service commitments are provided in a written proposal and become binding only when both parties sign an agreement.'],
			['Intellectual property', 'The Procor name, logo, platform, website content and design are the property of Procor and may not be reproduced without written permission.'],
			['Limitation of liability', 'This website is provided on an as-is basis. To the extent permitted by law, Procor is not liable for indirect or consequential loss arising from use of this website. Liability in relation to services is governed by the signed services agreement.'],
			['Governing law', 'These terms are governed by the laws of India, and the courts of Delhi have exclusive jurisdiction over any dispute relating to this website.'],
			['Changes', 'We may update these terms. The version published on this page at the time of your visit is the version that applies.']
		],
		updated: true
	},

	cookies: {
		t: 'Cookie Policy',
		k: 'What this website stores in your browser.',
		d: 'This website is deliberately light on tracking. This page lists what is stored and why.',
		prose: [
			['Strictly necessary storage', 'This site stores your light or dark theme preference in your browser so the site does not reset on every visit. It contains no personal data and is never sent to a server.'],
			['Analytics', 'Where website analytics is enabled, it records aggregate usage such as pages viewed and approximate region, to help us understand which content is useful. It is not used to identify individuals.'],
			['Third parties', 'Web fonts are loaded from Google Fonts, which receives the request as part of serving the font files. No advertising or social media tracking scripts run on this site.'],
			['Managing storage', 'You can clear or block browser storage through your browser settings. Blocking it will not prevent the site from working; your theme preference simply will not persist between visits.']
		],
		updated: true
	},

	'404': {
		t: 'Page not found',
		k: 'That link does not lead anywhere.',
		d: 'The page you were looking for may have moved. The platform overview and the module list below cover most of what people arrive here looking for.',
		pills: true,
		b: [
			['layers', 'Platform overview', 'How eleven modules share one employee record, and what that removes from your month end.'],
			['shield-check', 'Compliance', 'PF, ESI, professional tax and TDS handled inside the pay run.'],
			['mail', 'Talk to our team', 'Tell us what you were looking for and we will point you to it.']
		],
		ctaLabel: 'Talk to our team'
	}
};
