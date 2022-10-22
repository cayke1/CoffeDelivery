import { ButtonHTMLAttributes, ReactNode, useState } from "react"

interface PaymentOptionProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon: ReactNode;
    optionName: string;
}
export function PaymentOption({icon, optionName, ...props}: PaymentOptionProps) {
    const [active, setActive] = useState(false);
    const classNames = active ? "flex items-center justify-center gap-3 bg-purple-light ring-2 ring-purple rounded-md p-4" :"flex items-center justify-center gap-3 bg-base-button rounded-md p-4"
    return (
        <button {...props} onClick={() => {setActive(!active)}} className={classNames}>
            {icon}
            <p className="text-base-text font-text uppercase text-xs">{optionName}</p>
        </button>
    )
}