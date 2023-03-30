import styles from "../Skills.module.css";
import htmlPath from "../imgs/html.png";
import cssPath from "../imgs/css.png";
import javascriptPath from "../imgs/javascript.png";
import pythonPath from "../imgs/python.png";
import javaPath from "../imgs/java.png";

function Language() {
  return (
    <>
      <div className={styles.skill}>
        <img src={htmlPath} className={styles.skillImg} />
        <div className={styles.skillName}>HTML(3)</div>
      </div>
      <div className={styles.skill}>
        <img src={cssPath} className={styles.skillImg} />
        <div className={styles.skillName}>CSS(3)</div>
      </div>
      <div className={styles.skill}>
        <img src={javascriptPath} className={styles.skillImg} />
        <div className={styles.skillName}>JavaScript(2)</div>
      </div>
      <div className={styles.skill}>
        <img src={pythonPath} className={styles.skillImg} />
        <div className={styles.skillName}>Python(1)</div>
      </div>
      <div className={styles.skill}>
        <img src={javaPath} className={styles.skillImg} />
        <div className={styles.skillName}>JAVA(1)</div>
      </div>
    </>
  );
}

export default Language;
