"use client";

import React from "react";
import NotFoundIcon from "../public/images/not-found-icon.svg";
import Link from "next/link";
import { motion } from "framer-motion";

function NotFound() {
    return (
        <div className="flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-gray-900 px-2 text-center text-gray-300 md:px-0">
            <motion.div
                className="pb-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <NotFoundIcon />
            </motion.div>
            <motion.div
                className="pb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <p className="text-xl">
                    The page you&apos;re looking for could not be found!
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <Link href="/">
                    <button className="rounded-lg bg-gray-800/50 px-6 py-3 text-lg text-gray-400 transition duration-300 ease-in-out hover:bg-gray-800">
                        Return to HomePage
                    </button>
                </Link>
            </motion.div>
        </div>
    );
}

export default NotFound;
