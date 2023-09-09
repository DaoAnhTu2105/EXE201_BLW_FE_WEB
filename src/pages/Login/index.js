import React from "react";
import "./index.css";

const Login = () => {
  return (
    <>
      <div className="login-grid">
        <div className="bg-image"></div>
        <div className="content">
          <div style={{ marginTop: 50 }}>
            <div>
              <h1 className="title" style={{ marginTop: 50 }}>
                Đăng Nhập
              </h1>
            </div>
            <div className="field" style={{ marginTop: 50 }}>
              <p className="control">
                <p style={{ marginBottom: 10 }}>Họ và tên</p>
                <input
                  className="input is-primary"
                  type="text"
                  placeholder="Nhập tên"
                  required
                  style={{ width: "400px", height: "50px" }}
                />
              </p>
            </div>
            <div className="field">
              <p className="control">
                <p style={{ marginBottom: 10 }}>Mật khẩu</p>
                <input
                  className="input is-primary"
                  type="password"
                  placeholder="Nhập mật khẩu"
                  required
                  style={{ width: "400px", height: "50px" }}
                />
              </p>
            </div>
            <div className="field" style={{ marginTop: 20 }}>
              <p className="control">
                <button className="button is-success">Đăng nhập</button>
              </p>
            </div>
            <div className="field" style={{ marginTop: 20 }}>
              <p>
                Bạn chưa có tài khoản?{" "}
                <span className="has-text-primary">Đăng kí</span>
              </p>
            </div>
            <div
              className="field"
              style={{
                textAlign: "center",
                marginTop: 20,
              }}
            >
              <p className="line-text-center">Hoặc</p>
            </div>

            <div className="field">
              <div className="button-container">
                <button className="google-button">Sign In with Google</button>
              </div>
            </div>
            <div className="field">
              <div className="button-container">
                <button className="facebook-button">
                  Log In with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
