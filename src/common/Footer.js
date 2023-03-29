import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faP, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faBloggerB, faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentTitle}>Contact</div>
        <div className={styles.contact}>
          <a href="mailto:ehye518@gmail.com">
            <div className={styles.circle}>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </a>
          <a href="tel:010-4056-2497">
            <div className={styles.circle}>
              <FontAwesomeIcon icon={faPhone} />
            </div>
          </a>
          <a href="https://blog.naver.com/wweoerkk" target="_blank">
            <div className={styles.circle}>
              <FontAwesomeIcon icon={faBloggerB} />
            </div>
          </a>
          <a href="https://github.com/eunne2" target="_blank">
            <div className={styles.circle}>
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </a>
        </div>
        <div className={styles.str}>
          <span className={styles.str2}>Designed & Developed By</span>
          &nbsp;LeeEunHye
        </div>
      </div>
    </section>
  );
}

export default Footer;
