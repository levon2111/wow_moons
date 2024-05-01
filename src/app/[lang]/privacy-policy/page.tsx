"use client"

import Header from "@/app/[lang]/includes/header";
import Footer from "@/app/[lang]/includes/footer";
import "../../../styles/terms-privacy.scss";
import {useDictionary} from "@/app/[lang]/dictionary-provider";

export default function PrivacyPolicy() {
    const dictionary = useDictionary()

    return (
        <>
            <Header/>
            <section className="terms-privacy-banner-section">
                <div className="term-privacy-main-container banner">
                    <h2>{dictionary.privacy}</h2>
                    <h4>{dictionary.privacy_description}</h4>
                </div>
            </section>
            <div className="term-privacy-wrapper">
                <div className="term-privacy-main-container">
                    <div className="term-privacy-container">
                        <h4 className="term-privacy-paragraph-title">{dictionary.privacy_compliance}</h4>
                        <p className="term-privacy-info-txt">{dictionary.privacy_compliance_description}</p>


                        <h4 className="term-privacy-paragraph-title">{dictionary.privacy_collection}</h4>
                        <p className="term-privacy-info-txt">
                            {dictionary.privacy_collection_title}
                            <br/>
                            <br/>
                            <p>&#x2022; {dictionary.privacy_collection_title_1}</p>
                            <p>&#x2022; {dictionary.privacy_collection_title_2}</p>
                            <p>&#x2022; {dictionary.privacy_collection_title_3}</p>
                            <p>&#x2022; {dictionary.privacy_collection_title_4}</p>
                            <p>&#x2022; {dictionary.privacy_collection_title_5}</p>
                            <p>&#x2022; {dictionary.privacy_collection_title_6}</p>
                            <p>&#x2022; {dictionary.privacy_collection_title_7}</p>
                            <p>&#x2022; {dictionary.privacy_collection_title_8}</p>

                            <br/>
                            <p>{dictionary.privacy_collection_title_9}</p>
                            <br/>
                            <p>
                                {dictionary.privacy_collection_title_10}
                            </p>
                        </p>
                        <h4 className="term-privacy-paragraph-title">{dictionary.privacy_sharing}</h4>
                        <p className="term-privacy-info-txt">
                            {dictionary.privacy_sharing_title}
                            <br/>
                            <br/>
                            <p>&#x2022; {dictionary.privacy_sharing_title_1}</p>
                            <p>&#x2022; {dictionary.privacy_sharing_title_2}</p>
                            <p>&#x2022; {dictionary.privacy_sharing_title_3}</p>
                        </p>

                        <h4 className="term-privacy-paragraph-title">{dictionary.privacy_legal}</h4>
                        <p className="term-privacy-info-txt"><p>
                            {dictionary.privacy_legal_1}</p>
                            <br/>
                            <p>{dictionary.privacy_legal_2}</p>
                            <br/>
                            <p>{dictionary.privacy_legal_3}</p>
                        </p>

                        <h4 className="term-privacy-paragraph-title">{dictionary.privacy_information}</h4>
                        <p className="term-privacy-info-txt">
                            <p>{dictionary.privacy_information_1}</p>
                            <br/>
                            <br/>
                            <p>{dictionary.privacy_information_2}</p>
                        </p>

                        <h4 className="term-privacy-paragraph-title">{dictionary.privacy_transfers}</h4>
                        <p className="term-privacy-info-txt">{dictionary.privacy_transfers_1}</p>

                        <h4 className="term-privacy-paragraph-title">{dictionary.privacy_security}</h4>
                        <p className="term-privacy-info-txt">{dictionary.privacy_security_1}</p>

                        <h4 className="term-privacy-paragraph-title">{dictionary.privacy_marketing}</h4>
                        <p className="term-privacy-info-txt">{dictionary.privacy_marketing_1}</p>

                        <h4 className="term-privacy-paragraph-title">{dictionary.privacy_links}</h4>
                        <p className="term-privacy-info-txt">{dictionary.privacy_links_1}</p>

                        <h4 className="term-privacy-paragraph-title">{dictionary.privacy_rights}</h4>
                        <p className="term-privacy-info-txt">
                            <p>{dictionary.privacy_rights_1}</p>
                            <br/>
                            <br/>
                            <p>&#x2022; {dictionary.privacy_rights_2}</p>
                            <p>&#x2022; {dictionary.privacy_rights_3}</p>
                            <p>&#x2022; {dictionary.privacy_rights_4}</p>
                            <p>&#x2022; {dictionary.privacy_rights_5}</p>
                            <p>&#x2022; {dictionary.privacy_rights_6}</p>
                            <br/>
                            <p>{dictionary.privacy_rights_7}</p>
                        </p>

                        <h4 className="term-privacy-paragraph-title">{dictionary.privacy_cookie}</h4>
                        <p className="term-privacy-info-txt">{dictionary.privacy_cookie_1}</p>
                        <h4 className="term-privacy-paragraph-title">{dictionary.privacy_changes}</h4>
                        <p className="term-privacy-info-txt">{dictionary.privacy_changes_1}</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}