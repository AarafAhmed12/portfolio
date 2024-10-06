import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../Fooditem/FoodItem";
import Transition from "../../components/Transition/Transition";


const FoodDisplay = ({ category }) => {
  const { perfume_list } = useContext(StoreContext);
  return (
    <Transition>
    <div className="food-display" id="food-display">
      <div className="food-display-list">
        {perfume_list.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                // description={item.description}
                // price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
    </Transition>
  );
};

export default FoodDisplay;
