import React from "react";
import Header from "@/app/[lang]/includes/header";
import Footer from "@/app/[lang]/includes/footer";
import CardItem from "@/_components/CardItem";
import Link from "next/link";

export default function SingleService({params}: {
  params: {
    slug: string[];
  }
}) {
  return (
    <>
      <Header/>
      <section className="single-service-banner">
        <div className="main-container">
          <div className="single-service-banner-container">
            <div className="single-service-banner-info">
              <h1>Graphic Design</h1>
              <p className="single-service-banner-subtitle">
                Lorem ipsum dolor sit amet consectetur. Viverra pellentesque<br/>
                cursus scelerisque senectus nisl.
              </p>
              <Link href={"/services/services-step-1"} className="single-service-banner-link-btn">
                <span className="single-service-banner-btn-txt">Get Start</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="recent-works-section">
        <div className="main-container">
          <h5 className="section-subtitle">Lorem ipsum dolor</h5>
          <h3 className="section-title">Recent Works</h3>
          <div className="services-items-wrapper">
            <CardItem/>
            <CardItem/>
            <CardItem/>
          </div>
        </div>
      </section>
      <section className="pricing-section">
        <div className="pricing-main-container">
          <div className="pricing-section-content">
            <h3>Pricing</h3>
            <h5>Lorem ipsum dolor sit amet consectetur. Ut magna volutpat viverra at ullamcorper id lacinia.</h5>
            <div className="pricing-section-content-cards">
              <div className="pricing-card-container">
                <div className="pricing-card-status">
                  <p>5</p>
                  <span>features</span>
                </div>
                <h4>Version 1</h4>
                <div className="pricing-card-content">
                  <div className="pricing-info-row">
                    <button type="button" className="pricing-info-row-btn">
                      <i className="icon-plus"/>
                    </button>
                    {/*ToDo add active class on bottom div when clicked on plus btn*/}
                    <div className="pricing-info-txt-container">
                      <h6>Lorem ipsum dolor sit amet consectetur</h6>
                      <div className="pricing-info-hidden-container">
                        <h6>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</h6>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-info-row">
                    <button type="button" className="pricing-info-row-btn">
                      <i className="icon-plus"/>
                    </button>
                    {/*ToDo add active class on bottom div when clicked on plus btn*/}
                    <div className="pricing-info-txt-container">
                      <h6>Lorem ipsum dolor sit amet consectetur</h6>
                      <div className="pricing-info-hidden-container">
                        <h6>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</h6>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-info-row">
                    <button type="button" className="pricing-info-row-btn">
                      <i className="icon-plus"/>
                    </button>
                    {/*ToDo add active class on bottom div when clicked on plus btn*/}
                    <div className="pricing-info-txt-container">
                      <h6>Lorem ipsum dolor sit amet consectetur</h6>
                      <div className="pricing-info-hidden-container">
                        <h6>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</h6>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-info-row">
                    <button type="button" className="pricing-info-row-btn">
                      <i className="icon-plus"/>
                    </button>
                    {/*ToDo add active class on bottom div when clicked on plus btn*/}
                    <div className="pricing-info-txt-container">
                      <h6>Lorem ipsum dolor sit amet consectetur</h6>
                      <div className="pricing-info-hidden-container">
                        <h6>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" className="pricing-read-more-link">
                  Read more
                  <i className="icon-arrow-down"/>
                </a>
              </div>
              <div className="pricing-card-container">
                <div className="pricing-card-status">
                  <p>5</p>
                  <span>features</span>
                </div>
                <h4>Version 1</h4>
                <div className="pricing-card-content">
                  <div className="pricing-info-row">
                    <button type="button" className="pricing-info-row-btn">
                      <i className="icon-plus"/>
                    </button>
                    {/*ToDo add active class on bottom div when clicked on plus btn*/}
                    <div className="pricing-info-txt-container">
                      <h6>Lorem ipsum dolor sit amet consectetur</h6>
                      <div className="pricing-info-hidden-container">
                        <h6>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</h6>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-info-row">
                    <button type="button" className="pricing-info-row-btn">
                      <i className="icon-plus"/>
                    </button>
                    {/*ToDo add active class on bottom div when clicked on plus btn*/}
                    <div className="pricing-info-txt-container">
                      <h6>Lorem ipsum dolor sit amet consectetur</h6>
                      <div className="pricing-info-hidden-container">
                        <h6>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</h6>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-info-row">
                    <button type="button" className="pricing-info-row-btn">
                      <i className="icon-plus"/>
                    </button>
                    {/*ToDo add active class on bottom div when clicked on plus btn*/}
                    <div className="pricing-info-txt-container">
                      <h6>Lorem ipsum dolor sit amet consectetur</h6>
                      <div className="pricing-info-hidden-container">
                        <h6>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</h6>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-info-row">
                    <button type="button" className="pricing-info-row-btn">
                      <i className="icon-plus"/>
                    </button>
                    {/*ToDo add active class on bottom div when clicked on plus btn*/}
                    <div className="pricing-info-txt-container">
                      <h6>Lorem ipsum dolor sit amet consectetur</h6>
                      <div className="pricing-info-hidden-container">
                        <h6>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" className="pricing-read-more-link">
                  Read more
                  <i className="icon-arrow-down"/>
                </a>
              </div>
              <div className="pricing-card-container">
                <div className="pricing-card-status">
                  <p>5</p>
                  <span>features</span>
                </div>
                <h4>Version 1</h4>
                <div className="pricing-card-content">
                  <div className="pricing-info-row">
                    <button type="button" className="pricing-info-row-btn">
                      <i className="icon-plus"/>
                    </button>
                    {/*ToDo add active class on bottom div when clicked on plus btn*/}
                    <div className="pricing-info-txt-container">
                      <h6>Lorem ipsum dolor sit amet consectetur</h6>
                      <div className="pricing-info-hidden-container">
                        <h6>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</h6>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-info-row">
                    <button type="button" className="pricing-info-row-btn">
                      <i className="icon-plus"/>
                    </button>
                    {/*ToDo add active class on bottom div when clicked on plus btn*/}
                    <div className="pricing-info-txt-container">
                      <h6>Lorem ipsum dolor sit amet consectetur</h6>
                      <div className="pricing-info-hidden-container">
                        <h6>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</h6>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-info-row">
                    <button type="button" className="pricing-info-row-btn">
                      <i className="icon-plus"/>
                    </button>
                    {/*ToDo add active class on bottom div when clicked on plus btn*/}
                    <div className="pricing-info-txt-container">
                      <h6>Lorem ipsum dolor sit amet consectetur</h6>
                      <div className="pricing-info-hidden-container">
                        <h6>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</h6>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-info-row">
                    <button type="button" className="pricing-info-row-btn">
                      <i className="icon-plus"/>
                    </button>
                    {/*ToDo add active class on bottom div when clicked on plus btn*/}
                    <div className="pricing-info-txt-container">
                      <h6>Lorem ipsum dolor sit amet consectetur</h6>
                      <div className="pricing-info-hidden-container">
                        <h6>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" className="pricing-read-more-link">
                  Read more
                  <i className="icon-arrow-down"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-cooperation">
        <div className="section-cooperation-content">
          <p className="section-cooperation-min-title">Introducing WowMoon</p>
          <h3 className="light">Hurry Up to Cooperate With Us!!!</h3>
          <button type="button" className="section-cooperation-big-btn">Get Start</button>
          <span className="cooperation-bottom-txt">Get your work in front of thousands of creatives.</span>
        </div>
      </section>
      <Footer/>
    </>
  )
}
