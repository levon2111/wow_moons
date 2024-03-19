import 'tailwindcss/tailwind.css';
import * as React from "react";

interface ContactUsProps {
    phoneNumber: string;
    emailIcon: string;
    phoneIcon: string;
    decorativeImage: string;
}

const ContactUs: React.FC<ContactUsProps> = ({
                                                 phoneNumber,
                                                 emailIcon,
                                                 phoneIcon,
                                                 decorativeImage,
                                             }) => {
    return (
        <section className="flex flex-col items-center pt-10 pr-10 pb-20 pl-20 bg-black max-md:px-5">
            <div className="flex gap-5 justify-between items-start w-full max-w-[1117px] max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col items-center self-end mt-24 max-md:mt-10 max-md:max-w-full">
                    <h2 className="text-5xl font-semibold tracking-wide text-center text-white leading-[56.16px] max-md:max-w-full max-md:text-4xl">
                        Get In Touch
                    </h2>
                    <p className="mt-2 text-lg tracking-wide leading-7 text-center text-gray-400 w-[611px] max-md:max-w-full">
                        Lorem ipsum dolor sit amet consectetur. Ut magna volutpat viverra at
                        ullamcorper id lacinia.
                    </p>
                    <div className="self-stretch mt-11 max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <ContactMethod
                                icon={emailIcon}
                                className="w-6/12 max-md:ml-0 max-md:w-full"
                            />
                            <ContactMethod
                                icon={phoneIcon}
                                className="ml-5 w-6/12 max-md:ml-0 max-md:w-full"
                            />
                        </div>
                    </div>
                </div>
                <img
                    src={decorativeImage}
                    alt=""
                    className="shrink-0 self-start max-w-full aspect-[0.99] w-[104px]"
                />
            </div>
            <p className="mt-24 text-2xl tracking-wide leading-8 text-center text-gray-300 max-md:mt-10 max-md:max-w-full">
                Call Us Now
            </p>
            <a
                href={`tel:${phoneNumber}`}
                className="mt-4 text-7xl font-bold tracking-wider text-center text-white max-md:max-w-full max-md:text-4xl"
            >
                {phoneNumber}
            </a>
        </section>
    );
};

interface ContactMethodProps {
    icon: string;
    className?: string;
}

const ContactMethod: React.FC<ContactMethodProps> = ({ icon, className }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <div className="flex grow justify-center items-center px-16 py-12 w-full rounded-2xl bg-[linear-gradient(97deg,#2B43D5_-4.78%,#5626D5_101.8%)] max-md:px-5 max-md:mt-6">
                <img src={icon} alt="" className="w-8 aspect-square" />
            </div>
        </div>
    );
};

export default ContactUs;