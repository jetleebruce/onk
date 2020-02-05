import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderStyles from './headernews.module.css'
import Arrow from './arrow'
import Newsicon from './newsicon'
import Burger from './burger'


const Headernews = ({ siteTitle }) => (
  <header className={HeaderStyles.headerwrapper}>
    <div className={HeaderStyles.head}>
      <Link to="/">
        <Arrow />
      </Link>
      <Newsicon/>
      <Burger/>
    </div>
  </header>
)

Headernews.propTypes = {
  siteTitle: PropTypes.string,
}

Headernews.defaultProps = {
  siteTitle: ``,
}

export default Headernews
