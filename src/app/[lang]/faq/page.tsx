"use client"

import Footer from '../includes/footer';
import Header from '../includes/header';
import './_faq.scss';
import {useState} from "react";
import GetTouchSection from "@/app/[lang]/includes/getTouchSection";
import {useDictionary} from "@/app/[lang]/dictionary-provider";

export default function FAQ() {
    const [state, setState] = useState<any[]>([]);
    const [tab, setTab] = useState<string>('Pricing');

    const dictionary = useDictionary()

    // @ts-ignore
    return (
        <>
            <Header/>
            <section className="faq-section-wrapper">
                <div className="main-container">
                    <div className="faq-section-container">
                        <div className="faq-section-content">
                            <h2 className="faq-title">FAQ</h2>
                            <p className="faq-subtitle">
                                {dictionary.faq_subtitle}
                            </p>
                            <div className="faq-search-container">
                                <input className="faq-search-input" placeholder="Search" type="text"/>
                                <i className="icon-search"/>
                            </div>
                            <div className="faq-section-tabs-info-container">
                                <div className="faq-section-tabs-container">
                                    <button className={`faq-section-tab-btn ${tab === 'Pricing' ? 'selected' : ''}`}
                                            onClick={() => setTab('Pricing')}
                                    >
                                        <span className="faq-section-tab-btn-txt">{dictionary.faq_pricing}</span>
                                    </button>
                                    <button className={`faq-section-tab-btn ${tab === 'Starting' ? 'selected' : ''}`}
                                            onClick={() => setTab('Starting')}
                                    >
                                        <span className="faq-section-tab-btn-txt">{dictionary.faq_starting}</span>
                                    </button>
                                    <button className={`faq-section-tab-btn ${tab === 'Development' ? 'selected' : ''}`}
                                            onClick={() => setTab('Development')}
                                    >
                                        <span className="faq-section-tab-btn-txt">{dictionary.faq_flexability}</span>
                                    </button>
                                    <button
                                        className={`faq-section-tab-btn ${tab === 'communication' ? 'selected' : ''}`}
                                        onClick={() => setTab('communication')}
                                    >
                                        <span className="faq-section-tab-btn-txt">{dictionary.faq_communication}</span>
                                    </button>
                                </div>
                                {tab === 'Pricing' &&
                                    <div>
                                        <div className={`faq-plus-minus-row ${state[0] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_question_1}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [0]: !prev[0]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                                <span className="faq-plus-hidden-info-txt">
                                                  {dictionary.faq_answer_1}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[1] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_question_2}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [1]: !prev[1]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                                <span className="faq-plus-hidden-info-txt">
                                                  {dictionary.faq_answer_2}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[2] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_question_3}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [2]: !prev[2]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                                <span className="faq-plus-hidden-info-txt">
                                                  {dictionary.faq_answer_3}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[3] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_question_4}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [3]: !prev[3]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                                <span className="faq-plus-hidden-info-txt">
                                                  {dictionary.faq_answer_4}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[4] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_question_5}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [4]: !prev[4]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                                <span className="faq-plus-hidden-info-txt">
                                                  {dictionary.faq_answer_5}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[5] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_question_6}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [5]: !prev[5]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                                <span className="faq-plus-hidden-info-txt">
                                                  {dictionary.faq_answer_6}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[6] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_question_7}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [6]: !prev[6]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                                <span className="faq-plus-hidden-info-txt">
                                                  {dictionary.faq_answer_7}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[7] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_question_8}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [7]: !prev[7]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                                <span className="faq-plus-hidden-info-txt">
                                                  {dictionary.faq_answer_8}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[8] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_question_9}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [8]: !prev[8]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                                <span className="faq-plus-hidden-info-txt">
                                                  {dictionary.faq_answer_9}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[9] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_question_10}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [9]: !prev[9]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                                <span className="faq-plus-hidden-info-txt">
                                                  {dictionary.faq_answer_10}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {tab === 'Starting' &&
                                    <div>
                                        <div className={`faq-plus-minus-row ${state[10] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_getting_started_question_1}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [10]: !prev[10]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                                <span className="faq-plus-hidden-info-txt">
                                                  {dictionary.faq_getting_started_answer_1}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[11] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_getting_started_question_2}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [11]: !prev[11]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                                <span className="faq-plus-hidden-info-txt">
                                                  {dictionary.faq_getting_started_answer_2}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[12] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_getting_started_question_3}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [12]: !prev[12]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                                <span className="faq-plus-hidden-info-txt">
                                                  {dictionary.faq_getting_started_answer_3}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[13] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_getting_started_question_4}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [13]: !prev[13]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                                <span className="faq-plus-hidden-info-txt">
                                                  {dictionary.faq_getting_started_answer_4}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[14] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_getting_started_question_5}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [14]: !prev[14]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                                <span className="faq-plus-hidden-info-txt">
                                                  {dictionary.faq_getting_started_answer_5}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[15] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_getting_started_question_6}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [15]: !prev[15]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                                <span className="faq-plus-hidden-info-txt">
                                                  {dictionary.faq_getting_started_answer_6}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[16] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_getting_started_question_7}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [16]: !prev[16]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                                <span className="faq-plus-hidden-info-txt">
                                                  {dictionary.faq_getting_started_answer_7}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[17] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_getting_started_question_8}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [17]: !prev[17]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                                <span className="faq-plus-hidden-info-txt">
                                                  {dictionary.faq_getting_started_answer_8}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {tab === 'Development' &&
                                    <div>
                                        <div className={`faq-plus-minus-row ${state[28] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_development_question_1}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [28]: !prev[28]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                            <span className="faq-plus-hidden-info-txt">
                                              {dictionary.faq_development_answer_1}
                                            </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[29] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_development_question_2}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [29]: !prev[29]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                            <span className="faq-plus-hidden-info-txt">
                                              {dictionary.faq_development_answer_2}
                                            </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[30] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_development_question_3}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [30]: !prev[30]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                            <span className="faq-plus-hidden-info-txt">
                                              {dictionary.faq_development_answer_3}
                                            </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[31] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_development_question_4}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [31]: !prev[31]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                            <span className="faq-plus-hidden-info-txt">
                                              {dictionary.faq_development_answer_4}
                                            </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[32] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_development_question_5}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [32]: !prev[32]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                            <span className="faq-plus-hidden-info-txt">
                                              {dictionary.faq_development_answer_5}
                                            </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[33] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_development_question_6}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [33]: !prev[33]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                            <span className="faq-plus-hidden-info-txt">
                                              {dictionary.faq_development_answer_6}
                                            </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[34] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_development_question_7}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [34]: !prev[34]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                            <span className="faq-plus-hidden-info-txt">
                                              {dictionary.faq_development_answer_7}
                                            </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[35] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_development_question_8}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [35]: !prev[35]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                            <span className="faq-plus-hidden-info-txt">
                                              {dictionary.faq_development_answer_8}
                                            </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[36] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_development_question_9}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [36]: !prev[36]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                            <span className="faq-plus-hidden-info-txt">
                                              {dictionary.faq_development_answer_9}
                                            </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[37] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_development_question_10}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [37]: !prev[37]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                            <span className="faq-plus-hidden-info-txt">
                                              {dictionary.faq_development_answer_10}
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    tab == "communication" &&
                                    <div>
                                        <div className={`faq-plus-minus-row ${state[38] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_communication_question_1}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [38]: !prev[38]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                            <span className="faq-plus-hidden-info-txt">
                                              {dictionary.faq_communication_answer_1}
                                            </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[39] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_communication_question_2}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [39]: !prev[39]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                            <span className="faq-plus-hidden-info-txt">
                                              {dictionary.faq_communication_answer_2}
                                            </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[40] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_communication_question_3}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [40]: !prev[40]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                            <span className="faq-plus-hidden-info-txt">
                                              {dictionary.faq_communication_answer_3}
                                            </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[41] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_communication_question_4}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [41]: !prev[41]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                            <span className="faq-plus-hidden-info-txt">
                                              {dictionary.faq_communication_answer_4}
                                            </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[42] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_communication_question_5}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [42]: !prev[42]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                            <span className="faq-plus-hidden-info-txt">
                                              {dictionary.faq_communication_answer_5}
                                            </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[43] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_communication_question_6}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [43]: !prev[43]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                            <span className="faq-plus-hidden-info-txt">
                                              {dictionary.faq_communication_answer_6}
                                            </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[44] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_communication_question_7}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [44]: !prev[44]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                            <span className="faq-plus-hidden-info-txt">
                                              {dictionary.faq_communication_answer_7}
                                            </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[45] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_communication_question_8}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [45]: !prev[45]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                            <span className="faq-plus-hidden-info-txt">
                                              {dictionary.faq_communication_answer_8}
                                            </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[46] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_communication_question_9}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [46]: !prev[46]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                            <span className="faq-plus-hidden-info-txt">
                                              {dictionary.faq_communication_answer_9}
                                            </span>
                                            </div>
                                        </div>
                                        <div className={`faq-plus-minus-row ${state[47] && 'active'}`}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">{dictionary.faq_communication_question_10}</p>
                                                <button className="plus-minus-btn"
                                                        onClick={() => setState(prev => ({...prev, [47]: !prev[47]}))}
                                                >
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                            <span className="faq-plus-hidden-info-txt">
                                              {dictionary.faq_communication_answer_10}
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <GetTouchSection/>
            <Footer/>
        </>
    )
}