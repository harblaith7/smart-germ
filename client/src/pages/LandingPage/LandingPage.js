import React, { Component } from 'react'
import "./LandingPage.scss"
import Header from "../../components/Header/Header"
import Article from "../../components/Article/Article"
import Nav from "../../components/Nav/Nav"

export default class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <Header/>
                <Article/>
            </div>
        )
    }
}
