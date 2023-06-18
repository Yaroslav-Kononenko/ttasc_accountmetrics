import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import styles from "./Layout.module.css";
import React from "react";

export const Layout: React.FC = () => {
  return(
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.leftPart}>
        <Header />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
