import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Todolist} from "./pages/Todolist";
import {Menu} from "./pages/Menu"
import {Coffee} from "./pages/Coffee"
import { Home } from "./pages/Home";
import { NavBar } from "./Navbar";
import { Tip } from "./pages/Tipcalculator";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/tipcalculator" element={<Tip />} />

          <Route path="*" element={<h1>ERROR: YOU ARE IN THE WRONG PAGE!</h1>} />
        </Routes>
      </Router>
    </div>
  )


  
}

export default App;
