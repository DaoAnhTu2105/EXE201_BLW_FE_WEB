import React from "react";
import "./home.css";
import "./home.scss";
import recipe from "../../image/recipe1.jpg";
import Rating from "@mui/material/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import home1 from "../../image/home1.png";
import { useQuery } from "react-query";
import loadingGif from "../../image/Baby-Crawl-Cycle-unscreen.gif";

const Home = ({ results }) => {
  const recipeApi = `https://blw-api.azurewebsites.net/api/Recipe/LastUpdateRecipe`;
  const recommendRecipeApi = `https://blw-api.azurewebsites.net/api/Recipe/MostFavoriteRecipe`;
  const { data: recipes, isLoading: loading } = useQuery("allRecipes", () =>
    fetch(recipeApi).then((response) => response.json())
  );
  const { data: recommendRecipes, isLoading: recommendLoading } = useQuery(
    "recommendRecipes",
    () => fetch(recommendRecipeApi).then((response) => response.json())
  );
  return (
    <>
      <div style={{ marginBottom: "30px", marginTop: 20 }}>
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
              <figcaption className="home-explore-title">Thực đơn</figcaption>
            </figure>
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
              <figcaption className="home-explore-title">Kế hoạch</figcaption>
            </figure>
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
              <figcaption className="home-explore-title">Chuyên gia</figcaption>
            </figure>
          </div>
        </div>
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
              <div className="grid-container">
                {results?.data.map((result) => (
                  <Link
                    to={`/recipe-detail/${result.recipeId}`}
                    key={result.recipeId}
                  >
                    <div className="grid-item">
                      <div
                        className="card"
                        style={{ width: "290px", height: "370px" }}
                      >
                        <div className="card-image">
                          <figure className="image is-3by2">
                            <img src={result.recipeImage} alt="Placeholder" />
                          </figure>
                        </div>

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
                                <span
                                  style={{
                                    width: "190px",
                                    height: "24px",
                                    overflow: "hidden",
                                  }}
                                >
                                  {result.recipeName}
                                </span>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <Link to="/">
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
                                  </Link>
                                  &nbsp;
                                  <h6 className="title is-6 mb-0">
                                    {result.totalFavorite}
                                  </h6>
                                </div>
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
                                <span
                                  style={{ color: "black" }}
                                  className="title is-6"
                                >
                                  {result.aveRate}/5
                                </span>
                              </div>
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
                  </Link>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <h4 className="title is-4" style={{ textAlign: "center" }}>
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
                  {recommendRecipes?.data.slice(0, 3).map((recommendRecipe) => (
                    <Link
                      to={`/recipe-detail/${recommendRecipe.recipeId}`}
                      key={recommendRecipe.recipeId}
                    >
                      <div className="grid-item">
                        <div
                          className="card"
                          style={{ width: "290px", height: "370px" }}
                        >
                          <div className="card-image">
                            <figure className="image is-3by2">
                              <img
                                src={recommendRecipe.recipeImage}
                                alt="Placeholder"
                              />
                            </figure>
                          </div>

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
                                  <span
                                    style={{
                                      width: "190px",
                                      height: "24px",
                                      overflow: "hidden",
                                    }}
                                  >
                                    {recommendRecipe.recipeName}
                                  </span>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Link to="/">
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
                                    </Link>
                                    &nbsp;
                                    <h6 className="title is-6 mb-0">
                                      {recommendRecipe.totalFavorite}
                                    </h6>
                                  </div>
                                </p>

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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div style={{ textAlign: "center", marginTop: 30 }}>
              <Link to="/recipe" className="has-text-primary title is-4">
                Xem tất cả
              </Link>
            </div>
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
                    {recipes?.data?.result.slice(0, 3).map((recipe) => (
                      <div className="grid-item" key={recipe.recipeId}>
                        <Link to={`/recipe-detail/${recipe.recipeId}`}>
                          <div
                            className="card"
                            style={{ width: "290px", height: "380px" }}
                          >
                            <div className="card-image">
                              <figure className="image is-3by2">
                                <img
                                  src={recipe.recipeImage}
                                  alt="hình ảnh thực đơn"
                                />
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
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <span
                                      style={{
                                        width: "190px",
                                        height: "24px",
                                        overflow: "hidden",
                                      }}
                                    >
                                      {recipe.recipeName}
                                    </span>

                                    <Link to="/">
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
                                    </Link>
                                  </p>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Rating
                                      name="half-rating-read"
                                      defaultValue={recipe.aveRate}
                                      precision={0.5}
                                      readOnly
                                      size="small"
                                    />
                                    &nbsp; &nbsp;
                                    <span className="title is-6">
                                      {recipe.aveRate}/5
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
                                    &nbsp; {recipe.mealName}
                                  </p>
                                  <p
                                    className="title is-6"
                                    style={{ marginTop: 10 }}
                                  >
                                    <strong className="subtitle is-6 has-text-primary">
                                      Độ tuổi:
                                    </strong>
                                    &nbsp; {recipe.ageName}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
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
