import { useState } from "react";
import styled from "styled-components";
import styles from "./Portfolios.module.css";
import Blog from "./portfolios/Blog";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// 이미지
import img1Path from "./imgs/img1.jpg";
import img2Path from "./imgs/img2.jpg";
import img3Path from "./imgs/img3.jpg";

function Portfolios() {
  const [modal, setModal] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* 타이틀 */}
        <div className={styles.sectionTitle}>
          <div className={styles.sectionName}>Portfolios</div>
          <div data-aos="slide-right" className={styles.line}></div>
        </div>

        {/* Protfolio 1 */}
        <div className={styles.portfolioSection}>
          <div className={styles.portfolioCard} data-aos="fade-up">
            <div className={styles.padding}>
              <div className={styles.portfolio}>
                <div className={styles.protfolioImg}>
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    loop
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                  >
                    <SwiperSlide>
                      <img src={img1Path} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={img2Path} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={img3Path} className={styles.myImg} />
                    </SwiperSlide>
                    <br />
                  </Swiper>
                </div>
                <div className={styles.portfolioInfo}>
                  <div className={styles.title}>개인 프로젝트 - 블로그</div>
                  <Hr />
                  <div className={styles.textBox}>
                    <div className={styles.text}>
                      <span style={{ fontWeight: "600" }}>프로젝트 기간</span> :
                      2022.11.01 ~ 2022.11.07{" "}
                    </div>
                    <div className={styles.text}>
                      <span style={{ fontWeight: "600" }}>Github</span> :{" "}
                      <a
                        href="https://github.com/eunne2/do_it_django_a_to_z"
                        target="_blank"
                      >
                        깃허브 소스 코드 보기
                      </a>
                    </div>
                    <div className={styles.text}>
                      <span style={{ fontWeight: "600" }}>Front-end</span> :
                      HTML, CSS, Bootstrap
                    </div>
                    <div className={styles.text}>
                      <span style={{ fontWeight: "600" }}>Back-end</span> :
                      Python, SQL
                    </div>
                    <div className={styles.text}>
                      <span style={{ fontWeight: "600" }}>DB</span> : Django
                    </div>
                    <div className={styles.text}>
                      <span style={{ fontWeight: "600" }}>Development</span> :
                      Python-Django, Visual Studio Code, Sqlite3, PostgreSQL,
                      Github, AWS
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {modal && <Blog />}
            <Hr />
            <div className={styles.more}>
              <span onClick={() => setModal((e) => !e)}>
                {modal ? "닫기" : "더보기"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Hr = styled.hr`
  height: 0.8px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  border: 0;
  margin: auto;
`;

export default Portfolios;
