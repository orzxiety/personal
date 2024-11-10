import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {},
        fontFamily: {
            'body': ['Geologica', 'Arial', 'sans-serif']
        }
    },

    plugins: []
} satisfies Config;
