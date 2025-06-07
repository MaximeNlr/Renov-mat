'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

const slides = [
    {
        background: "../../Assets/Home_carousel/summer.png",
        title: "L'ÉTÉ EST LÀ !",
        subtitle: "IL EST TEMPS DE RETAPER VOTRE TERRASSE",
        links: [
            "Voir les parquets pour extérieur",
            "Voir les peintures pour extérieur",
            "Voir les faux gazons"
        ],
    },
    {
        background: "../../Assets/springCarousel.png",
        title: "L'HIVER EST LÀ !",
        subtitle: "IL EST TEMPS DE RETAPER VOTRE INTERIEUR",
        links: [
            "Voir les parquets pour interieur",
            "Voir les peintures pour interieur",
            "Voir les "
        ],
    }
];
export default function CarouselHome() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slide = slides[currentSlide];
    return (
        <div
            className="mac:h-30 xl:h-96 bg-cover flex flex-col justify-center gap-10 pl-14 font-bold"
            style={{ backgroundImage: `url(${slide.background})` }}
        >
            <div className="text-white flex flex-col gap-3">
                <h1 className="md:text-5xl lg:text-6xl">{slide.title}</h1>
                <h2 className="md:text-4xl lg:text-5xl">{slide.subtitle}</h2>
            </div>
            <div className="flex gap-10 text-[var(--pink)]">
                {slide.links.map((link, index) => (
                    <div
                        className="bg-white font-extrabold p-5 rounded-2xl  text-[24] cursor-pointer"
                        key={index}>
                        <Link href="">{link}</Link>
                    </div>
                ))}
            </div>
        </div >
    )
}