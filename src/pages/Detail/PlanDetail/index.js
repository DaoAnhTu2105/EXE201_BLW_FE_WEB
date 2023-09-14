import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Rating } from "@mui/material";
import img from "../../../image/recipe1.jpg";
import "./index.js";
const PlanDetail = () => {
  const [buttonDate, setButtonDate] = useState(true);
  const [buttonWeek, setButtonWeek] = useState(false);
  const [planDetail, setPlanDetail] = useState({
    1: [
      {
        id: 1,
        recipe: "Thức ăn 1",
        isBreak: true,
      },
      {
        id: 2,
        recipe: "Thức ăn 2",
        isSnack: true,
      },
    ],
    2: [
      {
        id: 3,
        recipe: "Thức ăn 3",
        isLunch: true,
      },
      {
        id: 4,
        recipe: "Thức ăn 4",
        isEvening: true,
      },
    ],
    3: [
      {
        id: 5,
        recipe: "Thức ăn 5",
        isBreak: true,
      },
      {
        id: 6,
        recipe: "Thức ăn 6",
        isLunch: true,
      },
    ],
    4: [
      {
        id: 7,
        recipe: "Thức ăn 7",
        isBreak: true,
      },
      {
        id: 8,
        recipe: "Thức ăn 8",
        isLunch: true,
      },
    ],
    5: [
      {
        id: 9,
        recipe: "Thức ăn 9",
        isBreak: true,
      },
      {
        id: 10,
        recipe: "Thức ăn 10",
        isLunch: true,
      },
    ],
    6: [
      {
        id: 11,
        recipe: "Thức ăn 11",
        isBreak: true,
      },
      {
        id: 12,
        recipe: "Thức ăn 12",
        isLunch: true,
      },
    ],
    7: [
      {
        id: 13,
        recipe: "Thức ăn 13",
        isEvening: true,
      },
      {
        id: 14,
        recipe: "Thức ăn 14",
        isLunch: true,
      },
    ],
    8: [
      {
        id: 15,
        recipe: "Thức ăn 15",
        isBreak: true,
      },
      {
        id: 16,
        recipe: "Thức ăn 16",
        isEvening: true,
      },
    ],
  });

  const itemsPerPage = 7;
  const pageCount = Object.keys(planDetail).length;
  const [currentPage, setCurrentPage] = useState(0);
  const [currentWeekPage, setCurrentWeekPage] = useState(0);
  const currentDate = Object.keys(planDetail)[currentPage];
  const currentItems = planDetail[currentDate];
  const currentWeekStartIndex = currentWeekPage * itemsPerPage;
  const currentWeekEndIndex = currentWeekStartIndex + itemsPerPage;
  const currentBreakfastItems = currentItems.filter((item) => item.isBreak);
  const currentLunchItems = currentItems.filter((item) => item.isLunch);
  const currentSnackItems = currentItems.filter((item) => item.isSnack);
  const currentEveningItems = currentItems.filter((item) => item.isEvening);
  const currentWeekDates = Object.keys(planDetail).slice(
    currentWeekStartIndex,
    currentWeekEndIndex
  );
  const currentWeekItems = currentWeekDates.flatMap(
    (date) => planDetail[date] || []
  );

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleWeeklyPageClick = ({ selected }) => {
    setCurrentWeekPage(selected);
  };

  const calculateWeekPageCount = () => {
    const daysPerPage = 7;
    return Math.ceil(pageCount / daysPerPage);
  };
  const currentWeekNumber = Math.floor(currentWeekPage) + 1;

  const handleChangeDate = () => {
    setButtonDate(true);
    setButtonWeek(false);
  };
  const handleChangeWeek = () => {
    setButtonDate(false);
    setButtonWeek(true);
  };

  return (
    <div className="container is-widescreen">
      <h3 className="title is-3 mb-5" style={{ textAlign: "center" }}>
        Kế hoạch chi tiết cho 6 tháng - 30 ngày đầu tiên
      </h3>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <button
          className="button is-primary"
          style={{ borderRadius: "10px", width: 150, marginRight: 20 }}
          onClick={handleChangeDate}
        >
          Ngày
        </button>
        <button
          className="button is-primary"
          style={{ borderRadius: "10px", width: 150, marginLeft: 20 }}
          onClick={handleChangeWeek}
        >
          Tuần
        </button>
      </div>
      {buttonDate && (
        <>
          <div style={{ marginTop: 30 }}>
            <div
              style={{
                width: 600,
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
              />
            </div>
          </div>

          <div className="mt-5 mb-5">
            <h4 className="title is-4" style={{ textAlign: "center" }}>
              Buổi sáng
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
                <div className="grid-container">
                  {currentBreakfastItems.length === 0 ? (
                    <>
                      <div className="grid-item"></div>
                      <div className="grid-item">
                        <div
                          className="notification is-primary is-light"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                          }}
                        >
                          Kế hoạch cho buổi sáng không khả dụng cho ngày này!!!
                        </div>
                      </div>
                    </>
                  ) : (
                    currentBreakfastItems.map((item) => (
                      <div className="grid-item">
                        <div
                          className="card"
                          style={{ width: "300px", height: "320px" }}
                        >
                          <div className="card-image">
                            <figure className="image is-3by2">
                              <img src={img} alt="Placeholder" />
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
                                    width: "160px",
                                    height: "23px",
                                    overflow: "hidden",
                                  }}
                                >
                                  Thực đơn 1
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
                                  <span>4.5/5</span>
                                </div>
                                <div style={{ marginTop: 5 }}>
                                  <p>Ngày cập nhật: 10/9/2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 mb-5">
            <h4 className="title is-4" style={{ textAlign: "center" }}>
              Buổi trưa
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
                <div className="grid-container">
                  {currentLunchItems.length === 0 ? (
                    <>
                      <div className="grid-item"></div>
                      <div className="grid-item">
                        <div
                          className="notification is-primary is-light"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                          }}
                        >
                          Kế hoạch cho buổi trưa không khả dụng cho ngày này!!!
                        </div>
                      </div>
                    </>
                  ) : (
                    currentLunchItems.map((item) => (
                      <div className="grid-item">
                        <div
                          className="card"
                          style={{ width: "300px", height: "320px" }}
                        >
                          <div className="card-image">
                            <figure className="image is-3by2">
                              <img src={img} alt="Placeholder" />
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
                                    width: "160px",
                                    height: "23px",
                                    overflow: "hidden",
                                  }}
                                >
                                  Thực đơn 1
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
                                  <span>4.5/5</span>
                                </div>
                                <div style={{ marginTop: 5 }}>
                                  <p>Ngày cập nhật: 10/9/2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 mb-5">
            <h4 className="title is-4" style={{ textAlign: "center" }}>
              Ăn xế chiều
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
                <div className="grid-container">
                  {currentSnackItems.length === 0 ? (
                    <>
                      <div className="grid-item"></div>
                      <div className="grid-item">
                        <div
                          className="notification is-primary is-light"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                          }}
                        >
                          Kế hoạch ăn xế chiều không khả dụng cho ngày này!!!
                        </div>
                      </div>
                    </>
                  ) : (
                    currentSnackItems.map((item) => (
                      <div className="grid-item">
                        <div
                          className="card"
                          style={{ width: "300px", height: "320px" }}
                        >
                          <div className="card-image">
                            <figure className="image is-3by2">
                              <img src={img} alt="Placeholder" />
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
                                    width: "160px",
                                    height: "23px",
                                    overflow: "hidden",
                                  }}
                                >
                                  Thực đơn 1
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
                                  <span>4.5/5</span>
                                </div>
                                <div style={{ marginTop: 5 }}>
                                  <p>Ngày cập nhật: 10/9/2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 mb-5">
            <h4 className="title is-4" style={{ textAlign: "center" }}>
              Buổi Tối
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
                <div className="grid-container">
                  {currentEveningItems.length === 0 ? (
                    <>
                      <div className="grid-item"></div>
                      <div className="grid-item">
                        <div
                          className="notification is-primary is-light"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                          }}
                        >
                          Kế hoạch cho buổi tối không khả dụng cho ngày này!!!
                        </div>
                      </div>
                    </>
                  ) : (
                    currentEveningItems.map((item) => (
                      <div className="grid-item">
                        <div
                          className="card"
                          style={{ width: "300px", height: "320px" }}
                        >
                          <div className="card-image">
                            <figure className="image is-3by2">
                              <img src={img} alt="Placeholder" />
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
                                    width: "160px",
                                    height: "23px",
                                    overflow: "hidden",
                                  }}
                                >
                                  Thực đơn 1
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
                                  <span>4.5/5</span>
                                </div>
                                <div style={{ marginTop: 5 }}>
                                  <p>Ngày cập nhật: 10/9/2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {buttonWeek && (
        <>
          <div style={{ marginTop: 30 }}>
            <div
              style={{
                width: 600,
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <ReactPaginate
                pageCount={calculateWeekPageCount()}
                onPageChange={handleWeeklyPageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
              />
            </div>
          </div>
          <div>
            <h4>Tuần {currentWeekNumber}</h4>
            <ul>
              {currentWeekDates.map((date) => (
                <li key={date}>
                  <h4>Ngày {date}</h4>
                  <ul>
                    {planDetail[date].map((item) => (
                      <>
                        {item.isBreak && (
                          <li key={item.id}>Buổi sáng: {item.recipe}</li>
                        )}
                        {item.isLunch && (
                          <li key={item.id}>Buổi trưa: {item.recipe}</li>
                        )}
                        {item.isEvening && (
                          <li key={item.id}>Buổi tối: {item.recipe}</li>
                        )}
                        {item.isSnack && (
                          <li key={item.id}>Snack: {item.recipe}</li>
                        )}
                      </>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default PlanDetail;
