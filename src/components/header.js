import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1 id="main-title">
        <Link to="/" >
          {siteTitle}
        </Link>
      </h1>
      <div id="nav-bar">
        <ul id="nav">
          <li>
            <Link to="/crafts/">Hand Made Crafts</Link>
          </li>
          <li>
            <Link to="/gifts/">Gift Items</Link>
          </li>
          <li>
            <Link to="/shows/">Show Schedule</Link>
          </li>
          <li>
            <Link to="/directions/">Directions</Link>
          </li>
          <li>
            <Link to="/contact/">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
