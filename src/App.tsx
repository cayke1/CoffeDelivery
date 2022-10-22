import { BrowserRouter } from "react-router-dom"
import { CartContextProvider } from "./contexts/CartContext"
import "./global.css"
import { Router } from "./Router"

function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
