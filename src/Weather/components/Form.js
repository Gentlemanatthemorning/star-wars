import React from "react";

const Form = props => (
  <form onSubmit={props.getWeather}>
    <h1 style={{ paddingBottom: "15px", color: "#0095ff" }}>
      Find out what the weather on you planet...
    </h1>
    <input type="text" name="city" placeholder="City..." />
    <input type="text" name="country" placeholder="Country..." />
    <button className="form-button">
      <img src="../img/button.jpg" alt="" />
    </button>
  </form>
);

export default Form;
