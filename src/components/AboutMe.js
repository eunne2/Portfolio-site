import styles from "./AboutMe.module.css";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // 타이핑 애니메이션
  const txt = "꿈은 현실이 된다.";
  const [Text, setText] = useState("");
  const [Count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(Text + txt[Count]);
      setCount(Count + 1);
    }, 200);
    if (Count === txt.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  // 마우스 오버 이벤트
  const textAni = useRef();
  const onMouseEnter = () => {
    textAni.current.classList.add("textAni");
    console.log("textAni 클래스 추가");
  };

  const onMouseLeave = () => {
    textAni.current.classList.remove("textAni");
    console.log("textAni 클래스 삭제");
  };

  return (
    <section className={styles.section} id="aboutMe">
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
            <div className={styles.myInfo} data-aos="fade-right">
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
                    &nbsp;· 23.04. 국비지원 개발자 프로그램 수료 및 우수상 수상
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
          <div
            className={styles.infoSection}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {/* 타이핑 효과 */}
            <div className={styles.Text} data-aos="fade-down">
              {Text}
              <span className={styles.cursor}></span>
            </div>
            <div className={styles.infoBox}>
              <div className={styles.info} data-aos="fade-down">
                안녕하세요, 신입 프론트엔드 개발자{" "}
                <span style={{ fontWeight: "600" }}>이은혜</span>
                입니다.
              </div>
              <div className={styles.info} data-aos="fade-down">
                <span ref={textAni}>상상한 아이디어를 직접 구현하는 것</span>이
                좋습니다. 주변 환경에 빠르게 적응하고, 새로운 기술을 배우며
                회사와 함께 성장하고 싶습니다.
              </div>
              <div className={styles.info} data-aos="fade-down">
                노력없이 쓰인 글은 대개 감흥 없이 읽힌다고 합니다. 꾸준히 배우고
                노력하고 개선하여 사용자에게 깊은 여운을 남기는 프론트엔드
                개발자가 되고 싶습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
