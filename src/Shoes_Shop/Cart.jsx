import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    let { listShoes } = this.props
    return (
        
        <div>
  {/* <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
    CART
  </button> */}
  <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div className="modal-dialog modal-xl" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Giỏ Hàng</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <table className="table">
            <thead>
                <tr>
                    <th>Mã Sản Phẩm</th>
                    <th>Hình Ảnh</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Số Lượng</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
              {listShoes.map((spGioHang) => {
                return <tr key={spGioHang.id}>
                  <td>{spGioHang.id}</td>
                  <td>
                    <img src={spGioHang.image} width={50} alt="" />
                  </td>
                  <td>{spGioHang.name}</td>
                  <td>
                    <button className="btn btn-primary mx-2">-</button>
                    {spGioHang.quantity}
                    <button className="btn btn-primary mx-2">+</button>
                  </td>
                  </tr>
              })}
            </tbody>
          </table>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</div>

    );
  }
}
