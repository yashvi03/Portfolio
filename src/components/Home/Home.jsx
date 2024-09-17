import "./Home.css";
import NavBar from "../NavBar/NavBar";
import UIUX from "../UIUX/UIUX";
import FrontEnd from "../FrontEnd/FrontEnd";
import FullStack from "../FullStack/FullStack";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="text">
        <div className="name">
          Hi, This is <span className="myName">Yashvi Agrawal</span>
        </div>
        <div className="desc">
          I am passionate about <span className="solve">solving</span> problems
          and <span className="learn">learning</span> new skills
        </div>
        <div className="edu">
          Currently pursuing B.Tech degree in Computer Science @ VIT,Vellore
        </div>
      </div>
      <div className="project">Projects</div>
      <UIUX />
      <FrontEnd />
      <FullStack />
      <Footer />
    </div>
  );
}

export default Home;
