import React from "react";

const Footer = ({ siteTitle, companyInfo}) => {
    return (
        <footer>
        <div>
            <p>{siteTitle}</p>
        </div>
        <div>
            <p>{`${companyInfo.address}, ${companyInfo.zipCode} ${companyInfo.city}`}</p>
            <div>
                Follow us:
                <a
                    target="__blank"
                    href={companyInfo.facebook}
                />
                <a
                    target="__blank"
                    href={companyInfo.instagram}
                />
            </div>
        </div>
    </footer>

    )
}

export default Footer;