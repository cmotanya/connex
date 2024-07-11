import {
    IconBrandFacebookFilled,
    IconBrandWhatsapp,
    IconBrandX,
    IconBrandYoutubeFilled,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import React from "react";
import { socialLink } from "../lib/socialLink";

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
                {socialLink().map((item, index) => (
                    <motion.span
                        key={index}
                        variants={iconVariants}
                        className="bg-750 rounded-lg p-2 hover:bg-600"
                    >
                        {item.icon}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
};

export default SocialsNav;
