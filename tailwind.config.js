/**
 * Tailwind is used ONLY by the Admin Portal, which was migrated from the
 * original Base44 (React) admin app. The rest of the TimFord site uses plain
 * scoped <style> blocks and must not be affected, so:
 *
 *   - `content` only scans the admin route and admin components, so no
 *     utilities are generated from landing-page markup.
 *   - `preflight` is DISABLED. Tailwind's global reset would otherwise
 *     restyle every existing landing-page element. A narrower reset scoped to
 *     `.admin-root` lives in src/lib/admin/admin.css instead.
 *
 * Theme values below are ported from the original Base44 tailwind.config.js so
 * the portal keeps its original appearance.
 *
 * @type {import('tailwindcss').Config}
 */
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
	darkMode: ['class'],
	content: ['./src/routes/admin/**/*.{svelte,js}', './src/lib/admin/**/*.{svelte,js}'],
	corePlugins: {
		preflight: false
	},
	theme: {
		extend: {
			fontFamily: {
				inter: ['var(--font-inter)'],
				mono: ['var(--font-mono)']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					1: 'hsl(var(--chart-1))',
					2: 'hsl(var(--chart-2))',
					3: 'hsl(var(--chart-3))',
					4: 'hsl(var(--chart-4))',
					5: 'hsl(var(--chart-5))'
				}
			},
			keyframes: {
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px 0px hsl(199 89% 60% / 0.3)' },
					'50%': { boxShadow: '0 0 40px 8px hsl(199 89% 60% / 0.5)' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				float: 'float 6s ease-in-out infinite'
			}
		}
	},
	plugins: [tailwindcssAnimate]
};
