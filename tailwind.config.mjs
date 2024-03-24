/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ["Space Grotesk", "san-serif"]
		},
		colors: {
			"light-gray": "hsl(270, 3%, 87%)",
			"gray": "hsl(278, 6%, 55%)",
			"violet": "hsl(249, 99%, 64%)",
			"light-violet": "hsl(270, 3%, 87%)",
			"dark-violet": "hsl(279, 6%, 55%)",
			"very-dark-violet": "hsl(278, 68%, 11%)",
			"saturate-violet": "hsl(278, 68%, 30%)",
			"red": "hsl(0, 100%, 66%)",
			"white": "hsl(0, 0%, 100%)"
		},
		extend: {
			backgroundImage: {
				"pattern-desktop": "url(/images/bg-main-desktop.webp)",
				"front-card": "url(/images/bg-card-front.webp)",
				"back-card": "url(/images/bg-card-back.webp)"
			},
			boxShadow: {
				card: "8px 32px 128px -16px rgba(0, 0, 0, 0.25)"
			},
			screens: {
				tablet: { max: "980px" },
				mobile: { max: "490px" }
			},
			container: {
				screens: {
					xl: "1131px",
				},
				padding: 10,
				center: true
			}
		},
	},
	plugins: [],
}
