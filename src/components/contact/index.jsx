import React from "react";
import Section from "../shared/section";
import "./style.scss";
import ContactInfo from "./contact-info";

const Contact = () => {
    return (
        <Section
            id="contact"
            title="Any Question feel free to contact"
            background="light"
        >
            <div className="contact-content-wrapper">
                <ContactInfo />
            </div>
        </Section>
    );
};

export default Contact;
