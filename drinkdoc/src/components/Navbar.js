import { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom"
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render(){
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">DrinkDoc</h1>
                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <i className={item.icon}>
                                        {item.title}
                                    </i>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}

export default Navbar;