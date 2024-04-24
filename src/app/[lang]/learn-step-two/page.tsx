import Header from "@/app/[lang]/includes/header";
import Footer from "@/app/[lang]/includes/footer";
import Link from "next/link";
import "./learnTwo.scss";

export default function LearnStepTwo() {
  return (
    <>
      <Header/>
      <section className="learn-link-section-wrapper">
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
              <div className="window-main-section">
                <h4>Choose Specific Type of UX</h4>
                <span className="window-main-section-subtitle">Lorem ipsum dolor sit amet consectetur. Augue eu vel in consectetur.</span>
                <div className="window-main-content">
                  <div className="window-main-content-item">
                    <input className="link-radio-hidden" type="radio" name="learn-radio" />
                    <div className="window-main-content-item-top-row">
                      <p className="window-main-content-title">Lorem</p>
                      <span className="custom-radio" />
                    </div>
                    <span className="window-main-content-info">
                      Find the right service for every price point. No hourly rates, just project-based pricing. Find the right service for every price point.
                    </span>
                    <div className="window-main-content-item-bg" />
                  </div>
                  <div className="window-main-content-item">
                    <input className="link-radio-hidden" type="radio" name="learn-radio" />
                    <div className="window-main-content-item-top-row">
                      <p className="window-main-content-title">Lorem</p>
                      <span className="custom-radio" />
                    </div>
                    <span className="window-main-content-info">
                      Find the right service for every price point. No hourly rates, just project-based pricing. Find the right service for every price point.
                    </span>
                    <div className="window-main-content-item-bg" />
                  </div>
                  <div className="window-main-content-item">
                    <input className="link-radio-hidden" type="radio" name="learn-radio" />
                    <div className="window-main-content-item-top-row">
                      <p className="window-main-content-title">Lorem</p>
                      <span className="custom-radio" />
                    </div>
                    <span className="window-main-content-info">
                      Find the right service for every price point. No hourly rates, just project-based pricing. Find the right service for every price point.
                    </span>
                    <div className="window-main-content-item-bg" />
                  </div>
                  <div className="window-main-content-item">
                    <input className="link-radio-hidden" type="radio" name="learn-radio" />
                    <div className="window-main-content-item-top-row">
                      <p className="window-main-content-title">Lorem</p>
                      <span className="custom-radio" />
                    </div>
                    <span className="window-main-content-info">
                      Find the right service for every price point. No hourly rates, just project-based pricing. Find the right service for every price point.
                    </span>
                    <div className="window-main-content-item-bg" />
                  </div>
                </div>
                <div className="learn-link-bottom-buttons-row">
                  <Link href={"/learn"} className="learn-bottom-link-btn">
                    <i className="icon-back" />
                    Back
                  </Link>
                  <Link href={"/learn-step-three"} className="learn-bottom-link-btn next">Next Step</Link>
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