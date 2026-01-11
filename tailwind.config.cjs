/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Architectural neutral palette with dark red accent
                'arch-black': '#0A0A0A',
                'arch-gray-dark': '#1A1A1A',
                'arch-gray': '#2A2A2A',
                'arch-gray-light': '#E5E5E5',
                'arch-white': '#F8F8F8',
                'arch-accent': '#8B1A1A', // Dark blood red
            },
            fontFamily: {
                'sans': ['Poppins', 'system-ui', 'sans-serif'],
                'display': ['Poppins', 'sans-serif'],
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'slide-in': 'slideIn 0.8s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideIn: {
                    '0%': { transform: 'translateX(-30px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
