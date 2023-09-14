import React from "react";
import { Link } from "react-router-dom";

const Plan = () => {
  return (
    <div className="container mb-5">
      <div className="container is-max-desktop">
        <div className="notification is-primary is-fullheight">
          <h3 className="title is-3 has-text-dark">
            Kế hoạch hướng dẫn ăn uống chi tiết cho con của bạn
          </h3>
          <div className="box">
            <Link to="/planDetail" style={{ textDecoration: "none" }}>
              <h5
                className="title is-5 has-text-dark"
                style={{ textAlign: "center" }}
              >
                6 tháng - 30 ngày đầu tiên
              </h5>
            </Link>
          </div>
          <div className="columns">
            <div className="column is-half">
              <div className="box mb-0">
                <a href="/" style={{ textDecoration: "none" }}>
                  <h5
                    className="title is-5 has-text-dark"
                    style={{ textAlign: "center" }}
                  >
                    7 tháng tuổi
                  </h5>
                </a>
              </div>
            </div>
            <div className="column is-half">
              <div className="box mb-0">
                <a href="/" style={{ textDecoration: "none" }}>
                  <h5
                    className="title is-5 has-text-dark"
                    style={{ textAlign: "center" }}
                  >
                    8 tháng tuổi
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-third">
              <div className="box mb-0">
                <a href="/" style={{ textDecoration: "none" }}>
                  <h5
                    className="title is-5 has-text-dark"
                    style={{ textAlign: "center" }}
                  >
                    9 tháng tuổi
                  </h5>
                </a>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="box mb-0">
                <a href="/" style={{ textDecoration: "none" }}>
                  <h5
                    className="title is-5 has-text-dark"
                    style={{ textAlign: "center" }}
                  >
                    10 tháng tuổi
                  </h5>
                </a>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="box mb-0">
                <a href="/" style={{ textDecoration: "none" }}>
                  <h5
                    className="title is-5 has-text-dark"
                    style={{ textAlign: "center" }}
                  >
                    11 tháng tuổi
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="box">
            <a href="/" style={{ textDecoration: "none" }}>
              <h5
                className="title is-5 has-text-dark"
                style={{ textAlign: "center" }}
              >
                12 tháng trở lên và bắt đầu ăn cùng gia đình
              </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
