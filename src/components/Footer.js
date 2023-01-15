import React from "react";
import * as styles from "../styles/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.information}>
        <div className={styles.addressItem}>
          <FontAwesomeIcon
            icon={faEnvelope}
            title="werdien jihed email"
            size="1x"
          />
          <p>werdien.jihed1996@gmail.com</p>
        </div>
        <div className={styles.addressItem}>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            title="werdien jihed address"
            size="1x"
          />
          <p>Tunisia , Djerba</p>
        </div>
        <div className={styles.addressItem}>
          <FontAwesomeIcon
            icon={faPhoneAlt}
            title="werdien jihed phone number"
            size="1x"
          />
          <p>+21650802935</p>
        </div>
      </div>
      <p className={styles.copyRight}>©2021 Copyright: werdien jihed</p>
    </footer>
  );
};

export default Footer;
