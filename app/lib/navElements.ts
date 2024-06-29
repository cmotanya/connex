const navElements = [
    {
        name: "Home",
        href: "/",
        subItem: [],
    },
    {
        name: "Service",
        href: "/service",

        subItem: [
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
        subItem: [
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
        subItem: [],
    },
];

export default navElements;
