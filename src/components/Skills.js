import styles from "./Skills.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Language from "./skills/Language";
import DevTools from "./skills/DevTools";
import Framework from "./skills/Framework";
import Library from "./skills/Library";
import { useState } from "react";

function Skills() {
  // 버튼으로 컴포넌트 변경
  const [lang, setLang] = useState(true);
  const [frame, setFrame] = useState(true);

  // 버튼 인덱스 상태 변화
  const [num, setNum] = useState(2);
  const [num2, setNum2] = useState(1);

  const [num3, setNum3] = useState(4);
  const [num4, setNum4] = useState(3);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* 타이틀 */}
        <div className={styles.sectionTitle}>
          <div className={styles.sectionName}>Skills</div>
          <div data-aos="slide-right" className={styles.line}></div>
        </div>

        {/* Skill Level */}
        <div className={styles.level}>
          · Skill Level : Basic(1) / Demonstrating(2) / Proficient(3) /
          Expert(4)
        </div>

        {/* skill 카드1 */}
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

        {/* skill 카드2 */}
        <div
          className={styles.toggleSection}
          data-aos="slide-left"
          style={{ marginBottom: "3rem", overflow: "hidden" }}
        >
          <div className={styles.toggleBtnBox}>
            <button
              className={styles.toggleBtn}
              style={{ zIndex: num3 }}
              onClick={() => {
                setFrame(true);
                setNum3(4);
                setNum4(3);
              }}
            >
              Framework
            </button>
            <button
              className={styles.toggleBtn2}
              style={{ zIndex: num4 }}
              onClick={() => {
                setFrame(false);
                setNum3(3);
                setNum4(4);
              }}
            >
              Library
            </button>
          </div>
          {frame ? (
            <div className={styles.toggleBox}>
              <Framework />
            </div>
          ) : (
            <div className={styles.toggleBox2}>
              <Library />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;
