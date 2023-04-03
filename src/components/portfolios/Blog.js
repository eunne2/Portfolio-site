import styles from "../Portfolios.module.css";

function Blog() {
  return (
    <div className={styles.modalSection}>
      <div className={styles.modal}>
        <div className={styles.modalText}>
          <div>
            <div className={styles.modalTitle}>[프로젝트 설명]</div>
            <div className={styles.modalContent}>
              - Django Framwork와 BootStrap을 사용하여 배포 과정까지 진행한
              블로그 만들기 프로젝트입니다. <br />- 블로그 형태의 웹페이지로,
              로그인 기능(email, google), 게시글 및 댓글 CRUD, 인증과 인가
              처리를 구현했습니다.
            </div>
          </div>
          <br />
          <br />
          <div>
            <div className={styles.modalTitle}>[경험]</div>
            <div className={styles.modalContent}>
              - Back-end에 대한 이해를 할 수 있었습니다. <br />
              - 데이터의 CRUD 원리와 과정을 구현할 수 있었습니다. <br />
              - Django 프레임워크 학습 및 사용을 익혔습니다. <br />- BootStrap
              학습 및 사용법에 익숙해졌습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
