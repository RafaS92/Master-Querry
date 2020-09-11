import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";

function Search() {
  const [input, setInput] = useState("");

  const search = (e) => {
    e.preventDefault();
    console.log("object");
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      <div className="search_buttons">
        <Button variant="outlined" onClick={search}>
          I feel dirty
        </Button>
        <Button variant="outlined" type="submit">
          Google Search
        </Button>
      </div>
    </form>
  );
}

export default Search;
