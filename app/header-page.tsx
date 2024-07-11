import Image from "next/image";
import Link from "next/link";
import DesktopNav from "./Components/nav-desktop";
import MobileNav from "./Components/nav-mobile";

const Header = () => {
    return (
        <header className="fixed z-[9999] flex h-24 w-full items-center justify-between bg-transparent px-5 font-roboto-medium">
            <Link href="/">
                <Image
                    src="/images/connex-logo.png"
                    alt="connex logo"
                    width="200"
                    height="200"
                    priority
                    className="w-[10rem] cursor-pointer object-cover"
                />
            </Link>

            <DesktopNav />

            <MobileNav />
        </header>
    );
};

export default Header;
