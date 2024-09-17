import signup from "../../assets/signup.png";
import { Outlet } from "react-router-dom";

function FullStack_projects() {
  return (
    <div>
      <img src={signup} alt="" />
      <Outlet />
    </div>
  );
}

export default FullStack_projects;
