import Header from "@/app/[lang]/includes/header";
import Footer from "@/app/[lang]/includes/footer";
import Link from "next/link";
import "./services-step-4.scss";

export default function ServicesStepThree() {
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
                <h4>Summery</h4>
                <h6>Lorem ipsum dolor sit amet consectetur. Id amet vel sollicitudin mi adipiscing pharetra vitae mauris orci.</h6>
                <div className="steps-main-items-wrapper">
                  <div className="steps-meeting-type-container">
                    <h6>Type of the Meeting</h6>
                    <div className="steps-meeting-type-item">
                      <input className="meeting-type-radio-hidden" type="radio" name="meeting-type-radio" />
                      <p className="middle-txt">Online</p>
                      <span className="small-txt">Find the right service for every price point. No hourly rates.</span>
                      <div className="step-item-bg" />
                    </div>
                    <h6>Type of the Meeting</h6>
                    <div className="steps-meeting-type-item">
                      <input className="meeting-type-radio-hidden" type="radio" name="meeting-type-radio" />
                      <p className="middle-txt">January 18</p>
                      <div className="step-item-bg" />
                    </div>
                  </div>
                </div>
                <div className="learn-link-bottom-buttons-row">
                  <Link href={"/services/services-step-3"} className="learn-bottom-link-btn">
                    <i className="icon-back" />
                    Back
                  </Link>
                  <Link href={"/services/services-step-4"} className="learn-bottom-link-btn next">Next Step</Link>
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