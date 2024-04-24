import * as React from "react";
import Footer from "@/app/[lang]/includes/footer";
import Header from "@/app/[lang]/includes/header";
import "../../../styles/about.scss";
import GetTouchSection from "@/app/[lang]/includes/getTouchSection";

// import 'tailwindcss/tailwind.css';

interface LogoProps {
  src: string;
  alt: string;
}

const Logo: React.FC<LogoProps> = ({src, alt}) => (
  <>
    <img loading="lazy" src={src} alt={alt} className="w-full aspect-[10] max-md:max-w-full"/>
  </>
);

interface NavLinkProps {
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({children}) => (
  <div className="grow">{children}</div>
);

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({children}) => (
  <div>
    {children}
  </div>
);

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({children}) => (
  <section className="about-banner-section">
    {children}
  </section>
);

interface HeroProps {
  backgroundImage: string;
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({backgroundImage, title, description}) => (
  <div className="about-banner-content-container">
    <img
      className="about-banner-img"
      src={backgroundImage}
      loading="lazy"
      alt=""
    />
    <div className="about-banner-info-content">
      <h1>
        {title}
      </h1>
      <p className="about-banner-info-subtitle">
        {description}
      </p>
    </div>
  </div>
);

interface ValueProps {
  backgroundImage: string;
  text: string;
}

const Value: React.FC<ValueProps> = ({backgroundImage, text}) => (
  <div className="middle-images-section">
    <div className="middle-main-img">
      <div className="middle-main-img-top-decoration">
        <span>{text}</span>
      </div>
    </div>
    <img
      className="middle-section-bottom-decoration-img"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dceccaf82bfa7ef60758e828c59ddfe1a0b2c5c8188fd5a1a0ffb627a9494c8?apiKey=a63d3323f87e48248f7812715cd4edd6&"
      loading="lazy"
      alt=""
    />
  </div>
);

interface TrustedByProps {
  logos: string[];
}

const TrustedBy: React.FC<TrustedByProps> = ({logos}) => (
  <section className="about-logo-row-section">
    <div className="main-container">
      <div className="about-logo-row-content">
        <p className="about-logo-row-title">Trasted by:</p>
        {logos.map((logo, index) => (
          <div className="about-logo-row-container" key={index}>{logo}</div>
        ))}
      </div>
    </div>
  </section>
);

interface MissionProps {
  image: string;
  title: string;
  description: string;
}

const Mission: React.FC<MissionProps> = ({image, title, description}) => (
  <section className="our-mission-section">
    <div className="main-container">
      <div className="our-mission-section-container">
        <div className="our-mission-img-column">
          <img
            className="our-mission-img"
            loading="lazy"
            src={image}
            alt=""
          />
        </div>
        <div className="our-mission-info-column">
          <h3>{title}</h3>
          <h5>
            Lorem ipsum dolor sit amet consectetur. Ut magna volutpat viverra at ullamcorper id lacinia.
          </h5>
          <p className="our-mission-info-txt">{description}</p>
          <p className="our-mission-info-txt">Lorem ipsum dolor sit amet consectetur. Augue eu vel in eros tincidunt neque egestas.{" "}</p>
        </div>
      </div>
    </div>
  </section>
);

interface CtaProps {
  title: string;
  buttonText: string;
}

const Cta: React.FC<CtaProps> = ({title, buttonText}) => (
  <GetTouchSection />
);

interface FooterLinkProps {
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({children}) => <div className="mt-4">{children}</div>;

interface FooterProps {
  services: string[];
  visualDesign: string[];
  about: string[];
  faq: string[];
  logo: string;
}


const AboutPage: React.FC = () => {
  return (
    <>
      <Header/>
      <Section>
        <Hero
          backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/48e09a939a3bf25d1323c309cf27ea88e1187889fefeaac47b35d53cdeeb7856?apiKey=a63d3323f87e48248f7812715cd4edd6&"
          title="About Us"
          description="Lorem ipsum dolor sit amet consectetur. Viverra pellentesque cursus scelerisque senectus nisl."
        />
      </Section>
      <section className="about-middle-section">
        <div className="main-container">
          <div className="about-main-section-content">
            <div className="about-main-section-info-container">
              <h5 className="section-subtitle">Overall</h5>
              <h3>Who We Are</h3>
              <p className="mid-section-paragraph">
                Lorem ipsum dolor sit amet consectetur. Augue eu vel in eros tincidunt neque egestas. Proin
                ante urna natoque at vivamus turpis. Sem in morbi cursus dignissim donec.
              </p>
              <p className="mid-section-paragraph">
                Lorem ipsum dolor sit amet consectetur. Augue eu vel in eros tincidunt neque egestas.{" "}
              </p>
              <p className="mid-section-paragraph">
                Lorem ipsum dolor sit amet consectetur. Augue eu vel in eros tincidunt neque egestas. Proin
                ante urna natoque at vivamus turpis. Sem in morbi cursus dignissim donec.
              </p>
            </div>
            <Value
              backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/7b2f5bcaf7e26403185db608d499c97dc62f250f830e444e80fa1cf83ef0023f?apiKey=a63d3323f87e48248f7812715cd4edd6&"
              text="Such Company Values!"
            />
          </div>
        </div>
      </section>
      <TrustedBy logos={["Logo", "Logo", "Logo", "Logo", "Logo"]}/>
      <Mission
        image="https://cdn.builder.io/api/v1/image/assets/TEMP/a01831a9866b8a6f471732a7af808e9e9fa9b04c4039531084f767889510307e?apiKey=a63d3323f87e48248f7812715cd4edd6&"
        title="Our Mission"
        description="Lorem ipsum dolor sit amet consectetur. Augue eu vel in eros tincidunt neque egestas. Proin ante urna natoque at vivamus turpis. Sem in morbi cursus dignissim donec."
      />
      <Cta title="Click to" buttonText="Get in touch"/>
      <Footer/>
    </>
  );
};

export default AboutPage;