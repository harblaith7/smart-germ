import React, { Component } from 'react';
import TestingArticle from "./pages/TestingArticle/TestingArticle"
import LandingPage from "./pages/LandingPage/LandingPage"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Footer from "../src/components/Footer/Footer"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/course/react-testing" component={TestingArticle}/>
          <Route path="/" component={LandingPage}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;