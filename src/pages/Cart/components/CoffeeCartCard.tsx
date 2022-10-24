import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { InputNumber } from "../../Home/components/InputNumber";
import { RemoveItemCard } from "./RemoveItemCard";

interface CoffeeCartCardProps {
    item: number;
}
export function CoffeeCartCard({item}: CoffeeCartCardProps) {
  const { products } = useContext(CartContext);
  return (
    <div className="flex gap-5 py-2 px-1">
      <div className="w-16 h-16">
        <img src={products[item].img} />
      </div>
      <div className=" flex flex-col justify-center items-center gap-2">
        <p className="text-base-subtitle text-base font-text">
          {products[item].title}
        </p>
        <div className="flex justify-center items-center gap-2">
          <InputNumber />
          <RemoveItemCard />
        </div>
      </div>

      <div className="ml-[3.125rem] font-bold font-text text-base-text">
        <span className="text-xs mr-1">R$</span>
        <span className="mr-[7px] text-lg">9,90</span>
      </div>
    </div>
  );
}
