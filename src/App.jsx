import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
import BlogReadingPage from "./pages/BlogReadingPage";
import Card from "./components/Card";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:id" element={<BlogReadingPage />} />
      </Routes>
    </Router>
  );
}

export default App;

