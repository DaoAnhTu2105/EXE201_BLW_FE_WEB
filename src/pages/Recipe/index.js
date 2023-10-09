import React from "react";
import "./recipe.css";
import carrot from "../../image/carrot.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Rating } from "@mui/material";
import { useQuery } from "react-query";
import loadingGif from "../../image/Baby-Crawl-Cycle-unscreen.gif";

const Recipe = () => {
  const recipeApi = `https://blw-api.azurewebsites.net/api/Recipe/LastUpdateRecipe`;
  const recommendRecipeApi = `https://blw-api.azurewebsites.net/api/Recipe/MostFavoriteRecipe`;
  const {
    data: recipes,
    isLoading: loading,
    isError: error,
  } = useQuery("allRecipes", () =>
    fetch(recipeApi).then((response) => response.json())
  );
  const {
    data: recommendRecipes,
    isLoading: recommendLoading,
    isError: recommendError,
  } = useQuery("recommendRecipes", () =>
    fetch(recommendRecipeApi).then((response) => response.json())
  );
  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <h4 className="title is-4" style={{ textAlign: "center" }}>
          Công thức được đề xuất trong tuần
        </h4>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            style={{ width: "1000px", height: "300px" }}
          >
            <SwiperSlide>
              <img src={carrot} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={carrot} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={carrot} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div>
        <h4 className="title is-4" style={{ textAlign: "center" }}>
          Thực đơn được ưa chuộng nhiều nhất
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
            <div className="grid-container-food">
              {recommendRecipes.data.map((recommendRecipe) => (
                <div className="grid-item-food" key={recommendRecipe.recipeId}>
                  <div
                    className="card"
                    style={{ width: "300px", height: "300px" }}
                  >
                    <div className="card-image">
                      <figure className="image is-3by2">
                        <img
                          src={recommendRecipe.recipeImage}
                          alt="Placeholder"
                        />
                      </figure>
                    </div>
                    <div className="card-content p-5">
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
                                height: "23px",
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
                            <span className="title is-6">
                              {recommendRecipe.aveRate}/5
                            </span>
                          </div>
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
      <div className="mt-5 mb-5">
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
              <div className="grid-container-food">
                {recipes.data.map((recipe) => (
                  <div className="grid-item-food" key={recipe.recipeId}>
                    <div
                      className="card"
                      style={{ width: "300px", height: "380px" }}
                    >
                      <div className="card-image">
                        <figure className="image is-3by2">
                          <img src={recipe.recipeImage} alt="Placeholder" />
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
                                  width: "160px",
                                  height: "23px",
                                  overflow: "hidden",
                                }}
                              >
                                {recipe.recipeName}
                              </span>
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
                              style={{ display: "flex", alignItems: "center" }}
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
                            <p className="title is-6" style={{ marginTop: 10 }}>
                              <strong className="subtitle is-6 has-text-primary">
                                Độ tuổi:
                              </strong>
                              &nbsp; {recipe.ageName}
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
      </div>
    </>
  );
};

export default Recipe;
