import React, { Component } from 'react'
import "./Article.scss"

export default class Article extends Component {

    constructor(props){
        super(props)
        this.state = {
            courses : [
                {
                    name: "React Testing",
                    description: "Learn to test you React application with Jest and react-testing-library",
                    thumbnail: "https://i.morioh.com/10c5ff6679.png",
                    author: "Laith Harb",
                    publishedDate: "2020-04-21",
                    isPublished: true,
                    id: "dsfsa43q21gs"
                },
                {
                    name: "Sorting Algorithms",
                    description: "Learn to test you React application with Jest and react-testing-library",
                    thumbnail: "https://i.imgur.com/SbMGmW4.gif",
                    author: "Laith Harb",
                    publishedDate: "2020-04-21",
                    isPublished: true,
                    id: "dsfsa43q21gs"
                },
                {
                    name: "Binary Search Trees",
                    description: "Learn to test you React application with Jest and react-testing-library",
                    thumbnail: "https://miro.medium.com/max/1200/1*-wjb7nJPsfO7K1aPMYg90A.png",
                    author: "Laith Harb",
                    publishedDate: "2020-04-21",
                    isPublished: true,
                    id: "dsfsa43q21gs"
                },
                {
                    name: "Sorting Algorithms",
                    description: "Learn to test you React application with Jest and react-testing-library",
                    thumbnail: "https://i.morioh.com/10c5ff6679.png",
                    author: "Laith Harb",
                    publishedDate: "2020-04-21",
                    isPublished: true,
                    id: "dsfsa43q21gs"
                }
            ]
        }
    }

    displayCourseCards = () => {
        return this.state.courses.map(course => {
            return (
                <div className="Article__card-container">
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
                </div>
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
