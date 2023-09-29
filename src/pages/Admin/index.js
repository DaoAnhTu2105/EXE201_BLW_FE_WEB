import React, { Fragment, useState, useEffect } from "react";
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import SideBar from "./sidebar";
import "./css/index.css"
const Admin = () => {
    return (
        <>

            <div className="container-admin">

                <SideBar />
            </div>

        </>
    )
}
export default Admin