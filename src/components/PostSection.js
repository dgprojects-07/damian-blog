import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import Post from './Post'
import BigPost from './BigPost'

const container = {
  justifyContent: 'space-between',
  alignItems: 'stretch',
  display: 'flex'
};

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


export default function PostSection() {

  const isMobile = useMediaQuery({
    query: '(max-width: 890px)'
  });

  const [containerStyle, setContainerStyle] = useState(container);
  const [rightColStyle, setRightColStyle] = useState(rightCol);
  const [leftColStyle, setLeftColStyle] = useState(leftCol);

  useEffect(() => {
    if (isMobile) {
      setContainerStyle({
        display: 'flex',
        flexFlow: "column",
        paddingRight: '15px',
        paddingLeft: '15px'
      });
      setRightColStyle({
        width: '100%'
      });
      setLeftColStyle({
        width: '100%'
      });
    } else {
      setContainerStyle(container);
      setLeftColStyle(leftCol);
      setRightColStyle(rightCol);
    }
  }, [isMobile]);

  return (
    <div style={containerStyle}>
      <div style={leftColStyle} >
        <BigPost>

        </BigPost>
      </div>
      <div style={rightColStyle} >
        <div style={popular}>
          Most popular
      </div>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
    </div>);
};