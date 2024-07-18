import type { Config } from "tailwindcss";

type ColorType = {
    [key: string]: string;
};

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "lato-regular": ["Lato-Regular", "sans-serif"],
                "lato-bold": ["Lato-Bold", "sans-serif"],

                oswald: ["Oswald", "sans-serif"],

                "poppins-regular": ["Poppins-Regular", "sans-serif"],
                "poppins-semibold": ["Poppins-Semibold", "sans-serif"],
                "poppins-bold": ["Poppins-Bold", "sans-serif"],

                "montserrat-regular": ["Montserrat-Regular", "sans-serif"],
                "montserrat-semibold": ["Montserrat-Semibold", "sans-serif"],
                "montserrat-bold": ["Montserrat-Bold", "sans-serif"],
            },

            colors: {
                "200": "var(--custom-200)",
                "300": "var(--custom-300)",
                "400": "var(--custom-400)",
                "450": "var(--custom-450)",
                "500": "var(--custom-500)",
                "550": "var(--custom-550)",
                "600": "var(--custom-600)",
                "650": "var(--custom-650)",
                "700": "var(--custom-700)",
                "750": "var(--custom-750)",
                "800": "var(--custom-800)",
                "850": "var(--custom-850)",
                "900": "var(--custom-900)",
                "950": "var(--custom-950)",

                background: "var(--background)",
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                accent: "var(--accent)",
            } as ColorType,

            animation: {
                enter: "blurContent 1.5s ease forwards",
                exit: "fadeOut 2s ease forwards",
            },

            keyframes: {
                blurContent: {
                    from: {
                        transform: "translateY(50px) scale(0.8)",
                        filter: "blur(20px)",
                        opacity: "0",
                    },
                    to: {
                        transform: "translateY(0) scale(1)",
                        filter: "blur(0px)",
                        opacity: "1",
                    },
                },

                fadeOut: {
                    from: {
                        opacity: "1",
                        translateY: "0",
                    },
                    to: {
                        opacity: "0",
                        translateY: "50px",
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
