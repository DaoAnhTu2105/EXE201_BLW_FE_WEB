
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const PremiumPack = () => {
    return (
        <>
            <div className="pack-container" >
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
                <div class="wrapper">
                    <div class="package">
                        <div class="name">Limited</div>
                        <div class="price">€2</div>
                        <div class="trial">Available for a month</div>
                        <hr />
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} style={{ fontSize: "1.3rem", color: " #33c4b6", marginRight: "3px" }} /> &nbsp;<strong>8</strong> team members</li>
                            <li><FontAwesomeIcon icon={faCheck} style={{ fontSize: "1.3rem", color: " #33c4b6", marginRight: "3px" }} /> &nbsp;<strong>6</strong> team playlists</li>
                            <li><FontAwesomeIcon icon={faCheck} style={{ fontSize: "1.3rem", color: " #33c4b6", marginRight: "3px" }} /> &nbsp;<strong>Unlimited</strong> public playlists</li>
                        </ul>
                    </div>
                    <div class="package brilliant">
                        <div class="name">Brilliant</div>
                        <div class="price">€5</div>
                        <div class="trial">Free 30 day trial</div>
                        <hr />
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} style={{ fontSize: "1.3rem", color: " #33c4b6", marginRight: "3px" }} /> &nbsp;<i class="fa-solid fa-check"></i><strong>Unlimited</strong> team members</li>
                            <li><FontAwesomeIcon icon={faCheck} style={{ fontSize: "1.3rem", color: " #33c4b6", marginRight: "3px" }} /> &nbsp;<strong>Unlimited</strong> team playlists</li>
                            <li><FontAwesomeIcon icon={faCheck} style={{ fontSize: "1.3rem", color: " #33c4b6", marginRight: "3px" }} /> &nbsp;<strong>Unlimited</strong> public playlists</li>
                            <li><FontAwesomeIcon icon={faCheck} style={{ fontSize: "1.3rem", color: " #33c4b6", marginRight: "3px" }} /> &nbsp;Team analytics</li>
                            <li><FontAwesomeIcon icon={faCheck} style={{ fontSize: "1.3rem", color: " #33c4b6", marginRight: "3px" }} /> &nbsp;Send files</li>
                        </ul>
                    </div>
                    <div class="package brilliant">
                        <div class="name">Basic</div>
                        <div class="price">€0</div>
                        <div class="trial">Totally free</div>
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
