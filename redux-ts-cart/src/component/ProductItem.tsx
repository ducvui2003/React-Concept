import { useState } from "react";
import Product from "../types/product.type";
import { useDispatch } from "react-redux";
import { addCart, deleteCart } from "../redux/actions/cartAction";
export default ProductItem;
function ProductItem(productItem: Product) {
  const [product, setProduct] = useState(productItem);

  const dispatch = useDispatch();

  function add() {
    setProduct({
      ...product,
      isBuying: product.isBuying === undefined || product.isBuying === false,
    });
    if (product.isBuying !== false) {
      dispatch(deleteCart(product));
      console.log("DEL");
    } else {
      dispatch(addCart(product));
      console.log("ADD");
    }
  }

  return (
    <div className="col col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card p-2">
        <img
          className="card-img-top"
          src={product.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h6 className="card-title">
            <a>{product.name}</a>
          </h6>
          <p className="card-text">{product.desc}</p>
          <a className="text-danger p-2">{product.price}</a>
          <br />
          <button
            onClick={add}
            className={
              "btn p-2" +
              (product.isBuying === false ? " btn-success " : " btn-danger ")
            }
          >
            {product.isBuying === false ? "THÊM" : "LOẠI BỎ"}
          </button>
          {/*<Link className="btn btn-primary p-2" to={`/product/${product.id}`}>XEM</Link>*/}
        </div>
      </div>
    </div>
  );
}
