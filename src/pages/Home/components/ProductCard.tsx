import { ShoppingCart } from "phosphor-react";

import { InputNumber } from "./InputNumber";

interface ProductCardProps {
    id: number,
    imgSrc: string,
    tags: String[],
    title: string,
    description: string,
    quantityInCart: number
}
export function ProductCard({id, imgSrc, tags, title, description, quantityInCart}: ProductCardProps) {
    
    return (
        <div 
            className="w-[256px] h-[310px] mt-10 overflow-visible bg-base-card 
            rounded-md rounded-tr-3xl rounded-bl-3xl flex flex-col items-center justify-center text-center
            drop-shadow-md"
        >
            <img src={imgSrc} className="w-[120px] h-[120px] mt-[-6rem]"/>
            <div className="mt-3 flex justify-center items-center gap-1 flex-wrap">
                {tags.map(tag => {
                    return (
                        <div className="w-[81px] h-[21px] bg-yellow-light text-yellow-dark text-[10px] flex justify-center
                            items-center rounded-full">
                            <span>{tag}</span>
                        </div>
                    )
                })}
            </div>
            <h3 className="text-base-subtitle text-xl font-header font-bold">{title}</h3>
            <p className="text-base-label text-sm mt-2">{description}</p>
            <div className="flex items-center justify-center mt-9 gap-4">
            <div>
                <span className="text-xs mr-1">R$</span><span className="mr-[7px] font-bold font-header text-lg">9,90</span>
            </div>
                <InputNumber />
                <div className="rounded-md w-9 h-9 bg-purple-dark text-base-card flex 
                                    items-center justify-center">
                        <ShoppingCart size={18} weight="fill"/>
                    </div>
            </div>
        </div>
    )
}