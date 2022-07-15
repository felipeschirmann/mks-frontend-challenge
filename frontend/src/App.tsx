import "./assets/styles/custom.scss";
import "./App.css";
import Home from "pages/Home";
import { CartContext, CartContextData } from "CartContext";
import { useState } from "react";

function App() {
  const [cartContextData, setCartContextData] = useState<CartContextData>({
    itens: 0,
  });

  return (
    <div className="App">
      <CartContext.Provider value={{ cartContextData, setCartContextData }}>
        <Home />
      </CartContext.Provider>
    </div>
  );
}

export default App;
