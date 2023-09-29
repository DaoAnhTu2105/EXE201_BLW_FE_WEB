import React from "react";
import "./index.css";
import expertImg from "../../image/expert.jpg";

const ListExpert = () => {
  return (
    <div class="container is-fluid">
      <h3 class="title is-3" style={{ paddingTop: 20, marginLeft: 20 }}>
        Danh sách chuyên gia
      </h3>
      <div class="column is-half ml-5">
        <h4 class="title is-4">Bs Huỳnh Hà Thúy Hằng</h4>
        <div style={{ width: 650, display: "flex", alignItems: "center" }}>
          <ul style={{ listStyleType: "disc" }}>
            <li style={{ padding: "10px 0px" }}>
              Tốt nghiệp Bác sĩ Răng Hàm Mặt Đại Học Y Cần Thơ
            </li>
            <li style={{ padding: "10px 0px" }}>
              Chứng chỉ chỉnh nha Bệnh viện Răng Hàm Mặt TP.HCM
            </li>
            <li style={{ padding: "10px 0px" }}>
              Hoàn thành khóa đào tạo nâng cao chỉnh nha và Invisalign của Mỹ
            </li>
            <li style={{ padding: "10px 0px" }}>
              Hoàn thành khóa đào tạo chỉnh nha của Đại học Georgia Health
              Science University
            </li>
            <li style={{ padding: "10px 0px" }}>
              Hơn 14 năm kinh nghiệm niềng răng, nắn chỉnh răng
            </li>
          </ul>
          <img
            src={expertImg}
            alt=""
            style={{ width: "200px", height: "250px" }}
          />
        </div>
      </div>
      <div class="column is-half ml-5">
        <h4 class="title is-4">Bs Huỳnh Hà Thúy Hằng</h4>
        <div style={{ width: 650, display: "flex", alignItems: "center" }}>
          <ul style={{ listStyleType: "disc" }}>
            <li style={{ padding: "10px 0px" }}>
              Tốt nghiệp Bác sĩ Răng Hàm Mặt Đại Học Y Cần Thơ
            </li>
            <li style={{ padding: "10px 0px" }}>
              Chứng chỉ chỉnh nha Bệnh viện Răng Hàm Mặt TP.HCM
            </li>
            <li style={{ padding: "10px 0px" }}>
              Hoàn thành khóa đào tạo nâng cao chỉnh nha và Invisalign của Mỹ
            </li>
            <li style={{ padding: "10px 0px" }}>
              Hoàn thành khóa đào tạo chỉnh nha của Đại học Georgia Health
              Science University
            </li>
            <li style={{ padding: "10px 0px" }}>
              Hơn 14 năm kinh nghiệm niềng răng, nắn chỉnh răng
            </li>
          </ul>
          <img
            src={expertImg}
            alt=""
            style={{ width: "200px", height: "250px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ListExpert;
