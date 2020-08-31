import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

import './App.css';

import { Header } from "./components/header.component/header.component";
import { Main } from "./containers/main.container/main.container";
import { Footer } from "./components/footer.component/footer.component";

function App() {
  return (
    <>
      <Route exact path="/">
        <Redirect to="/matches"/>
      </Route>
      <Header/>
      <Main />
      <Footer />
      <Helmet>
        <title>Did We Win?</title>
      </Helmet>
    </>
  )
}

export default App;