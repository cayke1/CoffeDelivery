import { BrowserRouter } from "react-router-dom"
import { Input } from "./components/Input"
import "./global.css"
import { Router } from "./Router"

function App() {

  return (
    <BrowserRouter>
        <Router />
    </BrowserRouter>
  )
}

export default App
