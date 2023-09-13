import React from "react";
import { Rating } from "@mui/material";

const RecipeDetail = () => {
  return (
    <div className="container is-widescreen mt-5 mb-5">
      <h2 className="title is-2">Cơm khuôn, tôm hấp, bông cải xanh, chuối</h2>
      <p className="subtitle is-5 mt-1">Ngày cập nhật: 13/9/2023</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <Rating
          name="half-rating-read"
          defaultValue={3.5}
          precision={0.5}
          readOnly
          size="large"
        />
        <span className="subtitle is-4 pl-5">4.5/5 ratings</span>
      </div>
      <p>
        Ăn dặm chỉ huy (BLW - Baby Led Weaning) là phương pháp ăn dặm cho phép
        trẻ tự quyết định món ăn và cách ăn theo ý mình. Trẻ có thể bốc bằng
        tay, dùng thìa, dĩa để ăn mà không có sự trợ giúp của bố mẹ. Phương pháp
        này cũng giúp trẻ tăng vận động, rèn luyện sự linh hoạt, cách xử lý và
        tiếp nhận thức ăn một cách chủ động, giúp cho sự phát triển sau này của
        trẻ được tốt hơn.
      </p>
    </div>
  );
};

export default RecipeDetail;
