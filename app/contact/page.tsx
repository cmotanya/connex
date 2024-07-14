import React from "react";
import Header from "../header-page";
import Image from "next/image";

function Contact() {
    return (
        <section>
            <Header />

            <div className="h-dvh">
                <Image src={"/images/aboutUs.jpg"} alt="logo image" fill />
            </div>
            <form action="">
                <h1>Have a Question - Contact Us</h1>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" />
                </div>
                <div>
                    <label htmlFor="">Phone</label>
                    <input type="tel" />
                </div>
                <div>
                    <label htmlFor="">Message</label>
                    <textarea />
                </div>
            </form>
        </section>
    );
}

export default Contact;
