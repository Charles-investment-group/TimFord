<script>
	import '$lib/admin/admin.css';

	let { children } = $props();
</script>

<!--
	`.admin-root` scopes the Admin Portal's theme tokens and its replacement for
	Tailwind preflight (see src/lib/admin/admin.css). Everything the portal
	renders must live inside it.

	The original Base44 portal owned the whole document and set
	`min-h-screen bg-white text-slate-900 overflow-x-hidden` on its outermost
	div; that class list is kept here so the page looks the same.
-->
<div class="admin-root min-h-screen overflow-x-hidden bg-white text-slate-900">
	{@render children()}
</div>
