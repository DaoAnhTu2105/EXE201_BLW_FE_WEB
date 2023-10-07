import React from "react";

const ExpertManager = () => {
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
                                    <tr style={{ alignItems: "center" }}>
                                        <td style={{ fontWeight: "600" }}>1001</td>
                                        <td>Mark Otto</td>
                                        <td>Japan</td>
                                        <td>$3000</td>
                                        <td>$1200</td>
                                        <td>
                                            <button className="button is-success is-rounded" style={{ width: "150px" }}>Đã thanh toán</button>
                                        </td>
                                        <td>
                                            <button className="button is-success is-rounded" style={{ width: "150px" }}>Đã thanh toán</button>
                                        </td>
                                    </tr>
                                    <tr style={{ alignItems: "center" }}>
                                        <td>1001</td>
                                        <td>Mark Otto</td>
                                        <td>Japan</td>
                                        <td>$3000</td>
                                        <td>$1200</td>
                                        <td>
                                            <button className="button is-warning is-rounded" style={{ width: "150px" }}>Chưa thanh toán</button>
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
export default ExpertManager