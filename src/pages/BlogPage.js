import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import CategorySection from '../components/CategorySection'
import Footer from '../components/Footer'
import MediumPost from '../components/MediumPost'
import SignUpSection from '../components/SignUpSection'

const container = {
  maxWidth: '1345px',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  paddingBottom: '1.5rem',
  paddingTop: '1.5rem',
  width: '100%',
  marginRight: 'auto',
  marginLeft: 'auto',
  marginTop: '5.5rem'
};

const inner = {
  display: "flex",
  justifyContent: 'space-between',
  alignItems: 'stretch'
};

const leftCol = {
  width: '57.5%',
  marginRight: '1.5rem'
};

const rightCol = {
  width: '39.5%',
  marginLeft: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch'
};

const postTitle = {
  fontSize: '46px',
  fontWeight: '600',
  lineHeight: '52px',
  marginBottom: '.5rem'
};

const categorization = {
  display: 'flex',
  justifyContent: 'stretch',
  alignItems: 'center',
  marginBottom: '15px',
  marginTop: '0'
};

const tag = {
  color: '#E26447',
  fontWeight: '600',
  fontSize: '16px',
  textTransform: 'uppercase'
};

const line = {
  background: '#E26447',
  flex: '1 1',
  height: '10px',
  marginLeft: '5px',
  borderTopRightRadius: '4px',
  borderBottomRightRadius: '4px'
};

const articleInfo = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  textTransform: 'uppercase',
  color: '#969696',
  marginBottom: '1rem',
  marginTop: '1rem',
};

const articleMeta = {
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '40px',
  display: 'flex',
  alignItems: 'center',
  fontFamily: "'P22', sans-serif"
};

const authorImage = {
  width: '48px',
  height: '48px',
  boxShadow: '0 0 10px rgb(0 0 0 / 16%)',
  border: '2px solid #fff',
  backgroundColor: '',
  borderRadius: '30px',
  marginBottom: "3px",
  overflow: 'hidden',
  marginRight: '17px'
};

const dateAuthor = {
  display: 'flex'
};

const by = {
  fontSize: '12px',
  lineHeight: '40px',
  textTransform: 'uppercase',
  color: '#969696',
  marginRight: '.25rem'
};

const author = {
  color: '#E26447',
  fontWeight: '600',
  fontSize: '16px',
  textTransform: 'uppercase'
};

const date = {
  paddingLeft: '10px'
};

const imageWrapper = {
  boxShadow: '',
  border: '5px solif #fff',
  width: '100%',
  margin: '1rem 0'
};

const image = {
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center center',
  opacity: '1',
  transition: 'opacity 500ms ease 0s',
  borderStyle: 'none'
};

const articleText = {
  fontSize: '16px',
  lineHeight: '30px',
  color: '#000',
  marginTop: '.5rem'
};

const recomended = {
  backgroundColor: '#E26447',
  color: "#fff",
  fontSize: "14px",
  lineHeight: '28px',
  fontFamily: "P22, sans-serif",
  fontWeight: '600',
  textTransform: 'uppercase',
  textAlign: 'center',
  borderRadius: '2px',
  letterSpacing: '4px',
  marginTop: '10px'
};

const posts = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%'
};

const hline = {
  width: '80%',
};

export default function BlogPage({ title, tags, authorImg, authorName, postDate, postImage, postText, recomendedPosts }) {

  const isMobile = useMediaQuery({
    query: '(max-width: 890px)'
  });

  const [innerStyle, setInnerStyle] = useState(inner);
  const [rightColStyle, setRightColStyle] = useState(rightCol);
  const [leftColStyle, setLeftColStyle] = useState(leftCol);
  const [postTitleStyle, setPostTitleStyle] = useState(postTitle);

  useEffect(() => {
    if (isMobile) {
      setInnerStyle({
        display: 'flex',
        flexFlow: "column",
        justifyContent: 'space-between',
        paddingRight: '15px',
        paddingLeft: '15px'
      });
      setRightColStyle({
        width: '100%'
      });
      setLeftColStyle({
        width: '100%'
      });
      setPostTitleStyle({
        fontSize: '28px',
        fontWeight: '600',
        lineHeight: '38px',
        marginBottom: '.5rem'
      });
    } else {
      setInnerStyle(inner);
      setRightColStyle(rightCol);
      setLeftColStyle(leftCol);
      setPostTitleStyle(postTitle);
    }
  }, [isMobile]);

  return (
    <>
      <section style={container}>
        <div style={innerStyle}>
          <div style={leftColStyle}>
            <h1 style={postTitleStyle}>
              {title}
            </h1>
            <div style={categorization}>
              <div style={tag}>
                {tags?.join(' / ')}
              </div>
              <div style={line}>
              </div>
            </div>
            <div style={articleInfo}>
              <div style={articleMeta}>
                <span>
                  <img alt="author" src={authorImg} style={authorImage} />
                </span>
                <div style={dateAuthor}>
                  <div>
                    <span style={by}>by:</span>
                    <span style={author}>{authorName}</span>
                  </div>
                  <div style={date}>
                    {postDate}
                  </div>
                </div>
              </div>
            </div>
            <div style={imageWrapper}>
              <img alt="" src={postImage} style={image} />
            </div>
            <div style={articleText}>
              <div dangerouslySetInnerHTML={{ __html: postText }}>
              </div>
            </div>
          </div>
          <div style={rightColStyle}>
            <div style={recomended}>
              recomended posts
            </div>
            <div style={posts}>
              {recomendedPosts?.map(p => {
                return (
                  <MediumPost
                    date={p.node.publishDate}
                    title={p.node.title}
                    img={p.node.heroImage.fluid.src}
                    slug={p.node.slug}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <hr style={hline}></hr>
      <SignUpSection bgColor="#fff" />
      <CategorySection />
      <Footer />
    </>
  );
};