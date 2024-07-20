"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { cn } from "../utils/cn";
import { IconPlus } from "@tabler/icons-react";
import navElements from "../lib/nav-elements";
import { useEffect, useRef, useState } from "react";

const DesktopNav = () => {
    const [openIndicator, setOpenIndicator] = useState<string | null>(null);
    const [activeItem, setActiveItem] = useState<{
        [key: string]: string | null;
    }>({});
    const navRef = useRef<HTMLElement>(null);

    const handleToggle = (href: string) => {
        setOpenIndicator(openIndicator === href ? null : href);
    };

    const handleLinkClick = (main: string, sub: string | null) => {
        setActiveItem((prev) => ({
            ...prev,
            [main]: sub,
        }));

        if (sub === null) {
            // If it is a main item click, toggle the sub menu
            setOpenIndicator((prev) => (prev === main ? null : main));
        } else {
            setOpenIndicator(null);
        }
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

    return (
        <nav ref={navRef} className="hidden text-lg md:flex">
            {navElements.map((item, index) => {
                const isActive = activeItem.main === item.href;
                return (
                    <ul
                        key={item.href}
                        className="group relative flex items-center"
                    >
                        <li className="mx-0.5 flex w-[10rem] items-center justify-center rounded-md bg-primary hover:bg-accent">
                            <Link
                                href={item.href}
                                onClick={(e) => {
                                    handleLinkClick(item.href, null);
                                    if (item.subItems.length > 0) {
                                        e.preventDefault();
                                        handleToggle(item.href);
                                    }
                                }}
                                className={cn(
                                    "flex w-full items-center justify-around gap-2 rounded-md p-2",
                                    isActive
                                        ? "bg-accent"
                                        : "bg-primary hover:bg-accent"
                                )}
                            >
                                {item.name}

                                {/* indicators */}
                                {item.subItems.length > 0 && (
                                    <span
                                        className="cursor-pointer"
                                        onClick={() => handleToggle(item.href)}
                                    >
                                        {openIndicator === item.href ? (
                                            <IconPlus className="rotate-45 transform transition" />
                                        ) : (
                                            <IconPlus className="transition" />
                                        )}
                                    </span>
                                )}
                            </Link>
                        </li>

                        {/* Sub menu */}
                        <AnimatePresence>
                            {item.subItems.length > 0 &&
                                openIndicator === item.href && (
                                    <motion.li
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{
                                            opacity: 1,
                                            height: "auto",
                                        }}
                                        exit={{
                                            opacity: 0,
                                            height: 0,
                                            transition: { duration: 0.2 },
                                        }}
                                        transition={{ duration: 0.2 }}
                                        className={cn(
                                            "absolute left-0 top-full z-50 mt-1 w-full overflow-hidden rounded-md bg-secondary"
                                        )}
                                    >
                                        {item.subItems.map((sub, index) => {
                                            const isSubActive =
                                                activeItem.sub === sub.href;
                                            return (
                                                <motion.div
                                                    key={sub.href}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{
                                                        duration: 0.2,
                                                        delay: 0.2 * index,
                                                    }}
                                                >
                                                    <Link
                                                        href={sub.href}
                                                        className={cn(
                                                            "block rounded-sm px-2 py-2 font-poppins-semibold text-sm",
                                                            isSubActive
                                                                ? "bg-accent"
                                                                : "bg-secondary hover:bg-accent"
                                                        )}
                                                        onClick={() =>
                                                            handleLinkClick(
                                                                item.href,
                                                                sub.href
                                                            )
                                                        }
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                </motion.div>
                                            );
                                        })}
                                    </motion.li>
                                )}
                        </AnimatePresence>
                    </ul>
                );
            })}
        </nav>
    );
};

export default DesktopNav;
