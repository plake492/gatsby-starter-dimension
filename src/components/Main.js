import PropTypes from 'prop-types'
import React from 'react'
import roy from '../images/roy.png'
import friendFinder from '../images/friendFinder.png'
import clicky from '../images/clicky.png'
import me from '../images/me.jpeg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <h3 style={{ textAlign: 'center' }}> Thunder Dome</h3>
            <img src={friendFinder} alt="" />
          </span>
          <a
            style={{ marginRight: '3%' }}
            href="https://mighty-hollows-56287.herokuapp.com/"
            target="blank"
          >
            Website
          </a>
          <a href="https://github.com/plake492/FriendFinder"> Github</a>
          <span className="image main">
            <hr></hr>
            <h3 style={{ textAlign: 'center' }}> Tiny House Roy</h3>
            <img src={roy} alt="" />
          </span>
          <a
            style={{ marginRight: '3%' }}
            href="https://plake492.github.io/tiny-house-roy/"
            target="blank"
          >
            Website
          </a>
          <a href="https://github.com/plake492/tiny-house-roy"> Github</a>
          <hr></hr>

          <span className="image main">
            <h3 style={{ textAlign: 'center' }}>React Clicky Game</h3>

            <img src={clicky} alt="" />
          </span>
          <a
            style={{ marginRight: '3%' }}
            href="https://plake492.github.io/clicky-game/"
            target="blank"
          >
            Website
          </a>
          <a href="https://github.com/plake492/clicky-game"> Github</a>
          {close}
        </article>
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={me} alt="" />
          </span>
          <p>
            Front End Web Developer coming from a background in music and
            leadership as a former Worship Director. Certificate in Full Stack
            Web Development from the University of Central Florida including new
            skills in HTML, CSS, JavaScript, React.js and more, with an emphasis
            in creating attractive, mobile and user friendly front-end UI’s.
            Cares greatly about keeping workflow smooth, structured, and
            efficient as shown by my collaboration with with two other coders
            building a website to help connect community needs with willing
            volunteers, where I took charge of the git process to keep the
            team’s branches separate and conflict free while also tackling the
            HTML, CSS, and front end JavaScript. Eager and excited to use and
            grow my new skills as I aim to become a valuable and meaningful
            member of this industry that so beautifully combines structure and
            creativity.
          </p>
          {close}
        </article>
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/PatrickLake492"
                target="blank"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/patrick.lake.50?ref=bookmarks"
                target="blank"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/patricklakemusic/"
                target="blank"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/patrick-lake-80733a186/"
                target="blank"
                className="icon fa-linkedin"
              >
                <span className="label">linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/plake492"
                className="icon fa-github"
                target="blank"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
