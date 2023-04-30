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
                    gray_0: '#f8f7fa',
                    gray_1: 'rgba(51, 48, 60, 0.87)',
                    gray_2: 'rgba(51, 48, 60, 0.68)',
                    gray_3: '#cac9cc',
                },

                danger: '#EA5455',
                danger_light: '#fce9e9',

                success: '#28C76F',
                success_light: '#e4f8ed',

                warning: '#FF9F43',
                warning_light: '#fff3e7',

                info: '#00CFE8',
                info_light: '#dff9fc',

                secondary: '#A8AAAE',
                secondary_light: '#f4f4f4',

                primary: '#7367F0',
                primary_light: '#edecfd'
            }
        },
    },
    plugins: [],
}

