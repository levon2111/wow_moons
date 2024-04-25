import Header from "@/app/[lang]/includes/header";
import Footer from "@/app/[lang]/includes/footer";
import "./learn-step-four-2.scss";
import Link from "next/link";

export default function LearnStepFourOne() {
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
                      <h6>Step 1</h6>
                      <p className="small-txt">Meeting Type</p>
                      <h6>Lorem ipsum dolor sit amet consectetur.</h6>
                    </div>
                    <div className="steps-column-item">
                      <h6>Step 1</h6>
                      <p className="small-txt">Meeting Type</p>
                      <h6>Lorem ipsum dolor sit amet consectetur.</h6>
                    </div>
                  </div>
                  <div className="steps-main-column">
                    <h4>Choose Time</h4>
                    <h6>Lorem ipsum dolor sit amet consectetur. Id amet vel sollicitudin mi adipiscing pharetra vitae mauris orci.</h6>
                    <div className="steps-main-items-wrapper">
                      <div className="choose-time-container">
                        <div className="choose-time-top-row">
                          <p className="small-txt">January 2024</p>
                          <button type="button" className="choose-time-top-btn">
                            <i className="icon-back" />
                            Previous Month
                          </button>
                          <button type="button" className="choose-time-top-btn">
                            Next Month
                            <i className="icon-next" />
                          </button>
                        </div>
                        <div className="choose-time-datepicker-wrapper">
                          <div className="choose-time-datepicker-mounts">
                            <h6>Sun</h6>
                            <h6>Mon</h6>
                            <h6>Tue</h6>
                            <h6>Wed</h6>
                            <h6>Thu</h6>
                            <h6>Fri</h6>
                            <h6>Sat</h6>
                          </div>
                          <div className="choose-time-datepicker-days-container">
                            <div className="chose-days-item previous-next">
                              <h6>26</h6>
                            </div>
                            <div className="chose-days-item previous-next">
                              <h6>27</h6>
                            </div>
                            <div className="chose-days-item previous-next">
                              <h6>28</h6>
                            </div>
                            <div className="chose-days-item previous-next">
                              <h6>29</h6>
                            </div>
                            <div className="chose-days-item previous-next">
                              <h6>30</h6>
                            </div>
                            <div className="chose-days-item previous-next">
                              <h6>31</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>1</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>2</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>3</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>4</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>5</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>6</h6>
                            </div>
                            <div className="chose-days-item red">
                              <h6>7</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>8</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>9</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>10</h6>
                            </div>
                            <div className="chose-days-item blue">
                              <h6>11</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>12</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>13</h6>
                            </div>
                            <div className="chose-days-item red">
                              <h6>14</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>15</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>16</h6>
                            </div>
                            <div className="chose-days-item gray">
                              <h6>17</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>18</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>19</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>20</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>21</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>22</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>23</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>24</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>25</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>26</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>27</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>28</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>29</h6>
                            </div>
                            <div className="chose-days-item">
                              <h6>30</h6>
                            </div>
                            <div className="chose-days-item previous-next">
                              <h6>1</h6>
                            </div>
                            <div className="chose-days-item previous-next">
                              <h6>2</h6>
                            </div>
                            <div className="chose-days-item previous-next">
                              <h6>3</h6>
                            </div>
                            <div className="chose-days-item previous-next">
                              <h6>4</h6>
                            </div>
                            <div className="chose-days-item previous-next">
                              <h6>5</h6>
                            </div>
                            <div className="chose-days-item previous-next">
                              <h6>6</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="learn-link-bottom-buttons-row">
                      <Link href={"/learn-step-four-1"} className="learn-bottom-link-btn">
                        <i className="icon-back" />
                        Back
                      </Link>
                      <Link href={"/learn-step-four-3"} className="learn-bottom-link-btn next">Next Step</Link>
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