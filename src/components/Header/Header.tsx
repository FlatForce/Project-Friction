import * as React from "react";

import logo from "../../assets/images/logo.svg";
import styles from "./Header.module.scss";

class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <div className={styles.headerTitle}>Project Friction</div>
      </div>
    );
  }
}

export default Header;