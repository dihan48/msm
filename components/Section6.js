import styles from "../styles/Section6.module.css";

export function Section6() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Стоимость</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h2 className={styles.card_title}>Начальный</h2>
          <ul className={styles.card_features}>
            <li>
              1 СЛАЙД <span className={styles.card_text_gray}>(ОБЛОЖКА)</span>
            </li>
            <li>ИНФОГРАФИКА</li>
            <li>ОБРАБОТКА ФОТО</li>
            <li>ПРЕМИУМ ДИЗАЙН</li>
            <li>СРОК 1 - 2 ДНЯ</li>
          </ul>
          <div className={styles.price}>1 490</div>
          <button className={styles.card_button}>Заказать в telegram</button>
        </div>
        <div className={styles.card}>
          <h2 className={styles.card_title}>Стандартный</h2>
          <ul className={styles.card_features}>
            <li>5 СЛАЙДОВ</li>
            <li>ИНФОГРАФИКА</li>
            <li>ОБРАБОТКА ФОТО</li>
            <li>ПРЕМИУМ ДИЗАЙН</li>
            <li>СРОК 2 - 3 ДНЯ</li>
          </ul>
          <div className={styles.price}>2 990</div>
          <button className={styles.card_button}>Заказать в telegram</button>
        </div>
        <div className={`${styles.card} ${styles.card_gold}`}>
          <h2 className={styles.card_title}>Полный</h2>
          <ul className={styles.card_features}>
            <li>7 СЛАЙДОВ</li>
            <li>ИНФОГРАФИКА</li>
            <li>ОБРАБОТКА ФОТО</li>
            <li>ПРЕМИУМ ДИЗАЙН</li>
            <li>СРОК 2 - 3 ДНЯ</li>
          </ul>
          <div className={styles.price}>4 990</div>
          <button className={styles.card_button}>Заказать в telegram</button>
        </div>
      </div>
    </section>
  );
}
