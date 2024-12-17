import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import ConsolesPage from "./pages/ConsolesPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import PCComponentsPage from "./pages/PCComponentsPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/consoles" element={<ConsolesPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/pc-components" element={<PCComponentsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
