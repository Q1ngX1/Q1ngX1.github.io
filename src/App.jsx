import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**Pages */
import Home from "./pages/Home"
import About from "./pages/About"
import NotePage from "./pages/NotePage"
import NotFound from "./pages/NotFound";

/**Components */
import Menu from "./components/Menu"
import ContentTable from "./components/ContentTable"
import ScrollToTop from "./components/ScrollToTop"

import "./App.css";

function App() {
  return (
      <BrowserRouter>
      <div className="app-container">

        <div className="side">
          <Menu />
          <ContentTable />
        </div>

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/note/:filename" element={<NotePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
      </div>
      <ScrollToTop />
      </BrowserRouter>
  )
}

export default App
