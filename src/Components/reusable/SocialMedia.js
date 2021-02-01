import styles from "../../Styles/home/reusable/social_media.module.css";

export function SocialMedia() {
  return (
    <div className={styles.container}>
      <a
        className="fa fa-linkedin-square"
        style={{ color: "#007bb5" }}
        href="https://www.linkedin.com/in/werdien-jihed/"
        aria-hidden="true"
        target="_blank"
        rel="noreferrer"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <span className={styles.anchor}>werdien jihed linkedin account</span>
      </a>
      <a
        className="fa fa-github-square"
        style={{ color: "#211f1f" }}
        href="https://github.com/WerdienJihed"
        target="_blank"
        rel="noreferrer"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <span className={styles.anchor}>werdien jihed github account</span>
      </a>
      <a
        className="fa fa-facebook-square"
        style={{ color: "#4267b2" }}
        href="https://www.facebook.com/werdien.jihed"
        target="_blank"
        rel="noreferrer"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <span className={styles.anchor}>werdien jihed facebook account</span>
      </a>
      <a
        className="fab fa-instagram-square"
        style={{ color: "#e4405f" }}
        href="https://www.instagram.com/werdien_jihed/"
        target="_blank"
        rel="noreferrer"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        <span className={styles.anchor}>werdien jihed instagram account</span>
      </a>
      <a
        className="fa fa-twitter-square"
        style={{ color: "#1da1f2" }}
        href="https://twitter.com/werdien_jihed"
        target="_blank"
        rel="noreferrer"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <span className={styles.anchor}>werdien jihed twitter account</span>
      </a>
    </div>
  );
}
