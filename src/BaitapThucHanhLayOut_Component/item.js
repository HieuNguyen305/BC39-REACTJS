import React, { Component } from "react";
export default class Item extends Component {
  render() {
    return (
      <div className="col-sm-3">
        <div className="card container text-center" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Find Out More !
            </a>
          </div>
        </div>
      </div>
    );
  }
}
