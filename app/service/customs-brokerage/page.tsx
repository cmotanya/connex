"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/app/footer";
import { images } from "./data";

const CustomsBrokerage = () => {
    return (
        <motion.section
            className="font-roboto-bold text-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="relative h-dvh">
                <Image
                    src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    fill
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjQwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YxZjFmMSIvPjwvc3ZnPg=="
                    className="mx-auto h-[30rem] rounded-sm object-cover object-center"
                />
                <div className="absolute inset-0 h-full bg-850"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.h1
                        className="text-balance rounded-md bg-850 p-6 text-center text-400 md:whitespace-nowrap md:text-start md:text-5xl"
                        initial={{ scale: 0.5 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        Expert Customs Brokerage Services
                    </motion.h1>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-2 pb-2 pt-10 md:pb-5">
                <div className="">
                    <h2 className="text-3xl font-bold uppercase text-primary">
                        Navigating the complexities of International trade
                    </h2>
                    <p className="text-balance pt-3">
                        In today&apos;s global marketplace, efficient customs
                        clearance is crucial for maintaining a competitive edge.
                        Our expert customs brokerage services are designed to
                        streamline your international trade operations, ensure
                        compliance with ever-changing regulations, and minimize
                        delays in customs clearance. With our deep understanding
                        of international trade laws and customs procedures, we
                        help you navigate the complexities of cross-border
                        transactions, allowing you to focus on growing your
                        business.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-3 pt-5 md:grid-cols-4 md:gap-5">
                    {images.map((image, index) => (
                        <div key={index} className="">
                            <Image
                                src={image.src}
                                alt=""
                                width={500}
                                height={500}
                                className="mx-auto h-52 w-full rounded-md object-cover object-center"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="mx-auto mt-5 w-full bg-850 px-3 py-5 md:pl-12">
                <h2 className="text-2xl text-accent">
                    Why choose our Customs Brokerage Services?
                </h2>
                <ul className="max-w-4xl list-disc space-y-5 pl-6 pt-2 text-left text-300 marker:text-primary">
                    <li className="">
                        <strong>Expert Knowledge:</strong> Our team of licensed
                        customs brokers possesses in-depth knowledge of customs
                        regulations and procedures across multiple
                        jurisdictions, ensuring smooth clearance for your goods.
                    </li>
                    <li>
                        <strong>Efficient Clearance:</strong> We leverage
                        advanced technology and established relationships with
                        customs authorities to expedite the clearance process,
                        reducing delays and minimizing storage costs.
                    </li>
                    <li>
                        <strong>Personalized Service:</strong> We understand
                        that each client has unique needs. Our tailored approach
                        ensures that you receive customized solutions that align
                        with your specific import/export requirements.
                    </li>
                    <li>
                        <strong>Compliance Assurance:</strong> Stay ahead of
                        regulatory changes with our proactive compliance
                        management. We help you navigate complex trade
                        agreements, tariff classifications, and duty
                        calculations to minimize risks and avoid penalties.
                    </li>
                    <li>
                        <strong>Cost-Effective Solutions:</strong> Our expertise
                        in trade regulations and duty optimization strategies
                        can help you identify potential savings opportunities,
                        enhancing your bottom line.
                    </li>
                    <li>
                        <strong>Comprehensive Documentation:</strong> We handle
                        all necessary customs documentation with precision,
                        reducing the risk of errors that could lead to costly
                        delays or compliance issues.
                    </li>
                    <li>
                        <strong>24/7 Support:</strong> International trade
                        doesn&apos;t sleep, and neither do we. Our
                        round-the-clock support ensures that you have assistance
                        whenever you need it, regardless of time zones.
                    </li>
                </ul>

                <button
                    type="button"
                    className="mt-8 rounded-full bg-primary p-3 text-black"
                >
                    {" "}
                    Contact Us for a Consultation.
                </button>
            </div>

            <Footer />
        </motion.section>
    );
};

export default CustomsBrokerage;
