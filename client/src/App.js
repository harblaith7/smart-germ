import React, { Component } from 'react';
import TestingArticle from "./pages/TestingArticle/TestingArticle"
import BigONotation from "./pages/BigONotation/BigONotation"
import GraphQL from "./pages/GraphQL/GraphQL"
import LandingPage from "./pages/LandingPage/LandingPage"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Footer from "../src/components/Footer/Footer"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/course/react-testing" component={TestingArticle}/>
          <Route path="/course/big-o-notation" component={BigONotation}/>
          <Route path="/course/graphql" component={GraphQL}/>
          <Route path="/" component={LandingPage}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;