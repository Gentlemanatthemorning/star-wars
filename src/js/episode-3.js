import React from "react";

class ShowMore extends React.Component {
  state = {
    more: false
  };

  handleClick = () => {
    this.setState({
      more: true
    });
  };

  render() {
    return (
      <div>
        {this.state.more ? (
          this.props.children
        ) : (
          // eslint-disable-next-line
          <img
            onClick={this.handleClick}
            className="img-click"
            src="https://vignette.wikia.nocookie.net/thegamingfamily/images/1/1f/Star-Wars-3-Revenge-of-the-Sith-%E0%B8%8B%E0%B8%B4%E0%B8%98%E0%B8%8A%E0%B8%B3%E0%B8%A3%E0%B8%B0%E0%B9%81%E0%B8%84%E0%B9%89%E0%B8%99.jpg/revision/latest?cb=20140922193631"
            alt=""
          />
        )}
      </div>
    );
  }
}

const Episode3 = () => (
  <ShowMore>
    <div className="img-click-container">
      <img
        className="img-click"
        src="https://vignette.wikia.nocookie.net/thegamingfamily/images/1/1f/Star-Wars-3-Revenge-of-the-Sith-%E0%B8%8B%E0%B8%B4%E0%B8%98%E0%B8%8A%E0%B8%B3%E0%B8%A3%E0%B8%B0%E0%B9%81%E0%B8%84%E0%B9%89%E0%B8%99.jpg/revision/latest?cb=20140922193631"
        alt=""
      />
      <p className="img-click-text">
        Star Wars: Episode III – Revenge of the Sith is a 2005 American epic
        space opera film written and directed by George Lucas. It is the sixth
        entry of the Star Wars film series and stars Ewan McGregor, Natalie
        Portman, Hayden Christensen, Ian McDiarmid, Samuel L. Jackson,
        Christopher Lee, Anthony Daniels, Kenny Baker, and Frank Oz. A sequel to
        The Phantom Menace (1999) and Attack of the Clones (2002), it is the
        third and final installment in the Star Wars prequel trilogy. The film
        begins three years after the onset of the Clone Wars. The Jedi Knights
        are spread across the galaxy, leading a massive war against the
        Separatists. The Jedi Council dispatches Jedi Master Obi-Wan Kenobi to
        eliminate the notorious General Grievous, leader of the Separatist Army.
        Meanwhile, Jedi Knight Anakin Skywalker grows close to Palpatine, the
        Supreme Chancellor of the Galactic Republic and, unknown to the public,
        a Sith Lord known as Darth Sidious. Their deepening friendship threatens
        the Jedi Order, the Republic, and Anakin himself. Lucas began writing
        the script before production of Attack of the Clones ended. Production
        of Revenge of the Sith started in September 2003, and filming took place
        in Australia with additional locations in Thailand, Switzerland, China,
        Italy and the United Kingdom. Revenge of the Sith premiered on May 15,
        2005, at the Cannes Film Festival, then released worldwide on May 19,
        2005. The film received generally favorable reviews from critics,
        especially in contrast to the mixed reviews of the previous two
        prequels: praise was directed towards its action sequences, mature
        themes, musical score, visual effects, and the performances of McGregor,
        McDiarmid, Oz, and Jimmy Smits; criticism was aimed at the film's
        screenplay, inconsistent tone, and Christensen's performance. Revenge of
        the Sith broke several box office records during its opening week and
        went on to earn over $848 million worldwide,[2] making it, at the time,
        the third-highest-grossing film in the Star Wars franchise, unadjusted
        for inflation. It was the highest-grossing film in the U.S. in 2005 and
        the second-highest grossing film worldwide, behind Harry Potter and the
        Goblet of Fire.[2] The film also holds the record for the highest
        opening day gross on a Thursday, making $50 million.
      </p>
    </div>
  </ShowMore>
);

export default Episode3;
