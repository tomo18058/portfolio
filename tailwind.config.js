// tailwind.config.js または tailwind.config.ts
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
        'text-orange-600',
        'text-cyan-400',
        'text-blue-500',
        'text-teal-400',
        'text-gray-300',
        'text-yellow-400',
        'text-white'
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
