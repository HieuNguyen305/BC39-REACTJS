import React, { Component } from "react";
import ProductItem from "./productItem";

export default class ProductList extends Component {
  renderShoes = () => {
    const { listShoes, detailShoes } = this.props;
    return listShoes.map((shoes) => {
      return <ProductItem key={shoes.id} shoes={shoes} getDetail={this.handleDetail} />;
    });
  };

  handleDetail = (shoes) => {
    this.setState({
      detailShoes: shoes,
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h3>Detail Shoes</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>Adidas</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>$</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>Giày</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-8">
              <h3>List Sản Phẩm</h3>
              <div className="row">{this.renderShoes()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
