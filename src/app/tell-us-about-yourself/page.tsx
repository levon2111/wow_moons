import * as React from "react";
// import 'tailwindcss/tailwind.css';
import Link from "next/link";

interface StepItemProps {
    stepNumber: string;
    title: string;
    description: string;
}

const StepItem: React.FC<StepItemProps> = ({stepNumber, title, description}) => (
    <>
        <div className="mt-8 bg-clip-text bg-[linear-gradient(97deg,#2B43D5_-4.78%,#5626D5_101.8%)]">{stepNumber}</div>
        <div className="text-lg font-bold tracking-wide leading-6 text-neutral-600">{title}</div>
        <div className="text-base tracking-wide leading-6 text-zinc-500">{description}</div>
    </>
);

const steps = [
    {stepNumber: "Step 1", title: "Meeting Type", description: "Lorem ipsum dolor sit amet consectetur."},
    {stepNumber: "Step 2", title: "Choose Time", description: "Lorem ipsum dolor sit amet."},
    {stepNumber: "Step 3", title: "Your Details", description: "Lorem ipsum dolor sit amet consectetur."},
    {stepNumber: "Step 4", title: "Last Step", description: "Lorem ipsum dolor sit amet."},
];

const GraphicDesignForm: React.FC = () => {
    return (
        <div className="flex flex-col pb-6 bg-white rounded-3xl">
            <header
                className="flex flex-col justify-center px-6 py-3.5 w-full text-lg tracking-wide leading-6 rounded-2xl bg-[linear-gradient(97deg,rgba(232,242,253,0.50_11.7%,rgba(235,228,252,0.50)_89.69%))] text-zinc-900 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-0 max-md:flex-wrap">
                    <h1 className="flex-auto my-auto max-md:max-w-full">Get Your Graphic Design</h1>
                    <img loading="lazy"
                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/f61047086460c95ab18cac5441cc010d6df265d3a4618088f303aff05cafc585?apiKey=a63d3323f87e48248f7812715cd4edd6&"
                         alt="" className="shrink-0 w-8 aspect-square"/>
                </div>
            </header>
            <main className="self-center mt-6 w-full max-w-[1468px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <section className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
                        <div className="grow max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
                                    <div
                                        className="flex flex-col grow px-6 pt-8 pb-20 mx-auto w-full font-semibold rounded-xl bg-gray-100 bg-opacity-40 max-md:px-5 max-md:mt-6">
                                        <h2 className="text-2xl tracking-wide leading-8 text-zinc-900">Steps will push
                                            you to reach your goal</h2>
                                        <div className="flex gap-3 mt-7 text-xs tracking-wide leading-5">
                                            <img loading="lazy"
                                                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/c026fe6793581929a93b4b5b47da26eff0003e50bf90816a133f09d2014a5fbb?apiKey=a63d3323f87e48248f7812715cd4edd6&"
                                                 alt="" className="shrink-0 self-start mt-1.5 w-2.5 aspect-[0.03]"/>
                                            <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                                                {steps.map((step, index) => (
                                                    <StepItem key={index} {...step} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
                                    <div
                                        className="flex flex-col px-5 mt-4 text-lg tracking-wide text-neutral-600 max-md:mt-10 max-md:max-w-full">
                                        <h2 className="text-3xl font-bold tracking-wide text-zinc-900 max-md:max-w-full">Tell
                                            us about yourself</h2>
                                        <p className="mt-1 text-base tracking-wide leading-6 text-zinc-500 max-md:max-w-full">
                                            Lorem ipsum dolor sit amet consectetur. Id amet vel sollicitudin mi
                                            adipiscing pharetra vitae mauris orci.
                                        </p>
                                        <form>
                                            <label htmlFor="name" className="sr-only">Name / Company Name*</label>
                                            <input type="text" id="name" placeholder="Name / Company Name*"
                                                   aria-label="Name / Company Name" required
                                                   className="justify-center p-4 mt-6 bg-gray-100 rounded-xl leading-[144%] max-md:max-w-full"/>

                                            <label htmlFor="phone" className="sr-only">Phone number*</label>
                                            <input type="tel" id="phone" placeholder="Phone number*"
                                                   aria-label="Phone number" required
                                                   className="justify-center p-4 mt-4 bg-gray-100 rounded-xl leading-[144%] max-md:max-w-full"/>

                                            <label htmlFor="email" className="sr-only">Gmail</label>
                                            <input type="email" id="email" placeholder="Gmail" aria-label="Gmail"
                                                   className="justify-center p-4 mt-4 whitespace-nowrap bg-gray-100 rounded-xl leading-[144%] max-md:max-w-full"/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <aside className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
                        <div
                            className="flex gap-2 text-base font-semibold tracking-wide leading-6 mt-[794px] max-md:mt-10">
                            <Link href={"/appointment-scheduler"}>
                                <button type="button"
                                        className="flex gap-2 px-6 py-2 bg-white rounded-[100px] text-zinc-900 max-md:px-5">
                                    <img loading="lazy"
                                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d3de74cc3cb66117eb8d59e13efcaba2e5b7430d40d768a15ff7b2a6d7e2fe5?apiKey=a63d3323f87e48248f7812715cd4edd6&"
                                         alt="" className="shrink-0 my-auto w-5 aspect-square"/>
                                    <span>Go Back</span>
                                </button>
                            </Link>
                            <Link href={"/meet-booking"}>
                                <button type="button" form="graphic-design-form"
                                        className="justify-center px-6 py-2 text-center text-white bg-[linear-gradient(97deg,#2B43D5_-4.78%,#5626D5_101.8%)] rounded-[100px] max-md:px-5">
                                    Next Step
                                </button>
                            </Link>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default GraphicDesignForm;