import React, { Component } from "react";

export default class ProductItem extends Component {
  handleDetail = () => {
    this.props.getDetail(this.props.shoes);
  }
  render() {
    const { shoes } = this.props;
    return (
      <div className="col-md-3 mt-3">
        <div className="card">
          <img className="card-img-top" src={shoes.image} width={100} alt="" />
          <div className="card-body">
            <h4 className="card-title">{shoes.name}</h4>
            <p className="card-text">{shoes.price}$</p>
            <button className="btn btn-primary mx-1" onClick={this.handleDetail}>Get Detail</button>
            <button className="btn btn-success" data-toggle="modal" data-target="#modelId">Add to Cart</button>
          </div>
        </div>
      </div>
    );
  }
}
