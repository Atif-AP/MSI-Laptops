import React from "react";
import {container,site,info,facebook,instagram} from "./footer.module.css"

const Footer = ({ siteTitle, companyInfo}) => {
    return (
        <footer className={container}>
            <div className={site}>
                <p>{siteTitle}</p>
            </div>
            <div className={info}>
                <p>{`${companyInfo.address}, ${companyInfo.zipCode} ${companyInfo.city}`}</p>
                <div>
                    Follow us:
                    <a
                        className={facebook}
                        target="__blank"
                        href={companyInfo.facebook}
                    />
                    <a
                        className={instagram}
                        target="__blank"
                        href={companyInfo.instagram}
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer;