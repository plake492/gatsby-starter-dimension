import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
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
    </ul>{' '}
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
