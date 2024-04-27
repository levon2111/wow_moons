import Header from "@/app/[lang]/includes/header";
import Footer from "@/app/[lang]/includes/footer";
import Link from "next/link";
import "./learn-step-four-1.scss";

export default function LearnStepFour() {
  return (
    <>
      <Header/>
      <section className="learn-link-section-wrapper">
        <div className="main-container">
          <div className="learn-link-section-container">
            <div className="learn-link-section-content">
              <div className="learn-link-top-nav">
                <p className="learn-link-top-nav-title">UI/UX D.</p>
                <div className="learn-link-top-dec-nav">
                  <span className="learn-link-top-dec-txt">HR</span>
                  <span className="learn-link-top-dec-txt">Machine Learning</span>
                  <span className="learn-link-top-dec-txt">Development</span>
                  <span className="learn-link-top-dec-txt">Graphic Design</span>
                  <span className="learn-link-top-dec-txt">Game D.</span>
                  <span className="learn-link-top-dec-txt">App D.</span>
                </div>
              </div>
              <div className="learn-dec-window-wrapper">
                <div className="dec-window-top-row">
                  <div className="window-dec-address">
                    <i className="icon-lock" />
                    <span className="window-dec-address-txt">WowMoon.com</span>
                  </div>
                  <div className="window-top-steps-decor-container">
                    <div className="window-top-steps-decoration" />
                    <div className="window-top-steps-decoration" />
                    <div className="window-top-steps-decoration" />
                    <div className="window-top-steps-decoration" />
                  </div>
                </div>
                <div className="steps-main-wrapper dark">
                  <div className="steps-top-row">
                    <h6>Get Your Graphic Design</h6>
                    <button type="button" className="steps-top-row-close-btn">
                      <i className="icon-close" />
                    </button>
                  </div>
                  <div className="steps-main-content">
                    <div className="steps-left-column">
                      <p className="steps-left-column-title">Steps will push you to reach your goal</p>
                      <div className="steps-column-item">
                        <h6>Step 1</h6>
                        <p className="small-txt">Meeting Type</p>
                        <h6>Lorem ipsum dolor sit amet consectetur.</h6>
                      </div>
                      <div className="steps-column-item">
                        <h6>Step 2</h6>
                        <p className="small-txt">Meeting Type</p>
                        <h6>Lorem ipsum dolor sit amet consectetur.</h6>
                      </div>
                      <div className="steps-column-item">
                        <h6>Step 3</h6>
                        <p className="small-txt">Meeting Type</p>
                        <h6>Lorem ipsum dolor sit amet consectetur.</h6>
                      </div>
                      <div className="steps-column-item">
                        <h6>Step 4</h6>
                        <p className="small-txt">Meeting Type</p>
                        <h6>Lorem ipsum dolor sit amet consectetur.</h6>
                      </div>
                    </div>
                    <div className="steps-main-column">
                      <h4>Select Meeting Type</h4>
                      <h6>Lorem ipsum dolor sit amet consectetur. Id amet vel sollicitudin mi adipiscing pharetra vitae mauris orci.</h6>
                      <div className="steps-main-items-wrapper">
                        <div className="steps-main-items-container">
                          <div className="steps-main-item-card">
                            <input className="step-radio-hidden" type="radio" name="learn-step-radio" />
                            <div className="step-item-img-container">
                              <div className="step-item-img" />
                              <i className="icon-done-outline" />
                            </div>
                            <div className="step-item-info-container">
                              <p className="step-item-info-title">Online</p>
                              <h6>Find the right service for every price point. No hourly rates, just project-based pricing.</h6>
                            </div>
                            <div className="step-item-bg" />
                          </div>
                          <div className="steps-main-item-card">
                            <input className="step-radio-hidden" type="radio" name="learn-step-radio" />
                            <div className="step-item-img-container">
                              <div className="step-item-img" />
                              <i className="icon-done-outline" />
                            </div>
                            <div className="step-item-info-container">
                              <p className="step-item-info-title">Offline</p>
                              <h6>Find the right service for every price point. No hourly rates, just project-based pricing.</h6>
                            </div>
                            <div className="step-item-bg" />
                          </div>
                        </div>
                      </div>
                      <div className="learn-link-bottom-buttons-row">
                        <Link href={"/learn-step-three"} className="learn-bottom-link-btn">
                          <i className="icon-back" />
                          Back
                        </Link>
                        <Link href={"/learn-step-four-2"} className="learn-bottom-link-btn next">Next Step</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}