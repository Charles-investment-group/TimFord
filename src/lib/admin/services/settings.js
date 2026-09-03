/**
 * Admin settings store — ported from the `Settings` export in
 * TimFord-Mats/src/lib/api.js.
 *
 * The Base44 original kept these in localStorage under a single
 * "forgeai_settings" object, with `API_BASE = null` and a comment describing
 * how to swap in a real backend later. That is reproduced exactly: same storage
 * key, same shape, same defaults, so a browser that used the original portal
 * keeps its saved values.
 *
 * This is genuinely client-side state in the original — it is not a stand-in
 * for a backend, so nothing here is faked.
 *
 * Guarded for SSR (no localStorage during prerender) and for browsers that
 * block site data, where reads return defaults and writes are dropped.
 */

const KEY = 'forgeai_settings';

const canStore = () => {
	try {
		return typeof localStorage !== 'undefined';
	} catch {
		return false;
	}
};

function loadAll() {
	if (!canStore()) return {};
	try {
		return JSON.parse(localStorage.getItem(KEY)) ?? {};
	} catch {
		return {};
	}
}

export const Settings = {
	get(key, defaultValue) {
		const all = loadAll();
		return all[key] !== undefined ? all[key] : defaultValue;
	},
	set(key, value) {
		const all = loadAll();
		all[key] = value;
		if (canStore()) {
			try {
				localStorage.setItem(KEY, JSON.stringify(all));
			} catch {
				/* storage unavailable — value is not persisted */
			}
		}
		return all;
	},
	templatesEnabled(category) {
		return Settings.get(`templates_${category}_enabled`, true) !== false;
	},
	setTemplatesEnabled(category, enabled) {
		Settings.set(`templates_${category}_enabled`, enabled);
	}
};

/** Standalone localStorage keys the original used outside the settings object. */
export const rawStorage = {
	get(key) {
		if (!canStore()) return '';
		try {
			return localStorage.getItem(key) || '';
		} catch {
			return '';
		}
	},
	set(key, value) {
		if (!canStore()) return;
		try {
			localStorage.setItem(key, value);
		} catch {
			/* storage unavailable */
		}
	},
	remove(key) {
		if (!canStore()) return;
		try {
			localStorage.removeItem(key);
		} catch {
			/* storage unavailable */
		}
	},
	keys() {
		if (!canStore()) return [];
		try {
			return Object.keys(localStorage);
		} catch {
			return [];
		}
	}
};
