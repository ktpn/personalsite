import {Link} from "react-router-dom";
import { useState } from "react";

export const NavBar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    
    return (

        <div className="nav">
            <button className="hamburger" onClick={() => {
                setIsNavExpanded(!isNavExpanded)
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <div className={isNavExpanded ? "navmenu expanded" : "navmenu"} onClick={() => {
                setIsNavExpanded(!isNavExpanded)
            }}>
                <ul>
                    <li>
                        <Link to ="/" className="navbutton">Home</Link> 
                    </li>
                    <li>
                        <Link to ="/chicken" className="navbutton">Chicken</Link>
                    </li>
                    <li>
                        <Link to ="/weather" className="navbutton">Weather</Link>
                    </li>
                    <li>
                        <Link to ="/tipcalculator" className="navbutton">Tip Calculator</Link>
                    </li>
                    <li>
                        <Link to ="/todolist" className="navbutton">To-Do List</Link> 
                    </li>
                    <li>
                        <Link to ="/coffee" className="navbutton">Coffee</Link>
                    </li>
                </ul>
            </div>

        </div>
    );
}