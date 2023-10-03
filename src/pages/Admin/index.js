import React, { Fragment, useState, useEffect } from "react";
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import SideBar from "./sidebar";
import { useQuery } from "react-query";
import "./css/index.css"

const Admin = () => {
    useQuery()
    return (
        <>

            <div className="container-admin">
                <div style={{ width: "20%" }}>
                    <SideBar />
                </div>
                <div style={{ margin: "55px ", width: "70%" }}>
                    <div style={{ backgroundColor: "#f3f6f4", height: "50px" }}>
                        <nav className="breadcrumb" aria-label="breadcrumbs" style={{ display: "flex", justifyContent: "start", alignItems: "center", height: "100%" }}>
                            <ul style={{ display: "flex", alignItems: "center", listStyle: "none", padding: 0, margin: 0 }}>
                                <li><a className="bread-crumb" href="#">Home</a></li>
                                <li className="is-active"><a href="#" className="bread-crumb" aria-current="page">Admin</a></li>
                            </ul>

                        </nav>
                    </div>
                </div >
                <div>

                </div>
            </div >

        </>
    )
}
export default Admin