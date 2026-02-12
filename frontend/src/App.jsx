import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/AboutPage/About";

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
