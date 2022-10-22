import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CartIconDescription } from "./components/CartIconDescription";
import { CartInput } from "./components/CartInput";
import { PaymentOption } from "./components/PaymentOption";

export function Cart() {
  return (
    <div className="max-w-[70rem] mx-auto">
      <div className="flex align-center justify-between mt-[2.5rem] font-header text-lg">
        <h2>Complete seu pedido</h2>
        <h2>Cafés selecionados</h2>
      </div>
      <div className="mt-4 bg-base-card p-10 max-w-[640px]">
        <CartIconDescription
          icon={<MapPinLine className="text-yellow-dark" size={20}/>}
          title="Endereço de Entrega"
          description="Informe o endereço onde deseja receber seu pedido"
        />
        <div className="w-full grid grid-cols-cartForm gap-3 mt-8 mb-10">
            <CartInput placeholder="CEP" classNames="col-span-3 max-w-[12.5rem]"/>
            <CartInput placeholder="Rua" classNames="col-span-3"/>
            <CartInput placeholder="Número"/>
            <CartInput placeholder="Complemento" classNames="col-span-2"/>
            <CartInput placeholder="Bairro"/>
            <CartInput placeholder="Cidade"/>
            <CartInput placeholder="UF"/>
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
                    icon={<CreditCard size={16} className="text-purple"/>}
                    optionName="cartão de crédito"
                />
                <PaymentOption
                    icon={<Bank size={16} className="text-purple"/>}
                    optionName="cartão de crédito"
                />
                <PaymentOption
                    icon={<Money size={16} className="text-purple"/>}
                    optionName="cartão de crédito"
                />
            </div>
        </div>
    </div>
  );
}
