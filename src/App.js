import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Todolist} from "./pages/Todolist";
import {Menu} from "./pages/Menu"
import {Coffee} from "./pages/Coffee"
import { Home } from "./pages/Home";
import { NavBar } from "./Navbar";
import { Tip } from "./pages/Tipcalculator";
import { Chicken } from "./pages/Chickencoop";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/todolist" element={<Todolist />} />
          <Route path="/tipcalculator" element={<Tip />} />
          <Route path="/chickencoop" element={<Chicken />} />

          <Route path="*" element={<h1>ERROR: YOU ARE IN THE WRONG PAGE!</h1>} />
        </Routes>
      </Router>
    </div>
  )


  
}

export default App;
