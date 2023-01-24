import React from "react";
import Layout from "../components/Layout.js";
import * as styles from "../styles/contact.module.css";
export default function contact() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <h2 className={styles.title}>Contact me</h2>
          <div className={styles.inputElement}>
            <label htmlFor="full-name" className={styles.label}>
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              placeholder="Full Name"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputElement}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputElement}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              rows="5"
              placeholder="Your message ..."
              className={styles.textAreaInput}
              autoComplete="off"
              minLength="10"
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.button}>
            Send
          </button>
        </div>
      </div>
    </Layout>
  );
}
