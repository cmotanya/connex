import { renderToString } from "react-dom/server";

const blurImage = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 400"
            width="1200"
            height="400"
        >
            <rect width="100%" height="100%" fill="#1f2937" />

            {/* <!-- Header --> */}
            <rect width="60%" height="10%" x="20" y="20" rx="5" fill="#374151">
                <animate
                    attributeName="opacity"
                    values="0.5;1;0.5"
                    dur="2s"
                    repeatCount="indefinite"
                />
            </rect>

            {/* <!-- Content block 1 --> */}
            <rect width="40%" height="20%" x="20" y="80" rx="5" fill="#374151">
                <animate
                    attributeName="opacity"
                    values="0.5;1;0.5"
                    dur="2s"
                    repeatCount="indefinite"
                    begin="0.3s"
                />
            </rect>

            {/* <!-- Content block 2 --> */}
            <rect width="40%" height="20%" x="20" y="180" rx="5" fill="#374151">
                <animate
                    attributeName="opacity"
                    values="0.5;1;0.5"
                    dur="2s"
                    repeatCount="indefinite"
                    begin="0.6s"
                />
            </rect>

            {/* <!-- Content block 3 --> */}
            <rect width="40%" height="20%" x="20" y="280" rx="5" fill="#374151">
                <animate
                    attributeName="opacity"
                    values="0.5;1;0.5"
                    dur="2s"
                    repeatCount="indefinite"
                    begin="0.9s"
                />
            </rect>

            {/* <!-- Animated line --> */}
            <rect width="20%" height="2%" x="-20%" y="380" fill="#4b5563">
                <animate
                    attributeName="x"
                    values="-20%;100%"
                    dur="1.5s"
                    repeatCount="indefinite"
                />
            </rect>
        </svg>
    );
};

export const getBlurDataURL = () => {
    const svgString = renderToString(blurImage());
    const encodedSVG = Buffer.from(svgString).toString("base64");
    return `data:image/svg+xml;base64,${btoa(encodedSVG)}`;
};
