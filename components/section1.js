import { Element, Link as ScrollLink } from "react-scroll";
import styles from "../styles/section1.module.css";

export function Section1() {
  return (
    <Element name="section1" id="main">
      <section className={styles.container}>
        <div className={styles.fon} />
        <div className={styles.bg}>
          <div className={styles.bg2} />
          <div className={styles.bg_card} />
          <div className={styles.bg1} />
          <div className={styles.bg_text} />
        </div>
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
            <ScrollLink
              href="#portfolio"
              to={"section3"}
              smooth={true}
              duration={500}
            >
              <button className={styles.button1}>Смотреть портфолио</button>
            </ScrollLink>
            <a href="https://t.me/scrooge_tg" target="_blank" rel="noreferrer">
              <button className={styles.button2}>Заказать в telegram</button>
            </a>
          </div>
        </div>
      </section>
    </Element>
  );
}
