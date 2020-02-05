/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import './layout.css'
import HeaderPage from './HeaderPage'
import { ICONS } from './HeaderPage/icon'

const LayoutNews = ({ children }) => {
  return (
    <>
      <HeaderPage icon={ICONS.NEWS} />
      <main>{children}</main>
    </>
  )
}

LayoutNews.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutNews
