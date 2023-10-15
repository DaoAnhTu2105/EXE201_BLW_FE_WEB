import React from "react";
import Navbar from "../Navbar";
import Search from "../Search";
import Footer from "../Footer";
import "./index.css";
import Advertisement from "../Advertisement";
import Filter from "../Filter";
import { useState } from "react";
import { useQueryClient } from "react-query";

const LayoutNavSearchFooter = ({ children }) => {
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState([""]);
  const [meal, setMeal] = useState([""]);
  const [rate, setRate] = useState(0);
  const user = JSON.parse(localStorage.getItem("user"));
  const queryClient = useQueryClient();
  const searchApi = `https://blw-api.azurewebsites.net/api/Recipe/SearchRecipe`;
  const handleSearch = async (
    search = "",
    ageIds = [""],
    mealIds = [""],
    rating = 0
  ) => {
    try {
      await setName(search);
      await setAge(ageIds);
      await setMeal(mealIds);
      await setRate(rating);
      const response = await fetch(searchApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify({
          search,
          ageIds,
          mealIds,
          rating,
        }),
      });
      if (response.status === 204) {
        console.log("No content found.");
      } else {
        const searchNameData = await response.json();
        console.log(searchNameData);
        setSearch(searchNameData);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 70 }}>
        <Search
          handleSearchName={handleSearch}
          age={age}
          meal={meal}
          rate={rate}
        />
        <div className="layout-container">
          <div className="layout-sidebar">
            <article className="layout-content" style={{ height: 600 }}>
              <Filter handleSearchFilter={handleSearch} name={name} />
            </article>
          </div>
          <div className="layout-main-content">
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                  results: search,
                  key: child.props.id,
                });
              }
              return child;
            })}
          </div>
          <div className="layout-sidebar">
            <div className="layout-ads">
              <Advertisement />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LayoutNavSearchFooter;
