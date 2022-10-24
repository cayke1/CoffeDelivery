import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { NavLink } from "react-router-dom";
import { CartIconDescription } from "./components/CartIconDescription";
import { CartInput } from "./components/CartInput";
import { CoffeeCartCard } from "./components/CoffeeCartCard";
import { PaymentOption } from "./components/PaymentOption";

export function Cart() {
  return (
    <div className="max-w-[70rem] mx-auto">
      <div className="flex align-center mt-[2.5rem] font-header text-lg gap-[31.375rem]">
        <h2>Complete seu pedido</h2>
        <h2>Cafés selecionados</h2>
      </div>
      <div className="flex gap-8">
        <div>
          <div className="mt-4 bg-base-card p-10 max-w-[640px]">
            <CartIconDescription
              icon={<MapPinLine className="text-yellow-dark" size={20} />}
              title="Endereço de Entrega"
              description="Informe o endereço onde deseja receber seu pedido"
            />
            <div className="w-full grid grid-cols-cartForm gap-3 mt-8 mb-10">
              <CartInput
                placeholder="CEP"
                classNames="col-span-3 max-w-[12.5rem]"
              />
              <CartInput placeholder="Rua" classNames="col-span-3" />
              <CartInput placeholder="Número" />
              <CartInput placeholder="Complemento" classNames="col-span-2" />
              <CartInput placeholder="Bairro" />
              <CartInput placeholder="Cidade" />
              <CartInput placeholder="UF" />
            </div>
          </div>

          <div className="mt-4 bg-base-card p-10 max-w-[640px] mb-60">
            <CartIconDescription
              icon={<CurrencyDollar className="text-purple" />}
              title="Pagamento"
              description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            />

            <div className="w-full mx-auto flex justify-center items-center gap-3 mt-8">
              <PaymentOption
                icon={<CreditCard size={16} className="text-purple" />}
                optionName="cartão de crédito"
              />
              <PaymentOption
                icon={<Bank size={16} className="text-purple" />}
                optionName="cartão de crédito"
              />
              <PaymentOption
                icon={<Money size={16} className="text-purple" />}
                optionName="cartão de crédito"
              />
            </div>
          </div>
        </div>

        <div className="rounded-md p-10 bg-base-card rounded-tr-3xl rounded-bl-3xl h-fit mt-[15px]">
          <CoffeeCartCard item={0} />
          <hr className="my-6 text-base-button" />
          <CoffeeCartCard item={2} />
          <hr className="my-6 text-base-button" />

          <div className="flex justify-between items-center mt-[1.5px] text-base-text">
            <p>Total de items</p>
            <div className="ml-[3.125rem] font-text">
              <span className="text-xs mr-1">R$</span>
              <span className="mr-[7px] text-lg">19,80</span>
            </div>
          </div>

          <div className="flex justify-between items-center mt-[13.5px] text-base-text">
            <p>Entrega</p>
            <div className="ml-[3.125rem] font-text">
              <span className="text-xs mr-1">R$</span>
              <span className="mr-[7px] text-lg">3,50</span>
            </div>
          </div>

          <div className="flex justify-between items-center mt-[13.5px] text-base-subtitle font-bold text-xl">
            <p>Total</p>
            <div className="ml-[3.125rem] font-text">
              <span className="mr-1">R$</span>
              <span className="mr-[7px]">23,30</span>
            </div>
          </div>

          <NavLink to="/orderConfirmed">
            <button className="mt-6 py-3 px-2 bg-yellow text-white rounded-md w-[368px] font-bold">
              CONFIRMAR PEDIDO
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
