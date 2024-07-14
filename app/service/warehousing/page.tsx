"use client";

import React from "react";
import Image from "next/image";
import { images } from "./data";
import { cn } from "@/app/utils/cn";
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
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDEyMDAgNDAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWYyOTM3Ii8+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzM3NDE1MSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ieCIgdmFsdWVzPSItMTAwJTsxMDAlIiBkdXI9IjEuNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9yZWN0Pjwvc3ZnPg=="
                />
                <div className="absolute inset-0 h-full bg-850"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.h1
                        className="text-balance rounded-md bg-850 p-6 text-center text-primary md:whitespace-nowrap md:text-start md:text-5xl"
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
                            "flex gap-8 px-2 md:p-5",
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
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    delay: 0.2,
                                    duration: 0.5,
                                }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={400}
                                    height={400}
                                    placeholder="blur"
                                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDEyMDAgNDAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWYyOTM3Ii8+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzM3NDE1MSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ieCIgdmFsdWVzPSItMTAwJTsxMDAlIiBkdXI9IjEuNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9yZWN0Pjwvc3ZnPg=="
                                />
                            </motion.div>
                            <div className="w-full px-2 md:w-[50%]">
                                <motion.h3
                                    className="my-2 text-2xl font-bold uppercase text-primary"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                >
                                    {item.title}
                                </motion.h3>
                                <motion.p
                                    className="w-full text-balance text-lg"
                                    initial={{ opacity: 0, y: -50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                >
                                    {item.content}
                                </motion.p>
                                <motion.button
                                    className="mt-6 flex w-fit justify-start rounded-full bg-primary px-4 py-2 font-roboto-bold font-bold text-black"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                >
                                    {item.buttonText}
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Warehousing;
