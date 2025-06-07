export default function Tendancy() {

    const tendComp = {
        about: "La peinture lila revient en force avec ses tons méditerranéens et frais",
        button: "Voir les peintures lila",
        url: "http://blablabla",
    };

    return (
        <div className="flex flex-col justify-around items-center pl-2 pr-2 font-extrabold h-64 border-2 rounded-xl border-amber-300 text-white text-center bg-[#EABDE6]">
            <h2 className="text-xl">TENDANCE</h2>
            <p>{tendComp.about}</p>
            <div className="bg-white text-[#FFC518] p-2 rounded-2xl cursor-pointer">
                <a href={tendComp.url}>{tendComp.button}</a>
            </div>
        </div>
    )
}