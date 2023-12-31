import React from "react";
import "./home.css";
import "./home.scss";
import Rating from "@mui/material/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import home1 from "../../image/home1.png";
import { useQuery } from "react-query";
import loadingGif from "../../image/Baby-Crawl-Cycle-unscreen.gif";
import Swal from "sweetalert2";
import { useQueryClient } from "react-query";
import vip from "../../image/premium-logo.png";
import { useNavigate } from "react-router-dom";

const Home = ({ results, addFavorite }) => {
  const recipeApi = `http://localhost:5000/recipes/lastest-recipe`;
  const recommendRecipeApi = `https://blw-api.azurewebsites.net/api/Recipe/MostFavoriteRecipe`;
  const postFavoriteUrl = `https://blw-api.azurewebsites.net/api/Favorite/AddRecipeFavorite`;
  const user = JSON.parse(localStorage.getItem("user"));
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data: recipes, isLoading: loading } = useQuery("allRecipes", () =>
    fetch(recipeApi, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?.token}`,
      },
    }).then((response) => response.json())
  );
  const handleCheckPremium = async (id, premium) => {
    if (user?.data?.isPremium && premium) {
      navigate(`/recipe-detail/${id}`);
    } else if (!premium) {
      navigate(`/recipe-detail/${id}`);
    } else {
      if (!user) {
        await Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please login!",
        });
        return navigate(`/login`);
      }
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please buy premium pack!",
      });
      navigate(`/pack`);
    }
  };
  // const { data: recommendRecipes, isLoading: recommendLoading } = useQuery(
  //   "recommendRecipes",
  //   () =>
  //     fetch(recommendRecipeApi, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${user?.token}`,
  //       },
  //     }).then((response) => response.json())
  // );

  return (
    <>
      <div style={{ marginBottom: "30px", marginTop: 20 }}>
        {results ? (
          <>
            <h4 className="title is-4" style={{ textAlign: "center" }}>
              Kết quả tìm kiếm
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {results?.data?.length === 0 ? (
                <>
                  <h4
                    className="title is-4 text-center"
                    style={{ width: "1024px", height: "920px" }}
                  >
                    Không tìm thấy thực đơn phù hợp
                  </h4>
                </>
              ) : (
                <div className="grid-container">
                  {results?.data?.map((result) => (
                    <div
                      className="grid-item"
                      key={result._id}
                      onClick={() =>
                        handleCheckPremium(result._id, result.forPremium)
                      }
                    >
                      <div
                        className="card"
                        style={{ width: "290px", height: "380px" }}
                      >
                        <div
                          className="card-image"
                          style={{ position: "relative" }}
                        >
                          <figure className="image is-3by2">
                            <img src={result.recipeImage} alt="Placeholder" />
                          </figure>
                          {result.forPremium && (
                            <img
                              src={vip}
                              alt="vip"
                              style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                              }}
                            />
                          )}
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
                                  justifyContent: "space-between",
                                }}
                              >
                                <span
                                  style={{
                                    width: "190px",
                                    height: "24px",
                                    overflow: "hidden",
                                    color: "black",
                                  }}
                                >
                                  {result.recipeName}
                                </span>
                              </p>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <Rating
                                  name="half-rating-read"
                                  defaultValue={result.aveRate}
                                  precision={0.5}
                                  readOnly
                                  size="small"
                                />
                                &nbsp; &nbsp;
                                <span className="title is-6">
                                  {result.aveRate}/5
                                </span>
                              </div>
                              {/* <div style={{ marginTop: 5 }}>
                              <p className="title is-6">
                                <strong className="subtitle is-6 has-text-primary">
                                  Ngày cập nhật:
                                </strong>
                                &nbsp; 10/9/2023
                                {new Date(favor.updateTime).toLocaleDateString()}
                              </p>
                            </div> */}
                              <p
                                className="title is-6 mb-4"
                                style={{ marginTop: 10 }}
                              >
                                <strong className="subtitle is-6 has-text-primary">
                                  Loại:
                                </strong>
                                &nbsp; {result.mealName}
                              </p>
                              <p
                                className="title is-6"
                                style={{ marginTop: 10 }}
                              >
                                <strong className="subtitle is-6 has-text-primary">
                                  Độ tuổi:
                                </strong>
                                &nbsp; {result.ageName}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <article id="intro-card-welcome">
                <img src={home1} alt="Avatar wallpaper" />
                <div className="content-welcome">
                  <h1>Chào mừng các bạn đã đến với Baby Led Weaning</h1>
                  <div className="infos"></div>
                </div>
              </article>
            </div>

            <h4 className="title is-4" style={{ textAlign: "center" }}>
              Khám phá
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="home-explore-container">
                <Link to="/recipe">
                  <figure className="home-explore">
                    <img
                      src={home1}
                      alt="Mountains"
                      style={{
                        width: "250px",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                    <figcaption className="home-explore-title">
                      Thực đơn
                    </figcaption>
                  </figure>
                </Link>
                <Link to="/plan">
                  <figure className="home-explore">
                    <img
                      src={home1}
                      alt="Mountains"
                      style={{
                        width: "250px",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                    <figcaption className="home-explore-title">
                      Kế hoạch
                    </figcaption>
                  </figure>
                </Link>
                <Link to="/list-expert">
                  <figure className="home-explore">
                    <img
                      src={home1}
                      alt="Mountains"
                      style={{
                        width: "250px",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                    <figcaption className="home-explore-title">
                      Chuyên gia
                    </figcaption>
                  </figure>
                </Link>
              </div>
            </div>
            {/* <h4 className="title is-4" style={{ textAlign: "center" }}>
              Thực đơn được ưa chuộng nhất
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {recommendLoading ? (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img src={loadingGif} alt="loading-gif" />
                </div>
              ) : (
                <div className="grid-container">
                  {recommendRecipes?.data
                    ?.slice(0, 3)
                    .map((recommendRecipe) => (
                      <div className="grid-item" key={recommendRecipe._id}>
                        <div
                          className="card"
                          style={{ width: "290px", height: "370px" }}
                        >
                          <Link to={`/recipe-detail/${recommendRecipe._id}`}>
                            <div
                              className="card-image"
                              style={{ position: "relative" }}
                            >
                              <figure className="image is-3by2">
                                <img
                                  src={recommendRecipe.recipeImage}
                                  alt="Placeholder"
                                />
                              </figure>
                              {recommendRecipe.forPremium && (
                                <img
                                  src={vip}
                                  alt="vip"
                                  style={{
                                    position: "absolute",
                                    top: 0,
                                    right: 0,
                                  }}
                                />
                              )}
                            </div>
                          </Link>
                          <div className="card-content p-2">
                            <div className="media">
                              <div className="media-content">
                                <p
                                  className="title is-5"
                                  style={{
                                    marginBottom: 10,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <Link
                                    to={`/recipe-detail/${recommendRecipe._id}`}
                                  >
                                    <span
                                      style={{
                                        width: "190px",
                                        height: "24px",
                                        overflow: "hidden",
                                        color: "black",
                                      }}
                                    >
                                      {recommendRecipe.recipeName}
                                    </span>
                                  </Link>
                                </p>
                                <Link
                                  to={`/recipe-detail/${recommendRecipe._id}`}
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Rating
                                      name="half-rating-read"
                                      defaultValue={recommendRecipe.aveRate}
                                      precision={0.5}
                                      readOnly
                                      size="small"
                                    />
                                    &nbsp; &nbsp;
                                    <span
                                      style={{ color: "black" }}
                                      className="title is-6"
                                    >
                                      {recommendRecipe.aveRate}/5
                                    </span>
                                  </div>
                                  <p
                                    className="title is-6 mb-4"
                                    style={{ marginTop: 10 }}
                                  >
                                    <strong className="subtitle is-6 has-text-primary">
                                      Loại:
                                    </strong>
                                    &nbsp; {recommendRecipe.mealName}
                                  </p>
                                  <p
                                    className="title is-6"
                                    style={{ marginTop: 10 }}
                                  >
                                    <strong className="subtitle is-6 has-text-primary">
                                      Độ tuổi:
                                    </strong>
                                    &nbsp; {recommendRecipe.ageName}
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div> */}
            {/* <div style={{ textAlign: "center", marginTop: 30 }}>
              <Link to="/recipe" className="has-text-primary title is-4">
                Xem tất cả
              </Link>
            </div> */}
            <div style={{ marginBottom: "30px", marginTop: 20 }}>
              <h4 className="title is-4" style={{ textAlign: "center" }}>
                Thực đơn mới được cập nhật
              </h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {loading ? (
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={loadingGif} alt="loading-gif" />
                  </div>
                ) : (
                  <div className="grid-container">
                    {recipes?.data?.slice(0, 3).map((recipe) => (
                      <div
                        className="grid-item"
                        key={recipe._id}
                        onClick={() =>
                          handleCheckPremium(recipe._id, recipe.forPremium)
                        }
                      >
                        <div
                          className="card"
                          style={{ width: "290px", height: "380px" }}
                        >
                          <div
                            className="card-image"
                            style={{ position: "relative" }}
                          >
                            <figure className="image is-3by2">
                              <img src={recipe.recipeImage} alt="Placeholder" />
                            </figure>
                            {recipe.forPremium && (
                              <img
                                src={vip}
                                alt="vip"
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  right: 0,
                                }}
                              />
                            )}
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
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <span
                                    style={{
                                      width: "190px",
                                      height: "24px",
                                      overflow: "hidden",
                                      color: "black",
                                    }}
                                  >
                                    {recipe.recipeName}
                                  </span>

                                  {/* {recipe.isFavorite && user ? (
                                    <FontAwesomeIcon
                                      icon={faHeart}
                                      className="has-text-primary"
                                    />
                                  ) : (
                                    <button
                                      className="button is-primary"
                                      style={{
                                        borderRadius: "50%",
                                        width: "10px",
                                        height: "30px",
                                      }}
                                      onClick={() =>
                                        handleAddFavorite(recipe.recipeId)
                                      }
                                    >
                                      <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                  )} */}
                                </p>

                                <p
                                  className="title is-6 mb-4"
                                  style={{ marginTop: 10 }}
                                >
                                  <strong className="subtitle is-6 has-text-primary">
                                    Loại:
                                  </strong>
                                  &nbsp; {recipe.meal.mealName}
                                </p>
                                <p
                                  className="title is-6"
                                  style={{ marginTop: 10 }}
                                >
                                  <strong className="subtitle is-6 has-text-primary">
                                    Độ tuổi:
                                  </strong>
                                  &nbsp; {recipe.age.ageName}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div style={{ textAlign: "center", marginBottom: 10 }}>
              <Link to="/recipe" className="has-text-primary title is-4">
                Xem tất cả
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
