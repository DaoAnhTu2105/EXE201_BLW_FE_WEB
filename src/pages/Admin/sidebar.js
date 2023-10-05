import React from "react";
import './css/sidebar.css'
const SideBar = () => {
    return (
        <div id="nav-bar"><input id="nav-toggle" type="checkbox" />
            <div id="nav-header"><a id="nav-title" href="/admin/dashboard"><i className="fa-solid fa-crop-simple"></i>&nbsp;DASHBOARD</a>
                <hr />
            </div>
            <div id="nav-content">
                <div id="tab-admin" className="nav-button active"><i className="fas fa-palette"></i><span>Admin</span></div>
                <div id="tab-cus" className="nav-button"><i className="fas fa-user"></i><span>Customer</span></div>
                <div id="tab-expert" className="nav-button"><i className="fas fa-user-tie"></i><span>Expert</span></div>
                <div id="tab-food" className="nav-button"><i className="fas fa-hand-holding-dollar"></i><span>Transactions</span></div>
                <hr />
                <div id="tab-recipe" className="nav-button"><i className="fas fa-utensils"></i><span>Recipe</span></div>
                <div id="tab-food" className="nav-button"><i className="fas fa-burger"></i><span>Food</span></div>
                <hr />


                <div id="nav-content-highlight"></div>
            </div><input id="nav-footer-toggle" type="checkbox" />
            <div id="nav-footer">
                <div id="nav-footer-heading">
                    <div className="nav-button"><i className="fas fa-magic"></i>&nbsp;&nbsp;&nbsp;<span>Admin</span></div>
                    {/* <div id="nav-footer-titlebox"><a id="nav-footer-title" href="#"></a><span id="nav-footer-subtitle">Admin</span></div><label for="nav-footer-toggle"><i className="fas fa-caret-up"></i></label> */}
                </div>
                {/* <div id="nav-footer-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div> */}
            </div>
        </div>
    )
}

export default SideBar