import { motion } from "framer-motion";
import React from "react";
import { SocialLinks } from "../lib/social-links";

const SocialsNav = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.2,
            },
        },
    };
    const iconVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 },
        },
    };

    return (
        <motion.div
            className="flex-shrink-0 p-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="flex items-center justify-around md:hidden">
                {SocialLinks.map((item, index) => (
                    <motion.button
                        key={index}
                        variants={iconVariants}
                        whileTap={{ scale: 0.9 }}
                        className="rounded-lg bg-800 p-2 transition-colors hover:bg-850"
                    >
                        {item.icon}
                    </motion.button>
                ))}
            </div>
        </motion.div>
    );
};

export default SocialsNav;
