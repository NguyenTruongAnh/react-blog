import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './header.css'

export default function Header() {
    const { user, dispatch } = useContext(Context)

    const PF = "http://localhost:5000/images/"

    const handleLogout = () => {
        dispatch({ type:"LOGOUT" })
    }

    return (
        <div className="header">
            <div className="header-left">
                <i className="header-icon fab fa-facebook-square"></i>
                <i className="header-icon fab fa-twitter-square"></i>
                <i className="header-icon fab fa-instagram-square"></i>
                <i className="header-icon fab fa-pinterest-square"></i>
            </div>
            <div className="header-center">
                <ul className="header-list">
                    <li className="header-list__item">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="header-list__item">
                        <Link className="link" to="/">ABOUT</Link>
                    </li>
                    <li className="header-list__item">
                        <Link className="link" to="/">CONTACT</Link>
                    </li>
                    <li className="header-list__item">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="header-list__item" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="header-right">
                <i className="header-search-icon fas fa-search"></i>
                { 
                    user ? (
                        <Link to="/settings">
                            <img className="header-img" src={user.profilePicture ? PF + user.profilePicture : './images/default-avatar.jpg'} alt="Avatar" />
                        </Link>
                    ) : (
                        <ul className="header-list">
                            <li className="header-list__item">
                                <Link className="link" to="/login">LOGIN</Link>
                            </li>
                            <li className="header-list__item">
                                <Link className="link" to="/register">REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
            </div>
        </div>
    )
}
