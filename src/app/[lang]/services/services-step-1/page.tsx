import Header from "@/app/[lang]/includes/header";
import Footer from "@/app/[lang]/includes/footer";
import Link from "next/link";
import "./services-step-1.scss";

export default function ServicesStepOne() {
  return (
    <>
      <Header/>
      <div className="services-steps-wrapper">
        <div className="main-container">
          <div className="steps-main-wrapper light">
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
                  <Link href={"/services/servicename"} className="learn-bottom-link-btn">
                    <i className="icon-back" />
                    Back
                  </Link>
                  <Link href={"/services/services-step-2"} className="learn-bottom-link-btn next">Next Step</Link>
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