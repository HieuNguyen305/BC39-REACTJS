import React, { Component } from "react";
import ProductList from "./productList";
import Cart from "./Cart";
import data from "./data.json";
import Modal from "./modal";

export default class ShoesStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listShoes: data,
      detail: data[0],
    };
  }
  handleDetail = (shoes) => {
    this.setState({
      detail: shoes,
    })
  }

  render() {
    const { listShoes, detail } = this.state;
    return (
      <div>
        <div className="container">
          <Cart listShoes={listShoes} />
          <ProductList listShoes={listShoes} handleDetail={this.handleDetail} />
          <Modal detail={detail}   />
        </div>
      </div>
    );
  }
}
