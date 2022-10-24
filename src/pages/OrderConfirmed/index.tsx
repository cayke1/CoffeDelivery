import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import orderConfirmedImage from "../../assets/orderConfirmed.svg";
import { Icon } from "./components/Icon";
export function OrderConfirmed() {
  return (
    <div className="max-w-[70rem] mx-auto mt-20 flex gap-[76px] justify-center items-center">
      <div>
        <h1 className="text-yellow-dark font-header text-3xl font-bold">
          Uhu! Pedido confirmado
        </h1>
        <p className="text-base-subtitle text-xl">
          Agora é só aguardar que logo o café chegará até você
        </p>

        <div className="bg-gradient-to-r mt-10 from-yellow to-purple p-[1px] rounded-md rounded-tr-[36px] rounded-bl-[36px]">
        <div className="p-10 flex flex-col gap-8 bg-white rounded-md rounded-tr-[36px] rounded-bl-[36px] w-[526px]">
          <div className="flex gap-3">
            <Icon icon={<MapPin weight="fill" />} bgColor="bg-purple" />
            <div className="flex flex-col justify-start items-start">
            <p>
              Entrega em <span className="font-bold"> Rua João Daniel Martinelli, 102</span> 
            </p>
            <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <Icon icon={<Timer weight="fill" />} bgColor="bg-yellow" />
            <div className="flex flex-col justify-start items-start">
                <p>Previsão de entrega</p>
                <p className="font-bold">20 min - 30 min</p>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <Icon
              icon={<CurrencyDollar weight="fill" />}
              bgColor="bg-yellow-dark"
            />
            <div className="flex flex-col justify-start items-start">
                <p>Pagamento na entrega</p>
                <p className="font-bold">Cartão de Crédito</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div>
        <img src={orderConfirmedImage} />
      </div>
    </div>
  );
}
