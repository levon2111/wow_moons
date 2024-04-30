import Header from "@/app/[lang]/includes/header";
import Footer from "@/app/[lang]/includes/footer";
import Link from "next/link";
import "./services-step-1.scss";
import SchedulerSideBar from "@/app/[lang]/includes/schedulerSideBar";

export default function ServicesStepOne() {
    return (
        <>
            <Header/>
            <div className="services-steps-wrapper">
                <div className="main-container">
                    <div className="steps-main-wrapper light">
                        <div className="steps-top-row">
                            <h6>Meeting Scheduler</h6>
                            <Link href={"/home"} className={"steps-top-row-close-btn"}>
                                <i className="icon-close"/>
                            </Link>
                        </div>
                        <div className="steps-main-content">
                            <SchedulerSideBar/>
                            <div className="steps-main-column">
                                <h4>Choose Your Meeting Type</h4>
                                <h6>Select the type of meeting that best suits your needs to ensure a seamless
                                    collaboration with our design team. We offer flexible options to connect, discuss,
                                    and execute your projects effectively.</h6>
                                <div className="steps-main-items-wrapper">
                                    <div className="steps-main-items-container">
                                        <div className="steps-main-item-card">
                                            <input className="step-radio-hidden" type="radio" name="learn-step-radio"/>
                                            <div className="step-item-img-container">
                                                <div className="step-item-img"/>
                                                <i className="icon-done-outline"/>
                                            </div>
                                            <div className="step-item-info-container">
                                                <p className="step-item-info-title">Online</p>
                                                <h6>Ideal for quick discussions or ongoing project updates. Connect with
                                                    us from anywhere in the world without the need for travel. Enjoy the
                                                    convenience of online meetings with fixed project-based pricing — no
                                                    hourly rates apply.</h6>
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
                                                <p className="step-item-info-title">Offline</p>
                                                <h6>Perfect for in-depth discussions and detailed project briefings.
                                                    Meet with our team in person for a tailored service experience. Like
                                                    our online meetings, we offer fixed project-based pricing to keep
                                                    your budget predictable.</h6>
                                            </div>
                                            <div className="step-item-bg"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="learn-link-bottom-buttons-row">
                                    <Link href={"/services/services-step-2"} className="learn-bottom-link-btn next">Next
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