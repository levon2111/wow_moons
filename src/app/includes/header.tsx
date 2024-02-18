import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <img src="/img/logo-header.svg"/>
            <nav>
                <Link href="/about">About Us</Link>
                <Link href="/services">Services</Link>
                <Link href="/learn">Learn</Link>
                <Link href="/blog">Blog</Link>
                <button>Get in Touch</button>
            </nav>
        </header>
        )
    ;
}
