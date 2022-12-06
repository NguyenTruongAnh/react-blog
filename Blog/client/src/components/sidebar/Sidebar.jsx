import './sidebar.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    const [cats, setCats] = useState([])

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }

        getCats()
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <span className="sidebar-title">ABOUT ME</span>
                <img 
                    src="https://i.pinimg.com/originals/50/df/34/50df34b9e93f30269853b96b09c37e3b.jpg" 
                    alt="Avatar" 
                />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adip
                </p>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-title">CATEGORIES</span>
                <ul className="sidebar-list">
                    {cats.map((c, index) => (
                        <Link key={index} className="link" to={`/?cat=${c.name}`}>
                            <li className="sidebar-list__item">
                                {c.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-title">FOLLOW US</span>
                <div className="sidebar-socials">
                    <i className="sidebar-icon fab fa-facebook-square"></i>
                    <i className="sidebar-icon fab fa-twitter-square"></i>
                    <i className="sidebar-icon fab fa-instagram-square"></i>
                    <i className="sidebar-icon fab fa-pinterest-square"></i>
                </div>
            </div>
        </div>
    )
}
