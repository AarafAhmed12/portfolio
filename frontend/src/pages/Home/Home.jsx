import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import PortfolioDisplay from "../../components/PortfolioDisplay/PortfolioDisplay";
import CategoryName from "../../components/CategoryName/CategoryName";
import Transition from "../../components/Transition/Transition";
// import { motion } from "framer-motion";
const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <Transition>
      <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <CategoryName category={category} setCategory={setCategory} />
        <PortfolioDisplay category={category} />
      </div>
    </Transition>
  );
};

export default Home;
