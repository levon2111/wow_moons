import Link from "next/link";
import "../contact-us.scss";
import "./contact-us-phone.scss";

export default function ContactUSPhone() {
  return (
    <>
      <div className="contact-us-wrapper">
        <div className="main-container">
          <div className="contact-us-content-container">
            <Link href="/" className="contact-us-close-btn">
              <i className="icon-close-decoration" />
            </Link>
            <div className="contact-us-content">
              <h3 className="light">Get In Touch</h3>
              <h5>Lorem ipsum dolor sit amet consectetur. Ut magna volutpat viverra at ullamcorper id lacinia.</h5>
              <div className="contact-us-big-buttons-container">
                <Link href={"/contact-us/phone"} className="phone-mail-link">
                  <i className="icon-phone" />
                </Link>
                <Link href={"/contact-us/email"} className="phone-mail-link">
                  <i className="icon-email" />
                </Link>
              </div>
              <p className="middle-txt">Call Us Now</p>
              <span className="contact-big-number">+374 95 31 70 07</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}