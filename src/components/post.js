import React from 'react'

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
  position: 'relative',
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

export default () => (
  <a style={post}>
    <div style={imageWrapper}>
      <img style={image} />
    </div>
    <div style={textWrapper}>
      <p style={small}>
        Date
        </p>
      <h6 style={text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h6>
    </div>
  </a>
);