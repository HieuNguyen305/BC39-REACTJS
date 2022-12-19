import React, { Component } from "react";
import Item from "./item";
export default class ListItem extends Component {
  render() {
    return (
      <div className="row">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    );
  }
}
