import "./FullStack.css";
import fullStack from "../../assets/full-stack.svg";
import { Link } from "react-router-dom";

function FullStack() {
  return (
    <div className="full-stack">
      <div className="container">
        <div className="section-text">
          <Link to="/fullStack_projects">
            <div className="heading">Full Stack Projects</div>
          </Link>
          <div className="skills">
            <div className="skill">MongoDB</div>
            <div className="skill">Express</div>
            <div className="skill">React</div>
            <div className="skill">Node.js</div>
          </div>
          <div className="section-desc">
            Building complete web applications from front-end to back-end. I
            manage databases, server logic, and client interfaces to deliver
            robust, scalable solutions.
          </div>
        </div>
        <Link to="/fullStack_projects">
          <div className="rectangle">
            <img src={fullStack} alt="" />
          </div>
        </Link>
      </div>
      <div className="circle-2"></div>
    </div>
  );
}

export default FullStack;
