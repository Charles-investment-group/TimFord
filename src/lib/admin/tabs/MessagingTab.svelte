<script>
	import Mail from 'lucide-svelte/icons/mail';
	import Users from 'lucide-svelte/icons/users';
	import Bell from 'lucide-svelte/icons/bell';
	import Clock from 'lucide-svelte/icons/clock';
	import Send from 'lucide-svelte/icons/send';

	/**
	 * Migrated from TimFord-Mats/src/components/admin/MessagingTab.jsx (257 LOC).
	 *
	 * Ported UI, all working locally: Single User / All Users mode toggle, the
	 * Quick Notifications and General Templates buttons (they really fill the
	 * form, exactly like the original), recipient fields, the 7-option message
	 * type select including the conditional Discount Code / Discount % fields,
	 * subject/body, and the original's disabled-until-valid Send button logic.
	 *
	 * Backend-dependent, honestly handled:
	 *   - Sending needs base44 SendEmail + AdminMessage.create + auth.me(); the
	 *     Send button explains that instead of pretending to send.
	 *   - The user count in "All Users (…)" comes from base44.entities.User, so
	 *     it renders (—) rather than a made-up number.
	 *   - Send History reads AdminMessage; it shows a can't-load line instead of
	 *     "No messages sent yet." (which would assert an empty history).
	 *     History cards arrive with the backend.
	 */
	const MSG_TYPES = [
		{ id: 'announcement', label: 'Announcement' },
		{ id: 'promo', label: 'Promotion' },
		{ id: 'discount', label: 'Discount Code' },
		{ id: 'update', label: 'Platform Update' },
		{ id: 'personal', label: 'Personal Message' },
		{ id: 'credits', label: 'New Credits Alert' },
		{ id: 'contest', label: 'Contest / Giveaway' }
	];

	const QUICK_NOTIFICATIONS = [
		{
			label: '🎁 Credits Added',
			subject: 'You just received bonus credits!',
			body: "Hey [name]!\n\nGreat news — we've added bonus credits to your ForgeAI account. Log in now to use them before they expire!\n\nKeep building,\nThe ForgeAI Team"
		},
		{
			label: '🏆 Contest Alert',
			subject: 'New contest — win big on ForgeAI!',
			body: "Hey [name]!\n\nWe're running an exciting new contest on ForgeAI and we want YOU to participate!\n\n[Contest details here]\n\nDeadline: [Date]\n\nGood luck!\nThe ForgeAI Team"
		},
		{
			label: '🎉 Promo Live',
			subject: "Limited-time promo — don't miss out!",
			body: "Hey [name]!\n\nFor a limited time, we're offering a special promotion just for our members.\n\n[Promo details here]\n\nUse code: [CODE] at checkout.\n\nThe ForgeAI Team"
		}
	];

	const TEMPLATES = [
		{
			label: '🎉 New Feature Drop',
			subject: 'Big news — we just launched something amazing!',
			body: "Hey [name]!\n\nWe've been working hard behind the scenes and just pushed a major update to ForgeAI. Here's what's new:\n\n• [Feature 1]\n• [Feature 2]\n• [Feature 3]\n\nLog in and check it out — we think you're going to love it.\n\nAlways building,\nThe ForgeAI Team"
		},
		{
			label: '💸 Discount Offer',
			subject: "Here's a special discount just for you",
			body: "Hey [name]!\n\nAs a valued ForgeAI member, we're giving you an exclusive [X]% off your next upgrade.\n\nUse code: [CODE] at checkout.\n\nThis offer is only available for the next 48 hours — don't miss it!\n\nThe ForgeAI Team"
		},
		{
			label: '🚀 Platform Update',
			subject: "ForgeAI just got even better — here's what changed",
			body: "Hi [name],\n\nWe're constantly improving ForgeAI to make your building experience faster, smarter, and more powerful.\n\nThis week's updates:\n\n[Update details here]\n\nWe're committed to being the best AI builder on the planet. Thank you for being part of the journey.\n\n— Chloe & the ForgeAI Team"
		}
	];

	let sendMode = $state('single');
	let form = $state({
		recipient_email: '',
		recipient_name: '',
		subject: '',
		body: '',
		message_type: 'announcement',
		discount_code: '',
		discount_percent: ''
	});
	let sendBlocked = $state(false);

	const applyTemplate = (t) => {
		form.subject = t.subject;
		form.body = t.body;
		sendBlocked = false;
	};

	const canSend = $derived(
		!!form.subject && !!form.body && (sendMode !== 'single' || !!form.recipient_email)
	);

	const inputCls =
		'h-8 w-full rounded-md border border-input bg-transparent px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-primary';
</script>

<div class="grid gap-6 lg:grid-cols-2">
	<!-- Compose Panel -->
	<div class="space-y-4">
		<div class="flex items-center justify-between">
			<h3 class="flex items-center gap-2 text-base font-bold">
				<Mail class="h-4 w-4 text-primary" /> Compose Message
			</h3>
			<div class="flex overflow-hidden rounded-lg border border-border text-xs">
				<button
					onclick={() => (sendMode = 'single')}
					class="px-3 py-1.5 font-medium transition-colors {sendMode === 'single'
						? 'bg-primary text-white'
						: 'text-muted-foreground hover:bg-white/5'}"
				>
					Single User
				</button>
				<button
					onclick={() => (sendMode = 'broadcast')}
					class="flex items-center gap-1 px-3 py-1.5 font-medium transition-colors {sendMode ===
					'broadcast'
						? 'bg-primary text-white'
						: 'text-muted-foreground hover:bg-white/5'}"
				>
					<Users class="h-3 w-3" /> All Users (—)
				</button>
			</div>
		</div>

		<!-- Quick Notifications -->
		<div class="rounded-xl border border-emerald-200 bg-emerald-50 p-3">
			<p class="mb-2 flex items-center gap-1.5 text-xs font-bold text-emerald-800">
				<Bell class="h-3.5 w-3.5" /> Quick Notifications (Credits, Contests, Promos)
			</p>
			<div class="flex flex-wrap gap-1.5">
				{#each QUICK_NOTIFICATIONS as t (t.label)}
					<button
						onclick={() => applyTemplate(t)}
						class="rounded-lg border border-emerald-200 bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-800 transition-colors hover:bg-emerald-200"
					>
						{t.label}
					</button>
				{/each}
			</div>
		</div>

		<!-- Templates -->
		<div>
			<p class="mb-2 text-xs font-semibold text-muted-foreground">General Templates</p>
			<div class="flex flex-wrap gap-1.5">
				{#each TEMPLATES as t (t.label)}
					<button
						onclick={() => applyTemplate(t)}
						class="rounded-lg border border-transparent bg-muted px-2.5 py-1 text-xs transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
					>
						{t.label}
					</button>
				{/each}
			</div>
		</div>

		{#if sendMode === 'single'}
			<div class="grid grid-cols-2 gap-3">
				<div>
					<p class="mb-1 text-xs font-semibold">Recipient Email *</p>
					<input bind:value={form.recipient_email} placeholder="user@example.com" class={inputCls} />
				</div>
				<div>
					<p class="mb-1 text-xs font-semibold">Recipient Name</p>
					<input bind:value={form.recipient_name} placeholder="Their name" class={inputCls} />
				</div>
			</div>
		{/if}

		<div>
			<p class="mb-1 text-xs font-semibold">Message Type</p>
			<select bind:value={form.message_type} class="{inputCls} [&>option]:bg-[#0b1c4a]">
				{#each MSG_TYPES as t (t.id)}
					<option value={t.id}>{t.label}</option>
				{/each}
			</select>
		</div>

		{#if form.message_type === 'discount'}
			<div class="grid grid-cols-2 gap-3">
				<div>
					<p class="mb-1 text-xs font-semibold">Discount Code</p>
					<input
						value={form.discount_code}
						oninput={(e) => (form.discount_code = e.currentTarget.value.toUpperCase())}
						placeholder="FORGE25"
						class="{inputCls} font-mono"
					/>
				</div>
				<div>
					<p class="mb-1 text-xs font-semibold">Discount %</p>
					<input
						type="number"
						bind:value={form.discount_percent}
						placeholder="25"
						min="1"
						max="100"
						class={inputCls}
					/>
				</div>
			</div>
		{/if}

		<div>
			<p class="mb-1 text-xs font-semibold">Subject *</p>
			<input bind:value={form.subject} placeholder="Email subject line" class={inputCls} />
		</div>

		<div>
			<p class="mb-1 text-xs font-semibold">
				Message Body * <span class="font-normal text-muted-foreground"
					>(use [name] for personalization)</span
				>
			</p>
			<textarea
				bind:value={form.body}
				placeholder="Write your message here..."
				class="min-h-[140px] w-full resize-none rounded-md border border-input bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-primary"
			></textarea>
		</div>

		{#if sendBlocked}
			<p class="text-xs leading-relaxed text-amber-400">
				Nothing was sent — sending needs the Base44 backend (the SendEmail integration, the
				<code class="font-mono">AdminMessage</code> history, and the signed-in sender), which this
				site isn't connected to.
			</p>
		{/if}

		<button
			onclick={() => (sendBlocked = true)}
			disabled={!canSend}
			class="flex w-full items-center justify-center gap-2 rounded-md bg-primary py-2 text-sm font-bold text-white transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
		>
			<Send class="h-4 w-4" />
			{sendMode === 'broadcast' ? 'Broadcast to All Users' : 'Send Email'}
		</button>
	</div>

	<!-- History Panel -->
	<div>
		<h3 class="mb-4 flex items-center gap-2 text-base font-bold">
			<Clock class="h-4 w-4 text-muted-foreground" /> Send History
		</h3>
		<div class="max-h-[500px] space-y-2 overflow-y-auto">
			<p class="py-8 text-center text-sm text-muted-foreground">
				Send history can't be loaded — the backend isn't connected.
			</p>
		</div>
	</div>
</div>
