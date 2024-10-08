import { useContext } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextAPI/AuthContext";
import SubNavbar from "./SubNavbar";

function Navbar() {
    const {isLoggedIn, logOut} = useContext(AuthContext);

    const navigate = useNavigate();
    return ( 
        <>
            <div className='navbar-wrapper'>
                <div className="navbar">
                    <div className='navbar-left-box'>
                        <button onClick={()=>navigate("/women")}>WOMEN</button>
                        <button onClick={()=>navigate("/men")}>MEN</button>
                    </div>
                    <div className='navbar-center-box' onClick={()=>navigate("/")}>
                        <img src="https://www.bluefly.com/cdn/shop/files/bluefly-logo_201c7dd1-deca-419a-8033-ce61a7fd64c5_400x.png?v=1719929091" alt="BLUEFLY Logo" />
                    </div>
                    <div className='navbar-right-box'>
                        <div className='navbar-input'>
                            <img className='search-img' src="https://img.icons8.com/ios/50/search.png" alt="search"/>
                            <input type="text" name="search" id="searchBar" placeholder='SEARCH' />
                        </div>
                        <button className='navbar-user-btn' onClick={()=>navigate("/login")}>
                            <img className='user-img'  src="https://img.icons8.com/windows/32/user.png" alt="user"/>
                        </button>
                        <button className='navbar-cart-btn' onClick={()=>navigate("/cart")}>
                            <img className='cart-img' src="https://img.icons8.com/carbon-copy/50/bag-front-view.png" alt="bag-front-view"/>
                        </button>
                    </div>
                    {
                        isLoggedIn.login ? (
                            <div className="user-name">
                                <h2>Hi &#128075;, {isLoggedIn.user}</h2>
                                <button onClick={()=>logOut()}>LogOut</button>
                            </div>
                        ) : null
                    }
                    
                </div>
            </div>
            <SubNavbar />
        </>
     );
}

export default Navbar;