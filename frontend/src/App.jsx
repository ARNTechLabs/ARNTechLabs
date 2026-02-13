import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/AboutPage/About";
import Review from "./pages/ReviewPage/Review";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>

      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    
    </>
  );
}

export default App;
