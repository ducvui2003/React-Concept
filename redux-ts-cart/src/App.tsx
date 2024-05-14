import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider, useDispatch} from "react-redux";
import {store} from "./store/Store";
import ProductList from "./component/ProductList";
import {loadProduct} from "./store/actionCreator";
import {products} from "./data/ProductData";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadProduct(products));
        // dispatch(loadProduct(products));
    })
  return (
        <div className="App">
            <ProductList/>
        </div>
  );
}

export default App;
