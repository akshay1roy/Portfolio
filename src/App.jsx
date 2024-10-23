import Intro from "./components/Intros/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import Contact from './components/Contact/Contact'
import  "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  const [menuOpen ,setMenuOpen]=useState()

  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     <div className="sections">
      <Intro/>
      <Portfolio/>
      <Works/>
      <Testimonials/>
      <Contact/>
     </div>
    </div>
  );
}

export default App;
