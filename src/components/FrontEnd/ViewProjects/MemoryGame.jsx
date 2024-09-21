import { Outlet } from "react-router-dom";
import memoryGame from "../../../assets/memoryGame.png";
import "./ViewProject.css";
import memoryGameHandleClick from "../.././../assets/memoryGameHandleClick.png";
import memoryGameShuffleCards from "../.././../assets/memoryGameShuffleCards.png";
import { Link } from "react-router-dom";

function MemoryGame() {
  return (
    <div>
      <div className="fe-circle"></div>
      <div className="fe-circle-1"></div>
      <div className="back">
        <Link to="/frontEnd_projects">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
      </div>
      <div className="front-end-projects">
        <img className="project-live-img" src={memoryGame} alt="" />
        <div className="links">
          <div className="project-link">
            <i className="fa-brands fa-lg fa-github"></i>
            <a
              className="github"
              href="https://github.com/yashvi03/memory-game?tab=readme-ov-file"
            >
              Github
            </a>
          </div>
          <div className="project-link">
            <a
              className="live-preview"
              href="https://ash-memorycard-game.netlify.app/"
            >
              Live Preview
            </a>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </div>
        </div>
        <div className="front-end-project-container">
          <div className="fe-project-heading">Memory Card Game</div>
          <div className="project-desc">
            A fun memory game where players must click unique cards without
            repeating any selections.
          </div>
        </div>
        <hr />

        <div className="front-end-project-container">
          <div className="front-end-project-heading">The Idea</div>
          <div className="front-end-project-desc">
            I’ve always enjoyed building interactive projects, and I wanted to
            take it up a notch by creating a memory game. I decided to build a
            Memory Card Game to not only challenge players but also to challenge
            myself in React. I wanted to improve my state management skills and
            explore user interaction in real-time.
          </div>
        </div>
        <div className="front-end-project-container">
          <div className="front-end-project-heading">
            The Development Process
          </div>
          <div className="front-end-project-desc">
            I started by designing a basic UI layout with a grid of cards. Each
            card represented a character fetched from an API.
          </div>
          <div className="info-box">
            API used
            <a className="api" href="https://rickandmortyapi.com/">
              The Rick and Morty
            </a>
            for fetching characters
          </div>
          <div className="front-end-project-desc">
            The game mechanics involved tracking which cards were clicked and
            updating the score accordingly. Using React’s{" "}
            <span className="keywords">useState</span> and{" "}
            <span className="keywords">useEffect</span>, I was able to keep
            track of game state in real-time, ensuring that players couldn’t
            click on the same card twice.
          </div>
          <img className="project-img" src={memoryGameHandleClick} alt="" />
          <div className="front-end-project-desc">
            When a card is clicked in the game, if the card has already been
            selected (its ID is in the{" "}
            <span className="keywords">selectedCards</span> array), the player
            loses. In this case, the result is set to "You Lose," the score is
            reset to zero, and the selected cards are cleared. However, if the
            card is new and hasn't been clicked before, its ID is added to the{" "}
            <span className="keywords">selectedCards</span>, the score is
            incremented, and if the new score exceeds the previous best score,
            the <span className="keywords">bestScore</span> is updated. If the
            player successfully clicks all 10 unique cards without repeating
            any, the result is set to "You Win". After every click, the
            characters are reshuffled by calling the{" "}
            <span className="keywords">shuffleCards</span> function.
          </div>
        </div>
        <div className="front-end-project-container">
          <div className="front-end-project-heading">The Challenge</div>
          <div className="front-end-project-desc">
            One of the key challenges I faced was handling the{" "}
            <span className="keywords">card shuffling logic</span>. Initially,
            there were instances when all the displayed cards had already been
            clicked once, making it impossible for the player to continue
            without losing.
          </div>
        </div>

        <div className="front-end-project-container">
          <div className="front-end-project-heading">The Solution</div>
          <img className="project-img" src={memoryGameShuffleCards} alt="" />
          <div className="front-end-project-desc">
            I handled this challenge by creating the shuffleCards function which
            first creates a list of unselected characters whose IDs are not in
            selectedCards. If fewer than 5 unselected characters are available,
            it fills the remaining slots with previously selected characters,
            ensuring that the display always contains 5 cards. The characters
            are then shuffled randomly, with a mix of selected and unselected
            cards, guaranteeing at least one new card to click, thereby
            maintaining gameplay continuity.
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default MemoryGame;
