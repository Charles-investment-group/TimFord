<script>
	import X from 'lucide-svelte/icons/x';

	/**
	 * Minimal replacement for the shadcn <Dialog>/<DialogContent> pair the
	 * Base44 admin components use: dark centered panel over a black/80 backdrop,
	 * close X top-right, Escape or backdrop click to dismiss. Styling matches
	 * the original's `bg-slate-900 border-slate-700 text-white` dialogs.
	 *
	 * `panelClass` overrides the panel's background/border for dialogs the
	 * original styles differently (e.g. ForgeEngine's navy `bg-[#0b1c4a]`).
	 *
	 * @type {{ open: boolean, onclose: () => void, title: string, maxWidth?: string, panelClass?: string, children: any, footer?: any }}
	 */
	let {
		open,
		onclose,
		title,
		maxWidth = 'max-w-md',
		panelClass = 'border-slate-700 bg-slate-900',
		children,
		footer
	} = $props();
</script>

<svelte:window
	onkeydown={(e) => {
		if (open && e.key === 'Escape') onclose();
	}}
/>

{#if open}
	<div class="fixed inset-0 z-50 flex items-center justify-center p-4">
		<button
			aria-label="Close dialog"
			onclick={onclose}
			class="absolute inset-0 cursor-default bg-black/80"
		></button>
		<div
			role="dialog"
			aria-modal="true"
			aria-label={title}
			class="relative max-h-[90vh] w-full {maxWidth} {panelClass} space-y-4 overflow-y-auto overflow-x-hidden rounded-lg border p-6 text-white shadow-lg"
		>
			<div class="flex items-start justify-between gap-4">
				<h2 class="text-base font-bold text-white">{title}</h2>
				<button
					onclick={onclose}
					aria-label="Close"
					class="rounded-sm text-slate-400 transition-colors hover:text-white"
				>
					<X class="h-4 w-4" />
				</button>
			</div>
			{@render children()}
			{#if footer}
				<div class="flex justify-end gap-2 pt-1">
					{@render footer()}
				</div>
			{/if}
		</div>
	</div>
{/if}
