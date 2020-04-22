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
                        <a href="" className="Footer__social-media-link">
                            <img src={linkedIn} alt="" className="Footer__social-icon"/>
                        </a>
                        <a href="" className="Footer__social-media-link">
                            <img src={github} alt="" className="Footer__social-icon"/>
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
