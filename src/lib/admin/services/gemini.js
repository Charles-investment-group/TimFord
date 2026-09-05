/**
 * Gemini helper — ported from TimFord-Mats/src/lib/gemini.js.
 *
 * The key is supplied by the operator at runtime and kept in THEIR OWN browser's
 * localStorage; it is never committed, never bundled, and never sent anywhere
 * except Google. That is the original design and it works unchanged on static
 * hosting, so no backend is required.
 *
 * Only getGeminiKey/setGeminiKey/testGeminiKey are ported here — the Admin
 * Portal's Owner tab is the only consumer. `generateWithGemini` belongs to
 * Chloe's runtime, which is out of scope for this migration.
 */
import { rawStorage } from './settings.js';

const GEMINI_MODEL = 'gemini-2.0-flash';
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

export const GEMINI_KEY_STORAGE = 'forgeai_gemini_key';

export function getGeminiKey() {
	return rawStorage.get(GEMINI_KEY_STORAGE);
}

export function setGeminiKey(key) {
	if (key && key.trim()) rawStorage.set(GEMINI_KEY_STORAGE, key.trim());
	else rawStorage.remove(GEMINI_KEY_STORAGE);
}

/** Minimal call to verify a key works. Returns { ok, error }. */
export async function testGeminiKey(key) {
	if (!key) return { ok: false, error: 'No API key provided.' };
	try {
		const res = await fetch(`${ENDPOINT}?key=${key}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				contents: [{ parts: [{ text: 'Reply with the single word: OK' }] }],
				generationConfig: { maxOutputTokens: 10 }
			})
		});
		if (!res.ok) {
			const data = await res.json().catch(() => ({}));
			return { ok: false, error: data?.error?.message || `Gemini error ${res.status}` };
		}
		return { ok: true, error: null };
	} catch (e) {
		return { ok: false, error: e.message || 'Network error reaching Google.' };
	}
}
