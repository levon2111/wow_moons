import Header from "@/app/[lang]/includes/header";
import Footer from "@/app/[lang]/includes/footer";
import Link from "next/link";
import "./services-step-3.scss";
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
                                <h4>We’d Love to Know More About You</h4>
                                <h6>Please fill out the information below so we can better understand your needs and
                                    tailor our services accordingly. This will help us provide you with a personalized
                                    and efficient experience.</h6>
                                <div className="steps-main-items-wrapper">
                                    <div className="steps-inputs-container">
                                        <div className="steps-inputs-content">
                                            <div className="steps-inputs-row">
                                                <div className="steps-input-title-container">
                                                    <label className="steps-label">Name / Company Name*</label>
                                                    <input className="steps-input"
                                                           placeholder="Your name or company"
                                                           type="text"/>
                                                </div>
                                                <div className="steps-input-title-container">
                                                    <label className="steps-label">Phone number*</label>
                                                    <input className="steps-input"
                                                           placeholder="Contact number"
                                                           type="text"/>
                                                </div>
                                            </div>
                                            <div className="steps-inputs-row">
                                                <div className="steps-input-title-container">
                                                    <label className="steps-label">Email</label>
                                                    <input className="steps-input"
                                                           placeholder="Email address"
                                                           type="text"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="learn-link-bottom-buttons-row">
                                    <Link href={"/services/services-step-2"} className="learn-bottom-link-btn">
                                        <i className="icon-back"/>
                                        Back
                                    </Link>
                                    <Link href={"/services/services-step-4"} className="learn-bottom-link-btn next">Next
                                        Step</Link>
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