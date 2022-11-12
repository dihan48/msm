import styles from "../styles/section1.module.css";

export function Section1() {
  return (
    <section className={styles.container}>
      <div className={styles.bg2} />
      <div className={styles.bg_card} />
      <div className={styles.bg1} />
      <div className={styles.bg_text} />
      <div className={styles.content}>
        <h1 className={styles.title}>Продающие карточки для маркетплейсов</h1>
        <div className={styles.marketplaces}>
          <h2 className={styles.marketplace1}>Wildberries</h2>
          <h2 className={styles.marketplace2}>Ozon</h2>
        </div>
        <h4 className={styles.text}>
          Создаем стильные карточки товаров, способные{" "}
          <b className={styles.text_bold}>кратно увеличить продажи</b>
        </h4>
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.feature_value}>300+</div>
            <div className={styles.feature_text}>выполненных карточек</div>
          </div>
          <div className={styles.feature}>
            <div className={styles.feature_value}>20</div>
            <div className={styles.feature_text}>разных категорий</div>
          </div>
          <button className={styles.button1}>Смотреть портфолио</button>
          <button className={styles.button2}>Заказать в telegram</button>
        </div>
      </div>
    </section>
  );
}
