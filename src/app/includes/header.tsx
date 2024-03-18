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
            </nav>
        </header>
    );
}
