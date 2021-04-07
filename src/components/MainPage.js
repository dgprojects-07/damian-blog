import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import Post from './Post'
import BigPost from './BigPost'
import MediumPost from './MediumPost'
import CategoryCard from './CategoryCard'
import Footer from './Footer'
import styles from './mainPageStyles'
import { Link } from "gatsby"

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
  const [catContainerStyle, setCatContainerStyle] = useState(styles.catContainer);
  const [catTitleStyle, setCatTitleStyle] = useState(styles.title);
  const [latestPostsStyle, setLatestPostsStyle] = useState(styles.latestPosts);
  const [formStyle, setFormStyle] = useState(styles.form);
  const [inputStyle, setInputStyle] = useState(styles.input);

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
      setCatContainerStyle({
        gridTemplateColumns: '1fr 1fr',
        columnGap: '15px',
        rowGap: '15px',
        padding: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'grid'
      });
      setCatTitleStyle({
        fontSize: '28px',
        fontWeight: '600',
        lineHeight: '1.3',
        color: '#fff',
        textTransform: 'capitalize',
        fontFamily: "'P22', sans-serif",
        padding: '0 0 30px'
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
      setContainerStyle(styles.container);
      setLeftColStyle(styles.leftCol);
      setRightColStyle(styles.rightCol);
      setCatContainerStyle(styles.catContainer);
      setCatTitleStyle(styles.title);
      setLatestPostsStyle(styles.latestPosts);
      setFormStyle(styles.form);
      setInputStyle(styles.input);
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
      <div style={styles.categories}>
        <section style={styles.catSection}>
          <div style={catTitleStyle}>
            <span>Start reading now</span>
          </div>
          <div style={catContainerStyle}>
            <CategoryCard title="supplements" />
            <CategoryCard title="Natural Remedies" />
            <CategoryCard title="recipes" />
            <CategoryCard title="dental" />
            <CategoryCard title="tips&tricks" />
            <CategoryCard title="behaviour" />
            <CategoryCard title="health&wellness" />
            <CategoryCard title="mobility" />
          </div>
        </section>
      </div>
      <section style={styles.latest}>
        <div style={styles.latestTitle}>
          Latest posts
        </div>
        <section style={latestPostsStyle}>
          {posts?.map(p => {
            return (
              <MediumPost
                date={p.node.publishDate}
                title={p.node.title}
                img={p.node.heroImage.fluid.src}
              />
            );
          })}
        </section>
        <div style={styles.latestBtnSection}>
          <button style={styles.latestBtn}>Load More</button>
        </div>
      </section>
      <section style={styles.signUpContainer}>
        <div style={styles.signUp}>
          <p style={styles.signUpText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div style={styles.formContainer}>
            <form style={formStyle}>
              <div>
                <input id="email" type="email" name="email" placeholder="Enter your email address" style={inputStyle} />
              </div>
              <button style={styles.signUpBtn}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>);
};