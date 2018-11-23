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
            src="https://images-na.ssl-images-amazon.com/images/I/51BGV8AJ4RL._SY445_.jpg"
            alt=""
          />
        )}
      </div>
    );
  }
}

const Episode2 = () => (
  <ShowMore>
    <div className="img-click-container">
      <img
        className="img-click"
        src="https://images-na.ssl-images-amazon.com/images/I/51BGV8AJ4RL._SY445_.jpg"
        alt=""
      />
      <p className="img-click-text">
        Star Wars: Episode II – Attack of the Clones is a 2002 American epic
        space opera film directed by George Lucas and written by Lucas and
        Jonathan Hales. It is the second installment of the Star Wars prequel
        trilogy, and stars Ewan McGregor, Natalie Portman, Hayden Christensen,
        Ian McDiarmid, Samuel L. Jackson, Christopher Lee, Anthony Daniels,
        Kenny Baker and Frank Oz. Set ten years after the events in The Phantom
        Menace, the galaxy is on the brink of civil war. Led by a former Jedi
        named Count Dooku, thousands of planetary systems threaten to secede
        from the Galactic Republic. After Senator Padmé Amidala evades
        assassination, Jedi apprentice Anakin Skywalker becomes her protector,
        while his mentor Obi-Wan Kenobi investigates the attempt on Padmé's
        life. Soon Anakin, Padmé and Obi-Wan witness the onset of a new threat
        to the galaxy, the Clone Wars. Development of Attack of the Clones began
        in March 2000, after the release of The Phantom Menace. By June 2000,
        Lucas and Hales completed a draft of the script and principal
        photography took place from June to September 2000. The film crew
        primarily shot at Fox Studios Australia in Sydney, Australia, with
        additional footage filmed in Tunisia, Spain and Italy. It was one of the
        first motion pictures shot completely on a high-definition digital
        24-frame system. The film was released in the United States on May 16,
        2002. It received mixed reviews, with some critics hailing it as an
        improvement over its predecessor The Phantom Menace and others
        considering it the worst installment of the franchise.[3][4] Although
        the visual effects, costume design, musical score, action sequences and
        McGregor's performance as Obi-Wan Kenobi were all praised, the romance
        of Padmé and Anakin, the dialogue, the screenplay and the film's long
        runtime were all criticized. The film was a financial success, making
        over $649 million worldwide; however, it also became the first Star Wars
        film to be outgrossed in its year of release, placing third domestically
        and fourth highest-grossing worldwide. The film was released on VHS and
        DVD on November 12, 2002 and was later released on Blu-ray on September
        16, 2011. The third and final film of the prequel trilogy, Revenge of
        the Sith, was released in 2005.
      </p>
    </div>
  </ShowMore>
);

export default Episode2;
