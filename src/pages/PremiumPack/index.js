import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import "./index.scss";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/system";
import { Modal } from "@mui/base/Modal";
import Fade from "@mui/material/Fade";
import { Button } from "@mui/base/Button";
import Grid from "@mui/material/Grid";
import momoLogo from "../../image/png/momo_icon_square_pinkbg@3x.png";
import { useQuery } from "react-query";
import axios from "axios";
import QRCode from "react-qr-code";
import base64js from "base64-js";

function decodeBase64(base64String) {
  const bytes = base64js.toByteArray(base64String);
  const decodedString = new TextDecoder("utf-8").decode(new Uint8Array(bytes));
  return decodedString;
}
const PremiumPack = () => {
  //-------------------Authenticate-----------------------------

  const user = JSON.parse(localStorage.getItem("user"));
  const accessToken = user?.token;

  const [open, setOpen] = React.useState(false);

  const paymentURL = `https://blw-api.azurewebsites.net/api/Payments/Get?id=175c31954b1c496b9ffc`;

  const { data, isLoading, isError } = useQuery("paymentAPI", () =>
    fetch(paymentURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => response.json())
  );

  const handleOpen = () => {
    setOpen(true);
    console.log(data);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        className="pack-container"
        style={{
          width: "70%",
          paddingLeft: "200px",
          paddingRight: "200px",
          backgroundColor: "#eeeeee",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          <div className="pack-table">
            <table className="table is-striped ">
              <thead>
                <tr>
                  <th>Quyền Lợi Thành Viên</th>
                  <th>Miễn Phí</th>
                  <th>Tiêu Chuẩn</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bỏ Qua Quảng Cáo</td>
                  <td>-</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{
                        fontSize: "1.3rem",
                        color: " #33c4b6",
                        marginRight: "3px",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Xem thực đơn bữa ăn</td>
                  <td>-</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{
                        fontSize: "1.3rem",
                        color: " #33c4b6",
                        marginRight: "3px",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td> 300+ thực đơn cho bé</td>
                  <td>-</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{
                        fontSize: "1.3rem",
                        color: " #33c4b6",
                        marginRight: "3px",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Xem thực đơn bữa ăn</td>
                  <td>-</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{
                        fontSize: "1.3rem",
                        color: " #33c4b6",
                        marginRight: "3px",
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          style={{
            paddingTop: "50px",
            display: "flex",
            justifyContent: "center",
            paddingRight: "25px",
          }}
        >
          <div className="package-1" onClick={handleOpen}>
            <div className="name">Gói tháng</div>
            <div className="price-for-month">49.000đ</div>
            <div className="trial">Sau tháng đầu tiên 120.000đ</div>
            <hr />
          </div>
          <div className="package-2">
            <div className="name">Gói nửa năm</div>
            <div className="price-for-6-month">499.000đ</div>
            <div className="trial">7 ngày dùng thử miễn phí</div>
            <hr />
          </div>
        </div>
      </div>

      <div>
        <StyledModal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: StyledBackdrop }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <div style={{ display: "flex" }}>
                <img
                  style={{ width: 32, height: 32 }}
                  src={momoLogo}
                  alt=""
                ></img>
                <div style={{ margin: " auto 0", paddingLeft: "20px" }}>
                  <h2 id="transition-modal-title">Thanh toán bằng ví MoMo</h2>
                </div>

                <hr />
              </div>

              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={5}>
                    <div
                      style={{ height: "auto", maxWidth: 250, width: "100%" }}
                    >
                      {/* {data && <QRCode size={500}
                                                style={{ height: "auto", maxWidth: "100%", width: "100%" }} value={data} />} */}
                      {data && (
                        <img
                          src={`data:image/jpeg;base64,${data.imageQR.fileContents}`}
                        />
                      )}
                    </div>
                  </Grid>
                  <Grid item xs={6} md={7}>
                    <h4
                      style={{
                        margin: "0px 0px 20px",
                        fontSize: "20px",
                        fontWeight: 500,
                        color: "rgb(36, 36, 36)",
                      }}
                    >
                      Quét mã QR để thanh toán
                    </h4>
                    <div className="step-description">
                      <span className="step-number">1</span>
                      <p>
                        Mở <b>ứng dụng MoMo</b> trên điện thoại
                      </p>
                    </div>
                    <div className="step-description">
                      <span className="step-number">2</span>
                      <p>
                        Trên MoMo, chọn biểu tượng
                        <img
                          style={{ margin: "0 5px", width: 24, height: 24 }}
                          src="https://salt.tikicdn.com/ts/upload/03/74/d4/01670f7f9e6a3c86583939eb2494e9cf.png"
                          alt="icon"
                        ></img>
                        <b>Quét mã QR</b>
                      </p>
                    </div>

                    <div className="step-description">
                      <span className="step-number">3</span>
                      <p>Quét mã QR ở trang này và thanh toán</p>
                    </div>
                  </Grid>
                  <button
                    className="button is-success"
                    style={{
                      position: "absolute",
                      bottom: "50px",
                      right: "50px",
                      color: "white",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "15px",
                      cursor: "pointer",
                    }}
                  >
                    Tôi đã thanh toán
                  </button>
                </Grid>
              </Box>
            </Box>
          </Fade>
        </StyledModal>
      </div>
    </>
  );
};

export default PremiumPack;
const Backdrop = React.forwardRef((props, ref) => {
  const { open, ...other } = props;
  return (
    <Fade in={open}>
      <div ref={ref} {...other} />
    </Fade>
  );
});

Backdrop.propTypes = {
  open: PropTypes.bool,
};

const blue = {
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height: 500,
  borderRadius: "12px",
  padding: "16px 32px 24px 32px",
  backgroundColor: theme.palette.mode === "dark" ? "#0A1929" : "white",
  boxShadow: `0px 2px 24px ${
    theme.palette.mode === "dark" ? "#000" : "#383838"
  }`,
});

const TriggerButton = styled(Button)(
  ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    box-sizing: border-box;
    min-height: calc(1.5em + 22px);
    border-radius: 12px;
    padding: 6px 12px;
    line-height: 1.5;
    background: transparent;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[100] : grey[900]};
  
    &:hover {
      background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
    }
  
    &:focus-visible {
      border-color: ${blue[400]};
      outline: 3px solid ${
        theme.palette.mode === "dark" ? blue[500] : blue[200]
      };
    }
    `
);
