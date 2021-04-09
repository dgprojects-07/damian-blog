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
    borderRadius: '2px',
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

  postContainer : {
    width: '31.3%',
    display: 'flex',
    flexDirection: 'column'
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
};

export default styles;