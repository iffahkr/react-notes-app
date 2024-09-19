import React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePageWrapper from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import ArchivePageWrapper from "./pages/ArchivePage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <header>
          <h1>
            <Link to="/">Aplikasi Catatan</Link>
          </h1>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePageWrapper />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/archives" element={<ArchivePageWrapper />} />
            <Route path="/detail" element={<DetailPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
