import React from 'react'
import './base.css'
import Container from './container'
import Navigation from './navigation'

class Template extends React.Component {
  render() {
    const { children } = this.props
    
    return (
      <Container>
        <Navigation posts={children.props.posts? children.props.posts : children.props.recomendedPosts}/>
        {children}
      </Container>
    )
  }
}

export default Template
