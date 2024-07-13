"use client";

import React from "react";
import Image from "next/image";
import { images, services } from "./data";
import Footer from "@/app/footer";
import { delay, motion } from "framer-motion";

const FreightForwarding = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3,
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
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3,
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <>
            <motion.section
                className="relative overflow-hidden px-2 pt-20 text-200 md:px-6 md:pt-32"
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Background animated shapes */}
                <motion.div
                    className="absolute left-0 top-0 -z-10 h-full w-full opacity-10"
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                        transition: {
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "reverse",
                        },
                    }}
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
                        backgroundSize: "50px 50px",
                    }}
                />

                <motion.div className="mt-5" variants={itemVariants}>
                    <motion.h1
                        className="text-balance pb-5 text-4xl font-bold text-primary md:text-5xl"
                        variants={fadeInUpVariants}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        Efficient global logistics solutions for seamless
                        clearing and forwarding.
                    </motion.h1>
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Image
                            src={
                                "https://img.freepik.com/free-photo/scene-with-photorealistic-logistics-operations-proceedings_23-2151468882.jpg?t=st=1720710123~exp=1720713723~hmac=6dc182165eb372a5e5446529fd4923ad0929d69af93ed992ec4df95e82ae1c2b&w=740"
                            }
                            alt="boat on a dock"
                            width={1300}
                            height={400}
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjQwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YxZjFmMSIvPjwvc3ZnPg=="
                            className="mx-auto h-[30rem] rounded-sm object-cover object-center shadow-lg"
                        />
                    </motion.div>

                    <motion.button
                        className="mt-6 rounded-full bg-primary p-4 font-bold text-black shadow-md hover:bg-accent md:mt-8"
                        whileHover={{
                            scale: 1.05,
                            transition: { ease: "easeInOut" },
                        }}
                        whileTap={{ scale: 0.95 }}
                        variants={itemVariants}
                    >
                        Optimize your logistics today!
                    </motion.button>
                </motion.div>

                <motion.div
                    className="mt-16 md:mt-24"
                    variants={containerVariants}
                >
                    <motion.h2
                        className="mb-4 font-roboto-bold text-4xl font-semibold uppercase text-accent md:mb-8 md:text-5xl"
                        variants={fadeInUpVariants}
                    >
                        Services Offered
                    </motion.h2>

                    <motion.div
                        className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
                        variants={containerVariants}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="rounded-lg bg-800 p-6 font-roboto-bold shadow-md transition-all duration-300"
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.03,
                                }}
                            >
                                <h3 className="mb-4 text-2xl font-semibold uppercase text-primary">
                                    {service.title}
                                </h3>
                                <h4 className="my-1 text-500">Key Features:</h4>
                                <ul className="list-inside list-disc space-y-1 font-roboto-regular marker:text-primary">
                                    {service.content.map((item, index) => (
                                        <li key={index} className="text-200">
                                            {item.item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.button
                        className="mt-8 rounded-full bg-primary px-4 py-3 font-bold text-black shadow-md hover:bg-accent"
                        whileHover={{
                            scale: 1.05,
                        }}
                        whileTap={{ scale: 0.95 }}
                        variants={itemVariants}
                    >
                        CONTACT US TODAY
                    </motion.button>
                </motion.div>

                <motion.div
                    className="mt-8 md:mt-24"
                    variants={containerVariants}
                >
                    <motion.h2
                        className="mb-2 font-roboto-bold text-3xl font-semibold text-accent md:mb-8 md:text-4xl"
                        variants={fadeInUpVariants}
                    >
                        Our Global Reach
                    </motion.h2>
                    <motion.div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                        {images.map((image, index) => (
                            <motion.div
                                key={index}
                                className="overflow-hidden rounded-lg shadow-md"
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                }}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={300}
                                    height={200}
                                    placeholder="blur"
                                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjQwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YxZjFmMSIvPjwvc3ZnPg=="
                                    className="h-[12rem] w-full object-cover object-center transition-transform duration-300 hover:scale-110"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.section>

            <Footer />
        </>
    );
};

export default FreightForwarding;
