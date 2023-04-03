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
              - 표준웹과 모바일웹 버전을 나누어 반응형이 되도록 제작하였습니다.
              <br />
              - 리액트의 특성을 이용해 SPA(Single Page App)로 제작하였습니다.
              <br />
              - 가독성이 좋은 페이지를 만들기 위해 사용자의 입장에서 고려하여
              페이지를 디자인했습니다. <br />
            </div>
          </div>
          <br />
          <br />
          <div>
            <div className={styles.modalTitle}>[경험]</div>
            <div className={styles.modalContent}>
              - 모바일 화면에서도 깨지지 않도록 페이지를 제작할 수 있었습니다.
              <br />
              - 디자인부터 배포까지 혼자 기획하여 마무리 한 웹사이트입니다.
              <br />- AOS, SWIPER 등의 라이브러리를 사용할 수 있었습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Site;
