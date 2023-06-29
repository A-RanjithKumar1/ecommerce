import { useContext } from "react";
import { cartContext } from "../App";
const valCart = (cart, setCart, id) => {
  if (cart.indexOf(id) === -1) {
    setCart([...cart, id]);
    console.log(cart);
  } else {
    let temp = [...cart];
    temp.splice(cart.indexOf(id), 1);
    setCart(temp);
  }
};

const val = (cart, id) => {
  if (cart.indexOf(id) === -1) return false;
  return true;
};

const Card = (props) => {
  const { cart, setCart } = useContext(cartContext);
  return (
    <div className="card">
      <div className="image">
        <img src={require("../images/" + props.image)} alt=""></img>
      </div>
      <div className="imagecontent">
        <h2>{props.brand}</h2>
        <p>{props.Disp}</p>
        <h4>{props.price}</h4>
        <button onClick={() => valCart(cart, setCart, props.id)}>
          {val(cart, props.id) ? "Remove" : "Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default Card;
