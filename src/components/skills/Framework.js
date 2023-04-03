import styles from "../Skills.module.css";
import reactPath from "../imgs/react.png";
import djangoPath from "../imgs/django.png";

function Framework() {
  return (
    <>
      <div className={styles.skill}>
        <img src={reactPath} className={styles.skillImg} />
        <div className={styles.skillName}>React-Js(2)</div>
      </div>
      <div className={styles.skill}>
        <img src={reactPath} className={styles.skillImg} />
        <div className={styles.skillName}>React-Native(1)</div>
      </div>
      <div className={styles.skill}>
        <img src={djangoPath} className={styles.skillImg} />
        <div className={styles.skillName}>Django(1)</div>
      </div>
    </>
  );
}

export default Framework;
