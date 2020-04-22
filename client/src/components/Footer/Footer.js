import React, { Component } from 'react'
import "./Footer.scss"
import linkedIn from "../../assets/linkedin.svg"
import google from "../../assets/google.svg"
import github from "../../assets/github.svg"

export default class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="Footer__container">
                    <h3 className="Footer__header">
                        Contact me with
                    </h3>
                    <div className="Footer__social-media-container">
                        <a href="https://www.linkedin.com/in/laith-harb-b23267146/" className="Footer__social-media-link">
                            <img src={linkedIn} alt="linkedin-icon" className="Footer__social-icon"/>
                        </a>
                        <a href="https://github.com/harblaith7" className="Footer__social-media-link">
                            <img src={github} alt="github-icon" className="Footer__social-icon"/>
                        </a>
                        <a href="" className="Footer__social-media-link">
                            <img src={google} alt="" className="Footer__social-icon"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
