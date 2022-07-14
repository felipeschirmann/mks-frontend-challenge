import { ReactComponent as Bag } from "assets/images/bag.svg";
import "./style.css";

type Props = {
  text: string;
};

function CardButton({ text }: Props) {
  return (
    <button className="btn btn-primary btn-bag" type="submit">
      <div className="container-button" >
        <Bag />
        <div className="text-button">{text}</div>
      </div>
    </button>
  );
}

export default CardButton;
