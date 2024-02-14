export default function Footer() {
    return (
        <footer>
            <nav>
                <div className="column">
                    <a href="">Services</a>
                    <a href="">Branding & Printing</a>
                    <a href="">UI/UX Design</a>
                </div>
                <div className="column">
                    <a href="">Visual Design</a>
                    <a href="">Marketing Design</a>
                    <a href="">Packaging & Covers</a>
                </div>
                <div className="column">
                    <a href="">About Us</a>
                    <a href="">Learn</a>
                    <a href="">Blog</a>
                    <a href="">Get in Touch</a>
                </div>
                <div className="column">
                    <a href="">FAQ</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms and Conditions</a>
                </div>
                <div className="column">
          <span className="terms"
          >© <span id="year"></span> Sentium AI. All<br/>
            rights reserved</span
          >
                </div>
            </nav>
            <img className="footer-logo" src="/logo-footer.svg"/>
        </footer>
    );
}
