import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import ProductList from "./component/ProductList";
import { loadProduct } from "./redux/actions/cartAction";
import { products } from "./data/ProductData";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProduct(products));
  });
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

export default App;
