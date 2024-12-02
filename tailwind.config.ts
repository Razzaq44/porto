import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: {
  				'50': 'hsl(var(--background-50))',
  				'100': 'hsl(var(--background-100))',
  				'200': 'hsl(var(--background-200))',
  				'300': 'hsl(var(--background-300))',
  				'400': 'hsl(var(--background-400))',
  				'500': 'hsl(var(--background-500))',
  				'600': 'hsl(var(--background-600))',
  				'700': 'hsl(var(--background-700))',
  				'800': 'hsl(var(--background-800))',
  				'900': 'hsl(var(--background-900))',
  				'950': 'hsl(var(--background-950))',
  				DEFAULT: 'hsl(var(--background))'
  			},
  			foreground: {
  				'50': 'hsl(var(--text-50))',
  				'100': 'hsl(var(--text-100))',
  				'200': 'hsl(var(--text-200))',
  				'300': 'hsl(var(--text-300))',
  				'400': 'hsl(var(--text-400))',
  				'500': 'hsl(var(--text-500))',
  				'600': 'hsl(var(--text-600))',
  				'700': 'hsl(var(--text-700))',
  				'800': 'hsl(var(--text-800))',
  				'900': 'hsl(var(--text-900))',
  				'950': 'hsl(var(--text-950))',
  				DEFAULT: 'hsl(var(--foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				'50': 'hsl(var(--primary-50))',
  				'100': 'hsl(var(--primary-100))',
  				'200': 'hsl(var(--primary-200))',
  				'300': 'hsl(var(--primary-300))',
  				'400': 'hsl(var(--primary-400))',
  				'500': 'hsl(var(--primary-500))',
  				'600': 'hsl(var(--primary-600))',
  				'700': 'hsl(var(--primary-700))',
  				'800': 'hsl(var(--primary-800))',
  				'900': 'hsl(var(--primary-900))',
  				'950': 'hsl(var(--primary-950))',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'50': 'hsl(var(--secondary-50))',
  				'100': 'hsl(var(--secondary-100))',
  				'200': 'hsl(var(--secondary-200))',
  				'300': 'hsl(var(--secondary-300))',
  				'400': 'hsl(var(--secondary-400))',
  				'500': 'hsl(var(--secondary-500))',
  				'600': 'hsl(var(--secondary-600))',
  				'700': 'hsl(var(--secondary-700))',
  				'800': 'hsl(var(--secondary-800))',
  				'900': 'hsl(var(--secondary-900))',
  				'950': 'hsl(var(--secondary-950))',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				'50': 'hsl(var(--accent-50))',
  				'100': 'hsl(var(--accent-100))',
  				'200': 'hsl(var(--accent-200))',
  				'300': 'hsl(var(--accent-300))',
  				'400': 'hsl(var(--accent-400))',
  				'500': 'hsl(var(--accent-500))',
  				'600': 'hsl(var(--accent-600))',
  				'700': 'hsl(var(--accent-700))',
  				'800': 'hsl(var(--accent-800))',
  				'900': 'hsl(var(--accent-900))',
  				'950': 'hsl(var(--accent-950))',
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
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			shine: 'shine var(--duration) infinite linear',
  			'background-position-spin': 'background-position-spin 3000ms infinite alternate',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			meteor: 'meteor 5s linear infinite'
  		},
  		keyframes: {
  			shine: {
  				'0%': {
  					'background-position': '0% 0%'
  				},
  				'50%': {
  					'background-position': '100% 100%'
  				},
  				to: {
  					'background-position': '0% 0%'
  				}
  			},
  			'background-position-spin': {
  				'0%': {
  					backgroundPosition: 'top center'
  				},
  				'100%': {
  					backgroundPosition: 'bottom center'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			meteor: {
  				'0%': {
  					transform: 'rotate(215deg) translateX(0)',
  					opacity: '1'
  				},
  				'70%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'rotate(215deg) translateX(-500px)',
  					opacity: '0'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
