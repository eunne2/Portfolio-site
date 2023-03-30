import styles from "../Skills.module.css";
import figmaPath from "../imgs/figma.png";
import vscPath from "../imgs/vsc.png";
import pycharmPath from "../imgs/pycharm.png";
import anacondaPath from "../imgs/anaconda.png";
import eclipsPath from "../imgs/eclips.png";

function DevTools() {
  return (
    <>
      <div className={styles.skill}>
        <img src={figmaPath} className={styles.skillImg} />
        <div className={styles.skillName2}>Figma(2)</div>
      </div>
      <div className={styles.skill}>
        <img src={vscPath} className={styles.skillImg} />
        <div className={styles.skillName2}>VSC(3)</div>
      </div>
      <div className={styles.skill}>
        <img src={pycharmPath} className={styles.skillImg} />
        <div className={styles.skillName2}>Pycharm(1)</div>
      </div>
      <div className={styles.skill}>
        <img src={anacondaPath} className={styles.skillImg} />
        <div className={styles.skillName2}>Anaconda(1)</div>
      </div>
      <div className={styles.skill}>
        <img src={eclipsPath} className={styles.skillImg} />
        <div className={styles.skillName2}>Eclips(1)</div>
      </div>
    </>
  );
}

export default DevTools;
