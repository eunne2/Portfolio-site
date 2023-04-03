import styles from "../Portfolios.module.css";

function Main() {
  return (
    <div className={styles.modalSection}>
      <div className={styles.modal}>
        <div className={styles.modalText}>
          <div>
            <div className={styles.modalTitle}>[프로젝트 설명]</div>
            <div className={styles.modalContent}>
              - omoRobot을 활용하여 자율주행 순찰로봇, 도로 범죄자 순찰 서비스를
              제공하는 프로젝트입니다. <br />- SpringBoot와 React-app을 사용하여
              사이트를 제작하였습니다. <br />
              - 사용자에게 서비스를 제공하는 것에 초점을 맞춰 사이트를
              제작했습니다. <br />- 카카오 로그인, 블로그 CRUD 방식의 순찰요청
              및 커뮤니티 페이지, ROS 로봇 통신 등의 기술을 담았습니다.
            </div>
          </div>
          <br />
          <br />
          <div>
            <div className={styles.modalTitle}>[나의 역할]</div>
            <div className={styles.modalContent}>
              - Figma로 웹사이트 전체 UI/UX 디자인을 목업했습니다. <br />-
              순찰요청, 커뮤니티 페이지 CRUD(RestFul-API)를 연결했습니다. <br />
              - 웰컴 페이지 애니메이션을 구현했습니다. <br />
              - 반응형 Header와 로그인/로그아웃 모달을 제작했습니다. <br />
              - 유저 권한에 따른 요청을 처리했습니다. <br />- 프론트엔드 작업
              통합 및 CloudType을 통한 배포를 진행했습니다.
            </div>
          </div>
          <br />
          <br />
          <div>
            <div className={styles.modalTitle}>[경험]</div>
            <div className={styles.modalContent}>
              - 역할 분담, 통합을 위한 Git의 중요성을 깨달았습니다. <br />
              - React 라이브러리를 활용하여 웹사이트를 제작할 수 있었습니다.
              <br />
              - axios, feach를 이용해 RestFul-API를 연결할 수 있었습니다. <br />
              - DB를 배포하여, 로컬 DB가 아닌 외부 DB와의 연결을 완료했습니다.{" "}
              <br />- CloudType을 이용해 웹사이트를 배포했습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
