import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderStyles from "./header.module.css"
import HeaderImage from "./imageheader"

const Header = ({ siteTitle }) => (
  <header className={HeaderStyles.headerwrapper}>
    <div className={HeaderStyles.head}>
      <Link to="/">
        <HeaderImage />
      </Link>
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
