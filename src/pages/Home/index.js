import React from "react";
import "./home.css";
import "./home.scss";
import recipe from "../../image/recipe1.jpg";
import Rating from "@mui/material/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import home1 from "../../image/home1.png";

const Home = () => {
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
          <div className="grid-container">
            <Link to="/recipeDetail">
              <div className="grid-item">
                <div
                  className="card"
                  style={{ width: "290px", height: "370px" }}
                >
                  <div className="card-image">
                    <figure className="image is-3by2">
                      <img src={recipe} alt="Placeholder" />
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
                            Thực đơn 1
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
                            <h6 className="title is-6 mb-0">1200</h6>
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
                            defaultValue={4.5}
                            precision={0.5}
                            readOnly
                            size="small"
                          />
                          &nbsp; &nbsp;
                          <span
                            style={{ color: "black" }}
                            className="title is-6"
                          >
                            4.5/5
                          </span>
                        </div>
                        <p className="title is-6" style={{ marginTop: 10 }}>
                          <strong className="subtitle is-6 has-text-primary">
                            Loại:
                          </strong>
                          &nbsp; Buổi sáng
                        </p>
                        <p className="title is-6" style={{ marginTop: 10 }}>
                          <strong className="subtitle is-6 has-text-primary">
                            Độ tuổi:
                          </strong>
                          &nbsp; 6 tháng tuổi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/recipeDetail">
              <div className="grid-item">
                <div
                  className="card"
                  style={{ width: "290px", height: "370px" }}
                >
                  <div className="card-image">
                    <figure className="image is-3by2">
                      <img src={recipe} alt="Placeholder" />
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
                            Thực đơn 1
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
                            <h6 className="title is-6 mb-0">1200</h6>
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
                            defaultValue={4.5}
                            precision={0.5}
                            readOnly
                            size="small"
                          />
                          &nbsp; &nbsp;
                          <span
                            style={{ color: "black" }}
                            className="title is-6"
                          >
                            4.5/5
                          </span>
                        </div>
                        <p className="title is-6" style={{ marginTop: 10 }}>
                          <strong className="subtitle is-6 has-text-primary">
                            Loại:
                          </strong>
                          &nbsp; Buổi sáng
                        </p>
                        <p className="title is-6">
                          <strong className="subtitle is-6 has-text-primary">
                            Độ tuổi:
                          </strong>
                          &nbsp; 6 tháng tuổi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/recipeDetail">
              <div className="grid-item">
                <div
                  className="card"
                  style={{ width: "290px", height: "370px" }}
                >
                  <div className="card-image">
                    <figure className="image is-3by2">
                      <img src={recipe} alt="Placeholder" />
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
                            Thực đơn 1
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
                            <h6 className="title is-6 mb-0">1200</h6>
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
                            defaultValue={4.5}
                            precision={0.5}
                            readOnly
                            size="small"
                          />
                          &nbsp; &nbsp;
                          <span
                            style={{ color: "black" }}
                            className="title is-6"
                          >
                            4.5/5
                          </span>
                        </div>
                        <p className="title is-6" style={{ marginTop: 10 }}>
                          <strong className="subtitle is-6 has-text-primary">
                            Loại:
                          </strong>
                          &nbsp; Buổi sáng
                        </p>
                        <p className="title is-6">
                          <strong className="subtitle is-6 has-text-primary">
                            Độ tuổi:
                          </strong>
                          &nbsp; 6 tháng tuổi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
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
          <div className="grid-container">
            <div className="grid-item">
              <Link to="/recipeDetail">
                <div
                  className="card"
                  style={{ width: "290px", height: "380px" }}
                >
                  <div className="card-image">
                    <figure className="image is-3by2">
                      <img src={recipe} alt="Placeholder" />
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
                            Thực đơn 1
                          </span>
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
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
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Rating
                            name="half-rating-read"
                            defaultValue={4.5}
                            precision={0.5}
                            readOnly
                            size="small"
                          />
                          &nbsp; &nbsp;
                          <span className="title is-6">4.5/5</span>
                        </div>
                        <div style={{ marginTop: 5 }}>
                          <p className="title is-6">
                            <strong className="subtitle is-6 has-text-primary">
                              Ngày cập nhật:
                            </strong>
                            &nbsp; 10/9/2023
                          </p>
                        </div>
                        <p
                          className="title is-6 mb-0"
                          style={{ marginTop: 10 }}
                        >
                          <strong className="subtitle is-6 has-text-primary">
                            Loại:
                          </strong>
                          &nbsp; Buổi sáng
                        </p>
                        <p className="title is-6" style={{ marginTop: 10 }}>
                          <strong className="subtitle is-6 has-text-primary">
                            Độ tuổi:
                          </strong>
                          &nbsp; 6 tháng tuổi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="grid-item">
              <Link to="/recipeDetail">
                <div
                  className="card"
                  style={{ width: "290px", height: "380px" }}
                >
                  <div className="card-image">
                    <figure className="image is-3by2">
                      <img src={recipe} alt="Placeholder" />
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
                            Thực đơn 1
                          </span>
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
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
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Rating
                            name="half-rating-read"
                            defaultValue={4.5}
                            precision={0.5}
                            readOnly
                            size="small"
                          />
                          &nbsp; &nbsp;
                          <span className="title is-6">4.5/5</span>
                        </div>
                        <div style={{ marginTop: 5 }}>
                          <p className="title is-6">
                            <strong className="subtitle is-6 has-text-primary">
                              Ngày cập nhật:
                            </strong>
                            &nbsp; 10/9/2023
                          </p>
                        </div>
                        <p
                          className="title is-6 mb-0"
                          style={{ marginTop: 10 }}
                        >
                          <strong className="subtitle is-6 has-text-primary">
                            Loại:
                          </strong>
                          &nbsp; Buổi sáng
                        </p>
                        <p className="title is-6" style={{ marginTop: 10 }}>
                          <strong className="subtitle is-6 has-text-primary">
                            Độ tuổi:
                          </strong>
                          &nbsp; 6 tháng tuổi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="grid-item">
              <Link to="/recipeDetail">
                <div
                  className="card"
                  style={{ width: "290px", height: "380px" }}
                >
                  <div className="card-image">
                    <figure className="image is-3by2">
                      <img src={recipe} alt="Placeholder" />
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
                            Thực đơn 1
                          </span>
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
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
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Rating
                            name="half-rating-read"
                            defaultValue={4.5}
                            precision={0.5}
                            readOnly
                            size="small"
                          />
                          &nbsp; &nbsp;
                          <span className="title is-6">4.5/5</span>
                        </div>
                        <div style={{ marginTop: 5 }}>
                          <p className="title is-6">
                            <strong className="subtitle is-6 has-text-primary">
                              Ngày cập nhật:
                            </strong>
                            &nbsp; 10/9/2023
                          </p>
                        </div>
                        <p
                          className="title is-6 mb-0"
                          style={{ marginTop: 10 }}
                        >
                          <strong className="subtitle is-6 has-text-primary">
                            Loại:
                          </strong>
                          &nbsp; Buổi sáng
                        </p>
                        <p className="title is-6" style={{ marginTop: 10 }}>
                          <strong className="subtitle is-6 has-text-primary">
                            Độ tuổi:
                          </strong>
                          &nbsp; 6 tháng tuổi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="grid-item">
              <Link to="/recipeDetail">
                <div
                  className="card"
                  style={{ width: "290px", height: "380px" }}
                >
                  <div className="card-image">
                    <figure className="image is-3by2">
                      <img src={recipe} alt="Placeholder" />
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
                            Thực đơn 1
                          </span>
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
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
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Rating
                            name="half-rating-read"
                            defaultValue={4.5}
                            precision={0.5}
                            readOnly
                            size="small"
                          />
                          &nbsp; &nbsp;
                          <span className="title is-6">4.5/5</span>
                        </div>
                        <div style={{ marginTop: 5 }}>
                          <p className="title is-6">
                            <strong className="subtitle is-6 has-text-primary">
                              Ngày cập nhật:
                            </strong>
                            &nbsp; 10/9/2023
                          </p>
                        </div>
                        <p
                          className="title is-6 mb-0"
                          style={{ marginTop: 10 }}
                        >
                          <strong className="subtitle is-6 has-text-primary">
                            Loại:
                          </strong>
                          &nbsp; Buổi sáng
                        </p>
                        <p className="title is-6" style={{ marginTop: 10 }}>
                          <strong className="subtitle is-6 has-text-primary">
                            Độ tuổi:
                          </strong>
                          &nbsp; 6 tháng tuổi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="grid-item">
              <Link to="/recipeDetail">
                <div
                  className="card"
                  style={{ width: "290px", height: "380px" }}
                >
                  <div className="card-image">
                    <figure className="image is-3by2">
                      <img src={recipe} alt="Placeholder" />
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
                            Thực đơn 1
                          </span>
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
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
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Rating
                            name="half-rating-read"
                            defaultValue={4.5}
                            precision={0.5}
                            readOnly
                            size="small"
                          />
                          &nbsp; &nbsp;
                          <span className="title is-6">4.5/5</span>
                        </div>
                        <div style={{ marginTop: 5 }}>
                          <p className="title is-6">
                            <strong className="subtitle is-6 has-text-primary">
                              Ngày cập nhật:
                            </strong>
                            &nbsp; 10/9/2023
                          </p>
                        </div>
                        <p
                          className="title is-6 mb-0"
                          style={{ marginTop: 10 }}
                        >
                          <strong className="subtitle is-6 has-text-primary">
                            Loại:
                          </strong>
                          &nbsp; Buổi sáng
                        </p>
                        <p className="title is-6" style={{ marginTop: 10 }}>
                          <strong className="subtitle is-6 has-text-primary">
                            Độ tuổi:
                          </strong>
                          &nbsp; 6 tháng tuổi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", marginBottom: 10 }}>
        <Link to="/recipe" className="has-text-primary title is-4">
          Xem tất cả
        </Link>
      </div>
    </>
  );
};

export default Home;
