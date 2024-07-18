import Link from "next/link";
import React from "react";
import { ContactInformation } from "../lib/contact-information";
import { motion } from "framer-motion";

const NavContactSection = () => {
    const containerVariant = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariant = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 10,
            },
        },
    };

    const iconVariant = {
        hidden: {
            scale: 0,
        },
        visible: {
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 10,
            },
        },
    };

    return (
        <motion.div
            className="flex-shrink-0 bg-950 p-2 text-lg"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
        >
            <div className="flex flex-col gap-2">
                {ContactInformation.map((info, index) => {
                    return (
                        <motion.div variants={itemVariant} key={index}>
                            <Link
                                href={info.href}
                                className="group flex items-start gap-4 rounded-md bg-750 p-2 active:bg-800"
                            >
                                <motion.span
                                    className="text-primary"
                                    variants={iconVariant}
                                >
                                    {info.icon}
                                </motion.span>

                                <div>
                                    <motion.h2
                                        className="font-semibold"
                                        variants={iconVariant}
                                    >
                                        {" "}
                                        {info.title}
                                    </motion.h2>
                                    <motion.span
                                        className="text-sm text-400 transition-colors group-hover:text-200"
                                        variants={iconVariant}
                                    >
                                        {info.content}
                                    </motion.span>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default NavContactSection;
