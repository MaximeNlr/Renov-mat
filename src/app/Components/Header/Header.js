'use client';

import Link from "next/link";
import Search from "../Search/Search";
import CardIcon from "../Card_icon/Card";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {

    const pathname = usePathname();

    return (
        <header className="flex items-center justify-between pl-5 pr-10 text-black bg-white lg:h-24 w-full whitespace-nowrap">
            <div className="flex flex-row items-center gap-3">
                    <img className="lg:w-[80px]" src="../../Assets/Logo-renovmat.svg" alt="" />
                <div className="renov-title flex flex-row font-[var(--rubik-wet-paint)] text-3xl">
                    <h1 className="renov-title flex font-[var(--rubik-wet-paint)] text-2xl">
                        <span className="text-[var(--green)]">RENOV</span>
                        <span className="text-[var(--yellow)]">'MAT</span>
                    </h1>
                </div>
            </div>
            <div className="flex justify-center ml-3.5 lg:w-[25%]">
                    <Search />
                </div>
            <div className="flex items-center gap-16">
                <div className="flex items-center gap-6 text-[var(--green)] mac:text-2xl font-extrabold">
                    <Link href="/"
                        className={`border-b-2 border-transparent hover:border-b-[var(--green)] transition-colors duration-100 cursor-pointer
                            ${pathname === '/' ? 'border-b-[var(--green)]' : ''}`}
                    >   
                        ACCUEIL
                    </Link>
                    <Link href="/pages/category" className={`border-b-2 border-transparent hover:border-b-[var(--green)] transition-colors duration-300 cursor-pointer
                        ${pathname === '/pages/category' ? 'border-b-[var(--green)]' : ''}`}>
                            CATÉGORIE
                    </Link>
                    <Link href="/pages/profile" 
                        className={`border-b-2 border-transparent hover:border-b-[var(--green)] transition-colors duration-100 cursor-pointer
                            ${pathname === '/pages/profile' ? 'border-b-[var(---green)]' : ''}`}
                    >
                        MON COMPTE
                    </Link>
                    <Link href="#" 
                        className={`border-b-2 border-transparent hover:border-b-[var(--green)] transition-colors duration-100 cursor-pointer
                            ${pathname === '#' ? 'border-b-[var(--green)]' : ''}`}
                    >
                        CONTACT
                    </Link>
                    <Link href="/pages/forum" 
                        className={`border-b-2 border-transparent hover:border-b-[var(--pink)] transition-colors duration-100 text-[var(--pink)] cursor-pointer
                            ${pathname === '/pages/forum' ? 'border-b-[var(--pink)]' : ''}`}
                    >
                        FORUM
                    </Link>
                    <Link href="/pages/blog" 
                        className={`border-b-2 border-transparent hover:border-b-[var(--purple)] transition-colors duration-100 text-[var(--purple)] cursor-pointer
                            ${pathname === '/pages/blog' ? 'border-b-[var(--purple)]' : ''}`}
                    >
                        BLOG
                    </Link>
                    <div>
                        <CardIcon />
                    </div>
                </div>
            </div>
        </header>
    )
}