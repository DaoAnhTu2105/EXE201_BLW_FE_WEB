import React from "react";

const Transactions = () => {
    return (
        <>
            <div className="container-trans">
                <div className="row-trans">
                    <div className="col-md-12-trans">
                        <div className="table-wrap">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th >Mã đơn</th>
                                        <th>Tên KH</th>
                                        <th>Tên gói</th>
                                        <th>Đơn giá</th>
                                        <th>Tiền nhận</th>
                                        <th>Trạng thái</th>
                                        <th>Duyệt đơn</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ verticalAlign: "center" }}>
                                        <td style={{ fontWeight: "600", verticalAlign: "center" }}>1001</td>
                                        <td >Nguyễn Văn A</td>
                                        <td>Japan</td>
                                        <td>$3000</td>
                                        <td>$1200</td>
                                        <td>
                                            <p  className="has-text-success" style={{fontWeight:"700"}}>Thành công</p>
                                        </td>
                                        <td>
                                            -
                                        </td>
                                    </tr>
                                    <tr style={{ alignItems: "center" }}>
                                        <td>1001</td>
                                        <td>Nguyễn Văn B</td>
                                        <td>Japan</td>
                                        <td>$3000</td>
                                        <td>$1200</td>
                                        <td>
                                            <p className="has-text-danger" style={{fontWeight:"700"}}>Chưa duyệt</p>
                                        </td>
                                        <td>
                                            <button className="button is-link is-rounded" style={{ width: "150px" }}>Chấp nhận</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div >
            </div>

        </>
    )
}
export default Transactions