import { cn } from "../utils/cn";

const HamburgerMenu = ({
    onclick,
    isOpen,
}: {
    onclick: () => void;
    isOpen: boolean;
}) => {
    return (
        <button
            onClick={onclick}
            aria-label={cn(isOpen ? "Close Menu" : "Open Menu")}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="relative z-[1010] flex h-7 w-10 cursor-pointer flex-col justify-between"
        >
            <div className="relative h-6 w-6">
                <span
                    className={cn(
                        "absolute left-0 h-0.5 w-full transform bg-primary transition duration-300 ease-in-out",
                        isOpen ? "top-3 -rotate-45" : "top-0.5 skew-y-12"
                    )}
                ></span>
                <span
                    className={cn(
                        "absolute left-0 top-3 h-0.5 w-full transform bg-primary transition duration-300 ease-in-out",
                        isOpen ? "opacity-0" : "skew-y-12"
                    )}
                ></span>
                <span
                    className={cn(
                        "absolute left-0 h-0.5 w-full transform bg-primary transition duration-300 ease-in-out",
                        isOpen ? "top-3 rotate-45" : "top-[1.35rem] skew-y-12"
                    )}
                ></span>
            </div>
        </button>
    );
};

export default HamburgerMenu;
