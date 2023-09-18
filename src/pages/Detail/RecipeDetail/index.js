import React, { useState } from "react";
import { Rating } from "@mui/material";
import recipe from "../../../image/recipe2.jpg";
import "./recipeDetail.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCrown,
//   faChevronRight,
//   faDisplay,
//   faFire,
// } from "@fortawesome/free-solid-svg-icons";
// import { faAdversal, faJs } from "@fortawesome/free-brands-svg-icons";

const RecipeDetail = () => {
  //  const [buttonVip, setButtonVip] = useState(false);
  return (
    <div className="container is-widescreen mt-5 mb-5">
      <h2 className="title is-2 has-text-primary">
        Cơm khuôn, tôm hấp, bông cải xanh, chuối
      </h2>
      <p className="subtitle is-5 mt-1">Ngày cập nhật: 13/9/2023</p>
      <p className="subtitle is-5 mt-1">
        Thực đơn được thực hiện bởi: &nbsp;
        <span className="has-text-primary" style={{ fontWeight: "bold" }}>
          Đào Anh Tú
        </span>
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <Rating
          name="half-rating-read"
          defaultValue={3.5}
          precision={0.5}
          readOnly
          size="large"
        />
        <span className="subtitle is-4 pl-5">4.5/5 ratings</span>
      </div>
      <div className="mb-5">
        <div className="mt-5">
          <h4 className="subtitle is-4 has-text-primary">
            Khẩu phần ăn: &nbsp;
            <span className="title is-5 ">1 phần.</span>
          </h4>
        </div>
        <div className="mt-5">
          <h4 className="subtitle is-4 has-text-primary">
            Thích hợp: &nbsp;
            <span className="title is-5">Với trẻ 6 tháng +</span>
          </h4>
        </div>
        <div className="mt-5">
          <h4 className="subtitle is-4 has-text-primary">
            Thời gian chuẩn bị: &nbsp;
            <span className="title is-5">30 phút.</span>
          </h4>
        </div>
        <div className="mt-5">
          <h4 className="subtitle is-4 has-text-primary">
            Thời gian nấu: &nbsp;
            <span className="title is-5">10 - 20 phút.</span>
          </h4>
        </div>
        <div className="mt-5">
          <h4 className="subtitle is-4 has-text-primary">
            Thời gian nấu: &nbsp;
            <span className="title is-5">20 - 30 phút.</span>
          </h4>
        </div>
      </div>
      <p>
        Ăn dặm chỉ huy (BLW - Baby Led Weaning) là phương pháp ăn dặm cho phép
        trẻ tự quyết định món ăn và cách ăn theo ý mình. Trẻ có thể bốc bằng
        tay, dùng thìa, dĩa để ăn mà không có sự trợ giúp của bố mẹ. Phương pháp
        này cũng giúp trẻ tăng vận động, rèn luyện sự linh hoạt, cách xử lý và
        tiếp nhận thức ăn một cách chủ động, giúp cho sự phát triển sau này của
        trẻ được tốt hơn.
      </p>
      <div style={{ textAlign: "center" }}>
        <img src={recipe} alt="" className="img-recipe-detail" />
      </div>
      <div className="mt-5">
        <h4 className="title is-4 has-text-primary">Nguyên liệu chuẩn bị: </h4>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li className="list-item-ingredients">Khuôn ép sushi.</li>
          <li className="list-item-ingredients">Cơm trắng.</li>
          <li className="list-item-ingredients">5 con tôm tươi.</li>
          <li className="list-item-ingredients">30g bông cải xanh.</li>
          <li className="list-item-ingredients">1 thìa cà phê dầu oliu.</li>
        </ul>
      </div>
      <div className="mt-5">
        <h4 className="title is-4 has-text-primary">Các bước thực hiện: </h4>
        <ol style={{ paddingLeft: "20px" }} type="1">
          <li className="list-item-ingredients">
            Cho cơm nấu chín vào khuôn và cuộn vừa với miệng bé.
          </li>
          <li className="list-item-ingredients">
            Tôm rửa sạch, cắt chỉ lưng, hấp và lột sạch vỏ.
          </li>
          <li className="list-item-ingredients">
            Bông cải xanh tách ra nhỏ và luộc.
          </li>
          <li className="list-item-ingredients">
            Cho bé tráng miệng bằng 1 hoặc ½ quả chuối.
          </li>
          <li className="list-item-ingredients">
            Đây là thực đơn ăn dặm tự chỉ huy vừa ngon vừa đơn giản mẹ nào cũng
            có thể làm được.
          </li>
        </ol>
      </div>
      <div>
        <h3 className="title is-3 has-text-primary">Bình luận: </h3>
        <div className="box" style={{ width: "600px" }}>
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt=""
                />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>Đào Anh Tú</strong> &nbsp;{" "}
                  <span>Xóa bình luận (chỉnh qua icon sau)</span>
                  <div>
                    <Rating
                      name="half-rating-read"
                      defaultValue={3.5}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                  </div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean efficitur sit amet massa fringilla egestas. Nullam
                  condimentum luctus turpis.
                </p>
              </div>
              <nav className="level is-mobile">
                <div className="level-left">
                  <a className="level-item" aria-label="reply" href="/">
                    <span className="icon is-small">
                      <i className="fas fa-reply" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a className="level-item" aria-label="retweet" href="/">
                    <span className="icon is-small">
                      <i className="fas fa-retweet" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a className="level-item" aria-label="like" href="/">
                    <span className="icon is-small">
                      <i className="fas fa-heart" aria-hidden="true"></i>
                    </span>
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </div>
      </div>
      <div style={{ marginTop: "80px" }}>
        <article className="media mt-5">
          <figure className="media-left">
            <p className="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" />
            </p>
          </figure>
          <div className="media-content">
            <strong className="pl-2">Đào Anh Tú</strong>
            <div className="mt-2 mb-2">
              <Rating
                name="half-rating-read"
                defaultValue={3.5}
                precision={0.5}
                readOnly
                size="large"
              />
            </div>

            <div className="field">
              <p className="control">
                <textarea
                  className="textarea"
                  placeholder="Ghi bình luận tại đây..."
                ></textarea>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button">Đăng bình luận</button>
              </p>
            </div>
          </div>
        </article>
      </div>
      {/* <div className="mt-5">
        <button
          className="button is-warning"
          onMouseOver={() => setButtonVip(true)}
          // onMouseOut={() => setButtonVip(false)}
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <div>
            <FontAwesomeIcon icon={faCrown} />
            &nbsp; &nbsp;
            <span className="title is-6">VIP</span>
          </div>
        </button>
      </div>
      {buttonVip && (
        <>
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              marginTop: 5,
              width: 410,
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: 5,
                alignItems: "center",
                paddingLeft: "30px",
                paddingRight: "30px",
                paddingBottom: 10,
              }}
            >
              <p
                className="title is-6 mb-0"
                style={{ color: "rgba(245, 245, 245, 0.8)" }}
              >
                Quyền lợi thành viên
              </p>
              <div>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "rgba(245, 245, 245, 0.8)" }}
                />
              </div>
            </div>
            <div style={{ marginTop: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "rgba(251, 227, 0, 0.2)",
                      width: 30,
                      height: 25,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faDisplay}
                      style={{
                        color: "rgba(251, 227, 0, 0.8)",
                        paddingLeft: 6,
                      }}
                    />
                  </div>
                  &nbsp;
                  <span
                    className="subtitle is-6 mb-0"
                    style={{ color: "rgba(245, 245, 245, 0.8)" }}
                  >
                    Hỗ trợ đa nền tảng
                  </span>
                </div>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "rgba(251, 227, 0, 0.2)",
                      width: 30,
                      height: 25,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faJs}
                      style={{
                        color: "rgba(251, 227, 0, 0.8)",
                        paddingLeft: 7,
                      }}
                    />
                  </div>
                  &nbsp;
                  <span
                    className="subtitle is-6 mb-0"
                    style={{ color: "rgba(245, 245, 245, 0.8)" }}
                  >
                    1080P
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", paddingLeft: 50, marginTop: 20 }}>
                <div style={{ display: "flex", width: 140, marginLeft: 5 }}>
                  <div
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "rgba(251, 227, 0, 0.2)",
                      width: 35,
                      height: 25,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faFire}
                      style={{
                        color: "rgba(251, 227, 0, 0.8)",
                        paddingLeft: 6,
                      }}
                    />
                  </div>
                  &nbsp;
                  <span
                    className="subtitle is-6 mb-0"
                    style={{ color: "rgba(245, 245, 245, 0.8)" }}
                  >
                    Nội dung độc quyền
                  </span>
                </div>
                <div style={{ display: "flex", width: 140, marginLeft: 95 }}>
                  <div
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "rgba(251, 227, 0, 0.2)",
                      width: 35,
                      height: 25,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faAdversal}
                      style={{
                        color: "rgba(251, 227, 0, 0.8)",
                        paddingLeft: 7,
                      }}
                    />
                  </div>
                  &nbsp;
                  <span
                    className="subtitle is-6 mb-0"
                    style={{ color: "rgba(245, 245, 245, 0.8)" }}
                  >
                    Không quảng cáo
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-5" style={{ textAlign: "center" }}>
              <button
                class="button is-warning"
                style={{ color: "black", width: 300 }}
              >
                Đăng kí VIP, tận hưởng nội dung,...
              </button>
            </div>
            <div
              className="mt-5"
              style={{ textAlign: "center", paddingBottom: 20 }}
            >
              <h6
                class="subtitle is-6 is-warning"
                style={{ color: "rgba(245, 245, 245, 0.8)" }}
              >
                Mã đổi quà
              </h6>
            </div>
          </div>
        </>
      )} */}
    </div>
  );
};

export default RecipeDetail;
