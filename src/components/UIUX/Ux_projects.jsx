import passportApp from "../../assets/passportApp.png";
import vdeliver from "../../assets/vdeliver.png";
import { Outlet } from "react-router-dom";
import "./UIUX.css";
import NavBar from "../NavBar/NavBar";
function Ux_projects() {
  return (
    <div className="ux">
      <NavBar />
      <div className="ux-heading">UI/UX Case Studies</div>
      <div className="ux-projects">
        <div className="uxProject-1">
          <div className="left-container">
            <div className="ux-p1-heading">Passport Seva Redesign</div>
            <div className="ux-p1-desc">
              Redesigning of Passport Seva mobile application in order to make
              it user friendly and more efficient.
            </div>
            <a
              className="viewProjectUX"
              href="https://www.behance.net/gallery/174049077/Passport-Seva-App-Redesign?tracking_source=search_projects|seva+passport&l=46"
            >
              View Project
            </a>
          </div>
          <div className="right-container">
            <img className="passportApp-img" src={passportApp} alt="" />
          </div>
        </div>
        <div className="uxProject-2">
          <div className="right-container">
            <img className="vdeliver-img" src={vdeliver} alt="" />
          </div>
          <div className="left-container">
            <div className="ux-p1-heading">VDeliver</div>
            <div className="ux-p1-desc">
              It is an in campus delivery app that was designed to make
              deliveries convenient and efficient.
            </div>
            <a
              className="viewProjectUX"
              href="https://www.behance.net/gallery/174049077/Passport-Seva-App-Redesign?tracking_source=search_projects|seva+passport&l=46"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Ux_projects;
