import uiux from "../../assets/uiux.svg";
import { Link } from "react-router-dom";
function UIUX() {
  return (
    <div className="ui-ux">
      <div className="container">
        <div className="section-text">
          <Link to="ux_projects">
            <div className="heading">UI/UX Case Studies</div>
          </Link>
          <div className="skills">
            <div className="skill">Empathy Map</div>
            <div className="skill">User Research</div>
            <div className="skill">Prototyping</div>
            <div className="skill">User Testing</div>
          </div>
          <div className="section-desc">
            Designing intuitive interfaces that prioritize user experience. I
            blend creativity with functionality to create visually appealing and
            user-friendly designs.
          </div>
        </div>
        <Link to="ux_projects">
          <div className="rectangle">
            <img src={uiux} alt="" />
          </div>
        </Link>
      </div>
      <div className="circle"></div>
    </div>
  );
}

export default UIUX;
