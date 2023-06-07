import React from "react";
import styles from "./Sidebar.module.css";
import logobird from "../../assets/sidebar/logo.svg";
import home_active from "../../assets/sidebar/home_active.svg";
import courses from "../../assets/sidebar/courses.svg";
import libraries from "../../assets/sidebar/libraries.svg";
import statistics from "../../assets/sidebar/statistics.svg";
import guideline from "../../assets/sidebar/users_guideline.svg";
import logout from "../../assets/sidebar/logout.svg"

type NavItem = {
  nav_text: string;
  url: string;
  logoUrl: string;
  activeLogoUrl?: string;
}

export const Sidebar: React.FC = React.memo(() => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo_container}>
        <div className={styles.logo}>
          <img className={styles.logo__img} src={logobird} alt="Logobird" />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.nav}>
          {navList.map((navItem: NavItem)=>{
              return(
                <div 
                  key={navItem.nav_text} 
                  className={`
                    ${styles.nav_item}
                    ${navItem.activeLogoUrl && styles.active_link}
                  `}
                >
                  <img 
                    className={styles.img}
                    src={navItem.logoUrl}
                    alt={`${navItem.nav_text}_logo`}
                  />
                  <span 
                    className={`
                      ${styles.nav_item__text}
                      ${navItem.activeLogoUrl && styles.active_link_text}
                    `}
                  >
                    {navItem.nav_text}
                  </span> 
                </div>
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
    url: "",
    logoUrl: home_active,
    activeLogoUrl: home_active,
  },
  {
    nav_text: "Courses",
    url: "",
    logoUrl: courses,
  },
  {
    nav_text: "Libraries",
    url: "",
    logoUrl: libraries,
  },
  {
    nav_text: "Statistics",
    url: "",
    logoUrl: statistics,
  },
  {
    nav_text: "Users guideline",
    url: "",
    logoUrl: guideline,
  },
];
