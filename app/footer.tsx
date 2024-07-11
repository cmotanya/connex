import React from "react";
import Image from "next/image";
import { SocialLinks } from "./lib/social-links";
import NavElements from "./lib/nav-elements";
import Link from "next/link";
import { ContactInformation } from "./lib/contact-information";

const Footer = () => {
    const service = NavElements.find((item) => item.name === "Service");

    return (
        <footer className="mt-10 w-full bg-800 p-2">
            <div className="flex flex-col justify-between gap-3 md:flex-row">
                <div className="w-full space-y-6 rounded-md bg-900 p-3 md:w-[45%] md:space-y-12">
                    {/* Logo and description */}
                    <div className="space-y-6 md:space-y-12">
                        <Image
                            src="/images/connex-logo.png"
                            alt="logo image"
                            width={130}
                            height={130}
                        />
                        <p className="text-balance text-base text-400">
                            Originally founded in 2013, Connex International is
                            one of the largest logistics company in Ambalalo. We
                            serve a wide range of customers from small to
                            mid-sized businesses.
                        </p>
                    </div>

                    {/* Social links */}
                    <div className="space-x-5">
                        {SocialLinks.map((link, index) => (
                            <button
                                key={index}
                                className="rounded-md bg-750 p-1 transition-all duration-300 hover:bg-850"
                            >
                                {link.icon}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Navigation links */}
                <div className="w-full rounded-md bg-900 p-2 md:w-[30%]">
                    <h3 className="mb-2 mt-2 uppercase text-primary md:mb-4">
                        Our Services
                    </h3>
                    <ul>
                        {service?.subItems.map((sub, index) => {
                            return (
                                <li
                                    key={index}
                                    className="rounded-md p-1 text-400 transition-all duration-300 hover:bg-800 hover:text-200"
                                >
                                    <Link href={sub.href} className="text-base">
                                        {sub.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Contact information */}
                <div className="w-full rounded-md bg-900 p-2 md:w-[40%]">
                    <h3 className="mb-4 mt-2 uppercase text-primary">
                        contact info
                    </h3>
                    <div className="flex flex-col gap-2 md:gap-4">
                        {ContactInformation.map((info, index) => {
                            return (
                                <button
                                    key={index}
                                    className="flex gap-5 rounded-md p-1 text-400 transition-all duration-300 hover:bg-800 hover:text-200"
                                >
                                    <span className="">{info.icon}</span>
                                    <span className="text-start text-base">
                                        {info.content}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Subscribe to our newsletter */}
                <div className="w-full rounded-md bg-900 p-2 md:w-[50%]">
                    <h3 className="mb-4 text-primary md:mb-8">
                        Stay upto date with our news and insight.
                    </h3>

                    <div className="flex flex-col">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="rounded-md bg-800 p-2 transition-all duration-300 placeholder:text-base focus-within:ring-2 focus-within:ring-600"
                        />
                        <button className="mt-3 w-fit rounded-md bg-accent px-2 py-1 text-base font-semibold uppercase text-black transition-all duration-300 hover:bg-secondary">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-4 flex flex-col items-center justify-between px-2 text-base text-300 md:mt-10 md:flex-row">
                <p className="mx-auto mb-2 w-full text-start md:w-auto">
                    &copy;{new Date().getFullYear()} Connex International
                    Limited.All rights reserved
                </p>

                <div className="flex gap-3 whitespace-nowrap md:gap-5">
                    <button className="">Privacy Policy</button>
                    <button>Terms and Conditions</button>
                    <button>Sitemap</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
