import Link from "next/link"
import Search from "../Search/Search"
import Card from "../Card/Card"

export default function Header() {
    return (
        <header className="flex items-center justify-between pl-5 pr-10 text-black bg-white lg:h-24 w-full whitespace-nowrap">
            <div className="flex flex-row items-center gap-3">
                    <img className="lg:w-28 " src="../../Assets/Logo-renovmat.svg" alt="" />
                <div className="renov-title flex flex-row font-[var(--rubik-wet-paint)] text-3xl">
                    <h1 className="renov-title flex font-[var(--rubik-wet-paint)] text-3xl">
                        <span className="text-[var(--green)]">RENOV</span>
                        <span className="text-[var(--yellow)]">'MAT</span>
                    </h1>
                </div>
            </div>
            <div className="flex justify-center ml-3.5 lg:w-fit">
                    <Search />
                </div>
            <div className="flex items-center gap-16">
                <div className="flex items-center gap-6 text-[var(--green)] mac:text-2xl font-extrabold">
                    <Link href="/">ACCUEIL</Link>
                    <Link href="/pages/category">CATÉGORIE</Link>
                    <Link href="/pages/profile">MON COMPTE</Link>
                    <Link href="/pages/about">CONTACT</Link>
                    <Link href="/pages/forum" className="text-[var(--pink)]">FORUM</Link>
                    <Link href="/pages/blog" className="text-[var(--purple)]">BLOG</Link>
                    <div>
                        <Card />
                    </div>
                </div>
            </div>
        </header>
    )
}