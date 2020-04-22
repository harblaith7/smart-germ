import React, { Component } from 'react'
import "./Article.scss"
import {Link} from "react-router-dom"

export default class Article extends Component {

    constructor(props){
        super(props)
        this.state = {
            courses : [
                {
                    name: "React Testing",
                    description: "Learn to test your React application with Jest and react-testing-library",
                    thumbnail: "https://i.morioh.com/10c5ff6679.png",
                    author: "Laith Harb",
                    publishedDate: "2020-04-21",
                    isPublished: true,
                    id: "dsfsa43q21gs",
                    path: "react-testing"
                },
                {
                    name: "Sorting Algorithms",
                    description: "Learn how to implement all the important sorting algorithms",
                    thumbnail: "https://i.imgur.com/SbMGmW4.gif",
                    author: "Laith Harb",
                    publishedDate: "not published",
                    isPublished: false,
                    id: "dsfsa43q21gs",
                    path: "sorting-algorithms"
                },
                {
                    name: "Binary Search Trees",
                    description: "Truly understand the implementation of binary search trees",
                    thumbnail: "https://miro.medium.com/max/1200/1*-wjb7nJPsfO7K1aPMYg90A.png",
                    author: "Laith Harb",
                    publishedDate: "not published",
                    isPublished: false,
                    id: "dsfsa43q21gs",
                    path: "binary-search-trees"
                },
                {
                    name: "Authentication with GraphQL",
                    description: "Learn how to authenticate a user with GraphQL and Apollo",
                    thumbnail: "https://miro.medium.com/max/2560/1*cmtyFQ6veY6uS7jUzEiqNQ.png",
                    author: "Laith Harb",
                    publishedDate: "not published",
                    isPublished: false,
                    id: "dsfsa43q21gs",
                    path: "authentication-with-graphql"
                },
                {
                    name: "The Big O Notation",
                    description: "The big O notation is probably one of the most important concepts in CS to learn",
                    thumbnail: "https://danielmiessler.com/images/big-o-chart-tutorial-bazar-aymptotic-notations-1.png",
                    author: "Laith Harb",
                    publishedDate: "not published",
                    isPublished: false,
                    id: "dsfsa43q21gs",
                    path: "big-o-notion"
                },
                {
                    name: "Graphs & Dijkstra Algorithm",
                    description: "Learn how Google maps really works by learning graphs and shortest path algorithms.",
                    thumbnail: "https://miro.medium.com/max/2560/1*dtmsuTMqRvYzkUCS25tLDA.jpeg",
                    author: "Laith Harb",
                    publishedDate: "not published",
                    isPublished: false,
                    id: "dsfsa43q21gs",
                    path: "graphs-dijkstra-algorithm"
                },

            ]
        }
    }

    displayCourseCards = () => {
        return this.state.courses.map(course => {
            return (
                <Link to={`/course/${course.path}`} className={`Article__card-container ${!course.isPublished && "Article__card-container--disabled"}`}>
                    <img src={course.thumbnail} alt="" className="Article__card-img"/>
                    <h4 className="Article__card-title">{course.name}</h4>
                    <p className="Article__card-description">
                        {course.description}
                    </p>
                    <div className="Article__date-and-author-container">
                        <p className="Article__card-author">
                            {course.author}
                        </p>
                        <p className="Article__card-data">
                            {course.publishedDate}
                        </p>
                    </div>
                </Link>
            )
        })
    }

    render() {
        return (
            <div className="Article">
                <div className="Article__container">
                    <h2 className="Article__heading">
                        Popular Articles
                    </h2>
                    <div className="Article__articles-container">
                        {this.displayCourseCards()}
                    </div>
                </div>
            </div>
        )
    }
}
