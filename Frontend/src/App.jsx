import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import ConsolesPage from "./pages/ConsolesPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import PCComponentsPage from "./pages/PCComponentsPage";

const ComponentsContentPage = lazy(() => import("./pages/ComponentsContentPage"));
const GamesContentPage = lazy(() => import("./pages/GamesContentPage"));
const ConsolesContentPage = lazy(() => import("./pages/ConsolesContentPage"));
const AccessoriesContentPage = lazy(() => import("./pages/AccessoriesContentPage"));

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/games" element={<GamesPage />} />
              <Route path="/consoles" element={<ConsolesPage />} />
              <Route path="/accessories" element={<AccessoriesPage />} />
              <Route path="/pc-components" element={<PCComponentsPage />} />
              {/* Add the dynamic route for PC content */}
              <Route path="/pccontent/:id" element={<ComponentsContentPage />} />
              <Route path="/gamescontent/:id" element={<GamesContentPage />} />
              <Route path="/consolescontent/:id" element={<ConsolesContentPage />} />
              <Route path="/accessoriescontent/:id" element={<AccessoriesContentPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
