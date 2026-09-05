<!--
	Safety Alerts section, extracted from the alerts branch of
	TimFord-Mats/src/pages/AdminPortal.jsx.

	The whole section is a list over base44.entities.SafetyAlert (rows with
	severity/status badges and a detail dialog with status updates + admin
	notes). None of it is reachable without alert data, so this renders the
	list area with a can't-load line in place of the original's "No safety
	alerts." — which would assert an empty queue we never fetched. Rows and
	dialog arrive with the backend.
-->
<div class="space-y-2">
	<p class="py-8 text-center text-sm text-slate-400">
		Safety alerts can't be loaded — the backend isn't connected.
	</p>
</div>
