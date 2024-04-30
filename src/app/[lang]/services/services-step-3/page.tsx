"use client"

import Header from "@/app/[lang]/includes/header";
import Footer from "@/app/[lang]/includes/footer";
import Link from "next/link";
import "./services-step-3.scss";
import SchedulerSideBar from "@/app/[lang]/includes/schedulerSideBar";
import {useDictionary} from "@/app/[lang]/dictionary-provider";

export default function ServicesStepThree() {
    const dictionary = useDictionary()

    return (
        <>
            <Header/>
            <div className="services-steps-wrapper">
                <div className="main-container">
                    <div className="steps-main-wrapper light">
                        <div className="steps-top-row">
                            <h6>{dictionary.meeting_scheduler_step_1_title}</h6>
                            <button type="button" className="steps-top-row-close-btn">
                                <i className="icon-close"/>
                            </button>
                        </div>
                        <div className="steps-main-content">
                            <SchedulerSideBar/>
                            <div className="steps-main-column">
                                <h4>{dictionary.meeting_wizard_step_3_title}</h4>
                                <h6>{dictionary.meeting_wizard_step_3_description}</h6>
                                <div className="steps-main-items-wrapper">
                                    <div className="steps-inputs-container">
                                        <div className="steps-inputs-content">
                                            <div className="steps-inputs-row">
                                                <div className="steps-input-title-container">
                                                    <label
                                                        className="steps-label">{dictionary.meeting_wizard_step_3_form_name}</label>
                                                    <input className="steps-input"
                                                           placeholder={dictionary.meeting_wizard_step_3_form_name_placeholder}
                                                           type="text"/>
                                                </div>
                                                <div className="steps-input-title-container">
                                                    <label
                                                        className="steps-label">{dictionary.meeting_wizard_step_3_form_phone}</label>
                                                    <input className="steps-input"
                                                           placeholder={dictionary.meeting_wizard_step_3_form_phone_placeholder}
                                                           type="text"/>
                                                </div>
                                            </div>
                                            <div className="steps-inputs-row">
                                                <div className="steps-input-title-container">
                                                    <label
                                                        className="steps-label">{dictionary.meeting_wizard_step_3_form_email}</label>
                                                    <input className="steps-input"
                                                           placeholder={dictionary.meeting_wizard_step_3_form_email_placeholder}
                                                           type="text"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="learn-link-bottom-buttons-row">
                                    <Link href={"/services/services-step-2"} className="learn-bottom-link-btn">
                                        <i className="icon-back"/>
                                        {dictionary.meeting_wizard_step_2_back}
                                    </Link>
                                    <Link href={"/services/services-step-4"}
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