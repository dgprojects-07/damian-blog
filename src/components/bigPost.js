import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Link } from "gatsby"

const post = {
  textDecoration: 'none',
  borderRadius: "8px",
  boxShadow: '0 0 20px rgb(0 0 0 / 20%)',
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  
};

const imageWrapper = {
  backgroundSize: 'cover',
  backgroundPosition: '50%',
  backgroundRepeat: 'no-repeat',
  minHeight: '374px',
};

const image = {
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

export default function BigPost({ author, date, title, img, slug }) {

  const isMobile = useMediaQuery({
    query: '(max-width: 890px)'
  });

  const [postStyle, setPostStyle] = useState(post);
  const [smallStyle, setSmallStyle] = useState(small);
  const [textStyle, setTextStyle] = useState(text);
  const [imageWrapperStyle, setImageWrapperStyle] = useState(imageWrapper);

  useEffect(() => {
    if (isMobile) {
      setPostStyle({
        textDecoration: 'none',
        borderRadius: "8px",
        boxShadow: '0 0 20px rgb(0 0 0 / 20%)',
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        marginBottom: '19px'
      });
      setSmallStyle({
        fontSize: '12px',
        fontWeight: '400',
        textAlign: 'left',
        fontFamily: 'P22, sans-serif',
        letterSpacing: 0,
        color: '#E26447',
        lineHeight: '0',
        textTransform: 'uppercase'
      });
      setTextStyle({
        fontSize: '24px',
        fontWeight: '600',
        lineHeight: '40px',
        color: '#424242',
        margin: '5px 0 0'
      });
      setImageWrapperStyle({
        backgroundSize: 'cover',
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        minHeight: '180px',
      });
    } else {
      setPostStyle(post);
      setSmallStyle(small);
      setTextStyle(text);
      setImageWrapperStyle(imageWrapper);
    }
  }, [isMobile]);

  return (
    <Link style={{textDecoration:'none'}} to={`/blog/${slug}`}>
      <div style={postStyle}>
        <div style={imageWrapperStyle}>
          <img alt={title} src={img} style={image} />
        </div>
        <div style={textWrapper}>
          <div style={textContainer}>
            <p style={smallStyle}>
              {`${author} | ${date}`}
            </p>
            <h6 style={textStyle}>
              {title}
            </h6>
          </div>
        </div>
      </div>
    </Link>
  );
};