import { ReactNode } from 'react';
interface IconProps {
    icon: ReactNode;
    bgColor: string;
}

export function Icon({icon, bgColor}: IconProps) {
    return(
        <div className={`flex justify-center items-center rounded-full w-8 h-8 text-white ${bgColor}`}>
            {icon}
        </div>
    )
}