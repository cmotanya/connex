"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { aboutUs } from "./data";
import { getBlurDataURL } from "@/app/lib/blur-image";

const About = () => {
    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <motion.section
            className="text-200"
            initial="hidden"
            whileInView="visible"
            variants={containerVariant}
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="relative h-dvh">
                <Image
                    src="https://images.unsplash.com/photo-1559297434-fae8a1916a79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxvZ2lzdGljc3xlbnwwfHwwfHx8MA%3D%3D"
                    alt=""
                    fill
                    placeholder="blur"
                    blurDataURL={getBlurDataURL()}
                />
                <div className="absolute inset-0 h-full bg-850"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        className="text-balance rounded-md bg-850 p-6 text-center font-bold text-300"
                        initial={{ scale: 0.5 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <h1 className="pb-8 text-center uppercase md:text-5xl">
                            Expert Customs Brokerage Services
                        </h1>
                        <p className="text-center uppercase text-primary">
                            {" "}
                            Originally founded in 2013, Connex International is
                            one of the largest logistics company in Ambalalo. We
                            serve a wide range of customers from small to
                            mid-sized businesses.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="bg-800 p-2 md:p-12">
                <div>
                    <h3 className="mt-5 text-2xl font-bold uppercase text-primary">
                        Our Mission:
                    </h3>
                    <p className="py-2 md:py-5">
                        {" "}
                        To empower local businesses to thrive in the global
                        marketplace by providing expert, personalized logistics
                        and customs solutions. We aim to be the bridge that
                        connects our community to international opportunities,
                        fostering economic growth and success across Kenya.
                    </p>
                </div>
                <div className="mt-5 grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-8">
                    {aboutUs.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center rounded-md bg-900 p-6"
                        >
                            {item.icon}
                            <h4 className="mt-4 text-xl font-bold text-primary">
                                {item.title}
                            </h4>
                            <p className="mt-1 text-center text-gray-300">
                                {item.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default About;
