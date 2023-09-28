
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const PremiumPack = () => {
    return (
        <>
            <div className="pack-container" >
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div className="pack-table">
                        <table className="table is-striped ">
                            <thead>
                                <tr>

                                    <th>Quyền Lợi Thành Viên</th>
                                    <th>Miễn Phí</th>
                                    <th>Tiêu Chuẩn</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>Bỏ Qua Quảng Cáo</td>
                                    <td>-</td>
                                    <td><FontAwesomeIcon icon={faCheck} style={{ fontSize: "1.3rem", color: " #33c4b6", marginRight: "3px" }} /></td>
                                </tr>
                                <tr>

                                    <td>Xem thực đơn bữa ăn</td>
                                    <td>-</td>
                                    <td><FontAwesomeIcon icon={faCheck} style={{ fontSize: "1.3rem", color: " #33c4b6", marginRight: "3px" }} /></td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="wrapper">
                    <div class="package">
                        <div class="name">Gói 1 tháng</div>
                        <div class="price-for-month">49.000đ</div>
                        <div class="trial">Sau tháng đầu tiên 120.000đ</div>
                        <hr />
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} style={{ fontSize: "1.3rem", color: " #33c4b6", marginRight: "3px" }} /> &nbsp;<strong>8</strong> team members</li>
                            <li><FontAwesomeIcon icon={faCheck} style={{ fontSize: "1.3rem", color: " #33c4b6", marginRight: "3px" }} /> &nbsp;<strong>6</strong> team playlists</li>
                            <li><FontAwesomeIcon icon={faCheck} style={{ fontSize: "1.3rem", color: " #33c4b6", marginRight: "3px" }} /> &nbsp;<strong>Unlimited</strong> public playlists</li>
                        </ul>
                    </div>
                    <div class="package brilliant">
                        <div class="name">Gói 1 năm</div>
                        <div class="price-for-year">899.000đ</div>
                        <div class="trial">Tiết kiệm tới 42%</div>
                        <hr />
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} style={{ fontSize: "1.3rem", color: " #33c4b6", marginRight: "3px" }} /> &nbsp;<i class="fa-solid fa-check"></i><strong>300+</strong>thực đơn cho bé</li>
                            <li><FontAwesomeIcon icon={faCheck} style={{ fontSize: "1.3rem", color: " #33c4b6", marginRight: "3px" }} /> &nbsp;<strong>Lưu </strong> các công thức yêu thích</li>
                            <li><FontAwesomeIcon icon={faCheck} style={{ fontSize: "1.3rem", color: " #33c4b6", marginRight: "3px" }} /> &nbsp;<strong>Lập lịch trình </strong> cho bé theo từng tháng tuổi </li>
                        </ul>
                    </div>
                    <div class="package brilliant">
                        <div class="name">Basic</div>
                        <div class="price-for-6-month">499.000đ</div>
                        <div class="trial">7 ngày dùng thử miễn phí</div>
                        <hr />
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} style={{ fontSize: "1.3rem", color: " #33c4b6", marginRight: "3px" }} /> &nbsp; <strong>5</strong> team members</li>
                            <li><FontAwesomeIcon icon={faCheck} style={{ fontSize: "1.3rem", color: " #33c4b6", marginRight: "3px" }} /> &nbsp; <strong>3</strong> team playlists</li>
                            <li><FontAwesomeIcon icon={faCheck} style={{ fontSize: "1.3rem", color: " #33c4b6", marginRight: "3px" }} /> &nbsp; <strong>Unlimited</strong> public playlists</li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PremiumPack;
