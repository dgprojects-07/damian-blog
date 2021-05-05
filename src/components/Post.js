import React from 'react'
import { Link } from "gatsby"
import Img from "gatsby-image"

const post = {
  textDecoration: 'none',
  borderRadius: "8px",
  boxShadow: '0 0 20px rgb(0 0 0 / 20%)',
  display: 'flex',
  alignContent: 'center',
  marginTop: '19px',
  minHeight: '144px',
  justifyContent: 'space-between'
};

const imageWrapper = {
  backgroundSize: 'cover',
  backgroundPosition: '50%',
  width: '34%'
};

const image = {
  overflow: 'hidden',
  width: '100%',
  height: '100%',
};

const textWrapper = {
  margin: 'auto',
  marginTop: '20px',
  paddingTop: '5px',
  paddingBottom: '5px',
  width: "58%"
};

const small = {
  fontSize: '12px',
  fontWeight: '600',
  textAlign: 'left',
  fontFamily: 'P22, sans-serif',
  letterSpacing: 0,
  color: '#E26447',
  lineHeight: '40px',
  textTransform: 'uppercase',
  marginBottom: 0
};

const text = {
  fontSize: '20px',
  fontWeight: '600',
  lineHeight: '28px',
  color: '#424242'
};

export default function Post({ date, title, img, slug }) {
  return (
    <Link style={{ textDecoration: 'none' }} to={`/blog/${slug}`}>
      <div style={post}>
        <div style={imageWrapper}>
          <Img alt="" fluid={img} style={image} />
        </div>
        <div style={textWrapper}>
          <p style={small}>
            {date}
          </p>
          <h6 style={text}>
            {title}
          </h6>
        </div>
      </div>
    </Link>
  );
}