import Layout from "../components/layout";
import React from "react";
import {container} from "./contact.module.css"

const ContactPage = () => {
    return (
        <Layout>
            <div className={container}>
                <h1>CONTACT US</h1>
                <h2>Email: msi@laptops.com</h2>
                <h2>Number: 0409892909</h2>
                <h2>Adress: Laptoplei 182, 2060 Antwerpen</h2>
            </div>
        </Layout>
    )
}

export default ContactPage;