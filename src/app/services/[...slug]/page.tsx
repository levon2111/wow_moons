import Header from "@/app/includes/header";
import React from "react";
import Footer from "@/app/includes/footer";

export default function SingleService({params}: {
    params: {
        slug: string[];
    }
}) {
    return (
        <>
            <Header/>
            <section className="banner">
                <h1>Graphic Design</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Viverra pellentesque<br/>
                    cursus scelerisque senectus nisl.
                </p>
                <button>Get Start</button>
            </section>
            <section className="recent-works">
                <div className="recent-works-header">
                    <span>Lorem ipsum dolor</span>
                    <h2>All Services</h2>
                </div>
                <div className="recent-works-list">
                    <div className="recent-works-item item-0">
                        <div className="overlay">
                            <span className="description">Build your brand</span>
                            <span className="title">Graphic Design</span>
                            <button className="start-icon">
                                <img src="/img/icon-arrow.svg"/>
                            </button>
                            <button className="start">Get Start</button>
                        </div>
                    </div>
                    <div className="recent-works-item item-1">
                        <div className="overlay">
                            <span className="description">Build your brand</span>
                            <span className="title">Graphic Design</span>
                            <button className="start-icon">
                                <img src="/img/icon-arrow.svg"/>
                            </button>
                            <button className="start">Get Start</button>
                        </div>
                    </div>
                    <div className="recent-works-item item-2">
                        <div className="overlay">
                            <span className="description">Build your brand</span>
                            <span className="title">Graphic Design</span>
                            <button className="start-icon">
                                <img src="/img/icon-arrow.svg"/>
                            </button>
                            <button className="start">Get Start</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pricing">
                <h2>Pricing</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Ut magna volutpat viverra at<br/>
                    ullamcorper id lacinia.
                </p>
                <div className="pricing-cards">
                    <div className="pricing-card v-1">
          <span className="features-label">
            <span>5</span>
            features
          </span>
                        <h3>Version 1</h3>
                        <ul>
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            <li>Feature 4</li>
                        </ul>
                        <a href="#">Read more</a>
                    </div>
                    <div className="pricing-card v-2">
          <span className="features-label">
            <span>10</span>
            features
          </span>
                        <h3>Version 2</h3>
                        <ul>
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            <li>Feature 4</li>
                        </ul>
                        <a href="#">Read more</a>
                    </div>
                    <div className="pricing-card v-3">
          <span className="features-label">
            <span>15</span>
            features
          </span>
                        <h3>Version 3</h3>
                        <ul>
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            <li>Feature 4</li>
                        </ul>
                        <a href="#">Read more</a>
                    </div>
                </div>
            </section>
            <section className="cooperation">
                <h2>Introducing WoWMoon</h2>
                <h1>
                    Hurry Up to Cooperate<br/>
                    With Us!!!
                </h1>
                <button>Get Start</button>
                <p>
                    Get your work in front of thousands of<br/>
                    creatives.
                </p>
            </section>
            <Footer/>
        </>
    )
}
