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
          <img alt="" className="logo2" src="./images/Withlogo.png" />
        </Link>
        <div className="searchPage_headerBody">
          <Search hideButtons />
        </div>
      </div>

      {true && (
        <div className="search_Page_results">
          <p className="search_Page_resultCount ">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="search_Page_result">
              <a href={item.link}>{item.displayLink}</a>
              <a className="search_Page_resultTItle " href={item.link}>
                <h2>{item.link}</h2>
              </a>
              <p className="searchPage_resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
