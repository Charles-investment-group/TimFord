<script>
	/**
	 * Admin Portal shell — migrated from TimFord-Mats/src/pages/AdminPortal.jsx.
	 *
	 * WHAT IS FAITHFUL TO THE ORIGINAL
	 *   - Top bar, welcome header, live clock, 4-card stat row, tab dropdown and
	 *     the 17 tab entries (ids, labels, icons and order) are ported directly.
	 *   - Markup and Tailwind classes are carried across unchanged, so the
	 *     appearance matches the Base44 original.
	 *   - React's <ErrorBoundary fallback={(err, retry) => ...}> becomes Svelte's
	 *     <svelte:boundary> with a `failed` snippet — same behaviour: one tab
	 *     blowing up does not take down the portal.
	 *
	 * WHAT DIFFERS, AND WHY
	 *   - The original's four stat values are counts over base44.entities
	 *     (User / SupportTicket / SafetyAlert). Without that backend the arrays
	 *     would be empty and every stat would read "0", which would be a false
	 *     statement about the business. They render "—" instead.
	 *   - The ticket / alert / user lists and their detail dialogs are driven
	 *     entirely by those same entities, so they are represented by
	 *     BackendRequired rather than reproduced against no data.
	 *   - StripeSettingsTab is migrated without the original's secret-key field;
	 *     see that component for why.
	 *
	 * NOT MIGRATED ON PURPOSE
	 *   - OWNER_REAL_EMAIL / OWNER_ALIAS. In the original these swap the owner's
	 *     display name and email in the header and user list. They are real
	 *     personal addresses and this repository is public, so they are not
	 *     copied here. They are display logic only — nothing about access
	 *     depends on them — so leaving them out changes no behaviour that works
	 *     without a backend.
	 */
	import { format } from 'date-fns';

	import LayoutDashboard from 'lucide-svelte/icons/layout-dashboard';
	import MessageSquare from 'lucide-svelte/icons/message-square';
	import ShieldAlert from 'lucide-svelte/icons/shield-alert';
	import Users from 'lucide-svelte/icons/users';
	import Globe from 'lucide-svelte/icons/globe';
	import Shield from 'lucide-svelte/icons/shield';
	import Triangle from 'lucide-svelte/icons/triangle';
	import Boxes from 'lucide-svelte/icons/boxes';
	import Box from 'lucide-svelte/icons/box';
	import Mail from 'lucide-svelte/icons/mail';
	import Sparkles from 'lucide-svelte/icons/sparkles';
	import Megaphone from 'lucide-svelte/icons/megaphone';
	import Zap from 'lucide-svelte/icons/zap';
	import CreditCard from 'lucide-svelte/icons/credit-card';
	import BarChart3 from 'lucide-svelte/icons/bar-chart-3';
	import Brain from 'lucide-svelte/icons/brain';
	import Crown from 'lucide-svelte/icons/crown';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import Clock from 'lucide-svelte/icons/clock';
	import Ticket from 'lucide-svelte/icons/ticket';
	import CheckCircle from 'lucide-svelte/icons/check-circle';
	import AlertTriangle from 'lucide-svelte/icons/alert-triangle';
	import Lock from 'lucide-svelte/icons/lock';

	import BackendRequired from '$lib/admin/BackendRequired.svelte';
	import AdminDashboardTab from '$lib/admin/tabs/AdminDashboardTab.svelte';
	import SupportTicketsTab from '$lib/admin/tabs/SupportTicketsTab.svelte';
	import SafetyAlertsTab from '$lib/admin/tabs/SafetyAlertsTab.svelte';
	import UsersTab from '$lib/admin/tabs/UsersTab.svelte';
	import AdminsTab from '$lib/admin/tabs/AdminsTab.svelte';
	import ForgeEngineTab from '$lib/admin/tabs/ForgeEngineTab.svelte';
	import MessagingTab from '$lib/admin/tabs/MessagingTab.svelte';
	import ForgeMarketingAgencyTab from '$lib/admin/tabs/ForgeMarketingAgencyTab.svelte';
	import AdminMediaPlacementsTab from '$lib/admin/tabs/AdminMediaPlacementsTab.svelte';
	import UserCreditsTab from '$lib/admin/tabs/UserCreditsTab.svelte';
	import RecurringPaymentsTab from '$lib/admin/tabs/RecurringPaymentsTab.svelte';
	import FinanceTab from '$lib/admin/tabs/FinanceTab.svelte';
	import PagesTab from '$lib/admin/tabs/PagesTab.svelte';
	import TemplateControlsTab from '$lib/admin/tabs/TemplateControlsTab.svelte';
	import CadStudioTab from '$lib/admin/tabs/CadStudioTab.svelte';
	import StripeSettingsTab from '$lib/admin/tabs/StripeSettingsTab.svelte';
	import AdminCloneCard from '$lib/admin/cards/AdminCloneCard.svelte';
	import OwnerSuperAdminCard from '$lib/admin/cards/OwnerSuperAdminCard.svelte';
	import ChloeUpscaleCard from '$lib/admin/cards/ChloeUpscaleCard.svelte';
	import GeminiKeyCard from '$lib/admin/cards/GeminiKeyCard.svelte';

	// ALL_TABS — ids, labels, icons and order verbatim from the original.
	const ALL_TABS = [
		{ id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
		{ id: 'tickets', label: 'Support Tickets', icon: MessageSquare },
		{ id: 'alerts', label: 'Safety Alerts', icon: ShieldAlert },
		{ id: 'users', label: 'Users', icon: Users },
		{ id: 'pages', label: 'Website Pages', icon: Globe },
		{ id: 'admins', label: 'Admins', icon: Shield },
		{ id: 'assets', label: 'ForgeEngine Assets', icon: Triangle },
		{ id: 'templates', label: 'Template Controls', icon: Boxes },
		{ id: 'cad', label: 'CAD Studio', icon: Box },
		{ id: 'messaging', label: 'Messaging & Notifications', icon: Mail },
		{ id: 'agency', label: 'Marketing Agency', icon: Sparkles },
		{ id: 'placements', label: 'Media Placements', icon: Megaphone },
		{ id: 'credits', label: 'User Credits', icon: Zap },
		{ id: 'payments', label: 'Recurring Payments', icon: CreditCard },
		{ id: 'finance', label: 'Finance & Profit', icon: BarChart3 },
		{ id: 'brain', label: "Chloe's Brain", icon: Brain },
		{ id: 'owner', label: 'Owner Settings', icon: Crown }
	];

	// In the original the "brain" tab is hidden unless the signed-in account is
	// the recorded brain owner. With no ChloeBrainConfig to read, the original's
	// own fallback (`!brainOwnerEmail` -> treat as owner) applies, so the tab is
	// visible — matching how the original behaves before a config exists.
	const visibleTabs = ALL_TABS;

	let activeTab = $state('dashboard');
	let dropdownOpen = $state(false);
	let now = $state(new Date());

	$effect(() => {
		const t = setInterval(() => (now = new Date()), 1000);
		return () => clearInterval(t);
	});

	const currentTab = $derived(ALL_TABS.find((t) => t.id === activeTab));

	// Same four cards as the original, in the same order. `value` is "—" because
	// the counts require the Base44 entities; see the header comment.
	const stats = [
		{ label: 'Total Users', value: '—', icon: Users, color: 'text-blue-400' },
		{ label: 'Open Tickets', value: '—', icon: Ticket, color: 'text-cyan-400' },
		{ label: 'Safety Alerts', value: '—', icon: ShieldAlert, color: 'text-red-400' },
		{ label: 'Resolved Today', value: '—', icon: CheckCircle, color: 'text-emerald-400' }
	];
</script>

<svelte:head>
	<title>Admin Portal — Tim Ford</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<!-- Top bar -->
<div
	class="sticky top-0 z-20 flex items-center justify-between border-b border-[#2a4a8c] bg-[#091638] px-6 py-3"
>
	<div class="flex items-center gap-3">
		<div class="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
			<Zap class="h-3.5 w-3.5 text-white" />
		</div>
		<span class="text-sm font-bold text-white">
			ForgeAI <span class="text-cyan-400">Admin Portal</span>
		</span>
	</div>
	<div class="flex items-center gap-2">
		<!--
			The amber pill is not in the original. The Base44 AdminRoute was a
			pass-through with the login gate removed, so /admin was reachable by
			anyone; TimFord has no authentication system to gate it with either.
			This keeps that disclosure visible (hover for detail) without the
			full-width banner that broke visual parity. Remove once a real
			server-side guard exists.
		-->
		<span
			title="This route has no access control — anyone with the URL can open it. A server-side guard is required before deployment."
			class="flex items-center gap-1 rounded-full border border-amber-800/40 bg-amber-900/30 px-2.5 py-0.5 text-xs font-semibold text-amber-400"
		>
			<Lock class="h-3 w-3" /> No access control
		</span>
		<span
			class="rounded-full border border-red-800/40 bg-red-900/30 px-2.5 py-0.5 text-xs font-semibold text-red-400"
		>
			Restricted
		</span>
	</div>
</div>

<div class="mx-auto max-w-7xl overflow-x-hidden px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
	<!-- Welcome + live clock -->
	<div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
		<div>
			<h1 class="text-2xl font-black text-slate-900 sm:text-3xl">Welcome back 👋</h1>
			<p class="text-sm text-slate-500">Here's what's happening across ForgeAI today.</p>
		</div>
		<div
			class="flex shrink-0 items-center gap-2.5 self-start rounded-xl border border-[#2a4a8c] bg-[#0b1c4a] px-4 py-2.5 text-white sm:self-auto"
		>
			<Clock class="h-4 w-4 text-cyan-400" />
			<div class="leading-tight">
				<p class="text-sm font-bold tabular-nums">{format(now, 'h:mm:ss a')}</p>
				<p class="text-[11px] text-slate-400">{format(now, 'EEEE, MMMM d, yyyy')}</p>
			</div>
		</div>
	</div>

	<!-- Stats -->
	<div class="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
		{#each stats as stat (stat.label)}
			<div class="h-full">
				<div
					class="flex h-full items-center gap-3 rounded-xl border border-[#3a5a9a] bg-[#15295c] p-3.5 sm:gap-4 sm:p-5"
				>
					<div class="shrink-0 rounded-xl bg-[#0b1c4a] p-2 sm:p-2.5">
						<stat.icon class="h-4 w-4 sm:h-5 sm:w-5 {stat.color}" />
					</div>
					<div class="min-w-0">
						<p class="text-xl font-black leading-none text-white sm:text-2xl">{stat.value}</p>
						<p class="mt-0.5 text-[11px] leading-tight text-slate-400 sm:text-xs">{stat.label}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Nav dropdown -->
	<div class="relative mb-6">
		<button
			onclick={() => (dropdownOpen = !dropdownOpen)}
			class="flex w-full min-w-[240px] items-center gap-3 rounded-xl border border-[#3a5a9a] bg-[#15295c] px-4 py-3 transition-colors hover:border-[#7088b8] sm:w-auto"
		>
			{#if currentTab}
				<currentTab.icon class="h-4 w-4 shrink-0 text-cyan-400" />
			{/if}
			<span class="flex-1 text-left text-sm font-semibold text-white">{currentTab?.label}</span>
			<ChevronDown
				class="h-4 w-4 shrink-0 text-slate-400 transition-transform {dropdownOpen
					? 'rotate-180'
					: ''}"
			/>
		</button>

		{#if dropdownOpen}
			<div
				class="absolute left-0 top-full z-30 mt-1.5 w-72 overflow-hidden rounded-xl border border-[#2a4a8c] bg-[#0b1c4a] shadow-2xl shadow-black/50"
			>
				{#each visibleTabs as tab (tab.id)}
					<button
						onclick={() => {
							activeTab = tab.id;
							dropdownOpen = false;
						}}
						class="flex w-full items-center gap-3 border-b border-[#3a5a9a]/50 px-4 py-3 text-left text-sm transition-colors last:border-0 hover:bg-[#2a4a8c] {activeTab ===
						tab.id
							? 'bg-[#2a4a8c] text-white'
							: 'text-slate-200'}"
					>
						<tab.icon
							class="h-4 w-4 shrink-0 {activeTab === tab.id ? 'text-cyan-400' : 'text-slate-500'}"
						/>
						{tab.label}
						{#if tab.id === 'owner'}
							<Crown class="ml-auto h-3.5 w-3.5 text-amber-400" />
						{/if}
					</button>
				{/each}
			</div>
		{/if}
	</div>

	<!-- Tab content. Svelte's equivalent of the original's <ErrorBoundary>. -->
	<svelte:boundary>
		{#snippet failed(error, reset)}
			<div class="rounded-xl border border-[#3a5a9a] bg-[#15295c] p-10 text-center">
				<div
					class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/20"
				>
					<AlertTriangle class="h-6 w-6 text-red-400" />
				</div>
				<p class="mb-1 text-sm font-bold text-white">
					{currentTab?.label || 'This tab'} couldn't load
				</p>
				<p class="mx-auto mb-4 max-w-md text-xs text-slate-400">
					Something went wrong rendering this section. The rest of the admin portal and the website
					are unaffected. You can try again, or reload if it persists.
				</p>
				<button
					onclick={reset}
					class="rounded-md border border-slate-600 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
				>
					Try Again
				</button>
			</div>
		{/snippet}

		<div class="admin-blue-box rounded-xl border border-[#2a4a8c] p-4 sm:p-6">
			{#if activeTab === 'dashboard'}
				<AdminDashboardTab />
			{:else if activeTab === 'tickets'}
				<SupportTicketsTab />
			{:else if activeTab === 'alerts'}
				<SafetyAlertsTab />
			{:else if activeTab === 'users'}
				<UsersTab />
				<!--
					The original nests the following tabs in a SECOND admin-blue-box panel
					(AdminPortal.jsx wraps each of these components in its own
					`admin-blue-box rounded-xl border p-6` inside the outer one), giving
					them the inner bordered card look. Dashboard, tickets, alerts, users
					and owner render directly in the outer box.
				-->
			{:else if activeTab === 'pages'}
				<div class="admin-blue-box rounded-xl border border-[#2a4a8c] p-6"><PagesTab /></div>
			{:else if activeTab === 'admins'}
				<div class="admin-blue-box rounded-xl border border-[#2a4a8c] p-6"><AdminsTab /></div>
			{:else if activeTab === 'assets'}
				<div class="admin-blue-box rounded-xl border border-[#2a4a8c] p-6">
					<ForgeEngineTab />
				</div>
			{:else if activeTab === 'templates'}
				<div class="admin-blue-box rounded-xl border border-[#2a4a8c] p-6">
					<TemplateControlsTab />
				</div>
			{:else if activeTab === 'cad'}
				<div class="admin-blue-box rounded-xl border border-[#2a4a8c] p-6"><CadStudioTab /></div>
			{:else if activeTab === 'messaging'}
				<div class="admin-blue-box rounded-xl border border-[#2a4a8c] p-6">
					<MessagingTab />
				</div>
			{:else if activeTab === 'agency'}
				<div class="admin-blue-box rounded-xl border border-[#2a4a8c] p-6">
					<ForgeMarketingAgencyTab />
				</div>
			{:else if activeTab === 'placements'}
				<div class="admin-blue-box rounded-xl border border-[#2a4a8c] p-6">
					<AdminMediaPlacementsTab />
				</div>
			{:else if activeTab === 'credits'}
				<div class="admin-blue-box rounded-xl border border-[#2a4a8c] p-6">
					<UserCreditsTab />
				</div>
			{:else if activeTab === 'payments'}
				<div class="admin-blue-box rounded-xl border border-[#2a4a8c] p-6">
					<RecurringPaymentsTab />
				</div>
			{:else if activeTab === 'finance'}
				<div class="admin-blue-box rounded-xl border border-[#2a4a8c] p-6">
					<FinanceTab />
				</div>
			{:else if activeTab === 'brain'}
				<div class="admin-blue-box rounded-xl border border-[#2a4a8c] p-6">
					<BackendRequired
						title="Chloe's Brain"
						entities={['ChloeNeuralPathway', 'ChloeBrainConfig']}
						note="Chloe's AI behaviour is untouched by this migration — the original tab is a CRUD editor over stored pathway records."
					/>
				</div>
			{:else if activeTab === 'owner'}
				<div class="space-y-6">
					<GeminiKeyCard />
					<ChloeUpscaleCard />
					<AdminCloneCard />
					<StripeSettingsTab />
					<OwnerSuperAdminCard />
				</div>
			{/if}
		</div>
	</svelte:boundary>
</div>
