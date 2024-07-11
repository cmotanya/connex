import React, { ReactNode } from "react";
import Header from "../header-page";

const ServiceLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <Header />
            {children}
        </main>
    );
};

export default ServiceLayout;
