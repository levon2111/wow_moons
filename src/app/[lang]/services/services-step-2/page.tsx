"use client"

import Header from "@/app/[lang]/includes/header";
import Footer from "@/app/[lang]/includes/footer";
import Link from "next/link";
import "./services-step-2.scss";
import SchedulerSideBar from "@/app/[lang]/includes/schedulerSideBar";
import {useDictionary} from "@/app/[lang]/dictionary-provider";

export default function ServicesStepTwo() {
    const dictionary = useDictionary()

    return (
        <>
            <Header/>
            <div className="services-steps-wrapper">
                <div className="main-container">
                    <div className="steps-main-wrapper light">
                        <div className="steps-top-row">
                            <h6>{dictionary.meeting_scheduler_step_1_title}</h6>
                            <button type="button" className="steps-top-row-close-btn">
                                <i className="icon-close"/>
                            </button>
                        </div>
                        <div className="steps-main-content">
                            <SchedulerSideBar/>
                            <div className="steps-main-column">
                                <h4>{dictionary.meeting_wizard_step_2_title}</h4>
                                <h6>{dictionary.meeting_wizard_step_2_description}</h6>
                                <div className="steps-main-items-wrapper">
                                    <div className="choose-time-container">
                                        <div className="choose-time-top-row">
                                            <p className="small-txt">January 2024</p>
                                            <button type="button" className="choose-time-top-btn">
                                                <i className="icon-back"/>
                                                {dictionary.meeting_wizard_step_2_previous_month}
                                            </button>
                                            <button type="button" className="choose-time-top-btn">
                                                {dictionary.meeting_wizard_step_2_next_month}
                                                <i className="icon-next"/>
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
                                                    <h6>
                                                        7
                                                        <span
                                                            className="not-availible-info">{dictionary.meeting_wizard_step_2_no_time}</span>
                                                    </h6>
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
                                                    <h6>
                                                        14
                                                        <span
                                                            className="not-availible-info">{dictionary.meeting_wizard_step_2_no_time}</span>
                                                    </h6>
                                                </div>
                                                <div className="chose-days-item">
                                                    <h6>15</h6>
                                                </div>
                                                <div className="chose-days-item">
                                                    <h6>16</h6>
                                                </div>
                                                <div className="chose-days-item">
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
                                    <Link href={"/services/services-step-1"} className="learn-bottom-link-btn">
                                        <i className="icon-back"/>
                                        {dictionary.meeting_wizard_step_2_back}
                                    </Link>
                                    <Link href={"/services/services-step-3"}
                                          className="learn-bottom-link-btn next">{dictionary.meeting_wizard_next}</Link>
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