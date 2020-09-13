import React from "react";
import "./Home.css";
import { a } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";
import SearchPage from "../components/SearchPage";

function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          <a href="https://picpock-e2966.web.app/"><img className="img" src="./images/Picpock.png" alt="" /></a>
          <a href="https://chillflix-f03ad.web.app/"><img className="img" src="./images/Chillflix.png" alt="" /></a>
        </div>

        <div className="home_headerLRight">
          <a href="https://shopzon-9dc37.web.app/"><img className="img" src="./images/Shopper.png" alt="" /></a>
          <a to="/images">Images</a>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home_body">
        <img className="logo" src="./images/Withlogo.png" alt="" />
        <div className="input_container">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
