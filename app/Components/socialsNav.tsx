import {
    IconBrandFacebookFilled,
    IconBrandWhatsapp,
    IconBrandX,
    IconBrandYoutubeFilled,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import React from "react";

const SocialsNav = () => {
    const iconVariants = {
        initial: { opacity: 0, scale: 0.3 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 200, damping: 10 },
        },
    };

    return (
        <motion.div
            className="flex-shrink-0 p-3"
            initial="initial"
            animate="animate"
        >
            <div className="flex items-center justify-around md:hidden">
                <motion.span variants={iconVariants}>
                    <IconBrandFacebookFilled size={25} color="#1877F2" />
                </motion.span>
                <motion.span variants={iconVariants}>
                    <IconBrandWhatsapp size={25} color="#075e54" />
                </motion.span>
                <motion.span variants={iconVariants}>
                    <IconBrandX size={25} />
                </motion.span>
                <motion.span variants={iconVariants}>
                    <IconBrandYoutubeFilled size={28} color="#ff0000" />
                </motion.span>
            </div>
        </motion.div>
    );
};

export default SocialsNav;
