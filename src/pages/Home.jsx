import React from "react";
import "./Home.css";
import Search from "../components/Search";


function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          <a href="https://picpock-e2966.web.app/"><img className="img " src="./images/Logopic.png" alt="" /></a>
          <a href="https://chillflix-f03ad.web.app/"><img className="img " src="./images/Chillflix.png" alt="" /></a>
        </div>

        <div className="home_headerLRight">
          <a href="https://shopzon-9dc37.web.app/"><img className="img " src="./images/Shopper.png" alt="" /></a>
          <a href="https://www.rafaelsvaldez.com/"><img className="img2 " src="./images/RV.jpg" alt="" /></a>

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
