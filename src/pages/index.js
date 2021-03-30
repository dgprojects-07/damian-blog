import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import Post from '../components/post'
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min.js"

const container = {
  paddingLeft: '1rem',
  paddingRight: '17rem',
  marginBottom: '1.5rem',
  marginTop: '7rem',
  width: '100%'
};

const rightCol = {
  width: '39.5%'
}

const leftCol = {
  width: '57.5%'
};

const popular = {
  backgroundColor: '#E26447',
  color: "#fff",
  fontSize: "14px",
  lineHeight: '28px',
  fontFamily: "P22, sans-serif",
  fontWeight: '600',
  textTransform: 'uppercase',
  textAlign: 'center',
  bordeRadius: '2px',
  letterSpacing: '4px'
};

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <div className="row justify-content-center" style={container}>
            <div style={leftCol} className="col-lg-8 col-xl-8 order-xl-1 order-lg-1">

            </div>
            <div style={rightCol} className="col-lg-4 col-xl-4 order-xl-1 order-lg-1">
              <div className="popular">
              </div>
              <Post></Post>
              <Post></Post>
              <Post></Post>
            </div>

          </div>
        </div>
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
