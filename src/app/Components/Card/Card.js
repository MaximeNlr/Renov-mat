"use client";

import { useState, useEffect } from "react";

export default function Card () {

    const [card, setCard] = useState("");

    useEffect(() => {
        const storedCard = localStorage.getItem('card');
        if (storedCard) {
            setCard(JSON.parse(storedCard));
        }
    }, []);

    return (
        <div className="cursor-pointer">
            <img src="../../Assets/ShoppingCart.svg" alt="panier" />
        </div>
    )
}