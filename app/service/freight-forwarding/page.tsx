import React from "react";
import Image from "next/image";
import { images, services } from "./data";
import Footer from "@/app/footer";

const FreightForwarding = () => {
    return (
        <section className="px-2 pt-20 text-200 md:px-6 md:pt-32">
            <div className="mt-5">
                <h1 className="text-balance pb-5">
                    Efficient global logistics solutions for seamless clearing
                    and forwarding.
                </h1>
                <Image
                    src={
                        "https://img.freepik.com/free-photo/scene-with-photorealistic-logistics-operations-proceedings_23-2151468882.jpg?t=st=1720710123~exp=1720713723~hmac=6dc182165eb372a5e5446529fd4923ad0929d69af93ed992ec4df95e82ae1c2b&w=740"
                    }
                    alt="boat on a dock"
                    width={1300}
                    height={400}
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjQwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YxZjFmMSIvPjwvc3ZnPg=="
                    className="mx-auto h-[30rem] rounded-sm object-cover object-center"
                />

                <button className="mt-6 rounded-lg bg-primary p-4 font-bold text-black hover:bg-accent md:mt-8">
                    Optimize your logistics today!
                </button>
            </div>

            <div className="mt-8 md:mt-10">
                <h2 className="mb-4 font-roboto-bold text-4xl font-semibold uppercase text-accent">
                    Services Offered:
                </h2>

                <div className="flex flex-row flex-wrap gap-5">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="w-full rounded-md bg-800 p-3 md:w-auto"
                        >
                            <h3 className="font-roboto-medium text-2xl font-semibold uppercase text-primary">
                                {service.title}
                            </h3>
                            <h3 className="my-1 text-500">Key Features:</h3>
                            <ul className="list-inside list-disc marker:text-primary">
                                {service.content.map((item, index) => (
                                    <li key={index} className="text-200">
                                        {item.item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <button className="mt-4 rounded-md bg-primary p-3 font-bold text-black hover:bg-accent">
                    CONTACT US TODAY
                </button>
            </div>

            <div className="mt-10 flex w-full flex-wrap justify-around gap-4 md:w-[80%]">
                {images.map((image, index) => (
                    <div key={index} className="w-full md:w-auto">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={230}
                            height={200}
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjQwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YxZjFmMSIvPjwvc3ZnPg=="
                            className="h-[11rem] w-full rounded-md object-cover object-center md:h-[10rem] md:w-auto"
                        />
                    </div>
                ))}
            </div>

            <Footer />
        </section>
    );
};

export default FreightForwarding;
