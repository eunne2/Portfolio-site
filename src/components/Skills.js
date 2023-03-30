import styles from "./Skills.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Language from "./skills/Language";
import DevTools from "./skills/DevTools";
import { useState } from "react";

function Skills() {
  const [lang, setLang] = useState(true);

  const [num, setNum] = useState(1);
  const [num2, setNum2] = useState(2);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* 타이틀 */}
        <div className={styles.sectionTitle}>
          <div className={styles.sectionName}>Skills</div>
          <div data-aos="slide-right" className={styles.line}></div>
        </div>
        <div className={styles.toggleSection} data-aos="slide-right">
          <div className={styles.toggleBtnBox}>
            <button
              className={styles.toggleBtn}
              style={{ zIndex: num }}
              onClick={() => {
                setLang(true);
                setNum(2);
                setNum2(1);
              }}
            >
              Language
            </button>
            <button
              className={styles.toggleBtn2}
              style={{ zIndex: num2 }}
              onClick={() => {
                setLang(false);
                setNum(1);
                setNum2(2);
              }}
            >
              Dev Tools
            </button>
          </div>
          {lang ? (
            <div className={styles.toggleBox}>
              <Language />
            </div>
          ) : (
            <div className={styles.toggleBox2}>
              <DevTools />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;
