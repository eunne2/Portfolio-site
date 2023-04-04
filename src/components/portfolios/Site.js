import styles from "../Portfolios.module.css";

function Site() {
  return (
    <div className={styles.modalSection}>
      <div className={styles.modal}>
        <div className={styles.modalText}>
          <div>
            <div className={styles.modalTitle}>[프로젝트 설명]</div>
            <div className={styles.modalContent}>
              - React Js를 이용해 제작한 개인 포트폴리오 사이트입니다. <br />
              - 표준웹과 모바일웹 버전을 나누어 사용자 경험을 향상시켰습니다.
              <br />
              - 리액트의 특성을 이용해 SPA(Single Page App)로 제작하였습니다.
              <br />
              - 사용자를 우선하는 인터페이스로 제작하였습니다.
              <br />
            </div>
          </div>
          <br />
          <br />
          <div>
            <div className={styles.modalTitle}>[경험]</div>
            <div className={styles.modalContent}>
              - 디자인부터 배포까지 혼자 기획하여 마무리 한 웹사이트입니다.
              <br />- AOS, SWIPER 등의 라이브러리를 사용했습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Site;
