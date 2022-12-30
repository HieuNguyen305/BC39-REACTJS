import React, { Component } from "react";
import ProductList from "./productList";
import Cart from "./Cart";
import data from "./data.json";

export default class ShoesStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listShoes: data,
      detail: data[0],
    };
  }

  render() {
    const { listShoes, detail } = this.state;
    return (
      <div>
        <div className="container">
          <Cart listShoes={listShoes} />
          <ProductList listShoes={listShoes} detailShoes={detail} />
        </div>
      </div>
    );
  }
}
