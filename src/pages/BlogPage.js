import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';


const container = {
  maxWidth: '1310px',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  paddingBottom: '1.5rem',
  paddingTop: '1.5rem',
  width: '100%',
  marginRight: 'auto'
};

const inner = {
  display: "flex",
  justifyContent: 'space-between',
  alignItems: 'stretch'
};

const leftCol = {
  width: '57.5%'
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

const authorImageWrapper = {

};

export default function BlogPage({ title, tags, authorImg, }) {
  return (
    <section style={container}>
      <div style={inner}>
        <div style={leftCol}>
          <h1 style={postTitle}>
            {title}
          </h1>
          <div style={categorization}>
            <div style={tag}>
              {tags.join('/')}
            </div>
            <div style={line}>
            </div>
          </div>
          <div style={articleInfo}>
            <div style={articleMeta}>
              <span style={authorImageWrapper}>
                <img src={authorImg} style={authorImage} />
              </span>
            </div>
          </div>
        </div>
        <div style={rightCol}>

        </div>
      </div>
    </section>
  );
};