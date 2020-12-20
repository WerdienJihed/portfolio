import { Button } from "./Button";
import styles from "./../Styles/Contact_me.module.css";

export function ContactMe() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Contact me </div>
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
