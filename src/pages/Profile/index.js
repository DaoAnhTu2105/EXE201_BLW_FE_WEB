import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faMoneyCheck,
  faPhoneAlt,
  faCog,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Rating } from "@mui/material";
import img from "../../image/recipe2.jpg";
import "./index.css";
import CircularProgress from "@mui/material/CircularProgress";
import Swal from "sweetalert2";
import { format } from "date-fns";

const Profile = () => {
  const [active, setActive] = useState("account");
  const [dataAccount, setDataAccount] = useState([]);
  const [changeEmail, setChangeEmail] = useState("");
  const [changePhone, setChangePhone] = useState("");
  const [changeAvatar, setChangeAvatar] = useState(img);
  const [changeDateOfBirth, setChangeDateOfBirth] = useState("");
  const [gender, setGender] = useState(1);
  const [fullname, setFullname] = useState("");
  const accountApi = `https://blw-api.azurewebsites.net/api/Customers/GetInfo`;
  const updateInfo = `https://blw-api.azurewebsites.net/api/Customers/UpdateInfo`;
  const user = JSON.parse(localStorage.getItem("user"));
  const handleActive = (item) => {
    setActive(item);
  };

  const getAccountApi = () => {
    fetch(accountApi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setDataAccount(data);
        setFullname(data?.data?.fullname || "");
        setChangeDateOfBirth(data?.data?.dateOfBirth || "");
        setChangePhone(data?.data?.phoneNum || "");
        setGender(data?.data?.gender || "");
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const handleGenderChange = (value) => {
    setGender(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(updateInfo, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          email: changeEmail,
          fullname: fullname,
          avatar: changeAvatar,
          dateOfBirth: changeDateOfBirth,
          gender: gender,
          phoneNum: changePhone,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("data cap nhat: ", responseData);
        await Swal.fire({
          icon: "success",
          title: "Cập nhật thành công",
        });
        getAccountApi();
      } else {
        console.log("Cập nhật thất bại!!!");
      }
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };

  useEffect(() => {
    getAccountApi();
  }, []);

  return (
    <div className="container is-max-widescreen mt-5 mb-5">
      <div className="columns">
        <div
          className="column is-one-quarter"
          style={{
            border: "2px solid hsl(171, 100%, 41%)",
            borderRadius: "10px",
            width: "267px",
            height: "380px",
          }}
        >
          <h4 className="title is-4">Thông tin tài khoản</h4>
          <ul>
            <li
              style={{
                display: "flex",
                cursor: "pointer",
              }}
              onClick={() => handleActive("account")}
            >
              <FontAwesomeIcon
                icon={faUser}
                size="lg"
                className="has-text-primary"
              />
              <span
                className="title is-5 pl-4"
                style={{
                  color: active === "account" ? "hsl(171, 100%, 41%)" : "",
                }}
              >
                Tài khoản
              </span>
            </li>
            <hr className="is-divider mt-3 mb-3" />
            <li
              style={{
                display: "flex",
                cursor: "pointer",
              }}
              onClick={() => handleActive("favorite")}
            >
              <FontAwesomeIcon
                icon={faHeart}
                size="lg"
                className="has-text-primary"
              />
              <span
                className="title is-5 pl-4"
                style={{
                  color: active === "favorite" ? "hsl(171, 100%, 41%)" : "",
                }}
              >
                Yêu thích
              </span>
            </li>
            <hr className="is-divider mt-3 mb-3" />
            <li
              style={{
                display: "flex",
                cursor: "pointer",
              }}
              onClick={() => handleActive("premium")}
            >
              <FontAwesomeIcon
                icon={faMoneyCheck}
                size="lg"
                className="has-text-primary"
              />
              <span
                className="title is-5 pl-4"
                style={{
                  color: active === "premium" ? "hsl(171, 100%, 41%)" : "",
                }}
              >
                Gói cao cấp
              </span>
            </li>
            <hr className="is-divider mt-3 mb-3" />
            <a
              href="https://www.facebook.com/profile.php?id=100095496554189&mibextid=LQQJ4d"
              target="_blank"
              rel="noreferrer"
            >
              <li
                style={{
                  display: "flex",
                  cursor: "pointer",
                }}
              >
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  size="lg"
                  className="has-text-primary"
                />
                <span
                  className="title is-5 pl-4"
                  style={{
                    color: active === "contact" ? "hsl(171, 100%, 41%)" : "",
                  }}
                >
                  Liên hệ
                </span>
              </li>
            </a>

            <hr className="is-divider mt-3 mb-3" />
            <li
              style={{
                display: "flex",
                cursor: "pointer",
              }}
              onClick={() => handleActive("setting")}
            >
              <FontAwesomeIcon
                icon={faCog}
                size="lg"
                className="has-text-primary"
              />
              <span
                className="title is-5 pl-4"
                style={{
                  color: active === "setting" ? "hsl(171, 100%, 41%)" : "",
                }}
              >
                Cài đặt
              </span>
            </li>
            <hr className="is-divider mt-3 mb-3" />
            <li
              style={{
                display: "flex",
                cursor: "pointer",
              }}
              onClick={() => handleActive("help")}
            >
              <FontAwesomeIcon
                icon={faQuestionCircle}
                size="lg"
                className="has-text-primary"
              />
              <span
                className="title is-5 pl-4"
                style={{
                  color: active === "help" ? "hsl(171, 100%, 41%)" : "",
                }}
              >
                Trợ giúp & FAQS
              </span>
            </li>
          </ul>
        </div>
        <div>
          {active === "account" ? (
            !dataAccount.data ? (
              <div
                style={{
                  paddingLeft: 15,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 300,
                  height: "50vh",
                }}
              >
                <CircularProgress />
              </div>
            ) : (
              <form style={{ paddingLeft: 15 }} onSubmit={handleSubmit}>
                <h2 className="title is-2">Thông tin cá nhân</h2>
                <h6 className="title is-6">
                  Đây là chi tiết thông tin cá nhân của bạn vui lòng không chia
                  sẻ cho người lạ.
                </h6>
                <div className="field" style={{ width: 700 }}>
                  <label className="label">Tên tài khoản</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      value={fullname}
                      required
                      onChange={(e) => setFullname(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mt-5 mb-5">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      checked={gender === 1}
                      onChange={() => handleGenderChange(1)}
                    />
                    Nam
                  </label>
                  <label className="ml-5">
                    <input
                      type="radio"
                      name="gender"
                      checked={gender === 2}
                      onChange={() => handleGenderChange(2)}
                    />
                    Nữ
                  </label>
                </div>

                <div className="field" style={{ width: 700 }}>
                  <label className="label">Email</label>
                  <div className="control">
                    {dataAccount.data.email ? (
                      <input
                        className="input"
                        type="email"
                        value={dataAccount.data.email}
                        readOnly
                      />
                    ) : (
                      <input
                        className="input"
                        type="email"
                        value={changeEmail}
                        onChange={(e) => setChangeEmail(e.target.value)}
                      />
                    )}
                  </div>
                </div>

                <div className="field" style={{ width: 700 }}>
                  <label className="label">Ngày tháng năm sinh</label>
                  <div className="control">
                    <input
                      className="input"
                      type="date"
                      value={
                        dataAccount.data.dateOfBirth
                          ? format(new Date(changeDateOfBirth), "yyyy-MM-dd")
                          : changeDateOfBirth
                      }
                      onChange={(e) => setChangeDateOfBirth(e.target.value)}
                    />
                  </div>
                </div>

                <div className="field" style={{ width: 700 }}>
                  <label className="label">Số điện thoại</label>
                  <div className="control">
                    {dataAccount.data.phoneNum ? (
                      <input
                        className="input"
                        type="tel"
                        pattern="[0-9]{10}"
                        placeholder="e.g. 09XXXXXXX"
                        value={dataAccount.data.phoneNum}
                        readOnly
                      />
                    ) : (
                      <input
                        className="input"
                        type="tel"
                        pattern="[0-9]{10}"
                        value={changePhone}
                        placeholder="e.g. 09XXXXXXX"
                        onChange={(e) => setChangePhone(e.target.value)}
                      />
                    )}
                  </div>
                </div>
                <div className="buttons">
                  <button className="button is-primary">Save changes</button>
                  <button className="button is-link">Cancel</button>
                </div>
              </form>
            )
          ) : active === "favorite" ? (
            <div style={{ paddingLeft: 15 }}>
              <h2 className="title is-2 mb-5">Thực đơn yêu thích của bạn</h2>
              <div
                className="grid-container"
                style={{
                  marginBottom: 20,
                }}
              >
                {Array.from({ length: 8 }).map((_, index) => (
                  <div className="grid-item" key={index}>
                    <div
                      className="card"
                      style={{ width: "300px", height: "350px" }}
                    >
                      <div className="card-image">
                        <figure className="image is-3by2">
                          <img src={img} alt="Placeholder" />
                        </figure>
                      </div>
                      <div className="card-content">
                        <div className="media">
                          <div className="media-content">
                            <p
                              className="title is-5"
                              style={{
                                marginBottom: 10,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                              }}
                            >
                              <span
                                style={{
                                  width: "160px",
                                  height: "23px",
                                  overflow: "hidden",
                                }}
                              >
                                Thực đơn {index + 1}
                              </span>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              <button
                                className="button is-primary"
                                style={{
                                  borderRadius: "50%",
                                  width: "10px",
                                  height: "30px",
                                }}
                              >
                                <FontAwesomeIcon icon={faHeart} />
                              </button>
                            </p>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <Rating
                                name={`half-rating-read-${index}`}
                                defaultValue={4.5}
                                precision={0.5}
                                readOnly
                                size="small"
                              />
                              &nbsp; &nbsp;
                              <span>4.5/5</span>
                            </div>
                            <div style={{ textAlign: "center" }}>
                              <button className="button is-warning is-light mt-2">
                                Remove recipe
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : active === "premium" ? (
            <div style={{ paddingLeft: 15 }}>
              <h2 className="subtitle is-2">Chi tiết gói</h2>
              <div className="notification is-primary is-light">
                Bạn đã mua gói 365 ngày vào lúc <strong>12h</strong> ngày
                <strong>17/9/2023</strong>, gói sẽ hết hạn vào lúc
                <strong>12h</strong> ngày <strong> 17/9/2024 </strong>
              </div>
              <h4 className="subtitle is-4">Lịch sử mua hàng</h4>
              <div className="table-container">
                <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                  <thead>
                    <tr>
                      <th>Ngày mua hàng</th>
                      <th>Thời gian mua</th>
                      <th>Tên gói</th>
                      <th>Mệnh giá</th>
                      <th>Ngày hết hạn</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <td>17/9/2023</td>
                      <td>12:59:100</td>
                      <td>Tên gói 1</td>
                      <td>90000 VNĐ</td>
                      <td>17/9/2024</td>
                    </tr>
                    <tr>
                      <td>17/9/2023</td>
                      <td>12:59:100</td>
                      <td>Tên gói 1</td>
                      <td>90000 VNĐ</td>
                      <td>17/9/2024</td>
                    </tr>
                    <tr>
                      <td>17/9/2023</td>
                      <td>12:59:100</td>
                      <td>Tên gói 1</td>
                      <td>90000 VNĐ</td>
                      <td>17/9/2024</td>
                    </tr>
                    <tr>
                      <td>17/9/2023</td>
                      <td>12:59:100</td>
                      <td>Tên gói 1</td>
                      <td>90000 VNĐ</td>
                      <td>17/9/2024</td>
                    </tr>
                    <tr>
                      <td>17/9/2023</td>
                      <td>12:59:100</td>
                      <td>Tên gói 1</td>
                      <td>90000 VNĐ</td>
                      <td>17/9/2024</td>
                    </tr>
                    <tr>
                      <td>17/9/2023</td>
                      <td>12:59:100</td>
                      <td>Tên gói 1</td>
                      <td>90000 VNĐ</td>
                      <td>17/9/2024</td>
                    </tr>
                    <tr>
                      <td>17/9/2023</td>
                      <td>12:59:100</td>
                      <td>Tên gói 1</td>
                      <td>90000 VNĐ</td>
                      <td>17/9/2024</td>
                    </tr>
                    <tr>
                      <td>17/9/2023</td>
                      <td>12:59:100</td>
                      <td>Tên gói 1</td>
                      <td>90000 VNĐ</td>
                      <td>17/9/2024</td>
                    </tr>
                    <tr>
                      <td>17/9/2023</td>
                      <td>12:59:100</td>
                      <td>Tên gói 1</td>
                      <td>90000 VNĐ</td>
                      <td>17/9/2024</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          ) : (
            <h1>No</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
