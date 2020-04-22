import React, { Component } from 'react'
import "./Nav.scss"
import logo from "../../assets/smart-germ-logo.png"
import { HashLink as Link } from 'react-router-hash-link';

export default class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <div className="Nav__container">
                    <ul className="Nav__list">
                        <li className="Nav__list-item Nav__list-item--logo">
                            <Link to="/" className="Nav__link">
                                <img src={logo} alt="" className="Nav__logo"/>
                            </Link>
                        </li>
                        <div className="Nav__list-items-container">
                            <li className="Nav__list-item">
                                <Link to="/#article" className="Nav__link">
                                    Articles
                                </Link>
                            </li>
                            <li className="Nav__list-item">
                                <Link to="/" className="Nav__link">
                                    About me 
                                </Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}
