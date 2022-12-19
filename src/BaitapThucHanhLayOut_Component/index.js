import React, { Component } from "react";
import Header from "./header";
import Body from "./body";
import Banner from "./banner";
import ListItem from "./list-item";
import Footer from "./footer";

export default class LayOutComponent extends Component {
  render() {
    return (
      <>
        <Header />
        <Body />
        <Banner />
        <ListItem />
        <Footer />
      </>
    );
  }
}
