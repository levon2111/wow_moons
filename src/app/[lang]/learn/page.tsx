import Header from "@/app/[lang]/includes/header";
import Footer from "@/app/[lang]/includes/footer";
import Link from "next/link";
import "../../../styles/learn.scss";

export default function Learn() {
  return (
    <>
      <Header/>
      <section className="learn-top-banner">
        <div className="learn-top-banner-content">
          <i className="icon-learn" />
          <h2>We Will Help You Grow</h2>
          <h4>Lorem ipsum dolor sit amet consectetur. Viverra pellentesque cursus scelerisque senectus nisl.</h4>
        </div>
      </section>
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
                <h4>Choose Type of UI/UX Design</h4>
                <span className="window-main-section-subtitle">Lorem ipsum dolor sit amet consectetur. Augue eu vel in consectetur.</span>
                <div className="window-main-content">
                  <div className="window-main-content-item">
                    <input className="link-radio-hidden" type="radio" name="learn-radio" />
                    <div className="window-main-content-item-top-row">
                      <p className="window-main-content-title">User Experiene (UX)</p>
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
                      <p className="window-main-content-title">User Interface (UI)</p>
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
                      <p className="window-main-content-title">Game Design</p>
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
                      <p className="window-main-content-title">Graphic Design</p>
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
                  <Link href={"/learn-step-two"} className="learn-bottom-link-btn next">Next Step</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="learn-members-section">
        <div className="main-container">
          <div className="learn-members-content-container">
            <h5 className="section-subtitle">Overall</h5>
            <h3>Who We Are</h3>
            <div className="our-team-cards-container">
              <div className="our-team-card-item">
                <div className="team-player-img-item" />
                <div className="team-player-info">
                  <div className="team-player-name-txt-container">
                    <p className="team-player-name-txt">Name Surname</p>
                    <Link href="#" className="profile-social-media-link">
                      <i className="icon-linkedin" />
                    </Link>
                  </div>
                  <span className="team-player-info-txt">
                        Lorem ipsum dolor sit amet consectetur. Habitasse tellus est elementum et lectus pretium vivamus arcu.
                      </span>
                </div>
              </div>
              <div className="our-team-card-item">
                <div className="team-player-img-item" />
                <div className="team-player-info">
                  <div className="team-player-name-txt-container">
                    <p className="team-player-name-txt">Name Surname</p>
                    <Link href="#" className="profile-social-media-link">
                      <i className="icon-linkedin" />
                    </Link>
                  </div>
                  <span className="team-player-info-txt">
                        Lorem ipsum dolor sit amet consectetur. Habitasse tellus est elementum et lectus pretium vivamus arcu.
                      </span>
                </div>
              </div>
              <div className="our-team-card-item">
                <div className="team-player-img-item" />
                <div className="team-player-info">
                  <div className="team-player-name-txt-container">
                    <p className="team-player-name-txt">Name Surname</p>
                    <Link href="#" className="profile-social-media-link">
                      <i className="icon-linkedin" />
                    </Link>
                  </div>
                  <span className="team-player-info-txt">
                        Lorem ipsum dolor sit amet consectetur. Habitasse tellus est elementum et lectus pretium vivamus arcu.
                      </span>
                </div>
              </div>
              <div className="our-team-card-item">
                <div className="team-player-img-item" />
                <div className="team-player-info">
                  <div className="team-player-name-txt-container">
                    <p className="team-player-name-txt">Name Surname</p>
                    <Link href="#" className="profile-social-media-link">
                      <i className="icon-linkedin" />
                    </Link>
                  </div>
                  <span className="team-player-info-txt">
                        Lorem ipsum dolor sit amet consectetur. Habitasse tellus est elementum et lectus pretium vivamus arcu.
                      </span>
                </div>
              </div>
              <div className="our-team-card-item">
                <div className="team-player-img-item" />
                <div className="team-player-info">
                  <div className="team-player-name-txt-container">
                    <p className="team-player-name-txt">Name Surname</p>
                    <Link href="#" className="profile-social-media-link">
                      <i className="icon-linkedin" />
                    </Link>
                  </div>
                  <span className="team-player-info-txt">
                        Lorem ipsum dolor sit amet consectetur. Habitasse tellus est elementum et lectus pretium vivamus arcu.
                      </span>
                </div>
              </div>
              <div className="our-team-card-item">
                <div className="team-player-img-item" />
                <div className="team-player-info">
                  <div className="team-player-name-txt-container">
                    <p className="team-player-name-txt">Name Surname</p>
                    <Link href="#" className="profile-social-media-link">
                      <i className="icon-linkedin" />
                    </Link>
                  </div>
                  <span className="team-player-info-txt">
                        Lorem ipsum dolor sit amet consectetur. Habitasse tellus est elementum et lectus pretium vivamus arcu.
                      </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="process-section">
        <div className="main-container">
          <div className="process-section-content">
            <h3>Processes</h3>
            <p className="process-subtitle">Lorem ipsum dolor sit amet consectetur. Augue eu vel in eros tincidunt neque egestas.</p>
            <div className="process-items-container">
              <div className="process-item">
                <div className="process-item-number">
                  <span className="process-item-number-txt">1</span>
                </div>
                <span className="process-items-name-txt">Process Name</span>
                <div className="process-item-info">
                  <i className="icon-danger" />
                </div>
              </div>
              <div className="process-item">
                <div className="process-item-number">
                  <span className="process-item-number-txt">2</span>
                </div>
                <span className="process-items-name-txt">Process Name</span>
                <div className="process-item-info">
                  <i className="icon-danger" />
                </div>
              </div>
              <div className="process-item">
                <div className="process-item-number">
                  <span className="process-item-number-txt">3</span>
                </div>
                <span className="process-items-name-txt">Process Name</span>
                <div className="process-item-info">
                  <i className="icon-danger" />
                </div>
              </div>
              <div className="process-item">
                <div className="process-item-number">
                  <span className="process-item-number-txt">4</span>
                </div>
                <span className="process-items-name-txt">Process Name</span>
                <div className="process-item-info">
                  <i className="icon-danger" />
                </div>
              </div>
              <div className="process-item">
                <div className="process-item-number">
                  <span className="process-item-number-txt">5</span>
                </div>
                <span className="process-items-name-txt">Process Name</span>
                <div className="process-item-info">
                  <i className="icon-danger" />
                </div>
              </div>
              <div className="process-item">
                <div className="process-item-number">
                  <span className="process-item-number-txt">6</span>
                </div>
                <span className="process-items-name-txt">Process Name</span>
                <div className="process-item-info">
                  <i className="icon-danger" />
                </div>
              </div>
              <div className="process-item">
                <div className="process-item-number">
                  <span className="process-item-number-txt">7</span>
                </div>
                <span className="process-items-name-txt">Process Name</span>
                <div className="process-item-info">
                  <i className="icon-danger" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="reviews-section">
        <div className="main-container">
          <div className="reviews-section-container">
            <p className="reviews-section-title">Student Reviews</p>
            <div className="reviews-item-container">
              <div className="reviews-item-top-row">
                <div className="reviews-img" />
                <p className="middle-txt">Michele Kellett</p>
              </div>
              <div className="reviews-stars-row">
                {/*ToDo add class active on bottom i , when star is selected*/}
                <i className="icon-star active" />
                <i className="icon-star active" />
                <i className="icon-star active" />
                <i className="icon-star" />
                <i className="icon-star" />
              </div>
              <p className="reviews-main-info">The design and the delivery of the content is wonderful. It inspires confidence that you've applied your methods to you own programme - with great, user-friendly results.</p>
            </div>
            <div className="reviews-item-container">
              <div className="reviews-item-top-row">
                <div className="reviews-img" />
                <p className="middle-txt">Michele Kellett</p>
              </div>
              <div className="reviews-stars-row">
                {/*ToDo add class active on bottom i , when star is selected*/}
                <i className="icon-star active" />
                <i className="icon-star active" />
                <i className="icon-star active" />
                <i className="icon-star" />
                <i className="icon-star" />
              </div>
              <p className="reviews-main-info">The design and the delivery of the content is wonderful. It inspires confidence that you've applied your methods to you own programme - with great, user-friendly results.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}