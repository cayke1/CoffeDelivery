import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import coffeHome from "../../assets/coffeHome.svg"
import { IconDescription } from "./components/IconDescript"
import { ProductCard } from "./components/ProductCard"
export function Home() {
    return (
        <>
        <main className="flex justify-center items-center gap-14 mt-24 backdrop-blur-3xl w-[1120px] mx-auto">
            <div>
                <h1 className="text-base-title text-5xl font-header font-bold">Encontre o café perfeito para qualquer hora do dia</h1>
                <p className="text-base-subtitle text-xl mt-4">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                <div className="flex flex-row justify-center items-center gap-10 w-[567px] h-[84px] mt-16 font-text text-base text-base-text">
                    <div className="flex flex-col gap-5 justify-center items-center">
                        <IconDescription 
                        icon={<ShoppingCart weight="fill" size={13}/>} 
                        description="Compra simples e segura" 
                        className="w-8 h-8 rounded-full bg-yellow-dark text-white justify-center items-center flex"/>
                        
                        <IconDescription 
                        icon={<Timer weight="fill" size={13} />}
                        description="Entrega rápida e rastreada" 
                        className="w-8 h-8 rounded-full bg-yellow text-white justify-center items-center flex"   
                        />
                    </div>
                    <div className="flex flex-col gap-5 justify-center items-center">
                        <IconDescription 
                        icon={<Package weight="fill" size={13}/>} 
                        description="Compra simples e segura" 
                        className="w-8 h-8 rounded-full bg-base-text text-white justify-center items-center flex"/>
                        
                        <IconDescription 
                        icon={<Coffee weight="fill" size={13} />}
                        description="Entrega rápida e rastreada" 
                        className="w-8 h-8 rounded-full bg-purple text-white justify-center items-center flex"   
                        />
                    </div>
                </div>
            </div>
            <img src={coffeHome} alt="" />
        </main>

        <section className="mt-40 w-[1120px] mx-auto mb-40">
            <h2 className="text-base-subtitle text-[2rem] font-header font-bold">Nossos cafés</h2>
            <div className="max-w-[1120px] mt-14">
                <ProductCard />
            </div>
        </section>
        </>
    )
}