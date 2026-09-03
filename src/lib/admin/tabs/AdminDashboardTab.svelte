<script>
	import MessageSquare from 'lucide-svelte/icons/message-square';
	import Send from 'lucide-svelte/icons/send';

	/**
	 * Migrated from TimFord-Mats/src/components/admin/AdminDashboardTab.jsx —
	 * the "Team Wall": a shared comment feed over the Base44 `AdminComment`
	 * entity.
	 *
	 * The UI (heading, panel, composer, Post button, message area) is ported
	 * faithfully. The data layer is not available, so two things differ on
	 * purpose:
	 *
	 *   - Posting: the original creates an AdminComment and clears the box. With
	 *     no backend there is nowhere shared to put a note (localStorage would
	 *     only pretend — teammates would never see it), so Post explains that
	 *     instead of appearing to succeed.
	 *   - Empty state: the original's "No messages yet — start the conversation."
	 *     asserts the wall is empty. We never fetched the wall, so that could be
	 *     false; the same slot says the wall can't be loaded instead.
	 *
	 * When a backend lands, this component swaps those two spots for real
	 * queries/mutations and the rest stays as-is.
	 */
	let body = $state('');
	let postBlocked = $state(false);
</script>

<div>
	<h3 class="mb-3 flex items-center gap-2 text-sm font-bold text-white">
		<MessageSquare class="h-4 w-4 text-cyan-400" /> Team Wall
	</h3>
	<div class="space-y-3 rounded-xl border border-[#2a4a8c] bg-[#15295c] p-3.5 sm:p-4">
		<div class="flex flex-col gap-2">
			<textarea
				bind:value={body}
				oninput={() => (postBlocked = false)}
				placeholder="Post a note for the team…"
				class="min-h-[80px] w-full resize-none rounded-md border border-[#3a5a9a] bg-white px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#7088b8]"
			></textarea>
			{#if postBlocked}
				<p class="text-xs leading-relaxed text-amber-400">
					Notes can't be posted yet — the Team Wall is stored in the Base44 <code
						class="font-mono">AdminComment</code
					> backend, which this site isn't connected to. Your note hasn't been sent anywhere.
				</p>
			{/if}
			<div class="flex justify-end">
				<button
					onclick={() => body.trim() && (postBlocked = true)}
					disabled={!body.trim()}
					class="inline-flex h-8 items-center gap-1.5 rounded-md bg-primary px-3 text-xs font-medium text-white transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
				>
					<Send class="h-3.5 w-3.5" /> Post
				</button>
			</div>
		</div>
		<div class="max-h-[420px] space-y-2 overflow-y-auto pr-1">
			<p class="py-4 text-center text-xs text-slate-400">
				Team Wall messages can't be loaded — the backend isn't connected.
			</p>
		</div>
	</div>
</div>
