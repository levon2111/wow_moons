'use client'

import Link from "next/link";
import {useDictionary} from "@/app/[lang]/dictionary-provider";
import {usePathname, useRouter} from "next/navigation";
import {Locale} from "@/app/[lang]/i18n";
import {useEffect, useState} from "react";

import "./header.scss";

export default function Header() {

    const dictionary = useDictionary()

    const router = useRouter()
    const pathname = usePathname()
    let initialSelectedLanguage = ['en', "es", "de", "fr", "it"].includes(pathname?.split("/")[1] as string) ? pathname?.split("/")[1]?.toUpperCase() : pathname;
    useEffect(() => {
        initialSelectedLanguage = localStorage.getItem("selectedLanguage") || "EN"
    }, []);

    const [selectedLanguage, setSelectedLanguage] = useState(initialSelectedLanguage || "EN")

    const switchLang = (lang: Locale) => {
        localStorage.setItem("selectedLanguage", lang.toUpperCase())
        setSelectedLanguage(lang.toUpperCase())
        document.cookie = `NEXT_LOCALE=${lang}; max-age=31536000; path=/`
        const newPathName = pathname?.replace("/en/", "").replace("/de/", "").replace("/fr/", "").replace("/es/", "").replace("/it/", "")
        if (newPathName === "/en" || newPathName === "/es" || newPathName === "/de" || newPathName === "/fr" || newPathName === "/it") {
            router.push(`/${lang}`)
        } else {
            router.push(`/${lang}/${newPathName}`)
        }
    }

    const [active, setActive] = useState(false);
    return (
        <header className="light">
            <div className="main-container">
                <div className="header-content">
                    <Link className="header-logo-container" href={"/home"}/>
                    <button type="button" className="burger-button">
                        <i className="icon-menu"/>
                    </button>
                    <nav className="header-nav">
                        <Link className="header-link" href={"/services"}>{dictionary.header_services}</Link>
                        <Link className="header-link" href={"/learn"}>{dictionary.header_learn}</Link>
                        <Link className="header-link" href={"/blog"}>{dictionary.header_blog}</Link>
                        <Link className="header-link"
                              href={"/services/services-step-1"}>{dictionary.header_meeting}</Link>
                        <Link className="header-link" href={"/about"}>{dictionary.header_about}</Link>
                    </nav>
                    <div className="header-language-btn-container">
                        {!pathname?.startsWith("/blog") && !pathname?.startsWith("/case-study") ?

                            <div className="header-language-container">
                                <button type="button" className="header-language-btn">
                                    <i className="icon-language"/>
                                    <div className="languages-dropdown-container">
                                        <div className="languages-dropdown-content">
                                            <button type="button" className="languages-dropdown-row-btn en"
                                                    onClick={() => switchLang('en')}>
                                                <span className="languages-img"/>
                                                <span
                                                    className="languages-dropdown-row-btn-txt">{dictionary.header_lang_en}</span>
                                            </button>
                                            <button type="button" className="languages-dropdown-row-btn es"
                                                    onClick={() => switchLang('es')}>
                                                <span className="languages-img"/>
                                                <span
                                                    className="languages-dropdown-row-btn-txt">{dictionary.header_lang_es}</span>
                                            </button>
                                            <button type="button" className="languages-dropdown-row-btn de"
                                                    onClick={() => switchLang('de')}>
                                                <span className="languages-img"/>
                                                <span
                                                    className="languages-dropdown-row-btn-txt">{dictionary.header_lang_de}</span>
                                            </button>
                                            <button type="button" className="languages-dropdown-row-btn it"
                                                    onClick={() => switchLang('it')}>
                                                <span className="languages-img"/>
                                                <span
                                                    className="languages-dropdown-row-btn-txt">{dictionary.header_lang_it}</span>
                                            </button>
                                            <button type="button" className="languages-dropdown-row-btn fr"
                                                    onClick={() => switchLang('fr')}>
                                                <span className="languages-img"/>
                                                <span
                                                    className="languages-dropdown-row-btn-txt">{dictionary.header_lang_fr}</span>
                                            </button>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            : null
                        }
                        <Link href={"/contact-us/email"} className="get-btn-link">
                            <span className="get-btn-txt">{dictionary.header_contact}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
