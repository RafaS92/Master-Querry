import React from "react";
import { useStateValue } from "../stateProvider";
import useGoogleSearch from "../useGoogleSearch";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <h1>{term}</h1>
      </div>

      <div className="searchPage_results"></div>
    </div>
  );
}

export default SearchPage;
