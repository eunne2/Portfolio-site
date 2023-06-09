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
              - BootStrap 템플릿을 이용해 반응형 웹을 구현했습니다. <br />
              - JavaScript를 이용해 데이터 입력시 애니메이션 효과가 나타나도록
              만들었습니다. <br />- MPA(Multi Page App)으로 제작하였습니다.{" "}
              <br />- 로그인한 회원만 입력 및 삭제가 가능하도록 권한을 제한하여
              CRUD를 구현했습니다.
            </div>
          </div>
          <br />
          <br />
          <div>
            <div className={styles.modalTitle}>[나의 역할]</div>
            <div className={styles.modalContent}>
              - 로그인/로그아웃 모달을 제작했습니다. <br />
              - 입력 페이지의 배터리 모션을 담당했습니다.(ProgressBar 사용)
              <br />
              - 결과 및 삭제 페이지를 제작했습니다. <br />
              - 더보기 버튼을 이용해 추가 정보가 5개씩 뜨도록 설정했습니다.
              <br />- DB에 저장된 LED 색상을 자바스크립트로 시각화했습니다.
            </div>
          </div>
          <br />
          <br />
          <div>
            <div className={styles.modalTitle}>[경험]</div>
            <div className={styles.modalContent}>
              - 협업으로 만들어본 최초의 웹 프로젝트로써, 협업의 어려움과
              중요성을 느꼈습니다.
              <br />- JQuery ProgressBar 라이브러리를 사용했습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mini;
