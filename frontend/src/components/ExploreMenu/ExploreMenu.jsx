import React from "react";
import "./Explore.css";
import { bottle_list } from "../../assets/assets";

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Project</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
        mollitia, eius ratione quibusdam omnis rem cupiditate vitae, quia
        tempora enim, laboriosam voluptatem dolores voluptas corrupti beatae
        natus odio pariatur voluptate?
      </p>
      <div className="explore-menu-list">
        {bottle_list.map((item,index)=>{
          return(
            <div onClick={()=>setCategory(prev=>prev===item.bottle_name?"All":item.bottle_name)} key={index} className="explore-menu-list-item">
              <img className={category===item.bottle_name?"active":""} src={item.bottle_image} alt=""/>
              <p>{item.bottle_name}</p>
            </div>
          )
        })}
      </div>
      <hr></hr>
    </div>
    
  );
};

export default ExploreMenu;
