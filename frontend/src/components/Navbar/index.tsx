import "./style.css";
import { ReactComponent as Cart } from 'assets/images/cart.svg';

function Navbar() {
  return (
    <nav className="bg-primary">
      <div className="container-logo">
        <span className="logo-part-01">MKS</span>
        <span className="logo-part-02">Sistemas</span>
      </div>
      <div className="cart"> <Cart /> 0</div>
    </nav>
  );
}

export default Navbar;
