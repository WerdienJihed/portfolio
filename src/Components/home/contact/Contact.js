import styles from "../../../Styles/home/contact/contact.module.css";
import { SectionHeader } from "../../reusable/SectionHeader";
import emailjs from "emailjs-com";
import toast from "toasted-notes";
import "toasted-notes/src/styles.css";

export function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eulvkj5",
        "template_1awqtxr",
        e.target,
        "user_nWw1UiTkwfEnStkpwGUHC"
      )
      .then(() => {
        toast.notify(
          <div style={{ color: "#22bb33" }}>
            Thank you! Your message has been successfully sent.
          </div>
        );
      });
  }
  return (
    <div className={styles.wrapper} id="Contact">
      <SectionHeader title="Contact me" />
      <form className={styles.form} onSubmit={sendEmail}>
        <div className={styles.inputBox}>
          <input type="text" name="user_name" required="required" />
          <span className={styles.text}>Full Name</span>
          <span className={styles.line}></span>
        </div>

        <div className={styles.inputBox}>
          <input type="text" name="user_email" required="required" />
          <span className={styles.text}>Email</span>
          <span className={styles.line}></span>
        </div>
        <div className={styles.inputBox}>
          <input type="text" name="user_phone_number" required="required" />
          <span className={styles.text}>phone number</span>
          <span className={styles.line}></span>
        </div>

        <div className={styles.textarea}>
          <textarea required="required" name="user_message"></textarea>
          <span className={styles.text}>Type your message here ...</span>
          <span className={styles.line}></span>
        </div>
        <input type="submit" value="Send" className={styles.submit_button} />
      </form>
    </div>
  );
}
