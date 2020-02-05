/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Headernews from "./Headernews/index"
import "./layout.css"

const Layoutnews = ({ children }) => {
  return (
    <>
      <Headernews />
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

Layoutnews.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layoutnews
