import {Link} from "react-router-dom";
export const NavBar = () => {
    
    return (
        <div className="nav">
            <Link to ="/" className="navbutton">Home</Link> 
            <Link to ="/coffee" className="navbutton">Coffee</Link>
            <Link to ="/todolist" className="navbutton">To-Do List</Link> 
            <Link to ="/tipcalculator" className="navbutton">Tip Calculator</Link>
            <Link to ="/chicken" className="navbutton">Chicken</Link>
            <Link to ="/empty" className="navbutton">Empty</Link>
        </div>
    )
}