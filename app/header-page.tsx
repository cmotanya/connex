"use client";

import Image from "next/image";
import Link from "next/link";
import DesktopNav from "./Components/nav-desktop";
import MobileNav from "./Components/nav-mobile";
import { useEffect, useState } from "react";
import { cn } from "./utils/cn";

const Header = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={cn(
                "duration-400 fixed z-[9999] flex h-24 w-full items-center justify-between bg-transparent px-5 font-roboto-medium transition-colors",
                hasScrolled ? "bg-800 shadow-2xl" : "bg-transparent"
            )}
        >
            <Link href="/">
                <Image
                    src="/images/connex-logo.png"
                    alt="connex logo"
                    width="200"
                    height="200"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDEyMDAgNDAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWYyOTM3Ii8+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzM3NDE1MSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ieCIgdmFsdWVzPSItMTAwJTsxMDAlIiBkdXI9IjEuNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9yZWN0Pjwvc3ZnPg=="
                    className="w-[10rem] cursor-pointer object-cover"
                />
            </Link>

            <DesktopNav />

            <MobileNav />
        </header>
    );
};

export default Header;
