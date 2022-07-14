import CardButton from "components/CardButton";
import { Product } from "types/Product";
import "./style.css";

type Props = {
  product: Product;
};

function CardProduct({ product }: Props) {
  return (
    <div className="container-card">
      <div className="card">
        <div className="photo">
          <img src={product.photo} alt={product.name} />
        </div>
        <div className="container-name-price">
          <div className="name">{product.name}</div>
          <div className="price">R${product.price / 1}</div>
        </div>
        <div className="description">{product.description}</div>
      </div>
      <CardButton text="COMPRAR" />
    </div>
  );
}

export default CardProduct;
