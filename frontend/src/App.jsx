import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/AboutPage/About";
import Review from "./pages/ReviewPage/Review";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>

      <header>
          
      </header>
      <main>
          <Outlet />
      </main>
      <footer>

      </footer>
    
    </>
  );
}

export default App;
