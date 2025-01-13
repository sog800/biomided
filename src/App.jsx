import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
import BlogReadingPage from "./pages/BlogReadingPage";
import Navbar from "./components/Navbar";
import React from "react";
import AboutPage from "./pages/AboutPage";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";


export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  // Load the theme from localStorage if available
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Toggle theme and store it in localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save the new theme in localStorage
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Router>
          <Navbar />
          <Routes>
          <Route path="/" element={<HomePage theme={theme} />} />
          <Route path="/blogs" element={<BlogsPage theme={theme} />} />
            <Route path="/blogs/:id" element={<BlogReadingPage theme={theme} />} />
            <Route path="/about" element = {<AboutPage theme={theme} />} />
            <Route path="/login" element = {<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element = {<Profile theme={theme} />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
