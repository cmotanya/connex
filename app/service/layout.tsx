import React, { ReactNode } from "react";
import Header from "../header-page";
import Footer from "../footer";

const ServiceLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    );
};

export default ServiceLayout;
