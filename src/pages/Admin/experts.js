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
                                        <th>Tên chuyên gia</th>
                                        <th>Số điện thoại</th>
                                        <th>Khu vực</th>
                                        <th>Mô tả</th>
                                        <th>Liên lạc mxh</th>
                                        <th>Trạng thái</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ alignItems: "center" }}>
                                        <td>Chuyên gia A</td>
                                        <td>0123456789</td>
                                        <td>Hồ Chí Minh</td>
                                        <td>Chuyên gia dinh dưỡng</td>
                                        <td>-</td>
                                        <td><p style={{ color: "#5d7ee7" }}>Active</p></td>
                                        <td>
                                           
                                        </td>
                                    </tr>
                                    <tr style={{ alignItems: "center" }}>
                                        <td>Chuyên gia A</td>
                                        <td>0123456789</td>
                                        <td>Hồ Chí Minh</td>
                                        <td>Chuyên gia dinh dưỡng</td>
                                        <td>-</td>
                                        <td><p style={{ color: "#f01616" }}>Inactive</p></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div >
            </div >

        </>
    )
}
export default ExpertManager