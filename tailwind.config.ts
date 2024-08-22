import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"bg-primary": "#EFEEE5",
			},
			backgroundImage: {
				"short-vertical-gradient":
					"linear-gradient(to bottom, white, #999)",
				"noise-background": "url('/noise.png')",
				"cork-background": "url('/cork.png')",
				"trim-side": "url('/trim-side.png')",
				"trim-top": "url('/trim-top.png')",
			},
		},
	},
	plugins: [],
};
export default config;
