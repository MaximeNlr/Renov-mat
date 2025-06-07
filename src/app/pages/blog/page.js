'use client';

import Header from "@/app/Components/Header/Header"
import Promo from "@/app/Components/Promo/Promo"
import Footer from "@/app/Components/Footer/Footer"
import { useState, useEffect } from "react"

export default function Blog () {

    const [slides, setSlides] = useState([]);
    const [current, setCurrent] = useState([]);
    const [next ,setNext] = useState("");
    const [prev, setPrev] = useState("");
    
    useEffect (() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('/data/blogs.json');
                const data = await response.json();
                console.log(data);
                setSlides(data);
                setCurrent(data[0]);
            } catch (error) {
                console.error("Error lors de la récupération des blogs", error);
            }
        }
        fetchBlogs();
    }, []);

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Promo />
            </div>
            <div>
                {current && 
                <div>
                    <div
                        style={{backgroundImage: `url(${current.img})`}}
                        className="lg:h-[400px] m-auto bg-contain bg-no-repeat"
                    >
                        <h1>{current.title}</h1>
                        <h2 className="bg-white">{current.id}</h2>
                    </div>
                    <div className="flex flex-row gap-5">
                        {slides.map((slides, index) => (
                            <div 
                                className="h-4 w-4 rounded-full bg-black cursor-pointer"

                            ></div>
                        ))}
                    </div>
                    <div>
                        <p>{current.content}</p>
                    </div>
                </div>
                }
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}