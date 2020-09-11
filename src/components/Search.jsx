import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../reducer";
import { useStateValue } from "../stateProvider";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search_buttons">
          <Button variant="outlined" type="submit" onClick={search}>
            I feel dirty
          </Button>
          <Button variant="outlined">Google Search</Button>
        </div>
      ) : (
        <div className="search_buttons">
          <Button
            className="search_buttonsHid"
            variant="outlined"
            type="submit"
            onClick={search}
          >
            I feel dirty
          </Button>
          <Button className="search_buttonsHid" variant="outlined">
            Google Search
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
