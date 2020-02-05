import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Zhalobicon = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Group.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Img
      style={{ width: `40px`, height: `40px` }}
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="Нарушение прав"
    />
  )
}

export default Zhalobicon
