'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {

    const router = useRouter();

    const [product, setProduct] = useState([]);
    const searchButton = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('/data/materials.json');
            const data = await response.json();
            setProduct(data);
            localStorage.setItem('product', JSON.stringify(data));
            router.push('/pages/searched-product')
        } catch (error) {
            console.error('Erreur lors de la recherche', error);
        }
    }

    return (
        <div className="w-full">
            <form action="">
                <div className="flex items-center gap-3 p-2 border-2 border-[var(--green)] rounded-2xl w-full">
                    <img src="../../Assets/Search.svg" alt="search" />
                    <input
                        className="outline-0 w-full"
                        type="text"
                        placeholder="Besoin de quelque chose ?"
                    />
                    <button onClick={searchButton}></button>
                </div>
            </form>
        </div>
    )
}