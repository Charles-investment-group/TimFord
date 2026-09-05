<!--
	Users section, extracted from the users branch of
	TimFord-Mats/src/pages/AdminPortal.jsx.

	The whole section is a list over base44.entities.User (avatar initial, name,
	email, role badge, joined date). Nothing is reachable without user data, so
	this renders the list area with a can't-load line in place of the original's
	"No users yet." — which would assert zero users, something we can't know
	without fetching. Rows arrive with the backend.

	Note: the original also aliases the owner's real name/email here
	(OWNER_REAL_EMAIL / OWNER_ALIAS) — deliberately not ported; see the shell.
-->
<div class="space-y-2">
	<p class="py-8 text-center text-sm text-slate-400">
		Users can't be loaded — the backend isn't connected.
	</p>
</div>
