"use client"

import Header from "@/app/[lang]/includes/header";
import Footer from "@/app/[lang]/includes/footer";
import Link from "next/link";
import "./services-step-1.scss";
import SchedulerSideBar from "@/app/[lang]/includes/schedulerSideBar";
import {useDictionary} from "@/app/[lang]/dictionary-provider";

export default function ServicesStepOne() {
    const dictionary = useDictionary()

    return (
        <>
            <Header/>
            <div className="services-steps-wrapper">
                <div className="main-container">
                    <div className="steps-main-wrapper light">
                        <div className="steps-top-row">
                            <h6>{dictionary.meeting_scheduler_step_1_title}</h6>
                            <Link href={"/home"} className={"steps-top-row-close-btn"}>
                                <i className="icon-close"/>
                            </Link>
                        </div>
                        <div className="steps-main-content">
                            <SchedulerSideBar/>
                            <div className="steps-main-column">
                                <h4>{dictionary.meeting_scheduler_step_1_subtitle}</h4>
                                <h6>{dictionary.meeting_scheduler_step_1_description}</h6>
                                <div className="steps-main-items-wrapper">
                                    <div className="steps-main-items-container">
                                        <div className="steps-main-item-card">
                                            <input className="step-radio-hidden" type="radio" name="learn-step-radio"/>
                                            <div className="step-item-img-container">
                                                <div className="step-item-img"/>
                                                <i className="icon-done-outline"/>
                                            </div>
                                            <div className="step-item-info-container">
                                                <p className="step-item-info-title">{dictionary.meeting_scheduler_step_1_online}</p>
                                                <h6>{dictionary.meeting_scheduler_step_1_online_description}</h6>
                                            </div>
                                            <div className="step-item-bg"/>
                                        </div>
                                        <div className="steps-main-item-card">
                                            <input className="step-radio-hidden" type="radio" name="learn-step-radio"/>
                                            <div className="step-item-img-container">
                                                <div className="step-item-img"/>
                                                <i className="icon-done-outline"/>
                                            </div>
                                            <div className="step-item-info-container">
                                                <p className="step-item-info-title">{dictionary.meeting_scheduler_step_1_offline}</p>
                                                <h6>{dictionary.meeting_scheduler_step_1_offline_description}</h6>
                                            </div>
                                            <div className="step-item-bg"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="learn-link-bottom-buttons-row">
                                    <Link href={"/services/services-step-2"}
                                          className="learn-bottom-link-btn next">{dictionary.meeting_wizard_next}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}