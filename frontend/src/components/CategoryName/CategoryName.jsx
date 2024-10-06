import React from "react";
import "./CategoryName.css";

const CategoryName = ({category,name}) => {
  return (
    <div className="CategoryName-menu" id="CategoryName-menu">
      <div className="CategoryName-menu-list">
            {/* <p>{name}</p> */}
          <p>{category}</p>
      </div>
    </div>
  );
};

export default CategoryName;
