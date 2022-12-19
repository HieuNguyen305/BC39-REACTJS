import React, { Component } from "react";
import Header from "./header";
import Body from "./body";
// import Banner from "./banner";
import ListItem from "./list-item";
import Footer from "./footer";

export default class LayOutComponent extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Body />
          {/* <Banner /> */}
          <div className="row">
            <ListItem />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
