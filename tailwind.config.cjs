/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: "rgb(2 44 34)",
                'accent-colour': "rgb(239, 246, 255)"
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
