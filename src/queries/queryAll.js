"use strict"

module.exports = `
    {
  allWordpressPage {
    edges {
      node {
        template
        slug
        id
        status
      }
    }
  }
}
        
        {
  allWordpressPost {
    edges {
      node {
        id
        slug
        status
        template
        format
      }
    }
  }
}
`
