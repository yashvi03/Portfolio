import frontEnd from "../../assets/front-end.svg";
import "./FrontEnd.css";
import { Link } from "react-router-dom";

function FrontEnd() {
  return (
    <div className="front-end">
      <div className="circle-1"></div>
      <div className="container">
        <Link to="/frontEnd_projects">
          <div className="rectangle">
            <img className="front-end-pic" src={frontEnd} alt="" />
          </div>
        </Link>

        <div className="section-text">
          <Link to="/frontEnd_projects">
            <div className="heading">Front-End Projects</div>
          </Link>
          <div className="skills">
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">JavaScript</div>
            <div className="skill">WebPack</div>
            <div className="skill">JSON</div>
            <div className="skill">React</div>
          </div>
          <div className="section-desc">
            Transforming designs into responsive, interactive websites using
            HTML, CSS, JavaScript, and React. I focus on clean code and seamless
            user experiences.
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontEnd;
