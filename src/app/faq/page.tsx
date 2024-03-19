"use client"
import './_faq.scss';
import Header from "@/app/includes/header";
import Footer from "@/app/includes/footer";
import {useState} from "react";

export default function FAQ() {
    const [state, setState] = useState<any[]>([]);
    const [tab, setTab] = useState<string>('Pricing');

    // @ts-ignore
    return (
        <>
            <Header/>
            <div className="faq-section-wrapper">
                <div className="main-container">
                    <div className="faq-section-container">
                        <div className="faq-section-content">
                            <h1 className="faq-title">Faq</h1>
                            <h3 className="faq-subtitle">
                                Welcome to our Frequently Asked Questions (FAQ) section. Here, you’ll find answers to
                                some of the most common questions we receive about our services, processes, and
                                policies. This section is designed to provide you with quick, accessible information to
                                help you understand more about how we work, what you can expect when collaborating with
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                us, and how we can support your business's IT needs.
                            </h3>
                            <div className="faq-search-container">
                                <input className="faq-search-input" placeholder="Search" type="text"/>
                                <i className="icon-search"/>
                            </div>
                            <div className="faq-section-tabs-info-container">
                                <div className="faq-section-tabs-container">
                                    <button className={`faq-section-tab-btn ${tab === 'Pricing' ? 'selected' : ''}`}
                                            onClick={() => setTab('Pricing')}
                                    >
                                        <span className="faq-section-tab-btn-txt">Pricing</span>
                                    </button>
                                    <button className={`faq-section-tab-btn ${tab === 'Starting' ? 'selected' : ''}`}
                                            onClick={() => setTab('Starting')}
                                    >
                                        <span className="faq-section-tab-btn-txt">Getting Started</span>
                                    </button>
                                    <button className={`faq-section-tab-btn ${tab === 'Design' ? 'selected' : ''}`}
                                            onClick={() => setTab('Design')}
                                    >
                                        <span className="faq-section-tab-btn-txt">Security</span>
                                    </button>
                                    <button className={`faq-section-tab-btn ${tab === 'Development' ? 'selected' : ''}`}
                                            onClick={() => setTab('Development')}
                                    >
                                        <span className="faq-section-tab-btn-txt">Customization and Flexibility</span>
                                    </button>
                                </div>
                                {tab === 'Pricing' &&
                                    <div>
                                        <div className={`faq-plus-minus-row ${state[0] && 'active'}`}
                                             onClick={() => setState(prev => ({...prev, [0]: !prev[0]}))}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">How is pricing determined for
                                                    your services</p>
                                                <button className="plus-minus-btn">
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                                <span className="faq-plus-hidden-info-txt">
                                                  Pricing is determined based on several factors, including the complexity of the project, the technologies involved, the duration of the project, and the level of expertise required. We provide a detailed quote after an initial consultation and assessment of your specific needs and project requirements.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {tab === 'Starting' &&
                                    <div>
                                        <div className={`faq-plus-minus-row ${state[10] && 'active'}`}
                                             onClick={() => setState(prev => ({...prev, [10]: !prev[10]}))}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">Explore Our Services</p>
                                                <button className="plus-minus-btn">
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                                <span className="faq-plus-hidden-info-txt">
                                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                    Begin by exploring our range of services listed on our website. Whether you're interested in cloud computing, data analytics, web development, or AI innovations, we have detailed descriptions of each offering to help you understand how we can meet your needs.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {tab === 'Design' &&
                                    <div>
                                        <div className={`faq-plus-minus-row ${state[18] && 'active'}`}
                                             onClick={() => setState(prev => ({...prev, [18]: !prev[18]}))}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">What security measures do you
                                                    implement to protect client data?</p>
                                                <button className="plus-minus-btn">
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                                <span className="faq-plus-hidden-info-txt">
                                                  We prioritize the security of our client data with a comprehensive approach, including encryption in transit and at rest, regular security audits, and adherence to industry best practices. Our infrastructure is designed with multiple layers of security, including firewalls, intrusion detection systems, and strict access controls to ensure that client data is safeguarded against unauthorized access and threats.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {tab === 'Development' &&
                                    <div>
                                        <div className={`faq-plus-minus-row ${state[28] && 'active'}`}
                                             onClick={() => setState(prev => ({...prev, [28]: !prev[28]}))}>
                                            <div className="faq-plus-minus-main-info">
                                                <p className="faq-plus-minus-title-txt">Can your IT solutions be
                                                    customized to fit my specific business needs?</p>
                                                <button className="plus-minus-btn">
                                                    <i className="icon-plus"/>
                                                </button>
                                            </div>
                                            <div className="faq-plus-hidden-info-container">
                                            <span className="faq-plus-hidden-info-txt">
                                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                Absolutely! We specialize in creating customized IT solutions tailored to meet the unique requirements of your business. Whether it's adapting to specific workflows, integrating with existing systems, or developing bespoke features, our team works closely with you to ensure the final product aligns perfectly with your objectives.
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}