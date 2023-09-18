import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";
import logobird from "../../assets/sidebar/logo.svg";
import home from "../../assets/sidebar/home.svg";
import courses from "../../assets/sidebar/courses.svg";
import libraries from "../../assets/sidebar/libraries.svg";
import statistics from "../../assets/sidebar/statistics.svg";
import guideline from "../../assets/sidebar/users_guideline.svg";
import logout from "../../assets/sidebar/logout.svg";

type NavItem = {
  nav_text: string;
  url: string;
  logoUrl: string;
}

export const Sidebar: React.FC = React.memo(() => {
  const { nav_item, active_link } = styles;
  const { pathname } = useLocation();

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo_container}>
        <div className={styles.logo}>
          <img className={styles.logo__img} src={logobird} alt="Logobird" />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.nav}>
          {navList.map((navItem: NavItem) => {
              const isActive = pathname.includes(navItem.url);
              const activeLinkStyle = isActive ? styles.active_link_text : '';
              const activeImgStyle = isActive ? styles.img_active : '';

              return(
                <NavLink 
                  to={navItem.url}
                  key={navItem.nav_text} 
                  className={({ isActive }) => {
                    return(`${nav_item} ${isActive && active_link}`)
                  }}
                >
                  <img 
                    className={`${styles.img} ${activeImgStyle}`}
                    src={navItem.logoUrl}
                    alt={`${navItem.nav_text}_logo`}
                  />
                  <span 
                    className={`
                      ${styles.nav_item__text}
                      ${activeLinkStyle}
                    `}
                  >
                    {navItem.nav_text}
                  </span> 
                </NavLink>
              );
            })
          }
        </div>

        <div className={styles.logout_container}>
          <div className={`${styles.nav_item} ${styles.logout_button}`}>
            <img src={logout} className={styles.img} alt="Logout_button" />
            <span className={styles.nav_item__text}>
              Sign Out
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export const navList: NavItem[] = [
  {
    nav_text: "Home",
    url: "home",
    logoUrl: home,
  },
  {
    nav_text: "Courses",
    url: "courses",
    logoUrl: courses,
  },
  {
    nav_text: "Libraries",
    url: "libraries",
    logoUrl: libraries,
  },
  {
    nav_text: "Statistics",
    url: "statistics",
    logoUrl: statistics,
  },
  {
    nav_text: "Users guideline",
    url: "users_guideline",
    logoUrl: guideline,
  },
];
