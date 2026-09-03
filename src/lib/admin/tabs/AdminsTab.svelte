<script>
	import Shield from 'lucide-svelte/icons/shield';
	import UserPlus from 'lucide-svelte/icons/user-plus';
	import ExternalLink from 'lucide-svelte/icons/external-link';
	import Download from 'lucide-svelte/icons/download';
	import UserCog from 'lucide-svelte/icons/user-cog';
	import FileText from 'lucide-svelte/icons/file-text';
	import Send from 'lucide-svelte/icons/send';
	import Dialog from '$lib/admin/ui/Dialog.svelte';

	/**
	 * Migrated from TimFord-Mats/src/components/admin/AdminsTab.jsx (364 LOC).
	 *
	 * Ported UI: header, action buttons, the two-column Manage Admins /
	 * Applications layout, and the "Add Admin" invite dialog.
	 *
	 * Backend-dependent — every action here needs base44 (AdminInvite /
	 * AdminApplication entities, auth.me(), the SendEmail integration,
	 * users.inviteUser). So, honestly handled:
	 *   - Both list columns show can't-load lines instead of the original's
	 *     "No admins yet." / "No applications yet." empty states, and the (n)
	 *     counts render as (—) — those numbers require fetches we cannot make.
	 *   - The invite dialog opens and its form works, but "Send Application
	 *     Link" explains that nothing can be sent rather than pretending.
	 *   - "Export CSV" is disabled — exactly what the original does with zero
	 *     applications (`disabled={!applications.length}`).
	 *   - "Preview Application" opened /admin-apply in the original; that page
	 *     hasn't been migrated, so the button reports it instead of opening the
	 *     404 fallback.
	 *   - Admin-row actions (Delegate / Email / Remove), the application cards
	 *     (View / Approve / Reject), and their dialogs are only reachable with
	 *     row data; they arrive with the backend rather than as dead markup.
	 */
	const ROLES = [
		{ id: 'support', label: 'Support Agent' },
		{ id: 'moderator', label: 'Moderator' },
		{ id: 'admin', label: 'Admin' }
	];

	let inviteOpen = $state(false);
	let invite = $state({ invitee_name: '', invitee_email: '', role: 'support' });
	let inviteBlocked = $state(false);
	let previewBlocked = $state(false);
</script>

<div class="space-y-6">
	<div class="flex flex-wrap items-center justify-between gap-3">
		<div>
			<h3 class="flex items-center gap-2 text-lg font-bold text-white">
				<Shield class="h-5 w-5 text-blue-400" /> Admin Management
			</h3>
			<p class="mt-0.5 text-sm text-slate-400">
				Add admins, delegate access, send application links, and review applications — all in one
				place.
			</p>
		</div>
		<div class="flex flex-wrap items-center gap-2">
			<button
				onclick={() => {
					inviteOpen = true;
					inviteBlocked = false;
				}}
				class="inline-flex h-9 items-center gap-2 rounded-md bg-blue-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
			>
				<UserPlus class="h-4 w-4" /> Add Admin
			</button>
			<button
				onclick={() => (previewBlocked = true)}
				class="inline-flex h-9 items-center gap-2 rounded-md border border-slate-600 px-4 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
			>
				<ExternalLink class="h-4 w-4" /> Preview Application
			</button>
			<button
				disabled
				title="Disabled — applications can't be loaded without the backend (the original also disables this with no applications)"
				class="inline-flex h-9 items-center gap-2 rounded-md border border-slate-600 px-4 text-sm font-medium text-slate-300 opacity-50"
			>
				<Download class="h-4 w-4" /> Export CSV
			</button>
		</div>
	</div>

	{#if previewBlocked}
		<p class="text-xs leading-relaxed text-amber-400">
			The public application page (<code class="font-mono">/admin-apply</code>) hasn't been migrated
			from Base44 yet, so there is nothing to preview.
		</p>
	{/if}

	<div class="grid gap-6 lg:grid-cols-2">
		<div>
			<h4 class="mb-3 flex items-center gap-2 font-bold text-white">
				<UserCog class="h-4 w-4 text-slate-400" /> Manage Admins (—)
			</h4>
			<div class="max-h-[560px] space-y-2 overflow-y-auto pr-1">
				<p class="py-8 text-center text-sm text-slate-500">
					Admins can't be loaded — the backend isn't connected.
				</p>
			</div>
		</div>

		<div>
			<h4 class="mb-3 flex items-center gap-2 font-bold text-white">
				<FileText class="h-4 w-4 text-slate-400" /> Applications (—)
			</h4>
			<div class="max-h-[560px] space-y-2 overflow-y-auto pr-1">
				<p class="py-8 text-center text-sm text-slate-500">
					Applications can't be loaded — the backend isn't connected.
				</p>
			</div>
		</div>
	</div>

	<Dialog
		open={inviteOpen}
		onclose={() => (inviteOpen = false)}
		title="Add Admin — Send Application Link"
	>
		<p class="text-xs text-slate-400">
			We'll email them a link to fill out the admin application. After they apply, you can approve
			and grant portal access.
		</p>
		<div class="grid grid-cols-2 gap-3">
			<div>
				<p class="mb-1 text-xs font-semibold text-slate-300">Name</p>
				<input
					bind:value={invite.invitee_name}
					placeholder="Full name"
					class="h-9 w-full rounded-md border border-slate-600 bg-slate-800 px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
				/>
			</div>
			<div>
				<p class="mb-1 text-xs font-semibold text-slate-300">Role</p>
				<select
					bind:value={invite.role}
					class="h-9 w-full rounded-md border border-slate-600 bg-slate-800 px-3 text-sm text-white outline-none focus:border-blue-500"
				>
					{#each ROLES as role (role.id)}
						<option value={role.id}>{role.label}</option>
					{/each}
				</select>
			</div>
		</div>
		<div>
			<p class="mb-1 text-xs font-semibold text-slate-300">Email *</p>
			<input
				type="email"
				bind:value={invite.invitee_email}
				oninput={() => (inviteBlocked = false)}
				placeholder="teammate@example.com"
				class="h-9 w-full rounded-md border border-slate-600 bg-slate-800 px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
			/>
		</div>
		{#if inviteBlocked}
			<p class="text-xs leading-relaxed text-amber-400">
				The application link can't be sent — inviting an admin needs the Base44 backend
				(<code class="font-mono">AdminInvite</code>, email sending, and the signed-in owner), which
				this site isn't connected to. Nothing was sent or saved.
			</p>
		{/if}
		{#snippet footer()}
			<button
				onclick={() => (inviteOpen = false)}
				class="inline-flex h-8 items-center rounded-md border border-slate-600 px-3 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
			>
				Cancel
			</button>
			<button
				onclick={() => (inviteBlocked = true)}
				disabled={!invite.invitee_email}
				class="inline-flex h-8 items-center gap-1.5 rounded-md bg-blue-600 px-3 text-xs font-medium text-white transition-colors hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
			>
				<Send class="h-4 w-4" /> Send Application Link
			</button>
		{/snippet}
	</Dialog>
</div>
