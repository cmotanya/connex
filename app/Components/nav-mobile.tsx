"use client";

import { IconBrandWhatsapp, IconPlus } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import navElements from "../lib/navElements";
import { cn } from "../utils/cn";
import HamburgerMenu from "./nav-hamburger-menu";
import { useEffect, useRef, useState } from "react";
import NavContactSection from "./nav-contact";
import SocialsNav from "./nav-socials";

const MobileNav = () => {
    const [openIndicator, setOpenIndicator] = useState<number | null>(null);
    const [activeLink, setActiveLink] = useState<string | null>(
        navElements[0].href
    );
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    // toggles the state of the open indicator based on the provided index
    const handleToggle = (index: number) => {
        setOpenIndicator(openIndicator === index ? null : index);
    };

    // toggles the state of the menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Updates the active link and open indicators based on the provided href and index
    const handleLinkClick = (href: string, index: number) => {
        setActiveLink(href);

        if (openIndicator !== index) {
            setOpenIndicator(null);
        }
    };

    const handleSubItemClick = (href: string) => {
        setActiveLink(href);
        setOpenIndicator(null); // Close the sub menu
        toggleMenu(); // Close the entire mobile menu
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

    const subItemVariants = {
        hidden: {
            opacity: 0,
            y: -10,
        },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.1,
                duration: 0.3,
            },
        }),
    };

    return (
        <div className="fixed right-5 top-5 z-[1000] block text-300 md:hidden">
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
                            "fixed -right-0 top-0 flex h-dvh w-full flex-col justify-between overflow-y-auto bg-900 text-xl",
                            isOpen ? "right-0" : "-right-full"
                        )}
                    >
                        <div className="flex h-full w-full flex-col">
                            <motion.ul
                                className="h-1/2 min-h-[60%] w-full flex-grow gap-3 overflow-hidden overflow-y-auto px-2 pb-4 pt-[4rem]"
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
                                        <motion.div
                                            role="menu"
                                            key={item.href}
                                            variants={itemVariants}
                                            className="relative my-3 w-full px-2"
                                        >
                                            <li className="flex w-full items-center justify-between rounded-md bg-800 hover:bg-700">
                                                <Link
                                                    href={item.href}
                                                    onClick={(e) => {
                                                        handleLinkClick(
                                                            item.href,
                                                            index
                                                        );
                                                        if (
                                                            item.subItem
                                                                .length > 0
                                                        ) {
                                                            e.preventDefault();
                                                            handleToggle(index);
                                                        }
                                                    }}
                                                    className={cn(
                                                        "flex w-full items-center justify-between rounded-md p-4",
                                                        isActive
                                                            ? "bg-700"
                                                            : "bg-800 hover:bg-accent"
                                                    )}
                                                >
                                                    {item.name}

                                                    {/* indicators */}
                                                    {item.subItem.length >
                                                        0 && (
                                                        <button
                                                            aria-expanded={
                                                                openIndicator ===
                                                                index
                                                            }
                                                            aria-controls={`submenu-${index}`}
                                                            className="cursor-pointer"
                                                            onClick={() =>
                                                                handleToggle(
                                                                    index
                                                                )
                                                            }
                                                        >
                                                            {openIndicator ===
                                                            index ? (
                                                                <IconPlus className="rotate-45 transform transition" />
                                                            ) : (
                                                                <IconPlus className="transition" />
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
                                                            className="ml-[10%] w-[90%] overflow-hidden rounded-md"
                                                        >
                                                            {item.subItem.map(
                                                                (
                                                                    sub,
                                                                    subIndex
                                                                ) => {
                                                                    const isSubActive =
                                                                        activeLink ===
                                                                        sub.href;
                                                                    return (
                                                                        <motion.div
                                                                            key={
                                                                                sub.href
                                                                            }
                                                                            custom={
                                                                                subIndex
                                                                            }
                                                                            variants={
                                                                                subItemVariants
                                                                            }
                                                                            initial="hidden"
                                                                            animate="visible"
                                                                            exit="hidden"
                                                                        >
                                                                            <Link
                                                                                href={
                                                                                    sub.href
                                                                                }
                                                                                className={cn(
                                                                                    "my-1 block transform rounded-md px-2 py-3 transition-all duration-300 active:scale-95",
                                                                                    isSubActive
                                                                                        ? "bg-600 text-primary"
                                                                                        : "bg-600 hover:bg-650"
                                                                                )}
                                                                                onClick={() => {
                                                                                    handleSubItemClick(
                                                                                        sub.href
                                                                                    );
                                                                                }}
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
                                        </motion.div>
                                    );
                                })}
                            </motion.ul>
                        </div>

                        <NavContactSection />

                        <SocialsNav />
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileNav;