import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faList } from "@fortawesome/free-solid-svg-icons";

const Search = ({ handleSearchName }) => {
  const [searchName, setSearchName] = useState("");
  const handleSearch = async (e) => {
    const result = e.target.value;
    await setSearchName(result);
    handleSearchName(result);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="field"
        style={{
          width: "500px",
          marginTop: "30px",
        }}
      >
        <p className="control has-icons-left has-icons-right">
          <input
            style={{ maxWidth: "500px" }}
            className="input is-primary"
            type="text"
            placeholder="Tìm kiếm ở đây"
            value={searchName}
            onChange={handleSearch}
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </p>
      </div>
      &nbsp; &nbsp;
      <button
        style={{
          width: "50px",
          height: "50px",
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

export default Search;
