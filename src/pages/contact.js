import Layout from "../components/layout";
import React from "react";
import {container} from "./contact.module.css"
import { graphql } from "gatsby";

export const query = graphql`
query {
    wpPage(slug: {eq: "contact-us"}) {
      contactUsFields {
        address
        city
        facebook
        instagram
        zipcode
      }
    }
  }
`

const ContactPage = ({data: {wpPage: {contactUsFields: contact}}}) => {
    return (
        <Layout>
            <div className={container}>
                <h1>CONTACT US</h1>
                <h2>Email: msi@laptops.com</h2>
                <h2>Number: 0409892909</h2>
                <h2>Address: {contact.address}, {contact.zipcode} {contact.city}</h2>
            </div>
        </Layout>
    )
}

export default ContactPage;