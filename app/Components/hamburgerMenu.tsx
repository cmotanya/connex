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
            <span
                className={cn(
                    "block h-1 w-full transform rounded-md bg-primary transition duration-300",
                    isOpen ? "translate-y-3 rotate-45" : "translate-y-0"
                )}
            ></span>
            <span
                className={cn(
                    "block h-1 w-full transform rounded-md bg-primary transition duration-300",
                    isOpen ? "opacity-0" : "opacity-1"
                )}
            ></span>
            <span
                className={cn(
                    "block h-1 w-full transform rounded-md bg-primary transition duration-300",
                    isOpen ? "-translate-y-3 -rotate-45" : "translate-y-0"
                )}
            ></span>
        </button>
    );
};

export default HamburgerMenu;
