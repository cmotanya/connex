"use client";

import {
    IconDeviceMobile,
    IconMail,
    IconMap,
    IconMinus,
    IconPlus,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import navElements from "../lib/navElements";
import { cn } from "../utils/cn";
import HamburgerMenu from "./hamburgerMenu";
import { useEffect, useRef, useState } from "react";

const MobileNav = () => {
    const [openIndicator, setOpenIndicator] = useState<number | null>(null);
    const [activeLink, setActiveLink] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    // toggles the state of the open indicator based on the provided index
    const handleToggle = (index: number) => {
        setOpenIndicator(openIndicator === index ? null : index);
    };

    // Updates the active link and open indicators based on the provided href and index
    const handleLinkClick = (href: string, index: number) => {
        setActiveLink(href);

        if (openIndicator !== index) {
            setOpenIndicator(null);
        }
    };

    // toggles the state of the menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Handles click event when it occurs outside of the navRef element
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                navRef.current &&
                !navRef.current.contains(event.target as Node)
            ) {
                setOpenIndicator(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Variants for the mobile navigation
    const navVariants = {
        closed: {
            x: "100%",
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        open: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 300,
                damping: 30,
            },
        },
    };

    const itemVariants = {
        open: {
            x: 0,
            opacity: 1,
        },
        closed: {
            x: 20,
            opacity: 0,
        },
    };
    return (
        <div className="fixed right-5 top-5 z-[1000] block md:hidden">
            <HamburgerMenu onclick={toggleMenu} isOpen={isOpen} />

            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        ref={navRef}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={navVariants}
                        aria-label="Mobile Navigation"
                        className={cn(
                            "fixed -right-0 top-0 flex h-dvh w-full flex-col justify-between overflow-y-auto bg-200 text-xl",
                            isOpen ? "right-0" : "-right-full"
                        )}
                    >
                        <motion.div
                            className="flex min-h-[60%] mt-[4rem] w-full flex-col items-center justify-center gap-5"
                            variants={{
                                open: {
                                    transition: {
                                        staggerChildren: 0.2,
                                        delayChildren: 0.4,
                                    },
                                },
                            }}
                        >
                            {navElements.map((item, index) => {
                                const isActive = activeLink === item.href;
                                return (
                                    <motion.ul
                                        key={item.href}
                                        role="menu"
                                        variants={itemVariants}
                                        className="group relative w-full px-2"
                                    >
                                        <li className="flex w-full items-center justify-between rounded-md bg-primary hover:bg-accent">
                                            <Link
                                                href={item.href}
                                                onClick={(e) => {
                                                    handleLinkClick(
                                                        item.href,
                                                        index
                                                    );
                                                    if (
                                                        item.subItem.length > 0
                                                    ) {
                                                        e.preventDefault();
                                                        handleToggle(index);
                                                    }
                                                }}
                                                className={cn(
                                                    "flex w-full items-center justify-between gap-2 rounded-md p-4",
                                                    isActive
                                                        ? "bg-accent"
                                                        : "bg-primary hover:bg-accent"
                                                )}
                                            >
                                                {item.name}

                                                {/* indicators */}
                                                {item.subItem.length > 0 && (
                                                    <button
                                                        aria-expanded={
                                                            openIndicator ===
                                                            index
                                                        }
                                                        aria-controls={`submenu-${index}`}
                                                        className="cursor-pointer"
                                                        onClick={() =>
                                                            handleToggle(index)
                                                        }
                                                    >
                                                        {openIndicator ===
                                                        index ? (
                                                            <IconMinus />
                                                        ) : (
                                                            <IconPlus />
                                                        )}
                                                    </button>
                                                )}
                                            </Link>
                                        </li>

                                        {/* Sub menu */}
                                        <AnimatePresence>
                                            {item.subItem.length > 0 &&
                                                openIndicator === index && (
                                                    <motion.li
                                                        initial={{
                                                            opacity: 0,
                                                            height: 0,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            height: "auto",
                                                        }}
                                                        exit={{
                                                            opacity: 0,
                                                            height: 0,
                                                            transition: {
                                                                duration: 0.2,
                                                            },
                                                        }}
                                                        transition={{
                                                            duration: 0.3,
                                                        }}
                                                        className={cn(
                                                            "mb-2 w-full overflow-hidden rounded-md"
                                                        )}
                                                    >
                                                        {item.subItem.map(
                                                            (sub, index) => {
                                                                const isSubActive =
                                                                    activeLink ===
                                                                    sub.href;
                                                                return (
                                                                    <motion.div
                                                                        key={
                                                                            sub.href
                                                                        }
                                                                        initial={{
                                                                            opacity: 0,
                                                                        }}
                                                                        animate={{
                                                                            opacity: 1,
                                                                        }}
                                                                        exit={{
                                                                            opacity: 0,
                                                                        }}
                                                                        transition={{
                                                                            duration: 0.2,
                                                                            delay:
                                                                                0.2 *
                                                                                index,
                                                                        }}
                                                                    >
                                                                        <Link
                                                                            href={
                                                                                sub.href
                                                                            }
                                                                            className={cn(
                                                                                "my-1 block rounded-sm px-2 py-3",
                                                                                isSubActive
                                                                                    ? "bg-accent"
                                                                                    : "bg-secondary hover:bg-accent"
                                                                            )}
                                                                            onClick={() =>
                                                                                handleLinkClick(
                                                                                    sub.href,
                                                                                    index
                                                                                )
                                                                            }
                                                                        >
                                                                            {
                                                                                sub.name
                                                                            }
                                                                        </Link>
                                                                    </motion.div>
                                                                );
                                                            }
                                                        )}
                                                    </motion.li>
                                                )}
                                        </AnimatePresence>
                                    </motion.ul>
                                );
                            })}
                        </motion.div>

                        <NavAddress />
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileNav;

const NavAddress = () => {
    return (
        <div className="mb-24 ml-4 flex flex-col gap-8 text-xl">
            <div className="mt-2 flex items-start gap-4">
                <IconMap className="text-primary" />
                <div className="-mt-1">
                    <h2>Location</h2>
                    <span>2nd Floor Jubilee Arcade Moi Avenue Mombasa </span>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <IconMail className="text-primary" />
                <div className="-mt-1">
                    <h2>Mail Us</h2>
                    <span>info.connexinternational@gmail.com</span>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <IconDeviceMobile className="text-primary" />
                <div className="-mt-1">
                    <h2>Call Us</h2>
                    <span>(+254) 72222222</span>
                </div>
            </div>
        </div>
    );
};
