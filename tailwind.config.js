/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			textShadow: {
				outline: "2px 2px 0px rgba(0, 0, 0, 1)",
			},
			fontFamily: {
				kardia: ["Kardia", "sans-serif"],
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				".text-outline-black": {
					textShadow: "4px 4px 2px rgba(0, 0, 0, 1)",
				},
				".text-outline-white": {
					textShadow: "2px 2px 0px rgba(255, 255, 255, 1)",
				},
				".text-outline-blue": {
					textShadow: "4px 4px 2px rgba(43, 96, 123, 1)",
				},
			};
			addUtilities(newUtilities, ["responsive", "hover"]);
		},
	],
};
