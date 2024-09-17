import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FrontEnd.css"; 

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: "memoryGame", label: "Memory Game" },
    { id: "cvBuilder", label: "CV Builder" },
    { id: "weatherForecaster", label: "Weather Forecaster" },
    { id: "todoList", label: "To-do List App" },
    { id: "restaurantWebsite", label: "Restaurant Website" },
    { id: "ticTacToe", label: "Tic Tac Toe Game" },
    { id: "bookApp", label: "Book App" },
    { id: "adminDashboard", label: "Admin Dashboard" },
    { id: "formValidation", label: "Form Validation" },
  ];

  const handleScroll = () => {
    const scrollY = window.scrollY;

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(id);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sidebar">
        <div className="sidenav-heading">Projects</div>
      {sections.map(({ id, label }) => (
        <Link
          key={id}
          to={`#${id}`}
          className={`sidebar-item ${activeSection === id ? "active" : ""}`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
