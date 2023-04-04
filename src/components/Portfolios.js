import { useState } from "react";
import styled from "styled-components";
import styles from "./Portfolios.module.css";
import Blog from "./portfolios/Blog";
import Mini from "./portfolios/Mini";
import Main from "./portfolios/Main";
import Site from "./portfolios/Site";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Portfolio1 - Blog 이미지
import blogPath from "./imgs/blog/blog.png";
import blogPath2 from "./imgs/blog/blog2.png";
import blogPath3 from "./imgs/blog/blog3.png";
import blogPath4 from "./imgs/blog/blog4.png";
import blogPath5 from "./imgs/blog/blog5.png";
import blogPath6 from "./imgs/blog/blog6.png";
import blogPath7 from "./imgs/blog/blog7.png";

// Portfolio2 - OMO 이미지
import omoPath from "./imgs/omo/omo.PNG";
import omoPath2 from "./imgs/omo/omo2.PNG";
import omoPath3 from "./imgs/omo/omo3.PNG";
import omoPath4 from "./imgs/omo/omo4.png";
import omoPath5 from "./imgs/omo/omo5.PNG";
import omoPath6 from "./imgs/omo/omo6.PNG";
import omoPath7 from "./imgs/omo/omo7.PNG";
import omoPath8 from "./imgs/omo/omo8.PNG";
import omoPath9 from "./imgs/omo/omo9.PNG";
import omoPath10 from "./imgs/omo/omo10.PNG";
import omoPath11 from "./imgs/omo/omo11.PNG";
import omoPath12 from "./imgs/omo/omo12.PNG";

// Portfolio3 - PIYONG 이미지
import img1Path from "./imgs/img1.jpg";
import img2Path from "./imgs/img2.jpg";
import img3Path from "./imgs/img3.jpg";
import piyongPath1 from "./imgs/piyong/piyong.PNG";
import piyongPath2 from "./imgs/piyong/piyong2.PNG";
import piyongPath3 from "./imgs/piyong/piyong3.PNG";
import piyongPath4 from "./imgs/piyong/piyong4.PNG";
import piyongPath5 from "./imgs/piyong/piyong5.PNG";
import piyongPath6 from "./imgs/piyong/piyong6.PNG";
import piyongPath7 from "./imgs/piyong/piyong7.PNG";
import piyongPath8 from "./imgs/piyong/piyong8.PNG";
import piyongPath9 from "./imgs/piyong/piyong9.PNG";
import piyongPath10 from "./imgs/piyong/piyong10.PNG";
import piyongPath11 from "./imgs/piyong/piyong11.png";
import piyongPath12 from "./imgs/piyong/piyong12.PNG";

function Portfolios() {
  const [modal, setModal] = useState([false, false, false, false]);

  return (
    <section className={styles.section} id="portfolios">
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
                      <img src={blogPath} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={blogPath2} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={blogPath3} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={blogPath4} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={blogPath5} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={blogPath6} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={blogPath7} className={styles.myImg} />
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
                        do_it_django_a_to_z
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
            {modal[0] && <Blog />}
            <Hr />
            <div className={styles.more}>
              <span
                onClick={() =>
                  setModal(
                    modal.map((m, i) => {
                      return i == 0 ? !m : m;
                    })
                  )
                }
              >
                {modal[0] ? "닫기" : "더보기"}
              </span>
            </div>
          </div>
        </div>

        {/* Protfolio 2 */}
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
                      <img src={omoPath} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={omoPath2} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={omoPath3} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={omoPath4} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={omoPath5} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={omoPath6} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={omoPath7} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={omoPath8} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={omoPath9} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={omoPath10} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={omoPath11} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={omoPath12} className={styles.myImg} />
                    </SwiperSlide>
                    <br />
                  </Swiper>
                </div>
                <div className={styles.portfolioInfo}>
                  <div className={styles.title}>
                    팀 프로젝트 - OMO ROBOT 기록 사이트
                  </div>
                  <Hr />
                  <div className={styles.textBox}>
                    <div className={styles.text}>
                      <span style={{ fontWeight: "600" }}>프로젝트 기간</span> :
                      2023.01.16 ~ 2023.02.01{" "}
                    </div>
                    <div className={styles.text}>
                      <span style={{ fontWeight: "600" }}>Github</span> :{" "}
                      <a
                        href="https://github.com/eunne2/omoRobot-mini-Prj.git"
                        target="_blank"
                      >
                        omoRobot-mini-Prj
                      </a>
                    </div>
                    <div className={styles.text}>
                      <span style={{ fontWeight: "600" }}>Front-end</span> :
                      HTML, CSS, Bootstrap, JavaScript(JQuery)
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
                      Github, CloudType
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {modal[1] && <Mini />}
            <Hr />
            <div className={styles.more}>
              <span
                onClick={() =>
                  setModal(
                    modal.map((m, i) => {
                      return i == 1 ? !m : m;
                    })
                  )
                }
              >
                {modal[1] ? "닫기" : "더보기"}
              </span>
            </div>
          </div>
        </div>

        {/* Protfolio 3 */}
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
                      <img src={piyongPath1} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={piyongPath2} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={piyongPath3} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={piyongPath4} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={piyongPath5} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={piyongPath6} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={piyongPath7} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={piyongPath8} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={piyongPath9} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={piyongPath10} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={piyongPath11} className={styles.myImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={piyongPath12} className={styles.myImg} />
                    </SwiperSlide>
                    <br />
                  </Swiper>
                </div>
                <div className={styles.portfolioInfo}>
                  <div className={styles.title}>
                    팀 프로젝트 - ROS 순찰로봇 PIYONG
                  </div>
                  <Hr />
                  <div className={styles.textBox}>
                    <div className={styles.text}>
                      <span style={{ fontWeight: "600" }}>프로젝트 기간</span> :
                      2023.03.15 ~ 2023.03.31{" "}
                    </div>
                    <div className={styles.text}>
                      <span style={{ fontWeight: "600" }}>Github</span> :{" "}
                      <a
                        href="https://github.com/E3I2/piyong-front.git"
                        target="_blank"
                      >
                        piyong-front/feature/lee
                      </a>
                    </div>
                    <div className={styles.text}>
                      <span style={{ fontWeight: "600" }}>WebSite</span> :{" "}
                      <a
                        href="https://web-piyong-front-luj2cldtwtwnh.sel3.cloudtype.app/"
                        target="_blank"
                      >
                        삐용이 PIYONG
                      </a>
                    </div>
                    <div className={styles.text}>
                      <span style={{ fontWeight: "600" }}>Front-end</span> :
                      HTML, CSS, JSX, React Js
                    </div>
                    <div className={styles.text}>
                      <span style={{ fontWeight: "600" }}>Back-end</span> :
                      JAVA, SQL, Spring
                    </div>
                    <div className={styles.text}>
                      <span style={{ fontWeight: "600" }}>ROS</span> : Python,
                      OpenCV, YOLO, Teachable Machine
                    </div>
                    <div className={styles.text}>
                      <span style={{ fontWeight: "600" }}>DB</span> : MariaDB
                    </div>
                    <div className={styles.text}>
                      <span style={{ fontWeight: "600" }}>Development</span> :
                      IntelliJ, Npm, Maven, Visual Studio Code, Github,
                      CloudType, Raspberry pi, Figma
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {modal[2] && <Main />}
            <Hr />
            <div className={styles.more}>
              <span
                onClick={() =>
                  setModal(
                    modal.map((m, i) => {
                      return i == 2 ? !m : m;
                    })
                  )
                }
              >
                {modal[2] ? "닫기" : "더보기"}
              </span>
            </div>
          </div>
        </div>

        {/* Protfolio 4 */}
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
                  <div className={styles.title}>
                    개인 프로젝트 - Eunhye's Portfolio Site
                  </div>
                  <Hr />
                  <div className={styles.textBox}>
                    <div className={styles.text}>
                      <span style={{ fontWeight: "600" }}>프로젝트 기간</span> :
                      2023.03.27 ~ 2023.03.31
                    </div>
                    <div className={styles.text}>
                      <span style={{ fontWeight: "600" }}>Github</span> :{" "}
                      <a
                        href="https://github.com/eunne2/Portfolio-site.git"
                        target="_blank"
                      >
                        Portfolio-site
                      </a>
                    </div>
                    <div className={styles.text}>
                      <span style={{ fontWeight: "600" }}>WebSite</span> :{" "}
                      <a href="#" target="_blank">
                        Eunhye's Portfolio Site
                      </a>
                    </div>
                    <div className={styles.text}>
                      <span style={{ fontWeight: "600" }}>Front-end</span> :
                      HTML, CSS, JSX, React Js
                    </div>
                    <div className={styles.text}>
                      <span style={{ fontWeight: "600" }}>Development</span> :
                      Visual Studio Code, Github, Figma, CloudType
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {modal[3] && <Site />}
            <Hr />
            <div className={styles.more}>
              <span
                onClick={() =>
                  setModal(
                    modal.map((m, i) => {
                      return i == 3 ? !m : m;
                    })
                  )
                }
              >
                {modal[3] ? "닫기" : "더보기"}
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
