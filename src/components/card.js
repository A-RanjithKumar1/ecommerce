import { useContext, useState } from "react";
import { FilterContext } from "../App";
const valCart = (cart, setCart, id, setColour, count, setCount) => {
  if (cart.indexOf(id) === -1) {
    setCart([...cart, id]);
    setColour("red");
    setCount({ ...count, [id]: 1 });
  } else {
    let temp = [...cart];
    temp.splice(cart.indexOf(id), 1);
    setCart(temp);
    setColour("green");
    setCount({ ...count, [id]: 0 });
  }
};
const val = (cart, id) => {
  return cart.includes(id);
};
const Card = (props) => {
  const { cart, setCart } = useContext(FilterContext);
  const { count, setCount } = useContext(FilterContext);
  const [colour, setColour] = useState(val(cart, props.id) ? "red" : "green");
  return (
    <div className="card">
      <div className="image">
        <img src={require("../images/" + props.image)} alt="" />
      </div>
      <div className="imagecontent">
        <h2>{props.brand}</h2>
        <p>{props.Disp}</p>
        <h4>₹{props.price}</h4>
        <button
          id={props.id}
          style={{ backgroundColor: colour }}
          onClick={() =>
            valCart(cart, setCart, props.id, setColour, count, setCount)
          }
        >
          {val(cart, props.id) ? "REMOVE" : "ADD TO CART"}
        </button>
      </div>
    </div>
  );
};
export default Card;
