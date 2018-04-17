import React, { Component, Fragment } from "react";
import { Header, Footer } from "./components/layouts";
import Exercises from "./components/exercises";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Exercises /> <Footer />
      </Fragment>
    );
  }
}
