import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <ul className="icons">
      <li>
        <a href="https://twitter.com/HuntaroSan" className="icon fa-twitter">
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://codebushi.com" className="icon fa-facebook">
          <span className="label">Facebook</span>
        </a>
      </li>
      <li>
        <a href="https://codebushi.com" className="icon fa-instagram">
          <span className="label">Instagram</span>
        </a>
      </li>
      <li>
        <a href="https://codebushi.com" className="icon fa-linkedin">
          <span className="label">linkedin</span>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/codebushi/gatsby-starter-dimension"
          className="icon fa-github"
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
