import "./assets/styles/custom.scss";
import "./App.css";
import Navbar from "./components/Navbar";
import CardProduct from "components/CardProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CardProduct />
    </div>
  );
}

export default App;
