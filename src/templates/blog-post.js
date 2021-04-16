import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import BlogPage from '../pages/BlogPage'

class BlogPostTemplate extends React.Component {
  render() {
    const allPosts = get(this.props, 'data.allContentfulBlogPost.edges')
    const post = get(this.props, 'data.contentfulBlogPost')
    
    return (
      <Layout location={this.props.location}>
        <BlogPage
          title={post?.title}
          tags={post?.tags}
          authorImg={post?.author.heroImage.fluid.src}
          authorName={post?.author.name}
          postDate={post?.publishDate}
          postImage={post?.heroImage.fluid.src}
          postText={post?.body.childMarkdownRemark.html}
          recomendedPosts={allPosts}
          recomendedQ = {allPosts[0]?.node.recommendedNumber}
        />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
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
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          recommendedNumber
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
  }
`
