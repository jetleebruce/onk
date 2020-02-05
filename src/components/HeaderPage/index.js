import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderStyles from './headerpage.module.css'
import Arrow from './icons/arrow'
import Burger from './icons/burger'
import { ICON_IMAGE } from "./iconImages"


const HeaderPage = ({ siteTitle, icon }) => (
  <header className={HeaderStyles.headerwrapper}>
    <div className={HeaderStyles.head}>
      <Link to="/">
        <Arrow />
      </Link>
      {ICON_IMAGE[icon]}
      <Burger />
    </div>
  </header>
)

HeaderPage.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderPage.defaultProps = {
  siteTitle: ``,
}

export default HeaderPage
