/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Montserrat', 'sans-serif'],
            },
            colors: {
                spotify: {
                    green: '#1DB954',
                    black: '#121212',
                    dark: '#000000'
                }
            }
        },
    },
    plugins: [],
}
