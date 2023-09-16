import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faMoneyCheck,
  faPhoneAlt,
  faCog,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <div className="container is-max-widescreen mt-5 mb-5">
      <div className="columns">
        <div
          className="column is-one-quarter"
          style={{
            border: "2px solid hsl(171, 100%, 41%)",
            borderRadius: "10px",
          }}
        >
          <h4 className="title is-4"> Tùy chỉnh</h4>
          <ul>
            <li
              style={{
                display: "flex",
              }}
            >
              <FontAwesomeIcon
                icon={faUser}
                size="lg"
                className="has-text-primary"
              />
              <span className="title is-5 pl-4">Tài khoản</span>
            </li>
            <hr className="is-divider mt-3 mb-3" />
            <li>
              <FontAwesomeIcon
                icon={faHeart}
                size="lg"
                className="has-text-primary"
              />
              <span className="title is-5 pl-4">Yêu thích</span>
            </li>
            <hr className="is-divider mt-3 mb-3" />
            <li>
              <FontAwesomeIcon
                icon={faMoneyCheck}
                size="lg"
                className="has-text-primary"
              />
              <span className="title is-5 pl-4">Gói cao cấp</span>
            </li>
            <hr className="is-divider mt-3 mb-3" />
            <li>
              <FontAwesomeIcon
                icon={faPhoneAlt}
                size="lg"
                className="has-text-primary"
              />
              <span className="title is-5 pl-4">Liên hệ</span>
            </li>
            <hr className="is-divider mt-3 mb-3" />
            <li>
              <FontAwesomeIcon
                icon={faCog}
                size="lg"
                className="has-text-primary"
              />
              <span className="title is-5 pl-4">Cài đặt</span>
            </li>
            <hr className="is-divider mt-3 mb-3" />
            <li>
              <FontAwesomeIcon
                icon={faQuestionCircle}
                size="lg"
                className="has-text-primary"
              />
              <span className="title is-5 pl-4">Trợ giúp & FAQS</span>
            </li>
          </ul>
        </div>
        <div className="column is-two-thirds">Auto</div>
      </div>
    </div>
  );
};

export default Profile;
