import React from "react";
import Header from "@/app/[lang]/includes/header";
import Footer from "@/app/[lang]/includes/footer";
import '../../../styles/services.scss';
import GetTouchSection from "@/app/[lang]/includes/getTouchSection";

export default function Services() {
  return (
    <>
      <Header/>
      <React.Fragment>
        <section className="services-banner">
          <div className="services-banner-content">
            <div className="services-banner-info-container">
              <h2>Services We Provide</h2>
              <h4>
                Lorem ipsum dolor sit amet consectetur. Viverra pellentesque cursus
                scelerisque senectus nisl.
              </h4>
            </div>
          </div>
        </section>
        <main className="services-main-section">
          <div className="main-container">
            <div className="services-content-container">
              <div className="services-header">
                <p className="services-main-section-title">All Services</p>
                <nav className="services-filters">
                  <button type="button" className="services-type-select-btn">
                    <span className="services-type-select-btn-txt">All Services</span>
                  </button>
                  <button type="button" className="services-type-select-btn">
                    <span className="services-type-select-btn-txt">Printing</span>
                  </button>
                  <button type="button" className="services-type-select-btn">
                    <span className="services-type-select-btn-txt">UI/UX</span>
                  </button>
                  <button type="button" className="services-type-select-btn">
                    <span className="services-type-select-btn-txt">Packaging</span>
                  </button>
                  <button type="button" className="services-type-select-btn">
                    <span className="services-type-select-btn-txt">Marketing D.</span>
                  </button>
                  <button type="button" className="services-type-select-btn">
                    <span className="services-type-select-btn-txt">Visual D.</span>
                  </button>
                </nav>
              </div>
              <div className="services-main-section-container">
                <div className="services-section-card">
                  <div className="services-card-img"/>
                  <div className="services-section-card-content">
                    <div className="services-card-info-container">
                      <h5>Build your brand</h5>
                      <span className="services-card-subtitle">Invitation Design</span>
                    </div>
                    <a className="services-card-btn" href={"/services/servicename"}>
                      <i className="icon-link"/>
                    </a>
                    {/*<button type="button" className="services-card-btn">*/}
                    {/*    <i className="icon-link" />*/}
                    {/*</button>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <GetTouchSection/>
      </React.Fragment>
      <Footer/>
    </>
  )
}