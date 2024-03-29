import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
	darkMode: "class",
	corePlugins: {
		// disable aspect ratio as per docs -> @tailwindcss/aspect-ratio
		aspectRatio: false,
		// disable some core plugins as they are included in the css, even when unused
		touchAction: false,
		ringOffsetWidth: false,
		ringOffsetColor: false,
		scrollSnapType: false,
		borderOpacity: false,
		textOpacity: false,
		fontVariantNumeric: false,
	},
	theme: {
		extend: {
			fontSize: {
				"4xl": "4.768rem",
				"3xl": "3.815rem",
				"2xl": "3.052rem",
				"xl": "2.441rem",
				"lg": "1.953rem",
				"md": "1.563rem",
				"base": "1.25rem",
				"sm": "1rem",
				"xs": "0.8rem",
			},
			spacing: {
				"quarter": "0.375rem",
				"half": "0.75rem",
				"one": "1.5rem",
				"two": "3rem",
				"three": "4.5rem",
				"four": "6rem",
				"five": "7.5rem",
				"six": "9rem",
				"eight": "12rem",
				"twelve": "18rem",
				"sixteen": "24rem"
			},
			colors: {
				bgColor: "hsl(var(--theme-bg) / <alpha-value>)",
				textColor: "hsl(var(--theme-text) / <alpha-value>)",
				link: "hsl(var(--theme-link) / <alpha-value>)",
				accent: "hsl(var(--theme-accent) / <alpha-value>)",
				"accent-2": "hsl(var(--theme-accent-2) / <alpha-value>)",
				quote: "hsl(var(--theme-quote) / <alpha-value>)",
				secondary: "hsl(var(--theme-secondary) / <alpha-value>)",
			},
			fontFamily: {
				// Add any custom fonts here
				sans: [...fontFamily.sans],
				serif: ['"Crimson Pro Variable"', ...fontFamily.serif],
			},
			transitionProperty: {
				height: "height",
			},
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			// Remove above once tailwindcss exposes theme type
			typography: (theme) => ({
				cactus: {
					css: {
						"--tw-prose-body": theme("colors.textColor / 1"),
						"--tw-prose-headings": theme("colors.accent-2 / 1"),
						"--tw-prose-links": theme("colors.textColor / 1"),
						"--tw-prose-bold": theme("colors.textColor / 1"),
						"--tw-prose-bullets": theme("colors.textColor / 1"),
						"--tw-prose-quotes": theme("colors.quote / 1"),
						"--tw-prose-code": theme("colors.textColor / 1"),
						"--tw-prose-hr": "0.5px dashed #666",
						"--tw-prose-th-borders": "#666",
					},
				},
				DEFAULT: {
					css: {
						a: {
							"@apply cactus-link no-underline": "",
						},
						strong: {
							fontWeight: "700",
						},
						code: {
							border: "1px dotted #666",
							borderRadius: "2px",
						},
						blockquote: {
							borderLeftWidth: "0",
						},
						hr: {
							borderTopStyle: "dashed",
						},
						thead: {
							borderBottomWidth: "none",
						},
						"thead th": {
							fontWeight: "700",
							borderBottom: "1px dashed #666",
						},
						"tbody tr": {
							borderBottomWidth: "none",
						},
						tfoot: {
							borderTop: "1px dashed #666",
						},
						sup: {
							"@apply ms-0.5": "",
							a: {
								"@apply bg-none": "",
								"&:hover": {
									"@apply text-link no-underline bg-none": "",
								},
								"&:before": {
									content: "'['",
								},
								"&:after": {
									content: "']'",
								},
							},
						},
					},
				},
				sm: {
					css: {
						code: {
							fontSize: theme("fontSize.sm")[0],
							fontWeight: "400",
						},
					},
				},
			}),
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
		plugin(function ({ addComponents }) {
			addComponents({
				".cactus-link": {
					"@apply bg-[size:100%_6px] bg-bottom text-base bg-repeat-x": {},
					backgroundImage:
						"linear-gradient(transparent,transparent 5px,hsl(var(--theme-text)) 5px,hsl(var(--theme-text)))",
					"&:hover": {
						backgroundImage:
							"linear-gradient(transparent,transparent 4px,hsl(var(--theme-link)) 4px,hsl(var(--theme-link)))",
					},
				},
				".title": {
					"@apply text-2xl font-semibold text-accent-2": {},
				},
			});
		}),
	],
} satisfies Config;
