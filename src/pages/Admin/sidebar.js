import React, { useState } from "react";
import './css/sidebar.css'
import Admin from "./index";
import logo from "../../image/rmbg-logo.png"
const SideBar = ({ selectContent }) => {

    const [selectedContent, setSelectedContent] = useState('Giao dịch')

    const handleSelectContent = (content) => {
        setSelectedContent(content)
        selectContent(content)
    }
    return (
        <div id="nav-bar">
            <div id="nav-header" style={{ display: "flex", justifyContent: "center", alignItems:"center" }}><a id="nav-title" href="/admin/dashboard"><img style={{ width: 60, height: 60 }} src={logo}></img>&nbsp; DASHBOARD</a>
                <hr />
            </div>
            <div id="nav-content">
                <div id="tab-cus" className={selectedContent === 'Khách hàng' ? " nav-button active" : "nav-button"} onClick={() => handleSelectContent('Khách hàng')}><i className="fas fa-user"></i><span>Khách hàng</span></div>
                <div id="tab-expert" className={selectedContent === 'Chuyên gia' ? " nav-button active" : "nav-button"} onClick={() => handleSelectContent('Chuyên gia')}><i className="fas fa-user-tie"></i><span>Chuyên gia</span></div>
                <div id="tab-food" className={selectedContent === 'Giao dịch' ? " nav-button active" : "nav-button"} onClick={() => handleSelectContent('Giao dịch')}><i className="fas fa-hand-holding-dollar"></i><span>Giao dịch</span></div>
                <hr />
                <div id="tab-recipe" className={selectedContent === 'Công Thức' ? " nav-button active" : "nav-button"} onClick={() => handleSelectContent('Công Thức')}><i className="fas fa-utensils"></i><span>Công thức</span></div>
                <div id="tab-food" className={selectedContent === 'Nguyên Liệu' ? " nav-button active" : "nav-button"} onClick={() => handleSelectContent('Nguyên Liệu')}><i className="fas fa-burger"></i><span>Nguyên liệu</span></div>
                <hr />


                <div id="nav-content-highlight"></div>
            </div><input id="nav-footer-toggle" type="checkbox" />
            <div id="nav-footer">
                <div id="nav-footer-heading">
                    <div className="nav-button"><i className="fas fa-magic"></i>&nbsp;&nbsp;&nbsp;<span>Admin</span></div>

                </div>
            </div>
        </div>
    )
}

export default SideBar