import styles from "../styles/section2.module.css";

export function Section2() {
  return (
    <section className={styles.container}>
      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.feature_title}>Результат</div>
          <div className={styles.feature_text}>
            Труд помноженый на профессионалазим гарантирует качество и
            надежность
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.feature_title}>Отзывы</div>
          <div className={styles.feature_text2}>
            Восторженные{" "}
            <a href="#" className={styles.feature_link}>
              отзывы
            </a>{" "}
            заказчиков говорят сами за себя
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.feature_title}>Гарантия</div>
          <div className={styles.feature_text}>
            99% успешно выполненых работ,{" "}
            <span className={styles.feature_text_gray}>1% - вернем деньги</span>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.feature_title}>Портфолио</div>
          <div className={styles.feature_text3}>
            В котором ты можешь найти примеры дизайна на свой товар
          </div>
        </div>
      </div>
    </section>
  );
}
