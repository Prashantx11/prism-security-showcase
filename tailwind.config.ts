
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: '#000000',
				foreground: '#ffffff',
				primary: {
					DEFAULT: '#00ff8c',
					foreground: '#000000'
				},
				secondary: {
					DEFAULT: '#0a192f',
					foreground: '#ffffff'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: '#1a1a1a',
					foreground: '#888888'
				},
				accent: {
					DEFAULT: '#00ff8c',
					foreground: '#000000'
				},
				popover: {
					DEFAULT: '#0a192f',
					foreground: '#ffffff'
				},
				card: {
					DEFAULT: '#0a192f',
					foreground: '#ffffff'
				},
				cyber: {
					green: '#00ff8c',
					navy: '#0a192f',
					dark: '#000000',
					gray: '#1a1a1a'
				}
			},
			fontFamily: {
				'fira': ['Fira Code', 'monospace'],
				'space': ['Space Mono', 'monospace']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'glow': {
					'0%, 100%': { boxShadow: '0 0 5px #00ff8c, 0 0 10px #00ff8c, 0 0 15px #00ff8c' },
					'50%': { boxShadow: '0 0 10px #00ff8c, 0 0 20px #00ff8c, 0 0 30px #00ff8c' }
				},
				'typewriter': {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				},
				'blink': {
					'0%, 50%': { opacity: '1' },
					'51%, 100%': { opacity: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'scan': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100vw)' }
				}
			},
			animation: {
				'glow': 'glow 2s ease-in-out infinite',
				'typewriter': 'typewriter 3s steps(40) 1s forwards',
				'blink': 'blink 1s infinite',
				'float': 'float 3s ease-in-out infinite',
				'scan': 'scan 2s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
