import React, { Component } from 'react'
import "./Header.scss"

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header__container">
                    <div className="Header__header-container">
                        <h1 className="Header__header">
                            Learn Everything <span>Computer Science</span> Related
                        </h1>
                        <p className="Header__description">
                            Some computer science concepts can be difficult, but that doesn't mean 
                            they can't be <span>fun</span> to learn. Pick a topic and learn about it by reading 
                            our informative articles for <span>free</span>!
                        </p>
                        <form action="" className="Header__form">
                            <input type="text" className="Header__input" placeholder="Find a topic..."/>
                            <button className="Header__btn">Search</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
