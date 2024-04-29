"use client"

import React from "react";
import Link from "next/link";
import "./home.scss";
import Header from "@/app/[lang]/includes/header";
import Footer from "@/app/[lang]/includes/footer";
import GetTouchSection from "@/app/[lang]/includes/getTouchSection";
import CardItem from "@/_components/CardItem";
import {useDictionary} from "@/app/[lang]/dictionary-provider";

export default function Home() {
    const dictionary = useDictionary()
    return (
        <>
            <Header/>
            <React.Fragment>
                <main className="home-main">
                    <div className="main-container">
                        <div className="home-main-content">
                            <div className="service-label">
                                <Link href={"/services/mobile-app-design"}>
                                    {dictionary.home_page_services_packaging}

                                </Link>
                            </div>
                            <div className="service-label">
                                <Link href={"/services/web-app-software-design"}>
                                    {dictionary.home_page_services_web_app}
                                </Link>
                            </div>
                            <div className="service-label">
                                <Link href={"/services/product-design"}>
                                    {dictionary.home_page_services_graphic}
                                </Link>
                            </div>
                            <div className="service-label">
                                <Link href={"/services/graphic-design-animations"}>
                                    {dictionary.home_page_services_product}
                                </Link>
                            </div>
                            <div className="service-label">
                                <Link href={"/services/visual-design"}>
                                    {dictionary.home_page_services_mobile}
                                </Link>
                            </div>
                            <section className="home-main-section">
                                <h1 dangerouslySetInnerHTML={{__html: dictionary.home_page_main_section_heading}}></h1>
                                <p className="home-main-section-info">
                                    {dictionary.home_page_main_section_info}
                                </p>
                                <div className="home-search-container">
                                    <div className="home-search-wrapper">
                                        <i className="icon-search"/>
                                        <input className="home-search" type="text"
                                               placeholder={dictionary.home_page_search_placeholder}/>
                                    </div>
                                    {/*ToDo add active class for open search bottom dropdown*/}
                                    <div className="search-items-wrapper">
                                        <div className="search-items-container">
                                            <div className="search-items-content">
                                                <div className="search-items-row">
                                                    <span className="search-items-row-txt">Printing</span>
                                                </div>
                                                <div className="search-items-row">
                                                    <span className="search-items-row-txt">UI/UX Design</span>
                                                </div>
                                                <div className="search-items-row">
                                                    <span className="search-items-row-txt">Packaging</span>
                                                </div>
                                                <div className="search-items-row">
                                                    <span className="search-items-row-txt">Marketing Design</span>
                                                </div>
                                                <div className="search-items-row">
                                                    <span className="search-items-row-txt">Visual Design</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
                <section className="services-section-container">
                    <div className="main-container">
                        <div className="services-section">
                            <h5 className="section-subtitle">{dictionary.home_services_subtitle}</h5>
                            <h3 className="section-title">{dictionary.home_services_title}</h3>
                            <div className="services-items-wrapper">
                                <CardItem/>
                                <CardItem/>
                                <CardItem/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="middle-banner">
                    <div className="main-container">
                        <div className="middle-banner-content">
                            <div className="middle-banner-info">
                                <h5 className="middle-banner-min-txt">{dictionary.home_creativity_subtitle}</h5>
                                <h3 className="middle-banner-title light">{dictionary.home_creativity_title}</h3>
                                <span className="middle-banner-info-txt">
                                    {dictionary.home_creativity_description}
                                </span>
                                <Link className="middle-banner-btn" href={"/learn"}>
                                    {dictionary.home_learn_more}
                                </Link>
                            </div>
                            <div className="middle-banner-person-info">
                                <div className="banner-students-info">
                                    <h3 className="light">340</h3>
                                    <span className="banner-students-info-txt">{dictionary.home_students}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="benefit-section">
                    <div className="main-container">
                        <div className="benefit-section-container">
                            <h5 className="section-subtitle">{dictionary.home_value_subtitle}</h5>
                            <h3 className="section-title">{dictionary.home_value_title}</h3>
                            <div className="benefit-section-items-container">
                                <div className="benefit-section-item">
                                    <div className="benefit-item-inner-img"/>
                                    <p className="benefit-item-title">{dictionary.home_budget_subtitle}</p>
                                    <h5 className="benefit-item-info">{dictionary.home_budget_description}</h5>
                                </div>
                                <div className="benefit-section-item">
                                    <div className="benefit-item-inner-img"/>
                                    <p className="benefit-item-title">{dictionary.home_swift_title}</p>
                                    <h5 className="benefit-item-info">{dictionary.home_swift_description}</h5>
                                </div>
                                <div className="benefit-section-item">
                                    <div className="benefit-item-inner-img"/>
                                    <p className="benefit-item-title">{dictionary.home_satisfaction_title}</p>
                                    <h5 className="benefit-item-info">{dictionary.home_satisfaction_description}</h5>
                                    <div className="benefit-item-top-shine">
                                        <span className="benefit-item-top-shine-txt">{dictionary.home_promise}</span>
                                    </div>
                                </div>
                                <div className="benefit-section-item">
                                    <div className="benefit-item-inner-img"/>
                                    <p className="benefit-item-title">{dictionary.home_resources_title}</p>
                                    <h5 className="benefit-item-info">{dictionary.home_resources_description}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <GetTouchSection/>
            </React.Fragment>
            <Footer/>
        </>
    )
}
