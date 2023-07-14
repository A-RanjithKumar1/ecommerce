import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar">
        <div class="sitename">
          <h3>
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
                color: "white",
                textShadow: "yellow 2px 2px 8px",
              }}
            >
              WatchWorld
            </Link>
          </h3>
          <h4>
            <input
              type="text"
              placeholder="  search..."
              onChange={props.handleSearch}
            ></input>
          </h4>
        </div>
        <Link to={"/viewcart"}>
          <FaCartArrowDown className="cart"></FaCartArrowDown>
        </Link>
        <span id={props.value == 0 ? "" : "cartvalue"}>
          <b>{props.value == 0 ? "" : props.value}</b>
        </span>
      </nav>
    </div>
  );
};
export default Navbar;
