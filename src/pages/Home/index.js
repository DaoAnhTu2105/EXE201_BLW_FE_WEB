import React from "react";
import "./home.css";
import recipe from "../../image/recipe1.jpg";
import Rating from "@mui/material/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <div style={{ marginBottom: "30px", marginTop: 20 }}>
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
            <div className="grid-item">
              <div className="card" style={{ width: "300px", height: "370px" }}>
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
                        }}
                      >
                        <span>Thực đơn 1</span>
                        &nbsp; &nbsp;
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <button
                            class="button is-primary"
                            style={{
                              borderRadius: "50%",
                              width: "10px",
                              height: "30px",
                            }}
                          >
                            <FontAwesomeIcon icon={faHeart} />
                          </button>
                          &nbsp;
                          <h6 class="subtitle is-6">1200</h6>
                        </div>
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
                        <span>4.5/5</span>
                      </div>

                      <p className="subtitle is-6" style={{ marginTop: 10 }}>
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Cá
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Bột
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Cà chua
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Hành tây
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Thịt lợn
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Tôm hùm
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="card" style={{ width: "300px", height: "370px" }}>
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
                        }}
                      >
                        <span>Thực đơn 1</span>
                        &nbsp; &nbsp;
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <button
                            class="button is-primary"
                            style={{
                              borderRadius: "50%",
                              width: "10px",
                              height: "30px",
                            }}
                          >
                            <FontAwesomeIcon icon={faHeart} />
                          </button>
                          &nbsp;
                          <h6 class="subtitle is-6">1200</h6>
                        </div>
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
                        <span>4.5/5</span>
                      </div>

                      <p className="subtitle is-6" style={{ marginTop: 10 }}>
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Cá
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Bột
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Cà chua
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Hành tây
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Thịt lợn
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Tôm hùm
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="card" style={{ width: "300px", height: "370px" }}>
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
                        }}
                      >
                        <span>Thực đơn 1</span>
                        &nbsp; &nbsp;
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <button
                            class="button is-primary"
                            style={{
                              borderRadius: "50%",
                              width: "10px",
                              height: "30px",
                            }}
                          >
                            <FontAwesomeIcon icon={faHeart} />
                          </button>
                          &nbsp;
                          <h6 class="subtitle is-6">1200</h6>
                        </div>
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
                        <span>4.5/5</span>
                      </div>

                      <p className="subtitle is-6" style={{ marginTop: 10 }}>
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Cá
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Bột
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Cà chua
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Hành tây
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Thịt lợn
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Tôm hùm
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="card" style={{ width: "300px", height: "370px" }}>
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
                        }}
                      >
                        <span>Thực đơn 1</span>
                        &nbsp; &nbsp;
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <button
                            class="button is-primary"
                            style={{
                              borderRadius: "50%",
                              width: "10px",
                              height: "30px",
                            }}
                          >
                            <FontAwesomeIcon icon={faHeart} />
                          </button>
                          &nbsp;
                          <h6 class="subtitle is-6">1200</h6>
                        </div>
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
                        <span>4.5/5</span>
                      </div>

                      <p className="subtitle is-6" style={{ marginTop: 10 }}>
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Cá
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Bột
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Cà chua
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Hành tây
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Thịt lợn
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Tôm hùm
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="card" style={{ width: "300px", height: "370px" }}>
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
                        }}
                      >
                        <span>Thực đơn 1</span>
                        &nbsp; &nbsp;
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <button
                            class="button is-primary"
                            style={{
                              borderRadius: "50%",
                              width: "10px",
                              height: "30px",
                            }}
                          >
                            <FontAwesomeIcon icon={faHeart} />
                          </button>
                          &nbsp;
                          <h6 class="subtitle is-6">1200</h6>
                        </div>
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
                        <span>4.5/5</span>
                      </div>

                      <p className="subtitle is-6" style={{ marginTop: 10 }}>
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Cá
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Bột
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Cà chua
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Hành tây
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Thịt lợn
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Tôm hùm
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="card" style={{ width: "300px", height: "370px" }}>
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
                        }}
                      >
                        <span>Thực đơn 1</span>
                        &nbsp; &nbsp;
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <button
                            class="button is-primary"
                            style={{
                              borderRadius: "50%",
                              width: "10px",
                              height: "30px",
                            }}
                          >
                            <FontAwesomeIcon icon={faHeart} />
                          </button>
                          &nbsp;
                          <h6 class="subtitle is-6">1200</h6>
                        </div>
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
                        <span>4.5/5</span>
                      </div>

                      <p className="subtitle is-6" style={{ marginTop: 10 }}>
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Cá
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Bột
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Cà chua
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Hành tây
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Thịt lợn
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Tôm hùm
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <a href="/#" className="has-text-primary title is-4">
          Xem tất cả
        </a>
      </div>
      <div style={{ marginBottom: "30px", marginTop: 20 }}>
        <h4 className="title is-4" style={{ textAlign: "center" }}>
          Thức ăn được ưa chuộng nhất
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
              <div className="card" style={{ width: "300px", height: "300px" }}>
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
                        }}
                      >
                        <span>Thức ăn 1</span>
                        &nbsp; &nbsp;
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <button
                            class="button is-primary"
                            style={{
                              borderRadius: "50%",
                              width: "10px",
                              height: "30px",
                            }}
                          >
                            <FontAwesomeIcon icon={faHeart} />
                          </button>
                          &nbsp;
                          <h6 class="subtitle is-6">1200</h6>
                        </div>
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
                        <span>4.5/5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="card" style={{ width: "300px", height: "300px" }}>
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
                        }}
                      >
                        <span>Thức ăn 1</span>
                        &nbsp; &nbsp;
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <button
                            class="button is-primary"
                            style={{
                              borderRadius: "50%",
                              width: "10px",
                              height: "30px",
                            }}
                          >
                            <FontAwesomeIcon icon={faHeart} />
                          </button>
                          &nbsp;
                          <h6 class="subtitle is-6">1200</h6>
                        </div>
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
                        <span>4.5/5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="card" style={{ width: "300px", height: "300px" }}>
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
                        }}
                      >
                        <span>Thức ăn 1</span>
                        &nbsp; &nbsp;
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <button
                            class="button is-primary"
                            style={{
                              borderRadius: "50%",
                              width: "10px",
                              height: "30px",
                            }}
                          >
                            <FontAwesomeIcon icon={faHeart} />
                          </button>
                          &nbsp;
                          <h6 class="subtitle is-6">1200</h6>
                        </div>
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
                        <span>4.5/5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <a href="/#" className="has-text-primary title is-4">
          Xem tất cả
        </a>
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
              <div className="card" style={{ width: "300px", height: "370px" }}>
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
                        }}
                      >
                        <span>Thực đơn 1</span>
                        &nbsp; &nbsp;
                        <button
                          class="button is-primary"
                          style={{
                            borderRadius: "50%",
                            width: "10px",
                            height: "30px",
                          }}
                        >
                          <FontAwesomeIcon icon={faHeart} />
                        </button>
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
                        <span>4.5/5</span>
                      </div>
                      <div style={{ marginTop: 5 }}>
                        <p>Ngày cập nhật: 10/9/2023</p>
                      </div>
                      <p className="subtitle is-6" style={{ marginTop: 10 }}>
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Cá
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Bột
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Cà chua
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Hành tây
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Thịt lợn
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Tôm hùm
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="card" style={{ width: "300px", height: "370px" }}>
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
                        }}
                      >
                        <span>Thực đơn 1</span>
                        &nbsp; &nbsp;
                        <button
                          class="button is-primary"
                          style={{
                            borderRadius: "50%",
                            width: "10px",
                            height: "30px",
                          }}
                        >
                          <FontAwesomeIcon icon={faHeart} />
                        </button>
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
                        <span>4.5/5</span>
                      </div>
                      <div style={{ marginTop: 5 }}>
                        <p>Ngày cập nhật: 10/9/2023</p>
                      </div>
                      <p className="subtitle is-6" style={{ marginTop: 10 }}>
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Cá
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Bột
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Cà chua
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Hành tây
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Thịt lợn
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Tôm hùm
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="card" style={{ width: "300px", height: "370px" }}>
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
                        }}
                      >
                        <span>Thực đơn 1</span>
                        &nbsp; &nbsp;
                        <button
                          class="button is-primary"
                          style={{
                            borderRadius: "50%",
                            width: "10px",
                            height: "30px",
                          }}
                        >
                          <FontAwesomeIcon icon={faHeart} />
                        </button>
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
                        <span>4.5/5</span>
                      </div>
                      <div style={{ marginTop: 5 }}>
                        <p>Ngày cập nhật: 10/9/2023</p>
                      </div>
                      <p className="subtitle is-6" style={{ marginTop: 10 }}>
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Cá
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Bột
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Cà chua
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Hành tây
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Thịt lợn
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Tôm hùm
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="card" style={{ width: "300px", height: "370px" }}>
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
                        }}
                      >
                        <span>Thực đơn 1</span>
                        &nbsp; &nbsp;
                        <button
                          class="button is-primary"
                          style={{
                            borderRadius: "50%",
                            width: "10px",
                            height: "30px",
                          }}
                        >
                          <FontAwesomeIcon icon={faHeart} />
                        </button>
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
                        <span>4.5/5</span>
                      </div>
                      <div style={{ marginTop: 5 }}>
                        <p>Ngày cập nhật: 10/9/2023</p>
                      </div>
                      <p className="subtitle is-6" style={{ marginTop: 10 }}>
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Cá
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Bột
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Cà chua
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Hành tây
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Thịt lợn
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Tôm hùm
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="card" style={{ width: "300px", height: "370px" }}>
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
                        }}
                      >
                        <span>Thực đơn 1</span>
                        &nbsp; &nbsp;
                        <button
                          class="button is-primary"
                          style={{
                            borderRadius: "50%",
                            width: "10px",
                            height: "30px",
                          }}
                        >
                          <FontAwesomeIcon icon={faHeart} />
                        </button>
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
                        <span>4.5/5</span>
                      </div>
                      <div style={{ marginTop: 5 }}>
                        <p>Ngày cập nhật: 10/9/2023</p>
                      </div>
                      <p className="subtitle is-6" style={{ marginTop: 10 }}>
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Cá
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Bột
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Cà chua
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Hành tây
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Thịt lợn
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Tôm hùm
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="card" style={{ width: "300px", height: "370px" }}>
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
                        }}
                      >
                        <span>Thực đơn 1</span>
                        &nbsp; &nbsp;
                        <button
                          class="button is-primary"
                          style={{
                            borderRadius: "50%",
                            width: "10px",
                            height: "30px",
                          }}
                        >
                          <FontAwesomeIcon icon={faHeart} />
                        </button>
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
                        <span>4.5/5</span>
                      </div>
                      <div style={{ marginTop: 5 }}>
                        <p>Ngày cập nhật: 10/9/2023</p>
                      </div>
                      <p className="subtitle is-6" style={{ marginTop: 10 }}>
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Cá
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Bột
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Cà chua
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Hành tây
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Thịt lợn
                        </button>
                        &nbsp; &nbsp;
                        <button class="button is-primary is-light is-small is-0-mobile mb-2">
                          Tôm hùm
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <a href="/#" className="has-text-primary title is-4">
          Xem tất cả
        </a>
      </div>
      <div style={{ marginBottom: "30px", marginTop: 20 }}>
        <h4 className="title is-4" style={{ textAlign: "center" }}>
          Thức ăn mới được cập nhật
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
              <div className="card" style={{ width: "300px", height: "300px" }}>
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
                        }}
                      >
                        <span>Thức ăn 1</span>
                        &nbsp; &nbsp;
                        <button
                          class="button is-primary"
                          style={{
                            borderRadius: "50%",
                            width: "10px",
                            height: "30px",
                          }}
                        >
                          <FontAwesomeIcon icon={faHeart} />
                        </button>
                      </p>

                      <div style={{ marginTop: 5 }}>
                        <p>Ngày cập nhật: 10/9/2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="card" style={{ width: "300px", height: "300px" }}>
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
                        }}
                      >
                        <span>Thức ăn 1</span>
                        &nbsp; &nbsp;
                        <button
                          class="button is-primary"
                          style={{
                            borderRadius: "50%",
                            width: "10px",
                            height: "30px",
                          }}
                        >
                          <FontAwesomeIcon icon={faHeart} />
                        </button>
                      </p>
                      <div style={{ marginTop: 5 }}>
                        <p>Ngày cập nhật: 10/9/2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="card" style={{ width: "300px", height: "300px" }}>
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
                        }}
                      >
                        <span>Thức ăn 1</span>
                        &nbsp; &nbsp;
                        <button
                          class="button is-primary"
                          style={{
                            borderRadius: "50%",
                            width: "10px",
                            height: "30px",
                          }}
                        >
                          <FontAwesomeIcon icon={faHeart} />
                        </button>
                      </p>
                      <div style={{ marginTop: 5 }}>
                        <p>Ngày cập nhật: 10/9/2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <a href="/#" className="has-text-primary title is-4">
          Xem tất cả
        </a>
      </div>
    </>
  );
};

export default Home;
