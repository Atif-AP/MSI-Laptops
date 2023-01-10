import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import {title, link} from "./laptop.module.css"

const Laptop = ({laptop, slug}) => {
    const profile = getImage(laptop.msiLaptopsFields.picture.localFile)
    return (
        <Link to={slug} className={link}>
            <GatsbyImage image={profile} alt={laptop.msiLaptopsFields.picture.altText} />
            <div className={title}>
                {laptop.msiLaptopsFields.title}
            </div>
        </Link>
    )
}

export default Laptop;