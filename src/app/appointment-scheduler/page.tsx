"use client"

import * as React from "react";
// import 'tailwindcss/tailwind.css';
import Link from "next/link";

interface CalendarDay {
    day: number;
    month: number;
    year: number;
    isAvailable: boolean;
}

interface CalendarWeek {
    days: CalendarDay[];
}

interface CalendarMonth {
    weeks: CalendarWeek[];
}

interface CalendarProps {
    month: CalendarMonth;
    onDayClick: (day: CalendarDay) => void;
}

const Calendar: React.FC<CalendarProps> = ({month, onDayClick}) => {
    return (
        <div className="flex flex-col pb-10 mt-6 rounded-xl border border-indigo-200 border-solid max-md:max-w-full">
            <div
                className="flex gap-5 justify-between px-16 py-2.5 text-lg font-semibold tracking-wide leading-6 text-center text-black whitespace-nowrap bg-indigo-100 rounded-xl max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
            </div>
            {month.weeks.map((week, weekIndex) => (
                <div
                    key={weekIndex}
                    className="flex gap-5 justify-between px-16 mt-6 w-full max-md:flex-wrap max-md:px-5 max-md:max-w-full"
                >
                    {week.days.map((day, dayIndex) => (
                        <button
                            key={dayIndex}
                            className={`justify-center items-center self-stretch px-3.5 w-11 h-11 text-base tracking-wide leading-6 text-center whitespace-nowrap rounded-[100px] ${
                                day.isAvailable
                                    ? "bg-blue-50 text-zinc-900"
                                    : "bg-red-100 text-zinc-900"
                            }`}
                            onClick={() => onDayClick(day)}
                        >
                            {day.day}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
};

const StepIndicator: React.FC<{ currentStep: number }> = ({currentStep}) => {
    const steps = [
        {
            number: 1,
            title: "Meeting Type",
            description: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
            number: 2,
            title: "Choose Time",
            description: "Lorem ipsum dolor sit amet.",
        },
        {
            number: 3,
            title: "Your Details",
            description: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
            number: 4,
            title: "Last Step",
            description: "Lorem ipsum dolor sit amet.",
        },
    ];

    return (
        <div className="flex gap-3 mt-7 text-xs tracking-wide leading-5">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8afdbba52c33dbbd3c9bd6b16357069e0b274d07553817046ab85ff75871f6e3?apiKey=a63d3323f87e48248f7812715cd4edd6&"
                alt=""
                className="shrink-0 self-start mt-1.5 w-2.5 aspect-[0.03]"
            />
            <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                {steps.map((step) => (
                    <React.Fragment key={step.number}>
                        <div
                            className={`${
                                step.number === currentStep
                                    ? "bg-clip-text bg-[linear-gradient(97deg,#2B43D5_-4.78%,#5626D5_101.8%)]"
                                    : ""
                            }`}
                        >
                            Step {step.number}
                        </div>
                        <div
                            className={`text-lg font-bold tracking-wide leading-6 ${
                                step.number === currentStep
                                    ? "bg-clip-text bg-[linear-gradient(97deg,#2B43D5_-4.78%,#5626D5_101.8%)]"
                                    : "text-neutral-600"
                            }`}
                        >
                            {step.title}
                        </div>
                        <div className="text-base tracking-wide leading-6 text-zinc-500">
                            {step.description}
                        </div>
                        {step.number !== steps.length && (
                            <div
                                className="mt-8 bg-clip-text bg-[linear-gradient(97deg,#2B43D5_-4.78%,#5626D5_101.8%)]">
                                &nbsp;
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

const AppointmentScheduler: React.FC = () => {
    const [currentStep, setCurrentStep] = React.useState(2);
    const [selectedDay, setSelectedDay] = React.useState<CalendarDay | null>(
        null
    );

    const handleDayClick = (day: CalendarDay) => {
        setSelectedDay(day);
    };

    const handleGoBack = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const handleNextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const calendarMonth: CalendarMonth = {
        weeks: [
            {
                days: [
                    {day: 26, month: 12, year: 2023, isAvailable: true},
                    {day: 27, month: 12, year: 2023, isAvailable: true},
                    {day: 28, month: 12, year: 2023, isAvailable: true},
                    {day: 29, month: 12, year: 2023, isAvailable: true},
                    {day: 30, month: 12, year: 2023, isAvailable: true},
                    {day: 31, month: 12, year: 2023, isAvailable: true},
                    {day: 1, month: 1, year: 2024, isAvailable: true},
                ],
            },
            {
                days: [
                    {day: 2, month: 1, year: 2024, isAvailable: true},
                    {day: 3, month: 1, year: 2024, isAvailable: true},
                    {day: 4, month: 1, year: 2024, isAvailable: true},
                    {day: 5, month: 1, year: 2024, isAvailable: true},
                    {day: 6, month: 1, year: 2024, isAvailable: true},
                    {day: 7, month: 1, year: 2024, isAvailable: true},
                    {day: 8, month: 1, year: 2024, isAvailable: true},
                ],
            },
            {
                days: [
                    {day: 9, month: 1, year: 2024, isAvailable: true},
                    {day: 10, month: 1, year: 2024, isAvailable: true},
                    {day: 11, month: 1, year: 2024, isAvailable: true},
                    {day: 12, month: 1, year: 2024, isAvailable: true},
                    {day: 13, month: 1, year: 2024, isAvailable: true},
                    {day: 14, month: 1, year: 2024, isAvailable: true},
                    {day: 15, month: 1, year: 2024, isAvailable: true},
                ],
            },
            {
                days: [
                    {day: 16, month: 1, year: 2024, isAvailable: true},
                    {day: 17, month: 1, year: 2024, isAvailable: true},
                    {day: 18, month: 1, year: 2024, isAvailable: true},
                    {day: 19, month: 1, year: 2024, isAvailable: true},
                    {day: 20, month: 1, year: 2024, isAvailable: true},
                    {day: 21, month: 1, year: 2024, isAvailable: true},
                    {day: 22, month: 1, year: 2024, isAvailable: true},
                ],
            },
            {
                days: [
                    {day: 23, month: 1, year: 2024, isAvailable: true},
                    {day: 24, month: 1, year: 2024, isAvailable: true},
                    {day: 25, month: 1, year: 2024, isAvailable: true},
                    {day: 26, month: 1, year: 2024, isAvailable: true},
                    {day: 27, month: 1, year: 2024, isAvailable: false},
                    {day: 28, month: 1, year: 2024, isAvailable: true},
                    {day: 29, month: 1, year: 2024, isAvailable: true},
                ],
            },
            {
                days: [
                    {day: 30, month: 1, year: 2024, isAvailable: true},
                    {day: 1, month: 2, year: 2024, isAvailable: true},
                    {day: 2, month: 2, year: 2024, isAvailable: true},
                    {day: 3, month: 2, year: 2024, isAvailable: true},
                    {day: 4, month: 2, year: 2024, isAvailable: true},
                    {day: 5, month: 2, year: 2024, isAvailable: true},
                    {day: 6, month: 2, year: 2024, isAvailable: true},
                ],
            },
        ],
    };

    return (
        <div className="flex flex-col justify-center pt-8 bg-black bg-opacity-80">
            <div className="flex flex-col pb-6 w-full bg-white rounded-3xl max-md:max-w-full">
                <div
                    className="flex flex-col justify-center px-6 py-3.5 w-full text-lg tracking-wide leading-6 rounded-2xl bg-[linear-gradient(97deg,rgba(232,242,253,0.50_11.7%,rgba(235,228,252,0.50)_89.69%))] text-zinc-900 max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-0 max-md:flex-wrap">
                        <div className="flex-auto my-auto max-md:max-w-full">
                            Get Your Graphic Design
                        </div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f61047086460c95ab18cac5441cc010d6df265d3a4618088f303aff05cafc585?apiKey=a63d3323f87e48248f7812715cd4edd6&"
                            alt=""
                            className="shrink-0 w-8 aspect-square"
                        />
                    </div>
                </div>
                <div className="self-center mt-6 w-full max-w-[1468px] max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
                            <div
                                className="flex flex-col grow px-6 pt-8 pb-20 mx-auto w-full font-semibold rounded-xl bg-gray-100 bg-opacity-40 max-md:px-5 max-md:mt-6">
                                <div className="text-2xl tracking-wide leading-8 text-zinc-900">
                                    Steps will push you to reach your goal
                                </div>
                                <StepIndicator currentStep={currentStep}/>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col px-5 mt-4 max-md:mt-10 max-md:max-w-full">
                                <h1 className="self-start text-3xl font-bold tracking-wide text-zinc-900 max-md:max-w-full">
                                    Choose Time
                                </h1>
                                <p className="mt-1 text-base tracking-wide leading-6 text-zinc-500 w-[528px] max-md:max-w-full">
                                    Lorem ipsum dolor sit amet consectetur. Id amet vel
                                    sollicitudin mi adipiscing pharetra vitae mauris orci.
                                </p>
                                <div
                                    className="flex gap-5 justify-between px-0.5 mt-6 w-full font-semibold text-center max-md:flex-wrap max-md:max-w-full">
                                    <div className="flex-auto my-auto text-lg tracking-wide leading-6 text-neutral-950">
                                        January 2024
                                    </div>
                                    <div
                                        className="flex gap-4 justify-end text-base tracking-wide leading-6 text-zinc-900">
                                        <button className="flex gap-2 px-4 py-2 bg-gray-100 rounded-xl">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/829da3d01a6e51c8fdd1c271ca959f3c401c1fc9c4559d8509b730e4990eb7e7?apiKey=a63d3323f87e48248f7812715cd4edd6&"
                                                alt="Previous Month"
                                                className="shrink-0 w-6 aspect-square"
                                            />
                                            <span className="flex-auto">Previous Month</span>
                                        </button>
                                        <button className="flex gap-2 px-4 py-2 bg-gray-300 rounded-xl">
                                            <span className="grow">Next Month</span>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f045fc342ecc1b40e5bb1ced14b3bc7deaad09a7911cb92a90713ce72acffaa?apiKey=a63d3323f87e48248f7812715cd4edd6&"
                                                alt="Next Month"
                                                className="shrink-0 w-6 aspect-square"
                                            />
                                        </button>
                                    </div>
                                </div>
                                <Calendar month={calendarMonth} onDayClick={handleDayClick}/>
                                <div
                                    className="flex gap-2 self-end mt-28 text-base font-semibold tracking-wide leading-6 max-md:mt-10">
                                    <Link href={"/meeting-scheduler"}>
                                        <button
                                            className="flex gap-2 px-6 py-2 bg-white rounded-[100px] text-zinc-900 max-md:px-5"
                                            onClick={handleGoBack}
                                        >
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c7ef21708cad02cb03792170c2a75fc2c0b50ab0ebf59b555d4363c82dcaf4c?apiKey=a63d3323f87e48248f7812715cd4edd6&"
                                                alt="Go Back"
                                                className="shrink-0 my-auto w-5 aspect-square"
                                            />
                                            <span>Go Back</span>
                                        </button>
                                    </Link>
                                    <Link href={"/tell-us-about-yourself"}>
                                        <button
                                            className="justify-center px-6 py-2 text-center text-white bg-[linear-gradient(97deg,#2B43D5_-4.78%,#5626D5_101.8%)] rounded-[100px] max-md:px-5"
                                            onClick={handleNextStep}
                                        >
                                            Next Step
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentScheduler;