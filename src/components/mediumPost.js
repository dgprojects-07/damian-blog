import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';

const post = {
  textDecoration: 'none',
  borderRadius: "8px",
  boxShadow: '0 0 20px rgb(0 0 0 / 20%)',
  height: '100%',
  marginTop: '19px',
  marginBottom: '19px',
  background: '#fff',
  overflow: 'hidden',
  color: '#293F4C',
  
};

const imageWrapper = {
  backgroundSize: 'cover',
  backgroundPosition: '50%',
  backgroundRepeat: 'no-repeat',
  minHeight: '234px',
};

const image = {
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

export default function MediumPost({ date, title, img }) {

  const [imageWrapperStyle, setImageWrapperStyle] = useState(imageWrapper);
  const [textWrapperStyle, setTextWrapperStyle] = useState(textContainer);
  const [smallStyle, setSmallStyle] = useState(small);
  const [textStyle, setTextStyle] = useState(text);

  const isMobile = useMediaQuery({
    query: '(max-width: 890px)'
  });

  const stop = useMediaQuery({
    query: '(max-width: 1380px)'
  });

  useEffect(() => {
    if (isMobile || stop) {
      setImageWrapperStyle({
        backgroundSize: 'cover',
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        minHeight: '192px',
      });
      setTextWrapperStyle({
        padding: '18px 24px'
      });
      setSmallStyle({
        fontSize: '12px',
        fontWeight: '400',
        textAlign: 'left',
        fontFamily: 'P22, sans-serif',
        letterSpacing: 0,
        color: '#E26447',
        lineHeight: '1',
        textTransform: 'uppercase',
        marginBottom: '8px',
      });
      setTextStyle({
        fontSize: '18px',
        fontWeight: '600',
        lineHeight: '24px',
        color: '#424242',
        marginTop: '0',
        marginBottom: '0'
      });
    } else {
      setImageWrapperStyle(imageWrapper);
      setTextWrapperStyle(textContainer);
      setSmallStyle(small);
      setTextStyle(text);
    }
  }, [isMobile, stop]);

  return (
    
      <a style={post}>
        <div style={imageWrapperStyle}>
          <img src={img} style={image} />
        </div>
        <div style={textWrapperStyle}>
          <p style={smallStyle}>
            {date}
          </p>
          <h6 style={textStyle}>
            {title}
          </h6>
        </div>
      </a>
    
  );
};