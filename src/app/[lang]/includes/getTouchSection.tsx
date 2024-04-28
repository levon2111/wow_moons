'use client'
import React from "react";
import Link from "next/link";

export default function GetTouchSection() {

    return (
      <section className="get-in-touch-section">
        <Link href={"/contact-us/email"} className="get-in-touch-link"/>
        <p className="click-txt">Click to</p>
        <h3 className="light">Get in touch</h3>
      </section>
    )
}