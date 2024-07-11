import React from "react";
import Header from "../header-page";

const CorporateLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <Header />
            <h1>Corporate</h1>
            {children}
        </main>
    );
};

export default CorporateLayout;
