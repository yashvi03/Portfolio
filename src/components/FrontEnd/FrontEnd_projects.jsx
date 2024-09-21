import signup from "../../assets/signup.png";
import bookApp from "../../assets/bookApp.png";
import dashboard from "../../assets/dashboard.png";
import restaurant from "../../assets/restaurant.png";
import ticTacToe from "../../assets/ticTacToe.png";
import todo from "../../assets/todo.png";
import weather from "../../assets/weather.png";
import cv from "../../assets/cv.png";
import memoryGame from "../../assets/memoryGame.png";
import { Outlet } from "react-router-dom";
import "./FrontEnd.css";
import NavBar from "../NavBar/NavBar";
import Sidebar from "./SideBar";
import { Link } from "react-router-dom";

function FrontEnd_projects() {
  return (
    <div className="frontEnd-projects">
      <div className="fe-circle"></div>
      <div className="fe-circle-1"></div>
      <NavBar />
      <div className="frontEnd-container">
        <Sidebar />
        <div className="main">
          <div className="front-end-heading">Front-End Projects</div>

          <div className="main-projects">
            <section id="memoryGame" className="front-end-project">
              <img className="front-end-img" src={memoryGame} alt="" />
              <div className="project-snippet">
                <div className="project-heading">Memory Game</div>
                <div className="snippet">
                  Simple form with field validation using JavaScript
                </div>
                <div className="tech">
                  <span className="technologies">Technologies:</span> React, API
                  integration
                </div>
                <div className="highlights">
                  <div className="h1">#Card shuffle</div>
                  <div className="h1">#score tracking</div>
                </div>
                <Link to="/memoryGame">
                  <button className="view">View Project</button>
                </Link>
              </div>
            </section>

            <section id="cvBuilder" className="front-end-project">
              <img className="front-end-img" src={cv} alt="" />
              <div className="project-snippet">
                <div className="project-heading">CV Builder</div>
                <div className="snippet">
                  A personal CV builder application.
                </div>
                <div className="tech">
                  <span className="technologies">Technologies:</span> React
                </div>
                <div className="highlights">
                  <div className="h1">#Form handling</div>
                  <div className="h1">#dynamic updates</div>
                </div>
                <button className="view">View Project</button>
              </div>
            </section>

            <section id="weatherForecaster" className="front-end-project">
              <img className="front-end-img" src={weather} alt="" />
              <div className="project-snippet">
                <div className="project-heading">Weather Forecaster</div>
                <div className="snippet">
                  A weather forecast application using a weather API.
                </div>
                <div className="tech">
                  <span className="technologies">Technologies:</span> Webpack,
                  API Integration
                </div>
                <div className="highlights">
                  <div className="h1">
                    #Dynamic UI based on weather conditioning
                  </div>
                  <div className="h1">#real-time updates</div>
                </div>
                <button className="view">View Project</button>
              </div>
            </section>

            <section id="todoList" className="front-end-project">
              <img className="front-end-img" src={todo} alt="" />
              <div className="project-snippet">
                <div className="project-heading">To-do List App</div>
                <div className="snippet">
                  A task management app with an organized to-do list.
                </div>
                <div className="tech">
                  <span className="technologies">Technologies:</span> Webpack,
                  JavaScript
                </div>
                <div className="highlights">
                  <div className="h1">#Task categorizing</div>
                  <div className="h1">#adding/removing tasks</div>
                  <div className="h1">#local storage</div>
                </div>
                <button className="view">View Project</button>
              </div>
            </section>

            <section id="restaurantWebsite" className="front-end-project">
              <img className="front-end-img" src={restaurant} alt="" />
              <div className="project-snippet">
                <div className="project-heading">Restaurant Website</div>
                <div className="snippet">
                  A basic restaurant website using Webpack.
                </div>
                <div className="tech">
                  <span className="technologies">Technologies:</span> Webpack,
                  HTML, CSS, JavaScript.
                </div>
                <div className="highlights">
                  <div className="h1">#Modular code structure</div>
                  <div className="h1">#bundling with Webpack</div>
                </div>
                <button className="view">View Project</button>
              </div>
            </section>

            <section id="ticTacToe" className="front-end-project">
              <img className="front-end-img" src={ticTacToe} alt="" />
              <div className="project-snippet">
                <div className="project-heading">Tic Tac Toe Game</div>
                <div className="snippet">
                  A classic Tic Tac Toe game with JavaScript.
                </div>
                <div className="tech">
                  <span className="technologies">Technologies:</span> JavaScript
                </div>
                <div className="highlights">
                  <div className="h1">#Game logic</div>
                  <div className="h1">#event handling</div>
                </div>
                <button className="view">View Project</button>
              </div>
            </section>

            <section id="bookApp" className="front-end-project">
              <img className="front-end-img" src={bookApp} alt="" />
              <div className="project-snippet">
                <div className="project-heading">
                  Book App for Keeping Track of Read Books
                </div>
                <div className="snippet">
                  A book tracker app to record and organize books you have read.
                </div>
                <div className="tech">
                  <span className="technologies">Technologies:</span> JavaScript
                </div>
                <div className="highlights">
                  <div className="h1">#Adding and deleting book entries</div>
                </div>
                <button className="view">View Project</button>
              </div>
            </section>

            <section id="adminDashboard" className="front-end-project">
              <img className="front-end-img" src={dashboard} alt="" />
              <div className="project-snippet">
                <div className="project-heading">Admin Dashboard</div>
                <div className="snippet">
                  A simple admin interface with panels for different
                  functionalities.
                </div>
                <div className="tech">
                  <span className="technologies">Technologies:</span> HTML, CSS
                </div>
                <div className="highlights">
                  <div className="h1">#Layout design</div>
                </div>
                <button className="view">View Project</button>
              </div>
            </section>

            <section id="formValidation" className="front-end-project">
              <img className="front-end-img" src={signup} alt="" />
              <div className="project-snippet">
                <div className="project-heading">Form Validation</div>
                <div className="snippet">
                  Simple form with field validation using JavaScript
                </div>
                <div className="tech">
                  <span className="technologies">Technologies:</span> HTML, CSS,
                  JavaScript
                </div>
                <div className="highlights">
                  <div className="h1">#Input validation</div>
                  <div className="h1">#UI enhancements</div>
                </div>
                <button className="view">View Project</button>
              </div>
            </section>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default FrontEnd_projects;
