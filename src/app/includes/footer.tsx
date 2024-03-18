import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <nav>
                <div className="column">
                    <Link href={"/services"}>Services</Link>
                    <Link href={"/services/branding-and-printing"}>Branding & Printing</Link>
                    <Link href={"/services/ui-ux-design"}>UI/UX Design</Link>
                </div>
                <div className="column">
                    <Link href={"/services/visual-design"}>Visual Design</Link>
                    <Link href={"/services/marketing-design"}>Marketing Design</Link>
                    <Link href={"/services/packaging-and-covers"}>Packaging & Covers</Link>
                </div>
                <div className="column">
                    <Link href={"/about-us"}>About Us</Link>
                    <Link href={"/learn"}>Learn</Link>
                    <Link href={"/blog"}>Blog</Link>
                    <Link href={"/contact-us"}>Get in Touch</Link>
                </div>
                <div className="column">
                    <Link href={"/faq"}>FAQ</Link>
                    <Link href={"/privacy-policy"}>Privacy Policy</Link>
                    <Link href={"/terms-and-conditions"}>Terms and Conditions</Link>
                </div>
                <div className="column">
                  <span className="terms">© <span id="year"></span>Wow Moon All<br/>
                    rights reserved
                  </span>
                </div>
            </nav>
            <img className="footer-logo" src="/img/logo-footer.svg"/>
        </footer>
    );
}
