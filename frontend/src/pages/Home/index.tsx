import CardProduct from "components/CardProduct";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import "./style.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-md-6 container-card-product">
            <CardProduct />
          </div>
          <div className="col-xl-3 col-md-6 container-card-product">
            <CardProduct />
          </div>
          <div className="col-xl-3 col-md-6 container-card-product">
            <CardProduct />
          </div>
          <div className="col-xl-3 col-md-6 container-card-product">
            <CardProduct />
          </div>
          <div className="col-xl-3 col-md-6 container-card-product">
            <CardProduct />
          </div>
          <div className="col-xl-3 col-md-6 container-card-product">
            <CardProduct />
          </div>
          <div className="col-xl-3 col-md-6 container-card-product">
            <CardProduct />
          </div>
          <div className="col-xl-3 col-md-6 container-card-product">
            <CardProduct />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
