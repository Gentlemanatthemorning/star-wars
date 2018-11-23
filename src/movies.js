import React from "react";
import Episode1 from "./js/episode-1";
import Episode2 from "./js/episode-2";
import Episode3 from "./js/episode-3";

class Movies extends React.Component {
  render() {
    return (
      <section>
        <div className="main__logo">
          <div className="container1">
            <div className="parallax6">
              <h1 className="main__logo__title5">#READ MORE ABOUT MOVIES</h1>
            </div>
            <Episode1 />
            <Episode2 />
            <Episode3 />
          </div>
        </div>
      </section>
    );
  }
}

export default Movies;
