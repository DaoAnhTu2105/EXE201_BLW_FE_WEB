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
    return (
        <>

            <div className="container-admin">
                <div style={{ width: "20%" }}>
                    <SideBar selectContent={handleSelectContent} />
                </div>
                <div style={{ margin: "55px ", width: "70%" }}>
                   
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