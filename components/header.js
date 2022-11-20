import { Link as ScrollLink } from "react-scroll";
import styles from "../styles/header.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo_container}>
          <div className={styles.logo} />
        </div>
        <nav className={styles.menu}>
          <ScrollLink
            href="#portfolio"
            to={"section3"}
            smooth={true}
            duration={500}
          >
            <button className={styles.menu_button}>Примеры работ</button>
          </ScrollLink>
          <ScrollLink
            href="#advantage"
            to={"section4"}
            smooth={true}
            duration={500}
          >
            <button className={styles.menu_button}>Преимущества</button>
          </ScrollLink>
          <ScrollLink
            href="#price"
            to={"section6"}
            smooth={true}
            duration={500}
          >
            <button className={styles.menu_button}>Цена</button>
          </ScrollLink>
        </nav>
        <div className={styles.request_button_container}>
          <a href="https://t.me/scrooge_tg" target="_blank" rel="noreferrer">
            <button className={styles.request_button}>Оставить заявку</button>
          </a>
        </div>
      </div>
    </header>
  );
}
