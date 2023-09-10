import React from "react";
import "./food.css";
import carrot from "../../image/carrot.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
//SỬA LẠI DÀNH CHO CÔNG THỨC
const Food = () => {
  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <h4 className="title is-4" style={{ textAlign: "center" }}>
          Thức ăn đề xuất trong tuần
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
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={carrot} alt="Placeholder" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="grid-item-food">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={carrot} alt="Placeholder" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="grid-item-food">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={carrot} alt="Placeholder" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="grid-item-food">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={carrot} alt="Placeholder" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className="title is-4" style={{ textAlign: "center" }}>
          Thức ăn được yêu thích nhiều nhất
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
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={carrot} alt="Placeholder" />
                  </figure>
                </div>
                <div
                  class="card-content"
                  style={{
                    padding: 0,
                    height: 40,
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                >
                  <div class="media">
                    <div
                      class="media-content"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: 40,
                      }}
                    >
                      <p class="subtitle is-6" style={{ marginBottom: 0 }}>
                        Cà rốt
                      </p>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item-food">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={carrot} alt="Placeholder" />
                  </figure>
                </div>
                <div
                  class="card-content"
                  style={{
                    padding: 0,
                    height: 40,
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                >
                  <div class="media">
                    <div
                      class="media-content"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: 40,
                      }}
                    >
                      <p class="subtitle is-6" style={{ marginBottom: 0 }}>
                        Cà rốt
                      </p>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item-food">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={carrot} alt="Placeholder" />
                  </figure>
                </div>
                <div
                  class="card-content"
                  style={{
                    padding: 0,
                    height: 40,
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                >
                  <div class="media">
                    <div
                      class="media-content"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: 40,
                      }}
                    >
                      <p class="subtitle is-6" style={{ marginBottom: 0 }}>
                        Cà rốt
                      </p>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item-food">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={carrot} alt="Placeholder" />
                  </figure>
                </div>
                <div
                  class="card-content"
                  style={{
                    padding: 0,
                    height: 40,
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                >
                  <div class="media">
                    <div
                      class="media-content"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: 40,
                      }}
                    >
                      <p class="subtitle is-6" style={{ marginBottom: 0 }}>
                        Cà rốt
                      </p>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
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
          <div className="grid-container-food">
            <div className="grid-item-food">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={carrot} alt="Placeholder" />
                  </figure>
                </div>
                <h6 class="subtitle is-6 is-marginless mt-2 mb-2">10/9/2023</h6>
                <div
                  class="card-content"
                  style={{
                    padding: 0,
                    height: 40,
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                >
                  <div class="media">
                    <div
                      class="media-content"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: 40,
                      }}
                    >
                      <p class="subtitle is-6" style={{ marginBottom: 0 }}>
                        Cà rốt
                      </p>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item-food">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={carrot} alt="Placeholder" />
                  </figure>
                </div>
                <h6 class="subtitle is-6 is-marginless mt-2 mb-2">10/9/2023</h6>
                <div
                  class="card-content"
                  style={{
                    padding: 0,
                    height: 40,
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                >
                  <div class="media">
                    <div
                      class="media-content"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: 40,
                      }}
                    >
                      <p class="subtitle is-6" style={{ marginBottom: 0 }}>
                        Cà rốt
                      </p>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item-food">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={carrot} alt="Placeholder" />
                  </figure>
                </div>
                <h6 class="subtitle is-6 is-marginless mt-2 mb-2">10/9/2023</h6>
                <div
                  class="card-content"
                  style={{
                    padding: 0,
                    height: 40,
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                >
                  <div class="media">
                    <div
                      class="media-content"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: 40,
                      }}
                    >
                      <p class="subtitle is-6" style={{ marginBottom: 0 }}>
                        Cà rốt
                      </p>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item-food">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={carrot} alt="Placeholder" />
                  </figure>
                </div>
                <h6 class="subtitle is-6 is-marginless mt-2 mb-2">10/9/2023</h6>
                <div
                  class="card-content"
                  style={{
                    padding: 0,
                    height: 40,
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                >
                  <div class="media">
                    <div
                      class="media-content"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: 40,
                      }}
                    >
                      <p class="subtitle is-6" style={{ marginBottom: 0 }}>
                        Cà rốt
                      </p>
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

export default Food;
