import { cartContext } from "../App";
import { useContext } from "react";
const valCart = (cart, setCart, id) => {
  if (cart.indexOf(id) === -1) {
    setCart([...cart, id]);
  } else {
    let temp = [...cart];
    temp.splice(cart.indexOf(id), 1);
    setCart(temp);
  }
};
const View = (props) => {
  const { cart, setCart } = useContext(cartContext);
  console.log(cart);
  if (cart.length === 0) {
    return (
      <h2 style={{ textAlign: "center", color: "red" }}>Oops! Cart Is Empty</h2>
    );
  } else {
    return props.arr.map((items) => {
      if (cart.indexOf(items.id) != -1) {
        return (
          <div className="viewcard" key={items.id}>
            <div className="image">
              <img src={require("../images/" + items.image)} alt=""></img>
            </div>
            <div className="imagecontent">
              <h2>{items.brand}</h2>
              <p>{items.Disp}</p>
              {/* <h4>{items.price}</h4> */}
            </div>
            <div className="quantity">
              {/* <input
                className="qty"
                type="number"
                placeholder="Quantity"
              ></input> */}
              <h4>{items.price}</h4>
            </div>
            <div className="button1">
              <button
                class="btn"
                onClick={() => valCart(cart, setCart, items.id)}
                style={{ backgroundColor: "red" }}
              >
                Remove
              </button>
              <button class="btn" style={{ backgroundColor: "green" }}>
                Buy
              </button>
            </div>
          </div>
        );
      }
    });
  }
};
export default View;
