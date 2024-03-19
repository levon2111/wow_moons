import * as React from "react";
import Footer from "@/app/includes/footer";
import Header from "@/app/includes/header";
import 'tailwindcss/tailwind.css';

interface LogoProps {
    src: string;
    alt: string;
}

const Logo: React.FC<LogoProps> = ({src, alt}) => (
    <img loading="lazy" src={src} alt={alt} className="w-full aspect-[10] max-md:max-w-full"/>
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
    <div
        className="justify-center self-stretch px-6 py-2.5 text-lg font-semibold tracking-wide leading-6 text-center text-white bg-[linear-gradient(97deg,#2B43D5_-4.78%,#5626D5_101.8%)] rounded-[100px] max-md:px-5">
        {children}
    </div>
);

interface SectionProps {
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({children}) => (
    <section className="flex flex-col justify-center w-full text-center bg-black max-md:max-w-full">
        {children}
    </section>
);

interface HeroProps {
    backgroundImage: string;
    title: string;
    description: string;
}

const Hero: React.FC<HeroProps> = ({backgroundImage, title, description}) => (
    <div
        className="flex overflow-hidden relative flex-col items-center p-20 w-full min-h-[568px] max-md:px-5 max-md:max-w-full">
        <img loading="lazy" src={backgroundImage} alt="" className="object-cover absolute inset-0 size-full"/>
        <h1 className="relative mt-32 text-6xl font-semibold tracking-wider text-white leading-[63.84px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            {title}
        </h1>
        <p className="relative mt-4 mb-24 text-2xl tracking-wide leading-8 text-gray-400 w-[684px] max-md:mb-10 max-md:max-w-full">
            {description}
        </p>
    </div>
);

interface ValueProps {
    backgroundImage: string;
    text: string;
}

const Value: React.FC<ValueProps> = ({backgroundImage, text}) => (
    <div
        className="overflow-hidden relative flex-col justify-center items-start self-end px-16 py-11 mt-12 mr-28 max-w-full text-xs font-semibold leading-4 text-center text-black aspect-[1.59] fill-white stroke-[10px] stroke-blue-700 w-[210px] max-md:pr-5 max-md:pl-6 max-md:mt-10 max-md:mr-2.5">
        <img loading="lazy" src={backgroundImage} alt="" className="object-cover absolute inset-0 size-full"/>
        {text}
    </div>
);

interface TrustedByProps {
    logos: string[];
}

const TrustedBy: React.FC<TrustedByProps> = ({logos}) => (
    <div
        className="flex justify-center items-center px-16 py-10 mt-20 w-full text-4xl font-semibold tracking-tight leading-10 text-gray-400 bg-gray-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-[1155px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto my-auto text-2xl tracking-wide leading-8 text-zinc-500">Trasted by:</div>
            {logos.map((logo, index) => (
                <div key={index}>{logo}</div>
            ))}
        </div>
    </div>
);

interface MissionProps {
    image: string;
    title: string;
    description: string;
}

const Mission: React.FC<MissionProps> = ({image, title, description}) => (
    <div
        className="flex flex-col justify-center px-16 py-20 w-full bg-[linear-gradient(97deg,rgba(232,242,253,0.50_11.7%,rgba(235,228,252,0.50)_89.69%))] max-md:px-5 max-md:max-w-full">
        <div className="mt-6 mb-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <img loading="lazy" src={image} alt=""
                         className="grow w-full aspect-[1.39] max-md:mt-6 max-md:max-w-full"/>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div
                        className="flex flex-col self-stretch my-auto text-2xl tracking-wide leading-8 text-neutral-600 max-md:mt-10 max-md:max-w-full">
                        <h2 className="text-5xl font-semibold tracking-wide leading-[56.16px] text-zinc-900 max-md:max-w-full max-md:text-4xl">
                            {title}
                        </h2>
                        <p className="mt-2 text-lg tracking-wide leading-7 text-zinc-500 max-md:max-w-full">
                            Lorem ipsum dolor sit amet consectetur. Ut magna volutpat viverra at ullamcorper id lacinia.
                        </p>
                        <p className="mt-6 max-md:max-w-full">{description}</p>
                        <p className="mt-4 max-md:max-w-full">
                            Lorem ipsum dolor sit amet consectetur. Augue eu vel in eros tincidunt neque egestas.{" "}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

interface CtaProps {
    title: string;
    buttonText: string;
}

const Cta: React.FC<CtaProps> = ({title, buttonText}) => (
    <div
        className="flex z-10 justify-center items-center px-16 py-20 w-full text-center bg-black rounded-none max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-48 mb-72 max-md:my-10 max-md:max-w-full">
            <h2 className="font-bold text-white uppercase text-[250px] tracking-[3px] max-md:max-w-full max-md:text-4xl">
                {title}
            </h2>
            <div
                className="self-center mt-14 text-5xl font-semibold tracking-wide text-black max-md:mt-10 max-md:text-4xl">
                {buttonText}
            </div>
        </div>
    </div>
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
            <div className="flex flex-col bg-white">
                <main>
                    <Section>
                        <Hero
                            backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/48e09a939a3bf25d1323c309cf27ea88e1187889fefeaac47b35d53cdeeb7856?apiKey=a63d3323f87e48248f7812715cd4edd6&"
                            title="About Us"
                            description="Lorem ipsum dolor sit amet consectetur. Viverra pellentesque cursus scelerisque senectus nisl."
                        />
                    </Section>
                    <Value
                        backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/7b2f5bcaf7e26403185db608d499c97dc62f250f830e444e80fa1cf83ef0023f?apiKey=a63d3323f87e48248f7812715cd4edd6&"
                        text="Such Company Values!"/>
                    <article
                        className="flex flex-col items-start px-16 mt-3.5 w-full text-lg tracking-wide max-md:px-5 max-md:max-w-full">
                        <h2 className="font-semibold bg-clip-text bg-[linear-gradient(97deg,#2B43D5_-4.78%,#5626D5_101.8%)] leading-[144%] max-md:max-w-full">
                            Overall
                        </h2>
                        <h3 className="text-5xl font-semibold tracking-wide leading-[56.16px] text-zinc-900 max-md:max-w-full max-md:text-4xl">
                            Who We Are
                        </h3>
                        <p className="mt-6 text-2xl tracking-wide leading-8 text-neutral-600 w-[566px] max-md:max-w-full">
                            Lorem ipsum dolor sit amet consectetur. Augue eu vel in eros tincidunt neque egestas. Proin
                            ante urna natoque at vivamus turpis. Sem in morbi cursus dignissim donec.
                        </p>
                        <p className="mt-4 text-2xl tracking-wide leading-8 text-neutral-600 w-[566px] max-md:max-w-full">
                            Lorem ipsum dolor sit amet consectetur. Augue eu vel in eros tincidunt neque egestas.{" "}
                        </p>
                        <p className="mt-6 leading-7 text-neutral-600 w-[566px] max-md:max-w-full">
                            Lorem ipsum dolor sit amet consectetur. Augue eu vel in eros tincidunt neque egestas. Proin
                            ante urna natoque at vivamus turpis. Sem in morbi cursus dignissim donec.
                        </p>
                        <img loading="lazy"
                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dceccaf82bfa7ef60758e828c59ddfe1a0b2c5c8188fd5a1a0ffb627a9494c8?apiKey=a63d3323f87e48248f7812715cd4edd6&"
                             alt="" className="self-end mt-14 max-w-full aspect-[2.04] w-[190px] max-md:mt-10"/>
                    </article>
                    <TrustedBy logos={["Logo", "Logo", "Logo", "Logo", "Logo"]}/>
                    <Mission
                        image="https://cdn.builder.io/api/v1/image/assets/TEMP/a01831a9866b8a6f471732a7af808e9e9fa9b04c4039531084f767889510307e?apiKey=a63d3323f87e48248f7812715cd4edd6&"
                        title="Our Mission"
                        description="Lorem ipsum dolor sit amet consectetur. Augue eu vel in eros tincidunt neque egestas. Proin ante urna natoque at vivamus turpis. Sem in morbi cursus dignissim donec."
                    />
                    <Cta title="Click to" buttonText="Get in touch"/>
                </main>
                <Footer/>
            </div>
        </>

    );
};

export default AboutPage;