import styles from "../../Styles/home/reusable/social_media.module.css";
export function SocialMedia() {
  return (
    <div className={styles.wrapper}>
      <a
        className="fa fa-linkedin-square"
        style={{ color: "#007bb5" }}
        href="https://www.linkedin.com/in/werdien-jihed/"
        aria-hidden="true"
      >
        <span className={styles.anchor}>werdien jihed linkedin account</span>
      </a>
      <a
        className="fa fa-github-square"
        style={{ color: "#211f1f" }}
        href="https://github.com/WerdienJihed"
      >
        <span className={styles.anchor}>werdien jihed github account</span>
      </a>
      <a
        className="fa fa-facebook-square"
        style={{ color: "#4267b2" }}
        href="https://www.facebook.com/werdien.jihed"
      >
        <span className={styles.anchor}>werdien jihed facebook account</span>
      </a>
      <a
        className="fab fa-instagram-square"
        style={{ color: "#e4405f" }}
        href="https://www.instagram.com/werdien_jihed/"
      >
        <span className={styles.anchor}>werdien jihed instagram account</span>
      </a>
      <a
        className="fa fa-twitter-square"
        style={{ color: "#1da1f2" }}
        href="https://twitter.com/werdien_jihed"
      >
        <span className={styles.anchor}>werdien jihed twitter account</span>
      </a>
    </div>
  );
}
