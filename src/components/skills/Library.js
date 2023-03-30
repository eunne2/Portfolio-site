import styles from "../Skills.module.css";
import bootstrapPath from "../imgs/bootstrap.png";
import jqueryPath from "../imgs/jquery.png";
import opencvPath from "../imgs/opencv.png";

function Library() {
  return (
    <>
      <div className={styles.skill}>
        <img src={bootstrapPath} className={styles.skillImg} />
        <div className={styles.skillName2}>Bootstrap(2)</div>
      </div>
      <div className={styles.skill}>
        <img src={jqueryPath} className={styles.skillImg} />
        <div className={styles.skillName2}>JQuery(1)</div>
      </div>
      <div className={styles.skill}>
        <img src={opencvPath} className={styles.skillImg} />
        <div className={styles.skillName2}>OpenCV(1)</div>
      </div>
    </>
  );
}

export default Library;
