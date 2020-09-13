import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../stateProvider";
import useGoogleSearch from "../useGoogleSearch";
import Response from "../response";
import { Link } from "react-router-dom";
import Search from "./Search";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const data = Response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            alt=""
            src="https://4.bp.blogspot.com/-c0HYC0CsITI/UBDb6v2nE4I/AAAAAAAAEHs/xb6UCx8Ka74/s1600/storm+thunder+lightning+night+sky+photo+pics+animation+gifs+free+download+3D+HD+wallpaper+background+ecards+decoration+graphic+arts+for+websites+amazing+landscape+with+cactuses+and+lightning.gif"
          />
        </Link>
        <div className="searchPage_headerBody">
          <Search hideButtons />
        </div>
      </div>

      <div className="searchPage_results"></div>
    </div>
  );
}

export default SearchPage;
