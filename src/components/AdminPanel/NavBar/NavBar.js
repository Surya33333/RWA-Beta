import { Bell, Envelope, Globe, Person, PersonFill, Search } from "react-bootstrap-icons";
import "./NavBar.scss";

const Navbar = () => {

    const UserName = sessionStorage.getItem('username');

    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search.." /><Search className="icon"/>
                </div>
                <div className="items">
                    <div className="item">
                        <Globe className="icon"/>
                    </div>
                    <div className="item">
                        <Bell className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <Envelope className="icon" />
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <Person className="icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;