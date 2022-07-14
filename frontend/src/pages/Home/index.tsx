import CardProduct from "components/CardProduct";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { Product } from "types/Product/Product";
import "./style.css";

const obj: Product = {
  name: "Apple Watch Series 4 GPS",
  price: "R$399",
  photo:
    "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp",
  description: "Redesigned from scratch and completely revised.",
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-md-6 container-card-product">
            <CardProduct product={obj} />
          </div>
          <div className="col-xl-3 col-md-6 container-card-product">
            <CardProduct product={obj} />
          </div>
          <div className="col-xl-3 col-md-6 container-card-product">
            <CardProduct product={obj} />
          </div>
          <div className="col-xl-3 col-md-6 container-card-product">
            <CardProduct product={obj} />
          </div>
          <div className="col-xl-3 col-md-6 container-card-product">
            <CardProduct product={obj} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
