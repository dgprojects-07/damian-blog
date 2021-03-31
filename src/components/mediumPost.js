import React from 'react'

const container = {
  width: '31.3%',
  display: 'flex',
  flexDirection: 'column'
};

const post = {
  textDecoration: 'none',
  borderRadius: "8px",
  boxShadow: '0 0 20px rgb(0 0 0 / 20%)',
  height: '100%',
  marginTop: '19px',
  marginBottom: '19px',
  background: '#fff',
  overflow: 'hidden',
  color: '#293F4C'
};

const imageWrapper = {
  backgroundSize: 'cover',
  backgroundPosition: '50%',
  backgroundRepeat: 'no-repeat',
  minHeight: '234px',
};

const image = {
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '100%'
};

const textContainer = {
  paddingTop: '1rem',
  paddingBottom: '1.5rem',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
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
  fontSize: '20px',
  fontWeight: '600',
  lineHeight: '28px',
  color: '#424242',
  marginTop: '0',
  marginBottom: '0'
};

export default function MediumPost({ date, title }) {
  return (
    <div style={container}>
      <a style={post}>
        <div style={imageWrapper}>
          <img style={image} />
        </div>
        <div style={textContainer}>
          <p style={small}>
            {date}
          </p>
          <h6 style={text}>
            {title}
          </h6>
        </div>
      </a>
    </div>
  );
};