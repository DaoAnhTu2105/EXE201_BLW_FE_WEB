import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faList } from "@fortawesome/free-solid-svg-icons";

const Filter = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        class="field"
        style={{
          width: "500px",
          marginTop: "30px",
        }}
      >
        <p class="control has-icons-left has-icons-right">
          <input
            class="input is-primary"
            type="text"
            placeholder="Tìm kiếm ở đây"
          />
          <span class="icon is-small is-left">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </p>
      </div>
      &nbsp; &nbsp;
      <button
        style={{
          width: "50px",
          height: "50px",
          marginTop: 15,
          border: "none",
          backgroundColor: "white",
          fontSize: 30,
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon
          icon={faList}
          style={{ color: "hsl(171, 100%, 41%)" }}
        />
      </button>
    </div>
  );
};

export default Filter;
