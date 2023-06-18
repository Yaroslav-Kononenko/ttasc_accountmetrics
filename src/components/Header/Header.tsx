import styles from "./Header.module.css";
import switcher from "../../assets/header/lang_arrow.svg";
import notifications from "../../assets/header/notification.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import React from "react";

export const Header: React.FC = React.memo(() => {
  const accountData = useSelector((state: RootState) => state.app.mainData);
  const { name, role, image } = accountData;

  return(
    <header className={styles.header}>
      <div className={styles.searchbar}>
        <input type="text" name="" id="" placeholder="Search" className={styles.searchbar__input} />
      </div>

      <div className={styles.userbar}>
        <div className={styles.indicators}>
          <div className={styles.langbar}>
            <span className={styles.langbar__text}>
              en
            </span>

            <div className={styles.langbar__switcher}>
              <img src={switcher} alt="language_switcher" />
            </div>
          </div>

          <div className={styles.notifications}>
              <img src={notifications} alt="notification_icon" className={styles.notifications_img} /> 
          </div>
        </div>

        <div className={styles.userdata}>
          <div className={styles.userdata_text}>
            <div className="">
              <span className={styles.username}>
                {name}
              </span>
            </div>

            <div className="">
              <span className={styles.userstatus}>
                {role}
              </span>
            </div>
          </div>

          <div className={styles.avatar_container}>
            <img src={image} alt="avatar" className={styles.avatar} />

            <div className={styles.status_pointer}></div>
          </div>
        </div>
      </div>
    </header>
  );
});
