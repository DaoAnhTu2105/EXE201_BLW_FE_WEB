import React, { useState } from "react";
import { Rating } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import "./recipeDetail.css";
import { useQuery } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import loadingGif from "../../../image/Baby-Crawl-Cycle-unscreen.gif";
import { useQueryClient } from "react-query";
import crown from "../../../image/crown.png";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const detailUrl = `http://localhost:5000/recipes/recipe-detail/${id}`;
  const upCommentUrl = `https://blw-api.azurewebsites.net/api/Rating/AddRating`;
  const deleteFavoriteUrl = `https://blw-api.azurewebsites.net/api/Favorite/DeleteFavorite`;
  const postFavoriteUrl = `https://blw-api.azurewebsites.net/api/Favorite/AddRecipeFavorite`;
  const [userRate, setUserRate] = useState(0);
  const [userComment, setUserComment] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data: detailRecipe, isLoading: detailLoading } = useQuery(
    "detail-recipe",
    () =>
      fetch(detailUrl).then(async (response) => {
        const detail = await response.json();
        if (detail.status === "Failed") {
          await Swal.fire({
            position: "center",
            icon: "error",
            title: "This recipe has been deleted!",
            showConfirmButton: false,
            timer: 2500,
          });
          navigate("/");
        }
        return detail;
      })
  );

  console.log(detailRecipe);

  const handleComment = () => {
    if (userRate === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Rate không được để trống",
      });
    } else {
      fetch(upCommentUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          recipeId: id,
          rate: userRate,
          comment: userComment,
          ratingImage: null,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setUserRate("");
          setUserComment("");
          queryClient.invalidateQueries("detail-recipe");
        })
        .catch((error) => {
          console.error("Error during fetch:", error);
        });
    }
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Xóa bình luận?",
      text: "Bạn chắc là muốn xóa bình luận này không!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Có!",
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
            queryClient.invalidateQueries("detail-recipe");
          })
          .catch((error) => {
            console.error("Error during fetch:", error);
          });
      }
    });
  };

  return (
    <>
      {detailLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={loadingGif} alt="loading-gif" />
        </div>
      ) : (
        <div className="container is-widescreen mt-5 mb-5">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {detailRecipe?.data?.forPremium && (
                <>
                  <img src={crown} alt="" style={{ width: 50, height: 50 }} />
                  &nbsp; &nbsp; &nbsp; &nbsp;
                </>
              )}
              <h2 className="title is-2 has-text-primary mb-0">
                {detailRecipe?.data?.recipeName}
              </h2>
            </div>
          </div>
          {/* <p className="subtitle is-5 mt-5">
            Ngày cập nhật:{" "}
            {new Date(detailRecipe?.data?.updateTime).toLocaleDateString()}
          </p> */}
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
                <span className="subtitle is-5">
                  {detailRecipe?.data?.age?.ageName}
                </span>
              </h4>
            </div>
            <div className="mt-5">
              <h4 className="title is-5 has-text-primary">
                Thời gian chuẩn bị: &nbsp;
                <span className="subtitle is-5">
                  {detailRecipe?.data?.prepareTime} phút.
                </span>
              </h4>
            </div>
            <div className="mt-5">
              <h4 className="title is-5 has-text-primary">
                Thời gian chờ: &nbsp;
                <span className="subtitle is-5">
                  {detailRecipe?.data?.standTime} phút.
                </span>
              </h4>
            </div>
            <div className="mt-5">
              <h4 className="title is-5 has-text-primary">
                Thời gian nấu: &nbsp;
                <span className="subtitle is-5">
                  {detailRecipe?.data?.cookTime} phút.
                </span>
              </h4>
            </div>
          </div>
          <p>{detailRecipe?.data?.recipeDesc}</p>
          <div style={{ textAlign: "center" }}>
            <img
              src={detailRecipe?.data?.recipeImage}
              alt=""
              className="img-recipe-detail"
              style={{ width: 1200, height: 500 }}
            />
          </div>
          <div className="mt-5">
            <h4 className="title is-4 has-text-primary">
              Nguyên liệu chuẩn bị:
            </h4>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              {detailRecipe?.data?.ingredientOfRecipeVMs.map((ingredient) => (
                <li className="list-item-ingredients" key={ingredient._id}>
                  {ingredient.quantity} x {ingredient.ingredientId.measure}{" "}
                  {ingredient.ingredientId.ingredientName}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5">
            <h4 className="title is-4 has-text-primary">
              Các bước thực hiện:{" "}
            </h4>
            <ol style={{ paddingLeft: "20px" }} type="1">
              {detailRecipe?.data?.directionVMs.map((direction) => (
                <li
                  className="list-item-ingredients"
                  key={direction.directionId}
                >
                  {direction.directionDesc}
                </li>
              ))}
            </ol>
          </div>
          {/* <div>
            <h3 className="title is-4 has-text-primary">Bình luận: </h3>
            {detailRecipe?.data?.cusRating && (
              <div className="box" style={{ width: "600px" }}>
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={detailRecipe?.data?.cusRating.avatar} alt="" />
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
                          <strong>
                            {detailRecipe?.data?.cusRating.fullname}
                          </strong>{" "}
                          &nbsp;
                          <FontAwesomeIcon
                            icon={faTrash}
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              handleDelete(
                                detailRecipe?.data?.cusRating.recipeId
                              )
                            }
                          />
                        </div>

                        <div>
                          <Rating
                            name="half-rating-read"
                            defaultValue={detailRecipe?.data?.cusRating.rate}
                            precision={0.5}
                            readOnly
                            size="small"
                          />
                        </div>
                        {detailRecipe?.data?.cusRating.comment}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            )}
            {detailRecipe?.data?.ratingVMs &&
              detailRecipe?.data?.ratingVMs.map((rate) => (
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
                    </div>
                  </article>
                </div>
              ))}
          </div> */}
          {/* {user ? (
            <div style={{ marginTop: "80px" }}>
              <article className="media mt-5">
                <figure className="media-left">
                  <p className="image is-64x64">
                    <img src={user?.data?.avatar} alt="#" />
                  </p>
                </figure>
                <div className="media-content">
                  <strong className="pl-2">{user?.data?.fullname}</strong>
                  <div className="mt-2 mb-2">
                    <Rating
                      name="half-rating-read"
                      value={userRate}
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
          )} */}
        </div>
      )}
    </>
  );
};

export default RecipeDetail;
