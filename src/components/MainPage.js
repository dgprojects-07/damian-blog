import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import Post from './Post'
import BigPost from './BigPost'
import MediumPost from './MediumPost'
import CategorySection from './CategorySection'
import SignUpSection from './SignUpSection'
import Footer from './Footer'
import styles from './mainPageStyles'


export default function MainPage({ posts, author }) {

  const isMobile = useMediaQuery({
    query: '(max-width: 890px)'
  });

  const isScrollingBack = useMediaQuery({
    query: '(min-width: 890px)'
  });

  const isScrolling = useMediaQuery({
    query: '(max-width: 1380px)'
  });

  const [containerStyle, setContainerStyle] = useState(styles.container);
  const [rightColStyle, setRightColStyle] = useState(styles.rightCol);
  const [leftColStyle, setLeftColStyle] = useState(styles.leftCol);
  const [latestPostsStyle, setLatestPostsStyle] = useState(styles.latestPosts);
  const [postContainerStyle, setPostContainerStyle] = useState(styles.postContainer);

  useEffect(() => {
    if (isScrolling && isScrollingBack) {
      setContainerStyle({
        justifyContent: 'space-between',
        alignItems: 'stretch',
        display: 'flex',
        paddingRight: '15px',
        paddingLeft: '15px'
      })
    } else if (isMobile) {
      setContainerStyle({
        display: 'flex',
        flexFlow: "column",
        justifyContent: 'space-between',
        paddingRight: '15px',
        paddingLeft: '15px'
      });
      setRightColStyle({
        width: '100%'
      });
      setLeftColStyle({
        width: '100%'
      });
      setLatestPostsStyle({
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        maxWidth: '820px',
        padding: 0,
        marginLeft: 'auto',
        marginRight: 'auto'
      });
      setPostContainerStyle({
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      });
    } else {
      setContainerStyle(styles.container);
      setLeftColStyle(styles.leftCol);
      setRightColStyle(styles.rightCol);
      setLatestPostsStyle(styles.latestPosts);
      setPostContainerStyle(styles.postContainer);
    }
  }, [isMobile, isScrolling, isScrollingBack]);

  return (
    <>
      <div style={styles.postSection}>
        <div style={containerStyle}>
          <div style={leftColStyle} >
            <BigPost
              author={author.node.name}
              date={posts[0].node.publishDate}
              title={posts[0].node.title}
              img={posts[0].node.heroImage.fluid.src}
              slug={posts[0].node.slug}
            />
          </div>
          <div style={rightColStyle} >
            <div style={styles.popular}>
              Most popular
            </div>
            {posts?.map(p => {
              return (
                <Post
                  date={p.node.publishDate}
                  title={p.node.title}
                  img={p.node.heroImage.fluid.src}
                />
              );
            })}
          </div>
        </div>
      </div>
      <CategorySection />
      <section style={styles.latest}>
        <div style={styles.latestTitle}>
          Latest posts
        </div>
        <section style={latestPostsStyle}>
          {posts?.map(p => {
            return (
              <div style={postContainerStyle}>
                <MediumPost
                  date={p.node.publishDate}
                  title={p.node.title}
                  img={p.node.heroImage.fluid.src}
                />
              </div>
            );
          })}
        </section>
        <div style={styles.latestBtnSection}>
          <button style={styles.latestBtn}>Load More</button>
        </div>
      </section>
      <SignUpSection bgColor="#f5f6ff"/>
      <Footer />
    </>);
};