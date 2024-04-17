import React from "react";
import Header from "@/app/includes/header";
import Footer from "@/app/includes/footer";
import Link from "next/link";
import "./home.scss";
export default function Home() {
  return (
    <>
      <Header/>
      <React.Fragment>
        <main className="home-main">
          <div className="main-container">
            <div className="home-main-content">
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
              <section className="home-main-section">
                <h1>Find the Right
                  <span>Service</span>
                  Right away
                </h1>
                <p className="home-main-section-info">
                  Lorem ipsum dolor sit amet consectetur.
                  Viverra pellentesque cursus
                  scelerisque senectus nisl.
                </p>
                <div className="home-search-container">
                  <div className="home-search-wrapper">
                    <i className="icon-search" />
                    <input className="home-search" type="text" placeholder="Search" />
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
              <h5 className="section-subtitle">Lorem ipsum dolor</h5>
              <h3 className="section-title">Popular Services</h3>
              <div className="services-items-wrapper">
                <div className="service-card-container">
                  <button type="button" className="card-get-btn">
                    <span className="card-get-btn-txt">Get Start</span>
                  </button>
                  <div className="service-card-info-container">
                    <h6 className="card-info-txt">Build your brand</h6>
                    <h4 className="card-title-txt">Graphic Design</h4>
                    <button className="card-link-btn">
                      <i className="icon-link" />
                    </button>
                  </div>
                  <div className="service-card-img-container item-0" />
                </div>
                <div className="service-card-container">
                  <button type="button" className="card-get-btn">
                    <span className="card-get-btn-txt">Get Start</span>
                  </button>
                  <div className="service-card-info-container">
                    <h6 className="card-info-txt">Build your brand</h6>
                    <h4 className="card-title-txt">Graphic Design</h4>
                    <button className="card-link-btn">
                      <i className="icon-link" />
                    </button>
                  </div>
                  <div className="service-card-img-container item-1" />
                </div>
                <div className="service-card-container">
                  <button type="button" className="card-get-btn">
                    <span className="card-get-btn-txt">Get Start</span>
                  </button>
                  <div className="service-card-info-container">
                    <h6 className="card-info-txt">Build your brand</h6>
                    <h4 className="card-title-txt">Graphic Design</h4>
                    <button className="card-link-btn">
                      <i className="icon-link" />
                    </button>
                  </div>
                  <div className="service-card-img-container item-2" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="middle-banner">
          <div className="main-container">
            <div className="middle-banner-content">
              <div className="middle-banner-info">
                <h5 className="middle-banner-min-txt">Lorem ipsum dolor</h5>
                <h3 className="middle-banner-title light">We Will Help You Grow</h3>
                <span className="middle-banner-info-txt">
                  Lorem ipsum dolor sit amet consectetur. Augue eu vel in eros tincidunt neque egestas.
                  Proin ante urna natoque at vivamus turpis. Sem in morbi cursus dignissim donec.
                </span>
                <button type="button" className="middle-banner-btn">
                  <h5>Learn More</h5>
                </button>
              </div>
              <div className="middle-banner-person-info">
                <div className="banner-students-info">
                  <h3 className="light">340</h3>
                  <span className="banner-students-info-txt">Students over the world</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="benefit-section">
          <div className="main-container">
            <div className="benefit-section-container">
              <h5 className="section-subtitle">Lorem ipsum dolor</h5>
              <h3 className="section-title">The best part? Everything.</h3>
              <div className="benefit-section-items-container">
                <div className="benefit-section-item">
                  <div className="benefit-item-inner-img" />
                  <p className="benefit-item-title">Stick to your budget</p>
                  <h5 className="benefit-item-info">Find the right service for every price point. No hourly rates, just project-based pricing.</h5>
                </div>
                <div className="benefit-section-item">
                  <div className="benefit-item-inner-img" />
                  <p className="benefit-item-title">Get quality work done quickly</p>
                  <h5 className="benefit-item-info">Hand your project over to a talented freelancer in minutes, get long-lasting results.</h5>
                </div>
                <div className="benefit-section-item">
                  <div className="benefit-item-inner-img" />
                  <p className="benefit-item-title">Pay when you're happy</p>
                  <h5 className="benefit-item-info">Upfront quotes mean no surprises. Payments only get released when you approve.</h5>
                  <div className="benefit-item-top-shine">
                    <span className="benefit-item-top-shine-txt">Such Company Values!</span>
                  </div>
                </div>
                <div className="benefit-section-item">
                  <div className="benefit-item-inner-img" />
                  <p className="benefit-item-title">Count on 24/7 support</p>
                  <h5 className="benefit-item-info">Our round-the-clock support team is available to help anytime, anywhere.</h5>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="get-in-touch-section">
          <p className="click-txt">Click to</p>
          <h3 className="light">Get in touch</h3>
        </section>
      </React.Fragment>
      <Footer/>
    </>
  )
}
