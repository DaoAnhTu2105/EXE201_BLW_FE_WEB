import React, { Fragment, useState, useEffect } from "react";
import Typography from '@mui/material/Typography'
import SideBar from "./sidebar";
import { useQuery } from "react-query";
import "./css/index.css"

const Admin = () => {


    const [selectedOption, setSelectedOption] = useState('incoming');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);

    };
    const styledSelect =
        selectedOption === 'success' ? { backgroundColor: "#48c78e" } : { backgroundColor: "#ffe08a" };

    return (
        <>

            <div className="container-admin">
                <div style={{ width: "20%" }}>
                    <SideBar />
                </div>
                <div style={{ margin: "55px ", width: "70%" }}>
                    <div style={{ backgroundColor: "#f3f6f4", height: "50px" }}>
                        <nav className="breadcrumb" aria-label="breadcrumbs" style={{ display: "flex", justifyContent: "start", alignItems: "center", height: "100%" }}>
                            <ul style={{ display: "flex", alignItems: "center", listStyle: "none", padding: "0", margin: 0 }}>
                                <li style={{ paddingLeft: "20px" }}><a className="bread-crumb" href="#">Home</a></li>
                                <li className="is-active"><a href="#" className="bread-crumb" aria-current="page">Admin</a></li>
                            </ul>
                        </nav>
                    </div>
                    <hr />
                    <div id="heading-title">
                        <p id="heading">Transactions</p>
                    </div>
                    <div>
                        <button disabled> All (3)</button>
                    </div>
                    <section class="ftco-section">
                        <div class="container-trans">
                            <div class="row-trans justify-content-center">
                                <div class="col-md-6 text-center mb-5">
                                    <h2 class="heading-section">Table #09</h2>
                                </div>
                            </div>
                            <div class="row-trans">
                                <div class="col-md-12-trans">
                                    <div class="table-wrap">
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Invoce</th>
                                                    <th>Customer</th>
                                                    <th>Ship</th>
                                                    <th>Price</th>
                                                    <th>Pruchased Price</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row-trans">1001</th>
                                                    <td>Mark Otto</td>
                                                    <td>Japan</td>
                                                    <td>$3000</td>
                                                    <td>$1200</td>

                                                    <td>
                                                        <div class="select is-rounded">
                                                            <select class="select is-rounded">
                                                                <option>
                                                                    <button class="button is-success">Success</button>
                                                                </option>

                                                                <option defaultValue>
                                                                    <button class="button is-danger">Incoming</button>
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr style={{ alignItems: "center" }}>
                                                    <th scope="row-trans">1001</th>
                                                    <td>Mark Otto</td>
                                                    <td>Japan</td>
                                                    <td>$3000</td>
                                                    <td>$1200</td>

                                                    <td>
                                                        <div>
                                                            <div class="select is-rounded" style={styledSelect}>
                                                                <select value={selectedOption} onChange={handleSelectChange} >
                                                                    <option value="success is-success" >Success</option>
                                                                    <option value="incoming is-warning">Incoming</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div >
                        </div>
                    </section>
                </div>
            </div >
        </>
    )
}
export default Admin