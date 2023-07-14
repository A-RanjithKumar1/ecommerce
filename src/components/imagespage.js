import Card from "./card";
import { FilterContext } from "../App";
import { useContext } from "react";
const Imagespage = (props) => {
  const { filter } = useContext(FilterContext);
  const { type, settype, price, setprice } = useContext(FilterContext);
  return (
    <div class="productspage">
      {props.arr.map((items) => {
        console.log(filter);
        console.log(type);
        console.log(price);
        if (filter.length == 0 && type.length == 0 && price.length == 0) {
          return (
            <Card
              brand={items.brand}
              image={items.image}
              price={items.price}
              Disp={items.Disp}
              id={items.id}
            ></Card>
          );
        } else if (
          type.length == 0 &&
          price.length == 0 &&
          filter.indexOf(items.brand) != -1
        ) {
          return (
            <Card
              brand={items.brand}
              image={items.image}
              price={items.price}
              Disp={items.Disp}
              id={items.id}
            ></Card>
          );
        } else if (
          filter.length == 0 &&
          price.length == 0 &&
          type.indexOf(items.type) != -1
        ) {
          return (
            <Card
              key={items.id}
              brand={items.brand}
              image={items.image}
              price={items.price}
              Disp={items.Disp}
              id={items.id}
            ></Card>
          );
        } else if (
          filter.length == 0 &&
          price.length != 0 &&
          type.length == 0 &&
          price.filter((item) => {
            const [minPrice, maxPrice] = item.split("-");
            return items.price >= minPrice && items.price <= maxPrice;
          }).length > 0
        ) {
          return (
            <Card
              key={items.id}
              brand={items.brand}
              image={items.image}
              price={items.price}
              Disp={items.Disp}
              id={items.id}
            ></Card>
          );
        } else if (
          price.length == 0 &&
          type.length != 0 &&
          filter.length != 0 &&
          filter.indexOf(items.brand) != -1 &&
          type.indexOf(items.type) != -1
        ) {
          return (
            <Card
              brand={items.brand}
              image={items.image}
              price={items.price}
              Disp={items.Disp}
              id={items.id}
            ></Card>
          );
        } else if (
          price.length != 0 &&
          type.length == 0 &&
          filter.length != 0 &&
          filter.indexOf(items.brand) != -1 &&
          price.filter((item) => {
            const [minPrice, maxPrice] = item.split("-");
            return items.price >= minPrice && items.price <= maxPrice;
          }).length > 0
        ) {
          return (
            <Card
              brand={items.brand}
              image={items.image}
              price={items.price}
              Disp={items.Disp}
              id={items.id}
            ></Card>
          );
        } else if (
          price.length != 0 &&
          type.length != 0 &&
          filter.length == 0 &&
          type.indexOf(items.type) != -1 &&
          price.filter((item) => {
            const [minPrice, maxPrice] = item.split("-");
            return items.price >= minPrice && items.price <= maxPrice;
          }).length > 0
        ) {
          return (
            <Card
              brand={items.brand}
              image={items.image}
              price={items.price}
              Disp={items.Disp}
              id={items.id}
            ></Card>
          );
        } else if (
          price.length != 0 &&
          filter.length != 0 &&
          filter.length != 0 &&
          filter.indexOf(items.brand) != -1 &&
          type.indexOf(items.type) != -1 &&
          price.filter((item) => {
            const [minPrice, maxPrice] = item.split("-");
            return items.price > minPrice && items.price <= maxPrice;
          }).length > 0
        ) {
          return (
            <Card
              brand={items.brand}
              image={items.image}
              price={items.price}
              Disp={items.Disp}
              id={items.id}
            ></Card>
          );
        }
      })}
    </div>
  );
};
export default Imagespage;
