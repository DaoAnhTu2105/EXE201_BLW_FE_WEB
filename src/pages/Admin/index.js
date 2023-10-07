import React, { Fragment, useState, useEffect } from "react";
import SideBar from "./sidebar";
import { useQuery } from "react-query";
import "./css/index.css"
import Transactions from "./transactions";
import CustomersManager from "./customers";
import RecipesManager from "./recipes";
import FoodsManager from "./foods";
import ExpertManager from "./experts";
import { Link } from "react-router-dom";
const Admin = () => {
    const [selectedContentBread, setSelectedContentBread] = useState('Khách hàng')

    const handleSelectContent = (content) => {
        setSelectedContentBread(content)
    }
    console.log(selectedContentBread)
    return (
        <>

            <div className="container-admin">
                <div style={{ width: "20%" }}>
                    <SideBar selectContent={handleSelectContent} />
                </div>
                <div style={{ margin: "55px ", width: "70%" }}>
                    <div style={{ backgroundColor: "#f3f6f4", height: "50px" }}>
                        <nav className="breadcrumb" aria-label="breadcrumbs" style={{ display: "flex", justifyContent: "start", alignItems: "center", height: "100%" }}>
                            <ul style={{ display: "flex", alignItems: "center", listStyle: "none", padding: "0", margin: 0 }}>
                                <li style={{ paddingLeft: "20px" }}><a className="bread-crumb" href="/admin/dashboard">Home</a></li>
                                <li className="is-active"><a href="#" className="bread-crumb" aria-current="page">{selectedContentBread}</a></li>
                            </ul>
                        </nav>
                    </div>
                    <hr style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }} />
                    <div id="heading-title">
                        <p id="heading" >{selectedContentBread}</p>
                    </div>
                    <div>
                        <button disabled className="button is-rounded" style={{ border: "1px solid black" }}> All (3)</button>
                    </div>
                    <section className="ftco-section" style={selectedContentBread === 'Giao dịch' ? {} : { display: 'none' }}>
                        <Transactions />
                    </section>

                    <section className="ftco-section" style={selectedContentBread === 'Khách hàng' ? {} : { display: 'none' }}>
                        <CustomersManager />
                    </section>
                    {/* <section className="ftco-section">
                        <RecipesManager />
                    </section>
                    <section className="ftco-section">
                        <FoodsManager />
                    </section> */}
                    <section className="ftco-section" style={selectedContentBread === 'Chuyên gia' ? {} : { display: 'none' }}>
                        <ExpertManager />
                    </section>
                </div>
            </div >
        </>
    )
}
export default Admin