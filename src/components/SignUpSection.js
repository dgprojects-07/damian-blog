import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';

const signUp = {
  paddingTop: '10px',
  maxWidth: '1310px',
  paddingRight: '15px',
  paddingLeft: '15px',
  textAlign: 'center',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const signUpText = {
  fontWeight: '400',
  width: '50%',
  fontSize: '24px',
  lineHeight: '34px',
  paddingBottom: '40px',
  paddingTop: '1.5rem',
  margin: 'auto',
  color: "#293F4C"
};

const formContainer = {
  textAlign: 'center',
  marginBottom: '3rem'
};

const form = {
  paddingBottom: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const input = {
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
};

const signUpBtn = {
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
};

export default function SignUpSection({ bgColor }) {

  const signUpContainer = {
    fontSize: '24px',
    paddingBottom: '3rem',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    paddingTop: '1.5rem',
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: bgColor
  };

  const isMobile = useMediaQuery({
    query: '(max-width: 890px)'
  });

  const [formStyle, setFormStyle] = useState(form);
  const [inputStyle, setInputStyle] = useState(input);

  useEffect(() => {
    if (isMobile) {
      setFormStyle({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '20px auto 0'
      });
      setInputStyle({
        marginBottom: '20px',
        height: '62px',
        boxShadow: '0 0 40px rgb(2 12 87 / 15%)',
        maxWidth: '402px',
        borderRadius: '8px',
        border: '1px solid #c8c8c8',
        padding: '17px 30px',
        fontWeight: '400',
        minWidth: '380px',
        fontSize: '22px',
      });
    } else {
      setFormStyle(form);
      setInputStyle(input);
    }
  }, [isMobile]);

  return (
    <section style={signUpContainer}>
      <div style={signUp}>
        <p style={signUpText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div style={formContainer}>
          <form style={formStyle}>
            <div>
              <input id="email" type="email" name="email" placeholder="Enter your email address" style={inputStyle} />
            </div>
            <button style={signUpBtn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}