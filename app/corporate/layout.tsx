import React from "react";
import Header from "../header-page";
import Footer from "../footer";

const CorporateLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    );
};

export default CorporateLayout;
