import coffeHome from "../../assets/coffeHome.svg"
export function Home() {
    return (
        <main className="flex justify-center items-center gap-14 mt-24 backdrop-blur-3xl w-[1120px] mx-auto">
            <div>
                <h1 className="text-base-title text-5xl font-header font-bold">Encontre o café perfeito para qualquer hora do dia</h1>
                <p className="text-base-subtitle text-xl mt-4">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            </div>
            <img src={coffeHome} alt="" />
        </main>
    )
}