import { ReactNode } from "react"

interface CartIconDescriptionProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export function CartIconDescription({icon, title, description}: CartIconDescriptionProps) {
    return (
        <div className="flex gap-[11.4px] justify-start">
            {icon}
            <div className="flex gap-[2px] flex-col justify-center">
                <h3 className="text-base-subtitle text-base">{title}</h3>
                <p className="text-base-text text-sm">{description}</p>
            </div>
        </div>
    )
}