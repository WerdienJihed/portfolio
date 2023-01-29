import React, { useState } from "react";
import Layout from "../components/Layout.js";
import SocialMedia from "../components/SocialMedia.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as styles from "../styles/contact.module.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const response = await fetch("/.netlify/functions/sendemail", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    setTimeout(() => {
      if (response.status === 200) {
        toast.success(
          "Your email has been sent. you will receive an automatic response as a confirmation in a few seconds."
        );
      } else
        toast.error(
          "Sending email failed! Can you please verify that you provided a valid email."
        );
      setIsLoading(false);
    }, 1000);
  };
  return (
    <Layout>
      <div className={styles.container}>
        <form className={styles.formWrapper} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Contact me</h2>
          <SocialMedia />
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.inputElement}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className={styles.button}>
            {loading ? "SENDING ..." : "SEND"}
          </button>
        </form>
      </div>
      <ToastContainer position="top-center" />
    </Layout>
  );
}
