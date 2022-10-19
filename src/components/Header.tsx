import { ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg"

export function Header() {
    return(
        <header>
            <NavLink to="/"><img src={logo} alt="" /></NavLink>
            <nav>
                <img />
                <NavLink to="/cart">
                    <ShoppingCart />
                </NavLink>
            </nav>
        </header>
    )
}