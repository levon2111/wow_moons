"use client"
import Link from "next/link";
import {useDictionary} from "@/app/[lang]/dictionary-provider";

export default function Footer() {
    const dictionary = useDictionary()

    return (
        <footer>
            <div className="main-container">
                <nav className="footer-nav">
                    <div className="footer-column-container">
                        <div className="footer-column">
                            <Link className="footer-link" href={"/services"}>{dictionary.header_services}</Link>
                            <Link className="footer-link"
                                  href={"/services/branding-and-printing"}>{dictionary.footer_branding}</Link>
                            <Link className="footer-link" href={"/services/ui-ux-design"}>{dictionary.footer_ui_ux}</Link>
                        </div>
                        <div className="footer-column">
                            <Link className="footer-link" href={"/services/visual-design"}>{dictionary.footer_visual}</Link>
                            <Link className="footer-link"
                                  href={"/services/marketing-design"}>{dictionary.footer_marketing}</Link>
                            <Link className="footer-link"
                                  href={"/services/packaging-and-covers"}>{dictionary.footer_packaging}</Link>
                        </div>
                    </div>
                    <div className="footer-column-container">
                        <div className="footer-column">
                            <Link className="footer-link" href={"/about-us"}>{dictionary.header_about}</Link>
                            <Link className="footer-link" href={"/learn"}>{dictionary.header_learn}</Link>
                            <Link className="footer-link" href={"/blog"}>{dictionary.header_blog}</Link>
                            <Link className="footer-link" href={"/contact-us"}>{dictionary.header_contact}</Link>
                        </div>
                        <div className="footer-column">
                            <Link className="footer-link" href={"/faq"}>{dictionary.footer_faq}</Link>
                            <Link className="footer-link" href={"/privacy-policy"}>{dictionary.footer_privacy}</Link>
                            <Link className="footer-link" href={"/terms-and-conditions"}>{dictionary.footer_terms}</Link>
                        </div>
                    </div>
                    <div className="footer-column rights">
                        <p className="footer-terms" dangerouslySetInnerHTML={{__html: dictionary.footer_rights}}></p>
                    </div>
                </nav>
                <div className="footer-logo-container"/>
            </div>
        </footer>
    );
}
