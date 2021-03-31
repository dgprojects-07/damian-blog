import React from 'react'

const cardWrapper = {
  background: '#fff',
  borderRadius: '8px',
  boxShadow: '0 0 20px rgb(0 0 0 / 20%)',
  textTransform: 'uppercase',
  color: '#293F4C',
  padding: '8px 20px 10px'
};

const card = {
  fontSize: '20px',
  fontWeight: '600',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  backgroundColor: 'transparent'
};

const imageWrapper = {
  width: '100%',
  height: 'auto',
  margin: 'auto',
  maxWidth: '214px'
};

const image = {
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  paddingBottom: '80.7512%'
};

export default function CategoryCard({ title, img }) {
  return (
    <div style={cardWrapper}>
      <a style={card}>
        <div style={imageWrapper}>
          <img style={image} />
        </div>
        <div>
          {title}
        </div>
      </a>
    </div>
  );
};