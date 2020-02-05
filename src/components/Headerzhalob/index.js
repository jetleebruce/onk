import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderStyles from "./headerzhalob.module.css"
import Arrow from "./arrow"
import Zhalobicon from "./zhalobicon"
import Burger from "./burger"

const Headerzhalob = ({ siteTitle }) => (
  <header className={HeaderStyles.headerwrapper}>
    <div className={HeaderStyles.head}>
      <Link to="/">
        <Arrow />
      </Link>
      <Zhalobicon />
      <Burger />
    </div>
  </header>
)

Headerzhalob.propTypes = {
  siteTitle: PropTypes.string,
}

Headerzhalob.defaultProps = {
  siteTitle: ``,
}

export default Headerzhalob
