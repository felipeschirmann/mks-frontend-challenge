import { useForm } from "react-hook-form";
import CardButton from "components/CardButton";
import { Product } from "types/Product";
import "./style.css";
import { getCart, saveItemCart } from "util/storageCart";
import { useContext } from "react";
import { CartContext } from "CartContext";

type Props = {
  product: Product;
};

function CardProduct({ product }: Props) {
  const { setCartContextData } = useContext(CartContext);

  const { handleSubmit } = useForm();

  const onSubmit = () => {
    saveItemCart(product);
    
    let numberItens = getCart().numberItens++;
    setCartContextData({
      itens: numberItens,
    });
  };

  return (
    <div className="container-card">
      <form onSubmit={handleSubmit(onSubmit)}>
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
      </form>
    </div>
  );
}

export default CardProduct;
