import React from 'react'
import { Link } from 'react-router-dom'

export default function NavSearch() {
    return (
        <div>
            <ul className="nav-links">
                <Link className="links" to="/">
                    <li className="links">Home</li>
                </Link>
                <Link className="links" to="/search">
                    <li className="links">Search</li>
                </Link>
            </ul>
        </div>
    )
}
