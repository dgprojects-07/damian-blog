import React from 'react'
import { Row } from 'react-bootstrap'


const post = {
  textDecoration: 'none',
  borderRadius: "8px",
  boxShadow: '0 0 20px rgb(0 0 0 / 20%)',
  display: 'flex',
  height: '100%',
  flexDirection: 'column'
};

const imageWrapper = {
  backgroundSize: 'cover',
  backgroundPosition: '50%',
  backgroundRepeat: 'no-repeat',
  minHeight: '374px',
};

const image = {
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  maxHeight: '374px',
};

const textWrapper = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
};

const textContainer = {
  paddingTop: '1rem',
  paddingBottom: '1rem',
  paddingLeft: '3rem',
  paddingRight: '3rem',
}

const small = {
  fontSize: '14px',
  fontWeight: '600',
  textAlign: 'left',
  fontFamily: 'P22, sans-serif',
  letterSpacing: 0,
  color: '#E26447',
  lineHeight: '0',
  textTransform: 'uppercase'
};

const text = {
  fontSize: '32px',
  fontWeight: '600',
  lineHeight: '40px',
  color: '#424242',
  margin: '5px 0 0'
};

export default () => (
  <a style={post}>
    <div style={imageWrapper}>
      <img style={image} />
    </div>
    <div style={textWrapper}>
      <div style={textContainer}>
        <p style={small}>
          Blog author name | Date
          </p>
        <h6 style={text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h6>
      </div>
    </div>

  </a>
);