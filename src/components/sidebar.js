import { FilterContext } from "../App";
import { useContext } from "react";
const filterval = (filter, setfilter, id) => {
  if (filter.indexOf(id) === -1) {
    setfilter([...filter, id]);
    console.log("apply filter brand called");
  } else {
    let temp = [...filter];
    temp.splice(filter.indexOf(id), 1);
    setfilter(temp);
    console.log("delete filter brand called");
  }
};
const filtertype = (type, settype, id) => {
  if (type.indexOf(id) === -1) {
    settype([...type, id]);
    console.log("apply filter type called");
  } else {
    let temp = [...type];
    temp.splice(type.indexOf(id), 1);
    settype(temp);
    console.log("delete filter type called");
  }
};
const filterprice = (p, price, setprice) => {
  if (price.indexOf(p) === -1) {
    setprice([...price, p]);
    console.log("apply filter brand called");
  } else {
    let temp = [...price];
    temp.splice(price.indexOf(p), 1);
    setprice(temp);
    console.log("delete filter brand called");
  }
};
const Sidebar = () => {
  const { filter, setfilter } = useContext(FilterContext);
  const { type, settype } = useContext(FilterContext);
  const { price, setprice } = useContext(FilterContext);
  console.log(filter);
  return (
    <>
      <div className="Filters">
        <div className="brands">
          <h2>BRANDS</h2>
          <ul className="br">
            <li>
              <input
                type="checkbox"
                onClick={() => filterval(filter, setfilter, "Fossil")}
              />
              <label id="Fossil">Fossil</label>
            </li>
            <li>
              <input
                type="checkbox"
                onClick={() => filterval(filter, setfilter, "Timex")}
              />
              <label id="Timex">Timex</label>
            </li>
            <li>
              <input
                type="checkbox"
                onClick={() => filterval(filter, setfilter, "Casio")}
              />
              <label id="Casio">Casio</label>
            </li>
            <li>
              <input
                type="checkbox"
                onClick={() => filterval(filter, setfilter, "Fastrack")}
              />
              <label id="Fastrack">Fastrack</label>
            </li>
          </ul>
        </div>
        <div className="type">
          <h2>TYPE</h2>
          <ul className="br">
            <li>
              <input
                type="checkbox"
                onClick={() => filtertype(type, settype, "analog")}
              />
              <label>Analog</label>
            </li>
            <li>
              <input
                type="checkbox"
                onClick={() => filtertype(type, settype, "digital")}
              />
              <label>Digital</label>
            </li>
          </ul>
        </div>
        <div className="price">
          <h2>PRICE</h2>
          <ul className="br">
            <li>
              <input
                type="checkbox"
                onClick={() => filterprice("0-1000", price, setprice)}
              />
              <label id="Fossil">₹0-₹1000</label>
            </li>
            <li>
              <input
                type="checkbox"
                onClick={() => filterprice("1000-2000", price, setprice)}
              />
              <label id="Timex">₹1000-₹2000</label>
            </li>
            <li>
              <input
                type="checkbox"
                onClick={() => filterprice("2000-3000", price, setprice)}
              />
              <label id="Casio">₹2000-₹3000</label>
            </li>
            <li>
              <input
                type="checkbox"
                onClick={() => filterprice("3000-4000", price, setprice)}
              />
              <label id="Fastrack">₹3000-₹4000</label>
            </li>
            <li>
              <input
                type="checkbox"
                onClick={() => filterprice("4000-5000", price, setprice)}
              />
              <label id="Fastrack">₹4000-₹5000</label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
