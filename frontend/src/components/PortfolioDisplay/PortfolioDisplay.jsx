import React, { useContext } from "react";
import "./PortfolioDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import Transition from "../Transition/Transition";


const PortfolioDisplay = ({ category }) => {
  const { portfolio_list } = useContext(StoreContext);
  return (
    <Transition>
    <div className="Portfolio-display" id="Portfolio-display">
      <div className="Portfolio-display-list">
        {portfolio_list.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return (
              <PortfolioItem
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

export default PortfolioDisplay;
