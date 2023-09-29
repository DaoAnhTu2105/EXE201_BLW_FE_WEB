import React from "react";
import "./css/login.css"
import imgLogo from "../../image/logo.jpg"
const AdminLogin = () => {
    return (
        <>

            <div className="columns" style={{ height: "100vh", margin: "0" }}>
                <div className="column is-5" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={imgLogo} style={{ width: 580, height: 580 }}></img>
                </div>
                <div className="column login-part">
                    <div style={{ display: "flex", justifyContent: "center", paddingTop: "200px" }}>
                        <div style={{ paddingTop: "10px" }}>
                            <div className="hamburger" style={{ marginBottom: "10px" }}></div>
                            <div className="hamburger-2" style={{ marginLeft: "10px" }}></div>
                        </div>
                        <div style={{ padding: "0px 10px 0 20px" }}>
                            <h2 style={{ fontFamily: "Nunito", fontSize: "30px" }}>Welcome to BLW for KIDS</h2>
                        </div>
                        <div style={{ paddingTop: "10px" }}>
                            <div className="hamburger-3" style={{ marginBottom: "10px" }}></div>
                            <div className="hamburger-4"  ></div>
                        </div>
                    </div>

                    <div style={{ display: "flex", alignContent: "center", margin: "0", justifyContent: "center" ,paddingTop:"50px"}}>
                        <p className="login-notice-p">Please login with your username and password!</p>
                    </div>

                    <div class="form-login-container">
                        <div class="centered-form column is-6 ">
                            <div style={{ alignContent: "center", margin: "0", justifyContent: "center" }}>
                                <div class="field column">
                                    <p class="control has-icons-left">
                                        <input class="input" type="email" placeholder="Enter Username"></input>
                                        <span class="icon is-small is-left">
                                            <i class="fa-solid fa-user"></i>
                                        </span>

                                    </p>
                                </div>
                                <div class="field column">
                                    <p class="control has-icons-left">
                                        <input class="input" type="password" placeholder="Enter Password"></input>
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-lock"></i>
                                        </span>
                                    </p>
                                </div>
                                <div class="buttons" style={{ justifyContent: "center", alignItems: "center", margin: "0" }}>
                                    <button class="button is-success" style={{ fontFamily: "Nunito", width: "200px", alignContent: "center", alignItems: "center" }}>Login</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminLogin;