'use client';

import Header from "@/app/Components/Header/Header"
import Footer from "@/app/Components/Footer/Footer"
import Promo from "@/app/Components/Promo/Promo";
import { useState, useEffect } from "react"
import Link from "next/link";

export default function selectedProduct() {

    const [product, setProduct] = useState([]);
    const [isAdded, setIsAdded] = useState (false);

    useEffect(() => {
        const storedProduct = localStorage.getItem('selected product');
        if (storedProduct) {
            setProduct(JSON.parse(storedProduct));
        }
    }, []);
    console.log(product)

    const addToCard = () => {
        setIsAdded(true)
        localStorage.setItem('card', JSON.stringify(product))
    }

    return (
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <Promo />
            </div>
            <div className="lg:text-2xl">
                <div className="flex flex-row w-full justify-center gap-[5%] mt-20">
                    <div className="flex flex-row w-[40%] items-center">
                        <div className="m-auto cursor-pointer">
                            <img src="../../Assets/left-arrow.svg" alt="icon fleche de gauche" />
                        </div>
                        <div className="flex flex-col">
                            <img className="w-[250px] h-[150px] lg:w-[450px] lg:h-[350px]" src={product.img} alt="Image du produit dans le panier"/>
                            <div className="flex flex-row justify-center gap-1.5 mt-7">
                                <div className="h-[6px] w-[6px] bg-[var(--yellow)] rounded-[50%] cursor-pointer"></div>
                                <div className="h-[6px] w-[6px] bg-[var(--yellow)] rounded-[50%] cursor-pointer"></div>
                                <div className="h-[6px] w-[6px] bg-[var(--yellow)] rounded-[50%] cursor-pointer"></div>
                            </div>
                        </div>
                        <div className="m-auto cursor-pointer">
                            <img src="../../Assets/right-arrow.svg" alt="icon fleche de droite" />
                        </div>
                    </div>
                    <div className="w-[40%]">
                        <h1 className="lg:text-3xl font-extrabold">{product.name}</h1>
                        <div className="flex flex-row gap-1.5">
                            <h3>{product.quantity}</h3>
                            <p>-</p>
                            <h3>{product.stats}</h3>
                        </div>
                        <h2 className="text-2xl">{product.price}</h2>
                        <div className="h-0.5 w-full bg-[var(--yellow)] mb-6"></div>
                        <div className="flex flex-row justify-between mr-4">
                            <ul>
                                <li>Quantité <strong>{product.quantity}</strong></li>
                                <li>Marque <strong>{product.brand}</strong></li>
                                <li>Couleur <strong>{product.color}</strong></li>
                            </ul>
                            <ul>
                                <li>Materiaux <strong>{product.materials}</strong></li>
                                <li>Remise <strong>Main propre</strong></li>
                            </ul>
                        </div>
                        <div className="h-0.5 w-full bg-[var(--yellow)] mt-6 mb-10"></div>
                        <div className="flex flex-row justify-between text-[1rem]">
                            {isAdded == false &&
                            <button 
                                onClick={addToCard}
                                className="bg-[var(--yellow)] text-white font-extrabold rounded-[10px] w-[180px] cursor-pointer p-2 hover:text-[var(--green)] hover:transition-[0.3s] transition-[0.3s]"
                            >
                                ACHETER
                            </button> 
                            }
                            {isAdded == true && 
                            <button 
                                onClick={addToCard}
                                className="bg-[var(--green)] text-white font-extrabold rounded-[10px] w-[180px] cursor-pointer p-2"
                            >
                                AJOUTÉ AU PANIER
                            </button>
                            }
                            <button 
                                className="bg-[var(--yellow)] text-white font-extrabold rounded-[10px] w-[180px] cursor-pointer p-2"
                            >
                                AJOUTER AUX FAVORIS
                            </button>
                            <button
                                className="bg-[var(--yellow)] text-white font-extrabold rounded-[10px] w-[180px] cursor-pointer p-2"
                            >
                                CONTACTER LE VENDEUR
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between ml-[80px] mt-[80px]">
                    <div className="w-[60%] ">
                        <div className="flex flex-row border-b-2 border-[var(--green)] gap-2 ">
                            <div className="bg-[var(--green)] text-white font-extrabold p-1.5 cursor-pointer rounded-t-[10px]">
                                <h4>Description supplémentaire </h4>
                            </div>
                            <div className="font-extrabold p-1.5 cursor-pointer">
                                <h4>Fiche technique</h4>
                            </div>
                        </div>
                        <div className="mt-[20px]">
                            <p>
                                Produit très hygiénique, car il n’absorbe ni la poussière, ni la saleté.
                                Simple à nettoyer avec des détergents neutres.  Carreaux poreux et compact dérivé
                                de matières premières de qualité, obtenus par pressage, peaufinés avec des émaux sélectionnés et cuits à haute température.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row bg-[#ffe79e] w-[30%] h-[25vh] items-center justify-center gap-6 p-2.5 rounded-l-[15px]">
                        <div className="w-1/4">
                            <img src="../../Assets/users_img/user.png" alt="Photo du vendeur"/>
                        </div>
                        <div className="flex flex-col gap-3.5">
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-bold">{product.seller}</h2>
                                <div className="flex flex-row items-center gap-2">
                                    <div className="flex flex-row">
                                        <img src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs"/>
                                        <img src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs"/>
                                        <img src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs"/>
                                        <img src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs"/>
                                        <img src="../../Assets/Stars/empty-star.svg" alt="icon note des utilisateurs"/>
                                    </div>
                                    <p className="">8 avis</p>
                                </div>
                                <div className="flex flex-row gap-1">
                                    <img src="../../Assets/location.svg" alt="icon de localisation"/>
                                    <p>Vallauris, Alpes-Maritimes</p>
                                </div>
                            </div>
                            <div>
                                <Link href="/pages/seller">
                                    <button className="bg-[var(--yellow)] p-2.5 text-white font-extrabold rounded-[10px] w-[180px] cursor-pointer">VOIR PLUS</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}