import React from "react";
import "./About.css";
import Transition from "../Transition/Transition";
// import { motion } from "framer-motion";

const About = () => {
  return (
    <Transition>
      <div className="about">
        <div className="overlay"></div>
        <div className="content_area">
        <ul className="List">
            <li>
              Name : <span>Syed Aaraf Ahmed</span>
            </li>
            <li>
              Age : <span>22</span>
            </li>
            <li>
              Gender : <span>Male</span>
            </li>
            <li>
              Email : <span>syedaaraf1999@gmail.com</span>
            </li>
            <li>
              Country : <span>Pakistan</span>
            </li>
          </ul>
          <p>
            I am highly skilled, innovative , and detail-oriented "Frontend and
            Backend Developer". Expereince in creating responsive,
            user-friendly, and visually eye- catching web interfaces. I have
            also experience of building and maintaining robust server-side
            websites and manage various database systems.
          </p>
          
          <p>
            Experience of 2 years as a developer with efficiency. Proefficent in
            Expertise HTML, CSS, Bootstrap, React, modern frameworks, UI/UX
            design and web performance optimization.
          </p>
        </div>
      </div>
    </Transition>
  );
};

export default About;
