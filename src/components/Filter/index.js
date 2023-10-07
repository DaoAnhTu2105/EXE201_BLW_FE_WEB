import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { Rating } from "@mui/material";

const Filter = () => {
  return (
    <div>
      <h3 class="title is-4">
        <FontAwesomeIcon icon={faFilter} style={{ width: 18 }} /> &nbsp; Bộ lọc
        tìm kiếm
      </h3>
      <h6 class="subtitle is-6 mt-5 pl-3">Theo tháng tuổi</h6>
      <div class="pl-3">
        <label class="checkbox mb-2">
          <input type="checkbox" /> 6 tháng tuổi
        </label>
        <br />
        <label class="checkbox mt-3 mb-2">
          <input type="checkbox" /> 12 tháng tuổi
        </label>
        <br />
        <label class="checkbox mt-3 mb-2">
          <input type="checkbox" /> 18 tháng tuổi
        </label>
        <br />
        <label class="checkbox mt-3 mb-2">
          <input type="checkbox" /> 24 tháng tuổi
        </label>
        <br />
        <label class="checkbox mt-3 mb-2">
          <input type="checkbox" /> 36 tháng tuổi
        </label>
      </div>
      <hr class="is-divider has-background-dark" />
      <h6 class="subtitle is-6 mt-5 pl-3">Bữa ăn</h6>
      <div class="pl-3">
        <label class="checkbox mb-2">
          <input type="checkbox" /> Bữa sáng
        </label>
        <br />
        <label class="checkbox mt-3 mb-2">
          <input type="checkbox" /> Bữa trưa
        </label>
        <br />
        <label class="checkbox mt-3 mb-2">
          <input type="checkbox" /> Bữa chiều
        </label>
        <br />
        <label class="checkbox mt-3 mb-2">
          <input type="checkbox" /> Snack
        </label>
      </div>
      <hr class="is-divider has-background-dark" />
      <h6 class="subtitle is-6 mt-5 pl-3">Đánh giá</h6>
      <div class="pl-3">
        <div style={{ cursor: "pointer" }}>
          <Rating
            name="half-rating"
            defaultValue={5}
            precision={0.5}
            size="sm"
            readOnly
          />
        </div>
        <div
          style={{ display: "flex", alignContent: "center", cursor: "pointer" }}
        >
          <Rating
            name="half-rating"
            defaultValue={4}
            precision={0.5}
            size="sm"
            readOnly
          />
          <span class="subtitle is-6 pl-3 pt-1"> Trở lên</span>
        </div>

        <div
          style={{ display: "flex", alignContent: "center", cursor: "pointer" }}
        >
          <Rating
            name="half-rating"
            defaultValue={3}
            precision={0.5}
            size="sm"
            readOnly
          />
          <span class="subtitle is-6 pl-3 pt-1"> Trở lên</span>
        </div>
        <div
          style={{ display: "flex", alignContent: "center", cursor: "pointer" }}
        >
          <Rating
            name="half-rating"
            defaultValue={2}
            precision={0.5}
            size="sm"
            readOnly
          />
          <span class="subtitle is-6 pl-3 pt-1"> Trở lên</span>
        </div>
        <div
          style={{ display: "flex", alignContent: "center", cursor: "pointer" }}
        >
          <Rating
            name="half-rating"
            defaultValue={1}
            precision={0.5}
            size="sm"
            readOnly
          />
          <span class="subtitle is-6 pl-3 pt-1"> Trở lên</span>
        </div>
      </div>
      <hr class="is-divider has-background-dark" />
    </div>
  );
};

export default Filter;
