import styles from "./AboutMe.module.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* 배경 circle */}
        <div className={styles.circle}></div>

        {/* 타이틀 */}
        <div className={styles.sectionTitle}>
          <div className={styles.sectionName}>About Me</div>
          <div data-aos="slide-right" className={styles.line}></div>
        </div>

        {/* 본문 */}
        <div className={styles.content}>
          <div className={styles.photoSection}>
            <div className={styles.photo}></div>
            <div className={styles.myInfo}>
              <div className={styles.myInfoDiv}>
                <div className={styles.front}>프론트엔드 개발자</div>
                <div className={styles.name}>이은혜</div>
                <div className={styles.birth}>1998.05.18.</div>
                <div className={styles.mail}>ehye518@gmail.com</div>
              </div>
              <div className={styles.ulBox}>
                <ul className={styles.academin}>
                  학력
                  <li className={styles.academinInfo}>
                    &nbsp;· 23.08. 한남대학교 졸업 예정
                    <br />
                    (프랑스어문학과 / 글로벌비즈니스)
                  </li>
                </ul>
                <ul className={styles.history}>
                  이력
                  <li className={styles.historyInfo}>
                    &nbsp;· 23.04. 국비지원 개발자 프로그램 수료
                    (미래융합교육원)
                  </li>
                </ul>
              </div>
              <div className={styles.link}>
                <a
                  href="https://blog.naver.com/wweoerkk"
                  target="_blank"
                  className={styles.linkTag}
                >
                  <div className={styles.blogLink}>B</div>
                </a>
                <a
                  href="https://github.com/eunne2"
                  target="_blank"
                  className={styles.linkTag}
                >
                  <div className={styles.githubLink}>
                    <FontAwesomeIcon icon={faGithub} />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.infoSection}>
            <div>문장문장</div>
            <div>문장문장</div>
            <div>문장문장</div>
            <div>문장문장</div>
            <div>문장문장</div>
            <div>문장문장</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
