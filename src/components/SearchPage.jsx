import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../stateProvider";
import useGoogleSearch from "../useGoogleSearch";
import Response from "../response";
import { Link } from "react-router-dom";
import Search from "./Search";
import { ListItemSecondaryAction } from "@material-ui/core";

function SearchPage() {
  const [{ term = "hello" }, dispatch] = useStateValue();
  const data = Response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img alt="" src="./images/Withlogo.png" />
        </Link>
        <div className="searchPage_headerBody">
          <Search hideButtons />
        </div>
      </div>

      {true && (
        <div className="searchPage_results">
          <p className="searchPage_resultsCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage_result">
              <a href={item.link}>{item.displayLink}</a>
              <a className="searchPage_resultTitle" href={item.link}>
                <h2>{item.link}</h2>
              </a>
              <p className="searchPage_resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}

      <div className="searchPage_results"></div>
    </div>
  );
}

export default SearchPage;
