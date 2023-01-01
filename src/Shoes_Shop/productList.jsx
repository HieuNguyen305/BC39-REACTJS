import React, { Component } from "react";
import ProductItem from "./productItem";

export default class ProductList extends Component {
  renderShoes = () => {
    const { listShoes, handleDetail } = this.props;
    return listShoes.map((shoes) => {
      return <ProductItem key={shoes.id} shoes={shoes} getDetail={handleDetail} />;
    });
  };



  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div>
              <h3>List Sản Phẩm</h3>
              <div className="row">{this.renderShoes()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
