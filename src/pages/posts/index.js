import React, { Component } from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import LayoutNews from '../../components/layoutnews'
import PostStyles from '../../pages/posts/posts.module.css'

class PostsTemplate extends Component {
  render() {
    const data = this.props.data

    return (
      <LayoutNews>
        <div className={PostStyles.postwrapper}>
          <div className={PostStyles.titlewrapp}>
            <h1>Новости ОНК</h1>
          </div>

          {data.allWordpressPost.edges.map(({ node }) => (
            <div
              key={node.slug}
              className={PostStyles.post}
              style={{ marginBottom: '50px' }}
            >
              <img src={node.featured_media.source_url} />
              <p>{node.date}</p>
              <Link to={`post/${node.slug}`}>
                <h3>{node.title}</h3>
              </Link>
              <div
                style={{ color: 'white' }}
                className={PostStyles.postcontent}
                dangerouslySetInnerHTML={{ __html: node.excerpt }}
              />
            </div>
          ))}
        </div>
      </LayoutNews>
    )
  }
}

PostsTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostsTemplate

export const pageQuery = graphql`
         query postsQuery {
           allWordpressPost {
             edges {
               node {
                 id
                 title
                 excerpt
                 slug
                 date(formatString: "MMMM DD, YYYY")
                 featured_media {
                   source_url
                 }
               }
             }
           }
         }
       `
