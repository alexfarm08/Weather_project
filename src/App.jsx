import { useState } from 'react';
import {Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from "./pages/Home.jsx";
import AboutPage from './pages/About.jsx';
import Weather from './pages/Weather.jsx';

function App() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch(text) {
    setSearch(text);
    navigate("/weather");
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage onSearch={handleSearch} search={search} />} />
      <Route path="/about" element={<AboutPage onSearch={handleSearch} search={search} />} />
      <Route path="/weather" element={<Weather onSearch={handleSearch} search={search} />} />
    </Routes>
  );
}

export default App
