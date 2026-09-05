<script>
	/**
	 * The pill toggle defined identically inside both TemplateControlsTab.jsx and
	 * CadStudioTab.jsx in the original. Shared here rather than duplicated.
	 *
	 * @type {{ on: boolean, onclick: () => void, label?: string }}
	 */
	let { on, onclick, label = 'Toggle' } = $props();
</script>

<button
	{onclick}
	type="button"
	role="switch"
	aria-checked={on}
	aria-label={label}
	class="relative h-7 w-12 shrink-0 rounded-full transition-colors {on
		? 'bg-emerald-500'
		: 'bg-slate-600'}"
>
	<span
		class="absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow transition-transform {on
			? 'translate-x-5'
			: ''}"
	></span>
</button>
