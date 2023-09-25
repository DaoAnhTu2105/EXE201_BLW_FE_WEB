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
//SỬA LẠI DÀNH CHO CÔNG THỨC
const Recipe = () => {
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
            style={{ width: "1200px", height: "600px" }}
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
          Thực đơn được truy cập nhiều nhất tháng
        </h4>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="grid-container-food">
            <div className="grid-item-food">
              <div className="card" style={{ width: "300px", height: "300px" }}>
                <div className="card-image">
                  <figure className="image is-3by2">
                    <img src={carrot} alt="Placeholder" />
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
                          <h6 className="subtitle is-6 mb-0">1200</h6>
                        </div>
                      </p>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <div>
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
                        <div>
                          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item-food">
              <div className="card" style={{ width: "300px", height: "300px" }}>
                <div className="card-image">
                  <figure className="image is-3by2">
                    <img src={carrot} alt="Placeholder" />
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
                          <h6 className="subtitle is-6 mb-0">1200</h6>
                        </div>
                      </p>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <div>
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
                        <div>
                          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item-food">
              <div className="card" style={{ width: "300px", height: "300px" }}>
                <div className="card-image">
                  <figure className="image is-3by2">
                    <img src={carrot} alt="Placeholder" />
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
                          <h6 className="subtitle is-6 mb-0">1200</h6>
                        </div>
                      </p>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <div>
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
                        <div>
                          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            <div className="grid-container-food">
              <div className="grid-item-food">
                <div
                  className="card"
                  style={{ width: "300px", height: "370px" }}
                >
                  <div className="card-image">
                    <figure className="image is-3by2">
                      <img src={carrot} alt="Placeholder" />
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
              <div className="grid-item-food">
                <div
                  className="card"
                  style={{ width: "300px", height: "370px" }}
                >
                  <div className="card-image">
                    <figure className="image is-3by2">
                      <img src={carrot} alt="Placeholder" />
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
              <div className="grid-item-food">
                <div
                  className="card"
                  style={{ width: "300px", height: "370px" }}
                >
                  <div className="card-image">
                    <figure className="image is-3by2">
                      <img src={carrot} alt="Placeholder" />
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
      </div>
    </>
  );
};

export default Recipe;
