<script>
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Activity from '@lucide/svelte/icons/activity';
	import Banknote from '@lucide/svelte/icons/banknote';
	import Briefcase from '@lucide/svelte/icons/briefcase';
	import Building2 from '@lucide/svelte/icons/building-2';
	import Calculator from '@lucide/svelte/icons/calculator';
	import CalendarRange from '@lucide/svelte/icons/calendar-range';
	import Check from '@lucide/svelte/icons/check';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import Cloud from '@lucide/svelte/icons/cloud';
	import Database from '@lucide/svelte/icons/database';
	import DoorOpen from '@lucide/svelte/icons/door-open';
	import Download from '@lucide/svelte/icons/download';
	import Factory from '@lucide/svelte/icons/factory';
	import FileText from '@lucide/svelte/icons/file-text';
	import Fingerprint from '@lucide/svelte/icons/fingerprint';
	import GitMerge from '@lucide/svelte/icons/git-merge';
	import Handshake from '@lucide/svelte/icons/handshake';
	import History from '@lucide/svelte/icons/history';
	import Laptop from '@lucide/svelte/icons/laptop';
	import Layers from '@lucide/svelte/icons/layers';
	import LifeBuoy from '@lucide/svelte/icons/life-buoy';
	import Lock from '@lucide/svelte/icons/lock';
	import Mail from '@lucide/svelte/icons/mail';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Menu from '@lucide/svelte/icons/menu';
	import Moon from '@lucide/svelte/icons/moon';
	import Phone from '@lucide/svelte/icons/phone';
	import Plug from '@lucide/svelte/icons/plug';
	import Plus from '@lucide/svelte/icons/plus';
	import Receipt from '@lucide/svelte/icons/receipt';
	import RefreshCw from '@lucide/svelte/icons/refresh-cw';
	import Rocket from '@lucide/svelte/icons/rocket';
	import Server from '@lucide/svelte/icons/server';
	import ShieldCheck from '@lucide/svelte/icons/shield-check';
	import ShoppingBag from '@lucide/svelte/icons/shopping-bag';
	import SlidersHorizontal from '@lucide/svelte/icons/sliders-horizontal';
	import Smartphone from '@lucide/svelte/icons/smartphone';
	import Sun from '@lucide/svelte/icons/sun';
	import Target from '@lucide/svelte/icons/target';
	import TrendingUp from '@lucide/svelte/icons/trending-up';
	import UserCheck from '@lucide/svelte/icons/user-check';
	import UserSearch from '@lucide/svelte/icons/user-search';
	import UserX from '@lucide/svelte/icons/user-x';
	import UsersRound from '@lucide/svelte/icons/users-round';
	import Utensils from '@lucide/svelte/icons/utensils';
	import Wallet from '@lucide/svelte/icons/wallet';
	import Workflow from '@lucide/svelte/icons/workflow';
	import X from '@lucide/svelte/icons/x';
	import CircleHelp from '@lucide/svelte/icons/circle-help';

	const ICONS = {
		'arrow-left': ArrowLeft,
		'arrow-right': ArrowRight,
		activity: Activity,
		banknote: Banknote,
		briefcase: Briefcase,
		'building-2': Building2,
		calculator: Calculator,
		'calendar-range': CalendarRange,
		check: Check,
		'chevron-down': ChevronDown,
		cloud: Cloud,
		database: Database,
		'door-open': DoorOpen,
		download: Download,
		factory: Factory,
		'file-text': FileText,
		fingerprint: Fingerprint,
		'git-merge': GitMerge,
		handshake: Handshake,
		history: History,
		laptop: Laptop,
		layers: Layers,
		'life-buoy': LifeBuoy,
		lock: Lock,
		mail: Mail,
		'map-pin': MapPin,
		menu: Menu,
		moon: Moon,
		phone: Phone,
		plug: Plug,
		plus: Plus,
		receipt: Receipt,
		'refresh-cw': RefreshCw,
		rocket: Rocket,
		server: Server,
		'shield-check': ShieldCheck,
		'shopping-bag': ShoppingBag,
		'sliders-horizontal': SlidersHorizontal,
		smartphone: Smartphone,
		sun: Sun,
		target: Target,
		'trending-up': TrendingUp,
		'user-check': UserCheck,
		'user-search': UserSearch,
		'user-x': UserX,
		'users-round': UsersRound,
		utensils: Utensils,
		wallet: Wallet,
		workflow: Workflow,
		x: X
	};

	let { name, size = 18, class: cls = '' } = $props();
	const Icon = $derived(ICONS[name] ?? CircleHelp);
</script>

<Icon {size} class={cls} />
