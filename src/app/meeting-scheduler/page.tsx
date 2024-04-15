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
        <div className="bg-clip-text bg-[linear-gradient(97deg,#2B43D5_-4.78%,#5626D5_101.8%)]">{stepNumber}</div>
        <div
            className="text-lg font-bold tracking-wide leading-6 bg-clip-text bg-[linear-gradient(97deg,#2B43D5_-4.78%,#5626D5_101.8%)]">{title}</div>
        <div className="text-base tracking-wide leading-6 text-zinc-500">{description}</div>
    </>
);

interface MeetingTypeProps {
    imageSrc: string;
    iconSrc: string;
    title: string;
    description: string;
    isActive: boolean;
}

const MeetingType: React.FC<MeetingTypeProps> = ({imageSrc, iconSrc, title, description, isActive}) => (
    <div
        className={`flex flex-col grow p-10 w-full rounded-xl border border-solid ${isActive ? 'border-blue-700 bg-[linear-gradient(97deg,rgba(232,242,253,0.50_11.7%,rgba(235,228,252,0.50)_89.69%)]' : 'bg-white border-gray-200'} max-md:px-5 max-md:mt-6 max-md:max-w-full`}>
        <div className="flex gap-5 justify-between px-px max-md:flex-wrap max-md:max-w-full">
            <img src={imageSrc} alt="" className="shrink-0 w-20 border border-gray-200 border-solid aspect-square"/>
            {isActive && <img src={iconSrc} alt="" className="shrink-0 self-start w-8 aspect-square"/>}
        </div>
        <div
            className="mt-6 text-2xl font-semibold tracking-wide leading-8 text-zinc-900 max-md:max-w-full">{title}</div>
        <div className="mt-1 text-lg tracking-wide leading-7 text-zinc-500 max-md:max-w-full">{description}</div>
    </div>
);

const steps = [
    {stepNumber: 'Step 1', title: 'Meeting Type', description: 'Lorem ipsum dolor sit amet consectetur.'},
    {stepNumber: 'Step 2', title: 'Choose Time', description: 'Lorem ipsum dolor sit amet.'},
    {stepNumber: 'Step 3', title: 'Your Details', description: 'Lorem ipsum dolor sit amet consectetur.'},
    {stepNumber: 'Step 4', title: 'Last Step', description: 'Lorem ipsum dolor sit amet.'},
];

function MeetingScheduler() {
    return (
        <div className="flex flex-col pt-8 bg-black bg-opacity-80">
            <div className="flex flex-col pb-6 w-full bg-white rounded-3xl max-md:max-w-full">
                <header
                    className="flex flex-col justify-center px-6 py-3.5 w-full text-lg tracking-wide leading-6 rounded-2xl bg-[linear-gradient(97deg,rgba(232,242,253,0.50_11.7%,rgba(235,228,252,0.50)_89.69%))] text-zinc-900 max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-0 max-md:flex-wrap">
                        <div className="flex-auto my-auto max-md:max-w-full">Get Your Graphic Design</div>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f61047086460c95ab18cac5441cc010d6df265d3a4618088f303aff05cafc585?apiKey=a63d3323f87e48248f7812715cd4edd6&"
                            alt="" className="shrink-0 w-8 aspect-square"/>
                    </div>
                </header>
                <main className="self-center mt-6 w-full max-w-[1468px] max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <aside className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
                            <div
                                className="flex flex-col grow px-6 pt-8 pb-20 mx-auto w-full font-semibold rounded-xl bg-gray-100 bg-opacity-40 max-md:px-5 max-md:mt-6">
                                <h2 className="text-2xl tracking-wide leading-8 text-zinc-900">Steps will push you to
                                    reach your goal</h2>
                                <div className="flex gap-3 mt-7 text-xs tracking-wide leading-5">
                                    <img
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8105b67cde70249c96ec13913e58280e877697b14ce8a8c6861b3b797fba1a36?apiKey=a63d3323f87e48248f7812715cd4edd6&"
                                        alt="" className="shrink-0 self-start mt-1.5 w-2.5 aspect-[0.03]"/>
                                    <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                                        {steps.map((step, index) => (
                                            <React.Fragment key={index}>
                                                {index > 0 && <div className="mt-8"/>}
                                                <StepItem stepNumber={step.stepNumber} title={step.title}
                                                          description={step.description}/>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>
                        <section className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col px-5 mt-4 max-md:mt-10 max-md:max-w-full">
                                <h1 className="self-start text-3xl font-bold tracking-wide text-zinc-900 max-md:max-w-full">Select
                                    Meeting Type</h1>
                                <p className="mt-1 text-base tracking-wide leading-6 text-zinc-500 w-[528px] max-md:max-w-full">
                                    Lorem ipsum dolor sit amet consectetur. Id amet vel sollicitudin mi adipiscing
                                    pharetra vitae mauris orci.
                                </p>
                                <div className="mt-6 max-md:max-w-full">
                                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                        <MeetingType
                                            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/521b78675e682d13419fbcd954687dc9a34a16673b7562ca4bc74143331fbe1f?apiKey=a63d3323f87e48248f7812715cd4edd6&"
                                            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ea07b64ea88abb527d94a5664e4bae699201ad428fc95f54eda69c5508b6a114?apiKey=a63d3323f87e48248f7812715cd4edd6&"
                                            title="Online"
                                            description="Find the right service for every price point. No hourly rates, just project-based pricing."
                                            isActive={true}
                                        />
                                        <MeetingType
                                            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d7f4ed6eff3d196818e05228a89931565d1c0108f199ec8e061793fd614362ea?apiKey=a63d3323f87e48248f7812715cd4edd6&"
                                            iconSrc=""
                                            title="Offline"
                                            description="Find the right service for every price point. No hourly rates, just project-based pricing."
                                            isActive={false}
                                        />
                                    </div>
                                </div>
                                <div
                                    className="flex gap-2 self-end mt-96 text-base font-semibold tracking-wide leading-6 max-md:mt-10">
                                    <Link href={"/"}>
                                        <button
                                            className="flex gap-2 px-6 py-2 bg-white rounded-[100px] text-zinc-900 max-md:px-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d3de74cc3cb66117eb8d59e13efcaba2e5b7430d40d768a15ff7b2a6d7e2fe5?apiKey=a63d3323f87e48248f7812715cd4edd6&"
                                                alt="" className="shrink-0 my-auto w-5 aspect-square"/>
                                            <span>Go Back</span>
                                        </button>
                                    </Link>
                                    <Link href={"/appointment-scheduler"}>
                                        <button
                                            className="justify-center px-6 py-2 text-center text-white bg-[linear-gradient(97deg,#2B43D5_-4.78%,#5626D5_101.8%)] rounded-[100px] max-md:px-5">
                                            Next Step
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default MeetingScheduler;