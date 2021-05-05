import React from "react";
import "./base.css";
import { Container } from "./Container";
import Navigation from "./Navigation";

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Container>
        <Navigation
          posts={
            children.props.posts
              ? children.props.posts
              : children.props.recomendedPosts
          }
        />
        {children}
      </Container>
    );
  }
}

export default Layout;

