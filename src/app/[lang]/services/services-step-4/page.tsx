"use client"

import Header from "@/app/[lang]/includes/header";
import Footer from "@/app/[lang]/includes/footer";
import Link from "next/link";
import "./services-step-4.scss";
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
                                <h4>{dictionary.meeting_wizard_step_4_title}</h4>
                                <h6>{dictionary.meeting_wizard_step_4_description}</h6>
                                <div className="steps-main-items-wrapper">
                                    <div className="steps-meeting-type-container">
                                        <h6>{dictionary.meeting_wizard_step_4_question_1}</h6>
                                        <div className="steps-meeting-type-item">
                                            <input className="meeting-type-radio-hidden" type="radio"
                                                   name="meeting-type-radio"/>
                                            <p className="middle-txt">{dictionary.meeting_scheduler_step_1_online}</p>
                                            <span
                                                className="small-txt">{dictionary.meeting_wizard_step_4_question_1_description}</span>
                                            <div className="step-item-bg"/>
                                        </div>
                                        <h6>{dictionary.meeting_wizard_step_4_question_2}</h6>
                                        <div className="steps-meeting-type-item">
                                            <input className="meeting-type-radio-hidden" type="radio"
                                                   name="meeting-type-radio"/>
                                            <p className="middle-txt">January 18</p>
                                            <div className="step-item-bg"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="learn-link-bottom-buttons-row">
                                    <Link href={"/services/services-step-3"} className="learn-bottom-link-btn">
                                        <i className="icon-back"/>
                                        {dictionary.meeting_wizard_step_2_back}
                                    </Link>
                                    <Link href={"/home"}
                                          className="learn-bottom-link-btn next">{dictionary.meeting_wizard_step_4_confirm}</Link>
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