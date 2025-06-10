'use client';

import Link from "next/link";
import Header from "@/app/Components/Header/Header";
import Promo from "@/app/Components/Promo/Promo";
import Footer from "@/app/Components/Footer/Footer";
import { useState } from "react";


export default function Profile() {

    const [isProfile, setIsProfile] = useState(true);

    const user = {
        name: 'Dupont',
        firstname: 'Marc',
        image: '../../Assets/users_img/user.png',
        mail: 'marc.dupont@gmail.com',
        adress: '39 Av. Georges Clemenceau, 06220 Vallauris',
        gender: 'Homme',
        birthday: '11/02/1985',
        sub: 'Premium',
        sub_amount: '5,99'
    }
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <Promo />
            </div>
            <div className="pl-20 pr-20 pt-10 pb-10">
                <div className="flex justify-between">
                    <div className="flex items-center lg:gap-2.5">
                        <img src={user.image} alt="" />
                        <h2 className="text-4xl text-[var(--green)] font-bold">Bienvenue {user.firstname}</h2>
                        <img src="../../Assets/profile-icon.svg" alt="" />
                    </div>
                    <div className="flex flex-col justify-around items-center w-1/3 rounded-2xl bg-[var(--yellow)] font-extrabold text-white">
                        <div>
                            <h2 className="text-2xl">ABONNEMENT</h2>
                        </div>
                        <div className="flex gap-20">
                            <p>Abonnement {user.sub}</p>
                            <p>{user.sub_amount}/mois</p>
                        </div>
                        <div>
                            <button className="bg-white text-[var(--green)] cursor-pointer rounded-2xl p-3"><Link href="#">GÉRER MON ABONNEMENT</Link></button>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="flex ml-10 gap-10 font-extrabold">
                        <Link href="#" className="bg-[var(--yellow)] p-1.5 rounded-t-lg">MON PROFIL</Link>
                        <Link href="#" 
                            className="hover:border-[var(--yellow)] border-t-2 border-l-2 border-r-2 border-transparent rounded-t-lg p-1.5 transition-colors duration-100"
                        >
                            MES ANNONCES
                        </Link>
                        <Link href="#"
                            className="hover:border-[var(--yellow)] border-t-2 border-l-2 border-r-2 border-transparent rounded-t-lg p-1.5 transition-colors duration-100"
                        > 
                            MES ÉVALUTATIONS
                        </Link>
                        <Link href="#"
                            className="hover:border-[var(--yellow)] border-t-2 border-l-2 border-r-2 border-transparent rounded-t-lg p-1.5 transition-colors duration-100"
                        >
                            MES TRANSACTIONS
                        </Link>
                    </div>
                    <div>
                        <div>
                            {isProfile === true && (
                                <div className="border-4 rounded-2xl border-[var(--yellow)] p-8 h-[400px]">
                                    <form action="" className="h-full">
                                        <div className="flex h-full">
                                            <div className="flex gap-10 w-1/2 ml-14">
                                                <div className="profile-inputs flex flex-col gap-3.5 justify-center">
                                                    <div className="profile-input-label-container">
                                                        <label htmlFor="">Prénom</label>
                                                        <input className="" type="text" defaultValue={user.firstname} />
                                                    </div>
                                                    <div className="profile-input-label-container">
                                                        <label htmlFor="">Nom</label>
                                                        <input className="" type="text" defaultValue={user.name} />
                                                    </div>
                                                    <div className="profile-input-label-container">
                                                        <label htmlFor="">Mail</label>
                                                        <input className="bg-gray-300 text-gray-500" type="text" defaultValue={user.mail} />
                                                    </div>
                                                    <div className="profile-input-label-container">
                                                        <label htmlFor="">Adresse</label>
                                                        <input className="" type="text" defaultValue={user.adress} />
                                                    </div>
                                                    <div className="profile-input-label-container">
                                                        <label htmlFor="">Genre</label>
                                                        <select className="" name="" id="" defaultValue={user.gender}>
                                                            <option value="">Genre</option>
                                                            <option value="">Homme</option>
                                                            <option value="">Femme</option>
                                                        </select>
                                                    </div>
                                                    <div className="profile-input-label-container">
                                                        <label htmlFor="">Date de naissance</label>
                                                        <input className="" type="date" defaultValue={user.birthday} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-0.5 bg-[var(--yellow)]"></div>
                                            <div className="w-1/2 flex flex-col gap-10 font-extrabold">
                                                <div>
                                                    <h2 className="text-center text-[1.3rem]">MES UNIVERS PRÉFÉRÉS</h2>
                                                </div>
                                                <div className="flex flex-col h-full justify-around">
                                                    <div className="flex flex-wrap text-[0.9rem] font-bold gap-10 justify-center text-white">
                                                        <div className="profile-pref bg-[var(--yellow)]">
                                                            <p>OUTILS</p>
                                                        </div>
                                                        <div className="profile-pref bg-[var(--yellow)]">
                                                            <p>PEINTURE</p>
                                                        </div>
                                                        <div className="profile-pref bg-[var(--yellow)]">
                                                            <p>PINCEAUX</p>
                                                        </div>
                                                        <div className="profile-pref bg-[var(--green)]">
                                                            <p>+</p>
                                                        </div>
                                                        <div className="profile-pref bg-[var(--green)]">
                                                            <p>+</p>
                                                        </div>
                                                        <div className="profile-pref bg-[var(--green)]">
                                                            <p>+</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-end">
                                                        <div className="flex border-2 border-[var(--green)] p-1 w-[30%] rounded-md justify-center gap-2 text-white bg-[var(--yellow)] cursor-pointer">
                                                            <img src="../../Assets/save.svg" alt="" />
                                                            <p>ENREGISTER</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div >
    )
}