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
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
