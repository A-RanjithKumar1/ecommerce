import { FilterContext, typefilter } from "../App";
import { useContext } from "react";
const filterval = (filter, setfilter, id) => {
  if (filter.indexOf(id) === -1) {
    setfilter([...filter, id]);
    document.getElementById(id).style.borderBottom = "solid green 2px";
  } else {
    let temp = [...filter];
    temp.splice(filter.indexOf(id), 1);
    setfilter(temp);
    document.getElementById(id).style.borderBottom = "solid white 2px";
    console.log(temp);
  }
};
const filtertype = (type, settype, id) => {
  if (type.indexOf(id) === -1) {
    settype([...type, id]);
    document.getElementById(id).style.borderBottom = "solid green 2px";
  } else {
    let temp = [...type];
    temp.splice(type.indexOf(id), 1);
    settype(temp);
    document.getElementById(id).style.borderBottom = "solid white 2px";
    console.log(temp);
  }
};
const Sidebar = () => {
  const { filter, setfilter } = useContext(FilterContext);
  const { type, settype } = useContext(typefilter);
  console.log(filter);
  return (
    <>
      <div className="Filters">
        <div className="brands">
          <h2>BRANDS</h2>
          <ul>
            <li>
              <h4
                id="Fossil"
                onClick={() => filterval(filter, setfilter, "Fossil")}
              >
                Fossil
              </h4>
            </li>
            <li>
              <h4
                id="Casio"
                onClick={() => filterval(filter, setfilter, "Casio")}
              >
                Casio
              </h4>
            </li>
            <li>
              <h4
                id="Timex"
                onClick={() => filterval(filter, setfilter, "Timex")}
              >
                Timex
              </h4>
            </li>
            <li>
              <h4
                id="Fastrack"
                onClick={() => filterval(filter, setfilter, "Fastrack")}
              >
                FastTrack
              </h4>
            </li>
          </ul>
        </div>
        <div className="type">
          <h2>TYPE</h2>
          <ul>
            <li>
              <h4
                id="analog"
                onClick={() => filtertype(type, settype, "analog")}
              >
                Analog
              </h4>
            </li>
            <li>
              <h4
                id="digital"
                onClick={() => filtertype(type, settype, "digital")}
              >
                Digital
              </h4>
            </li>
          </ul>
        </div>
        <div className="price">
          {/* <h2>PRICE</h2>
          <p onClick={() => filterval(filter, setfilter, "₹1,000")}>
            <button>₹0-₹1000</button>
          </p>
          <p onClick={() => filterval(filter, setfilter, "₹2,000")}>
            <button>₹1000-₹2000</button>
          </p>
          <p onClick={() => filterval(filter, setfilter, "₹3,000")}>
            <button>₹2000-₹3000</button>
          </p>
          <p onClick={() => filterval(filter, setfilter, "₹5,000")}>
            <button>₹3000-₹5000</button>
          </p>
        </div> */}
          <h2>PRICE</h2>
          <ul>
            <li>
              <h4
                id="₹1,000"
                onClick={() => filterval(filter, setfilter, "₹1,000")}
              >
                ₹0-₹1000
              </h4>
            </li>
            <li>
              <h4
                id="₹2,000"
                onClick={() => filterval(filter, setfilter, "₹2,000")}
              >
                ₹1000-₹2000
              </h4>
            </li>
            <li>
              <h4
                id="₹3,000"
                onClick={() => filterval(filter, setfilter, "₹3,000")}
              >
                ₹2000-₹3000
              </h4>
            </li>
            <li>
              <h4
                id="₹5,000"
                onClick={() => filterval(filter, setfilter, "₹5,000")}
              >
                ₹3000-₹5000
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
