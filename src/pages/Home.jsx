import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";

function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>

        <div className="home_headerLRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home_body">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/PP_icono_2019.svg" />
        <div className="input_container">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
