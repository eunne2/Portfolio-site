import Footer from "./common/Footer";
import Header from "./common/Header";
import AboutMe from "./components/AboutMe";
import Main from "./components/Main";
import Portfolios from "./components/Portfolios";
import Skills from "./components/Skills";
import styles from "./App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  const handleScroll = () => {
    if (!window.scrollY) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header />
      <Main />
      <AboutMe />
      <Skills />
      <Portfolios />
      <Footer />
      <div className={styles.topBtnWrap}>
        <button onClick={handleScroll} className={styles.topBtn}>
          <FontAwesomeIcon icon={faAngleUp} />
        </button>
      </div>
    </>
  );
}

export default App;
