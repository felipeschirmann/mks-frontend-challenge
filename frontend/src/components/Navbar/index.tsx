import "./style.css";
import { ReactComponent as CartImg } from "assets/images/cart.svg";
import { useContext, useEffect } from "react";
import { CartContext } from "CartContext";
import { getCart } from "util/storageCart";

function Navbar() {
  const { cartContextData, setCartContextData } = useContext(CartContext);

  useEffect(() => {
    setCartContextData({
      itens: getCart().numberItens,
    });
  }, [setCartContextData]);

  return (
    <nav className="bg-primary">
      <div className="container-logo">
        <span className="logo-part-01">MKS</span>
        <span className="logo-part-02">Sistemas</span>
      </div>
      <div className="cart">
        <CartImg /> {cartContextData.itens || "0"}
      </div>
    </nav>
  );
}

export default Navbar;
