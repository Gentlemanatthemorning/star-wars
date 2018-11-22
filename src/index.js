import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Logo from "./App.js";
import Movies from "./movies.js";
import Books from "./books.js";
import Jedi from "./jedi.js";
import Sith from "./sith.js";

require("./scss/style.scss");

class Header extends React.Component {
  render() {
    return (
      <div className="page__header">
        <div className="page__header__container">
          <nav className="page__nav">
            <ul className="page__nav__list">
              <li>
                <h1 className="page__logo">
                  <Link to="/" className="page__logo__link">
                    <span>Star Wars</span>
                  </Link>
                </h1>
              </li>
              <li>
                <Link to="/movies">#MOVIES</Link>
              </li>
              <li>
                <Link to="/books">#BOOKS</Link>
              </li>
              <li>
                <Link to="/about/jedi">#ABOUT JEDI</Link>
              </li>
              <li>
                <Link to="/about/sith">#ABOUT SITH</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

class NotFound extends React.Component {
  render() {
    return <h1> Not Found </h1>;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <HashRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Logo} />
          <Route path="/movies" component={Movies} />
          <Route path="/books" component={Books} />
          <Route path="/about/jedi" component={Jedi} />
          <Route path="/about/sith" component={Sith} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </HashRouter>,
    document.getElementById("root")
  );
});
