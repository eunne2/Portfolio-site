import styles from "../Portfolios.module.css";

function Mini() {
  return (
    <div className={styles.modalSection}>
      <div className={styles.modal}>
        <div className={styles.modalText}>
          <div>
            <div className={styles.modalTitle}>[프로젝트 설명]</div>
            <div className={styles.modalContent}>
              - Django Framework를 사용하여 진행한 첫 팀 프로젝트입니다. <br />
              - 웹서버를 만들고 간단한 제품소개와, 로봇 모니터링 후 정보 기록용
              웹사이트를 제작하여 배포하였습니다. <br />
              - 프론트엔드와 백엔드를 나누어 작업했습니다. 프론트엔드는 주로
              화면 구현을 담당했고, 백엔드는 데이터베이스 관리와 연결을
              맡았습니다. <br />
              - BootStrap 템플릿을 이용해 반응형 웹을 구현했습니다. <br />
              - JavaScript를 이용해 데이터 입력시 애니메이션 효과가 나타나도록
              추가했습니다. <br />- MPA(Multi Page App)으로 제작하였습니다.{" "}
              <br />- 로그인한 회원만 입력 및 삭제가 가능하도록 권한을 제한하여
              CRUD를 구현했습니다.
            </div>
          </div>
          <br />
          <br />
          <div>
            <div className={styles.modalTitle}>[경험]</div>
            <div className={styles.modalContent}>
              - 협업으로 만들어본 최초의 웹 프로젝트로써, 협업의 어려움과
              중요성을 깨달았습니다. <br />
              - JQuery ProgressBar 라이브러리를 사용할 수 있었습니다. <br />-
              역할 분담이 잘 이루어지지 못한 것에 아쉬움이 있어, 추후 메인
              프로젝트 때 보완할 예정입니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mini;
