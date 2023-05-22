import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Menu } from "./components/Menu";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import "bulma/css/bulma.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
