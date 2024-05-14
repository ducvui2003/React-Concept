import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import ProductList from './component/ProductList';
import { products } from './data/ProductData';
import { loadProduct } from './features/cart/cart.slice';

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
