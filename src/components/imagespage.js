import Card from "./card";
import { FilterContext } from "../App";
import { typefilter } from "../App";
import { useContext, useState } from "react";
const Imagespage = (props) => {
  const { filter } = useContext(FilterContext);
  const { type, settype } = useContext(typefilter);

  console.log("============props", props.arr);
  return (
    <div class="productspage">
      {props.arr.map((items) => {
        if (filter.length == 0 && type.length == 0) {
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
        } else if (type.length == 0 && filter.indexOf(items.brand) != -1) {
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
        } else if (filter.length == 0 && type.indexOf(items.type) != -1) {
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
        } else {
          if (
            type.length != 0 &&
            filter.indexOf(items.brand) != -1 &&
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
          }
        }
      })}
    </div>
  );
};

export default Imagespage;
