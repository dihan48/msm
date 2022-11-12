import styles from "../styles/header.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo_container}>
          <div className={styles.logo} />
        </div>
        <nav className={styles.menu}>
          <button className={styles.menu_button}>Примеры работ</button>
          <button className={styles.menu_button}>Преимущества</button>
          <button className={styles.menu_button}>Цена</button>
        </nav>
        <div className={styles.request_button_container}>
          <button className={styles.request_button}>Оставить заявку</button>
        </div>
      </div>
    </header>
  );
}
