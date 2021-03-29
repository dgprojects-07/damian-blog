import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import logo from '../../assets/petlabblog.jpg'

export default () => (
  <section className={styles.navContainer} id="nav_section">
    <nav role="navigation" className={styles.navBar, styles.navBarExpand}>
      {/* <div className={styles.toggler}>
        <div>
          <button className={styles.StyledBurger}>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
          </button>
        </div>
        <nav className={styles.StyledMenu} style={{display:'none'}}>
          <a aria-current="page" className={styles.navbarBrand} aria-label="" href="">
            <img src="images/petlabblog.jpg" alt="Logo" />
          </a>
          <a aria-label="Supplements" className={styles.navLink} href="">Supplements
                  </a>
          <a aria-label="Natural Remedies" className={styles.navLink} href="">Natural Remedies
                  </a>
          <a aria-label="Recipes" className={styles.navLink} href="">Recipes
                  </a>
          <a aria-label="Tips & Tricks" className={styles.navLink} href="">Tips & Tricks
                  </a>
          <a aria-label="Behaviour" className={styles.navLink} href="">Behaviour
                  </a>
          <a aria-label="Health & Wellness" className={styles.navLink} href="">Health & Wellness
                  </a>
        </nav>
      </div> */}
      <a aria-current="page" className={styles.navBarBrand} aria-label="" href="">
        <img src={logo} className={styles.logo} alt="Logo" />
      </a>
      <div className={styles.navBarCollapse} id="navBarMenuItems">
        <ul className={styles.navBarUl}>
          <li className={styles.navbarItem}>
            <a aria-label="Supplements" className={styles.navLink} href="">Supplements
                    </a>
          </li>
          <li className={styles.navbarItem}>
            <a aria-label="Natural Remedies" className={styles.navLink} href="">Natural Remedies
                    </a>
          </li>
          <li className={styles.navbarItem}>
            <a aria-label="Recipes" className={styles.navLink} href="">Recipes
                    </a>
          </li>
          <li className={styles.navbarItem}>
            <a aria-label="Tips & Tricks" className={styles.navLink} href="">Tips & Tricks
                    </a>
          </li>
          <li className={styles.navbarItem}>
            <a aria-label="Behaviour" className={styles.navLink} href="">Behaviour
                    </a>
          </li>
          <li className={styles.navbarItem}>
            <a aria-label="Health & Wellness" className={styles.navLink} href="">Health & Wellness
                    </a>
          </li>
        </ul>
      </div>
      <span className={styles.navBarSearch}>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em"
          width="1em" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
          </path>
        </svg>
      </span>
    </nav>
  </section>
)
