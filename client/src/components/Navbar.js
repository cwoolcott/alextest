import React from 'react';


function Navbar(props) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item" style={{ fontSize: 32 }}>
                <b>Google Book Search</b>
            </li>
            <li className="nav-item">
                <a href="/search" className="nav-link">
                    Search
          </a>
            </li>
            <li className="nav-item">
                <a href="/saved" className="nav-link">
                    Saved
          </a>
            </li>
        </ul>
    );
}

export default Navbar