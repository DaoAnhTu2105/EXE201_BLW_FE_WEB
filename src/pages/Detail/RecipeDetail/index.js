import React, { useState } from "react";
import { Rating } from "@mui/material";
import recipe from "../../../image/recipe2.jpg";
import { Link, useParams } from "react-router-dom";
import "./recipeDetail.css";
import { useQuery, useMutation } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const RecipeDetail = () => {
  const { id } = useParams();
  //Chờ dữ liệu chính thức rồi thêm vào
  const detailUrl = `https://blw-api.azurewebsites.net/api/Recipe/GetRecipe?id=${id}`;
  const ratingUrl = `https://blw-api.azurewebsites.net/api/Rating/GetAll`;
  const upCommentUrl = `https://blw-api.azurewebsites.net/api/Rating/AddRating`;

  const [userRate, setUserRate] = useState(0);
  const [userComment, setUserComment] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const username = user?.data?.fullname;
  const useravatar = user?.data?.avatar;
  const { data: detailRecipe, isLoading: detailLoading } = useQuery(
    "detail-recipe",
    () => fetch(detailUrl).then((response) => response.json())
  );
  const { data: rating, isLoading: ratingLoading } = useQuery(
    "rating-recipe",
    () => fetch(ratingUrl).then((response) => response.json())
  );
  const { mutate: postComment } = useMutation(({ data }) =>
    fetch(upCommentUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ data }),
    }).then((res) => res.json())
  );
  const handleComment = () => {
    if (userRate === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Rate không được để trống",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    } else {
      fetch(upCommentUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          fullname: username,
          avatar: useravatar,
          rate: userRate,
          comment: userComment,
          ratingImage: "",
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {})
        .catch((error) => {
          console.error("Error during fetch:", error);
        });
    }
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://blw-api.azurewebsites.net/api/Rating/DeleteRating?recipeId=${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          })
          .catch((error) => {
            console.error("Error during fetch:", error);
          });
      }
    });
  };

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
          <h4 className="title is-5 has-text-primary">
            Khẩu phần ăn: &nbsp;
            <span className="subtitle is-5 ">1 phần.</span>
          </h4>
        </div>
        <div className="mt-5">
          <h4 className="title is-5 has-text-primary">
            Thích hợp: &nbsp;
            <span className="subtitle is-5">Với trẻ 6 tháng trở lên.</span>
          </h4>
        </div>
        <div className="mt-5">
          <h4 className="title is-5 has-text-primary">
            Thời gian chuẩn bị: &nbsp;
            <span className="subtitle is-5">30 phút.</span>
          </h4>
        </div>
        <div className="mt-5">
          <h4 className="title is-5 has-text-primary">
            Thời gian nấu: &nbsp;
            <span className="subtitle is-5">10 - 20 phút.</span>
          </h4>
        </div>
        <div className="mt-5">
          <h4 className="title is-5 has-text-primary">
            Thời gian nấu: &nbsp;
            <span className="subtitle is-5">20 - 30 phút.</span>
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
        <h3 className="title is-4 has-text-primary">Bình luận: </h3>
        {detailRecipe &&
          detailRecipe.data.ratingVMs.map((rate) => (
            <div
              className="box"
              style={{ width: "600px" }}
              key={rate.customerId}
            >
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={rate.avatar} alt="" />
                  </figure>
                </div>
                <div className="media-content">
                  <div>
                    <p>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <strong>{rate.fullname}</strong> &nbsp;
                        <FontAwesomeIcon
                          icon={faTrash}
                          style={{ cursor: "pointer" }}
                          onClick={() => handleDelete(rate.recipeId)}
                        />
                      </div>

                      <div>
                        <Rating
                          name="half-rating-read"
                          defaultValue={rate.rate}
                          precision={0.5}
                          readOnly
                          size="small"
                        />
                      </div>
                      {rate.comment}
                    </p>
                  </div>
                  <nav className="level is-mobile mt-2">
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
          ))}
      </div>
      {user ? (
        <div style={{ marginTop: "80px" }}>
          <article className="media mt-5">
            <figure className="media-left">
              <p className="image is-64x64">
                <img src={user.data.avatar} />
              </p>
            </figure>
            <div className="media-content">
              <strong className="pl-2">{user.data.fullname}</strong>
              <div className="mt-2 mb-2">
                <Rating
                  name="half-rating-read"
                  value={userRate}
                  precision={0.5}
                  size="large"
                  onChange={(event, newValue) => setUserRate(newValue)}
                />
              </div>

              <div className="field">
                <p className="control">
                  <textarea
                    className="textarea"
                    placeholder="Ghi bình luận tại đây..."
                    value={userComment}
                    onChange={(e) => setUserComment(e.target.value)}
                  ></textarea>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <button className="button" onClick={handleComment}>
                    Đăng bình luận
                  </button>
                </p>
              </div>
            </div>
          </article>
        </div>
      ) : (
        <div
          className="container is-max-desktop text-center"
          style={{ marginTop: 40 }}
        >
          <div className="notification is-primary notification is-primary is-light">
            <Link to="/login">
              <strong>Đăng nhập</strong>
            </Link>{" "}
            để tham gia bình luận.
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
