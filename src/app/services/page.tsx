import React from "react";

export default function Services() {
    return (
        <React.Fragment>
            <section className="banner">
                <h1>Services We Provide</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Viverra pellentesque cursus
                    scelerisque senectus nisl.
                </p>
            </section>
            <main className="services">
                <div className="services-header">
                    <h2>All Services</h2>
                    <nav className="filters">
                        <fieldset>
                            <div className="form-control">
                                <input id="filter-0" type="radio" name="filter" value="0"/>
                                <label htmlFor="filter-0"> All Services </label>
                            </div>
                            <div className="form-control">
                                <input id="filter-1" type="radio" name="filter" value="1"/>
                                <label htmlFor="filter-1"> Printing </label>
                            </div>
                            <div className="form-control">
                                <input id="filter-2" type="radio" name="filter" value="2"/>
                                <label htmlFor="filter-2"> UI/UX </label>
                            </div>
                            <div className="form-control">
                                <input id="filter-3" type="radio" name="filter" value="3"/>
                                <label htmlFor="filter-3"> Packaging </label>
                            </div>
                        </fieldset>
                    </nav>
                </div>
                <div className="services-list">
                    <div className="service-item">
                        <div>
                            <span>Build your brand</span>
                            <h5>Invitation Design</h5>
                        </div>
                        <button>
                            <img src="/icon-arrow.svg"/>
                        </button>
                    </div>
                    <div className="service-item">
                        <div>
                            <span>Build your brand</span>
                            <h5>Invitation Design</h5>
                        </div>
                        <button>
                            <img src="/icon-arrow.svg"/>
                        </button>
                    </div>
                    <div className="service-item">
                        <div>
                            <span>Build your brand</span>
                            <h5>Invitation Design</h5>
                        </div>
                        <button>
                            <img src="/icon-arrow.svg"/>
                        </button>
                    </div>
                    <div className="service-item">
                        <div>
                            <span>Build your brand</span>
                            <h5>Invitation Design</h5>
                        </div>
                        <button>
                            <img src="/icon-arrow.svg"/>
                        </button>
                    </div>
                </div>
            </main>
            <section className="get-in-touch">
                <h1>Click to</h1>
                <p>Get in touch</p>
            </section>
        </React.Fragment>
    )
}
