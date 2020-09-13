import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";
import SearchPage from "../components/SearchPage";

function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          <Link to="/about"><img className="img" src="./images/Picpock.png" alt="" /></Link>
          <Link to="/store"><img className="img" src="./images/Chillflix.png" alt="" /></Link>
        </div>

        <div className="home_headerLRight">
          <Link to="/store"><img className="img" src="./images/Shopper.png" alt="" /></Link>
          <Link to="/images">Images</Link>
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
