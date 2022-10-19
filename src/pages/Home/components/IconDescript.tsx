import { Icon, IconProps } from "phosphor-react"
import React, { ReactNode } from "react"

interface IconDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: ReactNode,
    description: string,
}

export function IconDescription({icon, description, ...props}: IconDescriptionProps) {
    return(
        <div className="flex gap-3 justify-center items-center">
            <div {...props}>
                {icon}
            </div>
            <p>
                {description}
            </p>
        </div>
    )
}