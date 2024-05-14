import { useSelector } from 'react-redux';
import { RootState } from '../features/store';
import ProductItem from './ProductItem';

export default ProductList;
function ProductList() {
  const products = useSelector((state: RootState) => state.cart.products);
  const cart = useSelector((state: RootState) => state.cart);
  console.log('products', products);
  return (
    <div>
      <p>Số sản phẩm trong giở hàng: {cart.cart?.length}</p>
      <div className="row">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            desc={product.desc}
            price={product.price}
            isBuying={product.isBuying}
          ></ProductItem>
        ))}
      </div>
    </div>
  );
}
