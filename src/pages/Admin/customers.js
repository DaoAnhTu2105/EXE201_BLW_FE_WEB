import React from "react";

const CustomersManager = () => {
    return (
        <>
            <div className="container-trans">
                <div className="row-trans">
                    <div className="col-md-12-trans">
                        <div className="table-wrap">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th >Mã KH</th>
                                        <th>Tên KH</th>
                                        <th>Thành viên</th>
                                        <th>Trạng thái</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ alignItems: "center" }}>
                                        <td style={{ fontWeight: "600" }}>1001</td>
                                        <td>Nguyễn Văn A</td>
                                        <td>Thành viên thường</td>
                                        <td><p style={{ color: "#f01616" }}>Inactive</p></td>
                                        <td></td>
                                    </tr>
                                    <tr style={{ alignItems: "center" }}>
                                        <td>1002</td>
                                        <td>Nguyễn Văn B</td>
                                        <td>Hội viên cao cấp</td>
                                        <td><p style={{ color: "#5d7ee7" }}>Active</p></td>
                                        <td></td>
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
export default CustomersManager