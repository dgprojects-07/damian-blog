import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';

const footerContainer = {
  backgroundColor: '#293F4C',
  width: '100%',
  paddingLeft: '15px',
  paddingRight: '15px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const footer = {
  padding: '40px 0px',
  maxWidth: '1310px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const footerContent = {
  flexDirection: 'row',
  display: 'flex',
  justifyContent: 'space-between'
};

const footerUl = {
  margin: '0 auto',
  padding: 0,
  listStyle: 'none',
  minWidth: '60%',
  display: 'flex',
  justifyContent: 'space-between'
};

const footerLi = {
  display: 'inline',
  fontSize: '14px',
  color: '#ffffff',
  textAlign: 'left'
};

const footerA = {
  fontSize: '18px',
  lineHeight: '33px',
  color: '#fff',
  fontWeight: '600',
  textDecoration: 'none',
  textTransform: 'uppercase'
};


export default function Footer() {

  const isMobile = useMediaQuery({
    query: '(max-width: 890px)'
  });

  const [footerContainerStyle, setFooterContainerStyle] = useState(footerContainer);
  const [footerContentStyle, setFooterContentStyle] = useState(footerContent);
  const [footerUlStyle, setFooterUlStyle] = useState(footerUl);
  const [footerLiStyle, setFooterLiStyle] = useState(footerLi);

  useEffect(() => {
    if (isMobile) {
      setFooterContainerStyle({
        borderTop: '3px solid #E26447',
        backgroundColor: '#293F4C',
        width: '100%',
        paddingLeft: '15px',
        paddingRight: '15px',
        marginLeft: 'auto',
        marginRight: 'auto'
      });
      setFooterContentStyle({
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '25px'
      });
      setFooterUlStyle({
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 0,
        listStyle: 'none',
        justifyContent: 'space-between',
        flexDirection: 'column',
        display: 'block'
      });
      setFooterLiStyle({
        display: 'block',
        fontSize: '14px',
        color: '#ffffff',
        textAlign: 'left',
        margin: '0 auto'
      });
    } else {
      setFooterContainerStyle(footerContainer);
      setFooterContentStyle(footerContent);
      setFooterUlStyle(footerUl);
      setFooterLiStyle(footerLi);
    }
  }, [isMobile]);

  return (
    <div style={footerContainerStyle}>
      <div style={footer}>
        <div style={footerContentStyle}>
          <ul style={footerUlStyle}>
            <li style={footerLiStyle}>
              <a href="/" style={footerA}>
                Logo
              </a>
            </li>
            <li style={footerLiStyle}>
              <a href="/" style={footerA}>
                More infromation
              </a>
              <br></br>
                FAQ's
                <br></br>
                Shipping & Returns
                <br></br>
                Privacy Statement
                <br></br>
                Terms & Conditions
                <br></br>
                Cookies Policy
            </li>
            <li style={footerLiStyle}>
              <a href="/" style={footerA}>
                Learn something
              </a>
              <br></br>
                Our Blog
              <br></br>
                Natural remedies
                <br></br>
                Recipes
                <br></br>
                Tips & Tricks
            </li>
            <li style={footerLiStyle}>
              <a href="/" style={footerA}>
                Contact Us
              </a>
              <br></br>
              Contact Us
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}