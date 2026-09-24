/* Eleven module definitions ported from procor-hrms-static-site/site/assets/app.js (MODULES).
   Fields: t title · icon lucide name · c accent rgb · sub · d intro ·
   cap chips · f capabilities · who · replaces · connects slugs ·
   sample rows [title, meta, status] · faq [q, a] pairs. */

export const MODULES = {
	'core-hr': {
		t: 'Core HR',
		icon: 'users-round',
		c: '0 99 215',
		sub: 'The record every other module depends on.',
		d: 'A single verified employee record covering personal details, job history, documents and org structure, which every other module reads from instead of keeping its own copy.',
		cap: ['Employee master', 'Org structure', 'Documents', 'Multi-entity', 'Access control'],
		f: [
			'Employee master with full change history on every field',
			'Org chart, reporting lines and cost centres kept current',
			'Group companies, locations and cost centres in one instance',
			'Role-based access so salary and identity fields stay restricted'
		],
		who: 'HR operations own the record. Managers see their own teams. Employees update their own contact and bank details through self-service, with changes routed for verification.',
		replaces: 'The master spreadsheet that four people maintain different versions of, plus the document folder nobody can find during an audit.',
		connects: ['payroll', 'attendance', 'offboarding'],
		sample: [
			['Bank details updated', 'Verified by HR operations', 'Approved'],
			['12 records synced to payroll', 'September cycle', 'Complete'],
			['Probation confirmations due', '4 employees this week', 'Action needed']
		],
		faq: [
			[
				'Can employees update their own details?',
				'Yes. Self-service changes to contact, address and bank details are routed to HR for verification before they take effect, and the previous value is retained in the change history.'
			],
			[
				'How are multiple legal entities handled?',
				'Each entity carries its own statutory settings, policies and approval chains while sharing one employee database, so a transfer between group companies does not create a duplicate record.'
			]
		]
	},

	attendance: {
		t: 'Attendance',
		icon: 'fingerprint',
		c: '62 142 240',
		sub: 'From the clock-in to the payslip, without a spreadsheet in between.',
		d: 'Shift schedules, clock-ins, regularisations and overtime captured as they happen, then passed into the pay run as the inputs payroll actually needs.',
		cap: ['Shifts and rosters', 'Clock-in', 'Regularisation', 'Overtime', 'Muster roll'],
		f: [
			'Configurable shifts, rosters, week-offs and holiday calendars per location',
			'Clock-in from biometric devices, the browser or the employee mobile app',
			'Regularisation requests with a manager approval trail',
			'Overtime rules that feed the pay run without manual transfer'
		],
		who: 'Shift supervisors publish rosters, managers approve regularisations, and payroll receives the finished inputs without chasing anyone for a sheet.',
		replaces: 'Device exports that get cleaned in Excel every month and emailed to payroll three days before cutoff.',
		connects: ['payroll', 'leave', 'core-hr'],
		sample: [
			['Night shift roster published', 'Operations, 42 employees', 'Live'],
			['8 regularisations awaiting approval', 'Manager queue', 'Pending'],
			['Muster roll generated', 'August, all locations', 'Complete']
		],
		faq: [
			[
				'Can we keep our existing biometric devices?',
				'In most cases yes. Devices that can export punch data on a schedule or expose an API can be connected, so hardware does not need replacing to move platforms.'
			],
			[
				'How is overtime calculated?',
				'Overtime rules are configured per entity and grade, applied to captured punches, and carried into the pay run as a separate earning line so it is visible on the payslip.'
			]
		]
	},

	leave: {
		t: 'Leave',
		icon: 'calendar-range',
		c: '16 185 129',
		sub: 'Your policy, enforced automatically.',
		d: 'Leave types, balances and approval chains driven by the policy you actually wrote, with accrual, carry forward and encashment handled by the system rather than by a coordinator.',
		cap: ['Policy engine', 'Accrual', 'Carry forward', 'Encashment', 'Team calendar'],
		f: [
			'Policies that vary by grade, location and legal entity',
			'Automatic accrual, carry forward, lapse and encashment',
			'Holiday calendars maintained per location',
			'Team calendar so managers see coverage before approving'
		],
		who: 'Employees apply and see their own balance. Managers approve against visible team coverage. HR sets the policy once instead of answering balance queries.',
		replaces: 'A leave tracker workbook, an email approval chain and a monthly balance query queue.',
		connects: ['attendance', 'payroll', 'core-hr'],
		sample: [
			['Three days of casual leave', 'Approved by reporting manager', 'Approved'],
			['Comp-off credited', '18 employees, festival shift', 'Complete'],
			['Encashment window', 'Opens at year end', 'Scheduled']
		],
		faq: [
			[
				'Can different entities have different leave policies?',
				'Yes. Policies are configured per entity, location and grade, and an employee moving between them carries the correct entitlement automatically.'
			],
			[
				'Does leave affect payroll automatically?',
				'Yes. Loss-of-pay days and encashment flow into the pay run as inputs, so payroll does not need a separate leave statement.'
			]
		]
	},

	assets: {
		t: 'Assets',
		icon: 'laptop',
		c: '217 119 6',
		sub: 'Issued, tracked and recovered at exit.',
		d: 'A register of the equipment your company owns and who currently holds it, tied to the employee record so recovery is part of the exit process rather than an afterthought.',
		cap: ['Office assets', 'Communication assets', 'Issue and return', 'Custody trail', 'Exit recovery'],
		f: [
			'Separate registers for office and communication assets',
			'Issue, transfer and return with employee acknowledgement',
			'Warranty, insurance and depreciation tracked against each item',
			'Recovery tied to offboarding clearance so nothing is written off silently'
		],
		who: 'IT and admin manage the register. Managers see what their team holds. Finance gets a defensible asset position at year end.',
		replaces: 'An asset sheet that was last accurate two audits ago.',
		connects: ['onboarding', 'offboarding', 'core-hr'],
		sample: [
			['Laptop issued to new joiner', 'Acknowledged by employee', 'Assigned'],
			['Devices due back', 'Exits this week', 'Pending'],
			['Asset audit closed', 'One location', 'Complete']
		],
		faq: [
			[
				'Can employees acknowledge assets digitally?',
				'Yes. Issue and return are confirmed by the employee in self-service, which creates the custody record you need at exit.'
			],
			[
				'Does it handle non-IT assets?',
				'Yes. Any issued item can be tracked, from vehicles and tools to access cards and uniforms.'
			]
		]
	},

	recruitment: {
		t: 'Recruitment',
		icon: 'user-search',
		c: '124 58 237',
		sub: 'New headcount and backfills in the same pipeline.',
		d: 'Requisitions, candidates and interview feedback in one pipeline, with a distinct path for replacement hiring because backfilling a leaver is not the same process as adding headcount.',
		cap: ['Requisitions', 'Approval chain', 'Candidate pipeline', 'Interviews', 'Offers'],
		f: [
			'Separate workflows for new headcount and replacement hires',
			'Approval chain before a role is opened to the market',
			'Stage-wise pipeline with interview scheduling and feedback',
			'Offer generation that hands straight over to onboarding'
		],
		who: 'Hiring managers raise requisitions, finance approves the headcount, recruiters run the pipeline, and interviewers leave structured feedback.',
		replaces: 'Requisition approvals over email and candidate tracking in a shared sheet.',
		connects: ['onboarding', 'core-hr', 'offboarding'],
		sample: [
			['Requisition raised', 'Replacement for a resigning employee', 'Approved'],
			['Candidates in pipeline', 'Four at offer stage', 'Active'],
			['Offer accepted', 'Handed to onboarding', 'Closed']
		],
		faq: [
			[
				'What makes replacement hiring different?',
				'A backfill is linked to the employee being replaced and to their exit date, so the approval path, budget check and target joining date all follow from the vacancy rather than from a new-headcount business case.'
			],
			[
				'Does an accepted offer create the employee record?',
				'Yes. Accepting an offer triggers onboarding and creates the employee record from the candidate data already captured, so nothing is re-typed.'
			]
		]
	},

	onboarding: {
		t: 'Onboarding',
		icon: 'rocket',
		c: '2 132 199',
		sub: 'Signed offer to productive first day.',
		d: 'Offer acceptance triggers document collection, asset requests and day-one tasks, so a new joiner arrives to a working laptop, a payroll record and a plan.',
		cap: ['Document collection', 'Verification', 'Asset requests', 'Day-one tasks', 'Induction'],
		f: [
			'Digital document collection with verification status',
			'Asset and access requests raised automatically on acceptance',
			'Buddy, training and day-one checklists with owners',
			'Employee record created without re-entering candidate data'
		],
		who: 'HR runs the checklist, IT and admin receive their tasks automatically, and the joiner completes documents before day one.',
		replaces: 'A joining kit emailed as attachments and a mental checklist held by one HR executive.',
		connects: ['recruitment', 'assets', 'core-hr'],
		sample: [
			['Documents verified', 'Ahead of joining date', 'Complete'],
			['Asset request raised', 'Laptop and access card', 'In progress'],
			['Induction scheduled', 'Day one, first session', 'Scheduled']
		],
		faq: [
			[
				'How far in advance can onboarding start?',
				'As soon as the offer is accepted. Document collection and asset requests typically run in the week before joining so day one is productive.'
			],
			[
				'Can we vary onboarding by role or location?',
				'Yes. Checklists are configured per role, entity and location, so a factory joiner and a head-office joiner follow different paths.'
			]
		]
	},

	performance: {
		t: 'Performance',
		icon: 'target',
		c: '225 29 72',
		sub: 'Goals that connect to the appraisal run.',
		d: 'Goal setting and review cycles that link individual objectives to company targets, and produce ratings your payroll team can actually act on at appraisal time.',
		cap: ['Goal setting', 'Cascading goals', 'Review cycles', 'Calibration', 'Appraisal inputs'],
		f: [
			'Goals cascading from company objectives to individual targets',
			'Self, manager and skip-level reviews in one cycle',
			'Calibration support before ratings are finalised',
			'Ratings available as inputs to the appraisal pay run'
		],
		who: 'Leadership sets objectives, managers run reviews, HR administers the cycle and calibration, and payroll receives the outcome.',
		replaces: 'A review form circulated as a document and a rating spreadsheet reconciled by hand.',
		connects: ['core-hr', 'payroll'],
		sample: [
			['Review cycle opened', 'All participants notified', 'Live'],
			['Calibration session', 'One department', 'Scheduled'],
			['Manager submissions pending', 'Reminders sent', 'Action needed']
		],
		faq: [
			[
				'Can we run more than one cycle a year?',
				'Yes. Cycles are configured independently, so quarterly check-ins and an annual appraisal can run on different schedules for different populations.'
			],
			[
				'Do ratings flow into increments?',
				'Ratings are available as an input to the appraisal pay run, so increment and bonus workings use the same data rather than a separate sheet.'
			]
		]
	},

	payroll: {
		t: 'Payroll',
		icon: 'wallet',
		c: '194 39 75',
		sub: 'One cycle, every entity, statutory deductions included.',
		d: 'A compliant pay run that pulls attendance, leave and claims automatically, calculates PF, ESI, professional tax and TDS in the same cycle, and publishes payslips across every entity you operate.',
		cap: ['PF', 'ESI', 'Professional tax', 'TDS', 'Variable pay', 'Form 16', 'Bank files'],
		f: [
			'Attendance, leave and approved claims pulled in before the run starts',
			'Variable pay engine for incentives, commissions and service charge',
			'Statutory deductions, challans and returns produced from the same run',
			'Payslips published to employees across all entities on approval'
		],
		who: 'Payroll and finance run the cycle under maker-checker approval. HR supplies nothing extra, because the inputs are already in the system. Employees receive payslips in self-service.',
		replaces: 'An input workbook assembled from four sources, emailed to a vendor, and reconciled again when it comes back.',
		connects: ['attendance', 'leave', 'reimbursement'],
		sample: [
			['Pay cycle calculated', 'Awaiting final approval', 'In review'],
			['Statutory challans generated', 'Ready for payment', 'Ready'],
			['Payslips published', 'Previous cycle, all entities', 'Complete']
		],
		faq: [
			[
				'How do we know the first run will be correct?',
				'Migrated salary structures, balances and year-to-date figures are validated against your existing system during implementation, and calculations are verified with your team before sign-off. The first live run is processed under maker-checker approval with our delivery team present.'
			],
			[
				'How is variable pay handled across outlets?',
				'The variable pay engine supports distribution configured per client, whether unit-wise, pooled company-wide or through hybrid pool groups, which matters for service charge and incentive models.'
			],
			[
				'What happens if a pay run is wrong?',
				'Runs are locked only after maker-checker approval. Before lock, inputs can be corrected and recalculated; after lock, corrections are processed as adjustments in the next cycle with a full audit trail.'
			]
		]
	},

	reimbursement: {
		t: 'Reimbursement & Expenses',
		icon: 'receipt',
		c: '192 38 211',
		sub: 'Claim to payout, inside payroll.',
		d: 'Expense claims submitted with receipts, checked against policy limits, approved by the right manager and settled through the next pay run instead of a separate payment process.',
		cap: ['Category limits', 'Receipts', 'Policy checks', 'Approvals', 'Payroll settlement'],
		f: [
			'Category-wise limits and policy checks applied at submission',
			'Receipt upload with duplicate detection',
			'Multi-level approval routing by amount and grade',
			'Settlement through payroll or direct transfer'
		],
		who: 'Employees claim from self-service, managers approve, finance reviews exceptions, and payroll settles without a second payment run.',
		replaces: 'Claim forms with receipts stapled to them and a reimbursement cheque run.',
		connects: ['payroll', 'core-hr'],
		sample: [
			['Travel claim submitted', 'Awaiting manager approval', 'Pending'],
			['Claims cleared for payout', 'Current payroll cycle', 'Approved'],
			['Policy breach flagged', 'Above grade limit', 'Action needed']
		],
		faq: [
			[
				'Can claims be settled outside payroll?',
				'Yes. Approved claims can be settled in the pay run or paid separately, depending on how your finance team prefers to handle cash flow.'
			],
			[
				'Are policy limits enforced at submission?',
				'Yes. Limits by category and grade are checked when the claim is raised, so breaches are visible before an approver spends time on them.'
			]
		]
	},

	offboarding: {
		t: 'Offboarding',
		icon: 'door-open',
		c: '71 85 105',
		sub: 'Clearance, recovery and settlement, closed out on time.',
		d: 'Resignation through to full-and-final settlement as one tracked workflow, so clearances, asset recovery, access revocation and the final payment do not depend on someone remembering.',
		cap: ['Resignation', 'Notice period', 'Clearances', 'Asset recovery', 'Full and final'],
		f: [
			'Resignation, notice period and last working day tracked in one place',
			'Department-wise clearance checklists with owners and due dates',
			'Asset recovery and access revocation tied to clearance',
			'Full-and-final settlement and exit documents produced from the same record'
		],
		who: 'HR runs the exit, department owners complete clearances, IT revokes access on the right date, and finance settles from verified figures.',
		replaces: 'A clearance form passed between desks and an FnF calculation built by hand weeks after the exit.',
		connects: ['assets', 'payroll', 'core-hr'],
		sample: [
			['Clearance raised', 'IT, finance and admin', 'In progress'],
			['Full and final processed', 'Previous cycle exits', 'Settled'],
			['Exit interview scheduled', 'Before last working day', 'Scheduled']
		],
		faq: [
			[
				'How quickly can full-and-final be settled?',
				'Because clearances, recoveries and leave balances are already in the system, settlement can be prepared as soon as the last working day passes rather than after a manual collection exercise.'
			],
			[
				'Is access revoked automatically?',
				'Access revocation is a tracked step in the clearance workflow tied to the last working day, so it is owned and dated rather than assumed.'
			]
		]
	},

	helpdesk: {
		t: 'Helpdesk',
		icon: 'life-buoy',
		c: '234 88 12',
		sub: 'Employee questions, answered and tracked.',
		d: 'A single place for employees to raise HR queries or find their own answers, with every ticket routed, tracked and measured against its resolution time.',
		cap: ['Ticket routing', 'SLA tracking', 'FAQ library', 'Escalation', 'Resolution history'],
		f: [
			'Category-wise routing with service levels per ticket type',
			'Searchable FAQ and policy library for self-service',
			'Escalation matrix with automatic reminders',
			'Resolution history visible on the employee record'
		],
		who: 'Employees raise and track their own tickets. HR handles exceptions rather than repeat questions. Leadership sees where the volume comes from.',
		replaces: 'An HR inbox where queries are answered twice and lost once.',
		connects: ['core-hr', 'payroll'],
		sample: [
			['Payslip query', 'Answered from policy library', 'Resolved'],
			['Shift change request', 'Routed to operations', 'In progress'],
			['Asset replacement', 'Routed to IT', 'Assigned']
		],
		faq: [
			[
				'Can employees see the status of their ticket?',
				'Yes. Employees track their own tickets end to end, which removes most of the follow-up email HR currently absorbs.'
			],
			[
				'Does the FAQ reduce ticket volume?',
				'It is designed to. Common questions about payslips, leave balances and policies are answered from the library before a ticket is created.'
			]
		]
	}
};
