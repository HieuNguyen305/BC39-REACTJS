import React, { Component } from 'react'

export default class Modal extends Component {

    render() {
        let { detail } = this.props
        console.log(detail, "inModal");
        return (
            <div>
                {/* <!-- Button trigger modal --> */}
                {/* <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modalId">
          Launch
        </button> */}

                {/* <!-- Modal --> */}
                <div className="modal fade" id="modalId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Tên Sản Phẩm</th>
                                            <th>Giá</th>
                                            <th>Mô Tả</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {detail.name}
                                            </td>
                                            <td>
                                                {detail.price}$
                                            </td>
                                            <td>
                                                {detail.description}
                                            </td>
                                        </tr>
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
        )
    }
}
