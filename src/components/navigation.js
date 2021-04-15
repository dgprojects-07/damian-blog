import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import logo from '../../assets/petlabblog.jpg'
import SearchBar from './SearchBar'
import { Navbar, Nav } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'

const navLink = {
  fontSize: '18px',
  lineHeight: 1.2,
  fontFamily: "P22, sans-serif",
  letterSpacing: '-.54px',
  color: '#293F4C',
  textTransform: 'capitalize',
  textAlign: 'center',
  fontWeight: '600',
  margin: "0 24px",
  display: 'block',
  padding: '.5rem 1rem',
  paddingRight: 0,
  paddingLeft: 0,
  textDecoration: 'none'
};

const nav = {
  height: '90px',
  width: '100%',
  padding: '.5rem 1rem',
  boxShadow: '0 0 6px rgb(0 0 0 / 10%)',
  position: 'fixed',
  top: 0,
  backgroundColor: '#fff',
  paddingLeft: 0,
  paddingRight: 0,
  marginRight: 'auto',
  marginLeft: 'auto',
  marginBottom: '1rem',
  whiteSpace: 'nowrap',
};

const _logoStyle =  {
  height: '48px',
  verticalAlign: 'middle'
};

export default function Navigation({ posts }) {

  const isMobile = useMediaQuery({
    query: '(max-width: 890px)'
  });

  const [logoStyle, setLogoStyle] = useState(_logoStyle);

  useEffect(()=>{
    if (isMobile) {
      setLogoStyle({
        height: '40px',
        verticalAlign: 'middle'
      });
    } else {
      setLogoStyle(_logoStyle);
    }
  },[isMobile]);

  return (
  <Navbar className="justify-content-center" style={nav} expand="lg">
    <Navbar.Brand className="order-md-0 order-1" style={{ marginRight: '2.5rem' }} href="/">
      <Link to={"/"}>
        <img alt="" style={logoStyle} src={logo} />
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle style={{ marginRight: '40px', border: 'none', color: '#E26447' }} className="order-md-1 order-0" aria-controls="basic-navbar-nav" />
    <Navbar.Collapse style={{ flexGrow: 0, marginRight: '40px' }} id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link style={navLink} href="#home">Supplements</Nav.Link>
        <Nav.Link style={navLink} href="#link">Natural Remedies</Nav.Link>
        <Nav.Link style={navLink} href="#link">Recipes</Nav.Link>
        <Nav.Link style={navLink} href="#link">Tips & Tricks</Nav.Link>
        <Nav.Link style={navLink} href="#link">Behaviour</Nav.Link>
        <Nav.Link style={navLink} href="#link">Health & Wellness</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <SearchBar posts={posts}/>
  </Navbar>)
}
