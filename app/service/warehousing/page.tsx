"use client";

import React from "react";
import Image from "next/image";
import { images } from "./data";
import { cn } from "@/app/utils/cn";
import Footer from "@/app/footer";
import { motion } from "framer-motion";

const Warehousing = () => {
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

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
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
                    src="https://img.freepik.com/free-photo/interior-large-distribution-warehouse-with-shelves-stacked-with-palettes-goods-ready-market_342744-1481.jpg?t=st=1720847525~exp=1720851125~hmac=aa086d1b760273cc3ff1a57865cfd6b4b333717ded1a90107ac3d1cb347386fc&w=740"
                    alt=""
                    fill
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjQwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YxZjFmMSIvPjwvc3ZnPg=="
                    className="mx-auto h-[30rem] rounded-sm object-cover object-center"
                />
                <div className="absolute inset-0 h-full backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.h1
                        className="text-balance rounded-md bg-850 p-6 text-center text-300 md:whitespace-nowrap md:text-start md:text-5xl"
                        initial={{ scale: 0.5 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        Comprehensive Warehousing Solution
                    </motion.h1>
                </div>
            </div>

            <div>
                {images.map((item, index) => (
                    <motion.div
                        key={index}
                        className={cn(
                            "flex gap-8 md:p-5",
                            index % 2 === 0 ? "bg-800 text-400" : "bg-950"
                        )}
                        variants={itemVariants}
                    >
                        <div
                            className={cn(
                                "mx-auto flex w-full flex-row gap-2 py-3 md:w-[80%] md:gap-8",
                                index % 2 === 0
                                    ? "flex-col md:flex-row"
                                    : "flex-col md:flex-row-reverse"
                            )}
                        >
                            <motion.div
                                className="w-full md:w-[50%]"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={400}
                                    height={400}
                                    className="w-full rounded-md object-cover object-center"
                                />
                            </motion.div>
                            <div className="flex w-full flex-col justify-around space-y-3 pb-3 md:w-[50%]">
                                <motion.h3
                                    className="text-2xl font-bold uppercase text-primary"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                >
                                    {item.title}
                                </motion.h3>
                                <motion.p
                                    className="w-full text-balance text-lg"
                                    initial={{ opacity: 0, y: -50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                >
                                    {item.content}
                                </motion.p>
                                <motion.button
                                    className="flex w-fit justify-start rounded-full bg-primary px-4 py-2 font-roboto-bold font-bold text-black"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                >
                                    {item.buttonText}
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <Footer />
        </motion.section>
    );
};

export default Warehousing;
