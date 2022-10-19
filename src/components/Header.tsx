import { ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg"

export function Header() {
    return(
        <header className="flex items-center justify-between mx-40 my-8">
            <NavLink to="/"><img src={logo} alt="" /></NavLink>
            <nav>
                <img />
                <NavLink to="/cart">
                    <div className="rounded-md w-9 h-9 bg-yellow text-yellow-dark flex 
                                    items-center justify-center">
                        <ShoppingCart size={18} weight="fill"/>
                    </div>
                </NavLink>
            </nav>
        </header>
    )
}