import React from "react";
import MainPage from "./home-page";
import Header from "./header-page";
import ContactPage from "./contact/page";

export default function Home() {
    return (
        <main>
            <Header />
            <MainPage />
        </main>
    );
}
