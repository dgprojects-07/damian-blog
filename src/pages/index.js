import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import MainPage from '../components/MainPage'
import BlogPage from '../pages/BlogPage'
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min.js"


class RootIndex extends React.Component {

  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    return (
      <Layout location={this.props.location}>
        {/* <MainPage posts={posts} author={author} /> */}
        <BlogPage 
          title={posts[0]?.node.title}
          tags={posts[0]?.node.tags}
          authorImg={author?.node.heroImage.fluid.src}
          authorName={author?.node.name}
          postDate={posts[0]?.node.publishDate}
          postImage={posts[0]?.node.heroImage.fluid.src}
          postText={posts[0]?.node.description.childMarkdownRemark.html}
        />
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
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
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
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
