import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";

function Search() {
  const search = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input />
        <MicIcon />
      </div>

      <div className="search_buttons">
        <Button variant="outlined" onClick={search}>
          I feel dirty
        </Button>
        <Button variant="outlined">Google Search</Button>
      </div>
    </div>
  );
}

export default Search;
