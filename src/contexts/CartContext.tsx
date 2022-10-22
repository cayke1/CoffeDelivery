import { createContext, ReactNode, useState } from 'react';
import productsObj from "../../coffe.json";

export interface Products {
    id: number;
    img: string;
    title: string;
    tags: string[];
    description: string;
    quantityInCart: number;
}

interface CartContextType {
    products: Products[];
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
    children: ReactNode;
}

export function CartContextProvider({children}: CartContextProviderProps) {
    const [products, setProducts] = useState<Products[]>(productsObj);

    function putInCart(id: number) {
        products.map((product) => {
            if(product.id === id) {
                
            }
        })
    }

    return (
        <CartContext.Provider
            value={{
                products
            }}
        >
            {children}
        </CartContext.Provider>
    )
}