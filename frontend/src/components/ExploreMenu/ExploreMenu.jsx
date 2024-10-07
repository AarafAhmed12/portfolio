import React from "react";
import "./Explore.css";
import { bottle_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      {/* <h1>Explore Project</h1> */}
      <div class="glitch-wrapper">
        <div
          class="glitch"
          data-glitch="Explore Project
"
        >
          Explore Project
        </div>
      </div>
      <div className="explore-menu-list">
        {bottle_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.bottle_name ? "All" : item.bottle_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.bottle_name ? "active" : ""}
                src={item.bottle_image}
                alt=""
              />
              <p>{item.bottle_name}</p>
            </div>
          );
        })}
      </div>
      <hr></hr>
    </div>
  );
};

export default ExploreMenu;
