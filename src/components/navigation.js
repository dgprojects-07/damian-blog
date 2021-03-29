import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import logo from '../../assets/petlabblog.jpg'
import { Navbar, Nav } from 'react-bootstrap'


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

const search = {
  color: '#E26447',
  cursor: 'pointer'
};

export default () => (
  <Navbar className="justify-content-center" style={nav} expand="lg">
    <Navbar.Brand className="order-md-0 order-1" style={{marginRight:'2.5rem'}} href="#home">
      <img className={styles.logo} src={logo} />
    </Navbar.Brand>
    <Navbar.Toggle style={{marginRight:'40px', border: 'none', color: '#E26447'}} className="order-md-1 order-0" aria-controls="basic-navbar-nav" />
    <Navbar.Collapse style={{flexGrow:0, marginRight:'40px'}} id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link style={navLink} href="#home">Supplements</Nav.Link>
        <Nav.Link style={navLink} href="#link">Natural Remedies</Nav.Link>
        <Nav.Link style={navLink} href="#link">Recipes</Nav.Link>
        <Nav.Link style={navLink} href="#link">Tips & Tricks</Nav.Link>
        <Nav.Link style={navLink} href="#link">Behaviour</Nav.Link>
        <Nav.Link style={navLink} href="#link">Health & Wellness</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <span className="order-md-2 order-2" style={search}>
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
        </path>
      </svg>
    </span>
  </Navbar>
)
