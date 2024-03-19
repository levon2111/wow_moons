import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <Link href={"/home"}>
                <img src="/img/logo-header.svg"/>
            </Link>
            <nav>
                <Link href={"/about"}>About Us</Link>
                <Link href={"/services"}>Services</Link>
                <Link href={"/learn"}>Learn</Link>
                <Link href={"/blog"}>Blog</Link>
                <Link href={"/contact-us"}>Get in Touch</Link>
                <Link href={"/meeting-scheduler"}>Book a Meeting</Link>
                <Link href={"/"}>
                    <div
                        className="flex justify-center items-center self-stretch px-1.5 my-auto w-8 h-8 bg-white rounded-[100px]">
                        <img loading="lazy"
                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/acaefd928a936c87a8a4ff07685fa486e71162577f76dfa364b77864facca330?apiKey=a63d3323f87e48248f7812715cd4edd6&"
                             alt="Search Icon" className="w-5 aspect-square"/>
                    </div>
                </Link>
            </nav>
        </header>
    );
}
