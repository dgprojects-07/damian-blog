import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import Post from './Post'
import BigPost from './BigPost'
import MediumPost from './MediumPost'
import CategorySection from './CategorySection'
import SignUpSection from './SignUpSection'
import Footer from './Footer'
import styles from './mainPageStyles'


export default function MainPage({ posts }) {

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
  const [postSectionStyle, setPostSectionStyle] = useState(styles.postSection);

  const [loadedPosts, setLoadedPosts] = useState(posts.slice(0,6));

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
        paddingLeft: '15px',
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
      setPostSectionStyle({
        paddingBottom: '1.5rem',
        width: '100%',
        marginBottom: '1.5rem',
        marginRight: 'auto',
        marginLeft: 'auto',
      });
    } else {
      setContainerStyle(styles.container);
      setLeftColStyle(styles.leftCol);
      setRightColStyle(styles.rightCol);
      setLatestPostsStyle(styles.latestPosts);
      setPostContainerStyle(styles.postContainer);
      setPostSectionStyle(styles.postSection);
    }
  }, [isMobile, isScrolling, isScrollingBack]);

  const loadMore = () => {
    if (loadedPosts.length < posts?.length) {
      let tmp = loadedPosts;
      let tmp2 = tmp.concat(posts.slice(loadedPosts.length,loadedPosts.length+3));
      setLoadedPosts(tmp2);
    }
  };

  return (
    <>
      <div style={postSectionStyle}>
        <div style={containerStyle}>
          <div style={leftColStyle} >
            <BigPost
              author={posts[0].node.author.name}
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
                  slug={p.node.slug}
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
          {loadedPosts?.map(p => {
            return (
              <div style={postContainerStyle}>
                <MediumPost
                  date={p.node.publishDate}
                  title={p.node.title}
                  img={p.node.heroImage.fluid.src}
                  slug={p.node.slug}
                />
              </div>
            );
          })}
        </section>
        <div style={styles.latestBtnSection}>
          <button onClick={loadMore} style={styles.latestBtn}>Load More</button>
        </div>
      </section>
      <SignUpSection bgColor="#f5f6ff"/>
      <Footer />
    </>);
};