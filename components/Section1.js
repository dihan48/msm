import styles from "../styles/Section1.module.css";

export function Section1() {
  return (
    <section className={styles.container}>
      <div className={styles.bg2} />
      <div className={styles.bg_card} />
      <div className={styles.bg1} />
      <div className={styles.bg_text} />
      <div className={styles.content}>
        <div className={styles.title}>Продающие карточки для маркетплейсов</div>
      </div>
    </section>
  );
}
