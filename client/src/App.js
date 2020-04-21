import React, { Component } from 'react';
import TestingArticle from "./pages/TestingArticle/TestingArticle"
import LandingPage from "./pages/LandingPage/LandingPage"

class App extends Component {
  render() {
    return (
      <div>
        <LandingPage/>
        <TestingArticle/>
      </div>
    );
  }
}

export default App;