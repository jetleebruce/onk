import React, { Component } from 'react'
import Layout from '../components/layout'

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    let facebook = ''
    let twitter = ''


    if(post.acf !== null) {
        if(post.acf.facebook !== '') {
         facebook = `<h3>Facebook</h3> ${post.acf.facebook}`
        }
        if (post.acf.twitter !== '') {
          twitter = `<h3>Twitter</h3> ${post.acf.twitter}`
        }

    }

    return (
      <Layout>
        <div>
          <img src={post.featured_media.source_url} />
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <div
            style={{ color: 'white' }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          {
            post.acf.image && post.acf.image.source_url &&
            <img src={post.acf.image.source_url} />
          }

          <div
            style={{ color: 'white' }}
            dangerouslySetInnerHTML={{ __html: facebook }}
          />
          <div
            style={{ color: 'white' }}
            dangerouslySetInnerHTML={{ __html: twitter }}
          />
          </div>


      </Layout> )

  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      featured_media {
        source_url
      }
      acf {
        facebook
        twitter
         image {
           source_url
         }
      }
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`
