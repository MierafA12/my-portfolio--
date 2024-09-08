import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages-jsx/Home";
import About from "./Pages-jsx/About";
import Portfolio from "./Pages-jsx/Portfolio";
import Contact from "./Pages-jsx/Contact";
import Header from "./Component-jsx/Header";


function App() {
  return (
      

    <Router>
      <Header/>

      <div className="router">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
