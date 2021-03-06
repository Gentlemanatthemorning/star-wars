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
            src="http://ris.mk/wordpress/wp-content/uploads/2017/02/MV5BM2FmZGIwMzAtZTBkMS00M2JiLTk2MDctM2FlNTQ2OWYwZDZkXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UY1200_CR8506301200_AL_.jpg"
            alt=""
          />
        )}
      </div>
    );
  }
}

const Episode1 = () => (
  <ShowMore>
    <div className="img-click-container">
      <img
        className="img-click"
        src="http://ris.mk/wordpress/wp-content/uploads/2017/02/MV5BM2FmZGIwMzAtZTBkMS00M2JiLTk2MDctM2FlNTQ2OWYwZDZkXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UY1200_CR8506301200_AL_.jpg"
        alt=""
      />
      <p className="img-click-text">
        Star Wars: Episode I – The Phantom Menace is a 1999 American epic space
        opera written and directed by George Lucas, produced by Lucasfilm and
        distributed by 20th Century Fox. It is the first installment in the Star
        Wars prequel trilogy and stars Liam Neeson, Ewan McGregor, Natalie
        Portman, Jake Lloyd, Ian McDiarmid, Anthony Daniels, Kenny Baker,
        Pernilla August, and Frank Oz. The film is set 32 years before the
        original film, and follows Jedi Knight Qui-Gon Jinn and his apprentice
        Obi-Wan Kenobi as they protect Queen Amidala, in hopes of securing a
        peaceful end to a large-scale interplanetary trade dispute. Joined by
        Anakin Skywalker—a young slave with unusually strong natural powers of
        the Force—they simultaneously contend with the mysterious return of the
        Sith. Lucas began production of film after he determined that film
        special effects had advanced to the level he wanted for the fourth film
        in the saga. Filming started on June 26, 1997, at locations including
        Leavesden Film Studios and the Tunisian desert. Its visual effects
        included extensive use of computer-generated imagery (CGI); many of its
        characters and settings were completely computerized. The film was
        Lucas' first directorial effort after a 22-year hiatus following Star
        Wars in 1977. The Phantom Menace was released to theaters on May 19,
        1999, almost 16 years after the premiere of the previous Star Wars film,
        Return of the Jedi. The film's premiere was extensively covered by media
        and was greatly anticipated because of the large cultural following the
        Star Wars saga had cultivated. It received mixed reviews; critics
        praised the visuals, action sequences, John Williams' musical score and
        some of the performances, but criticized the screenplay,
        characterization, and Ahmed Best and Jake Lloyd's performances (as Jar
        Jar Binks and Anakin Skywalker respectively). It grossed more than
        $924.3 million worldwide during its initial theatrical run, becoming the
        highest-grossing film of 1999, the second-highest-grossing film
        worldwide and in North America (behind Titanic), as well as the
        highest-grossing Star Wars film at the time. A 3D reissue, which has
        earned an additional $102.7 million at the box office and brought the
        film's overall worldwide takings to over $1 billion, was released in
        February 2012. The film was followed by two sequels, Attack of the
        Clones in 2002 and Revenge of the Sith in 2005.
      </p>
    </div>
  </ShowMore>
);

export default Episode1;
