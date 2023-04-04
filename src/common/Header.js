import { useEffect, useState } from "react";
import styled from "styled-components";
import styles from "./Header.module.css";

function Header() {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 0 ? setIsScroll(true) : setIsScroll(false);
    });
  }, [isScroll]);

  return (
    <section className={styles.section}>
      <Nav isScroll={isScroll}>
        <a href="#main" className={styles.menu}>
          Main
        </a>
        <a href="#aboutMe" className={styles.menu}>
          About Me
        </a>
        <a href="#skills" className={styles.menu}>
          Skills
        </a>
        <a href="#portfolios" className={styles.menu}>
          Portfolios
        </a>
      </Nav>
    </section>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 90;
  opacity: ${(props) => (props.isScroll ? "0.3" : "0.7")};
  backdrop-filter: blur(30px);
  padding: 0 5rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 4.5rem;
  transition: all 0.2s ease-in-out;
  font-size: 1.3rem;

  @media screen and (max-width: 550px) {
    display: none;
`;

export default Header;
