import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import MainPage from '../components/MainPage'



class RootIndex extends React.Component {

  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    
    return (
      <Layout location={this.props.location}>
        <MainPage posts={posts} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          author {
            name
            heroImage: image {
              fluid(
                maxWidth: 1180
                maxHeight: 480
                resizingBehavior: PAD
                background: "rgb:000000"
              ) {
                ...GatsbyContentfulFluid
              }
            }
          }
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
