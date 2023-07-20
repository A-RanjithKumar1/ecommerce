import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Container from "./components/container";
import React, { useState, createContext } from "react";
import View from "./components/viewaddeditems";
export const FilterContext = createContext();
function App() {
  let arr = [
    {
      id: 1,
      image: "casio1.jpeg",
      brand: "Casio",
      Disp: "Casio Amaze G-Shock Black Dial Mens Watch-G987",
      price: 900,
      type: "digital",
    },
    {
      id: 2,
      image: "casio2.jpeg",
      brand: "Casio",
      Disp: "Casio Enticer Silver White Dial Men's Watch -A1174 ",
      price: 3000,
      type: "analog",
    },
    {
      id: 3,
      image: "casio3.jpeg",
      brand: "Casio",
      Disp: "Casio Enticer Rose Gold Dial Women's Watch -A1548 ",
      price: 1500,
      type: "analog",
    },
    {
      id: 4,
      image: "fossil1.jpeg",
      brand: "Fossil",
      Disp: "Fossil Machine Chrono Black Dial Men's Watch -FS4656 ",
      price: 1000,
      type: "analog",
    },
    {
      id: 5,
      image: "fossil2.jpeg",
      brand: "Fossil",
      Disp: "Fossil Townsman Blue Dial Men's Watch -ME3110",
      price: 2500,
      type: "analog",
    },
    {
      id: 6,
      image: "fossil3.jpeg",
      brand: "Fossil",
      Disp: "Fossil Gen 6 Display Dial Women's Smart Watch - FTW6077",
      price: 5000,
      type: "digital",
    },
    {
      id: 7,
      image: "fastrack1.jpeg",
      brand: "Fastrack",
      Disp: "Fastrack Reflex Hello 1.69 HD Display BT Calling",
      price: 1800,
      type: "digital",
    },
    {
      id: 8,
      image: "fastrack2.jpeg",
      brand: "Fastrack",
      Disp: "FK Exclusive Analog Watch - For Men F-TWEG202021",
      price: 3500,
      type: "analog",
    },
    {
      id: 9,
      image: "fastrack3.jpeg",
      brand: "Fastrack",
      Disp: "Bare Basic Analog Watch - For Men M-TWEG2024",
      price: 5000,
      type: "analog",
    },
    {
      id: 10,
      image: "timex1.jpeg",
      brand: "Timex",
      Disp: "Timex Analog Watch - For Men E-TWEG20200",
      price: 1000,
      type: "analog",
    },
    {
      id: 11,
      image: "timex2.jpeg",
      brand: "Timex",
      Disp: "Timex E Class Chrono Black Dial Men's Watch -TWEG19301",
      price: 3000,
      type: "analog",
    },
    {
      id: 12,
      image: "timex3.jpeg",
      brand: "Timex",
      Disp: "Timex Fria Purple Dial Women's Watch -TWEL14104",
      price: 4500,
      type: "analog",
    },
  ];
  const [newarr, setNewarr] = useState(arr);
  const [cart, setCart] = useState([]);
  const [filter, setfilter] = useState([]);
  const [type, settype] = useState([]);
  const [search, setsearch] = useState("");
  const [count, setCount] = useState({});
  const [price, setprice] = useState([]);
  const handleSearch = (event) => {
    setsearch(event.target.value);
    if (event.target.value !== 0) {
      const newarr1 = arr.filter((item) =>
        item.brand.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setNewarr(newarr1);
    }
  };
  return (
    <div>
      <BrowserRouter>
        <FilterContext.Provider
          value={{
            filter,
            setfilter,
            cart,
            setCart,
            type,
            settype,
            count,
            setCount,
            price,
            setprice,
          }}
        >
          <Navbar value={cart.length} handleSearch={handleSearch}></Navbar>
          <Routes>
            <Route path="/" element={<Container arr={newarr} />}></Route>
            <Route path="/viewcart" element={<View arr={newarr} />}></Route>
          </Routes>
        </FilterContext.Provider>
      </BrowserRouter>
    </div>
  );
}
export default App;
