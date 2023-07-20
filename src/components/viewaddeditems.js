import { useContext } from "react";
import { FilterContext } from "../App";
import Navbar from "./navbar";
const View = (props) => {
  const { cart, setCart, count, setCount } = useContext(FilterContext);
  const calculateTotalCartValue = () => {
    return cart.reduce(
      (total, id) => total + props.arr[id - 1].price * count[id],
      0
    );
  };
  const addHandler = (id) => {
    setCount({ ...count, [id]: count[id] + 1 });
  };
  const delHandler = (id) => {
    if (count[id] === 1) {
      setCount({ ...count, [id]: 1 });
    } else {
      setCount({ ...count, [id]: count[id] - 1 });
    }
  };
  const valCart = (cart, setCart, id) => {
    if (cart.indexOf(id) === -1) {
      setCart([...cart, id]);
    } else {
      let temp = [...cart];
      temp.splice(cart.indexOf(id), 1);
      setCart(temp);
    }
  };
  console.log(cart);
  console.log(count);
  if (cart.length === 0) {
    return (
      <>
        {/* <button>
          <Link to="/">HOME</Link>
        </button> */}
        <h2 style={{ textAlign: "center", color: "red" }}>
          Oops! Cart Is Empty
        </h2>
      </>
    );
  } else {
    return props.arr.map((items) => {
      if (cart.indexOf(items.id) !== -1) {
        return (
          <>
            {/* <button>
              <Link to="/">HOME</Link>
            </button> */}
            <div className="viewcard" key={items.id}>
              <div className="image">
                <img src={require("../images/" + items.image)} alt=""></img>
              </div>
              <div className="imagecontent">
                <h2>{items.brand}</h2>
                <p>{items.Disp}</p>
              </div>
              <div className="quantity">
                <h4>₹{props.arr[items.id - 1].price * count[items.id]}</h4>
              </div>
              <div className="quantitybtn">
                <button
                  className="add"
                  style={{
                    backgroundColor: "green",
                    border: "0px",
                    borderRadius: "5px",
                    width: "35px",
                    height: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() => addHandler(items.id)}
                >
                  +
                </button>
                {" " + count[items.id] + " "}
                {count[items.id] !== 1 ? (
                  <button
                    className="del"
                    style={{
                      backgroundColor: "red",
                      border: "0px",
                      borderRadius: "5px",
                      width: "35px",
                      height: "20px",
                      cursor: "pointer",
                    }}
                    onClick={() => delHandler(items.id)}
                  >
                    -
                  </button>
                ) : (
                  ""
                )}
              </div>
              <div className="button1">
                <button class="btn" style={{ backgroundColor: "green" }}>
                  Buy
                </button>
                <button
                  class="btn"
                  onClick={() => valCart(cart, setCart, items.id)}
                  style={{ backgroundColor: "red" }}
                >
                  Remove
                </button>
              </div>
            </div>
            <footer className="cart_footer">
              <p>Total Cart Value: ₹{calculateTotalCartValue()}</p>
            </footer>
          </>
        );
      }
    });
  }
};
export default View;
