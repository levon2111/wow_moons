import React from "react";
import Link from "next/link";
import "./header.scss";

export default function Header() {
    return (
        <header className="light">
          <div className="main-container">
            <div className="header-content">
              <Link className="header-logo-container" href={"/home"}>
                <img src="/img/logo-header.svg"/>
              </Link>
              <nav className="header-nav">
                <Link className="header-link" href={"/about"}>About Us</Link>
                <Link className="header-link" href={"/services"}>Services</Link>
                <Link className="header-link" href={"/learn"}>Learn</Link>
                <Link className="header-link" href={"/blog"}>Blog</Link>
                <Link className="header-link" href={"/contact-us"}>Get in Touch</Link>
                <Link className="header-link" href={"/meeting-scheduler"}>Book a Meeting</Link>
                <div className="header-language-btn-container">
                  <div className="header-language-container">
                    <button type="button" className="header-language-btn">
                      <i className="icon-language" />
                      <div className="languages-dropdown-container">
                        <div className="languages-dropdown-content">
                          <button type="button" className="languages-dropdown-row-btn arm">
                            <span className="languages-img" />
                            <span className="languages-dropdown-row-btn-txt">Armenian</span>
                          </button>
                          <button type="button" className="languages-dropdown-row-btn en">
                            <span className="languages-img" />
                            <span className="languages-dropdown-row-btn-txt">English</span>
                          </button>
                        </div>
                      </div>
                    </button>
                  </div>
                  <button type="button" className="get-btn">
                    <span className="get-btn-txt">Get in Touch</span>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </header>
    );
}
