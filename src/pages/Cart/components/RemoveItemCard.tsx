import { Trash } from "phosphor-react";

export function RemoveItemCard() {
    return (
        <button className="bg-base-button px-2 flex items-center justify-center gap-2 rounded-md w-[91px] h-[32px]">
            <Trash className="text-purple"/>
            <p className="font-text text-xs text-base-text">REMOVER</p>
        </button>
    )
}