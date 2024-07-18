"use client";

import React, { useState } from "react";
import Image from "next/image";
import homeImage from "./lib/image-links";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "./utils/cn";
import { getBlurDataURL } from "./lib/blur-image";

const MainPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // const [animationKey, setAnimationKey] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleSlideChange = (newIndex: number) => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex(newIndex);
                setIsAnimating(false);
            }, 1500);
        }
    };

    const containerVariants = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
        exit: {
            opacity: 0,
            y: -50,
        },
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % homeImage.length);
    };
    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + homeImage.length) % homeImage.length
        );
    };

    return (
        <section className="h-dvh w-dvw overflow-hidden">
            <div className="relative h-full">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={`image-${currentIndex}`}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={homeImage[currentIndex].img}
                            alt={homeImage[currentIndex].title}
                            sizes="100vw"
                            priority
                            fill
                            placeholder="blur"
                            blurDataURL={getBlurDataURL()}
                            className="object-cover object-center"
                        />
                        {/* <div className="absolute inset-0"></div> */}
                    </motion.div>
                </AnimatePresence>

                <AnimatePresence>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={containerVariants}
                        key={`content-${currentIndex}`}
                        className="absolute top-[15%] z-[999] w-full space-y-6 text-balance p-2 text-center text-200 drop-shadow-lg md:left-[10%] md:top-[15%] md:w-[60%] md:p-8 md:text-start"
                    >
                        <div className="invisible absolute inset-0 h-full rounded-lg bg-850 md:visible"></div>
                        <h1
                            className={cn(
                                "transform text-6xl font-bold text-primary transition-all md:[letter-spacing:6px]",
                                isAnimating ? "animate-exit" : "animate-enter"
                            )}
                        >
                            {homeImage[currentIndex].title}
                        </h1>
                        <p
                            className={cn(
                                "transform transition-all",
                                isAnimating ? "animate-exit" : "animate-enter"
                            )}
                        >
                            {homeImage[currentIndex].description}
                        </p>
                        <div className="grid transform animate-enter grid-flow-row gap-4 font-poppins-semibold transition-all md:grid-flow-col">
                            <button
                                type="button"
                                className="rounded-full bg-primary px-4 py-4 uppercase text-black"
                            >
                                {homeImage[currentIndex].button1}
                            </button>
                            <button
                                type="button"
                                className="rounded-full bg-800 px-4 py-4 uppercase hover:bg-700"
                            >
                                {homeImage[currentIndex].button2}
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Thumbnail */}
                <div className="absolute bottom-8 left-[15%] grid h-24 grid-cols-4 gap-2 md:left-[60%] md:h-36 md:gap-2">
                    {homeImage.map((item, index) => {
                        return (
                            <div
                                key={item.img}
                                className="relative h-[inherit] w-20 overflow-hidden rounded-md md:w-28"
                                onClick={() => handleSlideChange(index)}
                            >
                                <Image
                                    src={item.img}
                                    alt={item.description}
                                    fill
                                    sizes="(max-width: 768px) 80px, 112px"
                                    placeholder="blur"
                                    blurDataURL={getBlurDataURL()}
                                    className="object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-850"></div>
                                <div className="absolute bottom-3 left-3 z-[100] h-[30%] overflow-clip text-ellipsis text-balance text-sm text-200">
                                    {item.description}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* arrow */}
                <div className="absolute left-1/2 top-3/4 flex -translate-x-1/2 items-center gap-5 md:left-1/3">
                    <button
                        onClick={prevSlide}
                        className="rounded-full bg-200 p-3 transition hover:bg-800 hover:text-200"
                        disabled={isAnimating}
                    >
                        <IconArrowLeft />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="rounded-full bg-200 p-3 transition hover:bg-800 hover:text-200"
                        disabled={isAnimating}
                    >
                        <IconArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MainPage;
