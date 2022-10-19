import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg"

export function Header() {
    return(
        <header className="flex items-center justify-between mx-40 my-8">
            <NavLink to="/"><img src={logo} alt="" /></NavLink>
            <nav>
                <img />
                <NavLink to="/cart" className="w-48 h-9 flex gap-3">
                    <div className="w-36 h-9 bg-purple-light text-purple flex justify-center items-center text-center gap-1 rounded-md">
                        <MapPin weight="fill" size={18}/>
                        <p className="text-sm">Porto Alegre, RS</p>
                    </div>
                    <div className="rounded-md w-9 h-9 bg-yellow-light text-yellow-dark flex 
                                    items-center justify-center">
                        <ShoppingCart size={18} weight="fill"/>
                    </div>
                </NavLink>
            </nav>
        </header>
    )
}