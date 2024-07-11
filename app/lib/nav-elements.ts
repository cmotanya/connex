const NavElements = [
    {
        name: "Home",
        href: "/",
        subItems: [],
    },
    {
        name: "Service",
        href: "/service",

        subItems: [
            {
                name: "Freight Forwarding",
                href: "/service/freight-forwarding",
            },
            {
                name: "Warehousing",
                href: "/service/warehousing",
            },
            {
                name: "Customs Brokerage",
                href: "/service/customs-brokerage",
            },
        ],
    },
    {
        name: "Corporate",
        href: "/corporate",
        subItems: [
            {
                name: "About",
                href: "/corporate/about",
            },
            {
                name: "Our Team",
                href: "/corporate/our-team",
            },
            {
                name: "Careers",
                href: "/corporate/careers",
            },
        ],
    },
    {
        name: "Contact",
        href: "/contact",
        subItems: [],
    },
];

export default NavElements;
