import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import Post from '../components/post'
import BigPost from '../components/bigPost'
import MediumPost from '../components/mediumPost'
import CategoryCard from '../components/categoryCard'
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min.js"

const container = {
  justifyContent: 'space-between',
  alignItems: 'stretch',
  display: 'flex'
};

const postSection = {
  maxWidth: '1310px',
  paddingBottom: '1.5rem',
  width: '100%',
  marginTop: '7.5rem',
  marginBottom: '1.5rem',
  marginRight: 'auto',
  marginLeft: 'auto'
}

const rightCol = {
  width: '39.5%',

}

const leftCol = {
  width: '57.5%',
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

const categories = {
  backgroundColor: '#E26447',
  textAlign: 'center',
  padding: '40px 0 70px',
  marginTop: '60px',
};

const catSection = {
  width: '100%',
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto'
};

const title = {
  fontSize: '40px',
  fontWeight: '600',
  lineHeight: '1',
  color: '#fff',
  textTransform: 'capitalize',
  fontFamily: "'P22', sans-serif",
  paddingBottom: '50px'
};

const catContainer = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  columnGap: '30px',
  rowGap: '30px',
  maxWidth: '1310px',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const latest = {
  width: '100%',
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  backgroundColor: '#f5f6ff',
  paddingTop: '40px',
  paddingBottom: '1rem'
};

const latestTitle = {
  paddingBottom: '20px',
  lineHeight: '1',
  fontSize: '40px',
  fontWeight: '700',
  fontFamily: "'P22', sans-serif",
  marginBottom: '1rem',
  textAlign: 'center',
  marginTop: '.25rem',
  color: "#293F4C"
};

const latestPosts = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'space-between',
  maxWidth: '1310px',
  paddingRight: '1rem',
  paddingLeft: '1rem',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const latestBtnSection = {
  overflowAnchor: 'none',
  margin: '30px auto',
  textAlign: 'center',
  width: '100%'
};

const latestBtn = {
  cursor: 'pointer',
  borderColor: '#AE462C',
  background: '#E26447',
  color: '#FFFFFF',
  borderBottom: '3px solid #AE462C',
  borderRadius: '8px',
  fontWeight: '600',
  fontSize: '18px',
  padding: '10px 22px',
  margin: 'auto',
  boxShadow: '0 0.5rem 1rem rgb(0 0 0 / 15%)'
};

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        <div style={postSection}>
          <div style={container}>
            <div style={leftCol} >
              <BigPost>

              </BigPost>
            </div>
            <div style={rightCol} >
              <div style={popular}>
                Most popular
              </div>
              <Post></Post>
              <Post></Post>
              <Post></Post>
            </div>
          </div>
        </div>
        <div style={categories}>
          <section style={catSection}>
            <div style={title}>
              <span>Start reading now</span>
            </div>
            <div style={catContainer}>
              <CategoryCard title="supplements" />
              <CategoryCard title="Natural Remedies" />
              <CategoryCard title="recipes" />
              <CategoryCard title="tips&tricks" />
              <CategoryCard title="behaviour" />
              <CategoryCard title="health&wellness" />
              <CategoryCard title="petlab" />
              <CategoryCard title="petlab" />
            </div>
          </section>
        </div>
        <section style={latest}>
          <div style={latestTitle}>
            Latest posts
          </div>
          <section style={latestPosts}>
            <MediumPost date="date" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <MediumPost date="date" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <MediumPost date="date" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <MediumPost date="date" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <MediumPost date="date" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <MediumPost date="date" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </section>
          <div style={latestBtnSection}>
            <button style={latestBtn}>Load More</button>
          </div>
        </section>

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
