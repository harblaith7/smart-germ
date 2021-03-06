import React, { Component } from 'react'
import "./Header.scss"
import Nav from "../Nav/Nav"

export default class Header extends Component {
    render() {
        return (
            <div className="Header" id="home">
                <Nav/>
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
                    <div className="Header__contents-container">
                        <div className="Header__content-container">
                            <h4 className="Header__content-header">
                                Web Development
                            </h4>
                            <p className="Header__content-description">
                                Web Development is really fun, but some concepts can be confusing.
                                To aid you, we have comprehensive articles relating to all facets
                                of web development. Front-end, back-end, databases, testing, project architecture you name it, 
                                we got it!
                            </p>
                        </div>
                        <div className="Header__content-container  Header__content-container--black">
                            <h4 className="Header__content-header Header__content-header--white">
                                Algorithms & Data Structures
                            </h4>
                            <p className="Header__content-description Header__content-description--white">
                                This is usually the doom of a programmer's existents. However, understanding 
                                algorithms and data structures is extremely important for those dreaded technical 
                                interviews. We try to make your life easier by providing you with comprehensive 
                                articles about these topics.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
