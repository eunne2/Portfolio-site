import styles from "./AboutMe.module.css";

function AboutMe() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* 배경 circle */}
        <div className={styles.circle}></div>

        {/* 타이틀 */}
        <div className={styles.sectionTitle}>
          <div className={styles.sectionName}>About Me</div>
          <div>밑주우우우우우울</div>
        </div>

        {/* 본문 */}
        <div className={styles.content}>
          <div className={styles.photoSection}>
            <div className={styles.photo}></div>
            <div className={styles.myInfo}>
              <div>어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구</div>
              <div>어쩌구</div>
              <div>어쩌구</div>
              <div>어쩌구</div>
              <div>어쩌구</div>
              <div>어쩌구</div>
              <div>어쩌구</div>
              <div>어쩌구</div>
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
