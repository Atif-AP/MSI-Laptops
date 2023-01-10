import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const Laptop = ({laptop, slug}) => {
    const profile = getImage(laptop.msiLaptopsFields.picture.localFile)
    return (
        <Link to={slug}>
            <GatsbyImage image={profile} alt={laptop.msiLaptopsFields.picture.altText} />
            <div>
                {laptop.msiLaptopsFields.title}
            </div>
        </Link>
    )
}

export default Laptop;