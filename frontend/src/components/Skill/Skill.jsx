import React from "react";
import "./Skill.css";
import Transition from "../Transition/Transition";

const Skill = () => {
  return (
    <Transition>
 <section className="skill page "
    id="about">
      <div className="container">
        <div className="section_title center">
          <p>My Skill Progess</p>
          <h2>MY Experience area</h2>
        </div>
        <div className="skill_items">
          <div className="skill_item">
            <div className="skill_info">
              <p>Html</p>
            </div>
            <div className="progress_line">
              <div className="skill_per html">
                <span className="tollip">99%</span>
              </div>
            </div>
          </div>
          <div className="skill_item">
            <div className="skill_info">
              <p>Css</p>
            </div>
            <div className="progress_line">
              <div className="skill_per css">
                <span className="tollip">99%</span>
              </div>
            </div>
          </div>
          <div className="skill_item">
            <div className="skill_info">
              <p>Javascript</p>
            </div>
            <div className="progress_line">
              <div className="skill_per javascript">
                <span className="tollip">80%</span>
              </div>
            </div>
          </div>
          <div className="skill_item">
            <div className="skill_info">
              <p>Wordpress</p>
            </div>
            <div className="progress_line">
              <div className="skill_per wordpress">
                <span className="tollip">75%</span>
              </div>
            </div>
          </div>
          <div className="skill_item">
            <div className="skill_info">
              <p>Bootstrap</p>
            </div>
            <div className="progress_line">
              <div className="skill_per bootstrap">
                <span className="tollip">99%</span>
              </div>
            </div>
          </div>
          <div className="skill_item">
            <div className="skill_info">
              <p>ReactJS</p>
            </div>
            <div className="progress_line">
              <div className="skill_per react">
                <span className="tollip">55%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Transition>
   
  );
};

export default (Skill);
