import "../App.css";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div classname="App">
            <h1>HOME PAGE</h1>
            <p>This application will mainly consists of my React projects.</p>
            <br></br>
            <p>If there are any questions or tips, please let me know.</p>
            <p><a href="mailto:kydesignandcode@gmail.com">Contact me</a></p>
            <br></br>
            <p>For egg-citing content, check out my <Link to ="/chicken">Chicken Page</Link> &#128020;.</p>

        </div>
        
        

    );
};