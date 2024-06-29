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
                "roboto-bold": ["Roboto-Bold", "sans-serif"],
                "roboto-medium": ["Roboto-Medium", "sans-serif"],
                "roboto-regular": ["Roboto-Regular", "sans-serif"],
            },

            colors: {
                "200": "var(--custom-200)",
                "300": "var(--custom-300)",
                "400": "var(--custom-400)",
                "500": "var(--custom-500)",
                "600": "var(--custom-600)",
                "700": "var(--custom-700)",
                "800": "var(--custom-800)",
                "900": "var(--custom-900)",

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
