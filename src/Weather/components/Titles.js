import React from "react";
import Clock from "./Clock";

const Titles = () => (
  <div>
    <h1 className="title-container__title">Planet Scaner</h1>
    <h3 className="title-container__subtitle">
      Find your weather is easier than those droids...
    </h3>
    <div className="title-container__subtitle">
      <Clock />
    </div>
  </div>
);

export default Titles;
