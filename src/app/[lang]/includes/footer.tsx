import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="main-container">
                <nav className="footer-nav">
                    <div className="footer-column">
                        <Link className="footer-link" href={"/services"}>Services</Link>
                        <Link className="footer-link" href={"/services/branding-and-printing"}>Branding & Printing</Link>
                        <Link className="footer-link" href={"/services/ui-ux-design"}>UI/UX Design</Link>
                    </div>
                    <div className="footer-column">
                        <Link className="footer-link" href={"/services/visual-design"}>Visual Design</Link>
                        <Link className="footer-link" href={"/services/marketing-design"}>Marketing Design</Link>
                        <Link className="footer-link" href={"/services/packaging-and-covers"}>Packaging & Covers</Link>
                    </div>
                    <div className="footer-column">
                        <Link className="footer-link" href={"/about-us"}>About Us</Link>
                        <Link className="footer-link" href={"/learn"}>Learn</Link>
                        <Link className="footer-link" href={"/blog"}>Blog</Link>
                        <Link className="footer-link" href={"/contact-us"}>Get in Touch</Link>
                    </div>
                    <div className="footer-column">
                        <Link className="footer-link" href={"/faq"}>FAQ</Link>
                        <Link className="footer-link" href={"/privacy-policy"}>Privacy Policy</Link>
                        <Link className="footer-link" href={"/terms-and-conditions"}>Terms and Conditions</Link>
                    </div>
                    <div className="footer-column">
                  <p className="footer-terms">© <span id="year"></span>Wow Moon All<br/>
                    rights reserved
                  </p>
                    </div>
                </nav>
                <div className="footer-logo-container" />
            </div>
        </footer>
    );
}
