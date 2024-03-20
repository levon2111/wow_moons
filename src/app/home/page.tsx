import React from "react";
import Header from "@/app/includes/header";
import Footer from "@/app/includes/footer";
import Link from "next/link";
import 'tailwindcss/tailwind.css';
export default function Home() {
    return (
        <>
            <Header/>
            <React.Fragment>
                <main>

                    <div className="service-label">
                        <Link href={"/services/marketing-design"}>
                            Marketing Design
                        </Link>
                    </div>
                    <div className="service-label">
                        <Link href={"/services/branding-and-printing"}>
                            Branding & Printing
                        </Link>
                    </div>
                    <div className="service-label">
                        <Link href={"/services/packaging-and-covers"}>
                            Packaging and Covers
                        </Link>
                    </div>
                    <div className="service-label">
                        <Link href={"/services/ui-ux-design"}>
                            UI/UX Design
                        </Link>
                    </div>
                    <div className="service-label">
                        <Link href={"/services/visual-design"}>
                            Visual Design
                        </Link>
                    </div>
                    <section>
                        <h1>Find the Right <span>Service</span> Right away</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Viverra pellentesque cursus
                            scelerisque senectus nisl.
                        </p>
                        <div className="search">Search Dropdown</div>
                    </section>
                </main>
                <section className="shelf">
                    <p>Lorem ipsum dolor</p>
                    <h2>Popular Services</h2>
                    <div className="shelf-items popular-services">
                        <div className="service-item item-0">
                            <div className="overlay">
                                <span className="description">Build your brand</span>
                                <span className="title">Graphic Design</span>
                                <button className="start-icon">
                                    <img src="/img/icon-arrow.svg"/>
                                </button>
                                <button className="start">Get Start</button>
                            </div>
                        </div>
                        <div className="service-item item-1">
                        </div>
                        <div className="service-item item-2"></div>
                    </div>
                </section>

                <section className="banner">
                    <div className="banner-content">
                        <p>Lorem ipsum dolor</p>
                        <h2>We Will Help You Grow</h2>
                        <p className="description">
                            Lorem ipsum dolor sit amet consectetur.<br/>
                            Augue eu vel in eros tincidunt neque egestas.<br/>
                            Proin ante urna natoque at vivamus turpis.<br/>
                            Sem in morbi cursus dignissim donec.
                        </p>
                        <button>Learn More</button>
                    </div>
                </section>

                <section className="shelf">
                    <p>Lorem ipsum dolor</p>
                    <h2>The best part? Everything.</h2>
                    <div className="shelf-items benefit-items">
                        <div className="benefit-item budget">
                            <img src="/img/budget.png" alt="budget"/>
                            <h3>Stick to your budget</h3>
                            <p>
                                Find the right service for every price point. No hourly rates, just
                                project-based pricing.
                            </p>
                        </div>
                        <div className="benefit-item quality">
                            <img src="/img/quality.png" alt="quality"/>
                            <h3>Get quality work done quickly</h3>
                            <p>
                                Hand your project over to a talented freelancer in minutes, get
                                long-lasting results.
                            </p>
                        </div>
                        <div className="benefit-item payment">
                            <img src="/img/payment.png" alt="payment"/>
                            <h3>Pay when you're happy</h3>
                            <p>
                                Upfront quotes mean no surprises. Payments only get released when
                                you approve.
                            </p>
                        </div>
                        <div className="benefit-item support">
                            <img src="/img/support.png" alt="support"/>
                            <h3>Count on 24/7 support</h3>
                            <p>
                                Our round-the-clock support team is available to help anytime,
                                anywhere.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="get-in-touch">
                    <h1>Click to</h1>
                    <p>Get in touch</p>
                </section>
            </React.Fragment>
            <Footer/>
        </>

    )
}
