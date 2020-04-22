import React, { Component } from 'react'
import "./Nav.scss"
import logo from "../../assets/smart-germ-logo.png"

export default class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <div className="Nav__container">
                    <img src={logo} alt="" className="Nav__logo"/>
                </div>
            </div>
        )
    }
}
