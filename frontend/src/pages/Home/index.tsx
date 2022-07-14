import axios, { AxiosRequestConfig } from "axios";
import CardProduct from "components/CardProduct";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { useEffect, useState } from "react";
import { Product } from "types/Product";
import { ResponsePage } from "types/vendor/responsePage";
import { BASE_URL } from "util/requests";
import "./style.css";

const Home = () => {
  const [page, setPage] = useState<ResponsePage<Product>>();

  useEffect(() => {
    const page = 1;
    const rows = 8;
    const sortBy = "id";
    const orderBy = "ASC";

    const url = `/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`;
    axios({ url, baseURL: BASE_URL }).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {page?.products.map((obj) => (
            <div
              key={obj.id}
              className="col-xl-3 col-md-6 container-card-product"
            >
              <CardProduct product={obj} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
