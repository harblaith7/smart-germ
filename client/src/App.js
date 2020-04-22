import React, { Component } from 'react';
import TestingArticle from "./pages/TestingArticle/TestingArticle"
import LandingPage from "./pages/LandingPage/LandingPage"
import {BrowserRouter, Route, Switch} from "react-router-dom"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/course/react-testing" component={TestingArticle}/>
          <Route path="/" component={LandingPage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;