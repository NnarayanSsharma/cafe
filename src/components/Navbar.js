import React, { Component } from 'react'
import './navbarStyle.css'

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <nav class='cf'>
                    <ul class='cf'>
                        <li>
                            <a href='#'>Item 0</a>
                        </li>
                        <li>
                            <a href='#'>Item 1</a>
                        </li>
                        <li>
                            <a href='#'>Item 2</a>
                        </li>
                        <li>
                            <a href='#'>Item 3</a>
                        </li>
                    </ul>
                    <a href='#' id='openup'>MENU</a>
                </nav>
            </div>
        )
    }
}

export default Navbar
