'use client'
import React from "react";
import Link from "next/link";
import {useDictionary} from "@/app/[lang]/dictionary-provider";

export default function GetTouchSection() {
    const dictionary = useDictionary()

    return (
        <section className="get-in-touch-section">
            <Link href={"/contact-us/email"} className="get-in-touch-link"/>
            <p className="click-txt">{dictionary.get_in_touch_click}</p>
            <h3 className="light">{dictionary.get_in_touch_contact}</h3>
        </section>
    )
}