import React from "react";
import App from "./Weather/App";
import { Link } from "react-router-dom";

class Logo extends React.Component {
  render() {
    return (
      <section>
        <div className="main__logo">
          <div className="container">
            <div className="parallax" />
            <App />
            <div className="parallax1">
              <div className="big__circle">
                <div className="small__circle" />
                <div className="bb-8" />
              </div>
            </div>
            <div className="label__container">
              <div className="first__label">
                <div className="label__box__1">
                  <h3 className="label__box__option1">Jedi</h3>
                  <div className="label__box__price">
                    <span className="label__box__price__text1" />
                  </div>
                  <ul className="label__box__service__1">
                    <li>choose</li>
                    <li>your</li>
                    <li>side</li>
                  </ul>
                  <button className="label__box__button1">
                    <Link to="/about/jedi">choose</Link>
                  </button>
                </div>
              </div>
              <div className="second__label">
                <div className="label__box__2">
                  <h3 className="label__box__option2">Sith</h3>
                  <div className="label__box__price">
                    <span className="label__box__price__text2" />
                  </div>
                  <ul className="label__box__service__2">
                    <li>choose</li>
                    <li>your</li>
                    <li>side</li>
                  </ul>
                  <button className="label__box__button2">
                    <Link to="/about/sith">choose</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Logo;
