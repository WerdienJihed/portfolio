import { Button } from "./Button";
import styles from "./../Styles/Contact.module.css";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  return (
    <div className={styles.wrapper}>
      <SectionHeader title="Contact me" dark="true" />
      <form action="" className={styles.form}>
        <div className={styles.inputBox}>
          <input type="text" name="" required="required" />
          <span className={styles.text}>Full Name</span>
          <span className={styles.line}></span>
        </div>

        <div className={styles.inputBox}>
          <input type="text" name="" required="required" />
          <span className={styles.text}>Email</span>
          <span className={styles.line}></span>
        </div>

        <div className={styles.textarea}>
          <textarea required="required"></textarea>
          <span className={styles.text}>Type your message here ...</span>
          <span className={styles.line}></span>
        </div>

        <Button value="Send" />
      </form>
    </div>
  );
}
