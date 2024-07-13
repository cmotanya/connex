import React from "react";
import Image from "next/image";
import { images } from "./data";
import { cn } from "@/app/utils/cn";
import Footer from "@/app/footer";

const Warehousing = () => {
    return (
        <section className="text-200">
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
                <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-balance rounded-md bg-850 p-6 text-center text-300 md:whitespace-nowrap md:text-start md:text-5xl">
                    Comprehensive Warehousing Solution
                </h1>
            </div>

            <div>
                {images.map((item, index) => (
                    <div
                        key={index}
                        className={cn(
                            "flex gap-8 p-2 md:p-5",
                            index % 2 === 0 ? "bg-800 text-400" : "bg-950"
                        )}
                    >
                        <div
                            className={cn(
                                "mx-auto flex w-full flex-row gap-2 py-3 md:w-[80%] md:gap-8",
                                index % 2 === 0
                                    ? "flex-col md:flex-row"
                                    : "flex-col md:flex-row-reverse"
                            )}
                        >
                            <div className="mb-3 w-full md:w-[50%]">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={400}
                                    height={400}
                                    className="w-full rounded-md object-cover object-center"
                                />
                            </div>
                            <div className="flex w-full flex-col justify-around space-y-3 md:w-[50%]">
                                <h3 className="text-2xl font-bold uppercase text-primary">
                                    {item.title}
                                </h3>
                                <p className="w-full text-balance text-lg">
                                    {item.content}
                                </p>
                                <button className="flex w-fit justify-start rounded-full bg-primary px-4 py-2 font-roboto-bold font-bold text-black">
                                    {item.buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </section>
    );
};

export default Warehousing;
