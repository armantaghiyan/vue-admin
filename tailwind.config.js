/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                theme: {
                    primary: '#7367f0',
                    gray_1: 'rgba(51, 48, 60, 0.87)',
                    gray_2: 'rgba(51, 48, 60, 0.68)',
                    gray_3: '#cac9cc'
                }
            }
        },
    },
    plugins: [],
}

