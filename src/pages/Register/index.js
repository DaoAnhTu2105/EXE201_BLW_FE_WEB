import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./index.css";
const Register = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const baseUrl = `https://blw-api.azurewebsites.net/api/Customers/RegisPhone`;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, phone, password }),
      });
      if (response.status === 400) {
        const errorData = await response.json();
        await Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${errorData.errorMessage}`,
        });
      } else if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: "Đăng nhập thành công",
        });
        navigate("/login");
      }
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu đăng ký:", error);
    }
  };
  return (
    <>
      <div className="register-grid">
        <div className="bg-image"></div>
        <div className="content">
          <form style={{ marginTop: 50 }} onSubmit={handleSubmit}>
            <div>
              <h1 className="title" style={{ marginTop: 50 }}>
                Đăng kí
              </h1>
            </div>
            <div className="field" style={{ marginTop: 50 }}>
              <div className="control">
                <p style={{ marginBottom: 10 }}>Tên người dùng</p>
                <input
                  className="input is-primary"
                  type="text"
                  placeholder="Nhập tên"
                  required
                  style={{ width: "400px", height: "50px" }}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <p style={{ marginBottom: 10 }}>Số điện thoại</p>
                <input
                  className="input is-primary"
                  type="tel"
                  pattern="[0-9]{10}"
                  placeholder="Ví dụ: 0937550256"
                  required
                  style={{ width: "400px", height: "50px" }}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <p style={{ marginBottom: 10 }}>Mật khẩu</p>
                <input
                  className="input is-primary"
                  type="password"
                  placeholder="Nhập mật khẩu"
                  required
                  style={{ width: "400px", height: "50px" }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="field" style={{ marginTop: 20 }}>
              <div className="control">
                <button className="button is-success">Đăng kí</button>
              </div>
            </div>
            <div className="field" style={{ marginTop: 20 }}>
              <p>
                Bạn đã có tài khoản? &nbsp;
                <span className="has-text-primary">Đăng nhập</span>
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
                <button className="google-button">Đăng nhập với Google</button>
              </div>
            </div>
            <div className="field">
              <div className="button-container">
                <button className="facebook-button">
                  Đăng nhập bằng Facebook
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
