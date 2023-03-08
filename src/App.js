import "./App.css";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {Todolist} from "./pages/Todolist";
import {Coffee} from "./pages/Coffee"
import { Home } from "./pages/Home";
import { NavBar } from "./Navbar";
import { Tip } from "./pages/Tipcalculator";
import { Chicken } from "./pages/Chicken";
import {Weather} from "./pages/Weather";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chicken" element={<Chicken />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/tipcalculator" element={<Tip />} />
          <Route path="/todolist" element={<Todolist />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="*" element={<Navigate to ="/" />} />
        </Routes>
      </Router>
    </div>
  )


  
}

export default App;
