import {Link} from "react-router-dom";
export const NavBar = () => {
    
    return (
        <div className="nav">
            <Link to ="/" className="navbutton">Home</Link> 
            <Link to ="/menu" className="navbutton">Menu</Link>
            <Link to ="/coffee" className="navbutton">Coffee</Link>
            <Link to ="/todolist" className="navbutton">To-Do List</Link> 
            <Link to ="/tipcalculator" className="navbutton">Tip Calculator</Link>
        </div>
    )
}