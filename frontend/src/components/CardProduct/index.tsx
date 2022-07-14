import CardButton from "components/CardButton";
import "./style.css";

function CardProduct() {
  return (
    <div className="container-card">
      <div className="card">
        <div className="photo"></div>
        <div className="container-name-price">
          <div className="name">Apple Watch Series 4 GPS</div>
          <div className="price">R$399</div>
        </div>
        <div className="description">
          Redesigned from scratch and completely revised.
        </div>
      </div>
      <div className="Button">
        <CardButton text="COMPRAR" />
      </div>
    </div>
  );
}

export default CardProduct;
