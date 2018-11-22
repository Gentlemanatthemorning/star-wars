import React from "react";
require("../scss/style.scss");

class Jedi extends React.Component {
  render() {
    return (
      <section>
        <div className="main__logo">
          <div className="container">
            <h1 className="main__logo__title">#READ MORE ABOUT JEDI</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default Jedi;
