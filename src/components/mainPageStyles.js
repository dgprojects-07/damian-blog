import React from 'react'

const styles = {
  container: {
    justifyContent: 'space-between',
    alignItems: 'stretch',
    display: 'flex',
  },

  rightCol: {
    width: '39.5%'
  },

  leftCol: {
    width: '57.5%'
  },

  popular: {
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
  },

  postSection: {
    maxWidth: '1310px',
    paddingBottom: '1.5rem',
    width: '100%',
    marginTop: '7.5rem',
    marginBottom: '1.5rem',
    marginRight: 'auto',
    marginLeft: 'auto',
  },

  categories: {
    backgroundColor: '#E26447',
    textAlign: 'center',
    padding: '40px 0 70px',
    marginTop: '60px',
  },

  catSection: {
    width: '100%',
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto'
  },

  title: {
    fontSize: '40px',
    fontWeight: '600',
    lineHeight: '1',
    color: '#fff',
    textTransform: 'capitalize',
    fontFamily: "'P22', sans-serif",
    paddingBottom: '50px'
  },

  catContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    columnGap: '30px',
    rowGap: '30px',
    maxWidth: '1310px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  latest: {
    width: '100%',
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: '#f5f6ff',
    paddingTop: '40px',
    paddingBottom: '1rem'
  },

  latestTitle: {
    paddingBottom: '20px',
    lineHeight: '1',
    fontSize: '40px',
    fontWeight: '700',
    fontFamily: "'P22', sans-serif",
    marginBottom: '1rem',
    textAlign: 'center',
    marginTop: '.25rem',
    color: "#293F4C"
  },

  latestPosts: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '1310px',
    paddingRight: '1rem',
    paddingLeft: '1rem',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  latestBtnSection: {
    overflowAnchor: 'none',
    margin: '30px auto',
    textAlign: 'center',
    width: '100%'
  },

  latestBtn: {
    cursor: 'pointer',
    borderColor: '#AE462C',
    background: '#E26447',
    color: '#FFFFFF',
    borderBottom: '3px solid #AE462C',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '18px',
    padding: '10px 22px',
    margin: 'auto',
    boxShadow: '0 0.5rem 1rem rgb(0 0 0 / 15%)'
  },

  signUpContainer: {
    fontSize: '24px',
    paddingBottom: '3rem',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    paddingTop: '1.5rem',
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: '#f5f6ff'
  },

  signUp: {
    paddingTop: '10px',
    maxWidth: '1310px',
    paddingRight: '15px',
    paddingLeft: '15px',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  signUpText: {
    fontWeight: '400',
    width: '50%',
    fontSize: '24px',
    lineHeight: '34px',
    paddingBottom: '40px',
    paddingTop: '1.5rem',
    margin: 'auto',
    color: "#293F4C"
  },

  formContainer: {
    textAlign: 'center',
    marginBottom: '3rem'
  },

  form: {
    paddingBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  input: {
    margin: '0',
    height: '62px',
    boxShadow: '0 0 40px rgb(2 12 87 / 15%)',
    maxWidth: '402px',
    borderRadius: '8px',
    border: '1px solid #c8c8c8',
    padding: '17px 30px',
    fontWeight: '400',
    minWidth: '380px',
    fontSize: '22px',
  },

  signUpBtn: {
    margin: '0px 20px',
    height: '60px',
    fontSize: '20px',
    paddingRight: '26px',
    paddingLeft: '26px',
    boxShadow: '0 0 10px rgb(2 12 87 / 20%)',
    whiteSpace: 'pre-line',
    cursor: 'pointer',
    borderColor: '#AE462C',
    background: '#E26447',
    color: '#FFFFFF',
    borderBottom: '3px solid #AE462C',
    borderRadius: '8px',
    fontWeight: '600',
    padding: '10px 22px'
  },
};

export default styles;