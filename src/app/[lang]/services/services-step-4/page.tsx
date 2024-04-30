import Header from "@/app/[lang]/includes/header";
import Footer from "@/app/[lang]/includes/footer";
import Link from "next/link";
import "./services-step-4.scss";
import SchedulerSideBar from "@/app/[lang]/includes/schedulerSideBar";

export default function ServicesStepThree() {
    return (
        <>
            <Header/>
            <div className="services-steps-wrapper">
                <div className="main-container">
                    <div className="steps-main-wrapper light">
                        <div className="steps-top-row">
                            <h6>Meeting Scheduler</h6>
                            <button type="button" className="steps-top-row-close-btn">
                                <i className="icon-close"/>
                            </button>
                        </div>
                        <div className="steps-main-content">
                            <SchedulerSideBar/>
                            <div className="steps-main-column">
                                <h4>Summary</h4>
                                <h6>Review the details of your scheduled meeting below to ensure everything is correct
                                    before confirming.</h6>
                                <div className="steps-main-items-wrapper">
                                    <div className="steps-meeting-type-container">
                                        <h6>Where</h6>
                                        <div className="steps-meeting-type-item">
                                            <input className="meeting-type-radio-hidden" type="radio"
                                                   name="meeting-type-radio"/>
                                            <p className="middle-txt">Online</p>
                                            <span className="small-txt">Enjoy the convenience of online meetings. No hourly rates, only project-based pricing.</span>
                                            <div className="step-item-bg"/>
                                        </div>
                                        <h6>When</h6>
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
                                        Back
                                    </Link>
                                    <Link href={"/home"} className="learn-bottom-link-btn next">Confirm</Link>
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