import {Route, Routes} from "react-router-dom"
import {DefaultLayout} from "./layouts/DefaultLayout"
import { Cart } from "./pages/Cart"
import { Home } from "./pages/Home"
import { OrderConfirmed } from "./pages/OrderConfirmed"

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/orderConfirmed" element={<OrderConfirmed />}/>
            </Route>
        </Routes>
    )
}